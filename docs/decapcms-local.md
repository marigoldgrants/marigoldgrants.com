# Decap CMS (Local Development)

## Prereqs
- Hugo installed (`hugo version`)
- Netlify CLI installed (`netlify version`)

## One-time setup
1. From the repo root, link the site:
   - `netlify link`

## Run locally
1. Start the Netlify dev server:
   - `netlify dev`
2. Open:
   - `http://localhost:8888/admin/`

`netlify dev` proxies the Hugo server and provides the Netlify services Decap expects (Identity / Git Gateway) while you’re working locally.

## Deploy setup (Netlify UI)
In your Netlify site settings:
- Enable **Identity**
- Enable **Git Gateway**

