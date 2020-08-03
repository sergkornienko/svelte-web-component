!function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function l(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function i(e,t,n){e.$$.on_destroy.push(c(t,n))}function o(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function v(){return m(" ")}function g(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function h(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){for(let n=0;n<e.options.length;n+=1){const s=e.options[n];if(s.__value===t)return void(s.selected=!0)}}function x(e,t,n){e.classList[n?"add":"remove"](t)}let y;function k(e){y=e}function _(){if(!y)throw new Error("Function called outside component initialization");return y}function E(){const e=_();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const r=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);s.slice().forEach(t=>{t.call(e,r)})}}}function T(e){return _().$$.context.get(e)}function M(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}const A=[],D=[],S=[],L=[],O=Promise.resolve();let H=!1;function I(e){S.push(e)}function z(e){L.push(e)}let j=!1;const C=new Set;function N(){if(!j){j=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];k(t),R(t.$$)}for(A.length=0;D.length;)D.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];C.has(t)||(C.add(t),t())}S.length=0}while(A.length);for(;L.length;)L.pop()();H=!1,j=!1,C.clear()}}function R(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const B=new Set;let G;function q(){G={r:0,c:[],p:G}}function F(){G.r||r(G.c),G=G.p}function V(e,t){e&&e.i&&(B.delete(e),e.i(t))}function U(e,t,n,s){if(e&&e.o){if(B.has(e))return;B.add(e),G.c.push(()=>{B.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function P(e,t){const n={},s={},r={$$scope:1};let l=e.length;for(;l--;){const a=e[l],c=t[l];if(c){for(const e in a)e in c||(s[e]=1);for(const e in c)r[e]||(n[e]=c[e],r[e]=1);e[l]=c}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function J(e){return"object"==typeof e&&null!==e?e:{}}function W(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function Y(e){e&&e.c()}function K(e,t,s){const{fragment:a,on_mount:c,on_destroy:i,after_update:o}=e.$$;a&&a.m(t,s),I(()=>{const t=c.map(n).filter(l);i?i.push(...t):r(t),e.$$.on_mount=[]}),o.forEach(I)}function Z(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){-1===e.$$.dirty[0]&&(A.push(e),H||(H=!0,O.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(t,n,l,a,c,i,o=[-1]){const u=y;k(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:o};let m=!1;if(p.ctx=l?l(t,f,(e,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=r)&&(p.bound[e]&&p.bound[e](r),m&&Q(t,e)),n}):[],p.update(),m=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&V(t.$$.fragment),K(t,n.target,n.anchor),N()}k(u)}class ee{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const te=[];function ne(e,t){return{subscribe:se(e,t).subscribe}}function se(t,n=e){let s;const r=[];function l(e){if(a(t,e)&&(t=e,s)){const e=!te.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),te.push(n,t)}if(e){for(let e=0;e<te.length;e+=2)te[e][0](te[e+1]);te.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(a,c=e){const i=[a,c];return r.push(i),1===r.length&&(s=n(l)||e),a(t),()=>{const e=r.indexOf(i);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const re=":SHOW_MESSAGE",le=":ADD_CONVERSATIONS",ae=":LOAD_CONVERSATIONS",ce=":LOAD_SEARCH_RESULT",ie=":GET_MESSAGE",oe=":GET_CONVERSATIONS",ue=":TOGGLE_FAVORITE",de=":TOGGLE_READED",fe=":REFRESH",pe=":SEARCH",me="bot",ve="user",ge="https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png",he=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],$e=[{value:"en",label:"English"},{value:"de",label:"German"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"pt",label:"Portuguese"},{value:"ru",label:"Russian"},{value:"ja",label:"Japanese"},{value:"ko",label:"Korean"},{value:"tr",label:"Turkish"}],be=[{label:"All",value:"all"},{label:"With star",value:"favorite"},{label:"Unread",value:"unread"},{label:"Desktop",value:"desktop"},{label:"Mobile",value:"mobile"},{label:"Tablet",value:"tablet"}],we=[{label:"Newest to oldest",value:"DateAscending"},{label:"Oldest to newest",value:"DateDescending"},{label:"Longest to shortest",value:"DurationAscending"},{label:"Shortest to longest",value:"DurationDescending"},{label:"Most engaged",value:"EngageAscending"},{label:"Least engaged",value:"EngageDescending"}],xe=({data:e})=>e&&"CHATBOT-CONV"===e.messageType,ye=(e,t)=>{if(!xe(e))return null;switch(Me.set(!1),console.log("conversationsReducer: ",e.data,t),e.data.type){case le:return Ae.set(!1),t.concat(e.data.list);case ae:return Ae.set(!1),e.data.list.slice();case ce:return Ae.set(!0),e.data.list.slice();default:return null}},ke=e=>xe(e)&&e.data.type===re?{avatar:e.data.avatar,list:e.data.list,botId:e.data.botId}:null,_e=(e,t,n)=>s=>{const r=t(s,function(e){let t;return c(e,e=>t=e)(),t}(n));r&&e(r)},Ee=ne({avatar:"",list:[]},e=>window.addEventListener("message",_e(e,ke,Ee))),Te=ne([],e=>window.addEventListener("message",_e(e,ye,Te))),Me=se(!1),Ae=se(!1);function De(t){let n;return{c(){n=p("div"),$(n,"class","search-icon svelte-2tm8av")},m(e,t){u(e,n,t),n.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjm3asvgcontent" data-bbox="-3 -3 22 22" viewBox="-3 -3 22 22" height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M17 10.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0zm-14 0a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zm13.354 5.146l4 4-.708.708-4-4 .708-.708z" id="b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></path>\n        </defs>\n        <g transform="translate(-3 -3)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="362ffaf8-c1ce-4449-b616-95f0b51e28a7">\n                <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></use>\n            </mask>\n            <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#362ffaf8-c1ce-4449-b616-95f0b51e28a7)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p:e,d(e){e&&d(n)}}}function Se(t){let n,s,r,l,a,c=t[1]&&De();return{c(){n=p("div"),c&&c.c(),s=v(),r=p("input"),$(r,"type","text"),$(r,"class","input-element svelte-2tm8av"),r.disabled=t[3],$(r,"placeholder",t[0]),x(r,"search",t[1]),x(r,"stretch",t[2]),$(n,"class","input svelte-2tm8av"),x(n,"stretch",t[2])},m(e,i){u(e,n,i),c&&c.m(n,null),o(n,s),o(n,r),l||(a=g(r,"input",t[4]),l=!0)},p(e,[t]){e[1]?c?c.p(e,t):(c=De(),c.c(),c.m(n,s)):c&&(c.d(1),c=null),8&t&&(r.disabled=e[3]),1&t&&$(r,"placeholder",e[0]),2&t&&x(r,"search",e[1]),4&t&&x(r,"stretch",e[2]),4&t&&x(n,"stretch",e[2])},i:e,o:e,d(e){e&&d(n),c&&c.d(),l=!1,a()}}}function Le(e,t,n){let{placeholder:s}=t,{search:r=!1}=t,{stretch:l=!1}=t,{disabled:a=!1}=t;return e.$set=e=>{"placeholder"in e&&n(0,s=e.placeholder),"search"in e&&n(1,r=e.search),"stretch"in e&&n(2,l=e.stretch),"disabled"in e&&n(3,a=e.disabled)},[s,r,l,a,function(t){M(e,t)}]}class Oe extends ee{constructor(e){super(),X(this,e,Le,Se,a,{placeholder:0,search:1,stretch:2,disabled:3})}}function He(t){let n,s,r,l;return{c(){n=p("button"),s=m(t[0]),$(n,"class","btn svelte-16ia2z6"),n.disabled=t[2],x(n,"primary",t[1])},m(e,a){u(e,n,a),o(n,s),r||(l=g(n,"click",t[3]),r=!0)},p(e,[t]){1&t&&b(s,e[0]),4&t&&(n.disabled=e[2]),2&t&&x(n,"primary",e[1])},i:e,o:e,d(e){e&&d(n),r=!1,l()}}}function Ie(e,t,n){let{label:s}=t,{primary:r}=t,{disabled:l}=t;return e.$set=e=>{"label"in e&&n(0,s=e.label),"primary"in e&&n(1,r=e.primary),"disabled"in e&&n(2,l=e.disabled)},[s,r,l,function(t){M(e,t)}]}class ze extends ee{constructor(e){super(),X(this,e,Ie,He,a,{label:0,primary:1,disabled:2})}}function je(e,t,n){const s=e.slice();return s[4]=t[n].label,s[0]=t[n].value,s}function Ce(e){let t,n,s,r=e[4]+"";return{c(){t=p("option"),n=m(r),t.__value=s=e[0],t.value=t.__value},m(e,s){u(e,t,s),o(t,n)},p(e,l){2&l&&r!==(r=e[4]+"")&&b(n,r),2&l&&s!==(s=e[0])&&(t.__value=s,t.value=t.__value)},d(e){e&&d(t)}}}function Ne(t){let n,s,r,l,a,c,i=t[1],m=[];for(let e=0;e<i.length;e+=1)m[e]=Ce(je(t,i,e));return{c(){n=p("div"),s=p("select");for(let e=0;e<m.length;e+=1)m[e].c();r=v(),l=p("div"),$(s,"class","input-element svelte-1evksa2"),$(s,"name",t[2]),void 0===t[0]&&I(()=>t[3].call(s)),$(l,"class","arrow svelte-1evksa2"),$(n,"class","dropdown svelte-1evksa2")},m(e,i){u(e,n,i),o(n,s);for(let e=0;e<m.length;e+=1)m[e].m(s,null);w(s,t[0]),o(n,r),o(n,l),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" id="comp-kbgc4ykjicon" class="arrow-down-icon">\n  <defs></defs>\n  <title>arrow&amp;amp;v</title>\n  <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z" class="style-kbgc4ym6_cls-1"></path>\n</svg>',a||(c=g(s,"change",t[3]),a=!0)},p(e,[t]){if(2&t){let n;for(i=e[1],n=0;n<i.length;n+=1){const r=je(e,i,n);m[n]?m[n].p(r,t):(m[n]=Ce(r),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=i.length}4&t&&$(s,"name",e[2]),3&t&&w(s,e[0])},i:e,o:e,d(e){e&&d(n),f(m,e),a=!1,c()}}}function Re(e,t,n){let{options:s}=t,{name:r}=t,{value:l}=t;return e.$set=e=>{"options"in e&&n(1,s=e.options),"name"in e&&n(2,r=e.name),"value"in e&&n(0,l=e.value)},[l,s,r,function(){l=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(0,l),n(1,s)}]}class Be extends ee{constructor(e){super(),X(this,e,Re,Ne,a,{options:1,name:2,value:0})}}var Ge=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},qe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Fe="object"==typeof qe&&qe&&qe.Object===Object&&qe,Ve="object"==typeof self&&self&&self.Object===Object&&self,Ue=Fe||Ve||Function("return this")(),Pe=function(){return Ue.Date.now()},Je=Ue.Symbol,We=Object.prototype,Ye=We.hasOwnProperty,Ke=We.toString,Ze=Je?Je.toStringTag:void 0;var Qe=function(e){var t=Ye.call(e,Ze),n=e[Ze];try{e[Ze]=void 0;var s=!0}catch(e){}var r=Ke.call(e);return s&&(t?e[Ze]=n:delete e[Ze]),r},Xe=Object.prototype.toString;var et=function(e){return Xe.call(e)},tt=Je?Je.toStringTag:void 0;var nt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":tt&&tt in Object(e)?Qe(e):et(e)};var st=function(e){return null!=e&&"object"==typeof e};var rt=function(e){return"symbol"==typeof e||st(e)&&"[object Symbol]"==nt(e)},lt=/^\s+|\s+$/g,at=/^[-+]0x[0-9a-f]+$/i,ct=/^0b[01]+$/i,it=/^0o[0-7]+$/i,ot=parseInt;var ut=function(e){if("number"==typeof e)return e;if(rt(e))return NaN;if(Ge(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ge(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(lt,"");var n=ct.test(e);return n||it.test(e)?ot(e.slice(2),n?2:8):at.test(e)?NaN:+e},dt=Math.max,ft=Math.min;var pt=function(e,t,n){var s,r,l,a,c,i,o=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=s,l=r;return s=r=void 0,o=t,a=e.apply(l,n)}function m(e){return o=e,c=setTimeout(g,t),u?p(e):a}function v(e){var n=e-i;return void 0===i||n>=t||n<0||d&&e-o>=l}function g(){var e=Pe();if(v(e))return h(e);c=setTimeout(g,function(e){var n=t-(e-i);return d?ft(n,l-(e-o)):n}(e))}function h(e){return c=void 0,f&&s?p(e):(s=r=void 0,a)}function $(){var e=Pe(),n=v(e);if(s=arguments,r=this,i=e,n){if(void 0===c)return m(i);if(d)return clearTimeout(c),c=setTimeout(g,t),p(i)}return void 0===c&&(c=setTimeout(g,t)),a}return t=ut(t)||0,Ge(n)&&(u=!!n.leading,l=(d="maxWait"in n)?dt(ut(n.maxWait)||0,t):l,f="trailing"in n?!!n.trailing:f),$.cancel=function(){void 0!==c&&clearTimeout(c),o=0,s=i=r=c=void 0},$.flush=function(){return void 0===c?a:h(Pe())},$};const mt=e=>{var t,n;t="event-emitter",n={dispatchEvent:(t,n)=>{console.log(t,{detail:n}),e(new CustomEvent(t,{detail:n}))}},_().$$.context.set(t,n)},vt=()=>{const{dispatchEvent:e}=T("event-emitter");e(fe,{responseType:ae})};function gt(e){let t,n,s,r,l,a,c,i,f,m,g,h,b,w,x,y,k,_;function E(t){e[6].call(null,t)}n=new Oe({props:{stretch:!0,search:!0,disabled:e[3],placeholder:"Search Conversations"}}),n.$on("input",e[4]);let T={stretch:!0,name:"filterBy",options:be};function M(t){e[7].call(null,t)}void 0!==e[0]&&(T.value=e[0]),l=new Be({props:T}),D.push(()=>W(l,"value",E));let A={stretch:!0,name:"sortBy",options:we};function S(t){e[8].call(null,t)}void 0!==e[1]&&(A.value=e[1]),i=new Be({props:A}),D.push(()=>W(i,"value",M));let L={stretch:!0,name:"language",options:$e};return void 0!==e[2]&&(L.value=e[2]),g=new Be({props:L}),D.push(()=>W(g,"value",S)),x=new ze({props:{primary:!0,label:"Filter",disabled:e[3]}}),x.$on("click",e[5]),k=new ze({props:{primary:!0,label:"Refresh",disabled:e[3]}}),k.$on("click",vt),{c(){t=p("div"),Y(n.$$.fragment),s=v(),r=p("div"),Y(l.$$.fragment),c=v(),Y(i.$$.fragment),m=v(),Y(g.$$.fragment),b=v(),w=p("div"),Y(x.$$.fragment),y=v(),Y(k.$$.fragment),$(r,"class","filters svelte-51eeo0"),$(w,"class","btns svelte-51eeo0"),$(t,"class","toolbar svelte-51eeo0")},m(e,a){u(e,t,a),K(n,t,null),o(t,s),o(t,r),K(l,r,null),o(r,c),K(i,r,null),o(r,m),K(g,r,null),o(t,b),o(t,w),K(x,w,null),o(w,y),K(k,w,null),_=!0},p(e,[t]){const s={};8&t&&(s.disabled=e[3]),n.$set(s);const r={};!a&&1&t&&(a=!0,r.value=e[0],z(()=>a=!1)),l.$set(r);const c={};!f&&2&t&&(f=!0,c.value=e[1],z(()=>f=!1)),i.$set(c);const o={};!h&&4&t&&(h=!0,o.value=e[2],z(()=>h=!1)),g.$set(o);const u={};8&t&&(u.disabled=e[3]),x.$set(u);const d={};8&t&&(d.disabled=e[3]),k.$set(d)},i(e){_||(V(n.$$.fragment,e),V(l.$$.fragment,e),V(i.$$.fragment,e),V(g.$$.fragment,e),V(x.$$.fragment,e),V(k.$$.fragment,e),_=!0)},o(e){U(n.$$.fragment,e),U(l.$$.fragment,e),U(i.$$.fragment,e),U(g.$$.fragment,e),U(x.$$.fragment,e),U(k.$$.fragment,e),_=!1},d(e){e&&d(t),Z(n),Z(l),Z(i),Z(g),Z(x),Z(k)}}}function ht(e,t,n){let s,r,l,a;i(e,Me,e=>n(3,s=e));const c=pt(e=>(e=>{if(!e||""===e)return;const{dispatchEvent:t}=T("event-emitter");t(pe,{value:e,responseType:ce})})(e.target.value.trim()),500);return[r,l,a,s,c,e=>((e,t,n)=>{const{dispatchEvent:s}=T("event-emitter");Me.set(!0),s(oe,{sort:t,filter:e,language:n,responseType:ae})})(r,l,a),function(e){r=e,n(0,r)},function(e){l=e,n(1,l)},function(e){a=e,n(2,a)}]}class $t extends ee{constructor(e){super(),X(this,e,ht,gt,a,{})}}const bt=e=>e===ve,wt=e=>e===me,xt=(e,t,n)=>e===t._id||!e&&0===n,yt=e=>{const t=new Date(e.$date);return`${t.getHours()>9?t.getHours():0+t.getHours()}:${t.getMinutes()>9?t.getMinutes():0+t.getMinutes()} ${(e=>`${he[e.getMonth()]} ${e.getDate()}`)(t)}`},kt=e=>{return`${e.countMessages} messages (${e.duration?(e=>{let t=Math.floor(e/6e4%60),n=Math.floor(e/36e5%24);return n=n<10?0+n:n,t=t<10?0+t:t,n+":"+t})(e.duration):(t=e._createdDate,n=e._updatedDate,new Date(n-t).toISOString().slice(14,-5))} min)`;var t,n};function _t(t){let n,s;return{c(){n=p("img"),$(n,"class","avatar user-avatar svelte-1spx89t"),n.src!==(s=t[0]||ge)&&$(n,"src",s),$(n,"alt","User avatar")},m(e,t){u(e,n,t)},p(e,[t]){1&t&&n.src!==(s=e[0]||ge)&&$(n,"src",s)},i:e,o:e,d(e){e&&d(n)}}}function Et(e,t,n){let{userAvatar:s}=t;return e.$set=e=>{"userAvatar"in e&&n(0,s=e.userAvatar)},[s]}class Tt extends ee{constructor(e){super(),X(this,e,Et,_t,a,{userAvatar:0})}}function Mt(t){let n,s,r,l,a,c,i,f,g,h,w,x,y,k,_=t[0].userName+"",E=yt(t[0]._createdDate)+"",T=t[0].finalMessage+"",M=kt(t[0])+"";return{c(){n=p("div"),s=p("div"),r=p("span"),l=m(_),a=v(),c=p("span"),i=m(E),f=v(),g=p("div"),h=p("p"),w=m(T),x=v(),y=p("p"),k=m(M),$(r,"class","username svelte-159y6e9"),$(c,"class","date svelte-159y6e9"),$(s,"class","main-info svelte-159y6e9"),$(h,"class","final-message svelte-159y6e9"),$(y,"class","messages-info svelte-159y6e9"),$(g,"class","additiona-info svelte-159y6e9"),$(n,"class","info svelte-159y6e9")},m(e,t){u(e,n,t),o(n,s),o(s,r),o(r,l),o(s,a),o(s,c),o(c,i),o(n,f),o(n,g),o(g,h),o(h,w),o(g,x),o(g,y),o(y,k)},p(e,[t]){1&t&&_!==(_=e[0].userName+"")&&b(l,_),1&t&&E!==(E=yt(e[0]._createdDate)+"")&&b(i,E),1&t&&T!==(T=e[0].finalMessage+"")&&b(w,T),1&t&&M!==(M=kt(e[0])+"")&&b(k,M)},i:e,o:e,d(e){e&&d(n)}}}function At(e,t,n){let{conv:s={}}=t;return e.$set=e=>{"conv"in e&&n(0,s=e.conv)},[s]}class Dt extends ee{constructor(e){super(),X(this,e,At,Mt,a,{conv:0})}}function St(e){let t;return{c(){t=p("a"),$(t,"class","icon svelte-lmq8qg"),$(t,"href",e[0]),$(t,"target","_blank")},m(e,n){u(e,t,n),t.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmg0__1pSCZlC4MsmbG0UgsKrGsvgcontent" data-bbox="-2 -5 22 22" viewBox="-2 -5 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M18.918 11.298L19 11.5l-.082.201C18.813 11.959 16.293 18 10.5 18c-5.793 0-8.313-6.041-8.418-6.299L2 11.5l.082-.202C2.187 11.041 4.707 5 10.5 5c5.793 0 8.313 6.041 8.418 6.298zM10.5 16.964c4.58 0 6.935-4.452 7.411-5.464-.478-1.01-2.843-5.464-7.411-5.464-4.58 0-6.935 4.452-7.411 5.463.478 1.011 2.843 5.465 7.411 5.465zm0-2.214a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm0-1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" id="826ee0e3-216f-47cb-a897-6d615df226c0"></path>\n        </defs>\n        <g transform="translate(-2 -5)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="857a01c0-fe82-4ddf-9398-1034b98f1f38">\n                <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0"></use>\n            </mask>\n            <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#857a01c0-fe82-4ddf-9398-1034b98f1f38)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p(e,n){1&n&&$(t,"href",e[0])},d(e){e&&d(t)}}}function Lt(t){let n,s,l,a,c,i,f,m,b,w=t[0]&&St(t);return{c(){n=p("div"),s=p("div"),l=v(),w&&w.c(),a=v(),c=p("div"),i=p("img"),$(s,"class","deep-link"),$(n,"class","additional-icons svelte-lmq8qg"),i.src!==(f=t[1])&&$(i,"src",f),$(i,"alt","Star"),$(i,"height","28px"),$(c,"class","favorite svelte-lmq8qg")},m(e,r){u(e,n,r),o(n,s),s.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmac__7PlBI8F1H1njrtv8E2GBsvgcontent" data-bbox="-3 -4 22 22" viewBox="-3 -4 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M7.703 17.368c-.821.822-2.252.821-3.073 0a2.176 2.176 0 0 1 0-3.073l3.687-3.687a2.175 2.175 0 0 1 3.074 0l.703-.704a3.173 3.173 0 0 0-4.481 0l-3.686 3.687a3.171 3.171 0 0 0 0 4.481 3.147 3.147 0 0 0 2.24.928c.846 0 1.642-.33 2.24-.928l2.223-2.223-.704-.703-2.223 2.222zM18 7.166c0-.846-.329-1.642-.928-2.24a3.173 3.173 0 0 0-4.481 0L10.369 7.15l.703.704 2.223-2.223a2.176 2.176 0 0 1 3.074 0c.41.411.636.956.636 1.536a2.16 2.16 0 0 1-.636 1.537l-3.687 3.688a2.177 2.177 0 0 1-3.074 0l-.704.703a3.163 3.163 0 0 0 2.241.927 3.16 3.16 0 0 0 2.24-.927l3.687-3.687A3.146 3.146 0 0 0 18 7.167z" id="dd461069-c027-433f-aec5-d45da1d7d15e"></path>\n        </defs>\n        <g transform="translate(-3 -4)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="47f47b80-b166-41ed-81cd-5dc504d0f44f">\n                <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e"></use>\n            </mask>\n            <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#47f47b80-b166-41ed-81cd-5dc504d0f44f)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>',o(n,l),w&&w.m(n,null),u(e,a,r),u(e,c,r),o(c,i),m||(b=[g(s,"click",h(t[2])),g(i,"click",h(t[3]))],m=!0)},p(e,[t]){e[0]?w?w.p(e,t):(w=St(e),w.c(),w.m(n,null)):w&&(w.d(1),w=null),2&t&&i.src!==(f=e[1])&&$(i,"src",f)},i:e,o:e,d(e){e&&d(n),w&&w.d(),e&&d(a),e&&d(c),m=!1,r(b)}}}function Ot(e,t,n){let{id:s}=t,{favorite:r=!1}=t,{ticket:l=!1}=t;let a;return e.$set=e=>{"id"in e&&n(5,s=e.id),"favorite"in e&&n(4,r=e.favorite),"ticket"in e&&n(0,l=e.ticket)},e.$$.update=()=>{16&e.$$.dirty&&n(1,a=r?"https://static.wixstatic.com/shapes/260237_65b99ecb373f4f038f72dc7ce6327e2c.svg":"https://static.wixstatic.com/shapes/260237_6212104474874a39b3743b95fec440ff.svg")},[l,a,()=>navigator.clipboard.writeText(`${window.location.href}?conversationId=${s}`),()=>{n(4,r=!r),((e,t)=>{const{dispatchEvent:n}=T("event-emitter");n(ue,{_id:e,value:t})})(s,r)},r,s]}class Ht extends ee{constructor(e){super(),X(this,e,Ot,Lt,a,{id:5,favorite:4,ticket:0})}}function It(e){let t,n,s,r,l,a,c,i,f;return n=new Tt({props:{userAvatar:e[0].userAvatar}}),r=new Dt({props:{conv:e[0]}}),a=new Ht({props:{id:e[0]._id,ticket:e[0].withTicket,favorite:e[0].favorite}}),{c(){t=p("div"),Y(n.$$.fragment),s=v(),Y(r.$$.fragment),l=v(),Y(a.$$.fragment),$(t,"class","item svelte-1ektzng"),x(t,"active",e[1]),x(t,"not-readed",!e[0].isReaded)},m(d,p){u(d,t,p),K(n,t,null),o(t,s),K(r,t,null),o(t,l),K(a,t,null),c=!0,i||(f=g(t,"click",e[2]),i=!0)},p(e,[s]){const l={};1&s&&(l.userAvatar=e[0].userAvatar),n.$set(l);const c={};1&s&&(c.conv=e[0]),r.$set(c);const i={};1&s&&(i.id=e[0]._id),1&s&&(i.ticket=e[0].withTicket),1&s&&(i.favorite=e[0].favorite),a.$set(i),2&s&&x(t,"active",e[1]),1&s&&x(t,"not-readed",!e[0].isReaded)},i(e){c||(V(n.$$.fragment,e),V(r.$$.fragment,e),V(a.$$.fragment,e),c=!0)},o(e){U(n.$$.fragment,e),U(r.$$.fragment,e),U(a.$$.fragment,e),c=!1},d(e){e&&d(t),Z(n),Z(r),Z(a),i=!1,f()}}}function zt(e,t,n){const s=E();let{conv:r={}}=t,{active:l=!1}=t;return e.$set=e=>{"conv"in e&&n(0,r=e.conv),"active"in e&&n(1,l=e.active)},[r,l,()=>{r.isReaded||(e=>{const{dispatchEvent:t}=T("event-emitter");t(de,{_id:e})})(r._id),n(0,r.isReaded=!0,r),s("click",{_id:r._id})}]}class jt extends ee{constructor(e){super(),X(this,e,zt,It,a,{conv:0,active:1})}}function Ct(t){let n,s;return{c(){n=p("img"),n.src!==(s="https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif")&&$(n,"src","https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif"),$(n,"alt","Loader"),$(n,"class","loader svelte-em6w2v"),$(n,"width",t[1]),x(n,"centred",t[0])},m(e,t){u(e,n,t)},p(e,[t]){2&t&&$(n,"width",e[1]),1&t&&x(n,"centred",e[0])},i:e,o:e,d(e){e&&d(n)}}}function Nt(e,t,n){let{centred:s}=t,{width:r}=t;return e.$set=e=>{"centred"in e&&n(0,s=e.centred),"width"in e&&n(1,r=e.width)},[s,r]}class Rt extends ee{constructor(e){super(),X(this,e,Nt,Ct,a,{centred:0,width:1})}}function Bt(e,t,n){const s=e.slice();return s[9]=t[n],s[11]=n,s}function Gt(e){let t,n,s=e[4],r=[];for(let t=0;t<s.length;t+=1)r[t]=qt(Bt(e,s,t));const l=e=>U(r[e],1,1,()=>{r[e]=null});return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=m("")},m(e,s){for(let t=0;t<r.length;t+=1)r[t].m(e,s);u(e,t,s),n=!0},p(e,n){if(49&n){let a;for(s=e[4],a=0;a<s.length;a+=1){const l=Bt(e,s,a);r[a]?(r[a].p(l,n),V(r[a],1)):(r[a]=qt(l),r[a].c(),V(r[a],1),r[a].m(t.parentNode,t))}for(q(),a=s.length;a<r.length;a+=1)l(a);F()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)V(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)U(r[e]);n=!1},d(e){f(r,e),e&&d(t)}}}function qt(e){let t,n;return t=new jt({props:{conv:e[9],active:xt(e[0],e[9],e[11])}}),t.$on("click",e[5]),{c(){Y(t.$$.fragment)},m(e,s){K(t,e,s),n=!0},p(e,n){const s={};16&n&&(s.conv=e[9]),17&n&&(s.active=xt(e[0],e[9],e[11])),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function Ft(e){let t,n;return t=new Rt({props:{centred:!0,width:"56px"}}),{c(){Y(t.$$.fragment)},m(e,s){K(t,e,s),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function Vt(e){let t,n,s,r,l,a=(!e[3]||e[2])&&Gt(e),c=(e[2]||e[3])&&Ft();return{c(){t=p("div"),a&&a.c(),n=v(),c&&c.c(),$(t,"class","conv-list svelte-8i2jf1")},m(i,d){u(i,t,d),a&&a.m(t,null),o(t,n),c&&c.m(t,null),e[7](t),s=!0,r||(l=g(t,"scroll",e[6]),r=!0)},p(e,[s]){!e[3]||e[2]?a?(a.p(e,s),12&s&&V(a,1)):(a=Gt(e),a.c(),V(a,1),a.m(t,n)):a&&(q(),U(a,1,1,()=>{a=null}),F()),e[2]||e[3]?c?12&s&&V(c,1):(c=Ft(),c.c(),V(c,1),c.m(t,null)):c&&(q(),U(c,1,1,()=>{c=null}),F())},i(e){s||(V(a),V(c),s=!0)},o(e){U(a),U(c),s=!1},d(n){n&&d(t),a&&a.d(),c&&c.d(),e[7](null),r=!1,l()}}}function Ut(e,t,n){let s,r,l,a,c;i(e,Me,e=>n(3,s=e)),i(e,Ae,e=>n(8,r=e)),i(e,Te,e=>n(4,l=e));let o=!0;Te.subscribe(()=>n(2,o=!1));return[a,c,o,s,l,({detail:e})=>{n(0,a=e._id),(e=>{const{dispatchEvent:t}=T("event-emitter");t(ie,{_id:e,responseType:re})})(e._id)},()=>{var e;s||(e=c).scrollTop!==e.scrollHeight-e.offsetHeight||r||(n(2,o=!0),(()=>{const{dispatchEvent:e}=T("event-emitter");Me.set(!0),e(oe,{responseType:le})})())},function(e){D[e?"unshift":"push"](()=>{c=e,n(1,c)})}]}class Pt extends ee{constructor(e){super(),X(this,e,Ut,Vt,a,{})}}function Jt(t){let n,s,r,l;return{c(){n=p("div"),s=p("p"),$(s,"class","svelte-bskw1a"),$(n,"class","msg bubble svelte-bskw1a")},m(e,a){u(e,n,a),o(n,s),s.innerHTML=t[0],r||(l=g(n,"click",t[1]),r=!0)},p(e,[t]){1&t&&(s.innerHTML=e[0])},i:e,o:e,d(e){e&&d(n),r=!1,l()}}}function Wt(e,t,n){let{message:s=""}=t,{nodeID:r=""}=t,{botId:l=""}=t;const a=`https://www.wix.com/support/conversations?botId=${l}&nodeId=${r}`;return e.$set=e=>{"message"in e&&n(0,s=e.message),"nodeID"in e&&n(2,r=e.nodeID),"botId"in e&&n(3,l=e.botId)},[s,()=>window.open(a,"_blank"),r,l]}class Yt extends ee{constructor(e){super(),X(this,e,Wt,Jt,a,{message:0,nodeID:2,botId:3})}}function Kt(t){let n,s,r;return{c(){n=p("div"),s=p("div"),r=p("p"),$(r,"class","svelte-2mx2wx"),$(s,"class","msg bubble svelte-2mx2wx"),$(n,"class","right svelte-2mx2wx")},m(e,l){u(e,n,l),o(n,s),o(s,r),r.innerHTML=t[0]},p(e,[t]){1&t&&(r.innerHTML=e[0])},i:e,o:e,d(e){e&&d(n)}}}function Zt(e,t,n){let{message:s=""}=t;return e.$set=e=>{"message"in e&&n(0,s=e.message)},[s]}class Qt extends ee{constructor(e){super(),X(this,e,Zt,Kt,a,{message:0})}}function Xt(e){let t,n,s,r,l;return{c(){t=p("a"),n=m(e[1]),s=v(),r=p("img"),$(r,"class","link svelte-z5549l"),r.src!==(l="https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg")&&$(r,"src","https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg"),$(r,"alt","Link"),$(t,"href",e[2]),$(t,"target","_blank"),$(t,"class","svelte-z5549l")},m(e,l){u(e,t,l),o(t,n),o(t,s),o(t,r)},p(e,s){2&s&&b(n,e[1]),4&s&&$(t,"href",e[2])},d(e){e&&d(t)}}}function en(t){let n,s,r,l,a,c,i,f,g,h=t[2]&&Xt(t);return{c(){n=p("div"),s=p("div"),r=v(),l=p("div"),a=p("p"),c=m(t[0]),i=v(),h&&h.c(),f=v(),g=p("div"),$(s,"class","line svelte-z5549l"),$(a,"class","svelte-z5549l"),$(l,"class","action-content svelte-z5549l"),$(g,"class","line svelte-z5549l"),$(n,"class","action svelte-z5549l")},m(e,t){u(e,n,t),o(n,s),o(n,r),o(n,l),o(l,a),o(a,c),o(l,i),h&&h.m(l,null),o(n,f),o(n,g)},p(e,[t]){1&t&&b(c,e[0]),e[2]?h?h.p(e,t):(h=Xt(e),h.c(),h.m(l,null)):h&&(h.d(1),h=null)},i:e,o:e,d(e){e&&d(n),h&&h.d()}}}function tn(e,t,n){let{message:s=""}=t,{linkTitle:r=""}=t,{linkHref:l=""}=t;return e.$set=e=>{"message"in e&&n(0,s=e.message),"linkTitle"in e&&n(1,r=e.linkTitle),"linkHref"in e&&n(2,l=e.linkHref)},[s,r,l]}class nn extends ee{constructor(e){super(),X(this,e,tn,en,a,{message:0,linkTitle:1,linkHref:2})}}function sn(e){let n,s;const r=[e[0]];let l={};for(let e=0;e<r.length;e+=1)l=t(l,r[e]);return n=new nn({props:l}),{c(){Y(n.$$.fragment)},m(e,t){K(n,e,t),s=!0},p(e,t){const s=1&t?P(r,[J(e[0])]):{};n.$set(s)},i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){U(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function rn(e){let n,s;const r=[e[0]];let l={};for(let e=0;e<r.length;e+=1)l=t(l,r[e]);return n=new Qt({props:l}),{c(){Y(n.$$.fragment)},m(e,t){K(n,e,t),s=!0},p(e,t){const s=1&t?P(r,[J(e[0])]):{};n.$set(s)},i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){U(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function ln(e){let n,s;const r=[e[0],{botId:e[1]}];let l={};for(let e=0;e<r.length;e+=1)l=t(l,r[e]);return n=new Yt({props:l}),{c(){Y(n.$$.fragment)},m(e,t){K(n,e,t),s=!0},p(e,t){const s=3&t?P(r,[1&t&&J(e[0]),2&t&&{botId:e[1]}]):{};n.$set(s)},i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){U(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function an(e){let t,n,s,r,l,a;const c=[ln,rn,sn],i=[];function o(e,t){return 1&t&&(n=!!wt(e[0].type)),n?0:(1&t&&(s=!!bt(e[0].type)),s?1:2)}return r=o(e,-1),l=i[r]=c[r](e),{c(){t=p("div"),l.c(),$(t,"class","item svelte-2291eo")},m(e,n){u(e,t,n),i[r].m(t,null),a=!0},p(e,[n]){let s=r;r=o(e,n),r===s?i[r].p(e,n):(q(),U(i[s],1,1,()=>{i[s]=null}),F(),l=i[r],l||(l=i[r]=c[r](e),l.c()),V(l,1),l.m(t,null))},i(e){a||(V(l),a=!0)},o(e){U(l),a=!1},d(e){e&&d(t),i[r].d()}}}function cn(e,t,n){let{msg:s={}}=t,{botId:r=""}=t;return e.$set=e=>{"msg"in e&&n(0,s=e.msg),"botId"in e&&n(1,r=e.botId)},[s,r]}class on extends ee{constructor(e){super(),X(this,e,cn,an,a,{msg:0,botId:1})}}function un(t){let n,s;return{c(){n=p("img"),$(n,"class","avatar bot-avatar svelte-1a1iy9n"),n.src!==(s="https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png")&&$(n,"src","https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png"),$(n,"alt","Bot avatar")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class dn extends ee{constructor(e){super(),X(this,e,null,un,a,{})}}function fn(t){let n,s;return{c(){n=p("img"),$(n,"class","avatar user-avatar svelte-1gifi9k"),n.src!==(s=t[0]||ge)&&$(n,"src",s),$(n,"alt","User avatar")},m(e,t){u(e,n,t)},p(e,[t]){1&t&&n.src!==(s=e[0]||ge)&&$(n,"src",s)},i:e,o:e,d(e){e&&d(n)}}}function pn(e,t,n){let{src:s=""}=t;return e.$set=e=>{"src"in e&&n(0,s=e.src)},[s]}class mn extends ee{constructor(e){super(),X(this,e,pn,fn,a,{src:0})}}function vn(e,t,n){const s=e.slice();return s[2]=t[n],s[4]=n,s}function gn(e){let t,n;return t=new dn({}),{c(){Y(t.$$.fragment)},m(e,s){K(t,e,s),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function hn(t){let n,s;return n=new mn({props:{src:Ee.avatar}}),{c(){Y(n.$$.fragment)},m(e,t){K(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){U(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function $n(e){let t,n,s,r,l,a,c=e[1](e[0].list,e[4]),i=bt(e[2].type),f=c&&gn(),m=i&&hn();return r=new on({props:{msg:e[2]}}),{c(){t=p("div"),f&&f.c(),n=v(),m&&m.c(),s=v(),Y(r.$$.fragment),l=v(),$(t,"class","box svelte-1mthr6r")},m(e,c){u(e,t,c),f&&f.m(t,null),o(t,n),m&&m.m(t,null),o(t,s),K(r,t,null),o(t,l),a=!0},p(e,l){1&l&&(c=e[1](e[0].list,e[4])),c?f?1&l&&V(f,1):(f=gn(),f.c(),V(f,1),f.m(t,n)):f&&(q(),U(f,1,1,()=>{f=null}),F()),1&l&&(i=bt(e[2].type)),i?m?(m.p(e,l),1&l&&V(m,1)):(m=hn(),m.c(),V(m,1),m.m(t,s)):m&&(q(),U(m,1,1,()=>{m=null}),F());const a={};1&l&&(a.msg=e[2]),r.$set(a)},i(e){a||(V(f),V(m),V(r.$$.fragment,e),a=!0)},o(e){U(f),U(m),U(r.$$.fragment,e),a=!1},d(e){e&&d(t),f&&f.d(),m&&m.d(),Z(r)}}}function bn(e){let t,n,s=e[0].list,r=[];for(let t=0;t<s.length;t+=1)r[t]=$n(vn(e,s,t));const l=e=>U(r[e],1,1,()=>{r[e]=null});return{c(){t=p("div");for(let e=0;e<r.length;e+=1)r[e].c();$(t,"class","msg-list svelte-1mthr6r")},m(e,s){u(e,t,s);for(let e=0;e<r.length;e+=1)r[e].m(t,null);n=!0},p(e,[n]){if(3&n){let a;for(s=e[0].list,a=0;a<s.length;a+=1){const l=vn(e,s,a);r[a]?(r[a].p(l,n),V(r[a],1)):(r[a]=$n(l),r[a].c(),V(r[a],1),r[a].m(t,null))}for(q(),a=s.length;a<r.length;a+=1)l(a);F()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)V(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)U(r[e]);n=!1},d(e){e&&d(t),f(r,e)}}}function wn(e,t,n){let s;i(e,Ee,e=>n(0,s=e));return[s,(e,t)=>wt(e[t].type)&&(t+1<e.length&&bt(e[t+1].type)||1===e.length||t===e.length-1)]}class xn extends ee{constructor(e){super(),X(this,e,wn,bn,a,{})}}function yn(t){let n,s,r,l,a,c,i,f,m;return l=new $t({}),c=new Pt({}),f=new xn({}),{c(){n=p("link"),s=v(),r=p("main"),Y(l.$$.fragment),a=v(),Y(c.$$.fragment),i=v(),Y(f.$$.fragment),$(n,"rel","stylesheet"),$(n,"href","https://sergkornienko.github.io/svelte-web-component/bundle.css"),$(r,"class","svelte-su38wg")},m(e,t){o(document.head,n),u(e,s,t),u(e,r,t),K(l,r,null),o(r,a),K(c,r,null),o(r,i),K(f,r,null),m=!0},p:e,i(e){m||(V(l.$$.fragment,e),V(c.$$.fragment,e),V(f.$$.fragment,e),m=!0)},o(e){U(l.$$.fragment,e),U(c.$$.fragment,e),U(f.$$.fragment,e),m=!1},d(e){d(n),e&&d(s),e&&d(r),Z(l),Z(c),Z(f)}}}function kn(e,t,n){let{dispatchEvent:s}=t;return mt(s),e.$set=e=>{"dispatchEvent"in e&&n(0,s=e.dispatchEvent)},[s]}class _n extends ee{constructor(e){super(),X(this,e,kn,yn,a,{dispatchEvent:0})}}class En extends HTMLElement{connectedCallback(){const e=this.dispatchEvent.bind(this);new _n({target:this,props:{dispatchEvent:e}})}}window.customElements.define("chatbot-conv",En)}();
//# sourceMappingURL=bundle.js.map
