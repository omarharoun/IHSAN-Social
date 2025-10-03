# IHSAN Rebrand Summary

This document summarizes all changes made to rebrand the Bluesky Social app to IHSAN.

## Changes Made

### 1. Core Configuration Files

#### `app.config.js`
- Changed app name from "Bluesky" to "IHSAN"
- Updated slug from "bluesky" to "ihsan"
- Updated scheme from "bluesky" to "ihsan"
- Changed owner from "blueskysocial" to "omarharoun"
- Updated iOS bundle identifier from "xyz.blueskyweb.app" to "com.ihsan.app"
- Updated Android package from "xyz.blueskyweb.app" to "com.ihsan.app"
- Updated CFBundleSpokenName from "Blue Sky" to "IHSAN"
- Renamed app extensions:
  - "Share-with-Bluesky" → "Share-with-IHSAN"
  - "BlueskyNSE" → "IHSANNSE"
  - "BlueskyClip" → "IHSANClip"
- Updated comment "Bluesky+ core set" to "IHSAN+ core set"

#### `package.json`
- Changed name from "bsky.app" to "ihsan.app"
- Updated bundle ID in perf test command

### 2. Documentation

#### `README.md`
- Updated main title to "IHSAN Social App"
- Added note that it's forked from Bluesky
- Updated references to IHSAN where appropriate
- Added link to PDS hosting guide
- Kept attribution to original Bluesky project

#### `docs/hosting-pds.md` (NEW)
- Comprehensive guide on hosting IHSAN with AT Protocol Personal Data Server
- Includes setup instructions, configuration options, and resources

### 3. Logo and Branding

#### `src/view/icons/Logo.tsx`
- Replaced butterfly SVG with "IHSAN" text in black
- Updated to render bold, black text similar to X platform style
- Updated accessibility label from "Bluesky" to "IHSAN"

#### `bskyogcard/src/components/Butterfly.tsx`
- Replaced butterfly SVG path with "IHSAN" text in SVG format
- Simplified viewBox for text display

### 4. Web Templates

#### `web/index.html`
- Replaced butterfly SVG splash screen with "IHSAN" text logo

#### `bskyweb/templates/base.html`
- Updated title from "Bluesky" to "IHSAN"
- Changed application name meta tag
- Updated og:site_name to "IHSAN Social"
- Replaced butterfly SVG with "IHSAN" text in splash screen
- Updated noscript message

#### `bskyweb/templates/*.html` (multiple files)
- `starterpack.html`: Updated meta tags
- `profile.html`: Updated title and site name
- `home.html`: Updated title and meta tags
- `post.html`: Updated page titles
- `feed.html`: Updated titles and site name
- `error.html`: Updated error page title

### 5. Plugins

#### `plugins/shareExtension/withShareExtensions.js`
- Changed SHARE_EXTENSION_NAME to "Share-with-IHSAN"

#### `plugins/notificationsExtension/withNotificationsExtension.js`
- Changed EXTENSION_NAME to "IHSANNSE"

#### `plugins/notificationsExtension/withExtensionInfoPlist.js`
- Updated CFBundleDisplayName to "IHSAN Notifications"

#### `plugins/starterPackAppClipExtension/withStarterPackAppClip.js`
- Changed APP_CLIP_TARGET_NAME to "IHSANClip"

### 6. Embed Files

#### `bskyembed/index.html` & `bskyembed/post.html`
- Updated title to "IHSAN Embed"
- Changed application name meta tag

#### `bskyembed/src/components/post.tsx`
- Updated "View on Bluesky" text to "View on IHSAN"
- Updated reply count text references

#### `bskyembed/src/screens/landing.tsx`
- Changed error messages to reference IHSAN
- Updated page heading to "Embed an IHSAN Post"

#### `bskyembed/src/screens/post.tsx`
- Updated button text to "View on IHSAN"

#### `bskyogcard/src/components/StarterPack.tsx`
- Changed "on Butterfly Bluesky" to "on Butterfly IHSAN"

### 7. Localization Files

#### `bskylink/locales/en.json`
- Updated "Return to Bluesky" to "Return to IHSAN"

#### `bskylink/locales/es.json`
- Updated "Regresar a Bluesky" to "Regresar a IHSAN"

#### `bskylink/locales/fr.json`
- Updated "Retourner sur Bluesky" to "Retourner sur IHSAN"

## What Was NOT Changed

The following were intentionally left unchanged to maintain compatibility with the AT Protocol ecosystem:

1. **API Endpoints and Services**
   - `BSKY_SERVICE` and related constants in `src/lib/constants.ts`
   - AT Protocol API calls and lexicons (`app.bsky.*`)
   - PDS and relay URLs

2. **Internal Code References**
   - Variable names containing "bsky"
   - Function names and internal identifiers
   - AT Protocol-specific references

3. **External Dependencies**
   - npm package names
   - Third-party service integrations
   - Protocol specifications

4. **Build Infrastructure**
   - Most build script names
   - Directory structure
   - CI/CD configuration

## Visual Changes

The most significant visual change is the replacement of the butterfly logo with "IHSAN" text in bold black letters, similar to X platform's text-based branding approach. This appears in:

- App icon locations (though icon files themselves weren't modified)
- Splash screens
- In-app logo component
- Embed previews

## Testing Recommendations

Before deploying:

1. Test the app builds successfully on iOS and Android
2. Verify the splash screen displays correctly
3. Check that the in-app logo renders properly
4. Test embed functionality with the new branding
5. Verify all links and references are correct
6. Test share extensions with new names
7. Check push notifications work with new extension names

## Next Steps

1. **Update App Icons**: Create new app icons featuring "IHSAN" branding
2. **Configure PDS**: Set up your own Personal Data Server or choose a provider
3. **Update Store Listings**: Modify app store metadata and screenshots
4. **Deploy**: Build and deploy the rebranded app
5. **Monitor**: Test all functionality in production environment

## Notes

- This rebrand maintains full compatibility with the AT Protocol
- Users can still interact with the broader Bluesky network
- The app follows the forking guidelines provided by Bluesky
- Attribution to the original Bluesky project is maintained
