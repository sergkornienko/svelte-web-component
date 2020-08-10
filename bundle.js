!function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function r(){return Object.create(null)}function a(t){t.forEach(s)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function c(t,e,n){t.$$.on_destroy.push(i(e,n))}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),0!==p.size&&f(m)}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function y(){return w(" ")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function _(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}}function M(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const S=new Set;let D,O=0;function L(t,e,n,s,r,a,l,o=0){const i=16.666/s;let c="{\n";for(let t=0;t<=1;t+=i){const s=e+(n-e)*a(t);c+=100*t+`%{${l(s,1-s)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${o}`,f=t.ownerDocument;S.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(b("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${d} ${s}ms linear ${r}ms 1 both`,O+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),O-=r,O||f(()=>{O||(S.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),S.clear())}))}function H(t){D=t}function I(){if(!D)throw new Error("Function called outside component initialization");return D}function C(t){return I().$$.context.get(t)}function R(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const N=[],z=[],B=[],F=[],q=Promise.resolve();let G=!1;function V(t){B.push(t)}function P(t){F.push(t)}let U=!1;const W=new Set;function J(){if(!U){U=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];H(e),Y(e.$$)}for(N.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];W.has(e)||(W.add(e),e())}B.length=0}while(N.length);for(;F.length;)F.pop()();G=!1,U=!1,W.clear()}}function Y(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}let K;function Z(t,e,n){t.dispatchEvent(A(`${e?"intro":"outro"}${n}`))}const Q=new Set;let X;function tt(){X={r:0,c:[],p:X}}function et(){X.r||a(X.c),X=X.p}function nt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function st(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),X.c.push(()=>{Q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const rt={duration:0};function at(n,s,r,o){let i=s(n,r),c=o?0:1,u=null,g=null,v=null;function h(){v&&j(n,v)}function $(t,e){const n=t.b-c;return e*=Math.abs(n),{a:c,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(s){const{delay:r=0,duration:l=300,easing:o=e,tick:b=t,css:w}=i||rt,y={start:d()+r,b:s};s||(y.group=X,X.r+=1),u?g=y:(w&&(h(),v=L(n,c,s,l,r,o,w)),s&&b(0,1),u=$(y,l),V(()=>Z(n,s,"start")),function(t){let e;0===p.size&&f(m),new Promise(n=>{p.add(e={c:t,f:n})})}(t=>{if(g&&t>g.start&&(u=$(g,l),g=null,Z(n,u.b,"start"),w&&(h(),v=L(n,c,u.b,u.duration,0,o,i.css))),u)if(t>=u.end)b(c=u.b,1-c),Z(n,u.b,"end"),g||(u.b?h():--u.group.r||a(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;c=u.a+u.d*o(e/u.duration),b(c,1-c)}return!(!u&&!g)}))}return{run(t){l(i)?(K||(K=Promise.resolve(),K.then(()=>{K=null})),K).then(()=>{i=i(),b(t)}):b(t)},end(){h(),u=g=null}}}function lt(t,e){const n={},s={},r={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=e[a];if(o){for(const t in l)t in o||(s[t]=1);for(const t in o)r[t]||(n[t]=o[t],r[t]=1);t[a]=o}else for(const t in l)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function it(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ct(t){t&&t.c()}function ut(t,e,n){const{fragment:r,on_mount:o,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),V(()=>{const e=o.map(s).filter(l);i?i.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(V)}function dt(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(N.push(t),G||(G=!0,q.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,s,l,o,i,c=[-1]){const u=D;H(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:o,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:c};let p=!1;if(f.ctx=s?s(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&o(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&ft(e,t)),n}):[],f.update(),p=!0,a(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),ut(e,n.target,n.anchor),J()}H(u)}class mt{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const gt=[];function vt(t,e){return{subscribe:ht(t,e).subscribe}}function ht(e,n=t){let s;const r=[];function a(t){if(o(e,t)&&(e=t,s)){const t=!gt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),gt.push(n,e)}if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(l,o=t){const i=[l,o];return r.push(i),1===r.length&&(s=n(a)||t),l(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const $t=":SHOW_MESSAGE",bt=":ADD_CONVERSATIONS",wt=":LOAD_CONVERSATIONS",yt=":LOAD_SEARCH_RESULT",xt=":GET_MESSAGE",_t=":GET_CONVERSATIONS",kt=":TOGGLE_FAVORITE",Et=":TOGGLE_READED",Tt=":REFRESH",Mt=":SEARCH",At="bot",St="user",Dt="https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png",Ot=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],Lt=[{value:"en",label:"English"},{value:"de",label:"German"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"pt",label:"Portuguese"},{value:"ru",label:"Russian"},{value:"ja",label:"Japanese"},{value:"ko",label:"Korean"},{value:"tr",label:"Turkish"}],jt=[{label:"All",value:"all"},{label:"With star",value:"byFavorite"},{label:"Unread",value:"byUnread"},{label:"Desktop",value:"byDesktop"},{label:"Mobile",value:"byMobile"},{label:"Tablet",value:"byTablet"}],Ht=[{label:"Newest to oldest",value:"byDateDescending"},{label:"Oldest to newest",value:"byDateAscending"},{label:"Longest to shortest",value:"byDurationDescending"},{label:"Shortest to longest",value:"byDurationAscending"},{label:"Most engaged",value:"byEngageDescending"},{label:"Least engaged",value:"byEngageAscending"}],It=({data:t})=>t&&"CHATBOT-CONV"===t.messageType,Ct=(t,e)=>{if(!It(t))return null;switch(Ft.set(!1),t.data.type){case bt:return qt.set(!1),e.concat(t.data.list);case wt:return qt.set(!1),t.data.list.slice();case yt:return qt.set(!0),t.data.list.slice();default:return null}},Rt=t=>It(t)&&t.data.type===$t?{avatar:t.data.avatar,list:t.data.list,botId:t.data.botId}:null,Nt=(t,e,n)=>s=>{const r=e(s,function(t){let e;return i(t,t=>e=t)(),e}(n));r&&t(r)},zt=vt({avatar:"",list:[]},t=>window.addEventListener("message",Nt(t,Rt,zt))),Bt=vt([],t=>window.addEventListener("message",Nt(t,Ct,Bt))),Ft=ht(!1),qt=ht(!1);function Gt(e){let n;return{c(){n=b("div"),k(n,"class","search-icon svelte-7k8t19")},m(t,e){v(t,n,e),n.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjm3asvgcontent" data-bbox="-3 -3 22 22" viewBox="-3 -3 22 22" height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M17 10.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0zm-14 0a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zm13.354 5.146l4 4-.708.708-4-4 .708-.708z" id="b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></path>\n        </defs>\n        <g transform="translate(-3 -3)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="362ffaf8-c1ce-4449-b616-95f0b51e28a7">\n                <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526"></use>\n            </mask>\n            <use xlink:href="#b6b0a938-0678-42d8-bfab-3fcd4fd9a526" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#362ffaf8-c1ce-4449-b616-95f0b51e28a7)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p:t,d(t){t&&h(n)}}}function Vt(e){let n,s,r,a,l,o=e[1]&&Gt();return{c(){n=b("div"),o&&o.c(),s=y(),r=b("input"),k(r,"type","text"),k(r,"class","input-element svelte-7k8t19"),r.disabled=e[3],k(r,"placeholder",e[0]),M(r,"search",e[1]),M(r,"stretch",e[2]),k(n,"class","input svelte-7k8t19"),M(n,"stretch",e[2])},m(t,i){v(t,n,i),o&&o.m(n,null),g(n,s),g(n,r),a||(l=x(r,"input",e[4]),a=!0)},p(t,[e]){t[1]?o?o.p(t,e):(o=Gt(),o.c(),o.m(n,s)):o&&(o.d(1),o=null),8&e&&(r.disabled=t[3]),1&e&&k(r,"placeholder",t[0]),2&e&&M(r,"search",t[1]),4&e&&M(r,"stretch",t[2]),4&e&&M(n,"stretch",t[2])},i:t,o:t,d(t){t&&h(n),o&&o.d(),a=!1,l()}}}function Pt(t,e,n){let{placeholder:s}=e,{search:r=!1}=e,{stretch:a=!1}=e,{disabled:l=!1}=e;return t.$set=t=>{"placeholder"in t&&n(0,s=t.placeholder),"search"in t&&n(1,r=t.search),"stretch"in t&&n(2,a=t.stretch),"disabled"in t&&n(3,l=t.disabled)},[s,r,a,l,function(e){R(t,e)}]}class Ut extends mt{constructor(t){super(),pt(this,t,Pt,Vt,o,{placeholder:0,search:1,stretch:2,disabled:3})}}function Wt(e){let n,s,r,a;return{c(){n=b("button"),s=w(e[0]),k(n,"class","btn svelte-16ia2z6"),n.disabled=e[2],M(n,"primary",e[1])},m(t,l){v(t,n,l),g(n,s),r||(a=x(n,"click",e[3]),r=!0)},p(t,[e]){1&e&&E(s,t[0]),4&e&&(n.disabled=t[2]),2&e&&M(n,"primary",t[1])},i:t,o:t,d(t){t&&h(n),r=!1,a()}}}function Jt(t,e,n){let{label:s}=e,{primary:r}=e,{disabled:a}=e;return t.$set=t=>{"label"in t&&n(0,s=t.label),"primary"in t&&n(1,r=t.primary),"disabled"in t&&n(2,a=t.disabled)},[s,r,a,function(e){R(t,e)}]}class Yt extends mt{constructor(t){super(),pt(this,t,Jt,Wt,o,{label:0,primary:1,disabled:2})}}function Kt(t,e,n){const s=t.slice();return s[4]=e[n].label,s[0]=e[n].value,s}function Zt(t){let e,n,s,r=t[4]+"";return{c(){e=b("option"),n=w(r),e.__value=s=t[0],e.value=e.__value},m(t,s){v(t,e,s),g(e,n)},p(t,a){2&a&&r!==(r=t[4]+"")&&E(n,r),2&a&&s!==(s=t[0])&&(e.__value=s,e.value=e.__value)},d(t){t&&h(e)}}}function Qt(e){let n,s,r,a,l,o,i=e[1],c=[];for(let t=0;t<i.length;t+=1)c[t]=Zt(Kt(e,i,t));return{c(){n=b("div"),s=b("select");for(let t=0;t<c.length;t+=1)c[t].c();r=y(),a=b("div"),k(s,"class","input-element svelte-wejwig"),k(s,"name",e[2]),void 0===e[0]&&V(()=>e[3].call(s)),k(a,"class","arrow svelte-wejwig"),k(n,"class","dropdown svelte-wejwig")},m(t,i){v(t,n,i),g(n,s);for(let t=0;t<c.length;t+=1)c[t].m(s,null);T(s,e[0]),g(n,r),g(n,a),a.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" id="comp-kbgc4ykjicon" class="arrow-down-icon">\n  <defs></defs>\n  <title>arrow&amp;amp;v</title>\n  <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z" class="style-kbgc4ym6_cls-1"></path>\n</svg>',l||(o=x(s,"change",e[3]),l=!0)},p(t,[e]){if(2&e){let n;for(i=t[1],n=0;n<i.length;n+=1){const r=Kt(t,i,n);c[n]?c[n].p(r,e):(c[n]=Zt(r),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=i.length}4&e&&k(s,"name",t[2]),3&e&&T(s,t[0])},i:t,o:t,d(t){t&&h(n),$(c,t),l=!1,o()}}}function Xt(t,e,n){let{options:s}=e,{name:r}=e,{value:a}=e;return t.$set=t=>{"options"in t&&n(1,s=t.options),"name"in t&&n(2,r=t.name),"value"in t&&n(0,a=t.value)},[a,s,r,function(){a=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,a),n(1,s)}]}class te extends mt{constructor(t){super(),pt(this,t,Xt,Qt,o,{options:1,name:2,value:0})}}var ee=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},se="object"==typeof ne&&ne&&ne.Object===Object&&ne,re="object"==typeof self&&self&&self.Object===Object&&self,ae=se||re||Function("return this")(),le=function(){return ae.Date.now()},oe=ae.Symbol,ie=Object.prototype,ce=ie.hasOwnProperty,ue=ie.toString,de=oe?oe.toStringTag:void 0;var fe=function(t){var e=ce.call(t,de),n=t[de];try{t[de]=void 0;var s=!0}catch(t){}var r=ue.call(t);return s&&(e?t[de]=n:delete t[de]),r},pe=Object.prototype.toString;var me=function(t){return pe.call(t)},ge=oe?oe.toStringTag:void 0;var ve=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":ge&&ge in Object(t)?fe(t):me(t)};var he=function(t){return null!=t&&"object"==typeof t};var $e=function(t){return"symbol"==typeof t||he(t)&&"[object Symbol]"==ve(t)},be=/^\s+|\s+$/g,we=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,_e=parseInt;var ke=function(t){if("number"==typeof t)return t;if($e(t))return NaN;if(ee(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ee(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(be,"");var n=ye.test(t);return n||xe.test(t)?_e(t.slice(2),n?2:8):we.test(t)?NaN:+t},Ee=Math.max,Te=Math.min;var Me=function(t,e,n){var s,r,a,l,o,i,c=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=s,a=r;return s=r=void 0,c=e,l=t.apply(a,n)}function m(t){return c=t,o=setTimeout(v,e),u?p(t):l}function g(t){var n=t-i;return void 0===i||n>=e||n<0||d&&t-c>=a}function v(){var t=le();if(g(t))return h(t);o=setTimeout(v,function(t){var n=e-(t-i);return d?Te(n,a-(t-c)):n}(t))}function h(t){return o=void 0,f&&s?p(t):(s=r=void 0,l)}function $(){var t=le(),n=g(t);if(s=arguments,r=this,i=t,n){if(void 0===o)return m(i);if(d)return clearTimeout(o),o=setTimeout(v,e),p(i)}return void 0===o&&(o=setTimeout(v,e)),l}return e=ke(e)||0,ee(n)&&(u=!!n.leading,a=(d="maxWait"in n)?Ee(ke(n.maxWait)||0,e):a,f="trailing"in n?!!n.trailing:f),$.cancel=function(){void 0!==o&&clearTimeout(o),c=0,s=i=r=o=void 0},$.flush=function(){return void 0===o?l:h(le())},$};function Ae(t){let e,n,s,r,a,l,o,i,c,u,d,f,p,m,$,w,x,_;function E(e){t[7].call(null,e)}n=new Ut({props:{stretch:!0,search:!0,disabled:t[3],placeholder:"Search Conversations"}}),n.$on("input",t[4]);let T={stretch:!0,name:"filterBy",options:jt};function M(e){t[8].call(null,e)}void 0!==t[0]&&(T.value=t[0]),a=new te({props:T}),z.push(()=>it(a,"value",E));let A={stretch:!0,name:"sortBy",options:Ht};function S(e){t[9].call(null,e)}void 0!==t[1]&&(A.value=t[1]),i=new te({props:A}),z.push(()=>it(i,"value",M));let D={stretch:!0,name:"language",options:Lt};return void 0!==t[2]&&(D.value=t[2]),d=new te({props:D}),z.push(()=>it(d,"value",S)),$=new Yt({props:{primary:!0,label:"Filter",disabled:t[3]}}),$.$on("click",t[5]),x=new Yt({props:{primary:!0,label:"Refresh",disabled:t[3]}}),x.$on("click",t[6]),{c(){e=b("div"),ct(n.$$.fragment),s=y(),r=b("div"),ct(a.$$.fragment),o=y(),ct(i.$$.fragment),u=y(),ct(d.$$.fragment),p=y(),m=b("div"),ct($.$$.fragment),w=y(),ct(x.$$.fragment),k(r,"class","filters svelte-51eeo0"),k(m,"class","btns svelte-51eeo0"),k(e,"class","toolbar svelte-51eeo0")},m(t,l){v(t,e,l),ut(n,e,null),g(e,s),g(e,r),ut(a,r,null),g(r,o),ut(i,r,null),g(r,u),ut(d,r,null),g(e,p),g(e,m),ut($,m,null),g(m,w),ut(x,m,null),_=!0},p(t,[e]){const s={};8&e&&(s.disabled=t[3]),n.$set(s);const r={};!l&&1&e&&(l=!0,r.value=t[0],P(()=>l=!1)),a.$set(r);const o={};!c&&2&e&&(c=!0,o.value=t[1],P(()=>c=!1)),i.$set(o);const u={};!f&&4&e&&(f=!0,u.value=t[2],P(()=>f=!1)),d.$set(u);const p={};8&e&&(p.disabled=t[3]),$.$set(p);const m={};8&e&&(m.disabled=t[3]),x.$set(m)},i(t){_||(nt(n.$$.fragment,t),nt(a.$$.fragment,t),nt(i.$$.fragment,t),nt(d.$$.fragment,t),nt($.$$.fragment,t),nt(x.$$.fragment,t),_=!0)},o(t){st(n.$$.fragment,t),st(a.$$.fragment,t),st(i.$$.fragment,t),st(d.$$.fragment,t),st($.$$.fragment,t),st(x.$$.fragment,t),_=!1},d(t){t&&h(e),dt(n),dt(a),dt(i),dt(d),dt($),dt(x)}}}function Se(t,e,n){let s;c(t,Ft,t=>n(3,s=t));const{dispatchEvent:r}=C("event-emitter");let a,l,o;const i=Me(t=>{const e=t.target.value.trim();e&&""!==e&&r(Mt,{value:e,responseType:yt})},500);return[a,l,o,s,i,t=>{Ft.set(!0),r(_t,{sort:l,filter:a,language:o,responseType:wt})},()=>{r(Tt,{responseType:wt})},function(t){a=t,n(0,a)},function(t){l=t,n(1,l)},function(t){o=t,n(2,o)}]}class De extends mt{constructor(t){super(),pt(this,t,Se,Ae,o,{})}}const Oe=t=>t===St,Le=t=>t===At,je=(t,e,n)=>t===e._id||!t&&0===n,He=t=>{const e=new Date(t);return`${e.getHours()>9?e.getHours():"0"+e.getHours()}:${e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes()} ${(t=>`${Ot[t.getMonth()]} ${t.getDate()}`)(e)}`},Ie=t=>{return`${t.countMessages} messages (${t.duration?(t=>{let e=Math.floor(t/6e4%60),n=Math.floor(t/36e5%24);return n=n<10?"0"+n:n,e=e<10?"0"+e:e,n+":"+e})(t.duration):(e=t._createdDate,n=t._updatedDate,new Date(n-e).toISOString().slice(14,-5))} min)`;var e,n};function Ce(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Re(t){const e=t-1;return e*e*e+1}function Ne(t){return-t*(t-2)}function ze(t,{delay:e=0,duration:n=400,easing:s=Ce,amount:r=5,opacity:a=0}){const l=getComputedStyle(t),o=+l.opacity,i="none"===l.filter?"":l.filter,c=o*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`opacity: ${o-c*e}; filter: ${i} blur(${e*r}px);`}}function Be(t,{delay:n=0,duration:s=400,easing:r=e}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:r,css:t=>"opacity: "+t*a}}function Fe(t,{delay:e=0,duration:n=400,easing:s=Re}){const r=getComputedStyle(t),a=+r.opacity,l=parseFloat(r.height),o=parseFloat(r.paddingTop),i=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*a};height: ${t*l}px;padding-top: ${t*o}px;padding-bottom: ${t*i}px;margin-top: ${t*c}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function qe(e){let n,s;return{c(){n=b("img"),k(n,"class","avatar user-avatar svelte-1spx89t"),n.src!==(s=e[0]||Dt)&&k(n,"src",s),k(n,"alt","User avatar")},m(t,e){v(t,n,e)},p(t,[e]){1&e&&n.src!==(s=t[0]||Dt)&&k(n,"src",s)},i:t,o:t,d(t){t&&h(n)}}}function Ge(t,e,n){let{userAvatar:s}=e;return t.$set=t=>{"userAvatar"in t&&n(0,s=t.userAvatar)},[s]}class Ve extends mt{constructor(t){super(),pt(this,t,Ge,qe,o,{userAvatar:0})}}function Pe(e){let n,s,r,a,l,o,i,c,u,d,f,p,m,$,x=e[0].userName+"",_=He(e[0]._createdDate)+"",T=e[0].finalMessage+"",M=Ie(e[0])+"";return{c(){n=b("div"),s=b("div"),r=b("span"),a=w(x),l=y(),o=b("span"),i=w(_),c=y(),u=b("div"),d=b("p"),f=w(T),p=y(),m=b("p"),$=w(M),k(r,"class","username svelte-6cmoyv"),k(o,"class","date svelte-6cmoyv"),k(s,"class","main-info svelte-6cmoyv"),k(d,"class","final-message svelte-6cmoyv"),k(m,"class","messages-info svelte-6cmoyv"),k(u,"class","additiona-info svelte-6cmoyv"),k(n,"class","info svelte-6cmoyv")},m(t,e){v(t,n,e),g(n,s),g(s,r),g(r,a),g(s,l),g(s,o),g(o,i),g(n,c),g(n,u),g(u,d),g(d,f),g(u,p),g(u,m),g(m,$)},p(t,[e]){1&e&&x!==(x=t[0].userName+"")&&E(a,x),1&e&&_!==(_=He(t[0]._createdDate)+"")&&E(i,_),1&e&&T!==(T=t[0].finalMessage+"")&&E(f,T),1&e&&M!==(M=Ie(t[0])+"")&&E($,M)},i:t,o:t,d(t){t&&h(n)}}}function Ue(t,e,n){let{conv:s={}}=e;return t.$set=t=>{"conv"in t&&n(0,s=t.conv)},[s]}class We extends mt{constructor(t){super(),pt(this,t,Ue,Pe,o,{conv:0})}}function Je(t){let e;return{c(){e=b("a"),k(e,"class","icon svelte-lmq8qg"),k(e,"href",t[0]),k(e,"target","_blank")},m(t,n){v(t,e,n),e.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmg0__1pSCZlC4MsmbG0UgsKrGsvgcontent" data-bbox="-2 -5 22 22" viewBox="-2 -5 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M18.918 11.298L19 11.5l-.082.201C18.813 11.959 16.293 18 10.5 18c-5.793 0-8.313-6.041-8.418-6.299L2 11.5l.082-.202C2.187 11.041 4.707 5 10.5 5c5.793 0 8.313 6.041 8.418 6.298zM10.5 16.964c4.58 0 6.935-4.452 7.411-5.464-.478-1.01-2.843-5.464-7.411-5.464-4.58 0-6.935 4.452-7.411 5.463.478 1.011 2.843 5.465 7.411 5.465zm0-2.214a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm0-1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" id="826ee0e3-216f-47cb-a897-6d615df226c0"></path>\n        </defs>\n        <g transform="translate(-2 -5)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="857a01c0-fe82-4ddf-9398-1034b98f1f38">\n                <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0"></use>\n            </mask>\n            <use xlink:href="#826ee0e3-216f-47cb-a897-6d615df226c0" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#857a01c0-fe82-4ddf-9398-1034b98f1f38)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>'},p(t,n){1&n&&k(e,"href",t[0])},d(t){t&&h(e)}}}function Ye(e){let n,s,r,l,o,i,c,u,d,f=e[0]&&Je(e);return{c(){n=b("div"),s=b("div"),r=y(),f&&f.c(),l=y(),o=b("div"),i=b("img"),k(s,"class","deep-link"),k(n,"class","additional-icons svelte-lmq8qg"),i.src!==(c=e[1])&&k(i,"src",c),k(i,"alt","Star"),k(i,"height","28px"),k(o,"class","favorite svelte-lmq8qg")},m(t,a){var c;v(t,n,a),g(n,s),s.innerHTML='<svg preserveAspectRatio="xMidYMid meet" id="comp-k11tjmac__7PlBI8F1H1njrtv8E2GBsvgcontent" data-bbox="-3 -4 22 22" viewBox="-3 -4 22 22" height="24" width="24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">\n    <g>\n        <defs>\n            <path d="M7.703 17.368c-.821.822-2.252.821-3.073 0a2.176 2.176 0 0 1 0-3.073l3.687-3.687a2.175 2.175 0 0 1 3.074 0l.703-.704a3.173 3.173 0 0 0-4.481 0l-3.686 3.687a3.171 3.171 0 0 0 0 4.481 3.147 3.147 0 0 0 2.24.928c.846 0 1.642-.33 2.24-.928l2.223-2.223-.704-.703-2.223 2.222zM18 7.166c0-.846-.329-1.642-.928-2.24a3.173 3.173 0 0 0-4.481 0L10.369 7.15l.703.704 2.223-2.223a2.176 2.176 0 0 1 3.074 0c.41.411.636.956.636 1.536a2.16 2.16 0 0 1-.636 1.537l-3.687 3.688a2.177 2.177 0 0 1-3.074 0l-.704.703a3.163 3.163 0 0 0 2.241.927 3.16 3.16 0 0 0 2.24-.927l3.687-3.687A3.146 3.146 0 0 0 18 7.167z" id="dd461069-c027-433f-aec5-d45da1d7d15e"></path>\n        </defs>\n        <g transform="translate(-3 -4)" fill-rule="evenodd">\n            <mask fill="#ffffff" id="47f47b80-b166-41ed-81cd-5dc504d0f44f">\n                <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e"></use>\n            </mask>\n            <use xlink:href="#dd461069-c027-433f-aec5-d45da1d7d15e" fill-rule="nonzero" fill="#162D3D" data-color="2"></use>\n            <g mask="url(#47f47b80-b166-41ed-81cd-5dc504d0f44f)">\n                <path fill="#3899EC" d="M22 0v22H0V0h22z" data-color="1"></path>\n            </g>\n        </g>\n    </g>\n</svg>',g(n,r),f&&f.m(n,null),v(t,l,a),v(t,o,a),g(o,i),u||(d=[x(s,"click",_(e[2])),x(i,"click",(c=_(e[5]),function(t){t.target===this&&c.call(this,t)}))],u=!0)},p(t,[e]){t[0]?f?f.p(t,e):(f=Je(t),f.c(),f.m(n,null)):f&&(f.d(1),f=null),2&e&&i.src!==(c=t[1])&&k(i,"src",c)},i:t,o:t,d(t){t&&h(n),f&&f.d(),t&&h(l),t&&h(o),u=!1,a(d)}}}function Ke(t,e,n){const{dispatchEvent:s}=C("event-emitter");let{id:r}=e,{favorite:a=!1}=e,{ticket:l=!1}=e;let o;return t.$set=t=>{"id"in t&&n(3,r=t.id),"favorite"in t&&n(4,a=t.favorite),"ticket"in t&&n(0,l=t.ticket)},t.$$.update=()=>{16&t.$$.dirty&&n(1,o=a?"https://static.wixstatic.com/shapes/260237_65b99ecb373f4f038f72dc7ce6327e2c.svg":"https://static.wixstatic.com/shapes/260237_6212104474874a39b3743b95fec440ff.svg")},[l,o,()=>navigator.clipboard.writeText(`${window.location.href}?conversationId=${r}`),r,a,function(e){R(t,e)}]}class Ze extends mt{constructor(t){super(),pt(this,t,Ke,Ye,o,{id:3,favorite:4,ticket:0})}}function Qe(t){let e,n,s,r,a,l,o,i,c,u;return n=new Ve({props:{userAvatar:t[0].userAvatar}}),r=new We({props:{conv:t[0]}}),l=new Ze({props:{id:t[0]._id,ticket:t[0].withTicket,favorite:t[0].favorite}}),l.$on("click",t[4]),{c(){e=b("div"),ct(n.$$.fragment),s=y(),ct(r.$$.fragment),a=y(),ct(l.$$.fragment),k(e,"class","item svelte-1ektzng"),M(e,"active",t[1]),M(e,"not-readed",!t[0].isReaded)},m(o,d){v(o,e,d),ut(n,e,null),g(e,s),ut(r,e,null),g(e,a),ut(l,e,null),i=!0,c||(u=x(e,"click",t[3]),c=!0)},p(t,[s]){const a={};1&s&&(a.userAvatar=t[0].userAvatar),n.$set(a);const o={};1&s&&(o.conv=t[0]),r.$set(o);const i={};1&s&&(i.id=t[0]._id),1&s&&(i.ticket=t[0].withTicket),1&s&&(i.favorite=t[0].favorite),l.$set(i),2&s&&M(e,"active",t[1]),1&s&&M(e,"not-readed",!t[0].isReaded)},i(s){i||(nt(n.$$.fragment,s),nt(r.$$.fragment,s),nt(l.$$.fragment,s),V(()=>{o||(o=at(e,Be,{delay:t[2]%50*50,duration:800},!0)),o.run(1)}),i=!0)},o(s){st(n.$$.fragment,s),st(r.$$.fragment,s),st(l.$$.fragment,s),o||(o=at(e,Be,{delay:t[2]%50*50,duration:800},!1)),o.run(0),i=!1},d(t){t&&h(e),dt(n),dt(r),dt(l),t&&o&&o.end(),c=!1,u()}}}function Xe(t,e,n){const{dispatchEvent:s}=C("event-emitter"),r=function(){const t=I();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=A(e,n);s.slice().forEach(e=>{e.call(t,r)})}}}();let{conv:a={}}=e,{active:l=!1}=e,{index:o}=e;return t.$set=t=>{"conv"in t&&n(0,a=t.conv),"active"in t&&n(1,l=t.active),"index"in t&&n(2,o=t.index)},[a,l,o,()=>{a.isReaded||s(Et,{_id:a._id}),n(0,a.isReaded=!0,a),r("click",{_id:a._id})},()=>{n(0,a.favorite=!a.favorite,a),s(kt,{_id:a._id,value:a.favorite})}]}class tn extends mt{constructor(t){super(),pt(this,t,Xe,Qe,o,{conv:0,active:1,index:2})}}function en(t){let e,n,s,r;return{c(){e=b("img"),e.src!==(n="https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif")&&k(e,"src","https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif"),k(e,"alt","Loader"),k(e,"class","loader svelte-em6w2v"),k(e,"width",t[1]),M(e,"centred",t[0])},m(t,n){v(t,e,n),r=!0},p(t,[n]){(!r||2&n)&&k(e,"width",t[1]),1&n&&M(e,"centred",t[0])},i(t){r||(V(()=>{s||(s=at(e,ze,{duration:1e3},!0)),s.run(1)}),r=!0)},o(t){s||(s=at(e,ze,{duration:1e3},!1)),s.run(0),r=!1},d(t){t&&h(e),t&&s&&s.end()}}}function nn(t,e,n){let{centred:s}=e,{width:r}=e;return t.$set=t=>{"centred"in t&&n(0,s=t.centred),"width"in t&&n(1,r=t.width)},[s,r]}class sn extends mt{constructor(t){super(),pt(this,t,nn,en,o,{centred:0,width:1})}}function rn(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function an(t){let e,n,s=t[4],r=[];for(let e=0;e<s.length;e+=1)r[e]=ln(rn(t,s,e));const a=t=>st(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=w("")},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);v(t,e,s),n=!0},p(t,n){if(49&n){let l;for(s=t[4],l=0;l<s.length;l+=1){const a=rn(t,s,l);r[l]?(r[l].p(a,n),nt(r[l],1)):(r[l]=ln(a),r[l].c(),nt(r[l],1),r[l].m(e.parentNode,e))}for(tt(),l=s.length;l<r.length;l+=1)a(l);et()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)nt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)st(r[t]);n=!1},d(t){$(r,t),t&&h(e)}}}function ln(t){let e,n;return e=new tn({props:{conv:t[10],index:t[12],active:je(t[0],t[10],t[12])}}),e.$on("click",t[5]),{c(){ct(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};16&n&&(s.conv=t[10]),17&n&&(s.active=je(t[0],t[10],t[12])),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){dt(e,t)}}}function on(t){let e,n;return e=new sn({props:{centred:!0,width:"56px"}}),{c(){ct(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){dt(e,t)}}}function cn(t){let e,n,s,r,a,l=(!t[3]||t[2])&&an(t),o=(t[2]||t[3])&&on();return{c(){e=b("div"),l&&l.c(),n=y(),o&&o.c(),k(e,"class","conv-list svelte-8i2jf1")},m(i,c){v(i,e,c),l&&l.m(e,null),g(e,n),o&&o.m(e,null),t[7](e),s=!0,r||(a=x(e,"scroll",t[6]),r=!0)},p(t,[s]){!t[3]||t[2]?l?(l.p(t,s),12&s&&nt(l,1)):(l=an(t),l.c(),nt(l,1),l.m(e,n)):l&&(tt(),st(l,1,1,()=>{l=null}),et()),t[2]||t[3]?o?12&s&&nt(o,1):(o=on(),o.c(),nt(o,1),o.m(e,null)):o&&(tt(),st(o,1,1,()=>{o=null}),et())},i(t){s||(nt(l),nt(o),s=!0)},o(t){st(l),st(o),s=!1},d(n){n&&h(e),l&&l.d(),o&&o.d(),t[7](null),r=!1,a()}}}function un(t,e,n){let s,r,a;c(t,Ft,t=>n(3,s=t)),c(t,qt,t=>n(8,r=t)),c(t,Bt,t=>n(4,a=t));const{dispatchEvent:l}=C("event-emitter");let o,i,u=!0;Bt.subscribe(()=>n(2,u=!1));return[o,i,u,s,a,({detail:t})=>{n(0,o=t._id),l(xt,{_id:t._id,responseType:$t})},()=>{var t;s||(t=i).scrollTop!==t.scrollHeight-t.offsetHeight||r||(n(2,u=!0),Ft.set(!0),l(_t,{responseType:bt}))},function(t){z[t?"unshift":"push"](()=>{i=t,n(1,i)})}]}class dn extends mt{constructor(t){super(),pt(this,t,un,cn,o,{})}}function fn(e){let n,s,r,a;return{c(){n=b("div"),s=b("p"),k(s,"class","svelte-57i411"),k(n,"class","msg bubble svelte-57i411")},m(t,l){v(t,n,l),g(n,s),s.innerHTML=e[0],r||(a=x(n,"click",e[1]),r=!0)},p(t,[e]){1&e&&(s.innerHTML=t[0])},i:t,o:t,d(t){t&&h(n),r=!1,a()}}}function pn(t,e,n){let{message:s=""}=e,{nodeID:r=""}=e,{botId:a=""}=e;const l=`https://www.wix.com/support/conversations?botId=${a}&nodeId=${r}`;return t.$set=t=>{"message"in t&&n(0,s=t.message),"nodeID"in t&&n(2,r=t.nodeID),"botId"in t&&n(3,a=t.botId)},[s,()=>window.open(l,"_blank"),r,a]}class mn extends mt{constructor(t){super(),pt(this,t,pn,fn,o,{message:0,nodeID:2,botId:3})}}function gn(e){let n,s,r;return{c(){n=b("div"),s=b("div"),r=b("p"),k(r,"class","svelte-144vyxi"),k(s,"class","msg bubble svelte-144vyxi"),k(n,"class","right svelte-144vyxi")},m(t,a){v(t,n,a),g(n,s),g(s,r),r.innerHTML=e[0]},p(t,[e]){1&e&&(r.innerHTML=t[0])},i:t,o:t,d(t){t&&h(n)}}}function vn(t,e,n){let{message:s=""}=e;return t.$set=t=>{"message"in t&&n(0,s=t.message)},[s]}class hn extends mt{constructor(t){super(),pt(this,t,vn,gn,o,{message:0})}}function $n(t){let e,n,s,r,a;return{c(){e=b("a"),n=w(t[1]),s=y(),r=b("img"),k(r,"class","link svelte-39yldq"),r.src!==(a="https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg")&&k(r,"src","https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg"),k(r,"alt","Link"),k(e,"href",t[2]),k(e,"target","_blank"),k(e,"class","svelte-39yldq")},m(t,a){v(t,e,a),g(e,n),g(e,s),g(e,r)},p(t,s){2&s&&E(n,t[1]),4&s&&k(e,"href",t[2])},d(t){t&&h(e)}}}function bn(e){let n,s,r,a,l,o,i,c,u,d=e[2]&&$n(e);return{c(){n=b("div"),s=b("div"),r=y(),a=b("div"),l=b("p"),o=w(e[0]),i=y(),d&&d.c(),c=y(),u=b("div"),k(s,"class","line svelte-39yldq"),k(l,"class","svelte-39yldq"),k(a,"class","action-content svelte-39yldq"),k(u,"class","line svelte-39yldq"),k(n,"class","action svelte-39yldq")},m(t,e){v(t,n,e),g(n,s),g(n,r),g(n,a),g(a,l),g(l,o),g(a,i),d&&d.m(a,null),g(n,c),g(n,u)},p(t,[e]){1&e&&E(o,t[0]),t[2]?d?d.p(t,e):(d=$n(t),d.c(),d.m(a,null)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&h(n),d&&d.d()}}}function wn(t,e,n){let{message:s=""}=e,{linkTitle:r=""}=e,{linkHref:a=""}=e;return t.$set=t=>{"message"in t&&n(0,s=t.message),"linkTitle"in t&&n(1,r=t.linkTitle),"linkHref"in t&&n(2,a=t.linkHref)},[s,r,a]}class yn extends mt{constructor(t){super(),pt(this,t,wn,bn,o,{message:0,linkTitle:1,linkHref:2})}}function xn(t){let e,s;const r=[t[0]];let a={};for(let t=0;t<r.length;t+=1)a=n(a,r[t]);return e=new yn({props:a}),{c(){ct(e.$$.fragment)},m(t,n){ut(e,t,n),s=!0},p(t,n){const s=1&n?lt(r,[ot(t[0])]):{};e.$set(s)},i(t){s||(nt(e.$$.fragment,t),s=!0)},o(t){st(e.$$.fragment,t),s=!1},d(t){dt(e,t)}}}function _n(t){let e,s;const r=[t[0]];let a={};for(let t=0;t<r.length;t+=1)a=n(a,r[t]);return e=new hn({props:a}),{c(){ct(e.$$.fragment)},m(t,n){ut(e,t,n),s=!0},p(t,n){const s=1&n?lt(r,[ot(t[0])]):{};e.$set(s)},i(t){s||(nt(e.$$.fragment,t),s=!0)},o(t){st(e.$$.fragment,t),s=!1},d(t){dt(e,t)}}}function kn(t){let e,s;const r=[t[0],{botId:t[1]}];let a={};for(let t=0;t<r.length;t+=1)a=n(a,r[t]);return e=new mn({props:a}),{c(){ct(e.$$.fragment)},m(t,n){ut(e,t,n),s=!0},p(t,n){const s=3&n?lt(r,[1&n&&ot(t[0]),2&n&&{botId:t[1]}]):{};e.$set(s)},i(t){s||(nt(e.$$.fragment,t),s=!0)},o(t){st(e.$$.fragment,t),s=!1},d(t){dt(e,t)}}}function En(t){let e,n,s,r,a,l,o;const i=[kn,_n,xn],c=[];function u(t,e){return 1&e&&(n=!!Le(t[0].type)),n?0:(1&e&&(s=!!Oe(t[0].type)),s?1:2)}return r=u(t,-1),a=c[r]=i[r](t),{c(){e=b("div"),a.c(),k(e,"class","item svelte-2291eo")},m(t,n){v(t,e,n),c[r].m(e,null),o=!0},p(t,[n]){let s=r;r=u(t,n),r===s?c[r].p(t,n):(tt(),st(c[s],1,1,()=>{c[s]=null}),et(),a=c[r],a||(a=c[r]=i[r](t),a.c()),nt(a,1),a.m(e,null))},i(t){o||(nt(a),V(()=>{l||(l=at(e,Fe,{delay:250,duration:1500,easing:Ne},!0)),l.run(1)}),o=!0)},o(t){st(a),l||(l=at(e,Fe,{delay:250,duration:1500,easing:Ne},!1)),l.run(0),o=!1},d(t){t&&h(e),c[r].d(),t&&l&&l.end()}}}function Tn(t,e,n){let{msg:s={}}=e,{botId:r=""}=e;return t.$set=t=>{"msg"in t&&n(0,s=t.msg),"botId"in t&&n(1,r=t.botId)},[s,r]}class Mn extends mt{constructor(t){super(),pt(this,t,Tn,En,o,{msg:0,botId:1})}}function An(e){let n,s;return{c(){n=b("img"),k(n,"class","avatar bot-avatar svelte-1a1iy9n"),n.src!==(s="https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png")&&k(n,"src","https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png"),k(n,"alt","Bot avatar")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Sn extends mt{constructor(t){super(),pt(this,t,null,An,o,{})}}function Dn(e){let n,s;return{c(){n=b("img"),k(n,"class","avatar user-avatar svelte-f2ee4"),n.src!==(s=e[0]||Dt)&&k(n,"src",s),k(n,"alt","User avatar")},m(t,e){v(t,n,e)},p(t,[e]){1&e&&n.src!==(s=t[0]||Dt)&&k(n,"src",s)},i:t,o:t,d(t){t&&h(n)}}}function On(t,e,n){let{src:s=""}=e;return t.$set=t=>{"src"in t&&n(0,s=t.src)},[s]}class Ln extends mt{constructor(t){super(),pt(this,t,On,Dn,o,{src:0})}}function jn(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function Hn(t){let e,n;return e=new Sn({}),{c(){ct(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){dt(e,t)}}}function In(t){let e,n;return e=new Ln({props:{src:t[0].avatar}}),{c(){ct(e.$$.fragment)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.src=t[0].avatar),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){dt(e,t)}}}function Cn(t){let e,n,s,r,a,l,o=t[1](t[0].list,t[4]),i=Oe(t[2].type),c=o&&Hn(),u=i&&In(t);return r=new Mn({props:{msg:t[2]}}),{c(){e=b("div"),c&&c.c(),n=y(),u&&u.c(),s=y(),ct(r.$$.fragment),a=y(),k(e,"class","box svelte-1mthr6r")},m(t,o){v(t,e,o),c&&c.m(e,null),g(e,n),u&&u.m(e,null),g(e,s),ut(r,e,null),g(e,a),l=!0},p(t,a){1&a&&(o=t[1](t[0].list,t[4])),o?c?1&a&&nt(c,1):(c=Hn(),c.c(),nt(c,1),c.m(e,n)):c&&(tt(),st(c,1,1,()=>{c=null}),et()),1&a&&(i=Oe(t[2].type)),i?u?(u.p(t,a),1&a&&nt(u,1)):(u=In(t),u.c(),nt(u,1),u.m(e,s)):u&&(tt(),st(u,1,1,()=>{u=null}),et());const l={};1&a&&(l.msg=t[2]),r.$set(l)},i(t){l||(nt(c),nt(u),nt(r.$$.fragment,t),l=!0)},o(t){st(c),st(u),st(r.$$.fragment,t),l=!1},d(t){t&&h(e),c&&c.d(),u&&u.d(),dt(r)}}}function Rn(t){let e,n,s=t[0].list,r=[];for(let e=0;e<s.length;e+=1)r[e]=Cn(jn(t,s,e));const a=t=>st(r[t],1,1,()=>{r[t]=null});return{c(){e=b("div");for(let t=0;t<r.length;t+=1)r[t].c();k(e,"class","msg-list svelte-1mthr6r")},m(t,s){v(t,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(3&n){let l;for(s=t[0].list,l=0;l<s.length;l+=1){const a=jn(t,s,l);r[l]?(r[l].p(a,n),nt(r[l],1)):(r[l]=Cn(a),r[l].c(),nt(r[l],1),r[l].m(e,null))}for(tt(),l=s.length;l<r.length;l+=1)a(l);et()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)nt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)st(r[t]);n=!1},d(t){t&&h(e),$(r,t)}}}function Nn(t,e,n){let s;c(t,zt,t=>n(0,s=t));return[s,(t,e)=>Le(t[e].type)&&(e+1<t.length&&Oe(t[e+1].type)||1===t.length||e===t.length-1)]}class zn extends mt{constructor(t){super(),pt(this,t,Nn,Rn,o,{})}}const Bn=t=>{var e,n;e="event-emitter",n={dispatchEvent:(e,n)=>{t(new CustomEvent(e,{detail:n}))}},I().$$.context.set(e,n)};function Fn(e){let n,s,r,a,l,o,i,c,u;return a=new De({}),o=new dn({}),c=new zn({}),{c(){n=b("link"),s=y(),r=b("main"),ct(a.$$.fragment),l=y(),ct(o.$$.fragment),i=y(),ct(c.$$.fragment),k(n,"rel","stylesheet"),k(n,"href","https://sergkornienko.github.io/svelte-web-component/bundle.css"),k(r,"class","svelte-su38wg")},m(t,e){g(document.head,n),v(t,s,e),v(t,r,e),ut(a,r,null),g(r,l),ut(o,r,null),g(r,i),ut(c,r,null),u=!0},p:t,i(t){u||(nt(a.$$.fragment,t),nt(o.$$.fragment,t),nt(c.$$.fragment,t),u=!0)},o(t){st(a.$$.fragment,t),st(o.$$.fragment,t),st(c.$$.fragment,t),u=!1},d(t){h(n),t&&h(s),t&&h(r),dt(a),dt(o),dt(c)}}}function qn(t,e,n){let{dispatchEvent:s}=e;return Bn(s),t.$set=t=>{"dispatchEvent"in t&&n(0,s=t.dispatchEvent)},[s]}class Gn extends mt{constructor(t){super(),pt(this,t,qn,Fn,o,{dispatchEvent:0})}}class Vn extends HTMLElement{connectedCallback(){const t=this.dispatchEvent.bind(this);new Gn({target:this,props:{dispatchEvent:t}})}}window.customElements.define("chatbot-conv",Vn),window.addEventListener("pagehide",()=>{navigator.sendBeacon("https://www.wix.com/support/chatbot-conv/_functions/log",JSON.stringify({data:{my:"test"}}))})}();
//# sourceMappingURL=bundle.js.map
