window.PROJECTS = [
  {
    "id": "beacon",
    "title": "Beacon",
    "description": "Sales-trigger system that monitors supply-chain and Magecart cyber attacks in the news, then turns each incident into outreach. Surfaces relevant accounts, drafts email sequences and cold-call scripts, and was built so HubSpot and Cognism could plug in for CRM updates and contact discovery — the integrations were scaffolded but not fully wired up in the end. Shipped with Claude Code and Railway.",
    "tools": [
      "Claude Code",
      "Railway",
      "HubSpot",
      "Cognism"
    ],
    "images": [
      "assets/beacon-1.png",
      "assets/beacon-2.png",
      "assets/beacon-3.png"
    ],
    "placeholder": false
  },
  {
    "id": "deal-forecast",
    "title": "Deal Forecast Predictor",
    "description": "A conceptual Base44 prototype for scoring pipeline deals and predicting closed-won probability from qualitative and quantitative signals, rather than just CRM stage and salesperson's vibes. The idea was to learn what winning deals share, scan Gong call transcripts against a question set, score confidence, and surface gaps and risk, with HubSpot as the CRM source of truth. Gong and CRM connections were part of the design; the working build focused on the product concept in Base44.",
    "tools": [
      "Base44",
      "HubSpot",
      "Gong"
    ],
    "images": [
      "assets/forecast-1.png",
      "assets/forecast-2.png",
      "assets/forecast-3.png",
      "assets/forecast-4.png"
    ],
    "placeholder": false
  },
  {
    "id": "ben-yehuda",
    "title": "Ben Yehuda",
    "description": "Hebrew practice app: paste real text, build a word library with translations and audio, then drill with smart testing and on-demand passages. First pass was Claude Code + Vercel + Supabase; I used Claude to write a Lovable prompt and rebuilt it there — Lovable is the version I doubled down on.",
    "tools": [
      "Lovable"
    ],
    "images": [
      "assets/hebrew-2.png",
      "assets/hebrew-1.png",
      "assets/hebrew-3.png",
      "assets/hebrew-4.png"
    ],
    "placeholder": false,
    "toolsFirstPass": [
      "Claude Code",
      "Vercel",
      "Supabase"
    ]
  },
  {
    "id": "investment-claims",
    "title": "Investment Claims Researcher",
    "description": "Paste an Instagram reel or post about stocks, extract the claims, research them, and get a clear read on what holds up — plus stock profiles and account track records over time (performance since first mention, average return by caller). Built end-to-end with Claude Code; Whisper for transcription, yt-dlp for reel ingest, yfinance for market scoring.",
    "tools": [
      "Claude Code",
      "OpenAI Whisper",
      "yt-dlp",
      "yfinance"
    ],
    "images": [
      "assets/claims-1.png",
      "assets/claims-2.png",
      "assets/claims-3.png"
    ],
    "placeholder": false
  },
  {
    "id": "booth-visitor",
    "title": "Conference Booth Workflow",
    "description": "Badge scan at the booth triggers a full handoff: capture the visitor, categorize the company, post a Slack alert with a one-sentence recommended action, update HubSpot, and route the contact into the right follow-up path. Orchestrated in Make; built and iterated with Claude Code and Postman.",
    "tools": [
      "Claude Code",
      "Make",
      "Slack",
      "HubSpot",
      "Postman"
    ],
    "images": [
      "assets/booth-2.png",
      "assets/booth-1.png"
    ],
    "placeholder": false
  },
  {
    "id": "osha-trigger",
    "title": "OSHA Sales Trigger",
    "description": "Certain OSHA inspections and violations kick off a sales workflow: clean company names, score into tiers, pull history, Slack a dedicated channel, enrich company and contacts in Clay, update HubSpot with account notes and tasks, and route follow-up by tier. Built with Claude Code.",
    "tools": [
      "HubSpot",
      "Slack",
      "Clay",
      "Claude Code"
    ],
    "images": [
      "assets/osha-1.png",
      "assets/osha-2.png"
    ],
    "placeholder": false
  },
  {
    "id": "if-i-was-mayor",
    "title": "If I Was Mayor",
    "description": "A multilingual civic community where Israeli residents share and rank ideas for improving their cities, and report local infrastructure problems — so local priorities surface from the people who live there.",
    "tools": [
      "Lovable",
      "Web app"
    ],
    "images": [
      "assets/mayor-1.svg",
      "assets/mayor-2.svg",
      "assets/mayor-3.svg"
    ],
    "placeholder": false
  },
  {
    "id": "this-portfolio",
    "title": "This Portfolio (Grok Bot)",
    "description": "This website — an end-to-end personal portfolio built with Grok Bot for job applications: structure, content, mockups, and deployment wiring, shipped as a clean static site.",
    "tools": [
      "Grok Bot",
      "GitHub",
      "HTML/CSS/JS"
    ],
    "images": [
      "assets/portfolio-1.svg",
      "assets/portfolio-2.svg"
    ],
    "placeholder": false
  }
];
window.PORTFOLIO_PROJECTS = window.PROJECTS;
