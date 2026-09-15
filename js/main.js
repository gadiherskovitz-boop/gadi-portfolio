(function () {
  "use strict";

  var CHEVRON_LEFT =
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M10 3.5 5.5 8 10 12.5"/></svg>';
  var CHEVRON_RIGHT =
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M6 3.5 10.5 8 6 12.5"/></svg>';

  function el(tag, className, attrs) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "text") node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    return node;
  }

  function Carousel(root, images, title) {
    this.root = root;
    this.images = images;
    this.title = title;
    this.index = 0;
    this.pointerStartX = null;
    this.build();
    this.bind();
    this.go(0, true);
  }

  Carousel.prototype.build = function () {
    var self = this;
    this.root.className = "carousel";
    this.root.setAttribute("role", "region");
    this.root.setAttribute("aria-roledescription", "carousel");
    this.root.setAttribute("aria-label", this.title + " images");
    this.root.tabIndex = 0;

    this.track = el("div", "carousel-track");
    this.slides = this.images.map(function (src, i) {
      var slide = el("div", "carousel-slide");
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", i + 1 + " of " + self.images.length);
      var img = document.createElement("img");
      img.src = src;
      img.alt = self.title + " — view " + (i + 1);
      img.draggable = false;
      slide.appendChild(img);
      self.track.appendChild(slide);
      return slide;
    });

    this.prevBtn = el("button", "carousel-btn prev", {
      type: "button",
      "aria-label": "Previous image",
    });
    this.prevBtn.innerHTML = CHEVRON_LEFT;

    this.nextBtn = el("button", "carousel-btn next", {
      type: "button",
      "aria-label": "Next image",
    });
    this.nextBtn.innerHTML = CHEVRON_RIGHT;

    this.dots = el("ul", "carousel-dots");
    this.dotButtons = this.images.map(function (_, i) {
      var li = document.createElement("li");
      var btn = el("button", "", {
        type: "button",
        "aria-label": "Show image " + (i + 1),
      });
      li.appendChild(btn);
      self.dots.appendChild(li);
      return btn;
    });

    this.status = el("div", "visually-hidden");
    this.status.setAttribute("aria-live", "polite");
    this.status.setAttribute("aria-atomic", "true");

    this.root.appendChild(this.track);
    this.root.appendChild(this.prevBtn);
    this.root.appendChild(this.nextBtn);
    this.root.appendChild(this.dots);
    this.root.appendChild(this.status);

    if (this.images.length < 2) {
      this.prevBtn.hidden = true;
      this.nextBtn.hidden = true;
      this.dots.hidden = true;
    }
  };

  Carousel.prototype.go = function (i, silent) {
    var n = this.images.length;
    if (!n) return;
    this.index = ((i % n) + n) % n;
    this.track.style.transform = "translateX(" + -this.index * 100 + "%)";
    this.dotButtons.forEach(function (btn, idx) {
      if (idx === this.index) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    }, this);
    this.slides.forEach(function (slide, idx) {
      slide.setAttribute("aria-hidden", idx === this.index ? "false" : "true");
    }, this);
    if (!silent) {
      this.status.textContent = this.title + " image " + (this.index + 1) + " of " + n;
    }
  };

  Carousel.prototype.bind = function () {
    var self = this;
    this.prevBtn.addEventListener("click", function () {
      self.go(self.index - 1);
    });
    this.nextBtn.addEventListener("click", function () {
      self.go(self.index + 1);
    });
    this.dotButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        self.go(i);
      });
    });
    this.root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        self.go(self.index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        self.go(self.index + 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        self.go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        self.go(self.images.length - 1);
      }
    });

    this.root.addEventListener("pointerdown", function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest("button")) return;
      self.pointerStartX = e.clientX;
      try {
        self.root.setPointerCapture(e.pointerId);
      } catch (err) {}
    });
    this.root.addEventListener("pointerup", function (e) {
      if (self.pointerStartX == null) return;
      var dx = e.clientX - self.pointerStartX;
      self.pointerStartX = null;
      if (Math.abs(dx) > 40) {
        self.go(self.index + (dx < 0 ? 1 : -1));
      }
    });
    this.root.addEventListener("pointercancel", function () {
      self.pointerStartX = null;
    });
  };


  var TOOL_BRANDS = {
    "Claude Code": { color: "#D97757", icon: "anthropic", letter: "C" },
    "Claude": { color: "#D97757", icon: "anthropic", letter: "C" },
    "Railway": { color: "#0B0D0E", icon: "railway", letter: "R" },
    "HubSpot": { color: "#FF7A59", icon: "hubspot", letter: "H" },
    "Cognism": { color: "#5B4DFF", icon: null, letter: "C" },
    "Base44": { color: "#3B82F6", icon: null, letter: "B" },
    "Gong": { color: "#DE35FF", icon: null, letter: "G" },
    "Lovable": { color: "#FF6B8A", icon: null, letter: "L" },
    "Vercel": { color: "#000000", icon: "vercel", letter: "V" },
    "Supabase": { color: "#3ECF8E", icon: "supabase", letter: "S" },
    "GitHub": { color: "#181717", icon: "github", letter: "G" },
    "Grok Bot": { color: "#1A1A1A", icon: null, letter: "G" },
    "Slack": { color: "#4A154B", icon: "slack", letter: "S" },
    "Clay": { color: "#E8A317", icon: null, letter: "C" },
    "CRM": { color: "#64748B", icon: null, letter: "C" },
    "HTML/CSS/JS": { color: "#E34F26", icon: "html5", letter: "H" },
    "Automation": { color: "#0EA5E9", icon: null, letter: "A" },
    "Web app": { color: "#6366F1", icon: null, letter: "W" },
    "OSHA data": { color: "#B45309", icon: null, letter: "O" },
    "Web monitoring": { color: "#0284C7", icon: null, letter: "W" },
    "Web research": { color: "#0284C7", icon: null, letter: "W" },
    "Instagram": { color: "#E4405F", icon: "instagram", letter: "I" },
    "TTS": { color: "#8B5CF6", icon: null, letter: "T" },
    "OpenAI": { color: "#10A37F", icon: "openai", letter: "O" },
    "Cursor": { color: "#000000", icon: null, letter: "C" },
    "Playwright": { color: "#2EAD33", icon: "playwright", letter: "P" },
    "Figma": { color: "#F24E1E", icon: "figma", letter: "F" },
    "Python": { color: "#3776AB", icon: "python", letter: "P" },
    "FastAPI": { color: "#009688", icon: "fastapi", letter: "F" },
    "Notion": { color: "#000000", icon: "notion", letter: "N" },
    "ChatGPT": { color: "#10A37F", icon: "openai", letter: "C" },
    "Apps Script": { color: "#4285F4", icon: "googlescript", letter: "A" },
    "Airtable": { color: "#18BFFF", icon: "airtable", letter: "A" }
  };

  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16)
    };
  }

  function toolBrand(name) {
    return TOOL_BRANDS[name] || { color: "#5a5a5a", icon: null, letter: (name || "?").charAt(0).toUpperCase() };
  }

  function renderToolTag(name, muted) {
    var brand = toolBrand(name);
    var li = document.createElement("li");
    li.className = "tool-tag" + (muted ? " tool-tag-muted" : "");
    var rgb = hexToRgb(brand.color);
    li.style.setProperty("--tool-color", brand.color);
    li.style.setProperty("--tool-rgb", rgb.r + ", " + rgb.g + ", " + rgb.b);

    var mark = document.createElement("span");
    mark.className = "tool-mark";
    if (brand.icon && !muted) {
      var img = document.createElement("img");
      img.src = "https://cdn.simpleicons.org/" + brand.icon + "/" + brand.color.replace("#", "");
      img.alt = "";
      img.width = 12;
      img.height = 12;
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";
      img.onerror = function () {
        mark.textContent = brand.letter;
        mark.classList.add("tool-mark-letter");
      };
      mark.appendChild(img);
    } else {
      mark.textContent = brand.letter;
      mark.classList.add("tool-mark-letter");
    }

    var label = document.createElement("span");
    label.className = "tool-label";
    label.textContent = name;

    li.appendChild(mark);
    li.appendChild(label);
    return li;
  }

  function renderProject(project) {
    var article = el("article", "project");
    article.id = project.id;

    var carouselRoot = document.createElement("div");
    new Carousel(carouselRoot, project.images || [], project.title);

    var body = el("div", "project-body");
    var titleRow = el("div", "project-title-row");
    titleRow.appendChild(el("h3", "", { text: project.title }));

    var desc = el("p", "project-desc", { text: project.description });

    var toolsWrap = el("div", "tools-wrap");
    var tags = el("ul", "tags");
    (project.tools || []).forEach(function (tool) {
      tags.appendChild(renderToolTag(tool, false));
    });
    toolsWrap.appendChild(tags);

    if (project.toolsFirstPass && project.toolsFirstPass.length) {
      var firstPass = el("div", "tools-first-pass");
      firstPass.appendChild(el("span", "tools-label", { text: "First pass" }));
      var tagsAlt = el("ul", "tags");
      project.toolsFirstPass.forEach(function (tool) {
        tagsAlt.appendChild(renderToolTag(tool, true));
      });
      firstPass.appendChild(tagsAlt);
      toolsWrap.appendChild(firstPass);
    }

    body.appendChild(titleRow);
    body.appendChild(desc);
    body.appendChild(toolsWrap);

    article.appendChild(carouselRoot);
    article.appendChild(body);
    return article;
  }

  function init() {
    var list = document.getElementById("project-list");
    var projects = window.PROJECTS || window.PORTFOLIO_PROJECTS || [];
    if (!list) return;
    if (!projects.length) {
      list.textContent = "No projects yet.";
      return;
    }
    var frag = document.createDocumentFragment();
    projects.forEach(function (p) {
      frag.appendChild(renderProject(p));
    });
    list.appendChild(frag);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
