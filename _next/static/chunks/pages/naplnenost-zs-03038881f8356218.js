(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{1212:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/naplnenost-zs",function(){return n(7913)}])},8960:function(e,a,n){"use strict";n.d(a,{Z:function(){return h}});var t=n(5893),r=n(7294),i=n(9008),c=n(1664),o=n(1163),d=n(7739),s=n.n(d),l=n(1136),u=n.n(l);function h(e){var a=e.children,n=e.mapConfigs,d=(0,o.useRouter)(),l=s()(n,"category");return(0,t.jsxs)("div",{className:u().container,children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"Integrace ukrajinsk\xfdch uprchl\xedk\u016f v \u010cR 2022+ \u2014 Interakivn\xed mapy"})}),(0,t.jsxs)("header",{className:u().header,children:[(0,t.jsx)(c.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("h1",{children:"Integrace ukrajinsk\xfdch uprchl\xedk\u016f v \u010cR 2022+"})})}),(0,t.jsxs)("p",{children:["Interaktivn\xed mapy ke studii"," ",(0,t.jsx)("a",{href:"https://www.paqresearch.cz/",target:"_blank",rel:"noreferrer",children:"PAQ Research"})," ","a"," ",(0,t.jsx)("a",{href:"https://ceskepriority.cz/",target:"_blank",rel:"noreferrer",children:"\u010cesk\xe9 priority"})]})]}),(0,t.jsxs)("main",{className:u().main,children:[(0,t.jsx)("nav",{className:u().nav,children:Object.keys(l).map((function(e){return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("h2",{children:e}),(0,t.jsx)("ul",{children:l[e].map((function(e){return(0,t.jsx)("li",{className:"".concat(d.pathname===e.path?"active":""),children:(0,t.jsx)("a",{href:d.basePath+e.path,children:e.navLabel})},e.path)}))})]},e)}))}),(0,t.jsx)("div",{className:u().content,children:a})]})]})}},6983:function(e,a,n){"use strict";n.d(a,{s:function(){return h}});var t=n(4051),r=n.n(t),i=n(5893),c=n(1163),o=n(8960),d=n(234),s=n(4538),l=n.n(s);function u(e,a,n,t,r,i,c){try{var o=e[i](c),d=o.value}catch(s){return void n(s)}o.done?a(d):Promise.resolve(d).then(t,r)}var h=function(e){var a=e.baseUrl,n=(0,c.useRouter)(),t=d.Z.find((function(e){return e.path===n.pathname}));return(0,i.jsx)(o.Z,{mapConfigs:d.Z,children:(0,i.jsxs)("article",{className:l().container,children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:p(t,a)}}),(0,i.jsx)("h2",{children:"K\xf3d k vlo\u017een\xed do vlastn\xedch str\xe1nek"}),(0,i.jsx)("pre",{className:l().pre,children:(0,i.jsx)("code",{children:p(t,a).trim()})}),(0,i.jsx)("h2",{children:"Ke sta\u017een\xed"}),(0,i.jsx)("a",{href:a+"/"+t.embedId+".png",download:!0,className:l().downloadLink,children:"St\xe1hnout jako .png"})]})})},p=function(e,a){var n=a+e.embedSrc;return'\n<iframe src="'.concat(n,'" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="450" id="').concat(e.embedId,'"></iframe>\n<script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["paq-ukrajina-embed-height"])for(var e in a.data["paq-ukrajina-embed-height"])if("').concat(e.embedId,'"==e){var d=document.querySelector("#').concat(e.embedId,'");d&&(d.style.height=a.data["paq-ukrajina-embed-height"][e]+"px")}});<\/script>\n  ')};!function(){var e,a=(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{props:{baseUrl:"https://vlki.github.io/paq-ukrajina-mapy"}});case 1:case"end":return e.stop()}}),e)})),function(){var a=this,n=arguments;return new Promise((function(t,r){var i=e.apply(a,n);function c(e){u(i,t,r,c,o,"next",e)}function o(e){u(i,t,r,c,o,"throw",e)}c(void 0)}))})}()},234:function(e,a){"use strict";a.Z=[{path:"/bydleni",navLabel:"Voln\xe1 l\u016f\u017eka celkem",embedSrc:"/embed/bydleni",embedId:"paq-ukrajina-bydleni",category:"Bydlen\xed"},{path:"/byty-sreality",navLabel:"Byty k pron\xe1jmu na Sreality.cz",embedSrc:"/embed/byty-sreality",embedId:"paq-ukrajina-byty-sreality",category:"Bydlen\xed"},{path:"/byty-obecni",navLabel:"Dostupn\xe9 obecn\xed byty",embedSrc:"/embed/byty-obecni",embedId:"paq-ukrajina-byty-obecni",category:"Bydlen\xed"},{path:"/luzka-hotely",navLabel:"Odhadovan\xe1 voln\xe1 l\u016f\u017eka v\xa0hotel\xedch",embedSrc:"/embed/luzka-hotely",embedId:"paq-ukrajina-luzka-hotely",category:"Bydlen\xed"},{path:"/naplnenost-zs",navLabel:"Napln\u011bnost z\xe1kladn\xedch \u0161kol",embedSrc:"/embed/naplnenost-zs",embedId:"paq-ukrajina-naplnenost-zs",category:"Vzd\u011bl\xe1v\xe1n\xed"},{path:"/naplnenost-ms",navLabel:"Napln\u011bnost mate\u0159sk\xfdch \u0161kol",embedSrc:"/embed/naplnenost-ms",embedId:"paq-ukrajina-naplnenost-ms",category:"Vzd\u011bl\xe1v\xe1n\xed"},{path:"/ukrajinsti-zaci",navLabel:"Ukrajin\u0161t\xed \u017e\xe1ci",embedSrc:"/embed/ukrajinsti-zaci",embedId:"paq-ukrajina-ukrajinsti-zaci",category:"Vzd\u011bl\xe1v\xe1n\xed"},{path:"/psychologove",navLabel:"\u017d\xe1k\u016f na jednoho psychologa",embedSrc:"/embed/psychologove",embedId:"paq-ukrajina-psychologove",category:"Vzd\u011bl\xe1v\xe1n\xed"},{path:"/poradny",navLabel:"Vyt\xed\u017eenost pedagogick\xfdch pracovn\xedk\u016f poraden",embedSrc:"/embed/poradny",embedId:"paq-ukrajina-poradny",category:"Vzd\u011bl\xe1v\xe1n\xed"},{path:"/detske-skupiny",navLabel:"Kapacita d\u011btsk\xfdch skupin",embedSrc:"/embed/detske-skupiny",embedId:"paq-ukrajina-detske-skupiny",category:"Vzd\u011bl\xe1v\xe1n\xed"}]},7913:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSG:function(){return i},default:function(){return c}});var t=n(5893),r=n(6983),i=!0;function c(e){var a=e.baseUrl;return(0,t.jsx)(r.s,{baseUrl:a})}},1136:function(e){e.exports={container:"CatalogueLayout_container__MZPLK",header:"CatalogueLayout_header__mmj1Y",main:"CatalogueLayout_main__lSt4_",nav:"CatalogueLayout_nav__OMJv2",content:"CatalogueLayout_content__se3vY"}},4538:function(e){e.exports={container:"MapPage_container__ay4R3",pre:"MapPage_pre__MuSpy",downloadLink:"MapPage_downloadLink__ozknp"}}},function(e){e.O(0,[599,774,888,179],(function(){return a=1212,e(e.s=a);var a}));var a=e.O();_N_E=a}]);