(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{6303:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/detske-skupiny",function(){return n(4849)}])},3791:function(e,t,n){"use strict";n.d(t,{pl:function(){return a},Ru:function(){return c},zw:function(){return u},Rr:function(){return l},zm:function(){return s},lA:function(){return f},Qo:function(){return d},Vx:function(){return p},W4:function(){return h}});var r=n(7294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/orp.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},c=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/okresy.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},u=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/kraje.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},l=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/capacities_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},s=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/accommodation_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},f=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/ukrainian_pupils_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},d=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/psychologists_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},p=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/children_groups_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},h=function(e){var t=i(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/counselling_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n}},9305:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),o=n(7294),i=n(3935),a=n(5078),c=n(6370),u=n(6486),l=n(4519),s=n(3075),f=n.n(s);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var t=e.fillByOkresId,n=e.krajeData,i=e.okresyData,a=e.renderTooltipContent,c=e.selectedOkresId,l=e.setSelectedOkresId,s=o.useRef(null),d=o.useRef(null),h=p(o.useState(null),2),v=h[0],k=h[1],y=p(o.useState(null),2),b=y[0],j=y[1],g=o.useCallback((function(){if(s.current){var e=s.current.getBoundingClientRect();k(e.width),j(.583*e.width)}}),[k,j]),E=o.useCallback((0,u.debounce)(g,200),[g]);o.useEffect((function(){return window.addEventListener("resize",E),g(),function(){window.removeEventListener("resize",E)}}),[E]),o.useEffect((function(){i&&n&&m({svgDomEl:d.current,containerDomEl:s.current,width:v,height:b,okresyData:i,krajeData:n,fillByOkresId:t,selectedOkresId:c,setSelectedOkresId:l,renderTooltipContent:a})}),[v,b,i,n,t,c,l,a]);var w=o.useCallback((function(e){d.current&&d.current===e.target&&l(null)}),[l,d]);return(0,r.jsx)("div",{ref:s,className:f().container,onClick:w,children:(0,r.jsx)("svg",{ref:d,width:v,height:b})})}var m=function(e){var t=e.svgDomEl,n=e.containerDomEl,r=e.width,o=e.height,i=e.okresyData,u=e.krajeData,l=e.fillByOkresId,s=e.selectedOkresId,f=e.setSelectedOkresId,d=e.renderTooltipContent,p=c.Z(i,i.objects.tracts),h=c.Z(u,u.objects.tracts),m=a.Ys(t);m.selectAll("*").remove(),a.Ys(n).selectAll(".map-tooltip").remove();var y=a.mw4().fitSize([r,o],p),b=a.l49().projection(y);m.selectAll(".okres").data(p.features).enter().append("path").attr("d",b).attr("class",(function(e){return"okres okres-".concat(e.id)})).attr("fill",(function(e){return l[e.id]})).attr("opacity",(function(e){return s&&e.id!==s?.3:1})).attr("stroke","#000000").attr("stroke-width",(function(e){return e.id===s?2:.5})).on("click",(function(e,t){s!==t.id?f(t.id):f(null)})).on("mouseover",(function(e,t){null!==s&&t.id!==s&&e.currentTarget.setAttribute("opacity",1),k({containerDomEl:n}),v({referenceDomEl:e.currentTarget,containerDomEl:n,feature:t,renderTooltipContent:d})})).on("mouseout",(function(e,t){null!==s&&t.id!==s&&e.currentTarget.setAttribute("opacity",.3),k({containerDomEl:n}),s&&v({referenceDomEl:m.select(".okres.okres-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(e){return e.id===s})),renderTooltipContent:d})})),m.selectAll(".kraj").data(h.features).enter().append("path").attr("d",b).attr("class",(function(e){return"kraj kraj-".concat(e.id)})).attr("fill","transparent").attr("opacity",(function(){return s?.15:1})).attr("stroke","#000000").attr("stroke-width",r>600?1.5:1.3).attr("pointer-events","none"),s&&(m.select(".okres.okres-".concat(s)).raise(),v({referenceDomEl:m.select(".okres.okres-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(e){return e.id===s})),renderTooltipContent:d}))},v=function(e){var t=e.referenceDomEl,n=e.containerDomEl,r=e.feature,o=e.renderTooltipContent,a=document.createElement("div");a.classList.add("map-tooltip"),a.classList.add("map-tooltip-okres-".concat(r.id)),a.innerHTML='\n    <div class="tooltip-arrow" data-popper-arrow></div>\n    <div class="tooltip-content"></div>\n    ',n.append(a),i.render(o(r.id,r),a.querySelector(".tooltip-content")),(0,l.fi)(t,a,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{fallbackPlacements:["left"],boundary:n}}]})},k=function(e){var t=e.containerDomEl;a.Ys(t).selectAll(".map-tooltip").each((function(){this.remove()}))}},7021:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(7294),o=n(6486);var i=function(e){var t=r.useRef(null),n=r.useCallback((function(){if(t.current){var n=t.current.getBoundingClientRect().height;window.parent&&window.parent.postMessage({"paq-ukrajina-embed-height":(r={},o=e,i=n,o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r)},"*")}var r,o,i}),[e]),i=r.useCallback((0,o.debounce)((function(){n(),setTimeout((function(){return n()}),300),setTimeout((function(){return n()}),1e3),setTimeout((function(){return n()}),5e3)}),50),[n]);return r.useEffect((function(){return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[i]),{containerRef:t}}},4849:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return k}});var r=n(5893),o=n(7294),i=n(9008),a=n(5078),c=n(6486),u=n(9305),l=n(7021),s=n(3791),f=n(6292),d=n.n(f);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=!0;function k(e){var t=e.baseUrl,n=(0,s.Ru)(t),f=(0,s.zw)(t),p=(0,s.Vx)(t),v=(0,l.D)("paq-ukrajina-detske-skupiny").containerRef,k=m(o.useState(null),2),y=k[0],b=k[1],j=o.useMemo((function(){if(!p)return{};var e=a.ut0().domain([1,50,100,200,1e5]).range(["#FEF0D9","#C4D3C9","#79ABB0","#288893","#005B6E"]);return p.reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},t,h({},n.id,e(void 0!==n.kapacita?n.kapacita:0)))}),{})}),[p]),g=o.useMemo((function(){return(0,c.keyBy)(p,"id")}),[p]);return n&&f&&p?(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Kapacita d\u011btsk\xfdch skupin v\xa0okresech"})}),(0,r.jsxs)("main",{className:d().container,ref:v,children:[(0,r.jsx)("h1",{children:"Kapacita d\u011btsk\xfdch skupin v\xa0okresech"}),(0,r.jsx)("div",{className:d().legend,children:[{label:"0 m\xedst",color:"#FEF0D9"},{label:"1-50",color:"#C4D3C9"},{label:"50\u2013100",color:"#79ABB0"},{label:"100\u2013200",color:"#288893"},{label:"200 a v\xedce m\xedst",color:"#005B6E"}].map((function(e){return(0,r.jsxs)("div",{className:"legend-item",children:[(0,r.jsx)("span",{className:"dot",style:{backgroundColor:e.color}}),e.label]},e.color)}))}),(0,r.jsx)("div",{className:d().mapWrapper,children:(0,r.jsx)(u.Z,{okresyData:n,krajeData:f,selectedOkresId:y,setSelectedOkresId:b,fillByOkresId:j,renderTooltipContent:function(e,t){return(0,r.jsxs)("div",{className:d().tooltipContent,children:[(0,r.jsxs)("div",{className:"tooltip-orp",children:[(0,r.jsx)("div",{className:"tooltip-orp-name",children:t.properties.NAZEV}),(0,r.jsx)("div",{className:"tooltip-region",children:t.properties.VUSC_NAZEV})]}),(0,r.jsxs)("div",{className:"main-value-line",children:[(0,r.jsx)("strong",{children:void 0!==g[e]?(0,r.jsxs)(r.Fragment,{children:[g[e].kapacita.toLocaleString("cs-CZ")," ","m\xedst v\xa0d\u011btsk\xfdch skupin\xe1ch"]}):(0,r.jsx)(r.Fragment,{children:"0 m\xedst v\xa0d\u011btsk\xfdch skupin\xe1ch"})})," ",(0,r.jsx)("span",{className:"muted",children:"(obsazen\xfdch i\xa0neobsazen\xfdch)"})]}),(0,r.jsxs)("div",{className:"value-line",children:[(void 0!==g[e]?g[e].pocet_detskych_skupin:0).toLocaleString("cs-CZ")," ","d\u011btsk\xfdch skupin"]})]})}})}),(0,r.jsx)("div",{className:d().footer,children:(0,r.jsxs)("div",{className:"footer-item",children:["Zdroj dat:"," ",(0,r.jsx)("a",{href:"https://www.paqresearch.cz/",target:"_blank",rel:"noreferrer",children:"PAQ\xa0Research"}),","," ",(0,r.jsx)("a",{href:"https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=dsady_RUIAN_vse&metadataID=CZ-00025712-CUZK_SERIES-MD_RUIAN-STATY-SHP",target:"_blank",rel:"noreferrer",children:"\u010c\xdaZK (CC-BY)"})]})})]})]}):null}},3075:function(e){e.exports={container:"EmbedOkresyMap_container__jlZWm"}},6292:function(e){e.exports={container:"Embed_container__ImSXK",legend:"Embed_legend__5L3Sc",mapWrapper:"Embed_mapWrapper__ZwHme",footer:"Embed_footer__rzS6S",tooltipContent:"Embed_tooltipContent__yVlKk"}}},function(e){e.O(0,[662,780,774,888,179],(function(){return t=6303,e(e.s=t);var t}));var t=e.O();_N_E=t}]);