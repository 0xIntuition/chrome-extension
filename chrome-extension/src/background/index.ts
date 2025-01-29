import 'webextension-polyfill';
import { currentTabStorage } from '@extension/storage';
import { isAddress, isSmartContract, supportedChains } from '@extension/shared';

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (tab.url !== undefined && tab.id !== undefined && tab.status === 'complete') {
      storeTab(tab);
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url !== undefined) {
    storeTab(tab);
  }
});

async function storeTab(tab: chrome.tabs.Tab) {
  const chain = supportedChains.find(c => tab.url?.startsWith(c.blockExplorers.default.url));
  // extract ethereum address from url
  const address = tab.url?.match(/0x[a-fA-F0-9]{40}/)?.[0];

  if (chain && address && isAddress(address)) {
    const isContract = await isSmartContract(address, chain);
    if (isContract) {
      currentTabStorage.set({
        tabId: tab.id!,
        url: `caip10:eip155:${chain.id}:${address}`,
        title: address.slice(0, 6) + '...' + address.slice(-4),
        description: `Contract on ${chain.name}`,
        type: 'caip10',
      });
    } else {
      currentTabStorage.set({
        tabId: tab.id!,
        url: address.toLowerCase(), // Why lowercase?
        title: address.slice(0, 6) + '...' + address.slice(-4),
        description: 'Ethereum account',
        type: 'address',
      });
    }
  } else if (tab.url?.startsWith('https://')) {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id! },
        func: extractOpenGraphTags,
      })
      .then(results => {
        const ogTags = results[0]!.result;
        if (ogTags) {
          currentTabStorage.set({
            tabId: tab.id!,
            url: tab.url!,
            title: ogTags.title || '',
            description: ogTags.description || '',
            image: ogTags.image || '',
            type: 'url',
          });
        }
      });
  }
}

function extractOpenGraphTags() {
  const title = document.title;
  const domain = document.location.hostname;
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  let image = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

  if (image && !image.startsWith('http')) {
    image = `https://${domain}${image}`;
  }
  // get html content remove javascript
  const content = document.documentElement.outerHTML
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .slice(0, 190000);

  return { title, description, image, content };
}
