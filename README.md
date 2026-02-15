# Bella Vista Restaurant Website

Static website with embedded n8n chat widget.

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## n8n chat config
- Webhook: `https://n8n.hekatomba.com.pl/webhook/7d4ea505-0ccb-4dff-8b0b-147bff870bdd/chat`
- Streaming: disabled in widget (`enableStreaming: false`)
- Footer removed via `i18n.en.footer = ''`

If the widget shows a "Powered by" line you can't control, it may be enforced by the hosted build. A CSS fallback is included to hide footer nodes. 
