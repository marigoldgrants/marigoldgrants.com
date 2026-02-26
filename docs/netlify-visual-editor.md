# Netlify Visual Editor (Schema)

This site uses Netlify Visual Editor (Stackbit). The content schema lives in `stackbit.config.ts`.

## Content mapping
- Home: `content/_index.md`
- About: `content/about/_index.md`
- Services page: `content/services/_index.md`
- Contact: `content/contact.md`
- Services: `content/services/*.md`
- Team members (currently under About): `content/about/*.md` (excluding `_index.md`)

## One-time Netlify setup (UI)
In your Netlify site:
1. Enable **Visual Editor**
2. Follow the guided “Connect repo / create preview environment” steps

