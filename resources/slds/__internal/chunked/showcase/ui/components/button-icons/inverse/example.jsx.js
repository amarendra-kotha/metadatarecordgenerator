var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/button-icons/inverse/example.jsx.js"]=function(e){function t(t){for(var r,i,a=t[0],l=t[1],c=t[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={21:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;return s.push([165,0]),n()}({0:function(e,t){e.exports=React},165:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",function(){return i}),n.d(t,"states",function(){return a}),n.d(t,"examples",function(){return l});var r=n(0),o=n.n(r),s=n(4),i=function(e){return o.a.createElement("div",{style:{padding:"0.5rem",backgroundColor:"#16325C"}},e.children)};t.default=o.a.createElement(s.b,{assistiveText:"Search",title:"Search",theme:"inverse",symbol:"search"});var a=[{id:"disabled",label:"Disabled",element:o.a.createElement(s.b,{assistiveText:"Search",title:"Search",theme:"inverse",symbol:"search",disabled:!0})}],l=[{id:"with-dropdown",label:"With dropdown",element:o.a.createElement(s.b,{hasDropdown:!0,theme:"transparent",className:"slds-button_icon-inverse",assistiveText:"More options",title:"More Options"})},{id:"hint-hover",label:"Hint on hover",element:o.a.createElement("div",{className:"slds-hint-parent"},o.a.createElement(s.b,{theme:"inverse",iconClassName:"slds-button__icon_inverse-hint",assistiveText:"More options",title:"More Options"}))}]}});