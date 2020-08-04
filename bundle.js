!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function c(t,e,n){t.$$.on_destroy.push(i(e,n))}function o(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function v(){return m(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}}function y(t,e,n){t.classList[n?"add":"remove"](e)}let x;function k(t){x=t}function _(){if(!x)throw new Error("Function called outside component initialization");return x}function E(){const t=_();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,r)})}}}function T(t){return _().$$.context.get(t)}function M(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const A=[],D=[],S=[],L=[],O=Promise.resolve();let j=!1;function H(t){S.push(t)}function I(t){L.push(t)}let C=!1;const N=new Set;function R(){if(!C){C=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];k(e),z(e.$$)}for(A.length=0;D.length;)D.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];N.has(e)||(N.add(e),e())}S.length=0}while(A.length);for(;L.length;)L.pop()();j=!1,C=!1,N.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const q=new Set;let B;function G(){B={r:0,c:[],p:B}}function F(){B.r||r(B.c),B=B.p}function V(t,e){t&&t.i&&(q.delete(t),t.i(e))}function U(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),B.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function P(t,e){const n={},s={},r={$$scope:1};let l=t.length;for(;l--;){const a=t[l],i=e[l];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[l]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function J(t){return"object"==typeof t&&null!==t?t:{}}function W(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function Y(t){t&&t.c()}function K(t,e,s){const{fragment:a,on_mount:i,on_destroy:c,after_update:o}=t.$$;a&&a.m(e,s),H(()=>{const e=i.map(n).filter(l);c?c.push(...e):r(e),t.$$.on_mount=[]}),o.forEach(H)}function Z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(A.push(t),j||(j=!0,O.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,l,a,i,c,o=[-1]){const u=x;k(e);const d=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:o};let m=!1;if(p.ctx=l?l(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),m&&Q(e,t)),n}):[],p.update(),m=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&V(e.$$.fragment),K(e,n.target,n.anchor),R()}k(u)}class tt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(t,e){return{subscribe:st(t,e).subscribe}}function st(e,n=t){let s;const r=[];function l(t){if(a(e,t)&&(e=t,s)){const t=!et.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(l)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const rt=":SHOW_MESSAGE",lt=":ADD_CONVERSATIONS",at=":LOAD_CONVERSATIONS",it=":LOAD_SEARCH_RESULT",ct=":GET_MESSAGE",ot=":GET_CONVERSATIONS",ut=":TOGGLE_FAVORITE",ft=":TOGGLE_READED",dt=":REFRESH",pt=":SEARCH",mt="bot",vt="user",gt="https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png",ht=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],$t=[{value:"en",label:"English"},{value:"de",label:"German"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"pt",label:"Portuguese"},{value:"ru",label:"Russian"},{value:"ja",label:"Japanese"},{value:"ko",label:"Korean"},{value:"tr",label:"Turkish"}],bt=[{label:"All",value:"all"},{label:"With star",value:"byFavorite"},{label:"Unread",value:"byUnread"},{label:"Desktop",value:"byDesktop"},{label:"Mobile",value:"byMobile"},{label:"Tablet",value:"byTablet"}],wt=[{label:"Newest to oldest",value:"byDateDescending"},{label:"Oldest to newest",value:"byDateAscending"},{label:"Longest to shortest",value:"byDurationDescending"},{label:"Shortest to longest",value:"byDurationAscending"},{label:"Most engaged",value:"byEngageDescending"},{label:"Least engaged",value:"byEngageAscending"}],yt=({data:t})=>t&&"CHATBOT-CONV"===t.messageType,xt=(t,e)=>{if(!yt(t))return null;switch(Mt.set(!1),t.data.type){case lt:return At.set(!1),e.concat(t.data.list);case at:return At.set(!1),t.data.list.slice();case it:return At.set(!0),t.data.list.slice();default:return null}},kt=t=>yt(t)&&t.data.type===rt?{avatar:t.data.avatar,list:t.data.list,botId:t.data.botId}:null,_t=(t,e,n)=>s=>{const r=e(s,function(t){let e;return i(t,t=>e=t)(),e}(n));r&&t(r)},Et=nt({avatar:"",list:[]},t=>window.addEventListener("message",_t(t,kt,Et))),Tt=nt([],t=>window.addEventListener("message",_t(t,xt,Tt))),Mt=st(!1),At=st(!1);function Dt(e){let n;return{c(){n=p("div"),$(n,"class","search-icon svelte-7k8t19")},m(t,e){u(t,n,e),n.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjm3asvgcontent" data-bbox="-3 -3 22 22" viewBox="-3 -3 22 22" height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M17 10.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0zm-14 0a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zm13.354 5.146l4 4-.708.708-4-4 .708-.708z" id="b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></path>\n        </defs>\n        <g transform="translate(-3 -3)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="362ffaf8-c1ce-4449-b616-95f0b51e28a7">\n                <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></use>\n            </mask>\n            <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#362ffaf8-c1ce-4449-b616-95f0b51e28a7)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p:t,d(t){t&&f(n)}}}function St(e){let n,s,r,l,a,i=e[1]&&Dt();return{c(){n=p("div"),i&&i.c(),s=v(),r=p("input"),$(r,"type","text"),$(r,"class","input-element svelte-7k8t19"),r.disabled=e[3],$(r,"placeholder",e[0]),y(r,"search",e[1]),y(r,"stretch",e[2]),$(n,"class","input svelte-7k8t19"),y(n,"stretch",e[2])},m(t,c){u(t,n,c),i&&i.m(n,null),o(n,s),o(n,r),l||(a=g(r,"input",e[4]),l=!0)},p(t,[e]){t[1]?i?i.p(t,e):(i=Dt(),i.c(),i.m(n,s)):i&&(i.d(1),i=null),8&e&&(r.disabled=t[3]),1&e&&$(r,"placeholder",t[0]),2&e&&y(r,"search",t[1]),4&e&&y(r,"stretch",t[2]),4&e&&y(n,"stretch",t[2])},i:t,o:t,d(t){t&&f(n),i&&i.d(),l=!1,a()}}}function Lt(t,e,n){let{placeholder:s}=e,{search:r=!1}=e,{stretch:l=!1}=e,{disabled:a=!1}=e;return t.$set=t=>{"placeholder"in t&&n(0,s=t.placeholder),"search"in t&&n(1,r=t.search),"stretch"in t&&n(2,l=t.stretch),"disabled"in t&&n(3,a=t.disabled)},[s,r,l,a,function(e){M(t,e)}]}class Ot extends tt{constructor(t){super(),X(this,t,Lt,St,a,{placeholder:0,search:1,stretch:2,disabled:3})}}function jt(e){let n,s,r,l;return{c(){n=p("button"),s=m(e[0]),$(n,"class","btn svelte-16ia2z6"),n.disabled=e[2],y(n,"primary",e[1])},m(t,a){u(t,n,a),o(n,s),r||(l=g(n,"click",e[3]),r=!0)},p(t,[e]){1&e&&b(s,t[0]),4&e&&(n.disabled=t[2]),2&e&&y(n,"primary",t[1])},i:t,o:t,d(t){t&&f(n),r=!1,l()}}}function Ht(t,e,n){let{label:s}=e,{primary:r}=e,{disabled:l}=e;return t.$set=t=>{"label"in t&&n(0,s=t.label),"primary"in t&&n(1,r=t.primary),"disabled"in t&&n(2,l=t.disabled)},[s,r,l,function(e){M(t,e)}]}class It extends tt{constructor(t){super(),X(this,t,Ht,jt,a,{label:0,primary:1,disabled:2})}}function Ct(t,e,n){const s=t.slice();return s[4]=e[n].label,s[0]=e[n].value,s}function Nt(t){let e,n,s,r=t[4]+"";return{c(){e=p("option"),n=m(r),e.__value=s=t[0],e.value=e.__value},m(t,s){u(t,e,s),o(e,n)},p(t,l){2&l&&r!==(r=t[4]+"")&&b(n,r),2&l&&s!==(s=t[0])&&(e.__value=s,e.value=e.__value)},d(t){t&&f(e)}}}function Rt(e){let n,s,r,l,a,i,c=e[1],m=[];for(let t=0;t<c.length;t+=1)m[t]=Nt(Ct(e,c,t));return{c(){n=p("div"),s=p("select");for(let t=0;t<m.length;t+=1)m[t].c();r=v(),l=p("div"),$(s,"class","input-element svelte-wejwig"),$(s,"name",e[2]),void 0===e[0]&&H(()=>e[3].call(s)),$(l,"class","arrow svelte-wejwig"),$(n,"class","dropdown svelte-wejwig")},m(t,c){u(t,n,c),o(n,s);for(let t=0;t<m.length;t+=1)m[t].m(s,null);w(s,e[0]),o(n,r),o(n,l),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" id="comp-kbgc4ykjicon" class="arrow-down-icon">\n  <defs></defs>\n  <title>arrow&amp;amp;v</title>\n  <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z" class="style-kbgc4ym6_cls-1"></path>\n</svg>',a||(i=g(s,"change",e[3]),a=!0)},p(t,[e]){if(2&e){let n;for(c=t[1],n=0;n<c.length;n+=1){const r=Ct(t,c,n);m[n]?m[n].p(r,e):(m[n]=Nt(r),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=c.length}4&e&&$(s,"name",t[2]),3&e&&w(s,t[0])},i:t,o:t,d(t){t&&f(n),d(m,t),a=!1,i()}}}function zt(t,e,n){let{options:s}=e,{name:r}=e,{value:l}=e;return t.$set=t=>{"options"in t&&n(1,s=t.options),"name"in t&&n(2,r=t.name),"value"in t&&n(0,l=t.value)},[l,s,r,function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,l),n(1,s)}]}class qt extends tt{constructor(t){super(),X(this,t,zt,Rt,a,{options:1,name:2,value:0})}}var Bt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ft="object"==typeof Gt&&Gt&&Gt.Object===Object&&Gt,Vt="object"==typeof self&&self&&self.Object===Object&&self,Ut=Ft||Vt||Function("return this")(),Pt=function(){return Ut.Date.now()},Jt=Ut.Symbol,Wt=Object.prototype,Yt=Wt.hasOwnProperty,Kt=Wt.toString,Zt=Jt?Jt.toStringTag:void 0;var Qt=function(t){var e=Yt.call(t,Zt),n=t[Zt];try{t[Zt]=void 0;var s=!0}catch(t){}var r=Kt.call(t);return s&&(e?t[Zt]=n:delete t[Zt]),r},Xt=Object.prototype.toString;var te=function(t){return Xt.call(t)},ee=Jt?Jt.toStringTag:void 0;var ne=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":ee&&ee in Object(t)?Qt(t):te(t)};var se=function(t){return null!=t&&"object"==typeof t};var re=function(t){return"symbol"==typeof t||se(t)&&"[object Symbol]"==ne(t)},le=/^\s+|\s+$/g,ae=/^[-+]0x[0-9a-f]+$/i,ie=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,oe=parseInt;var ue=function(t){if("number"==typeof t)return t;if(re(t))return NaN;if(Bt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Bt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(le,"");var n=ie.test(t);return n||ce.test(t)?oe(t.slice(2),n?2:8):ae.test(t)?NaN:+t},fe=Math.max,de=Math.min;var pe=function(t,e,n){var s,r,l,a,i,c,o=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=s,l=r;return s=r=void 0,o=e,a=t.apply(l,n)}function m(t){return o=t,i=setTimeout(g,e),u?p(t):a}function v(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-o>=l}function g(){var t=Pt();if(v(t))return h(t);i=setTimeout(g,function(t){var n=e-(t-c);return f?de(n,l-(t-o)):n}(t))}function h(t){return i=void 0,d&&s?p(t):(s=r=void 0,a)}function $(){var t=Pt(),n=v(t);if(s=arguments,r=this,c=t,n){if(void 0===i)return m(c);if(f)return clearTimeout(i),i=setTimeout(g,e),p(c)}return void 0===i&&(i=setTimeout(g,e)),a}return e=ue(e)||0,Bt(n)&&(u=!!n.leading,l=(f="maxWait"in n)?fe(ue(n.maxWait)||0,e):l,d="trailing"in n?!!n.trailing:d),$.cancel=function(){void 0!==i&&clearTimeout(i),o=0,s=c=r=i=void 0},$.flush=function(){return void 0===i?a:h(Pt())},$};function me(t){let e,n,s,r,l,a,i,c,d,m,g,h,b,w,y,x,k,_;function E(e){t[7].call(null,e)}n=new Ot({props:{stretch:!0,search:!0,disabled:t[3],placeholder:"Search Conversations"}}),n.$on("input",t[4]);let T={stretch:!0,name:"filterBy",options:bt};function M(e){t[8].call(null,e)}void 0!==t[0]&&(T.value=t[0]),l=new qt({props:T}),D.push(()=>W(l,"value",E));let A={stretch:!0,name:"sortBy",options:wt};function S(e){t[9].call(null,e)}void 0!==t[1]&&(A.value=t[1]),c=new qt({props:A}),D.push(()=>W(c,"value",M));let L={stretch:!0,name:"language",options:$t};return void 0!==t[2]&&(L.value=t[2]),g=new qt({props:L}),D.push(()=>W(g,"value",S)),y=new It({props:{primary:!0,label:"Filter",disabled:t[3]}}),y.$on("click",t[5]),k=new It({props:{primary:!0,label:"Refresh",disabled:t[3]}}),k.$on("click",t[6]),{c(){e=p("div"),Y(n.$$.fragment),s=v(),r=p("div"),Y(l.$$.fragment),i=v(),Y(c.$$.fragment),m=v(),Y(g.$$.fragment),b=v(),w=p("div"),Y(y.$$.fragment),x=v(),Y(k.$$.fragment),$(r,"class","filters svelte-51eeo0"),$(w,"class","btns svelte-51eeo0"),$(e,"class","toolbar svelte-51eeo0")},m(t,a){u(t,e,a),K(n,e,null),o(e,s),o(e,r),K(l,r,null),o(r,i),K(c,r,null),o(r,m),K(g,r,null),o(e,b),o(e,w),K(y,w,null),o(w,x),K(k,w,null),_=!0},p(t,[e]){const s={};8&e&&(s.disabled=t[3]),n.$set(s);const r={};!a&&1&e&&(a=!0,r.value=t[0],I(()=>a=!1)),l.$set(r);const i={};!d&&2&e&&(d=!0,i.value=t[1],I(()=>d=!1)),c.$set(i);const o={};!h&&4&e&&(h=!0,o.value=t[2],I(()=>h=!1)),g.$set(o);const u={};8&e&&(u.disabled=t[3]),y.$set(u);const f={};8&e&&(f.disabled=t[3]),k.$set(f)},i(t){_||(V(n.$$.fragment,t),V(l.$$.fragment,t),V(c.$$.fragment,t),V(g.$$.fragment,t),V(y.$$.fragment,t),V(k.$$.fragment,t),_=!0)},o(t){U(n.$$.fragment,t),U(l.$$.fragment,t),U(c.$$.fragment,t),U(g.$$.fragment,t),U(y.$$.fragment,t),U(k.$$.fragment,t),_=!1},d(t){t&&f(e),Z(n),Z(l),Z(c),Z(g),Z(y),Z(k)}}}function ve(t,e,n){let s;c(t,Mt,t=>n(3,s=t));const{dispatchEvent:r}=T("event-emitter");let l,a,i;const o=pe(t=>{const e=t.target.value.trim();e&&""!==e&&r(pt,{value:e,responseType:it})},500);return[l,a,i,s,o,t=>{Mt.set(!0),r(ot,{sort:a,filter:l,language:i,responseType:at})},()=>{r(dt,{responseType:at})},function(t){l=t,n(0,l)},function(t){a=t,n(1,a)},function(t){i=t,n(2,i)}]}class ge extends tt{constructor(t){super(),X(this,t,ve,me,a,{})}}const he=t=>t===vt,$e=t=>t===mt,be=(t,e,n)=>t===e._id||!t&&0===n,we=t=>{const e=new Date(t);return`${e.getHours()>9?e.getHours():"0"+e.getHours()}:${e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes()} ${(t=>`${ht[t.getMonth()]} ${t.getDate()}`)(e)}`},ye=t=>{return`${t.countMessages} messages (${t.duration?(t=>{let e=Math.floor(t/6e4%60),n=Math.floor(t/36e5%24);return n=n<10?"0"+n:n,e=e<10?"0"+e:e,n+":"+e})(t.duration):(e=t._createdDate,n=t._updatedDate,new Date(n-e).toISOString().slice(14,-5))} min)`;var e,n};function xe(e){let n,s;return{c(){n=p("img"),$(n,"class","avatar user-avatar svelte-1spx89t"),n.src!==(s=e[0]||gt)&&$(n,"src",s),$(n,"alt","User avatar")},m(t,e){u(t,n,e)},p(t,[e]){1&e&&n.src!==(s=t[0]||gt)&&$(n,"src",s)},i:t,o:t,d(t){t&&f(n)}}}function ke(t,e,n){let{userAvatar:s}=e;return t.$set=t=>{"userAvatar"in t&&n(0,s=t.userAvatar)},[s]}class _e extends tt{constructor(t){super(),X(this,t,ke,xe,a,{userAvatar:0})}}function Ee(e){let n,s,r,l,a,i,c,d,g,h,w,y,x,k,_=e[0].userName+"",E=we(e[0]._createdDate)+"",T=e[0].finalMessage+"",M=ye(e[0])+"";return{c(){n=p("div"),s=p("div"),r=p("span"),l=m(_),a=v(),i=p("span"),c=m(E),d=v(),g=p("div"),h=p("p"),w=m(T),y=v(),x=p("p"),k=m(M),$(r,"class","username svelte-6cmoyv"),$(i,"class","date svelte-6cmoyv"),$(s,"class","main-info svelte-6cmoyv"),$(h,"class","final-message svelte-6cmoyv"),$(x,"class","messages-info svelte-6cmoyv"),$(g,"class","additiona-info svelte-6cmoyv"),$(n,"class","info svelte-6cmoyv")},m(t,e){u(t,n,e),o(n,s),o(s,r),o(r,l),o(s,a),o(s,i),o(i,c),o(n,d),o(n,g),o(g,h),o(h,w),o(g,y),o(g,x),o(x,k)},p(t,[e]){1&e&&_!==(_=t[0].userName+"")&&b(l,_),1&e&&E!==(E=we(t[0]._createdDate)+"")&&b(c,E),1&e&&T!==(T=t[0].finalMessage+"")&&b(w,T),1&e&&M!==(M=ye(t[0])+"")&&b(k,M)},i:t,o:t,d(t){t&&f(n)}}}function Te(t,e,n){let{conv:s={}}=e;return t.$set=t=>{"conv"in t&&n(0,s=t.conv)},[s]}class Me extends tt{constructor(t){super(),X(this,t,Te,Ee,a,{conv:0})}}function Ae(t){let e;return{c(){e=p("a"),$(e,"class","icon svelte-lmq8qg"),$(e,"href",t[0]),$(e,"target","_blank")},m(t,n){u(t,e,n),e.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmg0__1pSCZlC4MsmbG0UgsKrGsvgcontent" data-bbox="-2 -5 22 22" viewBox="-2 -5 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M18.918 11.298L19 11.5l-.082.201C18.813 11.959 16.293 18 10.5 18c-5.793 0-8.313-6.041-8.418-6.299L2 11.5l.082-.202C2.187 11.041 4.707 5 10.5 5c5.793 0 8.313 6.041 8.418 6.298zM10.5 16.964c4.58 0 6.935-4.452 7.411-5.464-.478-1.01-2.843-5.464-7.411-5.464-4.58 0-6.935 4.452-7.411 5.463.478 1.011 2.843 5.465 7.411 5.465zm0-2.214a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm0-1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" id="826ee0e3-216f-47cb-a897-6d615df226c0"></path>\n        </defs>\n        <g transform="translate(-2 -5)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="857a01c0-fe82-4ddf-9398-1034b98f1f38">\n                <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0"></use>\n            </mask>\n            <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#857a01c0-fe82-4ddf-9398-1034b98f1f38)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p(t,n){1&n&&$(e,"href",t[0])},d(t){t&&f(e)}}}function De(e){let n,s,l,a,i,c,d,m,b,w=e[0]&&Ae(e);return{c(){n=p("div"),s=p("div"),l=v(),w&&w.c(),a=v(),i=p("div"),c=p("img"),$(s,"class","deep-link"),$(n,"class","additional-icons svelte-lmq8qg"),c.src!==(d=e[1])&&$(c,"src",d),$(c,"alt","Star"),$(c,"height","28px"),$(i,"class","favorite svelte-lmq8qg")},m(t,r){var f;u(t,n,r),o(n,s),s.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmac__7PlBI8F1H1njrtv8E2GBsvgcontent" data-bbox="-3 -4 22 22" viewBox="-3 -4 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M7.703 17.368c-.821.822-2.252.821-3.073 0a2.176 2.176 0 0 1 0-3.073l3.687-3.687a2.175 2.175 0 0 1 3.074 0l.703-.704a3.173 3.173 0 0 0-4.481 0l-3.686 3.687a3.171 3.171 0 0 0 0 4.481 3.147 3.147 0 0 0 2.24.928c.846 0 1.642-.33 2.24-.928l2.223-2.223-.704-.703-2.223 2.222zM18 7.166c0-.846-.329-1.642-.928-2.24a3.173 3.173 0 0 0-4.481 0L10.369 7.15l.703.704 2.223-2.223a2.176 2.176 0 0 1 3.074 0c.41.411.636.956.636 1.536a2.16 2.16 0 0 1-.636 1.537l-3.687 3.688a2.177 2.177 0 0 1-3.074 0l-.704.703a3.163 3.163 0 0 0 2.241.927 3.16 3.16 0 0 0 2.24-.927l3.687-3.687A3.146 3.146 0 0 0 18 7.167z" id="dd461069-c027-433f-aec5-d45da1d7d15e"></path>\n        </defs>\n        <g transform="translate(-3 -4)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="47f47b80-b166-41ed-81cd-5dc504d0f44f">\n                <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e"></use>\n            </mask>\n            <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#47f47b80-b166-41ed-81cd-5dc504d0f44f)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>',o(n,l),w&&w.m(n,null),u(t,a,r),u(t,i,r),o(i,c),m||(b=[g(s,"click",h(e[2])),g(c,"click",(f=h(e[5]),function(t){t.target===this&&f.call(this,t)}))],m=!0)},p(t,[e]){t[0]?w?w.p(t,e):(w=Ae(t),w.c(),w.m(n,null)):w&&(w.d(1),w=null),2&e&&c.src!==(d=t[1])&&$(c,"src",d)},i:t,o:t,d(t){t&&f(n),w&&w.d(),t&&f(a),t&&f(i),m=!1,r(b)}}}function Se(t,e,n){const{dispatchEvent:s}=T("event-emitter");let{id:r}=e,{favorite:l=!1}=e,{ticket:a=!1}=e;let i;return t.$set=t=>{"id"in t&&n(3,r=t.id),"favorite"in t&&n(4,l=t.favorite),"ticket"in t&&n(0,a=t.ticket)},t.$$.update=()=>{16&t.$$.dirty&&n(1,i=l?"https://static.wixstatic.com/shapes/260237_65b99ecb373f4f038f72dc7ce6327e2c.svg":"https://static.wixstatic.com/shapes/260237_6212104474874a39b3743b95fec440ff.svg")},[a,i,()=>navigator.clipboard.writeText(`${window.location.href}?conversationId=${r}`),r,l,function(e){M(t,e)}]}class Le extends tt{constructor(t){super(),X(this,t,Se,De,a,{id:3,favorite:4,ticket:0})}}function Oe(t){let e,n,s,r,l,a,i,c,d;return n=new _e({props:{userAvatar:t[0].userAvatar}}),r=new Me({props:{conv:t[0]}}),a=new Le({props:{id:t[0]._id,ticket:t[0].withTicket,favorite:t[0].favorite}}),a.$on("click",t[3]),{c(){e=p("div"),Y(n.$$.fragment),s=v(),Y(r.$$.fragment),l=v(),Y(a.$$.fragment),$(e,"class","item svelte-1ektzng"),y(e,"active",t[1]),y(e,"not-readed",!t[0].isReaded)},m(f,p){u(f,e,p),K(n,e,null),o(e,s),K(r,e,null),o(e,l),K(a,e,null),i=!0,c||(d=g(e,"click",t[2]),c=!0)},p(t,[s]){const l={};1&s&&(l.userAvatar=t[0].userAvatar),n.$set(l);const i={};1&s&&(i.conv=t[0]),r.$set(i);const c={};1&s&&(c.id=t[0]._id),1&s&&(c.ticket=t[0].withTicket),1&s&&(c.favorite=t[0].favorite),a.$set(c),2&s&&y(e,"active",t[1]),1&s&&y(e,"not-readed",!t[0].isReaded)},i(t){i||(V(n.$$.fragment,t),V(r.$$.fragment,t),V(a.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),U(r.$$.fragment,t),U(a.$$.fragment,t),i=!1},d(t){t&&f(e),Z(n),Z(r),Z(a),c=!1,d()}}}function je(t,e,n){const{dispatchEvent:s}=T("event-emitter"),r=E();let{conv:l={}}=e,{active:a=!1}=e;return t.$set=t=>{"conv"in t&&n(0,l=t.conv),"active"in t&&n(1,a=t.active)},[l,a,()=>{l.isReaded||s(ft,{_id:l._id}),n(0,l.isReaded=!0,l),r("click",{_id:l._id})},()=>{n(0,l.favorite=!l.favorite,l),s(ut,{_id:l._id,value:l.favorite})}]}class He extends tt{constructor(t){super(),X(this,t,je,Oe,a,{conv:0,active:1})}}function Ie(e){let n,s;return{c(){n=p("img"),n.src!==(s="https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif")&&$(n,"src","https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif"),$(n,"alt","Loader"),$(n,"class","loader svelte-em6w2v"),$(n,"width",e[1]),y(n,"centred",e[0])},m(t,e){u(t,n,e)},p(t,[e]){2&e&&$(n,"width",t[1]),1&e&&y(n,"centred",t[0])},i:t,o:t,d(t){t&&f(n)}}}function Ce(t,e,n){let{centred:s}=e,{width:r}=e;return t.$set=t=>{"centred"in t&&n(0,s=t.centred),"width"in t&&n(1,r=t.width)},[s,r]}class Ne extends tt{constructor(t){super(),X(this,t,Ce,Ie,a,{centred:0,width:1})}}function Re(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function ze(t){let e,n,s=t[4],r=[];for(let e=0;e<s.length;e+=1)r[e]=qe(Re(t,s,e));const l=t=>U(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=m("")},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);u(t,e,s),n=!0},p(t,n){if(49&n){let a;for(s=t[4],a=0;a<s.length;a+=1){const l=Re(t,s,a);r[a]?(r[a].p(l,n),V(r[a],1)):(r[a]=qe(l),r[a].c(),V(r[a],1),r[a].m(e.parentNode,e))}for(G(),a=s.length;a<r.length;a+=1)l(a);F()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)V(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)U(r[t]);n=!1},d(t){d(r,t),t&&f(e)}}}function qe(t){let e,n;return e=new He({props:{conv:t[10],active:be(t[0],t[10],t[12])}}),e.$on("click",t[5]),{c(){Y(e.$$.fragment)},m(t,s){K(e,t,s),n=!0},p(t,n){const s={};16&n&&(s.conv=t[10]),17&n&&(s.active=be(t[0],t[10],t[12])),e.$set(s)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Be(t){let e,n;return e=new Ne({props:{centred:!0,width:"56px"}}),{c(){Y(e.$$.fragment)},m(t,s){K(e,t,s),n=!0},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Ge(t){let e,n,s,r,l,a=(!t[3]||t[2])&&ze(t),i=(t[2]||t[3])&&Be();return{c(){e=p("div"),a&&a.c(),n=v(),i&&i.c(),$(e,"class","conv-list svelte-8i2jf1")},m(c,f){u(c,e,f),a&&a.m(e,null),o(e,n),i&&i.m(e,null),t[7](e),s=!0,r||(l=g(e,"scroll",t[6]),r=!0)},p(t,[s]){!t[3]||t[2]?a?(a.p(t,s),12&s&&V(a,1)):(a=ze(t),a.c(),V(a,1),a.m(e,n)):a&&(G(),U(a,1,1,()=>{a=null}),F()),t[2]||t[3]?i?12&s&&V(i,1):(i=Be(),i.c(),V(i,1),i.m(e,null)):i&&(G(),U(i,1,1,()=>{i=null}),F())},i(t){s||(V(a),V(i),s=!0)},o(t){U(a),U(i),s=!1},d(n){n&&f(e),a&&a.d(),i&&i.d(),t[7](null),r=!1,l()}}}function Fe(t,e,n){let s,r,l;c(t,Mt,t=>n(3,s=t)),c(t,At,t=>n(8,r=t)),c(t,Tt,t=>n(4,l=t));const{dispatchEvent:a}=T("event-emitter");let i,o,u=!0;Tt.subscribe(()=>n(2,u=!1));return[i,o,u,s,l,({detail:t})=>{n(0,i=t._id),a(ct,{_id:t._id,responseType:rt})},()=>{var t;s||(t=o).scrollTop!==t.scrollHeight-t.offsetHeight||r||(n(2,u=!0),Mt.set(!0),a(ot,{responseType:lt}))},function(t){D[t?"unshift":"push"](()=>{o=t,n(1,o)})}]}class Ve extends tt{constructor(t){super(),X(this,t,Fe,Ge,a,{})}}function Ue(e){let n,s,r,l;return{c(){n=p("div"),s=p("p"),$(s,"class","svelte-57i411"),$(n,"class","msg bubble svelte-57i411")},m(t,a){u(t,n,a),o(n,s),s.innerHTML=e[0],r||(l=g(n,"click",e[1]),r=!0)},p(t,[e]){1&e&&(s.innerHTML=t[0])},i:t,o:t,d(t){t&&f(n),r=!1,l()}}}function Pe(t,e,n){let{message:s=""}=e,{nodeID:r=""}=e,{botId:l=""}=e;const a=`https://www.wix.com/support/conversations?botId=${l}&nodeId=${r}`;return t.$set=t=>{"message"in t&&n(0,s=t.message),"nodeID"in t&&n(2,r=t.nodeID),"botId"in t&&n(3,l=t.botId)},[s,()=>window.open(a,"_blank"),r,l]}class Je extends tt{constructor(t){super(),X(this,t,Pe,Ue,a,{message:0,nodeID:2,botId:3})}}function We(e){let n,s,r;return{c(){n=p("div"),s=p("div"),r=p("p"),$(r,"class","svelte-144vyxi"),$(s,"class","msg bubble svelte-144vyxi"),$(n,"class","right svelte-144vyxi")},m(t,l){u(t,n,l),o(n,s),o(s,r),r.innerHTML=e[0]},p(t,[e]){1&e&&(r.innerHTML=t[0])},i:t,o:t,d(t){t&&f(n)}}}function Ye(t,e,n){let{message:s=""}=e;return t.$set=t=>{"message"in t&&n(0,s=t.message)},[s]}class Ke extends tt{constructor(t){super(),X(this,t,Ye,We,a,{message:0})}}function Ze(t){let e,n,s,r,l;return{c(){e=p("a"),n=m(t[1]),s=v(),r=p("img"),$(r,"class","link svelte-39yldq"),r.src!==(l="https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg")&&$(r,"src","https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg"),$(r,"alt","Link"),$(e,"href",t[2]),$(e,"target","_blank"),$(e,"class","svelte-39yldq")},m(t,l){u(t,e,l),o(e,n),o(e,s),o(e,r)},p(t,s){2&s&&b(n,t[1]),4&s&&$(e,"href",t[2])},d(t){t&&f(e)}}}function Qe(e){let n,s,r,l,a,i,c,d,g,h=e[2]&&Ze(e);return{c(){n=p("div"),s=p("div"),r=v(),l=p("div"),a=p("p"),i=m(e[0]),c=v(),h&&h.c(),d=v(),g=p("div"),$(s,"class","line svelte-39yldq"),$(a,"class","svelte-39yldq"),$(l,"class","action-content svelte-39yldq"),$(g,"class","line svelte-39yldq"),$(n,"class","action svelte-39yldq")},m(t,e){u(t,n,e),o(n,s),o(n,r),o(n,l),o(l,a),o(a,i),o(l,c),h&&h.m(l,null),o(n,d),o(n,g)},p(t,[e]){1&e&&b(i,t[0]),t[2]?h?h.p(t,e):(h=Ze(t),h.c(),h.m(l,null)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&f(n),h&&h.d()}}}function Xe(t,e,n){let{message:s=""}=e,{linkTitle:r=""}=e,{linkHref:l=""}=e;return t.$set=t=>{"message"in t&&n(0,s=t.message),"linkTitle"in t&&n(1,r=t.linkTitle),"linkHref"in t&&n(2,l=t.linkHref)},[s,r,l]}class tn extends tt{constructor(t){super(),X(this,t,Xe,Qe,a,{message:0,linkTitle:1,linkHref:2})}}function en(t){let n,s;const r=[t[0]];let l={};for(let t=0;t<r.length;t+=1)l=e(l,r[t]);return n=new tn({props:l}),{c(){Y(n.$$.fragment)},m(t,e){K(n,t,e),s=!0},p(t,e){const s=1&e?P(r,[J(t[0])]):{};n.$set(s)},i(t){s||(V(n.$$.fragment,t),s=!0)},o(t){U(n.$$.fragment,t),s=!1},d(t){Z(n,t)}}}function nn(t){let n,s;const r=[t[0]];let l={};for(let t=0;t<r.length;t+=1)l=e(l,r[t]);return n=new Ke({props:l}),{c(){Y(n.$$.fragment)},m(t,e){K(n,t,e),s=!0},p(t,e){const s=1&e?P(r,[J(t[0])]):{};n.$set(s)},i(t){s||(V(n.$$.fragment,t),s=!0)},o(t){U(n.$$.fragment,t),s=!1},d(t){Z(n,t)}}}function sn(t){let n,s;const r=[t[0],{botId:t[1]}];let l={};for(let t=0;t<r.length;t+=1)l=e(l,r[t]);return n=new Je({props:l}),{c(){Y(n.$$.fragment)},m(t,e){K(n,t,e),s=!0},p(t,e){const s=3&e?P(r,[1&e&&J(t[0]),2&e&&{botId:t[1]}]):{};n.$set(s)},i(t){s||(V(n.$$.fragment,t),s=!0)},o(t){U(n.$$.fragment,t),s=!1},d(t){Z(n,t)}}}function rn(t){let e,n,s,r,l,a;const i=[sn,nn,en],c=[];function o(t,e){return 1&e&&(n=!!$e(t[0].type)),n?0:(1&e&&(s=!!he(t[0].type)),s?1:2)}return r=o(t,-1),l=c[r]=i[r](t),{c(){e=p("div"),l.c(),$(e,"class","item svelte-2291eo")},m(t,n){u(t,e,n),c[r].m(e,null),a=!0},p(t,[n]){let s=r;r=o(t,n),r===s?c[r].p(t,n):(G(),U(c[s],1,1,()=>{c[s]=null}),F(),l=c[r],l||(l=c[r]=i[r](t),l.c()),V(l,1),l.m(e,null))},i(t){a||(V(l),a=!0)},o(t){U(l),a=!1},d(t){t&&f(e),c[r].d()}}}function ln(t,e,n){let{msg:s={}}=e,{botId:r=""}=e;return t.$set=t=>{"msg"in t&&n(0,s=t.msg),"botId"in t&&n(1,r=t.botId)},[s,r]}class an extends tt{constructor(t){super(),X(this,t,ln,rn,a,{msg:0,botId:1})}}function cn(e){let n,s;return{c(){n=p("img"),$(n,"class","avatar bot-avatar svelte-1a1iy9n"),n.src!==(s="https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png")&&$(n,"src","https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png"),$(n,"alt","Bot avatar")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class on extends tt{constructor(t){super(),X(this,t,null,cn,a,{})}}function un(e){let n,s;return{c(){n=p("img"),$(n,"class","avatar user-avatar svelte-1gifi9k"),n.src!==(s=e[0]||gt)&&$(n,"src",s),$(n,"alt","User avatar")},m(t,e){u(t,n,e)},p(t,[e]){1&e&&n.src!==(s=t[0]||gt)&&$(n,"src",s)},i:t,o:t,d(t){t&&f(n)}}}function fn(t,e,n){let{src:s=""}=e;return t.$set=t=>{"src"in t&&n(0,s=t.src)},[s]}class dn extends tt{constructor(t){super(),X(this,t,fn,un,a,{src:0})}}function pn(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function mn(t){let e,n;return e=new on({}),{c(){Y(e.$$.fragment)},m(t,s){K(e,t,s),n=!0},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function vn(t){let e,n;return e=new dn({props:{src:t[0].avatar}}),{c(){Y(e.$$.fragment)},m(t,s){K(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.src=t[0].avatar),e.$set(s)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function gn(t){let e,n,s,r,l,a,i=t[1](t[0].list,t[4]),c=he(t[2].type),d=i&&mn(),m=c&&vn(t);return r=new an({props:{msg:t[2]}}),{c(){e=p("div"),d&&d.c(),n=v(),m&&m.c(),s=v(),Y(r.$$.fragment),l=v(),$(e,"class","box svelte-1mthr6r")},m(t,i){u(t,e,i),d&&d.m(e,null),o(e,n),m&&m.m(e,null),o(e,s),K(r,e,null),o(e,l),a=!0},p(t,l){1&l&&(i=t[1](t[0].list,t[4])),i?d?1&l&&V(d,1):(d=mn(),d.c(),V(d,1),d.m(e,n)):d&&(G(),U(d,1,1,()=>{d=null}),F()),1&l&&(c=he(t[2].type)),c?m?(m.p(t,l),1&l&&V(m,1)):(m=vn(t),m.c(),V(m,1),m.m(e,s)):m&&(G(),U(m,1,1,()=>{m=null}),F());const a={};1&l&&(a.msg=t[2]),r.$set(a)},i(t){a||(V(d),V(m),V(r.$$.fragment,t),a=!0)},o(t){U(d),U(m),U(r.$$.fragment,t),a=!1},d(t){t&&f(e),d&&d.d(),m&&m.d(),Z(r)}}}function hn(t){let e,n,s=t[0].list,r=[];for(let e=0;e<s.length;e+=1)r[e]=gn(pn(t,s,e));const l=t=>U(r[t],1,1,()=>{r[t]=null});return{c(){e=p("div");for(let t=0;t<r.length;t+=1)r[t].c();$(e,"class","msg-list svelte-1mthr6r")},m(t,s){u(t,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(3&n){let a;for(s=t[0].list,a=0;a<s.length;a+=1){const l=pn(t,s,a);r[a]?(r[a].p(l,n),V(r[a],1)):(r[a]=gn(l),r[a].c(),V(r[a],1),r[a].m(e,null))}for(G(),a=s.length;a<r.length;a+=1)l(a);F()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)V(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)U(r[t]);n=!1},d(t){t&&f(e),d(r,t)}}}function $n(t,e,n){let s;c(t,Et,t=>n(0,s=t));return[s,(t,e)=>$e(t[e].type)&&(e+1<t.length&&he(t[e+1].type)||1===t.length||e===t.length-1)]}class bn extends tt{constructor(t){super(),X(this,t,$n,hn,a,{})}}const wn=t=>{var e,n;e="event-emitter",n={dispatchEvent:(e,n)=>{t(new CustomEvent(e,{detail:n}))}},_().$$.context.set(e,n)};function yn(e){let n,s,r,l,a,i,c,d,m;return l=new ge({}),i=new Ve({}),d=new bn({}),{c(){n=p("link"),s=v(),r=p("main"),Y(l.$$.fragment),a=v(),Y(i.$$.fragment),c=v(),Y(d.$$.fragment),$(n,"rel","stylesheet"),$(n,"href","https://sergkornienko.github.io/svelte-web-component/bundle.css"),$(r,"class","svelte-su38wg")},m(t,e){o(document.head,n),u(t,s,e),u(t,r,e),K(l,r,null),o(r,a),K(i,r,null),o(r,c),K(d,r,null),m=!0},p:t,i(t){m||(V(l.$$.fragment,t),V(i.$$.fragment,t),V(d.$$.fragment,t),m=!0)},o(t){U(l.$$.fragment,t),U(i.$$.fragment,t),U(d.$$.fragment,t),m=!1},d(t){f(n),t&&f(s),t&&f(r),Z(l),Z(i),Z(d)}}}function xn(t,e,n){let{dispatchEvent:s}=e;return wn(s),t.$set=t=>{"dispatchEvent"in t&&n(0,s=t.dispatchEvent)},[s]}class kn extends tt{constructor(t){super(),X(this,t,xn,yn,a,{dispatchEvent:0})}}class _n extends HTMLElement{connectedCallback(){const t=this.dispatchEvent.bind(this);new kn({target:this,props:{dispatchEvent:t}})}}window.customElements.define("chatbot-conv",_n)}();
//# sourceMappingURL=bundle.js.map
