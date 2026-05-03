#!/usr/bin/env node
/**
 * Push a newsletter HTML file to Buttondown as a draft.
 *
 * Usage:
 *   node scripts/draft-newsletter.mjs <html-file> "Subject line here"
 *
 * Example:
 *   node scripts/draft-newsletter.mjs emails/sample-first-issue.html "Spring Into Smarter Meal Planning"
 *
 * Requires BUTTONDOWN_API_KEY in .env.local
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Load .env.local ──
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w]+)\s*=\s*(.*)$/);
    if (match && match[1]) process.env[match[1]] = match[2].trim();
  }
}

const API_KEY = process.env.BUTTONDOWN_API_KEY;
if (!API_KEY) {
  console.error("Error: BUTTONDOWN_API_KEY not found in .env.local");
  process.exit(1);
}

// ── Args ──
const [, , filePath, subject] = process.argv;

if (!filePath || !subject) {
  console.error("Usage: node scripts/draft-newsletter.mjs <html-file> \"Subject line\"");
  process.exit(1);
}

const fullPath = resolve(root, filePath);
if (!existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  process.exit(1);
}

const html = readFileSync(fullPath, "utf8");

// ── Create draft on Buttondown ──
const res = await fetch("https://api.buttondown.com/v1/emails", {
  method: "POST",
  headers: {
    Authorization: `Token ${API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subject,
    body: html,
    status: "draft",
  }),
});

const data = await res.json();

if (res.ok) {
  console.log(`Draft created successfully!`);
  console.log(`ID: ${data.id}`);
  console.log(`Subject: ${data.subject}`);
  console.log(`\nReview and send at: https://buttondown.com/emails`);
} else {
  console.error(`Failed to create draft (${res.status}):`);
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}
