/*! @license ScrollReveal v4.0.0

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ScrollReveal=t()}(this,function(){"use strict";
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function r(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function o(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&n.test(t)&&(0===e.length||r(e[0]))}
/*! @license Tealight v0.3.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function d(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(r);if(r(e))return[e];if(o(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(i){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n \u2014 "+e}),console.log(i,"color: #ea654b;")}}function a(){var n=this,e=function(){return{active:[],stale:[]}},i=e(),t=e(),r=e();try{f(d("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(o){throw o}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function p(e){var i,r=this;try{f(d(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),e.setAttribute("style",n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(t){return h.call(this,"Clean failed.",t.message)}if(i)try{a.call(this)}catch(t){return h.call(this,"Clean failed.",t.message)}}function i(){var n=this;f(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}
/*! @license Rematrix v0.2.2

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function m(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6!==e.length)throw new RangeError("Expected array with either 6 or 16 values.");var t=c();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}function c(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function E(e,t){for(var n=m(e),i=m(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],u=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=u}return r}function j(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return m(t[2].split(", ").map(parseFloat))}return c()}function T(e){var t=Math.PI/180*e,n=c();return n[5]=n[10]=Math.cos(t),n[6]=n[9]=Math.sin(t),n[9]*=-1,n}function O(e){var t=Math.PI/180*e,n=c();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}function x(e){var t=Math.PI/180*e,n=c();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function k(e,t){var n=c();return n[0]=e,n[5]="number"==typeof t?t:e,n}function A(e){var t=c();return t[12]=e,t}function R(e){var t=c();return t[13]=e,t}function y(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s=parseFloat(t.opacity),a=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),c={computed:s!==a?"opacity: "+s+";":"",generated:s!==a?"opacity: "+a+";":""},l=[];if(parseFloat(i.distance)){var u="top"===i.origin||"bottom"===i.origin?"Y":"X",d=i.distance;"top"!==i.origin&&"left"!==i.origin||(d=/^-/.test(d)?d.substr(1):"-"+d);var f=d.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),h=f[0];switch(f[1]){case"em":d=parseInt(t.fontSize)*h;break;case"px":d=h;break;case"%":d="Y"===u?e.node.getBoundingClientRect().height*h/100:e.node.getBoundingClientRect().width*h/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===u?l.push(R(d)):l.push(A(d))}i.rotate.x&&l.push(T(i.rotate.x)),i.rotate.y&&l.push(O(i.rotate.y)),i.rotate.z&&l.push(x(i.rotate.z)),1!==i.scale&&(0===i.scale?l.push(k(2e-4)):l.push(k(i.scale)));var p={};if(l.length){p.property=_("transform"),p.computed={raw:t[p.property],matrix:j(t[p.property])},l.unshift(p.computed.matrix);var m=l.reduce(E);p.generated={initial:p.property+": matrix3d("+m.join(", ")+");","final":p.property+": matrix3d("+p.computed.matrix.join(", ")+");"}}else p.generated={initial:"","final":""};var y={};if(c.generated||p.generated.initial){y.property=_("transition"),y.computed=t[y.property],y.fragments=[];var v=i.delay,g=i.duration,b=i.easing;c.generated&&y.fragments.push({delayed:"opacity "+g/1e3+"s "+b+" "+v/1e3+"s",instant:"opacity "+g/1e3+"s "+b+" 0s"}),p.generated.initial&&y.fragments.push({delayed:p.property+" "+g/1e3+"s "+b+" "+v/1e3+"s",instant:p.property+" "+g/1e3+"s "+b+" 0s"}),y.computed&&!y.computed.match(/all 0s/)&&y.fragments.unshift({delayed:y.computed,instant:y.computed});var w=y.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});y.generated={delayed:y.property+": "+w.delayed+";",instant:y.property+": "+w.instant+";"}}else y.generated={delayed:"",instant:""};return{inline:r,opacity:c,position:n,transform:p,transition:y}}function l(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?u.call(this,e,i):t.reset||o?v.call(this,e):void 0}function u(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated["final"]];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),g.call(this,e,t)}function v(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),g.call(this,e)}function g(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&p.call(n,e.node)},i-s)}}function b(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return l.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new q(n,"visible",this.store),o=new q(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return P.call(this,n,r.body[0],-1,t),P.call(this,n,r.body[0],1,t),l.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return P.call(this,n,i,-1,t),l.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return P.call(this,n,i,1,t),l.call(this,e,{reveal:!0,pristine:t})}}function w(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=ee(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function q(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function P(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&b.call(r,a,i)},e.interval)}function I(){var n=this;a.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated["final"])):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial)),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function L(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function M(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),M(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function N(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,u=[],n=a.interval||V.interval;try{n&&(l=new w(n));var i=d(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(M(n,c.store.elements[i]),n.node.setAttribute("style",n.styles.inline.computed)):(n.id=ee(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=M({},n.config||c.defaults,a);if(!r.mobile&&L()||!r.desktop&&!L())return i&&p.call(c,n),e;var o,s=d(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=z(s,u,c.store.containers))&&(o=ee(),u.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=y(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(r){return h.call(this,"Reveal failed.",r.message)}f(u,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(I.bind(this),0))}function z(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}function F(){var t=this;f(this.store.history,function(e){N.call(t,e.target,e.options,!0)}),I.call(this)}function D(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function S(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function C(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r={top:e.geometry.bounds.top+e.geometry.height*n,right:e.geometry.bounds.right-e.geometry.width*n,bottom:e.geometry.bounds.bottom-e.geometry.height*n,left:e.geometry.bounds.left+e.geometry.width*n},o={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return r.top<o.bottom&&r.right>o.left&&r.bottom>o.top&&r.left<o.right||"fixed"===e.styles.position}}function W(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),re(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=D.call(i,e,!0));var t=S.call(i,e);e.scroll&&(e.direction={x:ne(t.left-e.scroll.left),y:ne(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){n&&(e.geometry=D.call(i,e)),e.visible=C.call(i,e)}),f(t,function(e){e.sequence?b.call(i,e):l.call(i,e)}),i.pristine=!1})}function e(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function t(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}function Y(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==Y.prototype)return new Y(e);if(!Y.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),Z;try{t=M({},J||V,e)}catch(n){return h.call(this,"Instantiation failed.","Invalid configuration.",n.message),Z}try{if(!d(t.container)[0])throw new Error("Invalid container.");if(!t.mobile&&L()||!t.desktop&&!L())throw new Error("This device is disabled.")}catch(n){return h.call(this,"Instantiation failed.",n.message),Z}return J=t,document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"}),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,H=H||W.bind(this),B=B||i.bind(this),U=U||N.bind(this),X=X||p.bind(this),G=G||F.bind(this),Object.defineProperty(this,"delegate",{get:function(){return H}}),Object.defineProperty(this,"destroy",{get:function(){return B}}),Object.defineProperty(this,"reveal",{get:function(){return U}}),Object.defineProperty(this,"clean",{get:function(){return X}}),Object.defineProperty(this,"sync",{get:function(){return G}}),Object.defineProperty(this,"defaults",{get:function(){return J}}),Object.defineProperty(this,"version",{get:function(){return oe}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Q||(Q=this)}var n,$,H,B,U,X,G,J,K,Q,V={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!0,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function se(){},afterReveal:function ae(){},beforeReset:function ce(){},beforeReveal:function le(){}},Z={clean:function p(){},destroy:function i(){},reveal:function N(){},sync:function F(){},get noop(){return!0}},_=function(){function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}var n={},i=document.documentElement.style;return e.clearCache=function(){return n={}},e}(),ee=(n=0,function(){return n++}),te=function(e){return(0<e)-(e<0)||+e},ne=Math.sign||te
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/,ie=($=Date.now(),function(e){var t=Date.now();16<t-$?e($=t):setTimeout(function(){return ie(e)},0)}),re=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie,oe="4.0.0";return Y.isSupported=function(){return e()&&t()},Object.defineProperty(Y,"debug",{get:function(){return K||!1},set:function(e){return K="boolean"==typeof e?e:K}}),Y(),Y});