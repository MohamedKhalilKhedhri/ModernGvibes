import{r as m,x as z,y as Y,z as T,A,B as L,C as N,D as R,R as g,t as i,w as E,E as k}from"./index-DantKR7a.js";const Z=()=>{const[s,o]=m.useState(!1),[t,e]=m.useState(null),[n,r]=m.useState([]),[l,a]=m.useState(!1),c=m.useRef(!1);return{data:n,Gfetch:async(h="")=>{if(!c.current){c.current=!0;try{const u=z(Y,"home");let v;h?v=T(u,A("contentType","==",h),L(2),...t?[N(t)]:[]):v=T(u,L(2),...t?[N(t)]:[]);const f=await R(v);if(f.empty){console.log("No more documents found."),o(!0);return}const w=f.docs.map(x=>({id:x.id,...x.data()})),p=f.docs[f.docs.length-1];e(p),r(x=>[...x,...w])}catch(u){a(!0),console.error("Error fetching documents:",u)}finally{c.current=!1}}},allDataFetched:s,error:l}};function B(s,o){if(s==null)return{};var t=F(s,o),e,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],!(o.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(s,e)&&(t[e]=s[e])}return t}function F(s,o){if(s==null)return{};var t={},e=Object.keys(s),n,r;for(r=0;r<e.length;r++)n=e[r],!(o.indexOf(n)>=0)&&(t[n]=s[n]);return t}function S(){return S=Object.assign||function(s){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])}return s},S.apply(this,arguments)}function O(s,o){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(s);o&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),t.push.apply(t,e)}return t}function b(s){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?O(Object(t),!0).forEach(function(e){H(s,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(t,e))})}return s}function H(s,o,t){return o in s?Object.defineProperty(s,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[o]=t,s}const I={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},j=2;class M extends g.Component{constructor(o){super(o),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let t;this.props.breakpointCols&&this.props.breakpointCols.default?t=this.props.breakpointCols.default:t=parseInt(this.props.breakpointCols)||j,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){const o=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;typeof t!="object"&&(t={default:parseInt(t)||j});let e=1/0,n=t.default||j;for(let r in t){const l=parseInt(r);l>0&&o<=l&&l<e&&(e=l,n=t[r])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){const o=this.state.columnCount,t=new Array(o),e=g.Children.toArray(this.props.children);for(let n=0;n<e.length;n++){const r=n%o;t[r]||(t[r]=[]),t[r].push(e[n])}return t}renderColumns(){const{column:o,columnAttrs:t={},columnClassName:e}=this.props,n=this.itemsInColumns(),r=`${100/n.length}%`;let l=e;l&&typeof l!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof l>"u"&&(l="my-masonry-grid_column"));const a=b(b(b({},o),t),{},{style:b(b({},t.style),{},{width:r}),className:l});return n.map((c,d)=>g.createElement("div",S({},a,{key:d}),c))}logDeprecated(o){console.error("[Masonry]",o)}render(){const o=this.props,{children:t,breakpointCols:e,columnClassName:n,columnAttrs:r,column:l,className:a}=o,c=B(o,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let d=a;return typeof a!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof a>"u"&&(d="my-masonry-grid")),g.createElement("div",S({},c,{className:d}),this.renderColumns())}}M.defaultProps=I;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var D=function(s,o){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},D(s,o)};function $(s,o){D(s,o);function t(){this.constructor=s}s.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}var C=function(){return C=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},C.apply(this,arguments)};function q(s,o,t,e){var n,r=!1,l=0;function a(){n&&clearTimeout(n)}function c(){a(),r=!0}typeof o!="boolean"&&(e=t,t=o,o=void 0);function d(){var h=this,u=Date.now()-l,v=arguments;if(r)return;function f(){l=Date.now(),t.apply(h,v)}function w(){n=void 0}e&&!n&&f(),a(),e===void 0&&u>s?f():o!==!0&&(n=setTimeout(e?w:f,e===void 0?s-u:s))}return d.cancel=c,d}var y={Pixel:"Pixel",Percent:"Percent"},_={unit:y.Percent,value:.8};function P(s){return typeof s=="number"?{unit:y.Percent,value:s*100}:typeof s=="string"?s.match(/^(\d*(\.\d+)?)px$/)?{unit:y.Pixel,value:parseFloat(s)}:s.match(/^(\d*(\.\d+)?)%$/)?{unit:y.Percent,value:parseFloat(s)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),_):(console.warn("scrollThreshold should be string or number"),_)}var U=function(s){$(o,s);function o(t){var e=s.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(n){e.lastScrollTop||(e.dragging=!0,n instanceof MouseEvent?e.startY=n.pageY:n instanceof TouchEvent&&(e.startY=n.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(n){e.dragging&&(n instanceof MouseEvent?e.currentY=n.pageY:n instanceof TouchEvent&&(e.currentY=n.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(n){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(n)},0);var r=e.props.height||e._scrollableNode?n.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var l=e.props.inverse?e.isElementAtTop(r,e.props.scrollThreshold):e.isElementAtBottom(r,e.props.scrollThreshold);l&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=r.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=q(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return o.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},o.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},o.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},o.getDerivedStateFromProps=function(t,e){var n=t.dataLength!==e.prevDataLength;return n?C(C({},e),{prevDataLength:t.dataLength}):null},o.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=P(e);return r.unit===y.Pixel?t.scrollTop<=r.value+n-t.scrollHeight+1:t.scrollTop<=r.value/100+n-t.scrollHeight+1},o.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=P(e);return r.unit===y.Pixel?t.scrollTop+n>=t.scrollHeight-r.value:t.scrollTop+n>=r.value/100*t.scrollHeight},o.prototype.render=function(){var t=this,e=C({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return g.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},g.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(l){return t._infScroll=l},style:e},this.props.pullDownToRefresh&&g.createElement("div",{style:{position:"relative"},ref:function(l){return t._pullDown=l}},g.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},o}(m.Component);function W({type:s,source:o,currentIndex:t,poster:e,onNext:n,onPrevious:r,close:l,length:a}){const[c,d]=m.useState(!1),h={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},u={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.3,ease:"easeInOut"}},exit:{opacity:0,scale:.95,transition:{duration:.3,ease:"easeInOut"}}},v=p=>{p.stopPropagation(),d(!c)},f=p=>{n(),p.stopPropagation()},w=p=>{r(),p.stopPropagation()};return i.jsxs(E.div,{onClick:()=>{l(null)},initial:"hidden",animate:"visible",exit:"exit",variants:h,className:"z-[200]  fixed top-0 left-0 w-full h-full bg-main overflow-hidden flex items-center justify-center",children:[i.jsx("div",{className:"h-full w-full",onClick:w,style:{cursor:t===0?"default":"pointer"}}),i.jsx(k,{mode:"wait",children:s==="img"?i.jsx(E.img,{initial:"hidden",animate:"visible",exit:"exit",variants:u,src:o,className:`w-full h-auto sm:w-auto shrink-0 transition-height ${c?"sm:h-[95vh]":"sm:h-[70vh]"}`,onClick:p=>{p.stopPropagation()}},t):i.jsx(E.video,{initial:"hidden",animate:"visible",exit:"exit",variants:u,src:o,className:`w-full h-auto sm:w-auto shrink-0 transition-height ${c?"sm:h-[95vh]":"sm:h-[70vh]"}`,controls:!0,poster:e,onClick:p=>{p.stopPropagation()}},t)}),i.jsx("div",{className:"h-full w-full",onClick:f,style:{cursor:t===a-1?"default":"pointer"}}),i.jsx("button",{title:"next",onClick:f,className:`absolute top-1/2 -translate-y-1/2 right-0 rounded-l-md py-3 px-2 bg-white/20 hover:bg-white/10 ${t===a-1?"hidden":"block"} transition-all duration-300`,children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`${t===a-1?"fill-white/40":"fill-white"} lg:size-12 md:size-9 sm:size-8 size-6`,children:i.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})}),i.jsx("button",{title:"previous",onClick:w,className:`absolute top-1/2 -translate-y-1/2 left-0 rounded-r-md py-3 px-2 bg-white/20 hover:bg-white/10 ${t===0?"hidden":"block"} transition-all duration-300`,children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`${t===0?"fill-white/40":"fill-white"} lg:size-12 md:size-9 sm:size-8 size-6 rotate-180`,children:i.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})}),i.jsx("button",{title:"zoom",onClick:v,className:"absolute top-2 right-20 p-2 rounded-md bg-white/20 hover:bg-white/10 transition-all sm:block hidden",children:c?i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"sm:size-8 size-6 fill-white",children:i.jsx("path",{d:"M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"})}):i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"sm:size-8 size-6 fill-white",children:i.jsx("path",{d:"M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"})})}),i.jsx("button",{title:"close",onClick:p=>{l(null),p.stopPropagation()},className:"absolute top-2 right-2 p-2 rounded-md bg-white/20 hover:bg-white/10 transition-all",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:size-8 size-6 fill-white",viewBox:"0 0 384 512",children:i.jsx("path",{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"})})})]})}function G(){return i.jsxs("div",{className:"lds-facebook",children:[i.jsx("div",{className:"bg-white"}),i.jsx("div",{className:"bg-white"}),i.jsx("div",{className:"bg-white"})]})}function K({docs:s,addMore:o,More:t,category:e}){const[n,r]=m.useState(null),l=h=>{r(h)},a=()=>{n<s.length-1&&r(n+1)},c=()=>{n>0&&r(n-1)},d={default:3,700:2};return m.useEffect(()=>{n===null?document.body.style.overflowY="visible":document.body.style.overflowY="hidden"},[n]),i.jsxs(i.Fragment,{children:[i.jsx(U,{className:"infinitS",dataLength:s.length,next:()=>{o(e)},hasMore:!t,loader:i.jsx(G,{}),children:i.jsx(M,{breakpointCols:d,className:"gallery",columnClassName:"gallery-column",children:s.map((h,u)=>h.mediaType==="vid"?i.jsx(E.video,{onClick:()=>{l(u)},initial:{opacity:.4},whileInView:{opacity:1},transition:{duration:.5,ease:"easeOut"},layout:!0,src:h.resources.video,poster:h.resources.VideoPlaceHolder,className:"media bg-slate-500",children:" Your browser does not support the video tag."},u):i.jsx("div",{className:"bg-slate-500",children:i.jsx("img",{role:"presentation",src:h.resources.image,alt:`media n°${u}`,className:"media ",loading:"lazy",onClick:()=>{l(u)}})},u))})}),i.jsx(k,{mode:"wait",children:n!==null&&i.jsx(W,{type:s[n].mediaType,source:s[n].mediaType==="img"?s[n].resources.image:s[n].resources.video,currentIndex:n,onNext:a,onPrevious:c,close:l,length:s.length})})]})}export{K as G,Z as u};