(()=>{var e,t,o,r={9120:(e,t,o)=>{"use strict";o.r(t);const r=window.wc.wcSettings;var l=o(1609),n=o(5573);const c=()=>(0,l.createElement)(n.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(n.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 4C4.25 3.58579 4.58579 3.25 5 3.25L9.17284 3.25C9.37179 3.25 9.56258 3.32904 9.70324 3.46974L13.2877 7.05515L13.2893 7.05673C13.5844 7.35367 13.75 7.75532 13.75 8.17393C13.75 8.59255 13.5844 8.99419 13.2893 9.29114L12.7573 8.76246L13.2877 9.29272L10.2961 12.2851C10.1489 12.4325 9.97417 12.5494 9.78179 12.6292C9.58941 12.7089 9.38319 12.75 9.17493 12.75C8.96667 12.75 8.76045 12.7089 8.56807 12.6292C8.37575 12.5494 8.20104 12.4326 8.05392 12.2853L8.05378 12.2851L4.46991 8.7045C4.32911 8.56383 4.25 8.37296 4.25 8.17393V4ZM12.2253 8.23378L12.2257 8.23341C12.2412 8.21758 12.25 8.19622 12.25 8.17393C12.25 8.15164 12.2412 8.13029 12.2257 8.11446L12.2253 8.11409L8.86212 4.75H5.75V7.86307L9.11456 11.2246L9.11517 11.2252C9.12303 11.2331 9.13236 11.2393 9.14261 11.2436C9.15286 11.2478 9.16384 11.25 9.17493 11.25C9.18602 11.25 9.197 11.2478 9.20725 11.2436C9.2175 11.2393 9.22683 11.2331 9.23469 11.2252L9.23499 11.2249L12.2253 8.23378ZM12.9999 20H3.99988V18.5H12.9999V20ZM3.99988 16L19.9999 16V14.5L3.99988 14.5V16Z",fill:"currentColor"})),a=window.wp.blocks;var i=o(7723);const s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-attribute","version":"1.0.0","title":"Attribute (Experimental)","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":3,"ancestor":["woocommerce/product-filters"],"supports":{"interactivity":true,"color":{"text":true,"background":false,"__experimentalDefaultControls":{"text":false}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontWeight":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":false}},"spacing":{"margin":true,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"margin":false,"padding":false,"blockGap":false}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}},"usesContext":["query","filterParams"],"attributes":{"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"displayStyle":{"type":"string","default":"woocommerce/product-filter-checkbox-list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false},"sortOrder":{"type":"string","default":"count-desc"},"hideEmpty":{"type":"boolean","default":true},"clearButton":{"type":"boolean","default":true}},"example":{"attributes":{"isPreview":true}}}'),u=window.wc.wcBlocksData,d=window.wp.data;var m=o(6087),p=o(923),b=o.n(p);function _(e){const t=(0,m.useRef)(e);return b()(e,t.current)||(t.current=e),t.current}const f=window.wc.wcTypes,w=e=>{const{namespace:t,resourceName:o,resourceValues:r=[],query:l={},shouldSelect:n=!0}=e;if(!t||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const c=(0,m.useRef)({results:[],isLoading:!0}),a=_(l),i=_(r),s=(()=>{const[,e]=(0,m.useState)();return(0,m.useCallback)((t=>{e((()=>{throw t}))}),[])})(),p=(0,d.useSelect)((e=>{if(!n)return null;const r=e(u.COLLECTIONS_STORE_KEY),l=[t,o,a,i],c=r.getCollectionError(...l);if(c){if(!(0,f.isError)(c))throw new Error("TypeError: `error` object is not an instance of Error constructor");s(c)}return{results:r.getCollection(...l),isLoading:!r.hasFinishedResolution("getCollection",l)}}),[t,o,i,a,n,s]);return null!==p&&(c.current=p),c.current};var g=o(4717),y=o(5574);const v=(0,m.createContext)("page"),h=()=>(0,m.useContext)(v),k=(v.Provider,e=>{const t=h();e=e||t;const o=(0,d.useSelect)((t=>t(u.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:r}=(0,d.useDispatch)(u.QUERY_STATE_STORE_KEY);return[o,(0,m.useCallback)((t=>{r(e,t)}),[e,r])]}),E=(e,t,o)=>{const r=h();o=o||r;const l=(0,d.useSelect)((r=>r(u.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,e,t)),[o,e]),{setQueryValue:n}=(0,d.useDispatch)(u.QUERY_STATE_STORE_KEY);return[l,(0,m.useCallback)((t=>{n(o,e,t)}),[o,e,n])]},B=window.wp.blockEditor,C=window.wp.components,x=[{label:(0,i.__)("Blue","woocommerce"),value:"blue",rawData:{id:23,name:(0,i.__)("Blue","woocommerce"),slug:"blue",attr_slug:"blue",description:"",parent:0,count:4}},{label:(0,i.__)("Gray","woocommerce"),value:"gray",selected:!0,rawData:{id:29,name:(0,i.__)("Gray","woocommerce"),slug:"gray",attr_slug:"gray",description:"",parent:0,count:3}},{label:(0,i.__)("Green","woocommerce"),value:"green",rawData:{id:24,name:(0,i.__)("Green","woocommerce"),slug:"green",attr_slug:"green",description:"",parent:0,count:3}},{label:(0,i.__)("Red","woocommerce"),value:"red",selected:!0,rawData:{id:25,name:(0,i.__)("Red","woocommerce"),slug:"red",attr_slug:"red",description:"",parent:0,count:4}},{label:(0,i.__)("Yellow","woocommerce"),value:"yellow",rawData:{id:30,name:(0,i.__)("Yellow","woocommerce"),slug:"yellow",attr_slug:"yellow",description:"",parent:0,count:1}}],S={"name-asc":(0,i.__)("Name, A to Z","woocommerce"),"name-desc":(0,i.__)("Name, Z to A","woocommerce"),"count-desc":(0,i.__)("Most results first","woocommerce"),"count-asc":(0,i.__)("Least results first","woocommerce")},I=Object.entries(S).map((([e,t])=>({label:t,value:e}))),T=(0,r.getSetting)("attributes",[]).reduce(((e,t)=>{const o=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return o&&o.id&&e.push(o),e}),[]);function O(e){if(e)return T.find((t=>t.id===e))}const P=(e,t)=>{if(!e)return null;if(0===e.innerBlocks.length)return null;for(const o of e.innerBlocks){if(t(o))return o;const e=P(o,t);if(e)return e}return null},L=(e,t)=>P(e,(function(e){return e.name===t})),A=e=>{if(!e)return;const{getBlock:t,getBlockParents:o,getBlockOrder:r}=(0,d.select)(B.store),l=o(e,!0),n=l.length?t(l[0]):null,c=r(null==n?void 0:n.clientId);return{blockPositionIndex:null==c?void 0:c.findIndex((t=>t===e)),parentBlockId:null==n?void 0:n.clientId}},j=(e,t)=>{if(e){if(e.name===t)return e.clientId;if(e.innerBlocks&&e.innerBlocks.length>0)for(const o of e.innerBlocks){const e=j(o,t);if(e)return e}}},q={lock:{remove:!0,move:!1}},D=(0,r.getSetting)("attributes",[]),R=(()=>{const e=function({clientId:t,showClearButton:o,positionIndexToInsertBlock:r,parentClientIdToInsertBlock:l}){const{clearButtonBlock:n}=(e=>{const{getBlock:t}=(0,d.select)(B.store),o=t(e),r=j(o,"woocommerce/product-filter-clear-button");return{clearButtonBlock:r?t(r):void 0}})(t);void 0===e.previousClearButtonBlockPosition&&(e.previousClearButtonBlockPosition=A(null==n?void 0:n.clientId));const{previousClearButtonBlockPosition:c}=e,i=A(null==n?void 0:n.clientId),{getBlock:s}=(0,d.select)(B.store),{insertBlock:u,removeBlock:m,updateBlockAttributes:p}=(0,d.dispatch)(B.store);function b(){e.previousClearButtonBlockPosition=void 0}var _;if(!1===o&&Boolean(null==n?void 0:n.clientId)&&(p(null==n?void 0:n.clientId,{lock:{remove:!1,move:!1}}),m(null==n?void 0:n.clientId,!1),_=i,e.previousClearButtonBlockPosition=_),!0===o&&!n){let e=function(){if(c&&s(c.parentBlockId)){const{blockPositionIndex:e,parentBlockId:t}=c;return u((0,a.createBlock)("woocommerce/product-filter-clear-button",q),e,t,!1),b(),!0}return!1}();e||(e=void 0===r&&void 0===l&&!!s(l)&&(u((0,a.createBlock)("woocommerce/product-filter-clear-button",q),r,l,!1),b(),!0)),e||(e=function(){const e=s(t),o=L(e,"core/group");if(!o)return!1;const r=j(o,"core/heading"),l=o.innerBlocks.length;return!!Boolean(r)&&(u((0,a.createBlock)("woocommerce/product-filter-clear-button",q),l,null==o?void 0:o.clientId,!1),!0)}()),e||(u((0,a.createBlock)("woocommerce/product-filter-clear-button",q),0,t,!1),b(),e=!0)}};return e})();let V=[];const G=({clientId:e,attributes:t,setAttributes:o})=>{const{attributeId:r,sortOrder:n,queryType:c,displayStyle:s,showCounts:u,hideEmpty:p,clearButton:b}=t,{updateBlockAttributes:_,insertBlock:f,replaceBlock:w}=(0,d.dispatch)("core/block-editor"),g=(0,d.useSelect)((t=>t("core/block-editor").getBlock(e)),[e]),[y,v]=(0,m.useState)({}),h=L(g,"core/heading");return 0===V.length&&(V=(0,a.getBlockTypes)().filter((e=>{var t;return"woocommerce/product-filter-clear-button"!==e.name&&(null===(t=e.ancestor)||void 0===t?void 0:t.includes("woocommerce/product-filter-attribute"))}))),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(B.InspectorControls,{key:"inspector"},(0,l.createElement)(C.PanelBody,{title:(0,i.__)("Attribute","woocommerce")},(0,l.createElement)(C.ComboboxControl,{options:D.map((e=>({value:e.attribute_id,label:e.attribute_label}))),value:r+"",onChange:e=>{const t=parseInt(e||"",10);o({attributeId:t});const r=O(t);var l;h&&_(h.clientId,{content:null!==(l=null==r?void 0:r.label)&&void 0!==l?l:(0,i.__)("Attribute","woocommerce")})},help:(0,i.__)("Choose the attribute to show in this filter.","woocommerce")})),(0,l.createElement)(C.PanelBody,{title:(0,i.__)("Settings","woocommerce")},(0,l.createElement)(C.SelectControl,{label:(0,i.__)("Sort order","woocommerce"),value:n,options:[{value:"",label:(0,i.__)("Select an option","woocommerce"),disabled:!0},...I],onChange:e=>o({sortOrder:e}),help:(0,i.__)("Determine the order of filter options.","woocommerce")}),(0,l.createElement)(C.__experimentalToggleGroupControl,{label:(0,i.__)("Logic","woocommerce"),isBlock:!0,value:c,onChange:e=>o({queryType:e}),style:{width:"100%"},help:"and"===c?(0,m.createInterpolateElement)((0,i.__)("Show results for <b>all</b> selected attributes. Displayed products must contain <b>all of them</b> to appear in the results.","woocommerce"),{b:(0,l.createElement)("strong",null)}):(0,i.__)("Show results for any of the attributes selected (displayed products don’t have to have them all).","woocommerce")},(0,l.createElement)(C.__experimentalToggleGroupControlOption,{label:(0,i.__)("Any","woocommerce"),value:"or"}),(0,l.createElement)(C.__experimentalToggleGroupControlOption,{label:(0,i.__)("All","woocommerce"),value:"and"})))),(0,l.createElement)(B.InspectorControls,{group:"styles"},(0,l.createElement)(C.PanelBody,{title:(0,i.__)("Display","woocommerce")},(0,l.createElement)(C.__experimentalToggleGroupControl,{value:s,isBlock:!0,onChange:e=>{if(!g)return;const t=L(g,s);t?(v({...y,[s]:t.attributes}),w(t.clientId,(0,a.createBlock)(e,y[e]||{}))):f((0,a.createBlock)(e),g.innerBlocks.length,g.clientId,!1),o({displayStyle:e})},style:{width:"100%"}},V.map((e=>(0,l.createElement)(C.__experimentalToggleGroupControlOption,{key:e.name,label:e.title,value:e.name})))),(0,l.createElement)(C.ToggleControl,{label:(0,i.__)("Product counts","woocommerce"),checked:u,onChange:e=>o({showCounts:e})}),(0,l.createElement)(C.ToggleControl,{label:(0,i.__)("Empty filter options","woocommerce"),checked:!p,onChange:e=>o({hideEmpty:!e})}),(0,l.createElement)(C.ToggleControl,{label:(0,i.__)("Clear button","woocommerce"),checked:b,onChange:t=>{o({clearButton:t}),R({clientId:e,showClearButton:t})}}))))};o(5135);const M=(e=[])=>(0,a.getBlockTypes)().map((e=>e.name)).filter((t=>!e.includes(t))),N=["woocommerce/product-filters","woocommerce/product-filter-attribute","woocommerce/product-filter-active","woocommerce/product-filter-price","woocommerce/product-filter-status","woocommerce/product-collection","core/query"];o(9498);const Y=({children:e})=>(0,l.createElement)("div",{className:"wc-block-product-filter-components-initial-disabled"},(0,l.createElement)("div",{className:"wc-block-product-filter-components-initial-disabled-overlay"}),e);var F=o(2478);o(1925);const Q=({children:e})=>(0,l.createElement)("div",{className:"wc-block-product-filter-components-notice"},(0,l.createElement)(C.Icon,{className:"wc-block-product-filter-components-notice__icon",icon:F.A}),(0,l.createElement)("div",{className:"wc-block-product-filter-components-notice__content"},e)),H=(0,r.getSetting)("attributes",[]),K=(0,C.withSpokenMessages)((e=>{const{attributes:t}=e,{attributeId:o,queryType:r,isPreview:n,displayStyle:c,showCounts:a,sortOrder:s,hideEmpty:u,clearButton:d}=t,p=O(o),[b,v]=(0,m.useState)([]),[C,S]=(0,m.useState)(!0),{results:I,isLoading:T}=w({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[(null==p?void 0:p.id)||0],shouldSelect:!(null==p||!p.id),query:{orderby:"menu_order",hide_empty:u}}),{data:P,isLoading:L}=(({queryAttribute:e,queryPrices:t,queryStock:o,queryRating:r,queryState:l,isEditor:n=!1})=>{let c=h();c=`${c}-collection-data`;const[a]=k(c),[i,s]=E("calculate_attribute_counts",[],c),[u,d]=E("calculate_price_range",null,c),[p,b]=E("calculate_stock_status_counts",null,c),[v,B]=E("calculate_rating_counts",null,c),C=_(e||{}),x=_(t),S=_(o),I=_(r);(0,m.useEffect)((()=>{"object"==typeof C&&Object.keys(C).length&&(i.find((e=>(0,f.objectHasProp)(C,"taxonomy")&&e.taxonomy===C.taxonomy))||s([...i,C]))}),[C,i,s]),(0,m.useEffect)((()=>{u!==x&&void 0!==x&&d(x)}),[x,d,u]),(0,m.useEffect)((()=>{p!==S&&void 0!==S&&b(S)}),[S,b,p]),(0,m.useEffect)((()=>{v!==I&&void 0!==I&&B(I)}),[I,B,v]);const[T,O]=(0,m.useState)(n),[P]=(0,g.d7)(T,200);T||O(!0);const L=(0,m.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,y.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(a)),[a]),{results:A,isLoading:j}=w({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...l,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...L},shouldSelect:P});return{data:A,isLoading:j}})({queryAttribute:{taxonomy:(null==p?void 0:p.taxonomy)||"",queryType:r},queryState:{},isEditor:!0});(0,m.useEffect)((()=>{if(T||L)return;const e=(0,f.objectHasProp)(P,"attribute_counts")&&(t=P.attribute_counts,Array.isArray(t)&&t.every((e=>"term"in e&&"count"in e)))?P.attribute_counts.map((e=>e.term)):[];var t;0===e.length&&u?v([]):v(I.filter((t=>!u||e.includes(t.id))).sort(((e,t)=>{switch(s){case"name-asc":return e.name>t.name?1:-1;case"name-desc":return e.name<t.name?1:-1;case"count-asc":return e.count>t.count?1:-1;default:return e.count<t.count?1:-1}})).map(((e,t)=>({label:a?`${e.name} (${e.count})`:e.name,value:e.id.toString(),selected:1===t,rawData:e})))),S(!1)}),[a,I,P,s,u,T,L]);const{children:A,...j}=(0,B.useInnerBlocksProps)((0,B.useBlockProps)(),{allowedBlocks:M(N),template:[["core/group",{layout:{type:"flex",flexWrap:"nowrap"},metadata:{name:(0,i.__)("Header","woocommerce")},style:{spacing:{blockGap:"0"}}},[["core/heading",{level:4,content:(null==p?void 0:p.label)||(0,i.__)("Attribute","woocommerce")}],d?["woocommerce/product-filter-clear-button",{lock:{remove:!0,move:!1}}]:null].filter(Boolean)],[c,{lock:{remove:!0}}]]}),q=T||L||C;return 0===Object.keys(H).length?(0,l.createElement)("div",{...j},(0,l.createElement)(G,{...e}),(0,l.createElement)(Q,null,(0,l.createElement)("p",null,(0,i.__)("Attributes are needed for filtering your products. You haven't created any attributes yet.","woocommerce")))):o&&p?q||0!==I.length?(0,l.createElement)("div",{...j},(0,l.createElement)(G,{...e}),(0,l.createElement)(Y,null,(0,l.createElement)(B.BlockContextProvider,{value:{filterData:{items:0===b.length&&n?x:b,isLoading:q}}},A))):(0,l.createElement)("div",{...j},(0,l.createElement)(G,{...e}),(0,l.createElement)(Q,null,(0,l.createElement)("p",null,(0,i.__)("There are no products with the selected attributes.","woocommerce")))):(0,l.createElement)("div",{...j},(0,l.createElement)(G,{...e}),(0,l.createElement)(Q,null,(0,l.createElement)("p",null,(0,i.__)("Please select an attribute to use this filter!","woocommerce"))))})),Z=()=>{const e=B.useBlockProps.save(),t=B.useInnerBlocksProps.save(e);return(0,l.createElement)("div",{...t})},$=(0,r.getSetting)("attributes",[]);if((()=>{const{experimentalBlocksEnabled:e}=(0,r.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()){const e=(0,r.getSetting)("defaultProductFilterAttribute");(0,a.registerBlockType)(s,{edit:K,icon:c,attributes:{...s.attributes,attributeId:{...s.attributes.attributeId,default:parseInt(e.attribute_id,10)}},save:Z,variations:$.map(((e,t)=>({name:`product-filter-attribute-${e.attribute_name}`,title:`${e.attribute_label} (Experimental)`,description:(0,i.sprintf)(
// translators: %s is the attribute label.
// translators: %s is the attribute label.
(0,i.__)("Enable customers to filter the product collection by selecting one or more %s attributes.","woocommerce"),e.attribute_label),attributes:{attributeId:parseInt(e.attribute_id,10)},isActive:["attributeId"],isDefault:0===t})))})}},9498:()=>{},1925:()=>{},5135:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,e=[],n.O=(t,o,r,l)=>{if(!o){var c=1/0;for(u=0;u<e.length;u++){for(var[o,r,l]=e[u],a=!0,i=0;i<o.length;i++)(!1&l||c>=l)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(a=!1,l<c&&(c=l));if(a){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);n.r(l);var c={};t=t||[null,o({}),o([]),o(o)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,n.d(l,c),l},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=2448,(()=>{var e={2448:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[c,a,i]=o,s=0;if(c.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var u=i(n)}for(t&&t(o);s<c.length;s++)l=c[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=n.O(void 0,[94],(()=>n(9120)));c=n.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filter-attribute"]=c})();