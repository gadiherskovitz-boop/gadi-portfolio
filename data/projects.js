window.PROJECTS = [
  {
    "id": "beacon",
    "title": "Beacon",
    "description": "When a cyber incident hits the news, the window to start a relevant sales conversation closes fast — and most teams miss it. Beacon monitors supply-chain and Magecart attacks, then turns each incident into outreach: ICP account lists, email sequences, and cold-call scripts. Built for a company sales motion, with HubSpot and Cognism scaffolded for CRM updates and contact discovery (not fully wired in the end). Shipped with Claude Code and Railway.",
    "tools": [
      "Claude Code",
      "Railway",
      "HubSpot",
      "Cognism",
      "GitHub"
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
    "description": "Pipeline forecasts often rest on CRM stage and salesperson vibes, which hides real risk until it's late. This Base44 prototype scores deals from qualitative and quantitative signals — learning what winning deals share, scanning Gong-style call evidence against a question set, and surfacing gaps — with HubSpot as the intended CRM source of truth. Gong and CRM connections were part of the design; the working build focused on the product concept in Base44.",
    "tools": [
      "Base44",
      "HubSpot",
      "Gong",
      "GitHub"
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
    "description": "After making aliyah, I needed Hebrew practice that stuck to real language — not random flashcard decks. Ben Yehuda lets me paste real text, build a word library with translations and audio, then drill with smart testing and on-demand passages. First pass was Claude Code + Vercel + Supabase; I used Claude to write a Lovable prompt and rebuilt it there — Lovable is the version I doubled down on.",
    "tools": [
      "Lovable",
      "GitHub"
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
    "description": "Instagram finance posts move markets in people's heads, but the claims are hard to check and easy to forget. This tool pastes a reel or post, extracts the claims, researches them, and scores what holds up — plus stock profiles and account track records over time. Built end-to-end with Claude Code; Whisper for transcription, yt-dlp for reel ingest, yfinance for market scoring.",
    "tools": [
      "Claude Code",
      "OpenAI Whisper",
      "yt-dlp",
      "yfinance",
      "GitHub"
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
    "description": "At a conference booth, badge scans pile up — but reps rarely get instant context on who just walked up or what to do next. This GTM engineering experiment turns a scan into a full handoff: capture the visitor, categorize the company, Slack a one-sentence recommended action, update HubSpot, and route follow-up. Orchestrated in Make; built and iterated with Claude Code and Postman.",
    "tools": [
      "Claude Code",
      "Make",
      "Slack",
      "HubSpot",
      "Postman",
      "GitHub"
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
    "description": "Public OSHA filings can signal real buying moments, but they don't show up in a sales workflow on their own. This GTM practice system watches inspections and violations, cleans company names, tiers accounts, Slack-alerts the team, enriches in Clay, and updates HubSpot with notes and tasks by tier. Built with Claude Code.",
    "tools": [
      "HubSpot",
      "Slack",
      "Clay",
      "Claude Code",
      "GitHub"
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
    "description": "Residents see what should change in their city every day, but there's rarely a simple place to share ideas, rank them, or report broken infrastructure. If I Was Mayor is a multilingual civic community for Israeli cities — share and rank local ideas, report issues, and surface priorities from the people who live there.",
    "tools": [
      "Codex",
      "ChatGPT Sites",
      "GitHub"
    ],
    "images": [
      "assets/mayor-1.png"
    ],
    "placeholder": false
  },
  {
    "id": "gmail-assistant",
    "title": "Gmail Assistant",
    "description": "Important mail gets buried under noise, and junk is either ignored forever or deleted too fast. This Gmail assistant reviews incoming email daily, files it into categories, keeps action items visible in the inbox, holds junk for a seven-day review before Trash, and emails me a 7am brief of the last 24 hours — actions, deadlines, and what was filed or removed.",
    "tools": [
      "Codex",
      "GitHub"
    ],
    "images": [
      "assets/gmail-assistant-1.png"
    ],
    "placeholder": false
  },
  {
    "id": "this-portfolio",
    "title": "This Portfolio",
    "description": "I needed one clean place to show what I've built for job applications — without buying a domain or spending weeks on the site itself. This website was built end-to-end with Grok Bot. One prompt got me 95% of the way there. Last 5% was just providing the images, tools per project and minor amendments.",
    "tools": [
      "Grok Bot",
      "GitHub"
    ],
    "images": [
      "assets/portfolio-1.png"
    ],
    "placeholder": false
  }
];
window.PORTFOLIO_PROJECTS = window.PROJECTS;
