// Context Menu - Create right-click menu items

console.log('Context Menu: Setting up...');

// Create context menu items on install
chrome.runtime.onInstalled.addListener(() => {
  // Parent menu item
  const parent = chrome.contextMenus.create({
    id: 'sampleMenu',
    title: 'Sample Extension',
    contexts: ['page']
  });
  
  // Submenu item 1
  chrome.contextMenus.create({
    id: 'showPageInfo',
    title: 'Show Page Info',
    parentId: parent,
    contexts: ['page']
  });
  
  // Submenu item 2
  chrome.contextMenus.create({
    id: 'showPageURL',
    title: 'Show Page URL',
    parentId: parent,
    contexts: ['page']
  });
  
  // Context menu for selection
  chrome.contextMenus.create({
    id: 'searchSelection',
    title: 'Search for "%s"',
    contexts: ['selection']
  });
  
  // Context menu for links
  chrome.contextMenus.create({
    id: 'copyLink',
    title: 'Copy Link URL',
    contexts: ['link']
  });
  
  // Context menu for images
  chrome.contextMenus.create({
    id: 'copyImage',
    title: 'Copy Image URL',
    contexts: ['image']
  });
  
  console.log('Context Menu: Created menu items');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'showPageInfo':
      showNotification(`Page: ${tab.title}`, `URL: ${tab.url}`);
      break;
      
    case 'showPageURL':
      showNotification('Page URL', tab.url);
      break;
      
    case 'searchSelection':
      if (info.selectionText) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(info.selectionText)}`;
        chrome.tabs.create({ url: searchUrl });
      }
      break;
      
    case 'copyLink':
      if (info.linkUrl) {
        navigator.clipboard.writeText(info.linkUrl);
        showNotification('Link Copied!', info.linkUrl);
      }
      break;
      
    case 'copyImage':
      if (info.srcUrl) {
        navigator.clipboard.writeText(info.srcUrl);
        showNotification('Image URL Copied!', info.srcUrl);
      }
      break;
  }
});

// Helper to show notification
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: title,
    message: message
  });
}
