'use strict';

let optionHideComments = document.getElementById('option-hide-comments');
optionHideComments.addEventListener('click', () => {
    chrome.storage.sync.set({ 'hide-comments': optionHideComments.checked });
});
chrome.storage.sync.get({ 'hide-comments': false }, (data) => {
    optionHideComments.checked = data['hide-comments'];
});
