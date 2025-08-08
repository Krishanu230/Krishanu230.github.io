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

const goalsData = [
  {
    icon: "sbnri_web2_files/01-25-2025-06-16-35_Background_(1).png",
    title: "Retirement Corpus",
    description:
      "Ensure financial independence in your golden years by Investing systematically and building a substantial corpus.",
  },
  {
    icon: "sbnri_web2_files/01-25-2025-06-17-08_Background_(2).png",
    title: "Wealth Creation",
    description:
      "Whether it's achieving your first crore or growing your assets, get curated strategies to achieve your goals.",
  },
  {
    icon: "sbnri_web2_files/01-25-2025-06-17-28_Background_(3).png",
    title: "Property Purchase Planning",
    description:
      "Turn your dream of owning a home into reality. Save and invest systematically towards your desired property.",
  },
  {
    icon: "sbnri_web2_files/01-25-2025-06-17-45_Background_(4).png",
    title: "Earn monthly fixed income",
    description:
      "Diversify your portfolio with real estate, bonds, SWP, and debt assets, ensuring a balanced approach for consistent returns.",
  },
];

function createGoalCards() {
  const container = document.getElementById("goalsGrid");
  
  // Clear existing content first
  container.innerHTML = "";

  goalsData.forEach((goal) => {
    const card = document.createElement("div");
    card.className = "goal-card";

    card.innerHTML = `
            <div class="goal-card__icon">
                <img src="${goal.icon}" alt="${goal.title} icon" class="goal-card__image">
            </div>
            <h3 class="goal-card__title">${goal.title}</h3>
            <p class="goal-card__description">${goal.description}</p>
        `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", createGoalCards);


}
/*
     FILE ARCHIVED ON 21:47:34 Jul 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:39 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.914
  exclusion.robots: 0.04
  exclusion.robots.policy: 0.024
  esindex: 0.013
  cdx.remote: 13.093
  LoadShardBlock: 2080.693 (3)
  PetaboxLoader3.datanode: 1928.659 (4)
  load_resource: 104.782
*/