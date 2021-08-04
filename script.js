// ==UserScript==
// @name         youtubeNumbersDisabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

//2x speed by default
document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 2;

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
