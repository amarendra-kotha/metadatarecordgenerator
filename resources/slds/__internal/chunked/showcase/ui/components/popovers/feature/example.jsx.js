var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/popovers/feature/example.jsx.js"]=function(e){function t(t){for(var s,i,o=t[0],r=t[1],c=t[2],m=0,u=[];m<o.length;m++)i=o[m],l[i]&&u.push(l[i][0]),l[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==l[r]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},l={119:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;return n.push([201,0]),a()}({0:function(e,t){e.exports=React},201:function(e,t,a){"use strict";a.r(t),a.d(t,"examples",function(){return c});var s=a(0),l=a.n(s),n=a(9),i=a(26),o=a(96),r=a(6).c.uniqueId("dialog-heading-id-");t.default=l.a.createElement(i.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))));var c=[{id:"icon-text",label:"With icon and text",element:l.a.createElement(i.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))))},{id:"icon-header-text-link",label:"With icon, header, text, and link",element:l.a.createElement(i.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:r,closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"smiley_and_people"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:r,className:"slds-text-heading_small"},"Title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," ",l.a.createElement("a",{href:"javascript:void(0);"},"Learn more")))))},{id:"icon-header-text",label:"With icon, header, and text",element:l.a.createElement(i.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:r,closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"description"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:r,className:"slds-text-heading_small"},"Title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},{id:"icon-header-text-footer",label:"With icon, header, text, and footer",element:l.a.createElement(i.Popover,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:r,footer:l.a.createElement(o.Footer,{learnMoreButton:!0}),closeButton:!0,inverse:!0},l.a.createElement("div",{className:"slds-media"},l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},l.a.createElement(n.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),l.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{id:r,className:"slds-text-heading_small"},"Title"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}]}});