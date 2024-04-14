"use strict";(self["webpackChunkhr_report"]=self["webpackChunkhr_report"]||[]).push([[298],{2304:function(e,t,a){a.d(t,{A:function(){return h}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col justify-between gap-6 bg-white rounded-2xl p-6"},[t("div",{staticClass:"flex flex-col gap-3"},[t("div",{staticClass:"flex justify-between items-start"},[t("div",{staticClass:"flex items-center justify-center w-[58px] h-[58px] bg-white border border-borderGray rounded-lg overflow-hidden"},[e.companies.logo?t("img",{attrs:{src:e.companies.logo,alt:e.companies.logo}}):e._e(),t("div",{staticClass:"w-full h-full bg-gray-100"})]),e._m(0)]),t("div",{staticClass:"flex items-center gap-4"},[t("div",{staticClass:"text-xl font-bold"},[e._v(e._s(e.companies.companyName))]),t("div",{staticClass:"text-2xs text-center font-bold text-badgeText rounded-lg bg-badgeBg px-4 py-1"},[e._v(" "+e._s(e.companies.badgeName)+" ")])])]),t("main-button",{attrs:{text:"Click to see report"},on:{click:function(t){return e.seeReport()}}})],1)},o=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"px-2"},[t("img",{attrs:{src:a(382),alt:"3 dots"}})])}],s=function(){var e=this,t=e._self._c;return t("button",{staticClass:"relative w-full font-medium transition-all overflow-hidden h-[54px]",class:[e.buttonClass],staticStyle:{"border-radius":"10px"},style:e.disabled?"cursor: not-allowed;":"",attrs:{disabled:e.disabled,"aria-label":e.text},on:{click:function(t){!e.disabled&&e.$emit("click")}}},[e.loading?t("loader",{staticClass:"top-0"}):t("span",{staticClass:"text-sm"},[e._v(e._s(e.text))])],1)},n=[],l=(a(4114),a(1329)),r={props:{text:{type:String,required:!0},type:{type:String,default:"main"},size:{type:Number,default:2},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},components:{loader:l.A},computed:{buttonClass(){let e=[];return"main"===this.type&&(e.push("bg-white text-activeButton border border-borderGray hover:bg-activeButton hover:text-white"),this.disabled?e.push("opacity-30"):e.push("hover:opacity-80")),e}}},c=r,d=a(1656),p=(0,d.A)(c,s,n,!1,null,"7c44cf5f",null),u=p.exports,b={props:{companies:{type:Object,default:()=>{}}},components:{mainButton:u},methods:{seeReport(){window.open(this.companies.link,"_blank")}}},m=b,g=(0,d.A)(m,i,o,!1,null,null,null),h=g.exports},1329:function(e,t,a){a.d(t,{A:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("transition",{attrs:{"leave-to-class":"opacity-0","enter-class":"opacity-0"}},[t("div",{staticClass:"container absolute flex justify-center items-center text-center w-full h-full flex gap-3 z-10"},[t("div",{staticClass:"loader",class:e.loaderClasses})])])},o=[],s={props:{size:{type:Number,default:1}},computed:{loaderClasses(){let e="";return e=1==this.size?"w-2 h-2":2==this.size?"w-10 h-10":"w-13 h-13",e}}},n=s,l=a(1656),r=(0,l.A)(n,i,o,!1,null,"706f150e",null),c=r.exports},916:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-3 md:px-12 text-left"},[t("div",{staticClass:"flex flex-col gap-8"},[e._m(0),t("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"},e._l(e.managementDashboardFunc,(function(e,a){return t("card",{key:a,attrs:{companies:e}})})),1),e.managementDashboardFunc.length<=0?t("div",{staticClass:"font-bold text-subTitle"},[e._v(" No result... ")]):e._e()])])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col gap-2"},[t("div",{staticClass:"text-2xl font-bold"},[e._v("Group HR Analytics")]),t("div",{staticClass:"text-sm font-medium text-subTitle"},[e._v(" To explore different categories you can find them using the menu at the top of your screen. ")])])}],s=a(2304),n=a(8296),l=a(9152),r={data(){return{managementDashboard:n.y$,TrToEn:l.H}},components:{card:s.A},computed:{managementDashboardFunc(){return this.managementDashboard.filter((e=>this.TrToEn(e.companyName).toLowerCase().includes(this.$store.state.user.searchVal.toLowerCase())))}}},c=r,d=a(1656),p=(0,d.A)(c,i,o,!1,null,null,null),u=p.exports},8296:function(e,t,a){a.d(t,{YN:function(){return o},Zf:function(){return s},iz:function(){return n},y$:function(){return i}});const i=[{companyName:"PASHA Holding CC",badgeName:"Management Dashboard",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(7112),role:"ALL"}],o=[{companyName:"Pasha Bank",badgeName:"HR Committee",link:"https://app.powerbi.com/links/1b1e23uo60?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(2203),role:"ALL"},{companyName:"Kapital Bank",badgeName:"HR Committee",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(9456),role:"ALL"},{companyName:"PASHA Life",badgeName:"HR Committee",link:"https://app.powerbi.com/links/WfGm7VO__4?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(335),role:"ALL"},{companyName:"PASHA Insurance",badgeName:"HR Committee",link:"https://app.powerbi.com/links/s62Y7mUGzp?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(9077),role:"ALL"},{companyName:"Pasha Bank Georgia",badgeName:"HR Committee",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(2203),role:"ALL"},{companyName:"PASHA Bank Turkey",badgeName:"HR Committee",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(2203),role:"ALL"}],s=[{companyName:"Pasha Bank",badgeName:"SB Report",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(2203),role:"ALL"},{companyName:"PASHA Life",badgeName:"SB Report",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(335),role:"ALL"},{companyName:"PASHA Insurance",badgeName:"SB Report",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(9077),role:"ALL"}],n=[{companyName:"Group Mobility Report",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/8XheDFf1cV?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:null,role:"ALL"},{companyName:"Loyalty program - Deyerlisen",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/KN569gAxlf?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:null,role:"ALL"},{companyName:"Exit Survey - PASHA Bank",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(2203),role:"ALL"},{companyName:"Exit Survey - PASHA Life",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(335),role:"ALL"},{companyName:"Exit Survey - PASHA Insurance",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(9077),role:"ALL"},{companyName:"Exit Survey - Kapital Bank",badgeName:"Group wide activities",link:"https://app.powerbi.com/links/EhgXbesice?ctid=de2ad714-c56e-4a86-8d9b-85198dba6c23&pbi_source=linkShare",logo:a(9456),role:"ALL"}]},382:function(e,t,a){e.exports=a.p+"img/dots.df575980.svg"},9456:function(e,t,a){e.exports=a.p+"img/kapital-bank.61bd6066.png"},7112:function(e,t,a){e.exports=a.p+"img/pasa-holding.30ccf1a9.png"},2203:function(e,t,a){e.exports=a.p+"img/pasha-bank.446da1fd.png"},9077:function(e,t,a){e.exports=a.p+"img/pasha-insurance.a1454927.png"},335:function(e,t,a){e.exports=a.p+"img/pasha-life.e7fdd26c.png"}}]);
//# sourceMappingURL=managementDashboard.8cd4205f.js.map