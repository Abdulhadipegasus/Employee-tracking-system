(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[103],{1041:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(491),s=r(174),c=r(26),o=r(443),l=r(201),i=r(202),d=r(25),u=r(23),b=r(151),m=r(440),p=r(2);const j=()=>{const{t:e}=Object(o.a)();return Object(p.jsx)("footer",{className:"footer footer-alt",children:Object(p.jsxs)("p",{className:"text-muted",children:[e("Back to")," ",Object(p.jsx)(c.b,{to:"/auth/login2",className:"text-muted ms-1",children:Object(p.jsx)("b",{children:e("Log in")})})]})})};t.default=()=>{const{dispatch:e,appSelector:t}=Object(u.b)(),{t:r}=Object(o.a)();Object(a.useEffect)((()=>{e(Object(d.k)())}),[e]);const{loading:c,passwordReset:f,resetPasswordSuccess:h,error:g}=t((e=>({loading:e.Auth.loading,resetPasswordSuccess:e.Auth.resetPasswordSuccess,error:e.Auth.error,passwordReset:e.Auth.passwordReset}))),x=Object(i.a)(l.c().shape({email:l.e().required(r("Please enter Email address"))}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(m.a,{bottomLinks:Object(p.jsx)(j,{}),children:[Object(p.jsx)("h4",{className:"mt-0",children:r("Recover Password")}),Object(p.jsx)("p",{className:"text-muted mb-4",children:r("Enter your email address and we'll send you an email with instructions to reset your password.")}),h&&Object(p.jsx)(n.a,{variant:"success",children:h.message}),g&&!h&&Object(p.jsx)(n.a,{variant:"danger",className:"my-2",children:g}),!f&&Object(p.jsxs)(b.b,{onSubmit:t=>{e(Object(d.g)(t.email))},resolver:x,children:[Object(p.jsx)(b.a,{label:r("Email address"),type:"text",name:"email",placeholder:r("Enter your email"),containerClass:"mb-3"}),Object(p.jsx)("div",{className:"text-center d-grid",children:Object(p.jsx)(s.a,{type:"submit",disabled:c,children:r("Reset Password")})})]})]})})}},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(149);function s(e){var t=Object(n.a)(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},149:function(e,t,r){"use strict";var a=r(0);t.a=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t}},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return f}));var a=r(0),n=r.n(a),s=r(148),c=r(2);var o=e=>{let{defaultValues:t,resolver:r,children:a,onSubmit:o,formClass:l}=e;const i=Object(s.d)({defaultValues:t,resolver:r}),{handleSubmit:d,register:u,control:b,formState:{errors:m}}=i;return Object(c.jsx)("form",{onSubmit:d(o),className:l,noValidate:!0,children:Array.isArray(a)?a.map((e=>e.props&&e.props.name?n.a.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:m,control:b}}):e)):a})},l=r(1030),i=r(902),d=r(44),u=r.n(d);const b=e=>{let{name:t,placeholder:r,refCallback:n,errors:s,control:o,register:d,className:b,...m}=e;const[p,j]=Object(a.useState)(!1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{className:"mb-0",children:[Object(c.jsx)(i.a.Control,{type:p?"text":"password",placeholder:r,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:b,isInvalid:!(!s||!s[t]),...d?d(t):{},autoComplete:t,...m}),Object(c.jsx)("div",{className:u()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:Object(c.jsx)("span",{className:"password-eye",onClick:()=>{j(!p)}})})]}),s&&s[t]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:s[t].message}):null]})},m=e=>{let{type:t,name:r,placeholder:a,endIcon:n,register:s,errors:o,comp:l,rows:d,className:u,refCallback:m,...p}=e;return Object(c.jsx)(c.Fragment,{children:"password"===t&&n?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{name:r,placeholder:a,refCallback:m,errors:o,register:s,className:u,...p})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Control,{type:t,placeholder:a,name:r,as:l,id:r,ref:e=>{m&&m(e)},className:u,isInvalid:!(!o||!o[r]),...s?s(r):{},rows:d,...p}),o&&o[r]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},p=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:l,rows:d,className:u,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Check,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},className:u,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})},j=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:l,className:d,children:u,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Select,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},children:u,className:d,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",children:o[a].message}):null]})};var f=e=>{let{label:t,type:r,name:a,placeholder:n,endIcon:s,register:o,errors:l,control:d,className:u,labelClassName:b,containerClass:f,refCallback:h,children:g,rows:x,...O}=e;const y="textarea"===r?"textarea":"select"===r?"select":"input",v=void 0===s||s;return Object(c.jsx)(c.Fragment,{children:"hidden"===r?Object(c.jsx)("input",{type:r,name:a,...o?o(a):{},...O}):Object(c.jsx)(c.Fragment,{children:"select"===r?Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(j,{type:r,name:a,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:u,children:g,...O})]}):Object(c.jsx)(c.Fragment,{children:"checkbox"===r||"radio"===r?Object(c.jsx)(i.a.Group,{className:f,children:Object(c.jsx)(p,{type:r,label:t,name:a,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:u,rows:x,...O})}):Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(m,{type:r,name:a,placeholder:n,endIcon:v,refCallback:h,errors:l,register:o,comp:y,className:u,rows:x,...O})]})})})})}},156:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-dark.f85dba6d.png"},162:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-light.3f7305d3.png"},168:function(e,t,r){"use strict";var a=r(27),n=r.n(a),s=r(0),c=r(44),o=r.n(c),l=r(2);const i={"aria-label":n.a.string,onClick:n.a.func,variant:n.a.oneOf(["white"])},d=s.forwardRef(((e,t)=>{let{className:r,variant:a,...n}=e;return Object(l.jsx)("button",{ref:t,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),r),...n})}));d.displayName="CloseButton",d.propTypes=i,d.defaultProps={"aria-label":"Close"},t.a=d},169:function(e,t,r){var a=r(170);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},173:function(e,t,r){var a=r(186),n=r(187),s=r(169),c=r(188);e.exports=function(e,t){return a(e)||n(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},187:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,s=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);c=!0);}catch(l){o=!0,n=l}finally{try{c||null==r.return||r.return()}finally{if(o)throw n}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},440:function(e,t,r){"use strict";var a=r(0),n=r(146),s=r(26),c=r(443),o=r(156),l=r(162),i=r(2);t.a=e=>{let{helpText:t,bottomLinks:r,children:d,isCombineForm:u}=e;const{t:b}=Object(c.a)();return Object(a.useEffect)((()=>(document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern"),document.body&&document.body.classList.add("auth-fluid-pages","pb-0"),()=>{document.body&&document.body.classList.remove("auth-fluid-pages","pb-0")})),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"auth-fluid",children:[Object(i.jsx)("div",{className:"auth-fluid-right",children:Object(i.jsxs)("div",{className:"auth-user-testimonial",children:[Object(i.jsx)("h3",{className:"mb-3 text-white",children:b("Very elegant & impressive!")}),Object(i.jsxs)("p",{className:"lead fw-normal",children:[Object(i.jsx)("i",{className:"mdi mdi-format-quote-open"})," ",b("I've been using this theme for a while and I must say that whenever I am looking for a design - I refer to this theme for specifics & implementation. With wide arrays of components, designs, charts - I would highly recommend this theme for anyone using it for dashboard or project management usage..")," ",Object(i.jsx)("i",{className:"mdi mdi-format-quote-close"})]}),Object(i.jsxs)("h5",{className:"text-white",children:["- ",b("Admin User")]})]})}),Object(i.jsx)("div",{className:"auth-fluid-form-box",children:Object(i.jsx)("div",{className:"align-items-center d-flex h-100",children:Object(i.jsxs)(n.a.Body,{children:[Object(i.jsx)("div",{className:"auth-brand text-center text-lg-start",children:Object(i.jsxs)("div",{className:"auth-logo",children:[Object(i.jsx)(s.b,{to:"/",className:"logo logo-dark text-center",children:Object(i.jsx)("span",{className:"logo-lg",children:Object(i.jsx)("img",{src:o.a,alt:"",height:"22"})})}),Object(i.jsx)(s.b,{to:"/",className:"logo logo-light text-center",children:Object(i.jsx)("span",{className:"logo-lg",children:Object(i.jsx)("img",{src:l.a,alt:"",height:"22"})})})]})}),d,r]})})})]})})}},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r(173),n=r.n(a),s=r(46),c=r.n(s),o=r(0),l=r(105);function i(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var d={};function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),i.apply(void 0,t))}function b(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return u("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var c=function(e,r){var a=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===a||2===a};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!c(a,e)||n&&!c(s,e))))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,a=Object(o.useContext)(l.a)||{},s=a.i18n,c=a.defaultNS,i=r||s||Object(l.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new l.b),!i){u("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[d,{},!1];return p.t=d,p.i18n={},p.ready=!1,p}i.options.react&&void 0!==i.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=j(j(j({},Object(l.c)()),i.options.react),t),h=f.useSuspense,g=f.keyPrefix,x=e||c||i.options&&i.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(x);var O=(i.isInitialized||i.initializedStoreOnce)&&x.every((function(e){return m(e,i,f)}));function y(){return i.getFixedT(null,"fallback"===f.nsMode?x:x[0],g)}var v=Object(o.useState)(y),N=n()(v,2),w=N[0],k=N[1],C=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function r(){C.current&&k(y)}return C.current=!0,O||h||b(i,x,(function(){C.current&&k(y)})),e&&i&&i.on(e,r),t&&i&&i.store.on(t,r),function(){C.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,r)})),t&&i&&t.split(" ").forEach((function(e){return i.store.off(e,r)}))}}),[i,x.join()]);var S=Object(o.useRef)(!0);Object(o.useEffect)((function(){C.current&&!S.current&&k(y),S.current=!1}),[i]);var I=[w,i,O];if(I.t=w,I.i18n=i,I.ready=O,O)return I;if(!O&&!h)return I;throw new Promise((function(e){b(i,x,(function(){e()}))}))}},491:function(e,t,r){"use strict";var a=r(44),n=r.n(a),s=r(0),c=r(134),o=r(130),l=r(113),i=r(45),d=r(193),u=r(168),b=r(119),m=r(109),p=r(2);const j=Object(b.a)("h4");j.displayName="DivStyledAsH4";const f=Object(m.a)("alert-heading",{Component:j}),h=Object(m.a)("alert-link",{Component:l.a}),g={variant:"primary",show:!0,transition:d.a,closeLabel:"Close alert"},x=s.forwardRef(((e,t)=>{const{bsPrefix:r,show:a,closeLabel:s,closeVariant:l,className:b,children:m,variant:j,onClose:f,dismissible:h,transition:g,...x}=Object(c.a)(e,{show:"onClose"}),O=Object(i.a)(r,"alert"),y=Object(o.a)((e=>{f&&f(!1,e)})),v=!0===g?d.a:g,N=Object(p.jsxs)("div",{role:"alert",...v?void 0:x,ref:t,className:n()(b,O,j&&"".concat(O,"-").concat(j),h&&"".concat(O,"-dismissible")),children:[h&&Object(p.jsx)(u.a,{onClick:y,"aria-label":s,variant:l}),m]});return v?Object(p.jsx)(v,{unmountOnExit:!0,...x,ref:void 0,in:a,children:N}):a?N:null}));x.displayName="Alert",x.defaultProps=g,t.a=Object.assign(x,{Link:h,Heading:f})}}]);
//# sourceMappingURL=103.022424ed.chunk.js.map