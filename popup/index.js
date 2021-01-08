'use strict';
{
    // i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = chrome.i18n.getMessage(element.getAttribute("data-i18n"));
    });

    let optionHideComments = document.getElementById('option-hide-comments');
    optionHideComments.addEventListener('click', () => {
        chrome.storage.sync.set({ 'hide-comments': optionHideComments.checked });
    });
    chrome.storage.sync.get({ 'hide-comments': false }, (data) => {
        optionHideComments.checked = data['hide-comments'];
    });
}
