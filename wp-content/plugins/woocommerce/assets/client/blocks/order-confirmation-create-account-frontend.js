var wc;(()=>{var e,r,t,o={4172:(e,r,t)=>{"use strict";t.r(r);var o=t(1609),n=t(6087),a=t(4018),c=t(7723);const s=window.wc.wcSettings;var l,i,m,d,p,u,w,g,E,_;const b=(0,s.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),f=b.pluginUrl+"assets/images/",v=(b.pluginUrl,null===(l=s.STORE_PAGES.shop)||void 0===l||l.permalink,null===(i=s.STORE_PAGES.checkout)||void 0===i||i.id,null===(m=s.STORE_PAGES.checkout)||void 0===m||m.permalink,null===(d=s.STORE_PAGES.privacy)||void 0===d?void 0:d.permalink),h=(null===(p=s.STORE_PAGES.privacy)||void 0===p||p.title,null===(u=s.STORE_PAGES.terms)||void 0===u?void 0:u.permalink),k=(null===(w=s.STORE_PAGES.terms)||void 0===w||w.title,null===(g=s.STORE_PAGES.cart)||void 0===g||g.id,null===(E=s.STORE_PAGES.cart)||void 0===E||E.permalink,null!==(_=s.STORE_PAGES.myaccount)&&void 0!==_&&_.permalink?s.STORE_PAGES.myaccount.permalink:(0,s.getSetting)("wpLoginUrl","/wp-login.php"),(0,s.getSetting)("localPickupEnabled",!1),(0,s.getSetting)("countries",{})),y=(0,s.getSetting)("countryData",{}),S=(Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,k[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,k[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).map((e=>[e,y[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),P=((0,s.getSetting)("addressFieldsLocations",S).address,(0,s.getSetting)("addressFieldsLocations",S).contact,(0,s.getSetting)("addressFieldsLocations",S).order,(0,s.getSetting)("additionalOrderFields",{}),(0,s.getSetting)("additionalContactFields",{}),(0,s.getSetting)("additionalAddressFields",{}),({imageUrl:e=`${f}/block-error.svg`,header:r=(0,c.__)("Oops!","woocommerce"),text:t=(0,c.__)("There was an error loading the content.","woocommerce"),errorMessage:n,errorMessagePrefix:a=(0,c.__)("Error:","woocommerce"),button:s,showErrorBlock:l=!0})=>l?(0,o.createElement)("div",{className:"wc-block-error wc-block-components-error"},e&&(0,o.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:e,alt:""}),(0,o.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&(0,o.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),t&&(0,o.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},t),n&&(0,o.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},a?a+" ":"",n),s&&(0,o.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},s))):null);t(9407);class O extends n.Component{constructor(...e){super(...e),(0,a.A)(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:(0,o.createElement)(o.Fragment,null,(0,o.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:r,showErrorMessage:t=!0,showErrorBlock:n=!0,text:a,errorMessagePrefix:c,renderError:s,button:l}=this.props,{errorMessage:i,hasError:m}=this.state;return m?"function"==typeof s?s({errorMessage:i}):(0,o.createElement)(P,{showErrorBlock:n,errorMessage:t?i:null,header:e,imageUrl:r,text:a,errorMessagePrefix:c,button:l}):this.props.children}}const x=O,B=[".wp-block-woocommerce-cart"],T=({Block:e,container:r,attributes:t={},props:a={},errorBoundaryProps:c={}})=>{const l=()=>((0,n.useEffect)((()=>{r.classList&&r.classList.remove("is-loading")}),[]),(0,o.createElement)(x,{...c},(0,o.createElement)(n.Suspense,{fallback:(0,o.createElement)("div",{className:"wc-block-placeholder"},"Loading...")},e&&(0,o.createElement)(e,{...a,attributes:t}))));if(!0===(0,s.getSetting)("__experimentalUseReact18",!1)){const e=(0,n.createRoot)(r);return e.render((0,o.createElement)(l,null)),e}(0,n.render)((0,o.createElement)(l,null),r)},A=({Block:e,containers:r,getProps:t=(()=>({})),getErrorBoundaryProps:o=(()=>({}))})=>{if(0===r.length)return[];const n=[];return Array.prototype.forEach.call(r,((r,a)=>{const c=t(r,a),s=o(r,a),l={...r.dataset,...c.attributes||{}};n.push({container:r,root:T({Block:e,container:r,props:c,attributes:l,errorBoundaryProps:s})})})),n};var N=t(851),j=t(8165),M=t(4040),R=t.n(M);t(2080),t(7791);const L=()=>(0,o.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),C=(0,n.forwardRef)(((e,r)=>{"showSpinner"in e&&R()("showSpinner prop",{version:"8.9.0",alternative:"Render a spinner in the button children instead.",plugin:"WooCommerce"});const{className:t,showSpinner:n=!1,children:a,variant:c="contained",removeTextWrap:s=!1,...l}=e,i=(0,N.A)("wc-block-components-button","wp-element-button",t,c,{"wc-block-components-button--loading":n});if("href"in e)return(0,o.createElement)(j.$,{render:(0,o.createElement)("a",{ref:r,href:e.href},n&&(0,o.createElement)(L,null),(0,o.createElement)("span",{className:"wc-block-components-button__text"},a)),className:i,...l});const m=s?e.children:(0,o.createElement)("span",{className:"wc-block-components-button__text"},e.children);return(0,o.createElement)(j.$,{ref:r,className:i,...l},n&&(0,o.createElement)(L,null),m)}));var F=t(9491),G=t(3876);t(3091);const D=[(0,c.__)("Too weak","woocommerce"),(0,c.__)("Weak","woocommerce"),(0,c.__)("Medium","woocommerce"),(0,c.__)("Strong","woocommerce"),(0,c.__)("Very strong","woocommerce")],I=e=>void 0===window.zxcvbn?(0,G.Bi)(e,[{id:0,value:D[0],minDiversity:0,minLength:0},{id:1,value:D[1],minDiversity:1,minLength:4},{id:2,value:D[2],minDiversity:2,minLength:8},{id:3,value:D[3],minDiversity:4,minLength:12},{id:4,value:D[4],minDiversity:4,minLength:20}]).id:window.zxcvbn(e).score,U=({password:e="",onChange:r})=>{var t;const a=(0,F.useInstanceId)(U,"woocommerce-password-strength-meter");let s=-1;e.length>0&&(s=I(e));const l=function(e,r){const t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current===e||(t.current=e)}),[e,r]),t.current}(s);return(0,n.useEffect)((()=>{s!==l&&r&&r(s)}),[s,l,r]),(0,o.createElement)("div",{id:a,className:(0,N.A)("wc-block-components-password-strength",{hidden:-1===s})},(0,o.createElement)("label",{htmlFor:a+"-meter",className:"screen-reader-text"},(0,c.__)("Password strength","woocommerce")),(0,o.createElement)("meter",{id:a+"-meter",className:"wc-block-components-password-strength__meter",min:0,max:4,value:s>-1?s:0},null!==(t=D[s])&&void 0!==t?t:""),!!D[s]&&(0,o.createElement)("div",{id:a+"-result",className:"wc-block-components-password-strength__result"},(0,o.createElement)("span",{className:"screen-reader-text","aria-live":"polite"},(0,c.sprintf)(/* translators: %s: Password strength */ /* translators: %s: Password strength */
(0,c.__)("Password strength: %1$s (%2$d characters long)","woocommerce"),D[s],e.length))," ",(0,o.createElement)("span",{"aria-hidden":!0},D[s])))},V=window.wc.blocksComponents,W=window.wp.data,$=window.wc.wcBlocksData,q=h?(0,o.createElement)("a",{href:h,target:"_blank",rel:"noreferrer"},(0,c.__)("Terms","woocommerce")):(0,o.createElement)("span",null,(0,c.__)("Terms","woocommerce")),z=v?(0,o.createElement)("a",{href:v,target:"_blank",rel:"noreferrer"},(0,c.__)("Privacy Policy","woocommerce")):(0,o.createElement)("span",null,(0,c.__)("Privacy Policy","woocommerce")),J=({isLoading:e,password:r,setPassword:t})=>(0,o.createElement)("div",null,(0,o.createElement)(V.ValidatedTextInput,{disabled:e,type:"password",label:(0,c.__)("Password","woocommerce"),className:"wc-block-components-address-form__password",value:r,required:!0,errorId:"account-password",customValidityMessage:e=>{if(e.valueMissing||e.badInput||e.typeMismatch)return(0,c.__)("Please enter a valid password","woocommerce")},customValidation:e=>!(I(e.value)<2&&(e.setCustomValidity((0,c.__)("Please create a stronger password","woocommerce")),1)),onChange:e=>t(e),feedback:(0,o.createElement)(U,{password:r})}));(e=>{const r=document.body.querySelectorAll(B.join(",")),{Block:t,getProps:o,getErrorBoundaryProps:n,selector:a}=e,c=(({Block:e,getProps:r,getErrorBoundaryProps:t,selector:o,wrappers:n})=>{const a=document.body.querySelectorAll(o);return n&&n.length>0&&Array.prototype.filter.call(a,(e=>!((e,r)=>Array.prototype.some.call(r,(r=>r.contains(e)&&!r.isSameNode(e))))(e,n))),A({Block:e,containers:a,getProps:r,getErrorBoundaryProps:t})})({Block:t,getProps:o,getErrorBoundaryProps:n,selector:a,wrappers:r});Array.prototype.forEach.call(r,(r=>{r.addEventListener("wc-blocks_render_blocks_frontend",(()=>{(({Block:e,getProps:r,getErrorBoundaryProps:t,selector:o,wrapper:n})=>{const a=n.querySelectorAll(o);A({Block:e,containers:a,getProps:r,getErrorBoundaryProps:t})})({...e,wrapper:r})}))}))})({selector:".wc-block-order-confirmation-create-account-form",Block:({attributes:e,isEditor:r})=>{const[t,a]=(0,n.useState)(!1),[l,i]=(0,n.useState)(""),m=(0,W.useSelect)((e=>e($.VALIDATION_STORE_KEY).getValidationError("account-password"))),d=(null==e?void 0:e.customerEmail)||(r?"customer@email.com":""),p=(null==e?void 0:e.nonceToken)||"",u=(0,s.getSetting)("registrationGeneratePassword",!1),w=!u&&!l;return d?(0,o.createElement)("form",{className:"wc-block-order-confirmation-create-account-form",id:"create-account",method:"POST",action:"#create-account",onSubmit:e=>{m?e.preventDefault():a(!0)}},!u&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,n.createInterpolateElement)((0,c.__)("Set a password for <email/>","woocommerce"),{email:(0,o.createElement)("strong",null,d)})),(0,o.createElement)(J,{isLoading:t,password:l,setPassword:i})),(0,o.createElement)(C,{className:(0,N.A)("wc-block-order-confirmation-create-account-button",{"is-loading":t}),type:"submit",disabled:!!m||w||t},!!t&&(0,o.createElement)(V.Spinner,null),(0,o.createElement)("span",{className:"wc-block-order-confirmation-create-account-button-text"},(0,c.__)("Create account","woocommerce"))),(0,o.createElement)("input",{type:"hidden",name:"email",value:d}),(0,o.createElement)("input",{type:"hidden",name:"password",value:l}),(0,o.createElement)("input",{type:"hidden",name:"create-account",value:"1"}),(0,o.createElement)("input",{type:"hidden",name:"_wpnonce",value:p}),(0,o.createElement)("div",{className:"wc-block-order-confirmation-create-account-description"},(0,o.createElement)("p",null,u&&(0,o.createElement)(o.Fragment,null,(0,n.createInterpolateElement)((0,c.__)("Check your email at <email/> for the link to set up an account password.","woocommerce"),{email:(0,o.createElement)(o.Fragment,null,d)})," "),(0,n.createInterpolateElement)((0,c.__)("By creating an account you agree to our <terms/> and <privacy/>.","woocommerce"),{terms:q,privacy:z})))):null},getProps:e=>{return{attributes:(r=e.dataset,{customerEmail:(null==r?void 0:r.customerEmail)||"",nonceToken:(null==r?void 0:r.nonceToken)||""}),isEditor:!1};var r}})},9407:()=>{},2080:()=>{},3091:()=>{},7791:()=>{},1609:e=>{"use strict";e.exports=window.React},9491:e=>{"use strict";e.exports=window.wp.compose},4040:e=>{"use strict";e.exports=window.wp.deprecated},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e].call(t.exports,t,t.exports,a),t.exports}a.m=o,e=[],a.O=(r,t,o,n)=>{if(!t){var c=1/0;for(m=0;m<e.length;m++){for(var[t,o,n]=e[m],s=!0,l=0;l<t.length;l++)(!1&n||c>=n)&&Object.keys(a.O).every((e=>a.O[e](t[l])))?t.splice(l--,1):(s=!1,n<c&&(c=n));if(s){e.splice(m--,1);var i=o();void 0!==i&&(r=i)}}return r}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[t,o,n]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);a.r(n);var c={};r=r||[null,t({}),t([]),t(t)];for(var s=2&o&&e;"object"==typeof s&&!~r.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((r=>c[r]=()=>e[r]));return c.default=()=>e,a.d(n,c),n},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=932,(()=>{var e={932:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[c,s,l]=t,i=0;if(c.some((r=>0!==e[r]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var m=l(a)}for(r&&r(t);i<c.length;i++)n=c[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},t=self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var c=a.O(void 0,[763],(()=>a(4172)));c=a.O(c),(wc=void 0===wc?{}:wc)["order-confirmation-create-account"]=c})();