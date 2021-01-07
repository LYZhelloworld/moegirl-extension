'use strict';

let optionHideComments = document.getElementById('option-hide-comments');
optionHideComments.addEventListener('change', () => {
    chrome.storage.sync.set({ 'hide-comments': this.checked });
});
chrome.storage.sync.get({ 'hide-comments': false }, (data) => {
    optionHideComments.checked = data['hide-comments'];
});
