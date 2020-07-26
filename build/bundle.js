!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(s(n,e))}function i(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function g(t){m=t}const $=[],b=[],w=[],y=[],x=Promise.resolve();let _=!1;function v(t){w.push(t)}let E=!1;const k=new Set;function T(){if(!E){E=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),C(n.$$)}for($.length=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];k.has(n)||(k.add(n),n())}w.length=0}while($.length);for(;y.length;)y.pop()();_=!1,E=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const L=new Set;function M(t,n){t&&t.i&&(L.delete(t),t.i(n))}function N(t,e,c){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(e,c),v(()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(v)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,x.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(n,r,c,s,u,i,a=[-1]){const l=m;g(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:a};let h=!1;if(p.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&j(n,t)),e}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&M(n.$$.fragment),N(n,r.target,r.anchor),T()}g(l)}class q{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const A=[];function B(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!A.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),A.push(e,n)}if(t){for(let t=0;t<A.length;t+=2)A[t][0](A[t+1]);A.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.push(i),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const H=(P=t=>{window.onmessage=n=>{n.data&&n.data.num&&t(function(t){let n;return s(t,t=>n=t)(),n}(H)+n.data.num)}},{subscribe:B(0,P).subscribe});var P;function z(n){let e,o,r,c,s;return{c(){e=l("p"),o=d("The answer is "),r=d(n[0]),c=d(":"),s=d(n[1])},m(t,n){a(t,e,n),i(e,o),i(e,r),i(e,c),i(e,s)},p(t,[n]){1&n&&h(r,t[0]),2&n&&h(s,t[1])},i:t,o:t,d(t){t&&f(e)}}}function D(t,n,e){let o;u(t,H,t=>e(1,o=t));let{answer:r}=n;return t.$set=t=>{"answer"in t&&e(0,r=t.answer)},[r,o]}class F extends q{constructor(t){super(),S(this,t,D,z,c,{answer:0})}}function G(t){let n,e,o,r,c,s,u,m,g;return s=new F({props:{answer:42}}),{c(){var u;n=l("p"),e=d(t[0]),o=p(),r=d(t[1]),c=p(),(u=s.$$.fragment)&&u.c()},m(f,l){var d,p,h,$;a(f,n,l),i(n,e),i(n,o),i(n,r),a(f,c,l),N(s,f,l),u=!0,m||(d=n,p="click",h=t[2],d.addEventListener(p,h,$),g=()=>d.removeEventListener(p,h,$),m=!0)},p(t,[n]){(!u||1&n)&&h(e,t[0]),(!u||2&n)&&h(r,t[1])},i(t){u||(M(s.$$.fragment,t),u=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),(void 0).c.push(()=>{L.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(s.$$.fragment,t),u=!1},d(t){t&&f(n),t&&f(c),O(s,t),m=!1,g()}}}function I(t,n,e){let o;u(t,H,t=>e(1,o=t));let{name:r="serhiiko"}=n;console.log(H);return t.$set=t=>{"name"in t&&e(0,r=t.name)},[r,o,()=>{console.log("send msg"),window.postMessage({msg:"from svelte"},"*")}]}class J extends q{constructor(t){super(),S(this,t,I,G,c,{name:0})}}class K extends HTMLElement{connectedCallback(){new J({target:this,props:{name:"serhiiko new"}})}}window.customElements.define("serhiiko-svelte",K)}();
//# sourceMappingURL=bundle.js.map
