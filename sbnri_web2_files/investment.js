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

console.log("prem")
const option=document.getElementById("invest_options")
const desc_ele=document.getElementById("invest_data")
const mobile_data=document.getElementById("invest-item-mobile")
console.log(mobile_data)
const arr=[
    {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-13:11:57_mf_icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:34:22_mf_active.png",
        text:"Mutual Funds",
        data:{
            "desc":"Only platform built for NRIs to <span style='color:white;font-weight:600'>invest digitally & easily in Mutual Funds.</span>  Get FREE expert advice to build your mutual fund portfolio from scratch.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:08:14_mf_new.png",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-08:37:27_fd-icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:35:25_fd_active.png",
        text:"Fixed Deposits",
        data:{
            "desc":"Book fixed deposits digitally and earn up to <span style='color:white;font-weight:600'>8.5% interest p.a.</span>We have partnered with India's largest corporates to offer best-in-class deposits.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:12:15_fd_new.png",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }, {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-08:43:35_asset_iconn.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:36:24_asset_active.png",
        text:"Asset & Inventory Finance",
        data:{
            "desc":"Finance assets & equipment of large corporates and earn <span style='color:white;font-weight:600'>tax-free return</span> up to 10%, paid monthly. Rs. 440 Crore+ already invested.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:13:47_asset_new.png",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }, {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-08:40:57_micro_icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:37:40_micro_active.png",
        text:"Micro VC Funds",
        data:{
            "desc":"Become a part of <span style='color:white;font-weight:600'>Indian start-up growth</span> story by investing in funds which have proven track record. 1-100x return possible.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:14:46_micro_new.png",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }, {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-08:41:59_cre_icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:38:49_cre_active.png",
        text:"Commercial Real Estate",
        data:{
            "desc":"Invest in A-Grade commercial properties like warehouses, office spaces, etc. <span style='color:white;font-weight:600'>Earn monthly rental (8-9% p.a.)</span> and capital appreciation. Start with a Min. investment of Rs. 10 Lacs.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:16:31_cre_new2.png",
        },
        cta_text:"Explore assets",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnri.com/commercial-real-estate"
    },
    //  {
    //     icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:19:11_farm_icon.png",
    //     icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:39:52_farms_active.png",
    //     text:"SBNRI Farms",
    //     data:{
    //         "desc":"Become a passive farmer & grow your money with managed farms. Start with Rs. 5,000 & earn <span style='color:white;font-weight:600'>10-17% tax-free returns,</span> paid quarterly. Diversify with agri-investments.",
    //         "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:17:18_farm_new.png",
    //     },
    //     cta_text:"Download Now",
    //     cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    // },
     {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-08-2022-08:34:19_stocks_icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:41:20_pre-ipo_active.png",
        text:"Pre-IPO",
        data:{
            "desc":"Invest in companies which are going for IPO in the next 2-3 years. Invest and hold shares in your Demat account. <span style='color:white;font-weight:600'>Past return of 25-30%</span> in the last 6 years.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:02:49_pre_ipo.png",
        },
        cta_text:"Learn more",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnri.com/pre-ipo-investment"
    }, {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:16:43_Briefcase.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:42:15_portfolio_active.png",
        text:"Portfolio Management Scheme",
        data:{
            "desc":"Invest in professionally managed <span style='color:white;font-weight:600'>Indian stock market portfolios</span> with a past return of 20%+ in the last 4 years. Investments start at Rs. 50 Lacs.",
            "img_url":"",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }, {
        icon_inactive:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:18:04_bond_icon.png",
        icon_active:"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-15:45:39_bond_active.png",
        text:"Bonds",
        data:{
            "desc":"Invest in <span style='color:white;font-weight:600'>high-yield corporate & Govt. Bonds</span> and earn safe & fixed returns.",
            "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:05:17_bond_banner.png",
        },
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }
]
const invest_desc={
    "Mutual_Funds":{
        "desc":"Only platform built for NRIs to <span style='color:white;font-weight:600'>invest digitally & easily in Mutual Funds.</span>  Get FREE expert advice to build your mutual fund portfolio from scratch.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:08:14_mf_new.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Fixed_Deposits":{
        "desc":"Book fixed deposits digitally and earn up to <span style='color:white;font-weight:600'>8.5% interest p.a.</span>We have partnered with India's largest corporates to offer best-in-class deposits.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:12:15_fd_new.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Asset_&_Inventory_Finance":{
        "desc":"Finance assets & equipment of large corporates and earn <span style='color:white;font-weight:600'>tax-free return</span> up to 10%, paid monthly. Rs. 440 Crore+ already invested.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:13:47_asset_new.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Micro_VC_Funds":{
        "desc":"Become a part of <span style='color:white;font-weight:600'>Indian start-up growth</span> story by investing in funds which have proven track record. 1-100x return possible.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:14:46_micro_new.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Commercial_Real_Estate":{
        "desc":"Invest in A-Grade commercial properties like warehouses, office spaces, etc. <span style='color:white;font-weight:600'>Earn monthly rental (8-9% p.a.)</span> and capital appreciation. Start with a Min. investment of Rs. 10 Lacs.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:16:31_cre_new2.png",
        cta_text:"Explore assets",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnri.com/commercial-real-estate"
    },
    "SBNRI_Farms":{
        "desc":" Become a passive farmer & grow your money with managed farms. Start with Rs. 5,000 & earn <span style='color:white;font-weight:600'>10-17% tax-free returns,</span> paid quarterly. Diversify with agri-investments.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:17:18_farm_new.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Pre-IPO":{
        "desc":"Invest in companies which are going for IPO in the next 2-3 years. Invest and hold shares in your Demat account. <span style='color:white;font-weight:600'>Past return of 25-30%</span> in the last 6 years.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:02:49_pre_ipo.png",
        cta_text:"Learn more",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnri.com/pre-ipo-investment"
    },
    "Portfolio_Management_Scheme":{
        "desc":"Invest in professionally managed <span style='color:white;font-weight:600'>Indian stock market portfolios</span> with a past return of 20%+ in the last 4 years. Investments start at Rs. 50 Lacs.",
        "img_url":"",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    },
    "Bonds":{
        "desc":"Invest in <span style='color:white;font-weight:600'>high-yield corporate & Govt. Bonds</span> and earn safe & fixed returns.",
        "img_url":"https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/11-11-2022-09:05:17_bond_banner.png",
        cta_text:"Download Now",
        cta_url:"https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site"
    }

}

const get_key=(str)=>{
val=str.replaceAll(" ","_")
return val
}
// console.log(get_key("prem kumar"))
let data=``
arr.map((item)=>{
const key=get_key(item.text)
data= data + `<input type="radio" id=${key} name="invest"  value=${key} onchange="investChange(this)"/>
<label class="option" for=${key}>
<div class="option_left">
  <img
  class="inactive_icon"
    src=${item.icon_inactive}
  />
  <img
  class="active_icon"
  src=${item.icon_active}
/>
  <p>${item.text}</p>
</div>
<span class="material-symbols-outlined"> chevron_right </span>
</label>`
})
option.innerHTML=data
let data1=``
arr.map((item,idx)=>{
    data1= data1 + `<div class="accordion-item" >
    <h2 class="accordion-header" id="flush-heading${idx}">
      <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${idx}" aria-expanded="false" aria-controls="flush-collapse${idx}">
          <div class="option" >
              <div class="option_left">
                <img
                  src=${item.icon_inactive}
                />
                <p>${item.text}</p>
              </div>
              <span class="material-symbols-outlined"> expand_more </span>
          </div>
      </button>
    </h2>
    <div id="flush-collapse${idx}" class="accordion-collapse collapse" aria-labelledby="flush-heading${idx}" data-bs-parent="#invest-item-mobile">
      <div class="accordion-body" id=${item.text =="Portfolio Management Scheme"?"portfolio":""}>
          <div class="desc_header">
              <p>
              ${item.data.desc}
              </p>
              <a href=${item.cta_url}>
                ${item.cta_text}<span class="material-symbols-outlined"
                  >arrow_outward</span>
              </a>
              </div>${item.text =="Portfolio Management Scheme"?"":`<img src=${item.data.img_url}`}
              />
      </div>
    </div>
    </div>`
    })

document.getElementById("Mutual_Funds").defaultChecked=true
desc_ele.innerHTML=`<div class="desc_header">
<p>
Only platform built for NRIs to <span style='color:white;font-weight:600'>invest digitally & easily in Mutual Funds.</span>  Get FREE expert advice to build your mutual fund  portfolio from scratch.
</p>
<a href="https://web.archive.org/web/20240917184228/https://sbnriapp.page.link/main_site">
  Download Now<span class="material-symbols-outlined"
    >arrow_outward</span
  >
</a>
</div>
<img src="https://web.archive.org/web/20240917184228/https://di8fe63pyr9j5.cloudfront.net/12-09-2022-09:08:14_mf_new.png"
/>`


mobile_data.innerHTML=data1
const investChange=(radio)=>{
console.log(desc_ele.classList)
if (radio.value == "Portfolio_Management_Scheme"){
    desc_ele.classList.add("portfolio_web")
}else{
    desc_ele.classList.remove("portfolio_web")
}
console.log(desc_ele.classList)
const get_data=invest_desc[radio.value]
desc_ele.innerHTML=`<div class="desc_header">
<p>
  ${get_data.desc}
</p>
<a href=${get_data.cta_url}>
                ${get_data.cta_text}<span class="material-symbols-outlined"
                  >arrow_outward</span>
              </a>
</div>
${radio.value == "Portfolio_Management_Scheme"?"":`<img src=${get_data.img_url}`}

/>`
}




}
/*
     FILE ARCHIVED ON 18:42:28 Sep 17, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:39 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.652
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 17.125
  LoadShardBlock: 343.24 (3)
  PetaboxLoader3.datanode: 373.853 (5)
  PetaboxLoader3.resolve: 443.948 (3)
  load_resource: 506.116 (2)
*/