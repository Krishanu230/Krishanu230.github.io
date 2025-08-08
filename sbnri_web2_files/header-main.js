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

const text = document.getElementById("textContainer").textContent.trim();
const words = text.split(" ");

// Clear the container
document.getElementById("textContainer").innerHTML = "";

// Create word elements
words.forEach((word) => {
  const wordContainer = document.createElement("span");
  wordContainer.className = "reveal-word";

  const shadowSpan = document.createElement("span");
  shadowSpan.className = "reveal-word-shadow";
  shadowSpan.textContent = word;

  const mainSpan = document.createElement("span");
  mainSpan.className = "reveal-word-main";
  mainSpan.textContent = word;

  wordContainer.appendChild(shadowSpan);
  wordContainer.appendChild(mainSpan);
  document.getElementById("textContainer").appendChild(wordContainer);
});

// Show all words immediately (normal display)
const wordElements = document.querySelectorAll(".reveal-word-main");
wordElements.forEach((word) => {
  word.style.opacity = 1; // Show all words immediately
});

}
/*
     FILE ARCHIVED ON 21:47:29 Jul 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:40:54 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.807
  exclusion.robots: 0.04
  exclusion.robots.policy: 0.025
  esindex: 0.013
  cdx.remote: 99.599
  LoadShardBlock: 275.689 (3)
  PetaboxLoader3.datanode: 350.297 (4)
  load_resource: 110.348
*/