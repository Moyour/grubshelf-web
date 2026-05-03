Create a new GrubShelf newsletter issue and push it to Buttondown as a draft.

User input: $ARGUMENTS

## Steps

1. Read the template at `emails/newsletter-template.html` to understand the HTML structure and styling.
2. Read `emails/sample-first-issue.html` as a reference for how a complete issue looks (section structure, feature cards, recipe cards, tip boxes, stats, etc.).
3. Based on the user's input, create a new newsletter HTML file. Use the same table-based email structure, inline styles, and design tokens from the sample issue:
   - Colors: green `#085041`, amber `#E8A020`, cream `#F7F5F0`, warm-white `#FFFDF9`, text `#1A1A1A` / `#5A5A5A`
   - Header: app icon (56px) + "grubshelf" text + date subtitle
   - Hero: amber badge + headline + subtitle
   - Body sections: section labels, feature cards, recipe cards, tip boxes, stats as needed
   - CTA button linking to grubshelf.app
   - Subscribe form section with `{{ subscribe_form }}`
   - Footer: app icon (40px) + "grubshelf" text + links + unsubscribe
   - All `<a>` tags MUST have explicit `color` set in their inline style (email clients default to blue otherwise)
   - Logo image: `https://grubshelf.app/brand/grubshelf-app-icon-1024.png`
4. Save the file as `emails/issue-YYYY-MM.html` using the current month/year.
5. Run `node scripts/draft-newsletter.mjs emails/issue-YYYY-MM.html "Subject line"` to push it to Buttondown as a draft.
6. Tell the user the draft is ready to review at https://buttondown.com/emails.
