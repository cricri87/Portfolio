import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Junior Fullstack Programmer", "Code Is Life"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
