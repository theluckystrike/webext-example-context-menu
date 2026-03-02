# Context Menu Chrome Extension

A Chrome extension demonstrating right-click context menu integration.

## What It Does

Adds custom items to Chrome's right-click context menu:
- **Page menu**: Show page info, show page URL
- **Selection menu**: Search for selected text
- **Link menu**: Copy link URL
- **Image menu**: Copy image URL

## How to Install

1. Open Chrome → `chrome://extensions/`
2. Enable Developer mode
3. Click "Load unpacked" → Select `src` folder

## Key Concepts

### Create Context Menu

```javascript
chrome.contextMenus.create({
  id: 'myMenu',
  title: 'My Menu Item',
  contexts: ['page', 'selection', 'link', 'image']
});
```

### Handle Clicks

```javascript
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Handle click
});
```

## License

MIT
