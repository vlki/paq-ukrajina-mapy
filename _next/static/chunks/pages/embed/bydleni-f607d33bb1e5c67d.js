(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{574:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/bydleni",function(){return n(6323)}])},879:function(e,t,n){"use strict";n.d(t,{pl:function(){return i},Ru:function(){return c},zw:function(){return l},Rr:function(){return u},zm:function(){return s},lA:function(){return f},Qo:function(){return d},Vx:function(){return h},W4:function(){return p}});var r=n(7294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/orp.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},c=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/okresy.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},l=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/kraje.topo.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},u=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/capacities_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},s=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/accommodation_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},f=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/ukrainian_pupils_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},d=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/psychologists_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},h=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/children_groups_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n},p=function(e){var t=a(r.useState(null),2),n=t[0],o=t[1];return r.useEffect((function(){fetch(e+"/counselling_data.json").then((function(e){e.ok&&e.json().then((function(e){o(e)}))}))}),[]),n}},9785:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),o=n(7294),a=n(3935),i=n(5078),c=n(6370),l=n(6486),u=n(4519),s=n(88),f=n.n(s);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){var t=e.fillByOkresId,n=e.krajeData,a=e.okresyData,i=e.renderTooltipContent,c=e.selectedOkresId,u=e.setSelectedOkresId,s=o.useRef(null),d=o.useRef(null),p=h(o.useState(null),2),v=p[0],y=p[1],b=h(o.useState(null),2),k=b[0],j=b[1],g=o.useCallback((function(){if(s.current){var e=s.current.getBoundingClientRect();y(e.width),j(.583*e.width)}}),[y,j]),E=o.useCallback((0,l.debounce)(g,200),[g]);o.useEffect((function(){return window.addEventListener("resize",E),g(),function(){window.removeEventListener("resize",E)}}),[E]),o.useEffect((function(){a&&n&&m({svgDomEl:d.current,containerDomEl:s.current,width:v,height:k,okresyData:a,krajeData:n,fillByOkresId:t,selectedOkresId:c,setSelectedOkresId:u,renderTooltipContent:i})}),[v,k,a,n,t,c,u,i]);var _=o.useCallback((function(e){d.current&&d.current===e.target&&u(null)}),[u,d]);return(0,r.jsx)("div",{ref:s,className:f().container,onClick:_,children:(0,r.jsx)("svg",{ref:d,width:v,height:k})})}var m=function(e){var t=e.svgDomEl,n=e.containerDomEl,r=e.width,o=e.height,a=e.okresyData,l=e.krajeData,u=e.fillByOkresId,s=e.selectedOkresId,f=e.setSelectedOkresId,d=e.renderTooltipContent,h=c.Z(a,a.objects.tracts),p=c.Z(l,l.objects.tracts),m=i.Ys(t);m.selectAll("*").remove(),i.Ys(n).selectAll(".map-tooltip").remove();var b=i.mw4().fitSize([r,o],h),k=i.l49().projection(b);m.selectAll(".okres").data(h.features).enter().append("path").attr("d",k).attr("class",(function(e){return"okres okres-".concat(e.id)})).attr("fill",(function(e){return u[e.id]})).attr("opacity",(function(e){return s&&e.id!==s?.3:1})).attr("stroke","#000000").attr("stroke-width",(function(e){return e.id===s?2:.5})).on("click",(function(e,t){s!==t.id?f(t.id):f(null)})).on("mouseover",(function(e,t){null!==s&&t.id!==s&&e.currentTarget.setAttribute("opacity",1),y({containerDomEl:n}),v({referenceDomEl:e.currentTarget,containerDomEl:n,feature:t,renderTooltipContent:d})})).on("mouseout",(function(e,t){null!==s&&t.id!==s&&e.currentTarget.setAttribute("opacity",.3),y({containerDomEl:n}),s&&v({referenceDomEl:m.select(".okres.okres-".concat(s)).node(),containerDomEl:n,feature:h.features.find((function(e){return e.id===s})),renderTooltipContent:d})})),m.selectAll(".kraj").data(p.features).enter().append("path").attr("d",k).attr("class",(function(e){return"kraj kraj-".concat(e.id)})).attr("fill","transparent").attr("opacity",(function(){return s?.15:1})).attr("stroke","#000000").attr("stroke-width",r>600?1.5:1.3).attr("pointer-events","none"),s&&(m.select(".okres.okres-".concat(s)).raise(),v({referenceDomEl:m.select(".okres.okres-".concat(s)).node(),containerDomEl:n,feature:h.features.find((function(e){return e.id===s})),renderTooltipContent:d}))},v=function(e){var t=e.referenceDomEl,n=e.containerDomEl,r=e.feature,o=e.renderTooltipContent,i=document.createElement("div");i.classList.add("map-tooltip"),i.classList.add("map-tooltip-okres-".concat(r.id)),i.innerHTML='\n    <div class="tooltip-arrow" data-popper-arrow></div>\n    <div class="tooltip-content"></div>\n    ',n.append(i),a.render(o(r.id,r),i.querySelector(".tooltip-content")),(0,u.fi)(t,i,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{fallbackPlacements:["left"],boundary:n}}]})},y=function(e){var t=e.containerDomEl;i.Ys(t).selectAll(".map-tooltip").each((function(){this.remove()}))}},2069:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(7294),o=n(6486);var a=function(e){var t=r.useRef(null),n=r.useCallback((function(){if(t.current){var n=t.current.getBoundingClientRect().height;window.parent&&window.parent.postMessage({"paq-ukrajina-embed-height":(r={},o=e,a=n,o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)},"*")}var r,o,a}),[e]),a=r.useCallback((0,o.debounce)((function(){n(),setTimeout((function(){return n()}),300),setTimeout((function(){return n()}),1e3),setTimeout((function(){return n()}),5e3)}),50),[n]);return r.useEffect((function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[a]),{containerRef:t}}},6323:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return y}});var r=n(5893),o=n(7294),a=n(9008),i=n(5078),c=n(6486),l=n(9785),u=n(2069),s=n(879),f=n(5750),d=n.n(f);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=!0;function y(e){var t=e.baseUrl,n=(0,s.Ru)(t),f=(0,s.zw)(t),h=(0,s.zm)(t),v=(0,u.D)("paq-ukrajina-bydleni").containerRef,y=m(o.useState(null),2),b=y[0],k=y[1],j=o.useMemo((function(){if(!h)return{};var e=i.ut0().domain([500,1e3,1500,2e3,1e5]).range(["#FEF0D9","#C4D3C9","#79ABB0","#288893","#005B6E"]);return h.reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},t,p({},n.id,e(n.total_beds)))}),{})}),[h]),g=o.useMemo((function(){return(0,c.keyBy)(h,"id")}),[h]);return n&&f&&h?(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Voln\xe1 l\u016f\u017eka l\u016f\u017eek v bytech, hotel\xedch, apod. v okresech"})}),(0,r.jsxs)("main",{className:d().container,ref:v,children:[(0,r.jsx)("h1",{children:"Voln\xe1 l\u016f\u017eka v bytech, hotel\xedch, apod. v okresech"}),(0,r.jsx)("div",{className:d().legend,children:[{label:"500 a m\xe9n\u011b",color:"#FEF0D9"},{label:"500\u20131000",color:"#C4D3C9"},{label:"1000\u20131500",color:"#79ABB0"},{label:"1500\u20132000",color:"#288893"},{label:"2000 a v\xedce",color:"#005B6E"}].map((function(e){return(0,r.jsxs)("div",{className:"legend-item",children:[(0,r.jsx)("span",{className:"dot",style:{backgroundColor:e.color}}),e.label]},e.color)}))}),(0,r.jsx)("div",{className:d().mapWrapper,children:(0,r.jsx)(l.Z,{okresyData:n,krajeData:f,selectedOkresId:b,setSelectedOkresId:k,fillByOkresId:j,renderTooltipContent:function(e,t){return(0,r.jsxs)("div",{className:d().tooltipContent,children:[(0,r.jsxs)("div",{className:"tooltip-orp",children:[(0,r.jsx)("div",{className:"tooltip-orp-name",children:t.properties.NAZEV}),(0,r.jsx)("div",{className:"tooltip-region",children:t.properties.VUSC_NAZEV})]}),(0,r.jsxs)("div",{className:"main-value-line",children:[(0,r.jsxs)("strong",{children:[g[e].total_beds.toLocaleString("cs-CZ")," ","voln\xfdch l\u016f\u017eek celkem"]})," ",(0,r.jsx)("span",{className:"muted",children:"(s\xa0p\u0159edpokladem 4\xa0lid\xed na byt)"})]}),(0,r.jsxs)("div",{className:"value-line",children:[g[e].flats_sreality.toLocaleString("cs-CZ")," ","byt\u016f k pron\xe1jmu"," ",(0,r.jsx)("span",{className:"muted",children:"(Sreality.cz, za\u010d\xe1tek b\u0159ezna 2022)"})]}),(0,r.jsxs)("div",{className:"value-line",children:[g[e].flats_municipal.toLocaleString("cs-CZ")," ","dostupn\xfdch obecn\xedch byt\u016f"," ",(0,r.jsx)("span",{className:"muted",children:"(odhad 4\xa0% celkov\xe9ho fondu)"})]}),(0,r.jsxs)("div",{className:"value-line",children:[g[e].hotel_beds.toLocaleString("cs-CZ")," ","odhadovan\xfdch voln\xfdch l\u016f\u017eek v\xa0hotel\xedch apod. za\u0159\xedzen\xedch"," ",(0,r.jsx)("span",{className:"muted",children:"(realitick\xe1 varianta - kv\u011bten)"})]})]})}})}),(0,r.jsx)("div",{className:d().footer,children:(0,r.jsxs)("div",{className:"footer-item",children:["Zdroj dat:"," ",(0,r.jsx)("a",{href:"https://www.paqresearch.cz/",target:"_blank",rel:"noreferrer",children:"PAQ\xa0Research"}),","," ",(0,r.jsx)("a",{href:"https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=dsady_RUIAN_vse&metadataID=CZ-00025712-CUZK_SERIES-MD_RUIAN-STATY-SHP",target:"_blank",rel:"noreferrer",children:"\u010c\xdaZK (CC-BY)"})]})})]})]}):null}},88:function(e){e.exports={container:"EmbedOkresyMap_container__v9IVo"}},5750:function(e){e.exports={container:"Embed_container__SJCYq",legend:"Embed_legend__Lmhlg",mapWrapper:"Embed_mapWrapper__OWFyK",footer:"Embed_footer__5kevP",tooltipContent:"Embed_tooltipContent__oG_2P"}}},function(e){e.O(0,[662,780,774,888,179],(function(){return t=574,e(e.s=t);var t}));var t=e.O();_N_E=t}]);