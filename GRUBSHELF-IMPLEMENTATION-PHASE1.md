# GrubShelf — Brand Implementation Guide (Phase 1)

> **Purpose**: This document is a detailed instruction set for revamping the existing GrubShelf iOS app with its new brand identity. Feed this entire file to Cursor as project context. Follow it section by section, in order. Do not skip steps or improvise values — every hex code, font name, and token is specified exactly.
>
> **Scope — Phase 1**: Colour system, typography, and brand voice (copy/microcopy).
>
> **Tech stack**: Swift / SwiftUI, iOS 16+, Supabase backend.

---

## Table of contents

1. [Before you start](#1-before-you-start)
2. [Colour system](#2-colour-system)
3. [Typography system](#3-typography-system)
4. [Brand voice & microcopy](#4-brand-voice--microcopy)
5. [Implementation checklist](#5-implementation-checklist)

---

## 1. Before you start

### 1.1 Create the brand token files first

Before touching any screen or view, create these two files in your project. Every UI element in the app will reference these files. This is non-negotiable — do not hardcode hex values anywhere else in the codebase.

Create the following file structure:

```
Sources/
  Design/
    BrandColors.swift      ← All colour tokens
    BrandTypography.swift  ← All font definitions
```

### 1.2 Remove all existing colour and font hardcoding

Before adding new tokens, search the entire codebase for:

- Any hardcoded `Color(hex:` or `Color(red:` or `UIColor(` calls
- Any hardcoded `.font(.system(` calls
- Any references to `Color.green`, `Color.orange`, `Color.blue` or any system colours used for brand elements (keep system colours only where iOS requires them, e.g. destructive actions in swipe-to-delete)
- Any inline hex strings like `"#4CAF50"` or `"#FF9800"`

Replace every single one with a reference to the brand tokens you're about to create. Do not leave even one hardcoded value behind. Search with regex: `#[0-9A-Fa-f]{6}` to catch strays.

### 1.3 Asset catalog setup

In your `Assets.xcassets`, create a new folder called `Brand`. Inside it, create colour sets for each semantic token listed in section 2.3. Each colour set must have both "Any Appearance" and "Dark" variants configured.

---

## 2. Colour system

### 2.1 Core palette — raw values

These are the raw hex values. They get used inside the token definitions, never directly in views.

#### Teal ramp

| Stop | Hex       | Name       |
|------|-----------|------------|
| 900  | `#04342C` | teal-900   |
| 800  | `#085041` | teal-800   |
| 700  | `#0A4D3E` | teal-700   |
| 600  | `#0F6E56` | teal-600   |
| 500  | `#1D9E75` | teal-500   |
| 400  | `#2AB88A` | teal-400   |
| 300  | `#5DCAA5` | teal-300   |
| 200  | `#9FE1CB` | teal-200   |
| 100  | `#C8EFE0` | teal-100   |
| 50   | `#E1F5EE` | teal-50    |

#### Amber ramp

| Stop | Hex       | Name       |
|------|-----------|------------|
| 900  | `#412402` | amber-900  |
| 800  | `#633806` | amber-800  |
| 700  | `#854F0B` | amber-700  |
| 600  | `#BA7517` | amber-600  |
| 500  | `#E8A020` | amber-500  |
| 400  | `#F0B442` | amber-400  |
| 300  | `#FAC775` | amber-300  |
| 200  | `#FDDEA0` | amber-200  |
| 100  | `#FAEEDA` | amber-100  |
| 50   | `#FDF6EA` | amber-50   |

#### Neutral ramp

| Stop | Hex       | Name         |
|------|-----------|--------------|
| 900  | `#1A1A18` | neutral-900  |
| 800  | `#2C2C2A` | neutral-800  |
| 700  | `#444441` | neutral-700  |
| 600  | `#5F5E5A` | neutral-600  |
| 500  | `#888780` | neutral-500  |
| 400  | `#B4B2A9` | neutral-400  |
| 300  | `#D3D1C7` | neutral-300  |
| 200  | `#E8E6DE` | neutral-200  |
| 100  | `#F2F0EA` | neutral-100  |
| 50   | `#F7F5F0` | neutral-50   |

#### Status colours

| Purpose   | Hex       | Usage                                    |
|-----------|-----------|------------------------------------------|
| Success   | `#1D9E75` | Teal 500 — confirmations, positive state |
| Warning   | `#E8A020` | Amber 500 — expiring soon, attention     |
| Danger    | `#E24B4A` | Red — expired, destructive, errors       |
| Info      | `#378ADD` | Blue — informational, neutral alerts     |

#### Status background colours (for badges, toasts, banners)

| Purpose           | Background | Text/Icon  |
|-------------------|------------|------------|
| Success surface   | `#E1F5EE`  | `#085041`  |
| Warning surface   | `#FAEEDA`  | `#854F0B`  |
| Danger surface    | `#FCEBEB`  | `#791F1F`  |
| Info surface      | `#E6F1FB`  | `#0C447C`  |

---

### 2.2 Semantic tokens — light and dark mode

These are the tokens your views actually reference. Each token has a light mode value and a dark mode value. Implement these as a SwiftUI `Color` extension or Asset Catalog colour sets — your choice, but be consistent. Do not mix approaches.

| Token name              | Light mode  | Dark mode   | Usage                                          |
|-------------------------|-------------|-------------|-------------------------------------------------|
| `background`            | `#F7F5F0`   | `#04342C`   | Root view background, full-screen bg            |
| `surface`               | `#FFFFFF`   | `#085041`   | Cards, sheets, modals, list rows                |
| `surfaceSecondary`      | `#F2F0EA`   | `#04342C`   | Grouped table bg, inset sections                |
| `textPrimary`           | `#1A1A18`   | `#E1F5EE`   | Headings, body text, primary labels             |
| `textSecondary`         | `#5F5E5A`   | `#5DCAA5`   | Subtitles, metadata, timestamps                 |
| `textTertiary`          | `#888780`   | `#2AB88A`   | Placeholders, hints, disabled text              |
| `textInverse`           | `#E1F5EE`   | `#04342C`   | Text on primary buttons, text on filled bg      |
| `border`                | `#E8E6DE`   | `#0F6E56`   | Card borders, dividers, separators              |
| `borderSecondary`       | `#D3D1C7`   | `#1D9E75`   | Input field borders, hover states               |
| `brandPrimary`          | `#0A4D3E`   | `#E1F5EE`   | Primary buttons, active tab, brand emphasis      |
| `brandPrimaryBg`        | `#0A4D3E`   | `#0A4D3E`   | Primary button background (same in both modes)  |
| `accent`                | `#E8A020`   | `#E8A020`   | CTA buttons, shelf underline, highlights — SAME in both modes |
| `accentText`            | `#412402`   | `#412402`   | Text on accent-coloured surfaces                |
| `accentSurface`         | `#FAEEDA`   | `#412402`   | Accent-tinted card backgrounds                  |
| `success`               | `#1D9E75`   | `#5DCAA5`   | Success icons, positive indicators              |
| `successSurface`        | `#E1F5EE`   | rgba(29,158,117,0.15) | Success toast/badge backgrounds     |
| `warning`               | `#BA7517`   | `#FAC775`   | Warning icons, expiring-soon indicators         |
| `warningSurface`        | `#FAEEDA`   | rgba(232,160,32,0.12) | Warning toast/badge backgrounds     |
| `danger`                | `#A32D2D`   | `#F09595`   | Error text, expired badges, destructive buttons |
| `dangerSurface`         | `#FCEBEB`   | rgba(226,75,74,0.12) | Error toast/badge backgrounds        |
| `navActive`             | `#0A4D3E`   | `#E1F5EE`   | Active tab bar icon + label                     |
| `navInactive`           | `#B4B2A9`   | `#0F6E56`   | Inactive tab bar icon + label                   |
| `inputBackground`       | `#FFFFFF`   | `#04342C`   | Text field background                           |
| `inputBorder`           | `#D3D1C7`   | `#0F6E56`   | Text field border (default state)               |
| `inputBorderFocus`      | `#1D9E75`   | `#5DCAA5`   | Text field border (focused state)               |
| `inputPlaceholder`      | `#B4B2A9`   | `#0F6E56`   | Placeholder text                                |
| `shimmer`               | `#E8E6DE`   | `#0F6E56`   | Skeleton loading animation colour               |

---

### 2.3 Swift implementation — BrandColors.swift

Create this file exactly as written. Do not rename tokens, do not change values, do not add tokens not listed here.

```swift
import SwiftUI

// MARK: - Hex initializer
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r, g, b: UInt64
        (r, g, b) = ((int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF)
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: 1
        )
    }
}

// MARK: - Raw palette
struct BrandPalette {
    struct Teal {
        static let s900 = Color(hex: "04342C")
        static let s800 = Color(hex: "085041")
        static let s700 = Color(hex: "0A4D3E")
        static let s600 = Color(hex: "0F6E56")
        static let s500 = Color(hex: "1D9E75")
        static let s400 = Color(hex: "2AB88A")
        static let s300 = Color(hex: "5DCAA5")
        static let s200 = Color(hex: "9FE1CB")
        static let s100 = Color(hex: "C8EFE0")
        static let s50  = Color(hex: "E1F5EE")
    }
    struct Amber {
        static let s900 = Color(hex: "412402")
        static let s800 = Color(hex: "633806")
        static let s700 = Color(hex: "854F0B")
        static let s600 = Color(hex: "BA7517")
        static let s500 = Color(hex: "E8A020")
        static let s400 = Color(hex: "F0B442")
        static let s300 = Color(hex: "FAC775")
        static let s200 = Color(hex: "FDDEA0")
        static let s100 = Color(hex: "FAEEDA")
        static let s50  = Color(hex: "FDF6EA")
    }
    struct Neutral {
        static let s900 = Color(hex: "1A1A18")
        static let s800 = Color(hex: "2C2C2A")
        static let s700 = Color(hex: "444441")
        static let s600 = Color(hex: "5F5E5A")
        static let s500 = Color(hex: "888780")
        static let s400 = Color(hex: "B4B2A9")
        static let s300 = Color(hex: "D3D1C7")
        static let s200 = Color(hex: "E8E6DE")
        static let s100 = Color(hex: "F2F0EA")
        static let s50  = Color(hex: "F7F5F0")
    }
}

// MARK: - Semantic tokens (adapt to color scheme)
extension Color {
    static var gsBackground: Color {
        Color("background") // Points to Asset Catalog colour set
    }
    static var gsSurface: Color {
        Color("surface")
    }
    // ... repeat for every token in the table above
}
```

**Important**: The approach above uses Asset Catalog colour sets so light/dark mode switching is handled automatically by iOS. For each token in the table in section 2.2, create a matching colour set in `Assets.xcassets/Brand/` with the "Any Appearance" value set to the light mode hex and the "Dark" value set to the dark mode hex.

**Alternative approach (code-only, no Asset Catalog)**:

```swift
extension Color {
    static var gsBackground: Color {
        Color(UIColor { traits in
            traits.userInterfaceStyle == .dark
                ? UIColor(Color(hex: "04342C"))
                : UIColor(Color(hex: "F7F5F0"))
        })
    }
    // Repeat for each token
}
```

Pick one approach. Use it everywhere. Do not mix.

---

### 2.4 Search-and-replace map

When refactoring existing views, use this mapping. If the current codebase uses any of these old values (or similar greens/oranges), replace them with the corresponding GrubShelf token.

| What you might find now         | Replace with              |
|---------------------------------|---------------------------|
| Any green used as primary       | `.gsBackground` or `BrandPalette.Teal.s700` |
| Any orange used as accent       | `.accent` (Amber 500)     |
| `Color.white` as card bg        | `.gsSurface`              |
| `Color(.systemBackground)`      | `.gsBackground`           |
| `Color(.secondarySystemBackground)` | `.gsSurfaceSecondary` |
| `Color(.label)` or `.primary`   | `.gsTextPrimary`          |
| `Color(.secondaryLabel)`        | `.gsTextSecondary`        |
| `Color.gray` for placeholders   | `.gsTextTertiary`         |
| Any red for errors/destructive  | `.gsDanger`               |
| `Color.green` for success       | `.gsSuccess`              |
| `Color(.separator)`             | `.gsBorder`               |

---

### 2.5 Specific component colour mappings

For each component type in the app, here is exactly which token to use where:

#### Buttons

| Button type     | Background           | Text              | Border             |
|-----------------|----------------------|-------------------|--------------------|
| Primary         | `brandPrimaryBg`     | `textInverse`     | none               |
| Secondary       | `transparent`        | `brandPrimary`    | `brandPrimary` 1.5px |
| Accent / CTA    | `accent`             | `accentText`      | none               |
| Destructive     | `dangerSurface`      | `danger`          | none               |
| Disabled        | `border`             | `textTertiary`    | none               |
| Ghost           | `transparent`        | `textSecondary`   | none               |

Corner radius for all buttons: **12px**. Small variant: **10px**.
Padding: **14px vertical, 28px horizontal**. Small: **10px vertical, 20px horizontal**.
Font: **DM Sans SemiBold 15px**. Small: **DM Sans SemiBold 13px**.

#### Cards (pantry items, meal cards, shopping list items)

| Element            | Token              |
|--------------------|--------------------|
| Card background    | `surface`          |
| Card border        | `border` at 1px    |
| Card corner radius | **14px**           |
| Card padding       | **16px vertical, 20px horizontal** |
| Title text         | `textPrimary`      |
| Subtitle/metadata  | `textSecondary`    |
| Quantity values     | `textPrimary` in Space Mono |

#### Status badges on cards

| Status    | Badge background  | Badge text     |
|-----------|-------------------|----------------|
| Fresh     | `successSurface`  | `success`      |
| Stocked   | `accentSurface`   | `warning`      |
| Expiring  | `dangerSurface`   | `danger`       |
| Staple    | `surfaceSecondary`| `textSecondary`|

Badge corner radius: **6px**. Padding: **4px vertical, 10px horizontal**.
Font: **DM Sans SemiBold 11px**.

#### Navigation (tab bar)

| Element            | Token              |
|--------------------|--------------------|
| Tab bar background | `surface`          |
| Active icon+label  | `navActive`        |
| Inactive icon+label| `navInactive`      |
| Top border         | `border` at 0.5px  |

#### Input fields

| State     | Background        | Border             | Text             |
|-----------|-------------------|---------------------|------------------|
| Default   | `inputBackground` | `inputBorder` 1.5px| `textPrimary`    |
| Focused   | `inputBackground` | `inputBorderFocus` 1.5px + 3px shadow at 12% opacity | `textPrimary` |
| Disabled  | `surfaceSecondary`| `border` 1px       | `textTertiary`   |
| Placeholder | —              | —                  | `inputPlaceholder`|

Input corner radius: **12px**. Padding: **14px vertical, 16px horizontal**.

#### Toasts / alerts

| Type      | Background        | Text/icon   | Border           |
|-----------|-------------------|-------------|------------------|
| Success   | `successSurface`  | `success`   | `Teal 200` 1px   |
| Warning   | `warningSurface`  | `warning`   | `Amber 300` 1px  |
| Danger    | `dangerSurface`   | `danger`    | `Red 200` 1px    |

Toast corner radius: **12px**. Padding: **14px vertical, 20px horizontal**.

---

## 3. Typography system

### 3.1 Font families

| Role           | Font name      | Weight        | Where to use                                      |
|----------------|----------------|---------------|---------------------------------------------------|
| Display        | DM Sans        | Bold (700)    | Splash screen wordmark, onboarding headlines       |
| Heading        | DM Sans        | Bold (700)    | Screen titles, section headers                     |
| Subheading     | DM Sans        | SemiBold (600)| Card titles, button labels, nav labels             |
| Body           | DM Sans        | Regular (400) | Paragraphs, descriptions, list items               |
| Caption        | DM Sans        | Regular (400) | Timestamps, helper text, footnotes                 |
| Data           | Space Mono     | Regular (400) | Quantities, units, prices, nutritional info        |
| Data emphasis  | Space Mono     | Bold (700)    | Large quantity displays, totals                    |

### 3.2 Type scale

Every text element in the app must use one of these predefined styles. Do not create ad-hoc font sizes.

| Style name        | Font           | Size  | Weight | Line height | Letter spacing | Colour token      |
|-------------------|----------------|-------|--------|-------------|----------------|--------------------|
| `displayLarge`    | DM Sans        | 32px  | 700    | 1.1         | -1.0           | `textPrimary`      |
| `displayMedium`   | DM Sans        | 28px  | 700    | 1.15        | -0.8           | `textPrimary`      |
| `headingLarge`    | DM Sans        | 24px  | 700    | 1.2         | -0.5           | `textPrimary`      |
| `headingMedium`   | DM Sans        | 20px  | 700    | 1.25        | -0.3           | `textPrimary`      |
| `headingSmall`    | DM Sans        | 17px  | 600    | 1.3         | 0              | `textPrimary`      |
| `bodyLarge`       | DM Sans        | 17px  | 400    | 1.6         | 0              | `textPrimary`      |
| `bodyDefault`     | DM Sans        | 15px  | 400    | 1.6         | 0              | `textPrimary`      |
| `bodySmall`       | DM Sans        | 13px  | 400    | 1.5         | 0              | `textSecondary`    |
| `caption`         | DM Sans        | 12px  | 400    | 1.4         | 0.2            | `textTertiary`     |
| `label`           | DM Sans        | 11px  | 600    | 1.3         | 1.5            | `textSecondary`    |
| `overline`        | DM Sans        | 11px  | 500    | 1.3         | 3.0            | `textTertiary`     |
| `dataLarge`       | Space Mono     | 20px  | 700    | 1.3         | 0              | `textPrimary`      |
| `dataDefault`     | Space Mono     | 15px  | 400    | 1.4         | 0              | `textPrimary`      |
| `dataSmall`       | Space Mono     | 12px  | 400    | 1.4         | 0              | `textSecondary`    |
| `buttonDefault`   | DM Sans        | 15px  | 600    | 1.0         | 0.2            | (depends on button type) |
| `buttonSmall`     | DM Sans        | 13px  | 600    | 1.0         | 0.2            | (depends on button type) |
| `badgeText`       | DM Sans        | 11px  | 600    | 1.0         | 0              | (depends on badge type) |

### 3.3 Swift implementation — BrandTypography.swift

```swift
import SwiftUI

// MARK: - Font registration
// Add DM Sans and Space Mono .ttf or .otf files to your project bundle.
// Register them in Info.plist under "Fonts provided by application":
//   - DMSans-Regular.ttf
//   - DMSans-Medium.ttf
//   - DMSans-SemiBold.ttf
//   - DMSans-Bold.ttf
//   - SpaceMono-Regular.ttf
//   - SpaceMono-Bold.ttf
//
// Download from Google Fonts:
//   https://fonts.google.com/specimen/DM+Sans
//   https://fonts.google.com/specimen/Space+Mono

struct BrandFont {
    // DM Sans
    static func regular(_ size: CGFloat) -> Font {
        .custom("DMSans-Regular", size: size)
    }
    static func medium(_ size: CGFloat) -> Font {
        .custom("DMSans-Medium", size: size)
    }
    static func semiBold(_ size: CGFloat) -> Font {
        .custom("DMSans-SemiBold", size: size)
    }
    static func bold(_ size: CGFloat) -> Font {
        .custom("DMSans-Bold", size: size)
    }
    // Space Mono
    static func mono(_ size: CGFloat) -> Font {
        .custom("SpaceMono-Regular", size: size)
    }
    static func monoBold(_ size: CGFloat) -> Font {
        .custom("SpaceMono-Bold", size: size)
    }
}

// MARK: - Predefined type styles
extension View {
    func gsDisplayLarge() -> some View {
        self.font(BrandFont.bold(32))
            .tracking(-1.0)
            .lineSpacing(32 * 0.1)
            .foregroundColor(.gsTextPrimary)
    }
    func gsDisplayMedium() -> some View {
        self.font(BrandFont.bold(28))
            .tracking(-0.8)
            .lineSpacing(28 * 0.15)
            .foregroundColor(.gsTextPrimary)
    }
    func gsHeadingLarge() -> some View {
        self.font(BrandFont.bold(24))
            .tracking(-0.5)
            .foregroundColor(.gsTextPrimary)
    }
    func gsHeadingMedium() -> some View {
        self.font(BrandFont.bold(20))
            .tracking(-0.3)
            .foregroundColor(.gsTextPrimary)
    }
    func gsHeadingSmall() -> some View {
        self.font(BrandFont.semiBold(17))
            .foregroundColor(.gsTextPrimary)
    }
    func gsBodyLarge() -> some View {
        self.font(BrandFont.regular(17))
            .lineSpacing(17 * 0.6)
            .foregroundColor(.gsTextPrimary)
    }
    func gsBody() -> some View {
        self.font(BrandFont.regular(15))
            .lineSpacing(15 * 0.6)
            .foregroundColor(.gsTextPrimary)
    }
    func gsBodySmall() -> some View {
        self.font(BrandFont.regular(13))
            .lineSpacing(13 * 0.5)
            .foregroundColor(.gsTextSecondary)
    }
    func gsCaption() -> some View {
        self.font(BrandFont.regular(12))
            .tracking(0.2)
            .foregroundColor(.gsTextTertiary)
    }
    func gsLabel() -> some View {
        self.font(BrandFont.semiBold(11))
            .tracking(1.5)
            .textCase(.uppercase)
            .foregroundColor(.gsTextSecondary)
    }
    func gsOverline() -> some View {
        self.font(BrandFont.medium(11))
            .tracking(3.0)
            .textCase(.uppercase)
            .foregroundColor(.gsTextTertiary)
    }
    func gsDataLarge() -> some View {
        self.font(BrandFont.monoBold(20))
            .foregroundColor(.gsTextPrimary)
    }
    func gsData() -> some View {
        self.font(BrandFont.mono(15))
            .foregroundColor(.gsTextPrimary)
    }
    func gsDataSmall() -> some View {
        self.font(BrandFont.mono(12))
            .foregroundColor(.gsTextSecondary)
    }
}
```

### 3.4 Where each style is used — mapping to screens

| Screen / Component            | Element                  | Style              |
|-------------------------------|--------------------------|---------------------|
| Splash screen                 | "grubshelf" wordmark     | `displayLarge`      |
| Splash screen                 | "Your kitchen, sorted"   | `overline`          |
| Tab bar                       | Tab labels               | `caption` semiBold  |
| Any screen                    | Screen title             | `headingLarge`      |
| Any screen                    | Section headers          | `headingSmall`      |
| Pantry list                   | Item name                | `headingSmall`      |
| Pantry list                   | Quantity + unit           | `dataSmall`         |
| Pantry list                   | Expiry info              | `bodySmall`         |
| Pantry list                   | Status badge             | `badgeText`         |
| Shopping list                 | Item name                | `bodyDefault`       |
| Shopping list                 | Quantity                 | `dataDefault`       |
| Meal plan                     | Meal name                | `headingSmall`      |
| Meal plan                     | Day label                | `label`             |
| Meal plan                     | Meal type (breakfast etc) | `overline`         |
| Item detail                   | Item name                | `headingLarge`      |
| Item detail                   | Quantity display          | `dataLarge`         |
| Item detail                   | Metadata labels          | `bodySmall`         |
| Empty states                  | Headline                 | `headingMedium`     |
| Empty states                  | Body text                | `bodyDefault`       |
| All buttons                   | Label                    | `buttonDefault` or `buttonSmall` |
| Toasts / alerts               | Message text             | `bodyDefault`       |

### 3.5 Font fallbacks

If DM Sans fails to load for any reason, the fallback chain is:

```
DM Sans → SF Pro Text → -apple-system → system
```

For Space Mono:

```
Space Mono → SF Mono → Menlo → system monospaced
```

Implement this in your `BrandFont` struct with a guard/check:

```swift
static func regular(_ size: CGFloat) -> Font {
    if UIFont(name: "DMSans-Regular", size: size) != nil {
        return .custom("DMSans-Regular", size: size)
    }
    return .system(size: size, weight: .regular)
}
```

---

## 4. Brand voice & microcopy

### 4.1 Voice principles

GrubShelf talks like a flatmate who is good at organising. Every piece of text in the app must follow these rules:

| Principle        | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Confident**    | Statements, not suggestions. "3 items expiring" not "You might have items expiring soon" |
| **Warm**         | Friendly but not performative. No exclamation marks unless genuinely celebratory |
| **Brief**        | Say it in fewer words. If a label can be one word, use one word          |
| **Dry humour**   | Occasionally wry. "You're out of eggs. Again." Never sarcastic or mean  |
| **Never corporate** | No "optimise", "leverage", "insights", "journey", "experience"       |
| **Never wellness** | No "nourish", "fuel your body", "mindful eating", "self-care"         |
| **Sentence case** | Always sentence case for UI. Never Title Case. Never ALL CAPS except `overline` labels |

### 4.2 Microcopy replacement map

Search the entire codebase for these common generic strings and replace them with the GrubShelf voice versions.

| Current / generic copy                     | Replace with                              |
|--------------------------------------------|-------------------------------------------|
| "Welcome back!"                            | "What's cooking?"                         |
| "No items found"                           | "Nothing here yet"                        |
| "Your pantry is empty"                     | "Shelf's bare — time to shop"             |
| "No meals planned"                         | "No meals this week"                      |
| "Shopping list is empty"                   | "List's empty — add something"            |
| "Item added successfully"                  | "Added to pantry"                         |
| "Item removed successfully"               | "Removed"                                 |
| "Are you sure you want to delete?"         | "Remove this item?"                       |
| "Error occurred"                           | "Something went wrong"                    |
| "Loading..."                               | "Loading"                                 |
| "Pull to refresh"                          | "Pull to refresh"                         |
| "Congratulations!"                         | "Nice —"                                  |
| "You have X items expiring soon"           | "X items expiring this week"              |
| "Your meal plan for this week"             | "This week's meals"                       |
| "Add to shopping list"                     | "Add to list"                             |
| "Mark as completed"                        | "Done shopping"                           |
| "Mark meal as cooked"                      | "Mark as cooked"                          |
| "View all items"                           | "See all"                                 |
| "Submit"                                   | "Save"                                    |
| "Continue"                                 | "Next"                                    |
| "Get Started"                              | "Let's go"                                |
| "Unlock premium features"                  | (remove entirely or) "Go Pro"             |
| "Learn more"                               | "More"                                    |
| "Manage your pantry efficiently"           | "Your kitchen, sorted"                    |

### 4.3 Notification copy

| Trigger                          | Title                    | Body                                  |
|----------------------------------|--------------------------|---------------------------------------|
| Item expiring tomorrow           | "Heads up"               | "[Item name] expires tomorrow"        |
| Item expired                     | "[Item name] expired"    | "Use it today or bin it"              |
| Shopping list completed          | "Pantry stocked"         | "X items added to your shelf"         |
| Weekly meal plan reminder        | "Plan your week"         | "Tap to set up meals for the week"    |
| Pantry running low               | "Running low"            | "You're down to [quantity] [item]"    |

### 4.4 Button labels

| Action                    | Label         |
|---------------------------|---------------|
| Add item to pantry        | "Add to pantry" |
| Add item to shopping list | "Add to list"  |
| Create new meal           | "New meal"     |
| Start shopping            | "Start shopping" |
| Complete shopping         | "Done shopping" |
| Delete / remove item      | "Remove"       |
| Edit item                 | "Edit"         |
| Save changes              | "Save"         |
| Cancel action             | "Cancel"       |
| Confirm destructive       | "Remove"       |
| Dismiss                   | "Got it"       |
| Undo                      | "Undo"         |
| Share                     | "Share"        |

### 4.5 Section headers

| Screen          | Section                  | Header text          |
|-----------------|--------------------------|----------------------|
| Pantry          | Main list                | "Your pantry"        |
| Pantry          | Expiring items           | "Expiring soon"      |
| Pantry          | Categories               | "By category"        |
| Meals           | This week                | "This week"          |
| Meals           | Today                    | "Today"              |
| Meals           | Day header               | "Monday", "Tuesday" etc (no "Day 1") |
| Meals           | Meal type                | "BREAKFAST", "LUNCH", "DINNER" (overline style) |
| Shopping        | Current list             | "Shopping list"      |
| Shopping        | Checked off              | "Done"               |
| Settings        | Account                  | "Account"            |
| Settings        | Preferences              | "Preferences"        |
| Settings        | About                    | "About"              |

### 4.6 Empty state messages

Every empty state has a headline and a body. Keep the headline under 5 words. Keep the body under 15 words.

| Screen / State              | Headline              | Body                                    | CTA button    |
|-----------------------------|-----------------------|-----------------------------------------|---------------|
| Pantry — no items           | "Shelf's bare"        | "Add items from a shopping list or manually" | "Add item"   |
| Meals — no plan             | "No meals yet"        | "Plan your week in under two minutes"    | "New meal"    |
| Shopping — no list          | "Nothing to buy"      | "Start a list or generate one from meals" | "New list"   |
| Search — no results         | "Nothing found"       | "Try a different search term"            | —             |
| Expiring — nothing expiring | "All good"            | "Nothing expiring this week"             | —             |

---

## 5. Implementation checklist

Work through this in order. Do not skip ahead. Check off each item before moving to the next.

### Phase 1A — Colour foundation

- [ ] Download DM Sans and Space Mono font files from Google Fonts
- [ ] Add font files to Xcode project bundle
- [ ] Register fonts in Info.plist under "Fonts provided by application"
- [ ] Create `Sources/Design/BrandColors.swift` with raw palette and hex initialiser
- [ ] Create colour sets in `Assets.xcassets/Brand/` for every semantic token (both light and dark values)
- [ ] Create `Color` extension with all `gs`-prefixed static properties
- [ ] Verify dark mode switching works in Xcode preview with both colour schemes

### Phase 1B — Typography foundation

- [ ] Create `Sources/Design/BrandTypography.swift` with `BrandFont` struct
- [ ] Create all View extension methods for type styles (gsDisplayLarge through gsDataSmall)
- [ ] Test each font style renders correctly in a preview view
- [ ] Verify font fallback works by temporarily renaming font files

### Phase 1C — Global refactor

- [ ] Run regex search `#[0-9A-Fa-f]{6}` across codebase — replace ALL hardcoded hex values with brand tokens
- [ ] Search for `Color.green`, `Color.orange`, `Color.red`, `Color.blue` — replace with brand tokens
- [ ] Search for `.font(.system(` — replace with BrandFont equivalents
- [ ] Search for `UIFont.systemFont` — replace with BrandFont equivalents
- [ ] Search for `Color(.systemBackground)` and all `UIColor.system*` references — replace with brand tokens

### Phase 1D — Screen-by-screen updates

Work through each screen and apply the token/type mappings from sections 2.5 and 3.4:

- [ ] Splash screen — apply displayLarge wordmark, overline tagline, teal-900 background
- [ ] Tab bar — apply navActive/navInactive tokens, surface background
- [ ] Pantry list — apply card styles, status badges, data fonts for quantities
- [ ] Pantry item detail — apply headingLarge title, dataLarge quantity, bodySmall metadata
- [ ] Meal plan view — apply overline meal types, label day headers, headingSmall meal names
- [ ] Shopping list — apply bodyDefault item names, dataDefault quantities
- [ ] Settings — apply section headers, body styles
- [ ] All empty states — apply headingMedium + bodyDefault + button styles
- [ ] All toasts/alerts — apply toast colour tokens
- [ ] All modals/sheets — apply surface background, proper text hierarchy

### Phase 1E — Voice & copy pass

- [ ] Run through microcopy replacement map (section 4.2) — search and replace every string
- [ ] Update all button labels to match section 4.4
- [ ] Update all section headers to match section 4.5
- [ ] Update all empty state messages to match section 4.6
- [ ] Update all notification copy to match section 4.3
- [ ] Review all alert/confirmation dialogs for corporate language — rewrite in GrubShelf voice
- [ ] Remove any exclamation marks that aren't genuinely celebratory

### Phase 1F — QA

- [ ] Test every screen in light mode
- [ ] Test every screen in dark mode
- [ ] Test with Dynamic Type (accessibility large fonts) — ensure nothing clips
- [ ] Test with Bold Text accessibility setting enabled
- [ ] Verify no hardcoded hex values remain (run regex search again)
- [ ] Verify no system font references remain (search `.system(`)
- [ ] Screenshot every screen in both modes for brand review

---

## What's NOT in this document (coming in Phase 2)

Phase 2 will cover:

- App icon implementation (stacked shelves, all size assets)
- Logo usage in-app (loading screen, about screen, onboarding)
- Component library (reusable SwiftUI views for buttons, cards, badges, toasts, inputs)
- Spacing system (8px grid, corner radius scale)
- Animation and motion guidelines
- Iconography style (in-app icons)
- Onboarding flow design

Do not start Phase 2 until Phase 1 is fully checked off and reviewed.

---

*GrubShelf Brand Implementation Guide — Phase 1*
*Version 1.0 — March 2026*
