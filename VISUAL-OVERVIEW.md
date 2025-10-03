# IHSAN Rebrand - Visual Overview

## Logo Changes

### Before (Bluesky Butterfly)
The original Bluesky logo featured a stylized butterfly shape in blue:
- SVG path with butterfly wings
- Blue gradient colors (#0A7AFF to #59B9FF)
- Complex vector shape

### After (IHSAN Text)
The new IHSAN logo is text-based, similar to X platform's branding:
- Bold text: "IHSAN"
- Color: Black (#000000)
- Font weight: 900 (heavy)
- Letter spacing: 1-2px
- Simple, bold, and modern

**Logo Implementation:**
```typescript
<Text
  style={{
    fontSize: size * 0.5,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 1,
  }}>
  IHSAN
</Text>
```

**Splash Screen SVG:**
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <text 
    x="50%" 
    y="50%" 
    dominantBaseline="middle" 
    textAnchor="middle" 
    fill="#000000" 
    fontSize="32" 
    fontWeight="900" 
    letterSpacing="2">
    IHSAN
  </text>
</svg>
```

## App Name Changes

### Configuration
- **Package Name**: `bsky.app` → `ihsan.app`
- **Display Name**: `Bluesky` → `IHSAN`
- **Bundle ID (iOS)**: `xyz.blueskyweb.app` → `com.ihsan.app`
- **Package (Android)**: `xyz.blueskyweb.app` → `com.ihsan.app`
- **URL Scheme**: `bluesky://` → `ihsan://`

### Page Titles
- Web: "Bluesky" → "IHSAN"
- Profile: "@user on Bluesky" → "@user on IHSAN"
- Post: "Post on Bluesky" → "Post on IHSAN"
- Feed: "Feed | Bluesky Feed" → "Feed | IHSAN Feed"

## User Interface Text

### Buttons and Links
- "View on Bluesky" → "View on IHSAN"
- "Join Bluesky" → "Join IHSAN"
- "Return to Bluesky" → "Return to IHSAN"
- "Embed a Bluesky Post" → "Embed an IHSAN Post"

### Meta Tags
- Site Name: "Bluesky Social" → "IHSAN Social"
- Application Name: "Bluesky" → "IHSAN"
- OG Tags: Updated to reference IHSAN

### Error Messages
- "Invalid Bluesky URL" → "Invalid IHSAN URL"

## Extension Names

### iOS Extensions
1. **Share Extension**
   - Target: `Share-with-Bluesky` → `Share-with-IHSAN`
   - Bundle ID: `xyz.blueskyweb.app.Share-with-Bluesky` → `com.ihsan.app.Share-with-IHSAN`

2. **Notifications Extension**
   - Target: `BlueskyNSE` → `IHSANNSE`
   - Bundle ID: `xyz.blueskyweb.app.BlueskyNSE` → `com.ihsan.app.IHSANNSE`
   - Display Name: "Bluesky Notifications" → "IHSAN Notifications"

3. **App Clip**
   - Target: `BlueskyClip` → `IHSANClip`
   - Bundle ID: `xyz.blueskyweb.app.AppClip` → `com.ihsan.app.AppClip`

## Accessibility

### Accessibility Labels
- Logo: `accessibilityLabel="Bluesky"` → `accessibilityLabel="IHSAN"`
- All screen readers will now announce "IHSAN" instead of "Bluesky"

## Splash Screens

### Web Splash
- Displays bold black "IHSAN" text
- Centered on screen
- Clean, minimal design

### Mobile Splash
- iOS: Will use configured splash images with updated branding
- Android: Will use configured splash images with updated branding

## Color Scheme

The rebrand maintains the existing color scheme for most UI elements but introduces:
- **Primary Logo Color**: Black (#000000) - like X platform
- **Existing Colors**: Maintained for UI consistency
  - Primary Blue: #1083fe
  - Brand Colors: Unchanged

## Brand Identity

### Design Philosophy
The IHSAN rebrand follows a **minimalist, text-first approach** similar to:
- X (formerly Twitter) - bold text logo
- Simple, recognizable typography
- High contrast black text
- Modern, clean aesthetic

### Key Design Principles
1. **Simplicity**: Text-only logo
2. **Boldness**: Heavy font weight (900)
3. **Clarity**: High contrast black on white/transparent
4. **Recognition**: All caps "IHSAN" text
5. **Adaptability**: Scales well at any size

## What Stays The Same

### Technical
- AT Protocol integration
- API endpoints
- Data structures
- Network compatibility

### Visual (Non-branding)
- UI layout and structure
- Icon sets (beyond logo)
- Color scheme (beyond logo)
- Typography for body text

## Implementation Notes

The rebrand is **complete and consistent** across:
- ✅ Mobile app (iOS & Android)
- ✅ Web application
- ✅ Embeds
- ✅ Meta tags and SEO
- ✅ App extensions
- ✅ Documentation
- ✅ Localization files

## Next Steps for Visual Assets

While the code changes are complete, you may want to:

1. **Design App Icons**: Create icon variants with IHSAN branding
2. **Update Screenshots**: Take new app store screenshots
3. **Create Marketing Materials**: Banners, social media graphics
4. **Update Favicon**: Create IHSAN-branded favicon
5. **Design Social Cards**: Update OpenGraph images

## Testing the Visual Changes

To see the changes:

1. **Logo Component**: Run the app and check header/navigation
2. **Splash Screen**: Launch the app on web or mobile
3. **Embed**: Visit the embed builder page
4. **Meta Tags**: View page source on web pages
5. **Extensions**: Test share and notification extensions

## Brand Consistency

The rebrand maintains consistency by:
- Using "IHSAN" in all caps everywhere
- Applying black (#000000) for logo text
- Keeping font weight at 900 for boldness
- Maintaining letter spacing for readability
- Using same approach across all platforms
