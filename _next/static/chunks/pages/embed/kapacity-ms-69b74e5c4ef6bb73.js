(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{1936:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/kapacity-ms",function(){return n(1966)}])},3791:function(t,e,n){"use strict";n.d(e,{pl:function(){return i},Ru:function(){return c},zw:function(){return l},Rr:function(){return u},zm:function(){return s},lA:function(){return f},Qo:function(){return d},Vx:function(){return p}});var r=n(7294);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/orp.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},c=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/okresy.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},l=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/kraje.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},u=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/capacities_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},s=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/accommodation_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},f=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/ukrainian_pupils_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},d=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/psychologists_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},p=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/children_groups_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n}},1220:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(5893),o=n(7294),a=n(3935),i=n(5078),c=n(6370),l=n(6486),u=n(4519),s=n(7360),f=n.n(s);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){var e=t.fillByOrpId,n=t.krajeData,a=t.orpData,i=t.renderTooltipContent,c=t.selectedOrpId,u=t.setSelectedOrpId,s=o.useRef(null),d=o.useRef(null),m=p(o.useState(null),2),v=m[0],y=m[1],b=p(o.useState(null),2),j=b[0],g=b[1],_=o.useCallback((function(){if(s.current){var t=s.current.getBoundingClientRect();y(t.width),g(.583*t.width)}}),[y,g]),E=o.useCallback((0,l.debounce)(_,200),[_]);o.useEffect((function(){return window.addEventListener("resize",E),_(),function(){window.removeEventListener("resize",E)}}),[E]),o.useEffect((function(){a&&n&&h({svgDomEl:d.current,containerDomEl:s.current,width:v,height:j,orpData:a,krajeData:n,fillByOrpId:e,selectedOrpId:c,setSelectedOrpId:u,renderTooltipContent:i})}),[v,j,a,n,e,c,u,i]);var k=o.useCallback((function(t){d.current&&d.current===t.target&&u(null)}),[u,d]);return(0,r.jsx)("div",{ref:s,className:f().container,onClick:k,children:(0,r.jsx)("svg",{ref:d,width:v,height:j})})}var h=function(t){var e=t.svgDomEl,n=t.containerDomEl,r=t.width,o=t.height,a=t.orpData,l=t.krajeData,u=t.fillByOrpId,s=t.selectedOrpId,f=t.setSelectedOrpId,d=t.renderTooltipContent,p=c.Z(a,a.objects.tracts),m=c.Z(l,l.objects.tracts),h=i.Ys(e);h.selectAll("*").remove(),i.Ys(n).selectAll(".map-tooltip").remove();var b=i.mw4().fitSize([r,o],p),j=i.l49().projection(b);h.selectAll(".orp").data(p.features).enter().append("path").attr("d",j).attr("class",(function(t){return"orp orp-".concat(t.id)})).attr("fill",(function(t){return u[t.id]})).attr("opacity",(function(t){return s&&t.id!==s?.3:1})).attr("stroke","#000000").attr("stroke-width",(function(t){return t.id===s?2:.5})).on("click",(function(t,e){s!==e.id?f(e.id):f(null)})).on("mouseover",(function(t,e){null!==s&&e.id!==s&&t.currentTarget.setAttribute("opacity",1),y({containerDomEl:n}),v({referenceDomEl:t.currentTarget,containerDomEl:n,feature:e,renderTooltipContent:d})})).on("mouseout",(function(t,e){null!==s&&e.id!==s&&t.currentTarget.setAttribute("opacity",.3),y({containerDomEl:n}),s&&v({referenceDomEl:h.select(".orp.orp-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(t){return t.id===s})),renderTooltipContent:d})})),h.selectAll(".kraj").data(m.features).enter().append("path").attr("d",j).attr("class",(function(t){return"kraj kraj-".concat(t.id)})).attr("fill","transparent").attr("opacity",(function(){return s?.15:1})).attr("stroke","#000000").attr("stroke-width",r>600?1.5:1.3).attr("pointer-events","none"),s&&(h.select(".orp.orp-".concat(s)).raise(),v({referenceDomEl:h.select(".orp.orp-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(t){return t.id===s})),renderTooltipContent:d}))},v=function(t){var e=t.referenceDomEl,n=t.containerDomEl,r=t.feature,o=t.renderTooltipContent,i=document.createElement("div");i.classList.add("map-tooltip"),i.classList.add("map-tooltip-orp-".concat(r.id)),i.innerHTML='\n    <div class="tooltip-arrow" data-popper-arrow></div>\n    <div class="tooltip-content"></div>\n    ',n.append(i),a.render(o(r.id,r),i.querySelector(".tooltip-content")),(0,u.fi)(e,i,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{fallbackPlacements:["left"],boundary:n}}]})},y=function(t){var e=t.containerDomEl;i.Ys(e).selectAll(".map-tooltip").each((function(){this.remove()}))}},7021:function(t,e,n){"use strict";n.d(e,{D:function(){return a}});var r=n(7294),o=n(6486);var a=function(t){var e=r.useRef(null),n=r.useCallback((function(){if(e.current){var n=e.current.getBoundingClientRect().height;window.parent&&window.parent.postMessage({"paq-ukrajina-embed-height":(r={},o=t,a=n,o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)},"*")}var r,o,a}),[t]),a=r.useCallback((0,o.debounce)((function(){n(),setTimeout((function(){return n()}),300),setTimeout((function(){return n()}),1e3),setTimeout((function(){return n()}),5e3)}),50),[n]);return r.useEffect((function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[a]),{containerRef:e}}},1966:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return y}});var r=n(5893),o=n(7294),a=n(9008),i=n(5078),c=n(6486),l=n(1220),u=n(7021),s=n(3791),f=n(6292),d=n.n(f);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=!0;function y(t){var e=t.baseUrl,n=(0,s.pl)(e),f=(0,s.zw)(e),p=(0,s.Rr)(e),v=(0,u.D)("paq-ukrajina-kapacity-ms").containerRef,y=h(o.useState(null),2),b=y[0],j=y[1],g=o.useMemo((function(){if(!p)return{};var t=i.ut0().domain([60,70,80,90,100]).range(["#FEF0D9","#C4D3C9","#79ABB0","#288893","#005B6E"]);return p.reduce((function(e,n){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}({},e,m({},n.id,t(n.ms_naplnenost_22)))}),{})}),[p]),_=o.useMemo((function(){return(0,c.keyBy)(p,"id")}),[p]);return n&&f&&p?(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Napln\u011bnost mate\u0159sk\xfdch \u0161kol v ORP"})}),(0,r.jsxs)("main",{className:d().container,ref:v,children:[(0,r.jsx)("h1",{children:"Napln\u011bnost mate\u0159sk\xfdch \u0161kol v\xa0ORP"}),(0,r.jsx)("div",{className:d().legend,children:[{label:"0\u201360 %",color:"#FEF0D9"},{label:"60\u201370 %",color:"#C4D3C9"},{label:"70\u201380 %",color:"#79ABB0"},{label:"80\u201390 %",color:"#288893"},{label:"90\u2013100 %",color:"#005B6E"}].map((function(t){return(0,r.jsxs)("div",{className:"legend-item",children:[(0,r.jsx)("span",{className:"dot",style:{backgroundColor:t.color}}),t.label]},t.color)}))}),(0,r.jsx)("div",{className:d().mapWrapper,children:(0,r.jsx)(l.Z,{orpData:n,krajeData:f,selectedOrpId:b,setSelectedOrpId:j,fillByOrpId:g,renderTooltipContent:function(t,e){return(0,r.jsxs)("div",{className:d().tooltipContent,children:[(0,r.jsxs)("div",{className:"tooltip-orp",children:[(0,r.jsx)("div",{className:"tooltip-orp-name",children:e.properties.NAZEV}),(0,r.jsx)("div",{className:"tooltip-region",children:e.properties.VUSC_NAZEV})]}),(0,r.jsx)("div",{className:"main-value-line",children:(0,r.jsxs)("strong",{children:[Math.round(_[t].ms_naplnenost_22)," %"," ","napln\u011bnost M\u0160"]})}),(0,r.jsxs)("div",{className:"value-line",children:[_[t].ms_kapacita.toLocaleString("cs-CZ")," ","celkem m\xedst v M\u0160"]}),(0,r.jsxs)("div",{className:"value-line",children:[_[t].volna_mista_ms.toLocaleString("cs-CZ")," ","voln\xfdch m\xedst"]}),(0,r.jsxs)("div",{className:"value-line",children:[_[t].pocet_ms.toLocaleString("cs-CZ")," ","mate\u0159sk\xfdch \u0161kol"]})]})}})}),(0,r.jsx)("div",{className:d().footer,children:(0,r.jsxs)("div",{className:"footer-item",children:["Zdroj dat:"," ",(0,r.jsx)("a",{href:"https://www.paqresearch.cz/",target:"_blank",rel:"noreferrer",children:"PAQ\xa0Research"}),","," ",(0,r.jsx)("a",{href:"https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=dsady_RUIAN_vse&metadataID=CZ-00025712-CUZK_SERIES-MD_RUIAN-STATY-SHP",target:"_blank",rel:"noreferrer",children:"\u010c\xdaZK (CC-BY)"})]})})]})]}):null}},7360:function(t){t.exports={container:"EmbedOrpMap_container__UT7eF"}},6292:function(t){t.exports={container:"Embed_container__ImSXK",legend:"Embed_legend__5L3Sc",mapWrapper:"Embed_mapWrapper__ZwHme",footer:"Embed_footer__rzS6S",tooltipContent:"Embed_tooltipContent__yVlKk"}}},function(t){t.O(0,[662,780,774,888,179],(function(){return e=1936,t(t.s=e);var e}));var e=t.O();_N_E=e}]);