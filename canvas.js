(function () {
  'use strict';
  setTimeout(fixDashboard, 250);
  //setTimeout(fixLumen, 5000);

  function fixDashboard() {
    const SIDE_NAV = document.querySelector(".ic-sticky-frame.has-scrollbar");
    const CONTENT_MAIN = document.querySelector(".ic-Layout-contentMain");

    if (SIDE_NAV && SIDE_NAV instanceof HTMLDivElement) {
      const side_nav_style = {
        padding: "0 5px 0 5px",
      };
      Object.assign(SIDE_NAV.style, side_nav_style);
    }

    if (CONTENT_MAIN && CONTENT_MAIN instanceof HTMLDivElement) {
      const content_main_style = {
        padding: "0px",
      };
      Object.assign(CONTENT_MAIN.style, content_main_style);
    }

  }

  function fixLumen() {
    const MID_WRAPPER = document.querySelector(".midwrapper");
    if (MID_WRAPPER && MID_WRAPPER instanceof HTMLDivElement) {
      const mid_wrapper_style = {
        padding: "0",
      };
      Object.assign(MID_WRAPPER.style, mid_wrapper_style);
    }

  }

})();

