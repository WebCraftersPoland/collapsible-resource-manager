!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){Nova.booting(function(t,e,a){t.component("collapsible-resource-manager",n(2))})},function(t,e,n){var a=n(8)(n(9),n(10),!1,function(t){n(3)},"data-v-318664a2",null);t.exports=a.exports},function(t,e,n){var a=n(4);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("74aa7e2a",a,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".collapsible-indicator[data-v-318664a2]{left:-20px;width:12px;height:12px;display:flex;justify-content:center;align-content:center}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(a[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,l=!1,d=function(){},m=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t){for(var e=0;e<t.length;e++){var n=t[e],a=s[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(y(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(y(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function y(t){var e,n,a=document.querySelector("style["+u+'~="'+t.id+'"]');if(a){if(l)return d;a.parentNode.removeChild(a)}if(f){var o=c++;a=r||(r=h()),e=b.bind(null,a,o,!1),n=b.bind(null,a,o,!0)}else a=h(),e=function(t,e){var n=e.css,a=e.media,o=e.sourceMap;a&&t.setAttribute("media",a);m.ssrId&&t.setAttribute(u,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}t.exports=function(t,e,n,a){l=n,m=a||{};var i=o(t,e);return p(i),function(e){for(var n=[],a=0;a<i.length;a++){var r=i[a];(c=s[r.id]).refs--,n.push(c)}e?p(i=o(t,e)):i=[];for(a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}};var v,g=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function b(t,e,n,a){var o=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t,e){for(var n=[],a={},o=0;o<e.length;o++){var s=e[o],i=s[0],r={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(r):n.push(a[i]={id:i,parts:[r]})}return n}},function(t,e){t.exports=function(t,e,n,a,o,s){var i,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,r=t.default);var l,d="function"==typeof r?r.options:r;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):a&&(l=a),l){var m=d.functional,u=m?d.render:d.beforeCreate;m?(d._injectStyles=l,d.render=function(t,e){return l.call(e),u(t,e)}):d.beforeCreate=u?[].concat(u,l):[l]}return{esModule:i,exports:r,options:d}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.enter?this.delay.enter:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},cleanUpStyles:function(t){var e=this;Object.keys(this.styles).forEach(function(n){e.styles[n]&&(t.style[n]="")}),t.style.animationDuration="",t.style.animationDelay=""},beforeLeave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.leave?this.delay.leave:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},leave:function(t){this.setAbsolutePosition(t)},setStyles:function(t){var e=this;this.setTransformOrigin(t),Object.keys(this.styles).forEach(function(n){var a=e.styles[n];a&&(t.style[n]=a)})},setAbsolutePosition:function(t){return this.group&&(t.style.position="absolute"),this},setTransformOrigin:function(t){return this.origin&&(t.style.transformOrigin=this.origin),this}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var o={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[a]};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var s={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[a]};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var i={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[a]};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var r={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" .collapse-move { transition: transform .3s ease-in-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var c={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"move-class":"collapse-move"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[a],methods:{transitionStyle:function(t){void 0===t&&(t=300);var e=t/1e3;return e+"s height ease-in-out, "+e+"s padding-top ease-in-out, "+e+"s padding-bottom ease-in-out"},beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.transition=this.transitionStyle(e),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0,this.setStyles(t)},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave:function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden",this.setStyles(t)},leave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;0!==t.scrollHeight&&(t.style.transition=this.transitionStyle(e),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0),this.setAbsolutePosition(t)},afterLeave:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var l={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[a],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var d={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var m={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var u={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var f={render:function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._g(this._b({tag:"component",attrs:{tag:this.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",this.$attrs,!1),this.hooks),[this._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},p={};function h(t,e){e&&e.components?e.components.forEach(function(e){return t.component(e.name,p[e.name])}):Object.keys(p).forEach(function(e){t.component(e,p[e])})}p[o.name]=o,p[s.name]=s,p[i.name]=i,p[r.name]=r,p[c.name]=c,p[l.name]=l,p[d.name]=d,p[m.name]=m,p[u.name]=u,p[f.name]=f,"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:h});e.default={name:"BetterMenu",components:{CollapseTransition:c},props:["title","icon","groups"],data:function(){return{activeMenu:this.groups.map(function(t){return!!t.expanded})}},methods:{toggleGroup:function(t){this.$set(this.activeMenu,t,!this.activeMenu[t])}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-8"},[n("h3",{staticClass:"flex items-center font-normal text-white mb-6 text-base no-underline"},[t.icon?n("div",{staticClass:"sidebar-icon",domProps:{innerHTML:t._s(t.icon)}}):n("svg",{staticClass:"sidebar-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"var(--sidebar-icon)",d:"M3 1h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3h-4zM3 11h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4h-4z"}})]),t._v(" "),n("span",{staticClass:"sidebar-label"},[t._v(t._s(t.title))])]),t._v(" "),t._l(t.groups,function(e,a){return[e.title?n("h4",{staticClass:"relative select-none mt-4 ml-8 text-xs text-white-50% uppercase tracking-wide cursor-pointer",on:{click:function(e){return t.toggleGroup(a)}}},[n("div",{staticClass:"absolute collapsible-indicator"},[t._v("\n                "+t._s(t.activeMenu[a]?"+":"-")+"\n            ")]),t._v("\n\n            "+t._s(e.title)+"\n\n        ")]):t._e(),t._v(" "),n("CollapseTransition",{attrs:{duration:150}},[t.activeMenu[a]?n("ul",{staticClass:"list-reset"},t._l(e.resources,function(e){return n("li",{staticClass:"leading-tight pt-4 ml-8 text-sm"},[n("router-link",{staticClass:"text-white text-justify no-underline dim",attrs:{to:{name:"index",params:{resourceName:e.route}}}},[t._v("\n\n                        "+t._s(e.label)+"\n\n                    ")])],1)}),0):t._e()])]})],2)},staticRenderFns:[]}}]);