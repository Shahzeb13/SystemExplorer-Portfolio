import re

with open('code.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

style_match = re.search(r'<style>(.*?)</style>', html_content, re.DOTALL)
style_content = style_match.group(1) if style_match else ""

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write('''@import "tailwindcss";

@theme {
  --color-surface: #0a0a0a;
  --color-background: #050505;
  --color-primary: #ffffff;
  --color-secondary: #a1a1a1;
  --color-outline: #262626;
  --color-accent-glow: rgba(210, 241, 255, 0.4);
  --font-headline: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --radius-default: 0px;
  --radius-full: 9999px;
}

''')
    f.write(style_content)

print("CSS updated successfully.")
