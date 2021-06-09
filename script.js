// ==UserScript==
// @name         youtubeNumbersDisabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        http://*/*
// @grant        none
// ==/UserScript==

const disabledKeyCodes = new Set([
  35,
  36,
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
      console.log(e);
    if (disabledKeyCodes.has(e.which)) {
      e.stopPropagation();

    }
  },
  true
);
