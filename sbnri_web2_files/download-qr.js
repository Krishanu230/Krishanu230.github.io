var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* JavaScript updates */
document.addEventListener("DOMContentLoaded", function () {
  const qrSticky = document.getElementById("qrDownloadSticky");
  const footerSection = document.getElementById("footer-sec");
  const headerMain = document.getElementById("header-main");
  let isVisible = false;
  let scrollTimeout;

  if (!qrSticky || !footerSection || !headerMain) {
    console.warn("Required elements not found");
    return;
  }

  function checkQRVisibility() {
    if (!qrSticky || !footerSection || !headerMain) return;

    const footerRect = footerSection.getBoundingClientRect();
    const headerRect = headerMain.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const shouldBeVisible = headerRect.bottom < 200 && footerRect.top >= windowHeight;

    // Only update if state needs to change
    if (shouldBeVisible !== isVisible) {
      isVisible = shouldBeVisible;
      if (shouldBeVisible) {
        qrSticky.classList.add('visible');
      } else {
        qrSticky.classList.remove('visible');
      }
    }
  }

  // Debounced scroll handler
  function debouncedScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(checkQRVisibility, 10);
  }

  // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(() => {
      debouncedScroll();
    });
  }, observerOptions);

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(() => {
      debouncedScroll();
    });
  }, observerOptions);

  // Observe header and footer
  headerObserver.observe(headerMain);
  footerObserver.observe(footerSection);

  // Add scroll and resize listeners
  window.addEventListener("scroll", debouncedScroll, { passive: true });
  window.addEventListener("resize", debouncedScroll, { passive: true });

  // Initial check
  // Wait for first paint to complete
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      checkQRVisibility();
    });
  });
});

}
/*
     FILE ARCHIVED ON 21:47:25 Jul 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:40:54 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.845
  exclusion.robots: 0.038
  exclusion.robots.policy: 0.023
  esindex: 0.012
  cdx.remote: 17.804
  LoadShardBlock: 503.169 (3)
  PetaboxLoader3.datanode: 286.92 (4)
  PetaboxLoader3.resolve: 331.243 (2)
  load_resource: 359.381
*/