import 'webextension-polyfill';
import { exampleThemeStorage, currentUrlStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (tab.url !== undefined) {
      currentUrlStorage.set(tab.url);
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url !== undefined) {
    currentUrlStorage.set(tab.url);
  }
});
console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
