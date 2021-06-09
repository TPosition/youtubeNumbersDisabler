// ==UserScript==
// @name         youtubeNumbersDisabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

console.log("content.js");

const disabledKeyCodes = new Set([
  12,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  45,
  48,49,50,51,52,53,54,55,56,57,58,59,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105
]);

window.addEventListener(
  "keydown",
  function(e) {
    if (disabledKeyCodes.has(e.which)) {
      e.stopPropagation();
    }
  },
  true
);
