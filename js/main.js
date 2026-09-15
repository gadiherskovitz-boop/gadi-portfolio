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

  function renderProject(project) {
    var article = el("article", "project");
    article.id = project.id;

    var carouselRoot = document.createElement("div");
    new Carousel(carouselRoot, project.images || [], project.title);

    var body = el("div", "project-body");
    var titleRow = el("div", "project-title-row");
    titleRow.appendChild(el("h3", "", { text: project.title }));

    var desc = el("p", "project-desc", { text: project.description });
    var tags = el("ul", "tags");
    (project.tools || []).forEach(function (tool) {
      tags.appendChild(el("li", "", { text: tool }));
    });

    body.appendChild(titleRow);
    body.appendChild(desc);
    body.appendChild(tags);

    article.appendChild(carouselRoot);
    article.appendChild(body);
    return article;
  }

  function init() {
    var list = document.getElementById("project-list");
    var projects = window.PROJECTS || [];
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
