(()=>{var e,t,r,l={7238:(e,t,r)=>{"use strict";r.r(t);var l=r(1609);const a=window.wp.blocks;var o=r(5573);const n=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},(0,l.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,l.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}));var i=r(7104),s=r(851);const c=window.wp.blockEditor;var u=r(7723),m=r(9491);r(4302);const p=(0,m.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:a,instanceId:o})=>{const n=`h${t}`;return(0,l.createElement)(n,{className:e},(0,l.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${o}`},(0,u.__)("Block title","woocommerce")),(0,l.createElement)(c.PlainText,{id:`block-title-${o}`,className:"wc-block-editor-components-title",value:a,onChange:r,style:{backgroundColor:"transparent"}}))})),d=window.wp.components,w=window.wc.wcBlocksData,f=window.wp.data;var b=r(6087),g=r(923),y=r.n(g);const h=(0,b.createContext)("page"),_=(h.Provider,(e,t,r)=>{const l=(0,b.useContext)(h);r=r||l;const a=(0,f.useSelect)((l=>l(w.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:o}=(0,f.useDispatch)(w.QUERY_STATE_STORE_KEY);return[a,(0,b.useCallback)((t=>{o(r,e,t)}),[r,e,o])]}),v=window.wc.wcSettings,k=window.wc.blocksComponents,E=window.wc.wcTypes,S=window.wp.url,C=(0,v.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E.isBoolean);function N(e){if(C){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,r)=>{r.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(r)})),window.location.href=t.href}else window.history.replaceState({},"",e)}r(1626);const O=({children:e})=>(0,l.createElement)("div",{className:"wc-block-filter-title-placeholder"},e);r(910);const x=(0,v.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(l=t)&&l.attribute_name?{id:parseInt(l.attribute_id,10),name:l.attribute_name,taxonomy:"pa_"+l.attribute_name,label:l.attribute_label,orderby:l.attribute_orderby}:null;var l;return r&&r.id&&e.push(r),e}),[]),A=window.wc.priceFormat;var j=r(8098);const L=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,u.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,u.__)("Between %1$s and %2$s","woocommerce"),(0,A.formatPrice)(e),(0,A.formatPrice)(t)):Number.isFinite(e)?(0,u.sprintf)(/* translators: %s min price */ /* translators: %s min price */
(0,u.__)("From %s","woocommerce"),(0,A.formatPrice)(e)):(0,u.sprintf)(/* translators: %s max price */ /* translators: %s max price */
(0,u.__)("Up to %s","woocommerce"),(0,A.formatPrice)(t)),P=({type:e,name:t,prefix:r="",removeCallback:a=(()=>null),showLabel:o=!0,displayStyle:n})=>{const s=r?(0,l.createElement)(l.Fragment,null,r," ",t):t,c=(0,u.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */ /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,u.__)("Remove %s filter","woocommerce"),t);return(0,l.createElement)("li",{className:"wc-block-active-filters__list-item",key:e+":"+t},o&&(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},e+": "),"chips"===n?(0,l.createElement)(k.RemovableChip,{element:"span",text:s,onRemove:a,radius:"large",ariaLabel:c}):(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,l.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:a},(0,l.createElement)(i.A,{className:"wc-block-components-chip__remove-icon",icon:j.A,size:16}),(0,l.createElement)(k.Label,{screenReaderLabel:c})),s))},B=(...e)=>{if(!window)return;const t=window.location.href,r=(0,S.getQueryArgs)(t),l=(0,S.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],l=r[t].toString().split(",");r[t]=l.filter((r=>r!==e[t])).join(",")}}));const a=Object.fromEntries(Object.entries(r).filter((([,e])=>e)));N((0,S.addQueryArgs)(l,a))},T=["min_price","max_price","rating_filter","filter_","query_type_"],R=e=>{let t=!1;for(let r=0;T.length>r;r++){const l=T[r];if(l===e.substring(0,l.length)){t=!0;break}}return t};function F(e){const t=(0,b.useRef)(e);return y()(e,t.current)||(t.current=e),t.current}const Q=window.wp.htmlEntities;var $=r(5574);const M=({attributeObject:e,slugs:t=[],operator:r="in",displayStyle:a,isLoadingCallback:o})=>{const{results:n,isLoading:i}=(e=>{const{namespace:t,resourceName:r,resourceValues:l=[],query:a={},shouldSelect:o=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const n=(0,b.useRef)({results:[],isLoading:!0}),i=F(a),s=F(l),c=(()=>{const[,e]=(0,b.useState)();return(0,b.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,f.useSelect)((e=>{if(!o)return null;const l=e(w.COLLECTIONS_STORE_KEY),a=[t,r,i,s],n=l.getCollectionError(...a);if(n){if(!(0,E.isError)(n))throw new Error("TypeError: `error` object is not an instance of Error constructor");c(n)}return{results:l.getCollection(...a),isLoading:!l.hasFinishedResolution("getCollection",a)}}),[t,r,s,i,o,c]);return null!==u&&(n.current=u),n.current})({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[e.id]}),[s,c]=_("attributes",[]);if((0,b.useEffect)((()=>{o(i)}),[i,o]),!Array.isArray(n)||!(0,E.isAttributeTermCollection)(n)||!(0,E.isAttributeQueryCollection)(s))return null;const m=e.label,p=(0,v.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E.isBoolean);return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},m,":"),(0,l.createElement)("ul",null,t.map(((t,o)=>{const d=n.find((e=>e.slug===t));if(!d)return null;let w="";return o>0&&"and"===r&&(w=(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,u.__)("All","woocommerce"))),P({type:m,name:(0,Q.decodeEntities)(d.name||t),prefix:w,isLoading:i,removeCallback:()=>{const r=s.find((({attribute:t})=>t===`pa_${e.name}`));1===(null==r?void 0:r.slug.length)?B(`query_type_${e.name}`,`filter_${e.name}`):B({[`filter_${e.name}`]:t}),p||((e=[],t,r,l="")=>{const a=e.filter((e=>e.attribute===r.taxonomy)),o=a.length?a[0]:null;if(!(o&&o.slug&&Array.isArray(o.slug)&&o.slug.includes(l)))return;const n=o.slug.filter((e=>e!==l)),i=e.filter((e=>e.attribute!==r.taxonomy));n.length>0&&(o.slug=n.sort(),i.push(o)),t((0,$.di)(i).asc("attribute"))})(s,c,e,t)},showLabel:!1,displayStyle:a})}))))},I=({displayStyle:e,isLoading:t})=>t?(0,l.createElement)(l.Fragment,null,[...Array("list"===e?2:3)].map(((t,r)=>(0,l.createElement)("li",{className:"list"===e?"show-loading-state-list":"show-loading-state-chips",key:r},(0,l.createElement)("span",{className:"show-loading-state__inner"}))))):null,W=(0,b.createContext)({}),V=({attributes:e,isEditor:t=!1})=>{const r=(()=>{const{wrapper:e}=(0,b.useContext)(W);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),a=function(){const e=(0,b.useRef)(!1);return(0,b.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,b.useCallback)((()=>e.current),[])}()(),o=(0,v.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E.isBoolean),[n,i]=(0,b.useState)(!0),c=(()=>{if(!window)return!1;const e=window.location.href,t=(0,S.getQueryArgs)(e),r=Object.keys(t);let l=!1;for(let e=0;r.length>e;e++){const t=r[e];if(R(t)){l=!0;break}}return l})()&&!t&&n,[m,p]=_("attributes",[]),[d,w]=_("stock_status",[]),[f,g]=_("min_price"),[y,h]=_("max_price"),[C,A]=_("rating"),j=(0,v.getSetting)("stockStatusOptions",[]),T=(0,v.getSetting)("attributes",[]),F=(0,b.useMemo)((()=>{if(c||0===d.length||!(0,E.isStockStatusQueryCollection)(d)||!(0,E.isStockStatusOptions)(j))return null;const t=(0,u.__)("Stock Status","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t,":"),(0,l.createElement)("ul",null,d.map((r=>P({type:t,name:j[r],removeCallback:()=>{if(B({filter_stock_status:r}),!o){const e=d.filter((e=>e!==r));w(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[c,j,d,w,e.displayStyle,o]),Q=(0,b.useMemo)((()=>c||!Number.isFinite(f)&&!Number.isFinite(y)?null:P({type:(0,u.__)("Price","woocommerce"),name:L(f,y),removeCallback:()=>{B("max_price","min_price"),o||(g(void 0),h(void 0))},displayStyle:e.displayStyle})),[c,f,y,e.displayStyle,g,h,o]),$=(0,b.useMemo)((()=>!(0,E.isAttributeQueryCollection)(m)&&a||!m.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,l=(0,S.getQueryArgs)(r),a=Object.keys(l);let o=!1;for(let e=0;a.length>e;e++){const r=a[e];if(t.includes(r)){o=!0;break}}return o})(T)?(n&&i(!1),null):m.map((t=>{const r=(e=>{if(e)return x.find((t=>t.taxonomy===e))})(t.attribute);return r?(0,l.createElement)(M,{attributeObject:r,displayStyle:e.displayStyle,slugs:t.slug,key:t.attribute,operator:t.operator,isLoadingCallback:i}):(n&&i(!1),null)}))),[m,a,T,n,e.displayStyle]);(0,b.useEffect)((()=>{var e;if(!o)return;if(C.length&&C.length>0)return;const t=null===("rating_filter",e=window?(0,S.getQueryArg)(window.location.href,"rating_filter"):null)||void 0===e?void 0:e.toString();t&&A(t.split(","))}),[o,C,A]);const V=(0,b.useMemo)((()=>{if(c||0===C.length||!(0,E.isRatingQueryCollection)(C))return null;const t=(0,u.__)("Rating","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t,":"),(0,l.createElement)("ul",null,C.map((r=>P({type:t,name:(0,u.sprintf)(/* translators: %s is referring to the average rating value */ /* translators: %s is referring to the average rating value */
(0,u.__)("Rated %s out of 5","woocommerce"),r),removeCallback:()=>{if(B({rating_filter:r}),!o){const e=C.filter((e=>e!==r));A(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[c,C,A,e.displayStyle,o]);if(!c&&!(m.length>0||d.length>0||C.length>0||Number.isFinite(f)||Number.isFinite(y))&&!t)return r(!1),null;const D=`h${e.headingLevel}`,z=(0,l.createElement)(D,{className:"wc-block-active-filters__title"},e.heading),U=c?(0,l.createElement)(O,null,z):z;if(!(0,v.getSettingWithCoercion)("hasFilterableProducts",!1,E.isBoolean))return r(!1),null;r(!0);const q=(0,s.A)("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===e.displayStyle,"wc-block-active-filters--loading":c});return(0,l.createElement)(l.Fragment,null,!t&&e.heading&&U,(0,l.createElement)("div",{className:"wc-block-active-filters"},(0,l.createElement)("ul",{className:q},t?(0,l.createElement)(l.Fragment,null,P({type:(0,u.__)("Size","woocommerce"),name:(0,u.__)("Small","woocommerce"),displayStyle:e.displayStyle}),P({type:(0,u.__)("Color","woocommerce"),name:(0,u.__)("Blue","woocommerce"),displayStyle:e.displayStyle})):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{isLoading:c,displayStyle:e.displayStyle}),Q,F,$,V)),c?(0,l.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,l.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,S.getQueryArgs)(e),r=(0,S.removeQueryArgs)(e,...Object.keys(t)),l=Object.fromEntries(Object.keys(t).filter((e=>!R(e))).map((e=>[e,t[e]])));N((0,S.addQueryArgs)(r,l))})(),o||(g(void 0),h(void 0),p([]),w([]),A([]))}},(0,l.createElement)(k.Label,{label:(0,u.__)("Clear All","woocommerce"),screenReaderLabel:(0,u.__)("Clear All Filters","woocommerce")}))))};r(8236);const D=({clientId:e,setAttributes:t,filterType:r,attributes:o})=>{const{replaceBlock:n}=(0,f.useDispatch)("core/block-editor"),{heading:i,headingLevel:s}=o;if((0,f.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const m=[(0,l.createElement)(d.Button,{key:"convert",onClick:()=>{const l=[(0,a.createBlock)(`woocommerce/${r}`,{...o,heading:""})];i&&""!==i&&l.unshift((0,a.createBlock)("core/heading",{content:i,level:null!=s?s:2})),n(e,(0,a.createBlock)("woocommerce/filter-wrapper",{heading:i,filterType:r},[...l])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,u.__)("Upgrade block","woocommerce"))];return(0,l.createElement)(c.Warning,{actions:m},(0,u.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))},z=(0,d.withSpokenMessages)((({attributes:e,setAttributes:t,clientId:r})=>{const{className:a,displayStyle:o,heading:n,headingLevel:i}=e,s=(0,c.useBlockProps)({className:a});return(0,l.createElement)("div",{...s},(0,l.createElement)(c.InspectorControls,{key:"inspector"},(0,l.createElement)(d.PanelBody,{title:(0,u.__)("Display Settings","woocommerce")},(0,l.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Display Style","woocommerce"),isBlock:!0,value:o,onChange:e=>t({displayStyle:e}),className:"wc-block-active-filter__style-toggle"},(0,l.createElement)(d.__experimentalToggleGroupControlOption,{value:"list",label:(0,u.__)("List","woocommerce")}),(0,l.createElement)(d.__experimentalToggleGroupControlOption,{value:"chips",label:(0,u.__)("Chips","woocommerce")})))),(0,l.createElement)(D,{attributes:e,clientId:r,setAttributes:t,filterType:"active-filters"}),n&&(0,l.createElement)(p,{className:"wc-block-active-filters__title",headingLevel:i,heading:n,onChange:e=>t({heading:e})}),(0,l.createElement)(d.Disabled,null,(0,l.createElement)(V,{attributes:e,isEditor:!0})))})),U=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Filters Controls","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),q={heading:{type:"string",default:(0,u.__)("Active filters","woocommerce")}},G=[{attributes:{...U.attributes,...q},save:({attributes:e})=>{const{className:t,displayStyle:r,heading:a,headingLevel:o}=e,n={"data-display-style":r,"data-heading":a,"data-heading-level":o};return(0,l.createElement)("div",{...c.useBlockProps.save({className:(0,s.A)("is-loading",t)}),...n},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))}}];(0,a.registerBlockType)(U,{apiVersion:3,icon:{src:(0,l.createElement)(i.A,{icon:n,className:"wc-block-editor-components-block-icon"})},attributes:{...U.attributes,...q},edit:z,save({attributes:e}){const{className:t}=e;return(0,l.createElement)("div",{...c.useBlockProps.save({className:(0,s.A)("is-loading",t)})},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))},deprecated:G})},1626:()=>{},8236:()=>{},910:()=>{},4302:()=>{},1609:e=>{"use strict";e.exports=window.React},9491:e=>{"use strict";e.exports=window.wp.compose},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return l[e].call(r.exports,r,r.exports,o),r.exports}o.m=l,e=[],o.O=(t,r,l,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,l,a]=e[u],i=!0,s=0;s<r.length;s++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,l,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&l&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,o.d(a,n),a},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=2507,(()=>{var e={2507:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[n,i,s]=r,c=0;if(n.some((t=>0!==e[t]))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(s)var u=s(o)}for(t&&t(r);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[94],(()=>o(7238)));n=o.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["active-filters"]=n})();