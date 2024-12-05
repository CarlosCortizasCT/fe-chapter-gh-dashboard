(function(Ie){typeof define=="function"&&define.amd?define(Ie):Ie()})(function(){"use strict";var Ie,L,ko,Ze,So,Ao,pn,Co,fn,mn,hn,Mo,vt={},Po=[],Hs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Rt=Array.isArray;function ke(e,t){for(var n in t)e[n]=t[n];return e}function vn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ee(e,t,n){var o,r,a,s={};for(a in t)a=="key"?o=t[a]:a=="ref"?r=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?Ie.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)s[a]===void 0&&(s[a]=e.defaultProps[a]);return gt(e,s,o,r,null)}function gt(e,t,n,o,r){var a={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ko,__i:-1,__u:0};return r==null&&L.vnode!=null&&L.vnode(a),a}function Eo(){return{current:null}}function oe(e){return e.children}function pe(e,t){this.props=e,this.context=t}function Ye(e,t){if(t==null)return e.__?Ye(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ye(e):null}function No(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return No(e)}}function gn(e){(!e.__d&&(e.__d=!0)&&Ze.push(e)&&!Ot.__r++||So!==L.debounceRendering)&&((So=L.debounceRendering)||Ao)(Ot)}function Ot(){var e,t,n,o,r,a,s,i;for(Ze.sort(pn);e=Ze.shift();)e.__d&&(t=Ze.length,o=void 0,a=(r=(n=e).__v).__e,s=[],i=[],n.__P&&((o=ke({},r)).__v=r.__v+1,L.vnode&&L.vnode(o),bn(n.__P,o,r,n.__n,n.__P.namespaceURI,32&r.__u?[a]:null,s,a??Ye(r),!!(32&r.__u),i),o.__v=r.__v,o.__.__k[o.__i]=o,Io(s,o,i),o.__e!=a&&No(o)),Ze.length>t&&Ze.sort(pn));Ot.__r=0}function To(e,t,n,o,r,a,s,i,l,c,p){var d,m,f,b,u,h,v=o&&o.__k||Po,g=t.length;for(l=Zs(n,t,v,l),d=0;d<g;d++)(f=n.__k[d])!=null&&(m=f.__i===-1?vt:v[f.__i]||vt,f.__i=d,h=bn(e,f,m,r,a,s,i,l,c,p),b=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&_n(m.ref,null,f),p.push(f.ref,f.__c||b,f)),u==null&&b!=null&&(u=b),4&f.__u||m.__k===f.__k?l=Lo(f,l,e):typeof f.type=="function"&&h!==void 0?l=h:b&&(l=b.nextSibling),f.__u&=-7);return n.__e=u,l}function Zs(e,t,n,o){var r,a,s,i,l,c=t.length,p=n.length,d=p,m=0;for(e.__k=[],r=0;r<c;r++)(a=t[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(i=r+m,(a=e.__k[r]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?gt(null,a,null,null,null):Rt(a)?gt(oe,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?gt(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,(l=a.__i=Vs(a,n,i,d))!==-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v===null?(l==-1&&m--,typeof a.type!="function"&&(a.__u|=4)):l!==i&&(l==i-1?m--:l==i+1?m++:(l>i?m--:m++,a.__u|=4))):a=e.__k[r]=null;if(d)for(r=0;r<p;r++)(s=n[r])!=null&&!(2&s.__u)&&(s.__e==o&&(o=Ye(s)),jo(s,s));return o}function Lo(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=Lo(o[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=Ye(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Se(e,t){return t=t||[],e==null||typeof e=="boolean"||(Rt(e)?e.some(function(n){Se(n,t)}):t.push(e)),t}function Vs(e,t,n,o){var r=e.key,a=e.type,s=n-1,i=n+1,l=t[n];if(l===null||l&&r==l.key&&a===l.type&&!(2&l.__u))return n;if((typeof a!="function"||a===oe||r)&&o>(l!=null&&!(2&l.__u)?1:0))for(;s>=0||i<t.length;){if(s>=0){if((l=t[s])&&!(2&l.__u)&&r==l.key&&a===l.type)return s;s--}if(i<t.length){if((l=t[i])&&!(2&l.__u)&&r==l.key&&a===l.type)return i;i++}}return-1}function Ro(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Hs.test(t)?n:n+"px"}function It(e,t,n,o,r){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ro(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Ro(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(Co,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?o?n.u=o.u:(n.u=fn,e.addEventListener(t,a?hn:mn,a)):e.removeEventListener(t,a?hn:mn,a);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Oo(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=fn++;else if(t.t<n.u)return;return n(L.event?L.event(t):t)}}}function bn(e,t,n,o,r,a,s,i,l,c){var p,d,m,f,b,u,h,v,g,y,w,x,C,k,P,D,B,O=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[i=t.__e=n.__e]),(p=L.__b)&&p(t);e:if(typeof O=="function")try{if(v=t.props,g="prototype"in O&&O.prototype.render,y=(p=O.contextType)&&o[p.__c],w=p?y?y.props.value:p.__:o,n.__c?h=(d=t.__c=n.__c).__=d.__E:(g?t.__c=d=new O(v,w):(t.__c=d=new pe(v,w),d.constructor=O,d.render=Gs),y&&y.sub(d),d.props=v,d.state||(d.state={}),d.context=w,d.__n=o,m=d.__d=!0,d.__h=[],d._sb=[]),g&&d.__s==null&&(d.__s=d.state),g&&O.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=ke({},d.__s)),ke(d.__s,O.getDerivedStateFromProps(v,d.__s))),f=d.props,b=d.state,d.__v=t,m)g&&O.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),g&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(g&&O.getDerivedStateFromProps==null&&v!==f&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(v,w),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(v,d.__s,w)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(A){A&&(A.__=t)}),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(v,d.__s,w),g&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(f,b,u)})}if(d.context=w,d.props=v,d.__P=e,d.__e=!1,C=L.__r,k=0,g){for(d.state=d.__s,d.__d=!1,C&&C(t),p=d.render(d.props,d.state,d.context),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[]}else do d.__d=!1,C&&C(t),p=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++k<25);d.state=d.__s,d.getChildContext!=null&&(o=ke(ke({},o),d.getChildContext())),g&&!m&&d.getSnapshotBeforeUpdate!=null&&(u=d.getSnapshotBeforeUpdate(f,b)),i=To(e,Rt(D=p!=null&&p.type===oe&&p.key==null?p.props.children:p)?D:[D],t,n,o,r,a,s,i,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),h&&(d.__E=d.__=null)}catch(A){if(t.__v=null,l||a!=null)if(A.then){for(t.__u|=l?160:128;i&&i.nodeType===8&&i.nextSibling;)i=i.nextSibling;a[a.indexOf(i)]=null,t.__e=i}else for(B=a.length;B--;)vn(a[B]);else t.__e=n.__e,t.__k=n.__k;L.__e(A,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):i=t.__e=Us(n.__e,t,n,o,r,a,s,l,c);return(p=L.diffed)&&p(t),128&t.__u?void 0:i}function Io(e,t,n){for(var o=0;o<n.length;o++)_n(n[o],n[++o],n[++o]);L.__c&&L.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){L.__e(a,r.__v)}})}function Us(e,t,n,o,r,a,s,i,l){var c,p,d,m,f,b,u,h=n.props,v=t.props,g=t.type;if(g==="svg"?r="http://www.w3.org/2000/svg":g==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((f=a[c])&&"setAttribute"in f==!!g&&(g?f.localName===g:f.nodeType===3)){e=f,a[c]=null;break}}if(e==null){if(g===null)return document.createTextNode(v);e=document.createElementNS(r,g,v.is&&v),i&&(L.__m&&L.__m(t,a),i=!1),a=null}if(g===null)h===v||i&&e.data===v||(e.data=v);else{if(a=a&&Ie.call(e.childNodes),h=n.props||vt,!i&&a!=null)for(h={},c=0;c<e.attributes.length;c++)h[(f=e.attributes[c]).name]=f.value;for(c in h)if(f=h[c],c!="children"){if(c=="dangerouslySetInnerHTML")d=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;It(e,c,null,f,r)}}for(c in v)f=v[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?b=f:c=="checked"?u=f:i&&typeof f!="function"||h[c]===f||It(e,c,f,h[c],r);if(p)i||d&&(p.__html===d.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(d&&(e.innerHTML=""),To(e,Rt(m)?m:[m],t,n,o,g==="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:n.__k&&Ye(n,0),i,l),a!=null)for(c=a.length;c--;)vn(a[c]);i||(c="value",g==="progress"&&b==null?e.removeAttribute("value"):b!==void 0&&(b!==e[c]||g==="progress"&&!b||g==="option"&&b!==h[c])&&It(e,c,b,h[c],r),c="checked",u!==void 0&&u!==e[c]&&It(e,c,u,h[c],r))}return e}function _n(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){L.__e(r,n)}}function jo(e,t,n){var o,r;if(L.unmount&&L.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||_n(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){L.__e(a,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&jo(o[r],t,n||typeof e.type!="function");n||vn(e.__e),e.__c=e.__=e.__e=void 0}function Gs(e,t,n){return this.constructor(e,n)}function Je(e,t,n){var o,r,a,s;t===document&&(t=document.documentElement),L.__&&L.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,a=[],s=[],bn(t,e=(!o&&n||t).__k=ee(oe,null,[e]),r||vt,vt,t.namespaceURI,!o&&n?[n]:r?null:t.firstChild?Ie.call(t.childNodes):null,a,!o&&n?n:r?r.__e:t.firstChild,o,s),Io(a,e,s)}function Do(e,t){Je(e,t,Do)}function Ks(e,t,n){var o,r,a,s,i=ke({},e.props);for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)a=="key"?o=t[a]:a=="ref"?r=t[a]:i[a]=t[a]===void 0&&s!==void 0?s[a]:t[a];return arguments.length>2&&(i.children=arguments.length>3?Ie.call(arguments,2):n),gt(e.type,i,o||e.key,r||e.ref,null)}function Ae(e,t){var n={__c:t="__cC"+Mo++,__:e,Consumer:function(o,r){return o.children(r)},Provider:function(o){var r,a;return this.getChildContext||(r=new Set,(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&r.forEach(function(i){i.__e=!0,gn(i)})},this.sub=function(s){r.add(s);var i=s.componentWillUnmount;s.componentWillUnmount=function(){r&&r.delete(s),i&&i.call(s)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}Ie=Po.slice,L={__e:function(e,t,n,o){for(var r,a,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),s=r.__d),s)return r.__E=r}catch(i){e=i}throw e}},ko=0,pe.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ke({},this.state),typeof e=="function"&&(e=e(ke({},n),this.props)),e&&ke(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),gn(this))},pe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),gn(this))},pe.prototype.render=oe,Ze=[],Ao=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pn=function(e,t){return e.__v.__b-t.__v.__b},Ot.__r=0,Co=/(PointerCapture)$|Capture$/i,fn=0,mn=Oo(!1),hn=Oo(!0),Mo=0;var Xs=0;function _(e,t,n,o,r,a){t||(t={});var s,i,l=t;"ref"in t&&(s=t.ref,delete t.ref);var c={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Xs,__i:-1,__u:0,__source:r,__self:a};if(typeof e=="function"&&(s=e.defaultProps))for(i in s)l[i]===void 0&&(l[i]=s[i]);return L.vnode&&L.vnode(c),c}var Ce,V,yn,Bo,Qe=0,Fo=[],Q=L,$o=Q.__b,qo=Q.__r,Wo=Q.diffed,zo=Q.__c,Ho=Q.unmount,Zo=Q.__;function Ve(e,t){Q.__h&&Q.__h(V,e,Qe||t),Qe=0;var n=V.__H||(V.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function M(e){return Qe=1,bt(Uo,e)}function bt(e,t,n){var o=Ve(Ce++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Uo(void 0,t),function(i){var l=o.__N?o.__N[0]:o.__[0],c=o.t(l,i);l!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=V,!V.u)){var r=function(i,l,c){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(m){return!!m.__c});if(p.every(function(m){return!m.__N}))return!a||a.call(this,i,l,c);var d=o.__c.props!==i;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(d=!0)}}),a&&a.call(this,i,l,c)||d};V.u=!0;var a=V.shouldComponentUpdate,s=V.componentWillUpdate;V.componentWillUpdate=function(i,l,c){if(this.__e){var p=a;a=void 0,r(i,l,c),a=p}s&&s.call(this,i,l,c)},V.shouldComponentUpdate=r}return o.__N||o.__}function j(e,t){var n=Ve(Ce++,3);!Q.__s&&An(n.__H,t)&&(n.__=e,n.i=t,V.__H.__h.push(n))}function Me(e,t){var n=Ve(Ce++,4);!Q.__s&&An(n.__H,t)&&(n.__=e,n.i=t,V.__h.push(n))}function T(e){return Qe=5,ne(function(){return{current:e}},[])}function wn(e,t,n){Qe=6,Me(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ne(e,t){var n=Ve(Ce++,7);return An(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function z(e,t){return Qe=8,ne(function(){return e},t)}function Pe(e){var t=V.context[e.__c],n=Ve(Ce++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(V)),t.props.value):e.__}function xn(e,t){Q.useDebugValue&&Q.useDebugValue(t?t(e):e)}function Ys(e){var t=Ve(Ce++,10),n=M();return t.__=e,V.componentDidCatch||(V.componentDidCatch=function(o,r){t.__&&t.__(o,r),n[1](o)}),[n[0],function(){n[1](void 0)}]}function kn(){var e=Ve(Ce++,11);if(!e.__){for(var t=V.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Js(){for(var e;e=Fo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(jt),e.__H.__h.forEach(Sn),e.__H.__h=[]}catch(t){e.__H.__h=[],Q.__e(t,e.__v)}}Q.__b=function(e){V=null,$o&&$o(e)},Q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Zo&&Zo(e,t)},Q.__r=function(e){qo&&qo(e),Ce=0;var t=(V=e.__c).__H;t&&(yn===V?(t.__h=[],V.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(jt),t.__h.forEach(Sn),t.__h=[],Ce=0)),yn=V},Q.diffed=function(e){Wo&&Wo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Fo.push(t)!==1&&Bo===Q.requestAnimationFrame||((Bo=Q.requestAnimationFrame)||Qs)(Js)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),yn=V=null},Q.__c=function(e,t){t.some(function(n){try{n.__h.forEach(jt),n.__h=n.__h.filter(function(o){return!o.__||Sn(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],Q.__e(o,n.__v)}}),zo&&zo(e,t)},Q.unmount=function(e){Ho&&Ho(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{jt(o)}catch(r){t=r}}),n.__H=void 0,t&&Q.__e(t,n.__v))};var Vo=typeof requestAnimationFrame=="function";function Qs(e){var t,n=function(){clearTimeout(o),Vo&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Vo&&(t=requestAnimationFrame(n))}function jt(e){var t=V,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),V=t}function Sn(e){var t=V;e.__c=e.__(),V=t}function An(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Uo(e,t){return typeof t=="function"?t(e):t}function Cn(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function Mn(e,t){var n=t(),o=M({t:{__:n,u:t}}),r=o[0].t,a=o[1];return Me(function(){r.__=n,r.u=t,Pn(r)&&a({t:r})},[e,n,t]),j(function(){return Pn(r)&&a({t:r}),e(function(){Pn(r)&&a({t:r})})},[e]),n}function Pn(e){var t,n,o=e.u,r=e.__;try{var a=o();return!((t=r)===(n=a)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function En(e){e()}function Nn(e){return e}function Tn(){return[!1,En]}var Ln=Me;function Dt(e,t){this.props=e,this.context=t}function Go(e,t){function n(r){var a=this.props.ref,s=a==r.ref;return!s&&a&&(a.call?a(null):a.current=null),t?!t(this.props,r)||!s:Cn(this.props,r)}function o(r){return this.shouldComponentUpdate=n,ee(e,r)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(Dt.prototype=new pe).isPureReactComponent=!0,Dt.prototype.shouldComponentUpdate=function(e,t){return Cn(this.props,e)||Cn(this.state,t)};var Ko=L.__b;L.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ko&&Ko(e)};var ei=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function S(e){function t(n){if(!("ref"in n))return e(n,null);var o=n.ref;delete n.ref;var r=e(n,o);return n.ref=o,r}return t.$$typeof=ei,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Xo=function(e,t){return e==null?null:Se(Se(e).map(t))},ge={map:Xo,forEach:Xo,count:function(e){return e?Se(e).length:0},only:function(e){var t=Se(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Se},ti=L.__e;L.__e=function(e,t,n,o){if(e.then){for(var r,a=t;a=a.__;)if((r=a.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}ti(e,t,n,o)};var Yo=L.unmount;function Jo(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=function(o,r){for(var a in r)o[a]=r[a];return o}({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return Jo(o,t,n)})),e}function Qo(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Qo(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function _t(){this.__u=0,this.o=null,this.__b=null}function er(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function tr(e){var t,n,o;function r(a){if(t||(t=e()).then(function(s){n=s.default||s},function(s){o=s}),o)throw o;if(!n)throw t;return ee(n,a)}return r.displayName="Lazy",r.__f=!0,r}function et(){this.i=null,this.l=null}L.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Yo&&Yo(e)},(_t.prototype=new pe).__c=function(e,t){var n=t.__c,o=this;o.o==null&&(o.o=[]),o.o.push(n);var r=er(o.__v),a=!1,s=function(){a||(a=!0,n.__R=null,r?r(i):i())};n.__R=s;var i=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=Qo(l,l.__c.__P,l.__c.__O)}var c;for(o.setState({__a:o.__b=null});c=o.o.pop();)c.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(s,s)},_t.prototype.componentWillUnmount=function(){this.o=[]},_t.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Jo(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&ee(oe,null,e.fallback);return r&&(r.__u&=-33),[ee(oe,null,t.__a?null:e.children),r]};var nr=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function ni(e){return this.getChildContext=function(){return e.context},e.children}function oi(e){var t=this,n=e.h;t.componentWillUnmount=function(){Je(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(o){this.childNodes.push(o),t.h.appendChild(o)},insertBefore:function(o,r){this.childNodes.push(o),t.h.insertBefore(o,r)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),t.h.removeChild(o)}}),Je(ee(ni,{context:t.context},e.__v),t.v)}function Bt(e,t){var n=ee(oi,{__v:e,h:t});return n.containerInfo=t,n}(et.prototype=new pe).__a=function(e){var t=this,n=er(t.__v),o=t.l.get(e);return o[0]++,function(r){var a=function(){t.props.revealOrder?(o.push(r),nr(t,e,o)):r()};n?n(a):a()}},et.prototype.render=function(e){this.i=null,this.l=new Map;var t=Se(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},et.prototype.componentDidUpdate=et.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){nr(e,n,t)})};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ri=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ai=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,si=/[A-Z0-9]/g,ii=typeof document<"u",li=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function rr(e,t,n){return t.__k==null&&(t.textContent=""),Je(e,t),typeof n=="function"&&n(),e?e.__c:null}function ar(e,t,n){return Do(e,t),typeof n=="function"&&n(),e?e.__c:null}pe.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(pe.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var sr=L.event;function ci(){}function di(){return this.cancelBubble}function ui(){return this.defaultPrevented}L.event=function(e){return sr&&(e=sr(e)),e.persist=ci,e.isPropagationStopped=di,e.isDefaultPrevented=ui,e.nativeEvent=e};var Rn,pi={enumerable:!1,configurable:!0,get:function(){return this.class}},ir=L.vnode;L.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={},a=o.indexOf("-")===-1;for(var s in n){var i=n[s];if(!(s==="value"&&"defaultValue"in n&&i==null||ii&&s==="children"&&o==="noscript"||s==="class"||s==="className")){var l=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&i===!0?i="":l==="translate"&&i==="no"?i=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?s="ondblclick":l!=="onchange"||o!=="input"&&o!=="textarea"||li(n.type)?l==="onfocus"?s="onfocusin":l==="onblur"?s="onfocusout":ai.test(s)&&(s=l):l=s="oninput":a&&ri.test(s)?s=s.replace(si,"-$&").toLowerCase():i===null&&(i=void 0),l==="oninput"&&r[s=l]&&(s="oninputCapture"),r[s]=i}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Se(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=Se(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",pi)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=or,ir&&ir(e)};var lr=L.__r;L.__r=function(e){lr&&lr(e),Rn=e.__c};var cr=L.diffed;L.diffed=function(e){cr&&cr(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Rn=null};var dr={ReactCurrentDispatcher:{current:{readContext:function(e){return Rn.__n[e.__c].props.value},useCallback:z,useContext:Pe,useDebugValue:xn,useDeferredValue:Nn,useEffect:j,useId:kn,useImperativeHandle:wn,useInsertionEffect:Ln,useLayoutEffect:Me,useMemo:ne,useReducer:bt,useRef:T,useState:M,useSyncExternalStore:Mn,useTransition:Tn}}},fi="18.3.1";function ur(e){return ee.bind(null,e)}function Ee(e){return!!e&&e.$$typeof===or}function pr(e){return Ee(e)&&e.type===oe}function fr(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function tt(e){return Ee(e)?Ks.apply(null,arguments):e}function mr(e){return!!e.__k&&(Je(null,e),!0)}function hr(e){return e&&(e.base||e.nodeType===1&&e)||null}var vr=function(e,t){return e(t)},Ft=function(e,t){return e(t)},gr=oe,br=Ee,Ne={useState:M,useId:kn,useReducer:bt,useEffect:j,useLayoutEffect:Me,useInsertionEffect:Ln,useTransition:Tn,useDeferredValue:Nn,useSyncExternalStore:Mn,startTransition:En,useRef:T,useImperativeHandle:wn,useMemo:ne,useCallback:z,useContext:Pe,useDebugValue:xn,version:"18.3.1",Children:ge,render:rr,hydrate:ar,unmountComponentAtNode:mr,createPortal:Bt,createElement:ee,createContext:Ae,createFactory:ur,cloneElement:tt,createRef:Eo,Fragment:oe,isValidElement:Ee,isElement:br,isFragment:pr,isMemo:fr,findDOMNode:hr,Component:pe,PureComponent:Dt,memo:Go,forwardRef:S,flushSync:Ft,unstable_batchedUpdates:vr,StrictMode:gr,Suspense:_t,SuspenseList:et,lazy:tr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dr};const mi=Object.freeze(Object.defineProperty({__proto__:null,Children:ge,Component:pe,Fragment:oe,PureComponent:Dt,StrictMode:gr,Suspense:_t,SuspenseList:et,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dr,cloneElement:tt,createContext:Ae,createElement:ee,createFactory:ur,createPortal:Bt,createRef:Eo,default:Ne,findDOMNode:hr,flushSync:Ft,forwardRef:S,hydrate:ar,isElement:br,isFragment:pr,isMemo:fr,isValidElement:Ee,lazy:tr,memo:Go,render:rr,startTransition:En,unmountComponentAtNode:mr,unstable_batchedUpdates:vr,useCallback:z,useContext:Pe,useDebugValue:xn,useDeferredValue:Nn,useEffect:j,useErrorBoundary:Ys,useId:kn,useImperativeHandle:wn,useInsertionEffect:Ln,useLayoutEffect:Me,useMemo:ne,useReducer:bt,useRef:T,useState:M,useSyncExternalStore:Mn,useTransition:Tn,version:fi},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_r=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=S(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:r="",children:a,iconNode:s,...i},l)=>ee("svg",{ref:l,...vi,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:_r("lucide",r),...i},[...s.map(([c,p])=>ee(c,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(e,t)=>{const n=S(({className:o,...r},a)=>ee(gi,{ref:a,iconNode:t,className:_r(`lucide-${hi(e)}`,o),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=yt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=yt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=yt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=yt("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=yt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function G(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function xi(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function wr(...e){return t=>e.forEach(n=>xi(n,t))}function te(...e){return z(wr(...e),e)}function ki(e,t){const n=Ae(t),o=a=>{const{children:s,...i}=a,l=ne(()=>i,Object.values(i));return _(n.Provider,{value:l,children:s})};o.displayName=e+"Provider";function r(a){const s=Pe(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[o,r]}function xr(e,t=[]){let n=[];function o(a,s){const i=Ae(s),l=n.length;n=[...n,s];const c=d=>{var v;const{scope:m,children:f,...b}=d,u=((v=m==null?void 0:m[e])==null?void 0:v[l])||i,h=ne(()=>b,Object.values(b));return _(u.Provider,{value:h,children:f})};c.displayName=a+"Provider";function p(d,m){var u;const f=((u=m==null?void 0:m[e])==null?void 0:u[l])||i,b=Pe(f);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[c,p]}const r=()=>{const a=n.map(s=>Ae(s));return function(i){const l=(i==null?void 0:i[e])||a;return ne(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[o,Si(r,...t)]}function Si(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=o.reduce((i,{useScope:l,scopeName:c})=>{const d=l(a)[`__scope${c}`];return{...i,...d}},{});return ne(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var ie=globalThis!=null&&globalThis.document?Me:()=>{},Ai=mi.useId||(()=>{}),Ci=0;function nt(e){const[t,n]=M(Ai());return ie(()=>{n(o=>o??String(Ci++))},[e]),t?`radix-${t}`:""}function Te(e){const t=T(e);return j(()=>{t.current=e}),ne(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function On({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=Mi({defaultProp:t,onChange:n}),a=e!==void 0,s=a?e:o,i=Te(n),l=z(c=>{if(a){const d=typeof c=="function"?c(e):c;d!==e&&i(d)}else r(c)},[a,e,r,i]);return[s,l]}function Mi({defaultProp:e,onChange:t}){const n=M(e),[o]=n,r=T(o),a=Te(t);return j(()=>{r.current!==o&&(a(o),r.current=o)},[o,r,a]),n}var ot=S((e,t)=>{const{children:n,...o}=e,r=ge.toArray(n),a=r.find(Ei);if(a){const s=a.props.children,i=r.map(l=>l===a?ge.count(s)>1?ge.only(null):Ee(s)?s.props.children:null:l);return _(In,{...o,ref:t,children:Ee(s)?tt(s,void 0,i):null})}return _(In,{...o,ref:t,children:n})});ot.displayName="Slot";var In=S((e,t)=>{const{children:n,...o}=e;if(Ee(n)){const r=Ti(n);return tt(n,{...Ni(o,n.props),ref:t?wr(t,r):r})}return ge.count(n)>1?ge.only(null):null});In.displayName="SlotClone";var Pi=({children:e})=>_(oe,{children:e});function Ei(e){return Ee(e)&&e.type===Pi}function Ni(e,t){const n={...t};for(const o in t){const r=e[o],a=t[o];/^on[A-Z]/.test(o)?r&&a?n[o]=(...i)=>{a(...i),r(...i)}:r&&(n[o]=r):o==="style"?n[o]={...r,...a}:o==="className"&&(n[o]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function Ti(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Li=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],K=Li.reduce((e,t)=>{const n=S((o,r)=>{const{asChild:a,...s}=o,i=a?ot:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_(i,{...s,ref:r})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Ri(e,t){e&&Ft(()=>e.dispatchEvent(t))}function Oi(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e);j(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var Ii="DismissableLayer",jn="dismissableLayer.update",ji="dismissableLayer.pointerDownOutside",Di="dismissableLayer.focusOutside",kr,Sr=Ae({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Dn=S((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:a,onInteractOutside:s,onDismiss:i,...l}=e,c=Pe(Sr),[p,d]=M(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=M({}),b=te(t,k=>d(k)),u=Array.from(c.layers),[h]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),v=u.indexOf(h),g=p?u.indexOf(p):-1,y=c.layersWithOutsidePointerEventsDisabled.size>0,w=g>=v,x=$i(k=>{const P=k.target,D=[...c.branches].some(B=>B.contains(P));!w||D||(r==null||r(k),s==null||s(k),k.defaultPrevented||i==null||i())},m),C=qi(k=>{const P=k.target;[...c.branches].some(B=>B.contains(P))||(a==null||a(k),s==null||s(k),k.defaultPrevented||i==null||i())},m);return Oi(k=>{g===c.layers.size-1&&(o==null||o(k),!k.defaultPrevented&&i&&(k.preventDefault(),i()))},m),j(()=>{if(p)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(kr=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(p)),c.layers.add(p),Ar(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=kr)}},[p,m,n,c]),j(()=>()=>{p&&(c.layers.delete(p),c.layersWithOutsidePointerEventsDisabled.delete(p),Ar())},[p,c]),j(()=>{const k=()=>f({});return document.addEventListener(jn,k),()=>document.removeEventListener(jn,k)},[]),_(K.div,{...l,ref:b,style:{pointerEvents:y?w?"auto":"none":void 0,...e.style},onFocusCapture:G(e.onFocusCapture,C.onFocusCapture),onBlurCapture:G(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:G(e.onPointerDownCapture,x.onPointerDownCapture)})});Dn.displayName=Ii;var Bi="DismissableLayerBranch",Fi=S((e,t)=>{const n=Pe(Sr),o=T(null),r=te(t,o);return j(()=>{const a=o.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),_(K.div,{...e,ref:r})});Fi.displayName=Bi;function $i(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e),o=T(!1),r=T(()=>{});return j(()=>{const a=i=>{if(i.target&&!o.current){let l=function(){Cr(ji,n,c,{discrete:!0})};const c={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",a),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function qi(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e),o=T(!1);return j(()=>{const r=a=>{a.target&&!o.current&&Cr(Di,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Ar(){const e=new CustomEvent(jn);document.dispatchEvent(e)}function Cr(e,t,n,{discrete:o}){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Ri(r,a):r.dispatchEvent(a)}var Bn="focusScope.autoFocusOnMount",Fn="focusScope.autoFocusOnUnmount",Mr={bubbles:!1,cancelable:!0},Wi="FocusScope",$n=S((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:a,...s}=e,[i,l]=M(null),c=Te(r),p=Te(a),d=T(null),m=te(t,u=>l(u)),f=T({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;j(()=>{if(o){let u=function(y){if(f.paused||!i)return;const w=y.target;i.contains(w)?d.current=w:je(d.current,{select:!0})},h=function(y){if(f.paused||!i)return;const w=y.relatedTarget;w!==null&&(i.contains(w)||je(d.current,{select:!0}))},v=function(y){if(document.activeElement===document.body)for(const x of y)x.removedNodes.length>0&&je(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",h);const g=new MutationObserver(v);return i&&g.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",h),g.disconnect()}}},[o,i,f.paused]),j(()=>{if(i){Nr.add(f);const u=document.activeElement;if(!i.contains(u)){const v=new CustomEvent(Bn,Mr);i.addEventListener(Bn,c),i.dispatchEvent(v),v.defaultPrevented||(zi(Gi(Pr(i)),{select:!0}),document.activeElement===u&&je(i))}return()=>{i.removeEventListener(Bn,c),setTimeout(()=>{const v=new CustomEvent(Fn,Mr);i.addEventListener(Fn,p),i.dispatchEvent(v),v.defaultPrevented||je(u??document.body,{select:!0}),i.removeEventListener(Fn,p),Nr.remove(f)},0)}}},[i,c,p,f]);const b=z(u=>{if(!n&&!o||f.paused)return;const h=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,v=document.activeElement;if(h&&v){const g=u.currentTarget,[y,w]=Hi(g);y&&w?!u.shiftKey&&v===w?(u.preventDefault(),n&&je(y,{select:!0})):u.shiftKey&&v===y&&(u.preventDefault(),n&&je(w,{select:!0})):v===g&&u.preventDefault()}},[n,o,f.paused]);return _(K.div,{tabIndex:-1,...s,ref:m,onKeyDown:b})});$n.displayName=Wi;function zi(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(je(o,{select:t}),document.activeElement!==n)return}function Hi(e){const t=Pr(e),n=Er(t,e),o=Er(t.reverse(),e);return[n,o]}function Pr(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Er(e,t){for(const n of e)if(!Zi(n,{upTo:t}))return n}function Zi(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Vi(e){return e instanceof HTMLInputElement&&"select"in e}function je(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Vi(e)&&t&&e.select()}}var Nr=Ui();function Ui(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Tr(e,t),e.unshift(t)},remove(t){var n;e=Tr(e,t),(n=e[0])==null||n.resume()}}}function Tr(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function Gi(e){return e.filter(t=>t.tagName!=="A")}var Ki="Portal",qn=S((e,t)=>{var i;const{container:n,...o}=e,[r,a]=M(!1);ie(()=>a(!0),[]);const s=n||r&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?Ne.createPortal(_(K.div,{...o,ref:t}),s):null});qn.displayName=Ki;function Xi(e,t){return bt((n,o)=>t[n][o]??n,e)}var $t=e=>{const{present:t,children:n}=e,o=Yi(t),r=typeof n=="function"?n({present:o.isPresent}):ge.only(n),a=te(o.ref,Ji(r));return typeof n=="function"||o.isPresent?tt(r,{ref:a}):null};$t.displayName="Presence";function Yi(e){const[t,n]=M(),o=T({}),r=T(e),a=T("none"),s=e?"mounted":"unmounted",[i,l]=Xi(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return j(()=>{const c=qt(o.current);a.current=i==="mounted"?c:"none"},[i]),ie(()=>{const c=o.current,p=r.current;if(p!==e){const m=a.current,f=qt(c);e?l("MOUNT"):f==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(p&&m!==f?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),ie(()=>{if(t){let c;const p=t.ownerDocument.defaultView??window,d=f=>{const u=qt(o.current).includes(f.animationName);if(f.target===t&&u&&(l("ANIMATION_END"),!r.current)){const h=t.style.animationFillMode;t.style.animationFillMode="forwards",c=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=h)})}},m=f=>{f.target===t&&(a.current=qt(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{p.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:z(c=>{c&&(o.current=getComputedStyle(c)),n(c)},[])}}function qt(e){return(e==null?void 0:e.animationName)||"none"}function Ji(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Wn=0;function Lr(){j(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Rr()),document.body.insertAdjacentElement("beforeend",e[1]??Rr()),Wn++,()=>{Wn===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Wn--}},[])}function Rr(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var be=function(){return be=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},be.apply(this,arguments)};function Or(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function Qi(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,a;o<r;o++)(a||!(o in t))&&(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var Wt="right-scroll-bar-position",zt="width-before-scroll-bar",el="with-scroll-bars-hidden",tl="--removed-body-scroll-bar-size";function zn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function nl(e,t){var n=M(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var r=n.value;r!==o&&(n.value=o,n.callback(o,r))}}}})[0];return n.callback=t,n.facade}var ol=typeof window<"u"?Me:j,Ir=new WeakMap;function rl(e,t){var n=nl(null,function(o){return e.forEach(function(r){return zn(r,o)})});return ol(function(){var o=Ir.get(n);if(o){var r=new Set(o),a=new Set(e),s=n.current;r.forEach(function(i){a.has(i)||zn(i,null)}),a.forEach(function(i){r.has(i)||zn(i,s)})}Ir.set(n,e)},[e]),n}function al(e){return e}function sl(e,t){t===void 0&&(t=al);var n=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,o);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(a){for(o=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){o=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(a),s=n}var l=function(){var p=s;s=[],p.forEach(a)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(p){s.push(p),c()},filter:function(p){return s=s.filter(p),n}}}};return r}function il(e){e===void 0&&(e={});var t=sl(null);return t.options=be({async:!0,ssr:!1},e),t}var jr=function(e){var t=e.sideCar,n=Or(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return ee(o,be({},n))};jr.isSideCarExport=!0;function ll(e,t){return e.useMedium(t),jr}var Dr=il(),Hn=function(){},Ht=S(function(e,t){var n=T(null),o=M({onScrollCapture:Hn,onWheelCapture:Hn,onTouchMoveCapture:Hn}),r=o[0],a=o[1],s=e.forwardProps,i=e.children,l=e.className,c=e.removeScrollBar,p=e.enabled,d=e.shards,m=e.sideCar,f=e.noIsolation,b=e.inert,u=e.allowPinchZoom,h=e.as,v=h===void 0?"div":h,g=e.gapMode,y=Or(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=m,x=rl([n,t]),C=be(be({},y),r);return ee(oe,null,p&&ee(w,{sideCar:Dr,removeScrollBar:c,shards:d,noIsolation:f,inert:b,setCallbacks:a,allowPinchZoom:!!u,lockRef:n,gapMode:g}),s?tt(ge.only(i),be(be({},C),{ref:x})):ee(v,be({},C,{className:l,ref:x}),i))});Ht.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},Ht.classNames={fullWidth:zt,zeroRight:Wt};var cl=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function dl(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=cl();return t&&e.setAttribute("nonce",t),e}function ul(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function pl(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var fl=function(){var e=0,t=null;return{add:function(n){e==0&&(t=dl())&&(ul(t,n),pl(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ml=function(){var e=fl();return function(t,n){j(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Br=function(){var e=ml(),t=function(n){var o=n.styles,r=n.dynamic;return e(o,r),null};return t},hl={left:0,top:0,right:0,gap:0},Zn=function(e){return parseInt(e||"",10)||0},vl=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Zn(n),Zn(o),Zn(r)]},gl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return hl;var t=vl(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},bl=Br(),rt="data-scroll-locked",_l=function(e,t,n,o){var r=e.left,a=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(el,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(i,"px ").concat(o,`;
  }
  body[`).concat(rt,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Wt,` {
    right: `).concat(i,"px ").concat(o,`;
  }
  
  .`).concat(zt,` {
    margin-right: `).concat(i,"px ").concat(o,`;
  }
  
  .`).concat(Wt," .").concat(Wt,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(zt," .").concat(zt,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(rt,`] {
    `).concat(tl,": ").concat(i,`px;
  }
`)},Fr=function(){var e=parseInt(document.body.getAttribute(rt)||"0",10);return isFinite(e)?e:0},yl=function(){j(function(){return document.body.setAttribute(rt,(Fr()+1).toString()),function(){var e=Fr()-1;e<=0?document.body.removeAttribute(rt):document.body.setAttribute(rt,e.toString())}},[])},wl=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;yl();var a=ne(function(){return gl(r)},[r]);return ee(bl,{styles:_l(a,!t,r,n?"":"!important")})},Vn=!1;if(typeof window<"u")try{var Zt=Object.defineProperty({},"passive",{get:function(){return Vn=!0,!0}});window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Vn=!1}var at=Vn?{passive:!1}:!1,xl=function(e){return e.tagName==="TEXTAREA"},$r=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!xl(e)&&n[t]==="visible")},kl=function(e){return $r(e,"overflowY")},Sl=function(e){return $r(e,"overflowX")},qr=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Wr(e,o);if(r){var a=zr(e,o),s=a[1],i=a[2];if(s>i)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},Al=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},Cl=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},Wr=function(e,t){return e==="v"?kl(t):Sl(t)},zr=function(e,t){return e==="v"?Al(t):Cl(t)},Ml=function(e,t){return e==="h"&&t==="rtl"?-1:1},Pl=function(e,t,n,o,r){var a=Ml(e,window.getComputedStyle(t).direction),s=a*o,i=n.target,l=t.contains(i),c=!1,p=s>0,d=0,m=0;do{var f=zr(e,i),b=f[0],u=f[1],h=f[2],v=u-h-a*b;(b||v)&&Wr(e,i)&&(d+=v,m+=b),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return(p&&(Math.abs(d)<1||!r)||!p&&(Math.abs(m)<1||!r))&&(c=!0),c},Vt=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Hr=function(e){return[e.deltaX,e.deltaY]},Zr=function(e){return e&&"current"in e?e.current:e},El=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Nl=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Tl=0,st=[];function Ll(e){var t=T([]),n=T([0,0]),o=T(),r=M(Tl++)[0],a=M(Br)[0],s=T(e);j(function(){s.current=e},[e]),j(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var u=Qi([e.lockRef.current],(e.shards||[]).map(Zr),!0).filter(Boolean);return u.forEach(function(h){return h.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),u.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var i=z(function(u,h){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!s.current.allowPinchZoom;var v=Vt(u),g=n.current,y="deltaX"in u?u.deltaX:g[0]-v[0],w="deltaY"in u?u.deltaY:g[1]-v[1],x,C=u.target,k=Math.abs(y)>Math.abs(w)?"h":"v";if("touches"in u&&k==="h"&&C.type==="range")return!1;var P=qr(k,C);if(!P)return!0;if(P?x=k:(x=k==="v"?"h":"v",P=qr(k,C)),!P)return!1;if(!o.current&&"changedTouches"in u&&(y||w)&&(o.current=x),!x)return!0;var D=o.current||x;return Pl(D,h,u,D==="h"?y:w,!0)},[]),l=z(function(u){var h=u;if(!(!st.length||st[st.length-1]!==a)){var v="deltaY"in h?Hr(h):Vt(h),g=t.current.filter(function(x){return x.name===h.type&&(x.target===h.target||h.target===x.shadowParent)&&El(x.delta,v)})[0];if(g&&g.should){h.cancelable&&h.preventDefault();return}if(!g){var y=(s.current.shards||[]).map(Zr).filter(Boolean).filter(function(x){return x.contains(h.target)}),w=y.length>0?i(h,y[0]):!s.current.noIsolation;w&&h.cancelable&&h.preventDefault()}}},[]),c=z(function(u,h,v,g){var y={name:u,delta:h,target:v,should:g,shadowParent:Rl(v)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(w){return w!==y})},1)},[]),p=z(function(u){n.current=Vt(u),o.current=void 0},[]),d=z(function(u){c(u.type,Hr(u),u.target,i(u,e.lockRef.current))},[]),m=z(function(u){c(u.type,Vt(u),u.target,i(u,e.lockRef.current))},[]);j(function(){return st.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:m}),document.addEventListener("wheel",l,at),document.addEventListener("touchmove",l,at),document.addEventListener("touchstart",p,at),function(){st=st.filter(function(u){return u!==a}),document.removeEventListener("wheel",l,at),document.removeEventListener("touchmove",l,at),document.removeEventListener("touchstart",p,at)}},[]);var f=e.removeScrollBar,b=e.inert;return ee(oe,null,b?ee(a,{styles:Nl(r)}):null,f?ee(wl,{gapMode:e.gapMode}):null)}function Rl(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ol=ll(Dr,Ll);var Un=S(function(e,t){return ee(Ht,be({},e,{ref:t,sideCar:Ol}))});Un.classNames=Ht.classNames;var Il=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},it=new WeakMap,Ut=new WeakMap,Gt={},Gn=0,Vr=function(e){return e&&(e.host||Vr(e.parentNode))},jl=function(e,t){return t.map(function(n){if(e.contains(n))return n;var o=Vr(n);return o&&e.contains(o)?o:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Dl=function(e,t,n,o){var r=jl(t,Array.isArray(e)?e:[e]);Gt[n]||(Gt[n]=new WeakMap);var a=Gt[n],s=[],i=new Set,l=new Set(r),c=function(d){!d||i.has(d)||(i.add(d),c(d.parentNode))};r.forEach(c);var p=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(m){if(i.has(m))p(m);else try{var f=m.getAttribute(o),b=f!==null&&f!=="false",u=(it.get(m)||0)+1,h=(a.get(m)||0)+1;it.set(m,u),a.set(m,h),s.push(m),u===1&&b&&Ut.set(m,!0),h===1&&m.setAttribute(n,"true"),b||m.setAttribute(o,"true")}catch(v){console.error("aria-hidden: cannot operate on ",m,v)}})};return p(t),i.clear(),Gn++,function(){s.forEach(function(d){var m=it.get(d)-1,f=a.get(d)-1;it.set(d,m),a.set(d,f),m||(Ut.has(d)||d.removeAttribute(o),Ut.delete(d)),f||d.removeAttribute(n)}),Gn--,Gn||(it=new WeakMap,it=new WeakMap,Ut=new WeakMap,Gt={})}},Ur=function(e,t,n){n===void 0&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=Il(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live]"))),Dl(o,r,n,"aria-hidden")):function(){return null}},Kn="Dialog",[Gr,Nu]=xr(Kn),[Bl,fe]=Gr(Kn),Kr=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:a,modal:s=!0}=e,i=T(null),l=T(null),[c=!1,p]=On({prop:o,defaultProp:r,onChange:a});return _(Bl,{scope:t,triggerRef:i,contentRef:l,contentId:nt(),titleId:nt(),descriptionId:nt(),open:c,onOpenChange:p,onOpenToggle:z(()=>p(d=>!d),[p]),modal:s,children:n})};Kr.displayName=Kn;var Xr="DialogTrigger",Fl=S((e,t)=>{const{__scopeDialog:n,...o}=e,r=fe(Xr,n),a=te(t,r.triggerRef);return _(K.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Jn(r.open),...o,ref:a,onClick:G(e.onClick,r.onOpenToggle)})});Fl.displayName=Xr;var Xn="DialogPortal",[$l,Yr]=Gr(Xn,{forceMount:void 0}),Jr=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:r}=e,a=fe(Xn,t);return _($l,{scope:t,forceMount:n,children:ge.map(o,s=>_($t,{present:n||a.open,children:_(qn,{asChild:!0,container:r,children:s})}))})};Jr.displayName=Xn;var Kt="DialogOverlay",Qr=S((e,t)=>{const n=Yr(Kt,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=fe(Kt,e.__scopeDialog);return a.modal?_($t,{present:o||a.open,children:_(ql,{...r,ref:t})}):null});Qr.displayName=Kt;var ql=S((e,t)=>{const{__scopeDialog:n,...o}=e,r=fe(Kt,n);return _(Un,{as:ot,allowPinchZoom:!0,shards:[r.contentRef],children:_(K.div,{"data-state":Jn(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),Ue="DialogContent",ea=S((e,t)=>{const n=Yr(Ue,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=fe(Ue,e.__scopeDialog);return _($t,{present:o||a.open,children:a.modal?_(Wl,{...r,ref:t}):_(zl,{...r,ref:t})})});ea.displayName=Ue;var Wl=S((e,t)=>{const n=fe(Ue,e.__scopeDialog),o=T(null),r=te(t,n.contentRef,o);return j(()=>{const a=o.current;if(a)return Ur(a)},[]),_(ta,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:G(e.onCloseAutoFocus,a=>{var s;a.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:G(e.onPointerDownOutside,a=>{const s=a.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&a.preventDefault()}),onFocusOutside:G(e.onFocusOutside,a=>a.preventDefault())})}),zl=S((e,t)=>{const n=fe(Ue,e.__scopeDialog),o=T(!1),r=T(!1);return _(ta,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(o.current||(i=n.triggerRef.current)==null||i.focus(),a.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:a=>{var l,c;(l=e.onInteractOutside)==null||l.call(e,a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const s=a.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),ta=S((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:a,...s}=e,i=fe(Ue,n),l=T(null),c=te(t,l);return Lr(),_(oe,{children:[_($n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:a,children:_(Dn,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Jn(i.open),...s,ref:c,onDismiss:()=>i.onOpenChange(!1)})}),_(oe,{children:[_(Hl,{titleId:i.titleId}),_(Vl,{contentRef:l,descriptionId:i.descriptionId})]})]})}),Yn="DialogTitle",na=S((e,t)=>{const{__scopeDialog:n,...o}=e,r=fe(Yn,n);return _(K.h2,{id:r.titleId,...o,ref:t})});na.displayName=Yn;var oa="DialogDescription",ra=S((e,t)=>{const{__scopeDialog:n,...o}=e,r=fe(oa,n);return _(K.p,{id:r.descriptionId,...o,ref:t})});ra.displayName=oa;var aa="DialogClose",sa=S((e,t)=>{const{__scopeDialog:n,...o}=e,r=fe(aa,n);return _(K.button,{type:"button",...o,ref:t,onClick:G(e.onClick,()=>r.onOpenChange(!1))})});sa.displayName=aa;function Jn(e){return e?"open":"closed"}var ia="DialogTitleWarning",[Tu,la]=ki(ia,{contentName:Ue,titleName:Yn,docsSlug:"dialog"}),Hl=({titleId:e})=>{const t=la(ia),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return j(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Zl="DialogDescriptionWarning",Vl=({contentRef:e,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${la(Zl).contentName}}.`;return j(()=>{var a;const r=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(o))},[o,e,t]),null},Ul=Kr,Gl=Jr,ca=Qr,da=ea,ua=na,pa=ra,Kl=sa;function fa(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=fa(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Xl(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=fa(e))&&(o&&(o+=" "),o+=t);return o}const Qn="-",Yl=e=>{const t=Ql(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:s=>{const i=s.split(Qn);return i[0]===""&&i.length!==1&&i.shift(),ma(i,t)||Jl(s)},getConflictingClassGroupIds:(s,i)=>{const l=n[s]||[];return i&&o[s]?[...l,...o[s]]:l}}},ma=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],o=t.nextPart.get(n),r=o?ma(e.slice(1),o):void 0;if(r)return r;if(t.validators.length===0)return;const a=e.join(Qn);return(s=t.validators.find(({validator:i})=>i(a)))==null?void 0:s.classGroupId},ha=/^\[(.+)\]$/,Jl=e=>{if(ha.test(e)){const t=ha.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ql=e=>{const{theme:t,prefix:n}=e,o={nextPart:new Map,validators:[]};return tc(Object.entries(e.classGroups),n).forEach(([a,s])=>{eo(s,o,a,t)}),o},eo=(e,t,n,o)=>{e.forEach(r=>{if(typeof r=="string"){const a=r===""?t:va(t,r);a.classGroupId=n;return}if(typeof r=="function"){if(ec(r)){eo(r(o),t,n,o);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([a,s])=>{eo(s,va(t,a),n,o)})})},va=(e,t)=>{let n=e;return t.split(Qn).forEach(o=>{n.nextPart.has(o)||n.nextPart.set(o,{nextPart:new Map,validators:[]}),n=n.nextPart.get(o)}),n},ec=e=>e.isThemeGetter,tc=(e,t)=>t?e.map(([n,o])=>{const r=o.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([s,i])=>[t+s,i])):a);return[n,r]}):e,nc=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,o=new Map;const r=(a,s)=>{n.set(a,s),t++,t>e&&(t=0,o=n,n=new Map)};return{get(a){let s=n.get(a);if(s!==void 0)return s;if((s=o.get(a))!==void 0)return r(a,s),s},set(a,s){n.has(a)?n.set(a,s):r(a,s)}}},ga="!",oc=e=>{const{separator:t,experimentalParseClassName:n}=e,o=t.length===1,r=t[0],a=t.length,s=i=>{const l=[];let c=0,p=0,d;for(let h=0;h<i.length;h++){let v=i[h];if(c===0){if(v===r&&(o||i.slice(h,h+a)===t)){l.push(i.slice(p,h)),p=h+a;continue}if(v==="/"){d=h;continue}}v==="["?c++:v==="]"&&c--}const m=l.length===0?i:i.substring(p),f=m.startsWith(ga),b=f?m.substring(1):m,u=d&&d>p?d-p:void 0;return{modifiers:l,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:u}};return n?i=>n({className:i,parseClassName:s}):s},rc=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(o=>{o[0]==="["?(t.push(...n.sort(),o),n=[]):n.push(o)}),t.push(...n.sort()),t},ac=e=>({cache:nc(e.cacheSize),parseClassName:oc(e),...Yl(e)}),sc=/\s+/,ic=(e,t)=>{const{parseClassName:n,getClassGroupId:o,getConflictingClassGroupIds:r}=t,a=[],s=e.trim().split(sc);let i="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:p,hasImportantModifier:d,baseClassName:m,maybePostfixModifierPosition:f}=n(c);let b=!!f,u=o(b?m.substring(0,f):m);if(!u){if(!b){i=c+(i.length>0?" "+i:i);continue}if(u=o(m),!u){i=c+(i.length>0?" "+i:i);continue}b=!1}const h=rc(p).join(":"),v=d?h+ga:h,g=v+u;if(a.includes(g))continue;a.push(g);const y=r(u,b);for(let w=0;w<y.length;++w){const x=y[w];a.push(v+x)}i=c+(i.length>0?" "+i:i)}return i};function lc(){let e=0,t,n,o="";for(;e<arguments.length;)(t=arguments[e++])&&(n=ba(t))&&(o&&(o+=" "),o+=n);return o}const ba=e=>{if(typeof e=="string")return e;let t,n="";for(let o=0;o<e.length;o++)e[o]&&(t=ba(e[o]))&&(n&&(n+=" "),n+=t);return n};function cc(e,...t){let n,o,r,a=s;function s(l){const c=t.reduce((p,d)=>d(p),e());return n=ac(c),o=n.cache.get,r=n.cache.set,a=i,i(l)}function i(l){const c=o(l);if(c)return c;const p=ic(l,n);return r(l,p),p}return function(){return a(lc.apply(null,arguments))}}const X=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},_a=/^\[(?:([a-z-]+):)?(.+)\]$/i,dc=/^\d+\/\d+$/,uc=new Set(["px","full","screen"]),pc=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fc=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,mc=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,hc=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vc=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Le=e=>lt(e)||uc.has(e)||dc.test(e),De=e=>ct(e,"length",Sc),lt=e=>!!e&&!Number.isNaN(Number(e)),to=e=>ct(e,"number",lt),wt=e=>!!e&&Number.isInteger(Number(e)),gc=e=>e.endsWith("%")&&lt(e.slice(0,-1)),R=e=>_a.test(e),Be=e=>pc.test(e),bc=new Set(["length","size","percentage"]),_c=e=>ct(e,bc,ya),yc=e=>ct(e,"position",ya),wc=new Set(["image","url"]),xc=e=>ct(e,wc,Cc),kc=e=>ct(e,"",Ac),xt=()=>!0,ct=(e,t,n)=>{const o=_a.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):n(o[2]):!1},Sc=e=>fc.test(e)&&!mc.test(e),ya=()=>!1,Ac=e=>hc.test(e),Cc=e=>vc.test(e),Mc=cc(()=>{const e=X("colors"),t=X("spacing"),n=X("blur"),o=X("brightness"),r=X("borderColor"),a=X("borderRadius"),s=X("borderSpacing"),i=X("borderWidth"),l=X("contrast"),c=X("grayscale"),p=X("hueRotate"),d=X("invert"),m=X("gap"),f=X("gradientColorStops"),b=X("gradientColorStopPositions"),u=X("inset"),h=X("margin"),v=X("opacity"),g=X("padding"),y=X("saturate"),w=X("scale"),x=X("sepia"),C=X("skew"),k=X("space"),P=X("translate"),D=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",R,t],A=()=>[R,t],q=()=>["",Le,De],F=()=>["auto",lt,R],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],E=()=>["start","end","center","between","around","evenly","stretch"],W=()=>["","0",R],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[lt,R];return{cacheSize:500,separator:":",theme:{colors:[xt],spacing:[Le,De],blur:["none","",Be,R],brightness:re(),borderColor:[e],borderRadius:["none","","full",Be,R],borderSpacing:A(),borderWidth:q(),contrast:re(),grayscale:W(),hueRotate:re(),invert:W(),gap:A(),gradientColorStops:[e],gradientColorStopPositions:[gc,De],inset:O(),margin:O(),opacity:re(),padding:A(),saturate:re(),scale:re(),sepia:W(),skew:re(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",R]}],container:["container"],columns:[{columns:[Be]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),R]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[u]}],"inset-x":[{"inset-x":[u]}],"inset-y":[{"inset-y":[u]}],start:[{start:[u]}],end:[{end:[u]}],top:[{top:[u]}],right:[{right:[u]}],bottom:[{bottom:[u]}],left:[{left:[u]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",wt,R]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",R]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",wt,R]}],"grid-cols":[{"grid-cols":[xt]}],"col-start-end":[{col:["auto",{span:["full",wt,R]},R]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[xt]}],"row-start-end":[{row:["auto",{span:[wt,R]},R]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",R]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",R]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...E()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...E(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...E(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[k]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[k]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",R,t]}],"min-w":[{"min-w":[R,t,"min","max","fit"]}],"max-w":[{"max-w":[R,t,"none","full","min","max","fit","prose",{screen:[Be]},Be]}],h:[{h:[R,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[R,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[R,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[R,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Be,De]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",to]}],"font-family":[{font:[xt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",R]}],"line-clamp":[{"line-clamp":["none",lt,to]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Le,R]}],"list-image":[{"list-image":["none",R]}],"list-style-type":[{list:["none","disc","decimal",R]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Le,De]}],"underline-offset":[{"underline-offset":["auto",Le,R]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),yc]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_c]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},xc]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:I()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[Le,R]}],"outline-w":[{outline:[Le,De]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[Le,De]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Be,kc]}],"shadow-color":[{shadow:[xt]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Be,R]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",R]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",R]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",R]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[wt,R]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",R]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Le,De,to]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function le(...e){return Mc(Xl(e))}const Pc=Ul,Ec=Gl,wa=S(({className:e,...t},n)=>_(ca,{ref:n,className:le("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));wa.displayName=ca.displayName;const xa=S(({className:e,children:t,...n},o)=>_(Ec,{children:[_(wa,{}),_(da,{ref:o,className:le("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,_(Kl,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[_(wi,{className:"h-4 w-4"}),_("span",{className:"sr-only",children:"Close"})]})]})]}));xa.displayName=da.displayName;const ka=({className:e,...t})=>_("div",{className:le("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});ka.displayName="DialogHeader";const Sa=S(({className:e,...t},n)=>_(ua,{ref:n,className:le("text-lg font-semibold leading-none tracking-tight",e),...t}));Sa.displayName=ua.displayName;const Nc=S(({className:e,...t},n)=>_(pa,{ref:n,className:le("text-sm text-muted-foreground",e),...t}));Nc.displayName=pa.displayName;function Aa(e,[t,n]){return Math.min(n,Math.max(t,e))}function Ca(e,t=[]){let n=[];function o(a,s){const i=Ae(s),l=n.length;n=[...n,s];function c(d){const{scope:m,children:f,...b}=d,u=(m==null?void 0:m[e][l])||i,h=ne(()=>b,Object.values(b));return _(u.Provider,{value:h,children:f})}function p(d,m){const f=(m==null?void 0:m[e][l])||i,b=Pe(f);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return c.displayName=a+"Provider",[c,p]}const r=()=>{const a=n.map(s=>Ae(s));return function(i){const l=(i==null?void 0:i[e])||a;return ne(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[o,Tc(r,...t)]}function Tc(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=o.reduce((i,{useScope:l,scopeName:c})=>{const d=l(a)[`__scope${c}`];return{...i,...d}},{});return ne(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Lc(e){const t=e+"CollectionProvider",[n,o]=Ca(t),[r,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=f=>{const{scope:b,children:u}=f,h=Ne.useRef(null),v=Ne.useRef(new Map).current;return _(r,{scope:b,itemMap:v,collectionRef:h,children:u})};s.displayName=t;const i=e+"CollectionSlot",l=Ne.forwardRef((f,b)=>{const{scope:u,children:h}=f,v=a(i,u),g=te(b,v.collectionRef);return _(ot,{ref:g,children:h})});l.displayName=i;const c=e+"CollectionItemSlot",p="data-radix-collection-item",d=Ne.forwardRef((f,b)=>{const{scope:u,children:h,...v}=f,g=Ne.useRef(null),y=te(b,g),w=a(c,u);return Ne.useEffect(()=>(w.itemMap.set(g,{ref:g,...v}),()=>void w.itemMap.delete(g))),_(ot,{[p]:"",ref:y,children:h})});d.displayName=c;function m(f){const b=a(e+"CollectionConsumer",f);return Ne.useCallback(()=>{const h=b.collectionRef.current;if(!h)return[];const v=Array.from(h.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((w,x)=>v.indexOf(w.ref.current)-v.indexOf(x.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},m,o]}var Rc=Ae(void 0);function Oc(e){const t=Pe(Rc);return e||t||"ltr"}const Ic=["top","right","bottom","left"],Fe=Math.min,ce=Math.max,Xt=Math.round,Yt=Math.floor,_e=e=>({x:e,y:e}),jc={left:"right",right:"left",bottom:"top",top:"bottom"},Dc={start:"end",end:"start"};function no(e,t,n){return ce(e,Fe(t,n))}function Re(e,t){return typeof e=="function"?e(t):e}function Oe(e){return e.split("-")[0]}function dt(e){return e.split("-")[1]}function oo(e){return e==="x"?"y":"x"}function ro(e){return e==="y"?"height":"width"}function $e(e){return["top","bottom"].includes(Oe(e))?"y":"x"}function ao(e){return oo($e(e))}function Bc(e,t,n){n===void 0&&(n=!1);const o=dt(e),r=ao(e),a=ro(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=Jt(s)),[s,Jt(s)]}function Fc(e){const t=Jt(e);return[so(e),t,so(t)]}function so(e){return e.replace(/start|end/g,t=>Dc[t])}function $c(e,t,n){const o=["left","right"],r=["right","left"],a=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?a:s;default:return[]}}function qc(e,t,n,o){const r=dt(e);let a=$c(Oe(e),n==="start",o);return r&&(a=a.map(s=>s+"-"+r),t&&(a=a.concat(a.map(so)))),a}function Jt(e){return e.replace(/left|right|bottom|top/g,t=>jc[t])}function Wc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ma(e){return typeof e!="number"?Wc(e):{top:e,right:e,bottom:e,left:e}}function Qt(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Pa(e,t,n){let{reference:o,floating:r}=e;const a=$e(t),s=ao(t),i=ro(s),l=Oe(t),c=a==="y",p=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,m=o[i]/2-r[i]/2;let f;switch(l){case"top":f={x:p,y:o.y-r.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-r.width,y:d};break;default:f={x:o.x,y:o.y}}switch(dt(t)){case"start":f[s]-=m*(n&&c?-1:1);break;case"end":f[s]+=m*(n&&c?-1:1);break}return f}const zc=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=n,i=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:d}=Pa(c,o,l),m=o,f={},b=0;for(let u=0;u<i.length;u++){const{name:h,fn:v}=i[u],{x:g,y,data:w,reset:x}=await v({x:p,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:f,rects:c,platform:s,elements:{reference:e,floating:t}});p=g??p,d=y??d,f={...f,[h]:{...f[h],...w}},x&&b<=50&&(b++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(c=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):x.rects),{x:p,y:d}=Pa(c,m,l)),u=-1)}return{x:p,y:d,placement:m,strategy:r,middlewareData:f}};async function kt(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:a,rects:s,elements:i,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=Re(t,e),b=Ma(f),h=i[m?d==="floating"?"reference":"floating":d],v=Qt(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(h)))==null||n?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(i.floating)),boundary:c,rootBoundary:p,strategy:l})),g=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,y=await(a.getOffsetParent==null?void 0:a.getOffsetParent(i.floating)),w=await(a.isElement==null?void 0:a.isElement(y))?await(a.getScale==null?void 0:a.getScale(y))||{x:1,y:1}:{x:1,y:1},x=Qt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:g,offsetParent:y,strategy:l}):g);return{top:(v.top-x.top+b.top)/w.y,bottom:(x.bottom-v.bottom+b.bottom)/w.y,left:(v.left-x.left+b.left)/w.x,right:(x.right-v.right+b.right)/w.x}}const Hc=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:a,platform:s,elements:i,middlewareData:l}=t,{element:c,padding:p=0}=Re(e,t)||{};if(c==null)return{};const d=Ma(p),m={x:n,y:o},f=ao(r),b=ro(f),u=await s.getDimensions(c),h=f==="y",v=h?"top":"left",g=h?"bottom":"right",y=h?"clientHeight":"clientWidth",w=a.reference[b]+a.reference[f]-m[f]-a.floating[b],x=m[f]-a.reference[f],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let k=C?C[y]:0;(!k||!await(s.isElement==null?void 0:s.isElement(C)))&&(k=i.floating[y]||a.floating[b]);const P=w/2-x/2,D=k/2-u[b]/2-1,B=Fe(d[v],D),O=Fe(d[g],D),A=B,q=k-u[b]-O,F=k/2-u[b]/2+P,Y=no(A,F,q),I=!l.arrow&&dt(r)!=null&&F!==Y&&a.reference[b]/2-(F<A?B:O)-u[b]/2<0,$=I?F<A?F-A:F-q:0;return{[f]:m[f]+$,data:{[f]:Y,centerOffset:F-Y-$,...I&&{alignmentOffset:$}},reset:I}}}),Zc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:a,rects:s,initialPlacement:i,platform:l,elements:c}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:u=!0,...h}=Re(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const v=Oe(r),g=$e(i),y=Oe(i)===i,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=m||(y||!u?[Jt(i)]:Fc(i)),C=b!=="none";!m&&C&&x.push(...qc(i,u,b,w));const k=[i,...x],P=await kt(t,h),D=[];let B=((o=a.flip)==null?void 0:o.overflows)||[];if(p&&D.push(P[v]),d){const F=Bc(r,s,w);D.push(P[F[0]],P[F[1]])}if(B=[...B,{placement:r,overflows:D}],!D.every(F=>F<=0)){var O,A;const F=(((O=a.flip)==null?void 0:O.index)||0)+1,Y=k[F];if(Y)return{data:{index:F,overflows:B},reset:{placement:Y}};let I=(A=B.filter($=>$.overflows[0]<=0).sort(($,E)=>$.overflows[1]-E.overflows[1])[0])==null?void 0:A.placement;if(!I)switch(f){case"bestFit":{var q;const $=(q=B.filter(E=>{if(C){const W=$e(E.placement);return W===g||W==="y"}return!0}).map(E=>[E.placement,E.overflows.filter(W=>W>0).reduce((W,ae)=>W+ae,0)]).sort((E,W)=>E[1]-W[1])[0])==null?void 0:q[0];$&&(I=$);break}case"initialPlacement":I=i;break}if(r!==I)return{reset:{placement:I}}}return{}}}};function Ea(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Na(e){return Ic.some(t=>e[t]>=0)}const Vc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=Re(e,t);switch(o){case"referenceHidden":{const a=await kt(t,{...r,elementContext:"reference"}),s=Ea(a,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Na(s)}}}case"escaped":{const a=await kt(t,{...r,altBoundary:!0}),s=Ea(a,n.floating);return{data:{escapedOffsets:s,escaped:Na(s)}}}default:return{}}}}};async function Uc(e,t){const{placement:n,platform:o,elements:r}=e,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Oe(n),i=dt(n),l=$e(n)==="y",c=["left","top"].includes(s)?-1:1,p=a&&l?-1:1,d=Re(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return i&&typeof b=="number"&&(f=i==="end"?b*-1:b),l?{x:f*p,y:m*c}:{x:m*c,y:f*p}}const Gc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:a,placement:s,middlewareData:i}=t,l=await Uc(t,e);return s===((n=i.offset)==null?void 0:n.placement)&&(o=i.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:a+l.y,data:{...l,placement:s}}}}},Kc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:i={fn:h=>{let{x:v,y:g}=h;return{x:v,y:g}}},...l}=Re(e,t),c={x:n,y:o},p=await kt(t,l),d=$e(Oe(r)),m=oo(d);let f=c[m],b=c[d];if(a){const h=m==="y"?"top":"left",v=m==="y"?"bottom":"right",g=f+p[h],y=f-p[v];f=no(g,f,y)}if(s){const h=d==="y"?"top":"left",v=d==="y"?"bottom":"right",g=b+p[h],y=b-p[v];b=no(g,b,y)}const u=i.fn({...t,[m]:f,[d]:b});return{...u,data:{x:u.x-n,y:u.y-o,enabled:{[m]:a,[d]:s}}}}}},Xc=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:a,middlewareData:s}=t,{offset:i=0,mainAxis:l=!0,crossAxis:c=!0}=Re(e,t),p={x:n,y:o},d=$e(r),m=oo(d);let f=p[m],b=p[d];const u=Re(i,t),h=typeof u=="number"?{mainAxis:u,crossAxis:0}:{mainAxis:0,crossAxis:0,...u};if(l){const y=m==="y"?"height":"width",w=a.reference[m]-a.floating[y]+h.mainAxis,x=a.reference[m]+a.reference[y]-h.mainAxis;f<w?f=w:f>x&&(f=x)}if(c){var v,g;const y=m==="y"?"width":"height",w=["top","left"].includes(Oe(r)),x=a.reference[d]-a.floating[y]+(w&&((v=s.offset)==null?void 0:v[d])||0)+(w?0:h.crossAxis),C=a.reference[d]+a.reference[y]+(w?0:((g=s.offset)==null?void 0:g[d])||0)-(w?h.crossAxis:0);b<x?b=x:b>C&&(b=C)}return{[m]:f,[d]:b}}}},Yc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:a,platform:s,elements:i}=t,{apply:l=()=>{},...c}=Re(e,t),p=await kt(t,c),d=Oe(r),m=dt(r),f=$e(r)==="y",{width:b,height:u}=a.floating;let h,v;d==="top"||d==="bottom"?(h=d,v=m===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(v=d,h=m==="end"?"top":"bottom");const g=u-p.top-p.bottom,y=b-p.left-p.right,w=Fe(u-p[h],g),x=Fe(b-p[v],y),C=!t.middlewareData.shift;let k=w,P=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=y),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(k=g),C&&!m){const B=ce(p.left,0),O=ce(p.right,0),A=ce(p.top,0),q=ce(p.bottom,0);f?P=b-2*(B!==0||O!==0?B+O:ce(p.left,p.right)):k=u-2*(A!==0||q!==0?A+q:ce(p.top,p.bottom))}await l({...t,availableWidth:P,availableHeight:k});const D=await s.getDimensions(i.floating);return b!==D.width||u!==D.height?{reset:{rects:!0}}:{}}}};function en(){return typeof window<"u"}function ut(e){return Ta(e)?(e.nodeName||"").toLowerCase():"#document"}function de(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ye(e){var t;return(t=(Ta(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ta(e){return en()?e instanceof Node||e instanceof de(e).Node:!1}function me(e){return en()?e instanceof Element||e instanceof de(e).Element:!1}function we(e){return en()?e instanceof HTMLElement||e instanceof de(e).HTMLElement:!1}function La(e){return!en()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof de(e).ShadowRoot}function St(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=he(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Jc(e){return["table","td","th"].includes(ut(e))}function tn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function io(e){const t=lo(),n=me(e)?he(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Qc(e){let t=qe(e);for(;we(t)&&!pt(t);){if(io(t))return t;if(tn(t))return null;t=qe(t)}return null}function lo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(e){return["html","body","#document"].includes(ut(e))}function he(e){return de(e).getComputedStyle(e)}function nn(e){return me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function qe(e){if(ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||La(e)&&e.host||ye(e);return La(t)?t.host:t}function Ra(e){const t=qe(e);return pt(t)?e.ownerDocument?e.ownerDocument.body:e.body:we(t)&&St(t)?t:Ra(t)}function At(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Ra(e),a=r===((o=e.ownerDocument)==null?void 0:o.body),s=de(r);if(a){const i=co(s);return t.concat(s,s.visualViewport||[],St(r)?r:[],i&&n?At(i):[])}return t.concat(r,At(r,[],n))}function co(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Oa(e){const t=he(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=we(e),a=r?e.offsetWidth:n,s=r?e.offsetHeight:o,i=Xt(n)!==a||Xt(o)!==s;return i&&(n=a,o=s),{width:n,height:o,$:i}}function uo(e){return me(e)?e:e.contextElement}function ft(e){const t=uo(e);if(!we(t))return _e(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:a}=Oa(t);let s=(a?Xt(n.width):n.width)/o,i=(a?Xt(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const ed=_e(0);function Ia(e){const t=de(e);return!lo()||!t.visualViewport?ed:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function td(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==de(e)?!1:t}function Ge(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),a=uo(e);let s=_e(1);t&&(o?me(o)&&(s=ft(o)):s=ft(e));const i=td(a,n,o)?Ia(a):_e(0);let l=(r.left+i.x)/s.x,c=(r.top+i.y)/s.y,p=r.width/s.x,d=r.height/s.y;if(a){const m=de(a),f=o&&me(o)?de(o):o;let b=m,u=co(b);for(;u&&o&&f!==b;){const h=ft(u),v=u.getBoundingClientRect(),g=he(u),y=v.left+(u.clientLeft+parseFloat(g.paddingLeft))*h.x,w=v.top+(u.clientTop+parseFloat(g.paddingTop))*h.y;l*=h.x,c*=h.y,p*=h.x,d*=h.y,l+=y,c+=w,b=de(u),u=co(b)}}return Qt({width:p,height:d,x:l,y:c})}function po(e,t){const n=nn(e).scrollLeft;return t?t.left+n:Ge(ye(e)).left+n}function ja(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:po(e,o)),a=o.top+t.scrollTop;return{x:r,y:a}}function nd(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const a=r==="fixed",s=ye(o),i=t?tn(t.floating):!1;if(o===s||i&&a)return n;let l={scrollLeft:0,scrollTop:0},c=_e(1);const p=_e(0),d=we(o);if((d||!d&&!a)&&((ut(o)!=="body"||St(s))&&(l=nn(o)),we(o))){const f=Ge(o);c=ft(o),p.x=f.x+o.clientLeft,p.y=f.y+o.clientTop}const m=s&&!d&&!a?ja(s,l,!0):_e(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+p.x+m.x,y:n.y*c.y-l.scrollTop*c.y+p.y+m.y}}function od(e){return Array.from(e.getClientRects())}function rd(e){const t=ye(e),n=nn(e),o=e.ownerDocument.body,r=ce(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=ce(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+po(e);const i=-n.scrollTop;return he(o).direction==="rtl"&&(s+=ce(t.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:i}}function ad(e,t){const n=de(e),o=ye(e),r=n.visualViewport;let a=o.clientWidth,s=o.clientHeight,i=0,l=0;if(r){a=r.width,s=r.height;const c=lo();(!c||c&&t==="fixed")&&(i=r.offsetLeft,l=r.offsetTop)}return{width:a,height:s,x:i,y:l}}function sd(e,t){const n=Ge(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,a=we(e)?ft(e):_e(1),s=e.clientWidth*a.x,i=e.clientHeight*a.y,l=r*a.x,c=o*a.y;return{width:s,height:i,x:l,y:c}}function Da(e,t,n){let o;if(t==="viewport")o=ad(e,n);else if(t==="document")o=rd(ye(e));else if(me(t))o=sd(t,n);else{const r=Ia(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Qt(o)}function Ba(e,t){const n=qe(e);return n===t||!me(n)||pt(n)?!1:he(n).position==="fixed"||Ba(n,t)}function id(e,t){const n=t.get(e);if(n)return n;let o=At(e,[],!1).filter(i=>me(i)&&ut(i)!=="body"),r=null;const a=he(e).position==="fixed";let s=a?qe(e):e;for(;me(s)&&!pt(s);){const i=he(s),l=io(s);!l&&i.position==="fixed"&&(r=null),(a?!l&&!r:!l&&i.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||St(s)&&!l&&Ba(e,s))?o=o.filter(p=>p!==s):r=i,s=qe(s)}return t.set(e,o),o}function ld(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?tn(t)?[]:id(t,this._c):[].concat(n),o],i=s[0],l=s.reduce((c,p)=>{const d=Da(t,p,r);return c.top=ce(d.top,c.top),c.right=Fe(d.right,c.right),c.bottom=Fe(d.bottom,c.bottom),c.left=ce(d.left,c.left),c},Da(t,i,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function cd(e){const{width:t,height:n}=Oa(e);return{width:t,height:n}}function dd(e,t,n){const o=we(t),r=ye(t),a=n==="fixed",s=Ge(e,!0,a,t);let i={scrollLeft:0,scrollTop:0};const l=_e(0);if(o||!o&&!a)if((ut(t)!=="body"||St(r))&&(i=nn(t)),o){const m=Ge(t,!0,a,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else r&&(l.x=po(r));const c=r&&!o&&!a?ja(r,i):_e(0),p=s.left+i.scrollLeft-l.x-c.x,d=s.top+i.scrollTop-l.y-c.y;return{x:p,y:d,width:s.width,height:s.height}}function fo(e){return he(e).position==="static"}function Fa(e,t){if(!we(e)||he(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return ye(e)===n&&(n=n.ownerDocument.body),n}function $a(e,t){const n=de(e);if(tn(e))return n;if(!we(e)){let r=qe(e);for(;r&&!pt(r);){if(me(r)&&!fo(r))return r;r=qe(r)}return n}let o=Fa(e,t);for(;o&&Jc(o)&&fo(o);)o=Fa(o,t);return o&&pt(o)&&fo(o)&&!io(o)?n:o||Qc(e)||n}const ud=async function(e){const t=this.getOffsetParent||$a,n=this.getDimensions,o=await n(e.floating);return{reference:dd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function pd(e){return he(e).direction==="rtl"}const fd={convertOffsetParentRelativeRectToViewportRelativeRect:nd,getDocumentElement:ye,getClippingRect:ld,getOffsetParent:$a,getElementRects:ud,getClientRects:od,getDimensions:cd,getScale:ft,isElement:me,isRTL:pd};function md(e,t){let n=null,o;const r=ye(e);function a(){var i;clearTimeout(o),(i=n)==null||i.disconnect(),n=null}function s(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),a();const{left:c,top:p,width:d,height:m}=e.getBoundingClientRect();if(i||t(),!d||!m)return;const f=Yt(p),b=Yt(r.clientWidth-(c+d)),u=Yt(r.clientHeight-(p+m)),h=Yt(c),g={rootMargin:-f+"px "+-b+"px "+-u+"px "+-h+"px",threshold:ce(0,Fe(1,l))||1};let y=!0;function w(x){const C=x[0].intersectionRatio;if(C!==l){if(!y)return s();C?s(!1,C):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(w,{...g,root:r.ownerDocument})}catch{n=new IntersectionObserver(w,g)}n.observe(e)}return s(!0),a}function hd(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=uo(e),p=r||a?[...c?At(c):[],...At(t)]:[];p.forEach(v=>{r&&v.addEventListener("scroll",n,{passive:!0}),a&&v.addEventListener("resize",n)});const d=c&&i?md(c,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(v=>{let[g]=v;g&&g.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(t)})),n()}),c&&!l&&f.observe(c),f.observe(t));let b,u=l?Ge(e):null;l&&h();function h(){const v=Ge(e);u&&(v.x!==u.x||v.y!==u.y||v.width!==u.width||v.height!==u.height)&&n(),u=v,b=requestAnimationFrame(h)}return n(),()=>{var v;p.forEach(g=>{r&&g.removeEventListener("scroll",n),a&&g.removeEventListener("resize",n)}),d==null||d(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(b)}}const vd=Gc,gd=Kc,bd=Zc,_d=Yc,yd=Vc,qa=Hc,wd=Xc,xd=(e,t,n)=>{const o=new Map,r={platform:fd,...n},a={...r.platform,_c:o};return zc(e,t,{...r,platform:a})};var on=typeof document<"u"?Me:j;function rn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!rn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const a=r[o];if(!(a==="_owner"&&e.$$typeof)&&!rn(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Wa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function za(e,t){const n=Wa(e);return Math.round(t*n)/n}function mo(e){const t=T(e);return on(()=>{t.current=e}),t}function kd(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:a,floating:s}={},transform:i=!0,whileElementsMounted:l,open:c}=e,[p,d]=M({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,f]=M(o);rn(m,o)||f(o);const[b,u]=M(null),[h,v]=M(null),g=z(E=>{E!==C.current&&(C.current=E,u(E))},[]),y=z(E=>{E!==k.current&&(k.current=E,v(E))},[]),w=a||b,x=s||h,C=T(null),k=T(null),P=T(p),D=l!=null,B=mo(l),O=mo(r),A=mo(c),q=z(()=>{if(!C.current||!k.current)return;const E={placement:t,strategy:n,middleware:m};O.current&&(E.platform=O.current),xd(C.current,k.current,E).then(W=>{const ae={...W,isPositioned:A.current!==!1};F.current&&!rn(P.current,ae)&&(P.current=ae,Ft(()=>{d(ae)}))})},[m,t,n,O,A]);on(()=>{c===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,d(E=>({...E,isPositioned:!1})))},[c]);const F=T(!1);on(()=>(F.current=!0,()=>{F.current=!1}),[]),on(()=>{if(w&&(C.current=w),x&&(k.current=x),w&&x){if(B.current)return B.current(w,x,q);q()}},[w,x,q,B,D]);const Y=ne(()=>({reference:C,floating:k,setReference:g,setFloating:y}),[g,y]),I=ne(()=>({reference:w,floating:x}),[w,x]),$=ne(()=>{const E={position:n,left:0,top:0};if(!I.floating)return E;const W=za(I.floating,p.x),ae=za(I.floating,p.y);return i?{...E,transform:"translate("+W+"px, "+ae+"px)",...Wa(I.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:ae}},[n,i,I.floating,p.x,p.y]);return ne(()=>({...p,update:q,refs:Y,elements:I,floatingStyles:$}),[p,q,Y,I,$])}const Sd=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?qa({element:o.current,padding:r}).fn(n):{}:o?qa({element:o,padding:r}).fn(n):{}}}},Ad=(e,t)=>({...vd(e),options:[e,t]}),Cd=(e,t)=>({...gd(e),options:[e,t]}),Md=(e,t)=>({...wd(e),options:[e,t]}),Pd=(e,t)=>({...bd(e),options:[e,t]}),Ed=(e,t)=>({..._d(e),options:[e,t]}),Nd=(e,t)=>({...yd(e),options:[e,t]}),Td=(e,t)=>({...Sd(e),options:[e,t]});var Ld="Arrow",Ha=S((e,t)=>{const{children:n,width:o=10,height:r=5,...a}=e;return _(K.svg,{...a,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:_("polygon",{points:"0,0 30,0 15,10"})})});Ha.displayName=Ld;var Rd=Ha;function Od(e){const[t,n]=M(void 0);return ie(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const a=r[0];let s,i;if("borderBoxSize"in a){const l=a.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;n({width:s,height:i})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var ho="Popper",[Za,Va]=Ca(ho),[Id,Ua]=Za(ho),Ga=e=>{const{__scopePopper:t,children:n}=e,[o,r]=M(null);return _(Id,{scope:t,anchor:o,onAnchorChange:r,children:n})};Ga.displayName=ho;var Ka="PopperAnchor",Xa=S((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,a=Ua(Ka,n),s=T(null),i=te(t,s);return j(()=>{a.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:_(K.div,{...r,ref:i})});Xa.displayName=Ka;var vo="PopperContent",[jd,Dd]=Za(vo),Ya=S((e,t)=>{var N,J,se,U,H,Z;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:a="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:p=0,sticky:d="partial",hideWhenDetached:m=!1,updatePositionStrategy:f="optimized",onPlaced:b,...u}=e,h=Ua(vo,n),[v,g]=M(null),y=te(t,ue=>g(ue)),[w,x]=M(null),C=Od(w),k=(C==null?void 0:C.width)??0,P=(C==null?void 0:C.height)??0,D=o+(a!=="center"?"-"+a:""),B=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},O=Array.isArray(c)?c:[c],A=O.length>0,q={padding:B,boundary:O.filter(Fd),altBoundary:A},{refs:F,floatingStyles:Y,placement:I,isPositioned:$,middlewareData:E}=kd({strategy:"fixed",placement:D,whileElementsMounted:(...ue)=>hd(...ue,{animationFrame:f==="always"}),elements:{reference:h.anchor},middleware:[Ad({mainAxis:r+P,alignmentAxis:s}),l&&Cd({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?Md():void 0,...q}),l&&Pd({...q}),Ed({...q,apply:({elements:ue,rects:xe,availableWidth:Nt,availableHeight:Tt})=>{const{width:Lt,height:Eu}=xe.reference,un=ue.floating.style;un.setProperty("--radix-popper-available-width",`${Nt}px`),un.setProperty("--radix-popper-available-height",`${Tt}px`),un.setProperty("--radix-popper-anchor-width",`${Lt}px`),un.setProperty("--radix-popper-anchor-height",`${Eu}px`)}}),w&&Td({element:w,padding:i}),$d({arrowWidth:k,arrowHeight:P}),m&&Nd({strategy:"referenceHidden",...q})]}),[W,ae]=es(I),re=Te(b);ie(()=>{$&&(re==null||re())},[$,re]);const Pt=(N=E.arrow)==null?void 0:N.x,Et=(J=E.arrow)==null?void 0:J.y,He=((se=E.arrow)==null?void 0:se.centerOffset)!==0,[ht,Xe]=M();return ie(()=>{v&&Xe(window.getComputedStyle(v).zIndex)},[v]),_("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:$?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ht,"--radix-popper-transform-origin":[(U=E.transformOrigin)==null?void 0:U.x,(H=E.transformOrigin)==null?void 0:H.y].join(" "),...((Z=E.hide)==null?void 0:Z.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:_(jd,{scope:n,placedSide:W,onArrowChange:x,arrowX:Pt,arrowY:Et,shouldHideArrow:He,children:_(K.div,{"data-side":W,"data-align":ae,...u,ref:y,style:{...u.style,animation:$?void 0:"none"}})})})});Ya.displayName=vo;var Ja="PopperArrow",Bd={top:"bottom",right:"left",bottom:"top",left:"right"},Qa=S(function(t,n){const{__scopePopper:o,...r}=t,a=Dd(Ja,o),s=Bd[a.placedSide];return _("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:_(Rd,{...r,ref:n,style:{...r.style,display:"block"}})})});Qa.displayName=Ja;function Fd(e){return e!==null}var $d=e=>({name:"transformOrigin",options:e,fn(t){var h,v,g;const{placement:n,rects:o,middlewareData:r}=t,s=((h=r.arrow)==null?void 0:h.centerOffset)!==0,i=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[c,p]=es(n),d={start:"0%",center:"50%",end:"100%"}[p],m=(((v=r.arrow)==null?void 0:v.x)??0)+i/2,f=(((g=r.arrow)==null?void 0:g.y)??0)+l/2;let b="",u="";return c==="bottom"?(b=s?d:`${m}px`,u=`${-l}px`):c==="top"?(b=s?d:`${m}px`,u=`${o.floating.height+l}px`):c==="right"?(b=`${-l}px`,u=s?d:`${f}px`):c==="left"&&(b=`${o.floating.width+l}px`,u=s?d:`${f}px`),{data:{x:b,y:u}}}});function es(e){const[t,n="center"]=e.split("-");return[t,n]}var qd=Ga,Wd=Xa,zd=Ya,Hd=Qa;function Zd(e){const t=T({value:e,previous:e});return ne(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Vd="VisuallyHidden",ts=S((e,t)=>_(K.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));ts.displayName=Vd;var Ud=[" ","Enter","ArrowUp","ArrowDown"],Gd=[" ","Enter"],Ct="Select",[an,sn,Kd]=Lc(Ct),[mt,Ru]=xr(Ct,[Kd,Va]),ln=Va(),[Xd,We]=mt(Ct),[Yd,Jd]=mt(Ct),ns=e=>{const{__scopeSelect:t,children:n,open:o,defaultOpen:r,onOpenChange:a,value:s,defaultValue:i,onValueChange:l,dir:c,name:p,autoComplete:d,disabled:m,required:f,form:b}=e,u=ln(t),[h,v]=M(null),[g,y]=M(null),[w,x]=M(!1),C=Oc(c),[k=!1,P]=On({prop:o,defaultProp:r,onChange:a}),[D,B]=On({prop:s,defaultProp:i,onChange:l}),O=T(null),A=h?b||!!h.closest("form"):!0,[q,F]=M(new Set),Y=Array.from(q).map(I=>I.props.value).join(";");return _(qd,{...u,children:_(Xd,{required:f,scope:t,trigger:h,onTriggerChange:v,valueNode:g,onValueNodeChange:y,valueNodeHasChildren:w,onValueNodeHasChildrenChange:x,contentId:nt(),value:D,onValueChange:B,open:k,onOpenChange:P,dir:C,triggerPointerDownPosRef:O,disabled:m,children:[_(an.Provider,{scope:t,children:_(Yd,{scope:e.__scopeSelect,onNativeOptionAdd:z(I=>{F($=>new Set($).add(I))},[]),onNativeOptionRemove:z(I=>{F($=>{const E=new Set($);return E.delete(I),E})},[]),children:n})}),A?_(Ms,{"aria-hidden":!0,required:f,tabIndex:-1,name:p,autoComplete:d,value:D,onChange:I=>B(I.target.value),disabled:m,form:b,children:[D===void 0?_("option",{value:""}):null,Array.from(q)]},Y):null]})})};ns.displayName=Ct;var os="SelectTrigger",rs=S((e,t)=>{const{__scopeSelect:n,disabled:o=!1,...r}=e,a=ln(n),s=We(os,n),i=s.disabled||o,l=te(t,s.onTriggerChange),c=sn(n),p=T("touch"),[d,m,f]=Ps(u=>{const h=c().filter(y=>!y.disabled),v=h.find(y=>y.value===s.value),g=Es(h,u,v);g!==void 0&&s.onValueChange(g.value)}),b=u=>{i||(s.onOpenChange(!0),f()),u&&(s.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)})};return _(Wd,{asChild:!0,...a,children:_(K.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Cs(s.value)?"":void 0,...r,ref:l,onClick:G(r.onClick,u=>{u.currentTarget.focus(),p.current!=="mouse"&&b(u)}),onPointerDown:G(r.onPointerDown,u=>{p.current=u.pointerType;const h=u.target;h.hasPointerCapture(u.pointerId)&&h.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&u.pointerType==="mouse"&&(b(u),u.preventDefault())}),onKeyDown:G(r.onKeyDown,u=>{const h=d.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&m(u.key),!(h&&u.key===" ")&&Ud.includes(u.key)&&(b(),u.preventDefault())})})})});rs.displayName=os;var as="SelectValue",ss=S((e,t)=>{const{__scopeSelect:n,className:o,style:r,children:a,placeholder:s="",...i}=e,l=We(as,n),{onValueNodeHasChildrenChange:c}=l,p=a!==void 0,d=te(t,l.onValueNodeChange);return ie(()=>{c(p)},[c,p]),_(K.span,{...i,ref:d,style:{pointerEvents:"none"},children:Cs(l.value)?_(oe,{children:s}):a})});ss.displayName=as;var Qd="SelectIcon",is=S((e,t)=>{const{__scopeSelect:n,children:o,...r}=e;return _(K.span,{"aria-hidden":!0,...r,ref:t,children:o||"▼"})});is.displayName=Qd;var eu="SelectPortal",ls=e=>_(qn,{asChild:!0,...e});ls.displayName=eu;var Ke="SelectContent",cs=S((e,t)=>{const n=We(Ke,e.__scopeSelect),[o,r]=M();if(ie(()=>{r(new DocumentFragment)},[]),!n.open){const a=o;return a?Bt(_(ds,{scope:e.__scopeSelect,children:_(an.Slot,{scope:e.__scopeSelect,children:_("div",{children:e.children})})}),a):null}return _(us,{...e,ref:t})});cs.displayName=Ke;var ve=10,[ds,ze]=mt(Ke),tu="SelectContentImpl",us=S((e,t)=>{const{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:r,onEscapeKeyDown:a,onPointerDownOutside:s,side:i,sideOffset:l,align:c,alignOffset:p,arrowPadding:d,collisionBoundary:m,collisionPadding:f,sticky:b,hideWhenDetached:u,avoidCollisions:h,...v}=e,g=We(Ke,n),[y,w]=M(null),[x,C]=M(null),k=te(t,N=>w(N)),[P,D]=M(null),[B,O]=M(null),A=sn(n),[q,F]=M(!1),Y=T(!1);j(()=>{if(y)return Ur(y)},[y]),Lr();const I=z(N=>{const[J,...se]=A().map(Z=>Z.ref.current),[U]=se.slice(-1),H=document.activeElement;for(const Z of N)if(Z===H||(Z==null||Z.scrollIntoView({block:"nearest"}),Z===J&&x&&(x.scrollTop=0),Z===U&&x&&(x.scrollTop=x.scrollHeight),Z==null||Z.focus(),document.activeElement!==H))return},[A,x]),$=z(()=>I([P,y]),[I,P,y]);j(()=>{q&&$()},[q,$]);const{onOpenChange:E,triggerPointerDownPosRef:W}=g;j(()=>{if(y){let N={x:0,y:0};const J=U=>{var H,Z;N={x:Math.abs(Math.round(U.pageX)-(((H=W.current)==null?void 0:H.x)??0)),y:Math.abs(Math.round(U.pageY)-(((Z=W.current)==null?void 0:Z.y)??0))}},se=U=>{N.x<=10&&N.y<=10?U.preventDefault():y.contains(U.target)||E(!1),document.removeEventListener("pointermove",J),W.current=null};return W.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",se,{capture:!0})}}},[y,E,W]),j(()=>{const N=()=>E(!1);return window.addEventListener("blur",N),window.addEventListener("resize",N),()=>{window.removeEventListener("blur",N),window.removeEventListener("resize",N)}},[E]);const[ae,re]=Ps(N=>{const J=A().filter(H=>!H.disabled),se=J.find(H=>H.ref.current===document.activeElement),U=Es(J,N,se);U&&setTimeout(()=>U.ref.current.focus())}),Pt=z((N,J,se)=>{const U=!Y.current&&!se;(g.value!==void 0&&g.value===J||U)&&(D(N),U&&(Y.current=!0))},[g.value]),Et=z(()=>y==null?void 0:y.focus(),[y]),He=z((N,J,se)=>{const U=!Y.current&&!se;(g.value!==void 0&&g.value===J||U)&&O(N)},[g.value]),ht=o==="popper"?go:ps,Xe=ht===go?{side:i,sideOffset:l,align:c,alignOffset:p,arrowPadding:d,collisionBoundary:m,collisionPadding:f,sticky:b,hideWhenDetached:u,avoidCollisions:h}:{};return _(ds,{scope:n,content:y,viewport:x,onViewportChange:C,itemRefCallback:Pt,selectedItem:P,onItemLeave:Et,itemTextRefCallback:He,focusSelectedItem:$,selectedItemText:B,position:o,isPositioned:q,searchRef:ae,children:_(Un,{as:ot,allowPinchZoom:!0,children:_($n,{asChild:!0,trapped:g.open,onMountAutoFocus:N=>{N.preventDefault()},onUnmountAutoFocus:G(r,N=>{var J;(J=g.trigger)==null||J.focus({preventScroll:!0}),N.preventDefault()}),children:_(Dn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:N=>N.preventDefault(),onDismiss:()=>g.onOpenChange(!1),children:_(ht,{role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:N=>N.preventDefault(),...v,...Xe,onPlaced:()=>F(!0),ref:k,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:G(v.onKeyDown,N=>{const J=N.ctrlKey||N.altKey||N.metaKey;if(N.key==="Tab"&&N.preventDefault(),!J&&N.key.length===1&&re(N.key),["ArrowUp","ArrowDown","Home","End"].includes(N.key)){let U=A().filter(H=>!H.disabled).map(H=>H.ref.current);if(["ArrowUp","End"].includes(N.key)&&(U=U.slice().reverse()),["ArrowUp","ArrowDown"].includes(N.key)){const H=N.target,Z=U.indexOf(H);U=U.slice(Z+1)}setTimeout(()=>I(U)),N.preventDefault()}})})})})})})});us.displayName=tu;var nu="SelectItemAlignedPosition",ps=S((e,t)=>{const{__scopeSelect:n,onPlaced:o,...r}=e,a=We(Ke,n),s=ze(Ke,n),[i,l]=M(null),[c,p]=M(null),d=te(t,k=>p(k)),m=sn(n),f=T(!1),b=T(!0),{viewport:u,selectedItem:h,selectedItemText:v,focusSelectedItem:g}=s,y=z(()=>{if(a.trigger&&a.valueNode&&i&&c&&u&&h&&v){const k=a.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),D=a.valueNode.getBoundingClientRect(),B=v.getBoundingClientRect();if(a.dir!=="rtl"){const H=B.left-P.left,Z=D.left-H,ue=k.left-Z,xe=k.width+ue,Nt=Math.max(xe,P.width),Tt=window.innerWidth-ve,Lt=Aa(Z,[ve,Math.max(ve,Tt-Nt)]);i.style.minWidth=xe+"px",i.style.left=Lt+"px"}else{const H=P.right-B.right,Z=window.innerWidth-D.right-H,ue=window.innerWidth-k.right-Z,xe=k.width+ue,Nt=Math.max(xe,P.width),Tt=window.innerWidth-ve,Lt=Aa(Z,[ve,Math.max(ve,Tt-Nt)]);i.style.minWidth=xe+"px",i.style.right=Lt+"px"}const O=m(),A=window.innerHeight-ve*2,q=u.scrollHeight,F=window.getComputedStyle(c),Y=parseInt(F.borderTopWidth,10),I=parseInt(F.paddingTop,10),$=parseInt(F.borderBottomWidth,10),E=parseInt(F.paddingBottom,10),W=Y+I+q+E+$,ae=Math.min(h.offsetHeight*5,W),re=window.getComputedStyle(u),Pt=parseInt(re.paddingTop,10),Et=parseInt(re.paddingBottom,10),He=k.top+k.height/2-ve,ht=A-He,Xe=h.offsetHeight/2,N=h.offsetTop+Xe,J=Y+I+N,se=W-J;if(J<=He){const H=O.length>0&&h===O[O.length-1].ref.current;i.style.bottom="0px";const Z=c.clientHeight-u.offsetTop-u.offsetHeight,ue=Math.max(ht,Xe+(H?Et:0)+Z+$),xe=J+ue;i.style.height=xe+"px"}else{const H=O.length>0&&h===O[0].ref.current;i.style.top="0px";const ue=Math.max(He,Y+u.offsetTop+(H?Pt:0)+Xe)+se;i.style.height=ue+"px",u.scrollTop=J-He+u.offsetTop}i.style.margin=`${ve}px 0`,i.style.minHeight=ae+"px",i.style.maxHeight=A+"px",o==null||o(),requestAnimationFrame(()=>f.current=!0)}},[m,a.trigger,a.valueNode,i,c,u,h,v,a.dir,o]);ie(()=>y(),[y]);const[w,x]=M();ie(()=>{c&&x(window.getComputedStyle(c).zIndex)},[c]);const C=z(k=>{k&&b.current===!0&&(y(),g==null||g(),b.current=!1)},[y,g]);return _(ru,{scope:n,contentWrapper:i,shouldExpandOnScrollRef:f,onScrollButtonChange:C,children:_("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:_(K.div,{...r,ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...r.style}})})})});ps.displayName=nu;var ou="SelectPopperPosition",go=S((e,t)=>{const{__scopeSelect:n,align:o="start",collisionPadding:r=ve,...a}=e,s=ln(n);return _(zd,{...s,...a,ref:t,align:o,collisionPadding:r,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});go.displayName=ou;var[ru,bo]=mt(Ke,{}),_o="SelectViewport",fs=S((e,t)=>{const{__scopeSelect:n,nonce:o,...r}=e,a=ze(_o,n),s=bo(_o,n),i=te(t,a.onViewportChange),l=T(0);return _(oe,{children:[_("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),_(an.Slot,{scope:n,children:_(K.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...r.style},onScroll:G(r.onScroll,c=>{const p=c.currentTarget,{contentWrapper:d,shouldExpandOnScrollRef:m}=s;if(m!=null&&m.current&&d){const f=Math.abs(l.current-p.scrollTop);if(f>0){const b=window.innerHeight-ve*2,u=parseFloat(d.style.minHeight),h=parseFloat(d.style.height),v=Math.max(u,h);if(v<b){const g=v+f,y=Math.min(b,g),w=g-y;d.style.height=y+"px",d.style.bottom==="0px"&&(p.scrollTop=w>0?w:0,d.style.justifyContent="flex-end")}}}l.current=p.scrollTop})})})]})});fs.displayName=_o;var ms="SelectGroup",[au,su]=mt(ms),iu=S((e,t)=>{const{__scopeSelect:n,...o}=e,r=nt();return _(au,{scope:n,id:r,children:_(K.div,{role:"group","aria-labelledby":r,...o,ref:t})})});iu.displayName=ms;var hs="SelectLabel",vs=S((e,t)=>{const{__scopeSelect:n,...o}=e,r=su(hs,n);return _(K.div,{id:r.id,...o,ref:t})});vs.displayName=hs;var cn="SelectItem",[lu,gs]=mt(cn),bs=S((e,t)=>{const{__scopeSelect:n,value:o,disabled:r=!1,textValue:a,...s}=e,i=We(cn,n),l=ze(cn,n),c=i.value===o,[p,d]=M(a??""),[m,f]=M(!1),b=te(t,g=>{var y;return(y=l.itemRefCallback)==null?void 0:y.call(l,g,o,r)}),u=nt(),h=T("touch"),v=()=>{r||(i.onValueChange(o),i.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return _(lu,{scope:n,value:o,disabled:r,textId:u,isSelected:c,onItemTextChange:z(g=>{d(y=>y||((g==null?void 0:g.textContent)??"").trim())},[]),children:_(an.ItemSlot,{scope:n,value:o,disabled:r,textValue:p,children:_(K.div,{role:"option","aria-labelledby":u,"data-highlighted":m?"":void 0,"aria-selected":c&&m,"data-state":c?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...s,ref:b,onFocus:G(s.onFocus,()=>f(!0)),onBlur:G(s.onBlur,()=>f(!1)),onClick:G(s.onClick,()=>{h.current!=="mouse"&&v()}),onPointerUp:G(s.onPointerUp,()=>{h.current==="mouse"&&v()}),onPointerDown:G(s.onPointerDown,g=>{h.current=g.pointerType}),onPointerMove:G(s.onPointerMove,g=>{var y;h.current=g.pointerType,r?(y=l.onItemLeave)==null||y.call(l):h.current==="mouse"&&g.currentTarget.focus({preventScroll:!0})}),onPointerLeave:G(s.onPointerLeave,g=>{var y;g.currentTarget===document.activeElement&&((y=l.onItemLeave)==null||y.call(l))}),onKeyDown:G(s.onKeyDown,g=>{var w;((w=l.searchRef)==null?void 0:w.current)!==""&&g.key===" "||(Gd.includes(g.key)&&v(),g.key===" "&&g.preventDefault())})})})})});bs.displayName=cn;var Mt="SelectItemText",_s=S((e,t)=>{const{__scopeSelect:n,className:o,style:r,...a}=e,s=We(Mt,n),i=ze(Mt,n),l=gs(Mt,n),c=Jd(Mt,n),[p,d]=M(null),m=te(t,v=>d(v),l.onItemTextChange,v=>{var g;return(g=i.itemTextRefCallback)==null?void 0:g.call(i,v,l.value,l.disabled)}),f=p==null?void 0:p.textContent,b=ne(()=>_("option",{value:l.value,disabled:l.disabled,children:f},l.value),[l.disabled,l.value,f]),{onNativeOptionAdd:u,onNativeOptionRemove:h}=c;return ie(()=>(u(b),()=>h(b)),[u,h,b]),_(oe,{children:[_(K.span,{id:l.textId,...a,ref:m}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Bt(a.children,s.valueNode):null]})});_s.displayName=Mt;var ys="SelectItemIndicator",ws=S((e,t)=>{const{__scopeSelect:n,...o}=e;return gs(ys,n).isSelected?_(K.span,{"aria-hidden":!0,...o,ref:t}):null});ws.displayName=ys;var yo="SelectScrollUpButton",xs=S((e,t)=>{const n=ze(yo,e.__scopeSelect),o=bo(yo,e.__scopeSelect),[r,a]=M(!1),s=te(t,o.onScrollButtonChange);return ie(()=>{if(n.viewport&&n.isPositioned){let i=function(){const c=l.scrollTop>0;a(c)};const l=n.viewport;return i(),l.addEventListener("scroll",i),()=>l.removeEventListener("scroll",i)}},[n.viewport,n.isPositioned]),r?_(Ss,{...e,ref:s,onAutoScroll:()=>{const{viewport:i,selectedItem:l}=n;i&&l&&(i.scrollTop=i.scrollTop-l.offsetHeight)}}):null});xs.displayName=yo;var wo="SelectScrollDownButton",ks=S((e,t)=>{const n=ze(wo,e.__scopeSelect),o=bo(wo,e.__scopeSelect),[r,a]=M(!1),s=te(t,o.onScrollButtonChange);return ie(()=>{if(n.viewport&&n.isPositioned){let i=function(){const c=l.scrollHeight-l.clientHeight,p=Math.ceil(l.scrollTop)<c;a(p)};const l=n.viewport;return i(),l.addEventListener("scroll",i),()=>l.removeEventListener("scroll",i)}},[n.viewport,n.isPositioned]),r?_(Ss,{...e,ref:s,onAutoScroll:()=>{const{viewport:i,selectedItem:l}=n;i&&l&&(i.scrollTop=i.scrollTop+l.offsetHeight)}}):null});ks.displayName=wo;var Ss=S((e,t)=>{const{__scopeSelect:n,onAutoScroll:o,...r}=e,a=ze("SelectScrollButton",n),s=T(null),i=sn(n),l=z(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return j(()=>()=>l(),[l]),ie(()=>{var p;const c=i().find(d=>d.ref.current===document.activeElement);(p=c==null?void 0:c.ref.current)==null||p.scrollIntoView({block:"nearest"})},[i]),_(K.div,{"aria-hidden":!0,...r,ref:t,style:{flexShrink:0,...r.style},onPointerDown:G(r.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(o,50))}),onPointerMove:G(r.onPointerMove,()=>{var c;(c=a.onItemLeave)==null||c.call(a),s.current===null&&(s.current=window.setInterval(o,50))}),onPointerLeave:G(r.onPointerLeave,()=>{l()})})}),cu="SelectSeparator",As=S((e,t)=>{const{__scopeSelect:n,...o}=e;return _(K.div,{"aria-hidden":!0,...o,ref:t})});As.displayName=cu;var xo="SelectArrow",du=S((e,t)=>{const{__scopeSelect:n,...o}=e,r=ln(n),a=We(xo,n),s=ze(xo,n);return a.open&&s.position==="popper"?_(Hd,{...r,...o,ref:t}):null});du.displayName=xo;function Cs(e){return e===""||e===void 0}var Ms=S((e,t)=>{const{value:n,...o}=e,r=T(null),a=te(t,r),s=Zd(n);return j(()=>{const i=r.current,l=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==n&&p){const d=new Event("change",{bubbles:!0});p.call(i,n),i.dispatchEvent(d)}},[s,n]),_(ts,{asChild:!0,children:_("select",{...o,ref:a,defaultValue:n})})});Ms.displayName="BubbleSelect";function Ps(e){const t=Te(e),n=T(""),o=T(0),r=z(s=>{const i=n.current+s;t(i),function l(c){n.current=c,window.clearTimeout(o.current),c!==""&&(o.current=window.setTimeout(()=>l(""),1e3))}(i)},[t]),a=z(()=>{n.current="",window.clearTimeout(o.current)},[]);return j(()=>()=>window.clearTimeout(o.current),[]),[n,r,a]}function Es(e,t,n){const r=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,a=n?e.indexOf(n):-1;let s=uu(e,Math.max(a,0));r.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.textValue.toLowerCase().startsWith(r.toLowerCase()));return l!==n?l:void 0}function uu(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var pu=ns,Ns=rs,fu=ss,mu=is,hu=ls,Ts=cs,vu=fs,Ls=vs,Rs=bs,gu=_s,bu=ws,Os=xs,Is=ks,js=As;const _u=pu,yu=fu,Ds=S(({className:e,children:t,...n},o)=>_(Ns,{ref:o,className:le("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,_(mu,{asChild:!0,children:_(yr,{className:"h-4 w-4 opacity-50"})})]}));Ds.displayName=Ns.displayName;const Bs=S(({className:e,...t},n)=>_(Os,{ref:n,className:le("flex cursor-default items-center justify-center py-1",e),...t,children:_(_i,{className:"h-4 w-4"})}));Bs.displayName=Os.displayName;const Fs=S(({className:e,...t},n)=>_(Is,{ref:n,className:le("flex cursor-default items-center justify-center py-1",e),...t,children:_(yr,{className:"h-4 w-4"})}));Fs.displayName=Is.displayName;const $s=S(({className:e,children:t,position:n="popper",...o},r)=>_(hu,{children:_(Ts,{ref:r,className:le("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...o,children:[_(Bs,{}),_(vu,{className:le("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),_(Fs,{})]})}));$s.displayName=Ts.displayName;const wu=S(({className:e,...t},n)=>_(Ls,{ref:n,className:le("px-2 py-1.5 text-sm font-semibold",e),...t}));wu.displayName=Ls.displayName;const qs=S(({className:e,children:t,...n},o)=>_(Rs,{ref:o,className:le("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[_("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:_(bu,{children:_(bi,{className:"h-4 w-4"})})}),_(gu,{children:t})]}));qs.displayName=Rs.displayName;const xu=S(({className:e,...t},n)=>_(js,{ref:n,className:le("-mx-1 my-1 h-px bg-muted",e),...t}));xu.displayName=js.displayName;function dn({className:e,...t}){return _("div",{className:le("animate-pulse rounded-md bg-primary/10",e),...t})}const ku=["ui-kit","merchant-center-application-kit","test-data"],Ws="__fec-dashboard-open-event__",zs=(e,t)=>{const r=new DOMParser().parseFromString(e,"text/html").querySelectorAll('div[id*="issue_"]');return Array.from(r).map(a=>{var m,f;const s=a.id.split("_")[1],i=a.querySelector("a.markdown-title").textContent,l="https://github.com"+a.querySelector("a.markdown-title").getAttribute("href"),c=a.querySelector(".opened-by").textContent,p=(m=a.querySelector("img.avatar-user"))==null?void 0:m.getAttribute("src"),d=(f=a.querySelector("img.avatar-user"))==null?void 0:f.getAttribute("alt");return{id:s,title:i,url:l,description:c,userAvatarUrl:p,userName:d,repositoryName:t}})},Su=async e=>{if(window.location.hostname==="localhost")return new Promise(o=>{setTimeout(async()=>{const r=await Promise.resolve().then(()=>Pu);o(zs(r.prsListHtml,e))},1e3)});const n=await(await fetch(`https://github.com/commercetools/${e}/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen`)).text();return zs(n,e)},Au=async()=>(await Promise.all(ku.map(Su))).flat();function Cu(){const[e,t]=M(!1),[n,o]=M([]),[r,a]=M(!1);return j(()=>{(async()=>{t(!0);try{const i=await Au();o(i)}catch(i){console.error("Failed to fetch PRs:",i)}finally{t(!1)}})()},[]),j(()=>{window.__fe_chapter_dashboard_modal_loaded=!0,window.addEventListener("message",s=>{s.data===Ws&&a(!0)})},[r]),{isLoading:e,pullRequests:n,isModalOpened:r,closeModal:()=>a(!1)}}function Mu(){const[e,t]=M("all"),{isLoading:n,pullRequests:o,isModalOpened:r,closeModal:a}=Cu(),s=["all",...new Set(o.map(l=>l.repositoryName))],i=o.filter(l=>e==="all"||l.repositoryName===e);return _(Pc,{open:r,onOpenChange:a,children:_(xa,{className:"max-w-screen-md",children:[_(ka,{children:_(Sa,{children:"Frontend Chapter PRs"})}),_("div",{className:"flex flex-col space-y-4",children:[_("div",{className:"flex space-x-2",children:_(_u,{value:e,onValueChange:t,children:[_(Ds,{className:"w-[180px]",children:_(yu,{placeholder:"Select repository"})}),_($s,{children:s.map(l=>_(qs,{value:l,children:l==="all"?"All Repositories":l},l))})]})}),_("div",{className:"max-h-[400px] overflow-y-auto",children:n?Array.from({length:5}).map((l,c)=>_("div",{className:"flex items-center space-x-4 p-4 border-b last:border-b-0",children:[_(dn,{className:"h-6 w-6 rounded-full"}),_("div",{className:"flex-grow space-y-2",children:[_(dn,{className:"h-4 w-3/4"}),_(dn,{className:"h-3 w-1/2"})]}),_(dn,{className:"h-6 w-16 rounded-full"})]},c)):i.map(l=>_("div",{className:"flex items-center space-x-4 p-4 border-b last:border-b-0",children:[_(yi,{className:"h-6 w-6 text-green-500"}),_("div",{className:"flex-grow",children:[_("a",{href:l.url,target:"_blank",children:_("h3",{className:"text-sm font-medium hover:underline",children:l.title})}),_("p",{className:"text-sm text-muted-foreground",children:[l.description," in ",l.repositoryName]})]}),l.userAvatarUrl&&l.userName&&_("img",{className:"h-6 w-6 rounded",src:l.userAvatarUrl,alt:l.userName})]},`${l.repositoryName}_${l.id}`))})]})]})})}if(!window.__fe_chapter_dashboard_modal_loaded){const e=document.createElement("div");document.body.appendChild(e),Je(_(Mu,{}),e)}window.postMessage(Ws);const Pu=Object.freeze(Object.defineProperty({__proto__:null,prsListHtml:`
<div id="repository-container-header" data-turbo-replace hidden ></div>
<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
  <div class="clearfix new-discussion-timeline js-check-all-container container-xl px-3 px-md-4 px-lg-5 mt-4" data-pjax="" data-turbo-frame="">
<h1 class='sr-only'>Pull requests: commercetools/merchant-center-frontend</h1>
  <include-fragment src="/commercetools/merchant-center-frontend/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>
<div class="d-flex flex-justify-between mb-md-3 flex-column-reverse flex-md-row flex-items-end">
<div class="d-flex flex-justify-start flex-auto my-4 my-md-0 width-full width-md-auto" role="search">
    <details class="details-reset details-overlay subnav-search-context flex-shrink-0" id="filters-select-menu">
      <summary data-view-component="true" class="rounded-right-0 color-border-emphasis Button--secondary Button--medium Button">  <span class="Button-content">
  <span class="Button-label">Filters</span>
</span>
  <span class="Button-visual Button-trailingAction">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
  </span>
</summary>
      <details-menu class="SelectMenu" role="menu">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-header">
            <h3 class="SelectMenu-title">Filter Issues</h3>
            <button class="SelectMenu-closeButton" type="button" data-toggle-for="filters-select-menu">
              <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
            </button>
          </div>
          <div class="SelectMenu-list" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
              <a
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen"
                data-ga-click="Pull Requests, Search filter, Open issues and pull requests"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
                Open issues and pull requests
              </a>
              <a
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+is%3Aissue+author%3A%40me"
                data-ga-click="Pull Requests, Search filter, Your issues"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
                Your issues
              </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+is%3Apr+author%3A%40me"
              data-ga-click="Pull Requests, Search filter, Your pull requests"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Your pull requests
            </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+assignee%3A%40me"
              data-ga-click="Pull Requests, Search filter, Everything assigned to you"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Everything assigned to you
            </a>
            <a
              class="SelectMenu-item"
              role="menuitemradio"
              aria-checked="false"
              href="/commercetools/merchant-center-frontend/issues?q=is%3Aopen+mentions%3A%40me"
              data-ga-click="Pull Requests, Search filter, Everything mentioning you"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
              Everything mentioning you
            </a>
            <a class="SelectMenu-item" role="menuitemradio" href="https://docs.github.com/articles/searching-issues" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external mr-2">
  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
              <strong>View advanced search syntax</strong>
            </a>
          </div>
        </div>
      </details-menu>
    </details>

  </option></form><form class="subnav-search width-full d-flex " data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" role="search" aria-label="Issues" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls" accept-charset="UTF-8" method="get">
    <input type="text" name="q" id="js-issues-search" value="is:pr label:fe-chapter-rotation is:open " class="form-control form-control subnav-search-input input-contrast width-full" placeholder="Search all issues" aria-label="Search all issues" data-hotkey="Control+/,Meta+/" />
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search subnav-search-icon">
  <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
</form>    <div class="ml-2 pl-2 d-none d-md-flex">

<nav class="subnav-links float-left d-flex no-wrap" aria-label="Issue">
<a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_labels /commercetools/merchant-center-frontend/labels" href="/commercetools/merchant-center-frontend/labels">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tag">
  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
</svg>
  Labels
    <span title="41" data-view-component="true" class="Counter d-none d-md-inline">41</span>
</a>  <a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_milestones /commercetools/merchant-center-frontend/milestones" href="/commercetools/merchant-center-frontend/milestones">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-milestone">
  <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
</svg>
  Milestones
    <span title="0" data-view-component="true" class="Counter d-none d-md-inline">0</span>
</a></nav>

  </div>
</div>
<div class="ml-3 d-flex flex-justify-between width-full width-md-auto" data-pjax>
  <span class="d-md-none">

<nav class="subnav-links float-left d-flex no-wrap" aria-label="Issue">
<a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_labels /commercetools/merchant-center-frontend/labels" href="/commercetools/merchant-center-frontend/labels">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tag">
  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
</svg>
  Labels
    <span title="41" data-view-component="true" class="Counter d-none d-md-inline">41</span>
</a>  <a selected_link="repo_pulls" class="js-selected-navigation-item subnav-item" data-selected-links="repo_milestones /commercetools/merchant-center-frontend/milestones" href="/commercetools/merchant-center-frontend/milestones">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-milestone">
  <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
</svg>
  Milestones
    <span title="0" data-view-component="true" class="Counter d-none d-md-inline">0</span>
</a></nav>

  </span>
        <a href="/commercetools/merchant-center-frontend/compare" data-hotkey="c" data-ga-click="Repository, go to compare view, location:pull request list; text:New pull request" tabindex="0" data-view-component="true" class="Button--primary Button--medium Button">  <span class="Button-content">
  <span class="Button-label"><span class="d-none d-md-block">New pull request</span>
          <span class="d-block d-md-none">New</span></span>
</span>
</a>
</div>
</div>

<div class="issues-reset-query-wrapper" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  <a class="issues-reset-query" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x issues-reset-query-icon">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    Clear current search query, filters, and sorts
</a>  </div>


<div class="d-block d-lg-none no-wrap">

<div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" class="btn-link selected" data-ga-click="Pull Requests, Table state, Open">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
    5 Open
  </a>

  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aclosed" class="btn-link " data-ga-click="Pull Requests, Table state, Closed">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    33 Closed
  </a>
</div>

</div>

<div class="Box mt-3 Box--responsive hx_Box--firstRowRounded0">
      <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  <div class="mr-3 d-none d-md-block">
    <input type="checkbox" data-check-all aria-label="Select all issues" autocomplete="off">
  </div>

<div class="table-list-filters flex-auto d-flex min-width-0">
  <div class="flex-auto d-none d-lg-block no-wrap">

<div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" class="btn-link selected" data-ga-click="Pull Requests, Table state, Open">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
    5 Open
  </a>

  <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aclosed" class="btn-link " data-ga-click="Pull Requests, Table state, Closed">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    33 Closed
  </a>
</div>

  </div>

    <div class="table-list-header-toggle no-wrap d-flex flex-auto flex-justify-between flex-sm-justify-start flex-lg-justify-end">

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="author-select-menu">
  <summary class="btn-link" title="Author" data-hotkey="u" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Author">
    Author
    <span class="dropdown-caret hide-sm"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fauthors_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Filter by author</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="author-select-menu">
          <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </button>
      </header>
      <div class="SelectMenu-filter">
        <input class="SelectMenu-input form-control js-filterable-field" id="author-filter-field" type="text" placeholder="Filter users" aria-label="Filter users" autocomplete="off" spellcheck="false" autofocus>
      </div>
      <div class="SelectMenu-list select-menu-list" data-filter="author">
        <div data-filterable-for="author-filter-field" data-filterable-type="substring">
            <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+author%3ACarlosCortizasCT">
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
<img class="avatar flex-shrink-0 mr-2 avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
<strong class="mr-2">CarlosCortizasCT</strong>
<span class="color-fg-muted css-truncate css-truncate-overflow">Carlos Cortizas</span>
</a>

          <include-fragment class="SelectMenu-loading">
            <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
          </include-fragment>
        </div>
        </option></form><form class="select-menu-new-item-form js-new-item-form" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" accept-charset="UTF-8" method="get">
          <input type="hidden" name="q" value="is:pr label:fe-chapter-rotation is:open">
          <button class="SelectMenu-item d-block js-new-item-value" type="submit" name="author" role="menuitem">
            <div class="text-bold f5">author:<span class="js-new-item-name"></span></div>
            <div class="color-fg-muted">Filter by this user</div>
          </button>
</form>        </div>
    </div>
  </details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative px-3" id="label-select-menu">
<summary class="btn-link" title="Label" data-hotkey="l" aria-haspopup="true"  data-ga-click="Pull Requests, Table filter, Label">
  Label
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Flabels_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by label</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="label-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input type="text" id="label-filter-field" class="SelectMenu-input form-control js-filterable-field" placeholder="Filter labels" aria-label="Filter labels" autocomplete="off" autofocus>
    </div>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
    <footer class="SelectMenu-footer">
      <div class="text-left">
        <span>Use <kbd class="js-modifier-key">alt</kbd> + <kbd>click/return</kbd> to exclude labels</span>
      </div>
      <div class="text-left mt-1">
        <span>or <kbd>⇧</kbd> + <kbd>click/return</kbd> for logical OR</span>
      </div>
    </footer>
  </div>
</details-menu>
</details>

      <span class="d-none d-md-inline">

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="project-select-menu">
  <summary data-hotkey="p" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Projects" data-view-component="true" class="btn-link">    Projects
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fprojects_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by project</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="project-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
   </div>
</details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative px-3" id="milestones-select-menu">
  <summary data-hotkey="m" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Milestones" data-view-component="true" class="btn-link">    Milestones
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fmilestones_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by milestone</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="milestones-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input class="SelectMenu-input form-control js-filterable-field" id="milestones-filter-field" type="text" placeholder="Filter milestones" aria-label="Filter milestones" autocomplete="off" autofocus>
    </div>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
  </div>
</details-menu>
</details>

          <details class="details-reset details-overlay d-inline-block position-relative px-3" id="reviews-select-menu">
  <summary aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Reviews" data-view-component="true" class="btn-link">    Reviews
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-md-0" >
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by reviews</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="reviews-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-list">
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Anone" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>No reviews</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Arequired" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Review required</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Aapproved" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Approved review</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review%3Achanges-requested" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Changes requested</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+reviewed-by%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Reviewed by you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+-reviewed-by%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Not reviewed by you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+user-review-requested%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Awaiting review from you</span>
        </a>
        <a href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+review-requested%3A%40me" class="SelectMenu-item" aria-checked="false" role="menuitemradio" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Awaiting review from you or your team</span>
        </a>
    </div>
  </div>
</details-menu>
</details>

      </span>

<details class="details-reset details-overlay d-inline-block position-relative px-3" id="assignees-select-menu">
<summary class="btn-link" title="Assignees" data-hotkey="a" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Assignee">
  Assignee
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-md-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ffilters%2Fassigns_content&amp;pulls_only=true&amp;q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" preload>
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Filter by who’s assigned</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="assignees-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <div class="SelectMenu-filter">
      <input type="text" id="assigns-filter-field" class="SelectMenu-input form-control js-filterable-field" placeholder="Filter users" aria-label="Filter users" autocomplete="off" autofocus>
    </div>
    <div class="SelectMenu-list select-menu-list" data-filter="assignee">
      <div data-filterable-for="assigns-filter-field" data-filterable-type="substring">
        <a class="SelectMenu-item " aria-checked="false" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+no%3Aassignee" role="menuitemradio">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <strong>Assigned to nobody</strong>
        </a>
          <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+assignee%3ACarlosCortizasCT">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
            <img class="avatar flex-shrink-0 mr-2 avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
            <strong class="mr-2">CarlosCortizasCT</strong>
            <span class="color-fg-muted css-truncate css-truncate-overflow">Carlos Cortizas</span>
          </a>
        <include-fragment class="SelectMenu-loading">
          <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
        </include-fragment>
      </div>
      </option></form><form class="select-menu-new-item-form js-new-item-form" data-turbo="false" action="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen" accept-charset="UTF-8" method="get">
        <input type="hidden" name="q" value="is:pr label:fe-chapter-rotation is:open">
        <button class="SelectMenu-item d-block js-new-item-value" type="submit" name="assignee" role="menuitem">
          <div class="text-bold f5">assignee:<span class="js-new-item-name"></span></div>
          <div class="color-fg-muted">Filter by this user</div>
        </button>
</form>      </div>
  </div>
</details-menu>
</details>


<details class="details-reset details-overlay d-inline-block position-relative pr-3 pr-sm-0 px-3" id="sort-select-menu">
<summary class="btn-link" aria-haspopup="true" data-ga-click="Pull Requests, Table filter, Sort">
  Sort<span></span>
  <span class="dropdown-caret hide-sm"></span>
</summary>
<details-menu class="SelectMenu SelectMenu--hasFilter right-0" role="menu" aria-label="Sort by">
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Sort by</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="sort-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>

    <div class="SelectMenu-list">
        <a class="SelectMenu-item" aria-checked="true" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Newest</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acreated-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Oldest</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acomments-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Most commented</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Acomments-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Least commented</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Aupdated-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Recently updated</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Aupdated-asc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Least recently updated</span>
        </a>
        <a class="SelectMenu-item" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Arelevance-desc">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          <span>Best match</span>
        </a>

      <div class="SelectMenu-divider">Most reactions</div>
      <div class="clearfix ws-normal p-3 p-sm-2">
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-%2B1-desc">
            <g-emoji alias="+1" fallback-src="https://github.githubassets.com/assets/1f44d-41cb66fe1e22.png" class="emoji m-0 v-align-baseline">👍</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions--1-desc">
            <g-emoji alias="-1" fallback-src="https://github.githubassets.com/assets/1f44e-ce91733aae25.png" class="emoji m-0 v-align-baseline">👎</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-smile-desc">
            <g-emoji alias="smile" fallback-src="https://github.githubassets.com/assets/1f604-7528822fb4c5.png" class="emoji m-0 v-align-baseline">😄</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-tada-desc">
            <g-emoji alias="tada" fallback-src="https://github.githubassets.com/assets/1f389-36899a2cb781.png" class="emoji m-0 v-align-baseline">🎉</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-thinking_face-desc">
            <g-emoji alias="thinking_face" fallback-src="https://github.githubassets.com/assets/1f615-4bb1369c4251.png" class="emoji m-0 v-align-baseline">😕</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-heart-desc">
            <g-emoji alias="heart" fallback-src="https://github.githubassets.com/assets/2764-982dc91ea48a.png" class="emoji m-0 v-align-baseline">❤️</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-rocket-desc">
            <g-emoji alias="rocket" fallback-src="https://github.githubassets.com/assets/1f680-d0ef47fdb515.png" class="emoji m-0 v-align-baseline">🚀</g-emoji>
          </a>
          <a class="reaction-sort-item width-auto m-0 px-3 py-2" aria-checked="false" role="menuitemradio" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+sort%3Areactions-eyes-desc">
            <g-emoji alias="eyes" fallback-src="https://github.githubassets.com/assets/1f440-ee44e91e92a7.png" class="emoji m-0 v-align-baseline">👀</g-emoji>
          </a>
      </div>
    </div>
  </div>
</details-menu>
</details>

    </div>
</div>

  <div class="table-list-triage flex-auto js-issues-toolbar-triage">
    <span class="color-fg-muted">
      <span data-check-all-count>0</span> selected
    </span>

    <div class="table-list-header-toggle float-right">
      <span class="js-issue-triage-spinner" hidden>
        <span data-view-component="true">
<svg aria-label="Saving" style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" data-view-component="true" class="v-align-text-bottom anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg></span>
      </span>
      <span class="color-fg-danger f6 js-issue-triage-error" hidden>Something went wrong.</span>
      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Factions_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Mark as
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="KxRsZkbD96zX9hQW4BsTalrCpuXS6rRtxN-z5owjsGnnkbsZ-WmXqN4-NfJRN5AblAWZrFQl8ZbSsNjiCwM0nw" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Actions</span>
    </div>
    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <details class="details-reset details-overlay select-menu label-select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Flabels_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Label
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="xPTXDxgDn_EwxQgsUAaRcXhZJDy6h73swW0L9k3fXpIIcQBwp6n_9TkNKcjhKhIAtp4bdTxI-BfXAmDyyv_aZA" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Apply labels</span>
    </div>

    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-label-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter labels"
          aria-label="Filter labels"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

        <details class="select-menu details-reset details-overlay d-inline-block position-relative px-3" id="triage-project-select-menu">
  <summary data-view-component="true" class="btn-link">    <span>Projects</span>
  <span class="dropdown-caret hide-sm"></span>
</summary>  <details-menu class="SelectMenu SelectMenu--hasFilter right-lg-0" role="menu" src="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fprojects_content" preload>
  </option></form><form class="js-project-picker-form" data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="c47s3xdxbxSwIHSkP_LD29Ef9WWN4bKp9aUK8MIZbIG_CzugqNsPELnoVUCO3kCqH9jKLAsu91LjymH0RTnodw" />
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Add to project(s)</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="project-select-menu">
        <svg aria-label="Close menu" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
    </header>
    <include-fragment class="SelectMenu-loading">
      <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
    </include-fragment>
  </div>
</form>  </details-menu>
</details>


      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fmilestones_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Milestone
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="256NcZqalNSJbJdop5hpJjD0R-vr36BUY3i8rVb7lVgXG1oOJTD00ICktowWtOpX_jN4om0Q5a91F9ep0dsRrg" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Set milestone</span>
    </div>

    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-milestones-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter milestones"
          aria-label="Filter milestones"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <details class="details-reset details-overlay select-menu d-inline-block js-issue-triage-menu" data-url="/commercetools/merchant-center-frontend/issues/show_menu_content?partial=issues%2Ftriage%2Fassigns_content">
  <summary data-view-component="true" class="select-menu-button btn-link">    Assign
</summary>  <details-menu class="SelectMenu-modal position-absolute right-0" style="z-index: 99;">
  </option></form><form data-turbo="false" action="/commercetools/merchant-center-frontend/issues/triage" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" autocomplete="off" /><input type="hidden" name="authenticity_token" value="tZvyTkMQH6tDmnKhk8ikWse0M-nvqPRYqM3dgtyhqgF5HiUx_Lp_r0pSU0Ui5CcrCXMMoGlnsaO-oraGW4Eu9w" />
    <div class="SelectMenu-header">
      <span class="SelectMenu-title">Assign someone</span>
    </div>
    <div class="select-menu-filters">
      <div class="SelectMenu-filter">
        <input
          type="text"
          id="triage-assigns-filter-field"
          class="SelectMenu-input form-control js-filterable-field"
          placeholder="Filter users"
          aria-label="Filter users"
          autocomplete="off"
          autofocus>
      </div>
    </div>

    <div class="js-triage-deferred-content"></div>
</form>  </details-menu>
</details>

      <template class="js-triage-loader-template">
        <include-fragment class="SelectMenu-loading">
          <div data-hide-on-error>
              <span data-view-component="true">
<svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>    <span class="sr-only">Loading</span>
</span>
          </div>
          <div class="text-center p-3" data-show-on-error hidden>
            <p>Something went wrong.</p>
              <button data-retry-button="" type="button" data-view-component="true" class="btn-sm btn">    Retry
</button>
          </div>
        </include-fragment>
      </template>

      <template id="js-triage-add-issues-to-memex-projects-form-success">

<div class="flash flash-full flash-success  ">
<div >
  <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
  </button>
  <div aria-atomic="true" role="alert" class="js-flash-alert">

          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
          {{selectedIssueCountLabel}} pull request{{selectedIssuesLabel}} successfully been added to {{selectedMemexProjectsLabel}}

  </div>
</div>
</div>
      </template>
    </div>
  </div>
</div>


    <h2 class='sr-only'>Pull requests list</h2>
    <div aria-label="Issues" role="group" data-issue-and-pr-hovercards-enabled>
      <div class="js-navigation-container js-active-navigation-container" data-hpc>

<div id="issue_18003" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2691061582" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="18003" aria-labelledby="issue_18003_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_18003_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/18003/hovercard" href="/commercetools/merchant-center-frontend/pull/18003">[PoC] Migrate test runner from jest to vitest</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="269f5952fb1ff19be1ed56c3a598908e93ccb720" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-362b94" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-1fcd7234-8c9b-4e54-9af7-21423f005785" for="label-362b94" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-d4bb51" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9A%A7+Status%3A+WIP%22" data-name="🚧 Status: WIP" style="--label-r:238;--label-g:238;--label-b:238;--label-h:0;--label-s:0;--label-l:93;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🚧 Status: WIP
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #18003
          opened <relative-time datetime="2024-11-25T14:57:30Z" class="no-wrap">Nov 25, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/18003#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to ">
        </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/18003" class="Link--muted" aria-label="1 comment">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">1</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [PoC] Migrate test runner from jest to vitest" href="/commercetools/merchant-center-frontend/pull/18003"></a>
</div>
</div>


<div id="issue_18002" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2690418497" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="18002" aria-labelledby="issue_18002_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Open Pull Request">
      <svg class="octicon octicon-git-pull-request color-fg-open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_18002_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/18002/hovercard" href="/commercetools/merchant-center-frontend/pull/18002">[FEC-131] Provide the migration setup for shared components</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="02c1693bc7529756a891c88cead06b49427a74ac" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-e65d63" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-cea04a98-2872-436f-b610-6cf723114b71" for="label-e65d63" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #18002
          opened <relative-time datetime="2024-11-25T11:29:36Z" class="no-wrap">Nov 25, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by ahmehri" data-hovercard-type="user" data-hovercard-url="/users/ahmehri/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3Aahmehri">ahmehri</a>

      </span>

      <span class="d-none d-md-inline-flex">

<batch-deferred-content data-url="/pull_request_review_decisions">
  <input type="hidden" name="pull_request_id" value="2198200140" data-targets="batch-deferred-content.inputs" autocomplete="off" />


  <span class="Skeleton d-inline-block ml-1 Skeleton--text">Loading…</span>

</batch-deferred-content>




      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to ahmehri">

            <a class="avatar avatar-user" aria-label="ahmehri’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3Aahmehri+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/3668245?s=40&amp;v=4" width="20" height="20" alt="@ahmehri" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/18002" class="Link--muted" aria-label="9 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">9</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [FEC-131] Provide the migration setup for shared components" href="/commercetools/merchant-center-frontend/pull/18002"></a>
</div>
</div>


<div id="issue_17869" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2605038663" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17869" aria-labelledby="issue_17869_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17869_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17869/hovercard" href="/commercetools/merchant-center-frontend/pull/17869">Managing shared components during React Router v6 migration</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="ae57546d58b637393842419095d69ea657234284" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-e6efb1" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-dfa97423-327f-46f7-ae7d-fc93a3f16492" for="label-e6efb1" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-34432d" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9A%A7+Status%3A+WIP%22" data-name="🚧 Status: WIP" style="--label-r:238;--label-g:238;--label-b:238;--label-h:0;--label-s:0;--label-l:93;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🚧 Status: WIP
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17869
          opened <relative-time datetime="2024-10-22T10:36:42Z" class="no-wrap">Oct 22, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17869#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to CarlosCortizasCT">

            <a class="avatar avatar-user" aria-label="CarlosCortizasCT’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3ACarlosCortizasCT+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17869" class="Link--muted" aria-label="3 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">3</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. Managing shared components during React Router v6 migration" href="/commercetools/merchant-center-frontend/pull/17869"></a>
</div>
</div>


<div id="issue_17475" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2488283575" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17475" aria-labelledby="issue_17475_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17475_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17475/hovercard" href="/commercetools/merchant-center-frontend/pull/17475">FEC-39: Test data migration batch 2</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="dbd46c41302a8e3ddbd3303915caaa8337b90c54" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-a891ca" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-9d57995b-e033-4c1b-a537-65a7f3d2a5f4" for="label-a891ca" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-28ac55" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9B%91+Status%3A+blocked%22" data-name="🛑 Status: blocked" style="--label-r:0;--label-g:0;--label-b:0;--label-h:0;--label-s:0;--label-l:0;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🛑 Status: blocked
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17475
          opened <relative-time datetime="2024-08-27T05:03:36Z" class="no-wrap">Aug 27, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by jaikumar-tj" data-hovercard-type="user" data-hovercard-url="/users/jaikumar-tj/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3Ajaikumar-tj">jaikumar-tj</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17475#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to jaikumar-tj">

            <a class="avatar avatar-user" aria-label="jaikumar-tj's assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3Ajaikumar-tj+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/83634106?s=40&amp;v=4" width="20" height="20" alt="@jaikumar-tj" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17475" class="Link--muted" aria-label="2 comments">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">2</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. FEC-39: Test data migration batch 2" href="/commercetools/merchant-center-frontend/pull/17475"></a>
</div>
</div>


<div id="issue_17397" class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row " data-id="2462751246" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
<div class="d-flex Box-row--drag-hide position-relative">

    <label class="flex-shrink-0 py-2 pl-3  d-none d-md-block">
      <input type="checkbox" data-check-all-item class="js-issues-list-check" name="issues[]" value="17397" aria-labelledby="issue_17397_link" autocomplete="off">
    </label>

  <div class="flex-shrink-0 pt-2 pl-3">
    <span class="tooltipped tooltipped-e" aria-label="Draft Pull Request">
      <svg class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
    </span>
  </div>

  <!-- Issue title column -->
  <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2">

    <a id="issue_17397_link" class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title" data-hovercard-type="pull_request" data-hovercard-url="/commercetools/merchant-center-frontend/pull/17397/hovercard" href="/commercetools/merchant-center-frontend/pull/17397">[FEC-38] Migrate away from local test data models (batch 1)</a>


<batch-deferred-content class="d-inline-block" data-url="/commercetools/merchant-center-frontend/commits/checks-statuses-rollups">
  <input type="hidden" name="oid" value="822afefadd840face1b096f1318676bc7f09a838" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="dropdown_direction" value="e" data-targets="batch-deferred-content.inputs" autocomplete="off" />
  <input type="hidden" name="disable_live_updates" value="true" data-targets="batch-deferred-content.inputs" autocomplete="off" />



<div class="commit-build-statuses">
  <span class="Skeleton d-inline-block" style="width:12px; height:12px;"></span>
</div>

</batch-deferred-content>

      <span class="lh-default d-block d-md-inline">

<a id="label-aa9042" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3Afe-chapter-rotation" data-name="fe-chapter-rotation" style="--label-r:212;--label-g:197;--label-b:249;--label-h:257;--label-s:81;--label-l:87;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              fe-chapter-rotation
</a>
<tool-tip id="tooltip-16d47b91-cbe4-4cde-9c0f-7213eabd0d29" for="label-aa9042" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Tasks coming from frontend chapter work</tool-tip>

<a id="label-1a419a" href="/commercetools/merchant-center-frontend/pulls?q=is%3Apr+is%3Aopen+label%3A%22%F0%9F%9B%91+Status%3A+blocked%22" data-name="🛑 Status: blocked" style="--label-r:0;--label-g:0;--label-b:0;--label-h:0;--label-s:0;--label-l:0;" data-view-component="true" class="IssueLabel hx_IssueLabel">
              🛑 Status: blocked
</a>
      </span>
    <div class="d-flex mt-1 text-small color-fg-muted">
      <span class="opened-by">
        #17397
          opened <relative-time datetime="2024-08-13T08:37:55Z" class="no-wrap">Aug 13, 2024</relative-time> by
          <a class="Link--muted" title="Open pull requests created by CarlosCortizasCT" data-hovercard-type="user" data-hovercard-url="/users/CarlosCortizasCT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+is%3Aopen+author%3ACarlosCortizasCT">CarlosCortizasCT</a>

      </span>

      <span class="d-none d-md-inline-flex">

<span class="d-inline-block ml-1">
  &bull;
  <a class="Link--muted"
      href="/commercetools/merchant-center-frontend/pull/17397#partial-pull-merging">
    Draft
  </a>
</span>





      </span>

    </div>
  </div>

  <div class="flex-shrink-0 col-4 col-md-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

    <span class="ml-2 flex-1 flex-shrink-0">
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
      <div class="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
        <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
          aria-label="Assigned to CarlosCortizasCT">

            <a class="avatar avatar-user" aria-label="CarlosCortizasCT’s assigned issues" href="/commercetools/merchant-center-frontend/pulls?q=assignee%3ACarlosCortizasCT+is%3Aopen">
              <img class="from-avatar avatar-user" src="https://avatars.githubusercontent.com/u/97907068?s=40&amp;v=4" width="20" height="20" alt="@CarlosCortizasCT" />
</a>          </div>
      </div>
    </span>

    <span class="ml-2 flex-1 flex-shrink-0">
        <a href="/commercetools/merchant-center-frontend/pull/17397" class="Link--muted" aria-label="1 comment">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment v-align-middle">
  <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
          <span class="text-small text-bold">1</span>
        </a>
    </span>
  </div>

    <a class="d-block d-md-none position-absolute top-0 bottom-0 left-0 right-0" aria-label="Link to Issue. [FEC-38] Migrate away from local test data models (batch 1)" href="/commercetools/merchant-center-frontend/pull/17397"></a>
</div>
</div>

      </div>
    </div>
</div>

<div class="paginate-container d-none d-sm-flex flex-sm-justify-center">

</div>

<div class="paginate-container d-sm-none mb-5">

</div>

<div id="issues-index-tip" class="mt-3 text-center color-fg-muted">
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-light-bulb color-fg-muted">
  <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
<strong class="color-fg-default">ProTip!</strong>
Exclude everything labeled <code class="bg-gray-2 bg-gray-3 p-1 rounded">bug</code> with <a class="Link--inTextBlock" href="/commercetools/merchant-center-frontend/issues?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen+-label%3Abug">-label:bug</a>.
</div>



  </div>

</turbo-frame>



<link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-3e154969b9f9.css" /><link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-9c5b7a476542.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-afda8eb0fb33.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-2494e44ccdc5.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-56fff47acadc.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-71cd4cc132ec.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-fd5499848985.css" /><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-31d17ba3e139.css" /><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-68d6b2c79663.css" />
<link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/repository-d031bcc14e1b.css" />
<script type="application/json" id="client-env">{"locale":"en","featureFlags":["copilot_new_references_ui","copilot_beta_features_opt_in","copilot_chat_static_thread_suggestions","copilot_conversational_ux_history_refs","copilot_implicit_context","copilot_smell_icebreaker_ux","copilot_summary_beta","experimentation_azure_variant_endpoint","failbot_handle_non_errors","geojson_azure_maps","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","hovercard_accessibility","issues_advanced_search","issues_react_new_timeline","issues_react_avatar_refactor","issues_react_remove_placeholders","issues_react_blur_item_picker_on_close","marketing_pages_search_explore_provider","primer_react_css_modules_ga","react_keyboard_shortcuts_dialog","remove_child_patch","report_hydro_web_vitals","repository_suggester_elastic_search","sample_network_conn_type","site_metered_billing_update","lifecycle_label_name_updates"],"login":"CarlosCortizasCT"}<\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/wp-runtime-c1534f9fffc2.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-aff936e590ed.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-3abb8f-3f7d38a7b47d.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_failbot_failbot_ts-93b6a0551aa9.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/environment-7b93e0f0c8ff.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-4aa4b0e95669.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-f690fd9ae3d5.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-6d3967acd51c.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_g-emoji-element_di-6ce195-53781cbc550f.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-8e9f78-a74b4e0a8a6b.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_text-expander-element_dist_index_js-f5498b8d4e5d.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-492b5042c841.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-381a4f-a11b2f0361af.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/github-elements-aa9238e3dc93.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/element-registry-477414219299.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-634de60bacfa.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-ce7225a304c5.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c-f8a5485c982a.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-d2aff86c7695.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-6cf3320416b8.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-0e07cc183eed.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-69cfcc-ceb1758d1876.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_updatable-content_updatable-content_ts-3f0e021c7215.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-900dde-24e9d16a679d.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_sticky-scroll-into-view_ts-7cbef09a422c.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-d0d0a6-0e9fa537dc4f.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-fb43816ab83c.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-8db99f5dd334.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-f6223d90c7ba.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/notifications-global-3366f6b6298e.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_hotkey_dist_index_js-d92e69b3521a.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_remote-form_dist_-8c3668-44b10f23d8ad.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_form-utils_form-utils_ts-ui_packages_input-navigation-behavior_input-navigation-b-a97423-97468312ad00.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/issues-35ea55736d3c.js"><\/script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/structured-issues-eb321c77cee9.js"><\/script>

<meta name="turbo-body-classes" content="logged-in env-production page-responsive">

<div id="pjax-head" data-turbo-head>
<title>Pull requests · commercetools/merchant-center-frontend</title>

<meta http-equiv="x-pjax-version" content="bf3f6df9b36cef4624914703ba2dfda940d78c1d75a40736e28dd4ac27f80bf8" data-turbo-track="reload">
<meta http-equiv="x-pjax-csp-version" content="ace39c3b6632770952207593607e6e0be0db363435a8b877b1f96abe6430f345" data-turbo-track="reload">
<meta http-equiv="x-pjax-css-version" content="1fb27b5bf0efbb1230e2590837c93a39cc72f9f723905b9c68584e6cc4b5bc60" data-turbo-track="reload">
<meta http-equiv="x-pjax-js-version" content="f8525cce27f6e4be671125ebe8b9a7fe476451ee7a001d466b8b78f927579f1d" data-turbo-track="reload">
<meta name="route-pattern" content="/:user_id/:repository/pulls(.:format)" data-turbo-transient>
<meta name="route-controller" content="issues" data-turbo-transient>
<meta name="route-action" content="index" data-turbo-transient>

<meta name="selected-link" value="repo_pulls" data-turbo-transient>


<meta name="analytics-location-query-strip" content="true" data-turbo-transient="true" /><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/pull_requests/index" data-turbo-transient="true" />
<meta name="request-id" content="CAD8:3BB6AE:1DE5A55:1E7A6C2:67509E80" data-turbo-transient="true" /><meta name="html-safe-nonce" content="9ddc3fa8a5d94acd2d39d9a3d808187487e55faed92f8e3cadbf8476e8d3a7c3" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9jb21tZXJjZXRvb2xzL21lcmNoYW50LWNlbnRlci1mcm9udGVuZC9wdWxscz9xPWlzJTNBcHIrbGFiZWwlM0FmZS1jaGFwdGVyLXJvdGF0aW9uKyIsInJlcXVlc3RfaWQiOiJDQUQ4OjNCQjZBRToxREU1QTU1OjFFN0E2QzI6Njc1MDlFODAiLCJ2aXNpdG9yX2lkIjoiMjg3OTYzNDE5MTk2Nzg1MDg5NyIsInJlZ2lvbl9lZGdlIjoiZnJhIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-turbo-transient="true" /><meta name="visitor-hmac" content="26edee8d4480fe59bd8884065579c6d315207c522339fd9448a2fab3692a390f" data-turbo-transient="true" />
<link rel="sso-modal" href="/orgs/commercetools/sso_modal" data-turbo-transient="true" /><link rel="sso-session" href="/orgs/commercetools/sso_status.json" data-turbo-transient="true" /><meta name="sso-expires-around" content="1733386425" data-turbo-transient="true" />
<meta name="github-keyboard-shortcuts" content="repository,pull-request-list,pull-request-conversation,pull-request-files-changed,copilot" data-turbo-transient="true" />

  <meta name="hovercard-subject-tag" content="repository:37197353" data-turbo-transient>


<meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">


<meta name="current-catalog-service-hash" content="ae870bc5e265a340912cde392f23dad3671a0a881730ffdadd82f2f57d81641b">


    <link rel="canonical" href="https://github.com/commercetools/merchant-center-frontend/pulls" data-turbo-transient>




</div>

<div id="js-flash-container" class="flash-container" data-turbo-replace>




<template class="js-flash-template">

<div class="flash flash-full   {{ className }}">
<div >
  <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
  </button>
  <div aria-atomic="true" role="alert" class="js-flash-alert">

    <div>{{ message }}</div>

  </div>
</div>
</div>
</template>
</div>

<div id="responsive-meta-container" data-turbo-replace>
</div>



          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="8" data-view-component="true" class="Counter">8</span>

      <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="96" data-view-component="true" class="Counter">96</span>
`},Symbol.toStringTag,{value:"Module"}))});
