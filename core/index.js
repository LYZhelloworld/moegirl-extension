'use strict';
{
    chrome.storage.sync.get({ 'hide-comments': false }, (data) => {
        if (data['hide-comments']) {
            // hide comment div
        }
    });
}
