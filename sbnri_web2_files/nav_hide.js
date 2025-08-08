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

const nav=document.getElementById("main_nav")
// console.log(nav.style.display="none")
let scrollPosition=0;
let scrollDirection;
window.addEventListener("scroll",(e)=>{
scrollDirection=(document.body.getBoundingClientRect()).top >scrollPosition? "up":"down"
if (scrollDirection == "down" ){
    nav.style.display="none"
}else if(scrollDirection == "up"){
    nav.style.display="block"
}
scrollPosition=(document.body.getBoundingClientRect()).top
})


}
/*
     FILE ARCHIVED ON 18:42:29 Sep 17, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:39 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.076
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.014
  cdx.remote: 21.687
  LoadShardBlock: 371.046 (3)
  PetaboxLoader3.resolve: 346.627 (3)
  PetaboxLoader3.datanode: 236.467 (4)
  load_resource: 239.805
*/