(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{7487:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/psychologove",function(){return n(4492)}])},879:function(t,e,n){"use strict";n.d(e,{pl:function(){return i},Ru:function(){return c},zw:function(){return u},Rr:function(){return l},zm:function(){return s},lA:function(){return f},Qo:function(){return d},Vx:function(){return p},W4:function(){return h}});var r=n(7294);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/orp.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},c=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/okresy.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},u=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/kraje.topo.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},l=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/capacities_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},s=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/accommodation_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},f=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/ukrainian_pupils_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},d=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/psychologists_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},p=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/children_groups_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n},h=function(t){var e=a(r.useState(null),2),n=e[0],o=e[1];return r.useEffect((function(){fetch(t+"/counselling_data.json").then((function(t){t.ok&&t.json().then((function(t){o(t)}))}))}),[]),n}},59:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(5893),o=n(7294),a=n(3935),i=n(5078),c=n(6370),u=n(6486),l=n(4519),s=n(6418),f=n.n(s);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){var e=t.fillByOrpId,n=t.krajeData,a=t.orpData,i=t.renderTooltipContent,c=t.selectedOrpId,l=t.setSelectedOrpId,s=o.useRef(null),d=o.useRef(null),h=p(o.useState(null),2),v=h[0],y=h[1],b=p(o.useState(null),2),j=b[0],g=b[1],_=o.useCallback((function(){if(s.current){var t=s.current.getBoundingClientRect();y(t.width),g(.583*t.width)}}),[y,g]),k=o.useCallback((0,u.debounce)(_,200),[_]);o.useEffect((function(){return window.addEventListener("resize",k),_(),function(){window.removeEventListener("resize",k)}}),[k]),o.useEffect((function(){a&&n&&m({svgDomEl:d.current,containerDomEl:s.current,width:v,height:j,orpData:a,krajeData:n,fillByOrpId:e,selectedOrpId:c,setSelectedOrpId:l,renderTooltipContent:i})}),[v,j,a,n,e,c,l,i]);var E=o.useCallback((function(t){d.current&&d.current===t.target&&l(null)}),[l,d]);return(0,r.jsx)("div",{ref:s,className:f().container,onClick:E,children:(0,r.jsx)("svg",{ref:d,width:v,height:j})})}var m=function(t){var e=t.svgDomEl,n=t.containerDomEl,r=t.width,o=t.height,a=t.orpData,u=t.krajeData,l=t.fillByOrpId,s=t.selectedOrpId,f=t.setSelectedOrpId,d=t.renderTooltipContent,p=c.Z(a,a.objects.tracts),h=c.Z(u,u.objects.tracts),m=i.Ys(e);m.selectAll("*").remove(),i.Ys(n).selectAll(".map-tooltip").remove();var b=i.mw4().fitSize([r,o],p),j=i.l49().projection(b);m.selectAll(".orp").data(p.features).enter().append("path").attr("d",j).attr("class",(function(t){return"orp orp-".concat(t.id)})).attr("fill",(function(t){return l[t.id]})).attr("opacity",(function(t){return s&&t.id!==s?.3:1})).attr("stroke","#000000").attr("stroke-width",(function(t){return t.id===s?2:.5})).on("click",(function(t,e){s!==e.id?f(e.id):f(null)})).on("mouseover",(function(t,e){null!==s&&e.id!==s&&t.currentTarget.setAttribute("opacity",1),y({containerDomEl:n}),v({referenceDomEl:t.currentTarget,containerDomEl:n,feature:e,renderTooltipContent:d})})).on("mouseout",(function(t,e){null!==s&&e.id!==s&&t.currentTarget.setAttribute("opacity",.3),y({containerDomEl:n}),s&&v({referenceDomEl:m.select(".orp.orp-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(t){return t.id===s})),renderTooltipContent:d})})),m.selectAll(".kraj").data(h.features).enter().append("path").attr("d",j).attr("class",(function(t){return"kraj kraj-".concat(t.id)})).attr("fill","transparent").attr("opacity",(function(){return s?.15:1})).attr("stroke","#000000").attr("stroke-width",r>600?1.5:1.3).attr("pointer-events","none"),s&&(m.select(".orp.orp-".concat(s)).raise(),v({referenceDomEl:m.select(".orp.orp-".concat(s)).node(),containerDomEl:n,feature:p.features.find((function(t){return t.id===s})),renderTooltipContent:d}))},v=function(t){var e=t.referenceDomEl,n=t.containerDomEl,r=t.feature,o=t.renderTooltipContent,i=document.createElement("div");i.classList.add("map-tooltip"),i.classList.add("map-tooltip-orp-".concat(r.id)),i.innerHTML='\n    <div class="tooltip-arrow" data-popper-arrow></div>\n    <div class="tooltip-content"></div>\n    ',n.append(i),a.render(o(r.id,r),i.querySelector(".tooltip-content")),(0,l.fi)(e,i,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{fallbackPlacements:["left"],boundary:n}}]})},y=function(t){var e=t.containerDomEl;i.Ys(e).selectAll(".map-tooltip").each((function(){this.remove()}))}},2069:function(t,e,n){"use strict";n.d(e,{D:function(){return a}});var r=n(7294),o=n(6486);var a=function(t){var e=r.useRef(null),n=r.useCallback((function(){if(e.current){var n=e.current.getBoundingClientRect().height;window.parent&&window.parent.postMessage({"paq-ukrajina-embed-height":(r={},o=t,a=n,o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)},"*")}var r,o,a}),[t]),a=r.useCallback((0,o.debounce)((function(){n(),setTimeout((function(){return n()}),300),setTimeout((function(){return n()}),1e3),setTimeout((function(){return n()}),5e3)}),50),[n]);return r.useEffect((function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[a]),{containerRef:e}}},4492:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return y}});var r=n(5893),o=n(7294),a=n(9008),i=(n(5078),n(6486)),c=n(59),u=n(2069),l=n(879),s=n(5750),f=n.n(s);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){p(t,e,n[e])}))}return t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=!0;function y(t){var e=t.baseUrl,n=(0,l.pl)(e),s=(0,l.zw)(e),d=(0,l.Qo)(e),v=(0,u.D)("paq-ukrajina-psychologove").containerRef,y=m(o.useState(null),2),b=y[0],j=y[1],g=[{label:"600-1000",color:"#FEF0D9"},{label:"1000-2000",color:"#C4D3C9"},{label:"2000-4000",color:"#79ABB0"},{label:"4000-40000",color:"#288893"},{label:"\u017e\xe1dn\xfd psycholog",color:"#747474"}],_=o.useMemo((function(){if(!d)return{};var t=g.reduce((function(t,e){return h({},t,p({},e.label,e.color))}),{});return d.reduce((function(e,n){return h({},e,p({},n.id,t[n.psycholog_uvazek_na_pocet_zaku]))}),{})}),[d,g]),k=o.useMemo((function(){return(0,i.keyBy)(d,"id")}),[d]);return n&&s&&d?(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Po\u010det \u017e\xe1k\u016f v\xa0p\u0159epo\u010dtu na jednoho psychologa v\xa0ORP"})}),(0,r.jsxs)("main",{className:f().container,ref:v,children:[(0,r.jsx)("h1",{children:"Po\u010det \u017e\xe1k\u016f v\xa0p\u0159epo\u010dtu na jednoho psychologa v\xa0ORP"}),(0,r.jsx)("div",{className:f().legend,children:g.map((function(t){return(0,r.jsxs)("div",{className:"legend-item",children:[(0,r.jsx)("span",{className:"dot",style:{backgroundColor:t.color}}),t.label.replace("-","\u2013")]},t.color)}))}),(0,r.jsx)("div",{className:f().mapWrapper,children:(0,r.jsx)(c.Z,{orpData:n,krajeData:s,selectedOrpId:b,setSelectedOrpId:j,fillByOrpId:_,renderTooltipContent:function(t,e){return(0,r.jsxs)("div",{className:f().tooltipContent,children:[(0,r.jsxs)("div",{className:"tooltip-orp",children:[(0,r.jsx)("div",{className:"tooltip-orp-name",children:e.properties.NAZEV}),(0,r.jsx)("div",{className:"tooltip-region",children:e.properties.VUSC_NAZEV})]}),(0,r.jsx)("div",{className:"main-value-line",children:(0,r.jsx)("strong",{children:"\u017e\xe1dn\xfd psycholog"===k[t].psycholog_uvazek_na_pocet_zaku?"\u017e\xe1dn\xfd psycholog":(0,r.jsxs)(r.Fragment,{children:[k[t].psycholog_uvazek_na_pocet_zaku.replace("-","\u2013")," ","\u017e\xe1k\u016f v p\u0159epo\u010dtu na jednoho psychologa"]})})})]})}})}),(0,r.jsx)("div",{className:f().footer,children:(0,r.jsxs)("div",{className:"footer-item",children:["Zdroj dat:"," ",(0,r.jsx)("a",{href:"https://www.paqresearch.cz/",target:"_blank",rel:"noreferrer",children:"PAQ\xa0Research"}),","," ",(0,r.jsx)("a",{href:"https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=dsady_RUIAN_vse&metadataID=CZ-00025712-CUZK_SERIES-MD_RUIAN-STATY-SHP",target:"_blank",rel:"noreferrer",children:"\u010c\xdaZK (CC-BY)"})]})})]})]}):null}},6418:function(t){t.exports={container:"EmbedOrpMap_container__rf9Af"}},5750:function(t){t.exports={container:"Embed_container__SJCYq",legend:"Embed_legend__Lmhlg",mapWrapper:"Embed_mapWrapper__OWFyK",footer:"Embed_footer__5kevP",tooltipContent:"Embed_tooltipContent__oG_2P"}}},function(t){t.O(0,[662,780,774,888,179],(function(){return e=7487,t(t.s=e);var e}));var e=t.O();_N_E=e}]);