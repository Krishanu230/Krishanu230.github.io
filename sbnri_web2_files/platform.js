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

const storeRedirect = {
  // Store URLs
  urls: {
    ios: 'https://web.archive.org/web/20250413105406/https://apps.apple.com/in/app/sbnri-nri-digital-banking/id1537966413',
    android: 'https://web.archive.org/web/20250413105406/https://play.google.com/store/apps/details?id=com.sbnri.banking.nre.nro.nri',
    default: '/download-now'
  },

  // Get platform and redirect
  redirect() {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;
    const isAndroid = /android/.test(ua);

    // Store URLs should open in new tab
    if (isIOS || isAndroid) {
      window.open(isIOS ? this.urls.ios : this.urls.android, '_blank');
      return;
    }

    // Only redirect to download page if we're not already there
    if (window.location.pathname !== this.urls.default) {
      window.location.href = this.urls.default; // Using href instead of replace
    }
  },

  // Check if redirect is needed
  shouldRedirect() {
    // Don't redirect if explicitly disabled or if already on download page
    return !location.search.includes('redirect=false') && 
           window.location.pathname !== this.urls.default;
  },

  // Handle click events
  handleClick(event) {
    if (event) {
      event.preventDefault();
    }
    this.redirect();
  },

  // Main redirect function
  init() {
    if (this.shouldRedirect()) {
      this.redirect();
    } else {
      document.body.classList.add('no-redirect');
    }
  }
};

// Export
window.storeRedirect = storeRedirect;

}
/*
     FILE ARCHIVED ON 10:54:06 Apr 13, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:48:20 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.592
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.014
  esindex: 0.012
  cdx.remote: 22.337
  LoadShardBlock: 166.687 (3)
  PetaboxLoader3.datanode: 242.641 (6)
  load_resource: 732.241 (2)
  PetaboxLoader3.resolve: 193.209 (2)
  loaddict: 89.734
*/