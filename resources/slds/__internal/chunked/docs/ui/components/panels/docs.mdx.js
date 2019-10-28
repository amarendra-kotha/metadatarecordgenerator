var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/panels/docs.mdx.js"]=function(e){function t(t){for(var a,o,r=t[0],s=t[1],c=t[2],h=0,p=[];h<r.length;h++)o=r[h],i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);p.length;)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={52:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;return l.push([131,0]),n()}({0:function(e,t){e.exports=React},131:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",function(){return P}),n.d(t,"getContents",function(){return x});var a=n(0),i=n(3),l=n(1),o=n(23),r=n(9),s=n(16),c=n(65),d=n(37),h=(n(11),i.c.a),p=i.c.code,u=i.c.h2,f=i.c.h3,m=i.c.h4,b=i.c.li,g=i.c.ol,y=i.c.p,v=i.c.strong,O=i.c.table,j=i.c.tbody,k=i.c.td,_=i.c.th,E=i.c.thead,w=i.c.tr,P=function(){return Object(a.createElement)(i.b,{},Object(a.createElement)("div",{className:"doc lead"},"A panel is typically used to provide supplemental information or form inputs that relate to your primary canvas."),Object(a.createElement)(l.a,{exampleOnly:!0,style:{backgroundColor:"#fafaf9",position:"relative",height:"200px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"toggle"},"A panel body accepts any layout or component")),u({id:"About-Panel"},"About Panel"),y({},"A panel is docked to the left/right side of a viewport and is in the document flow of the canvas or main content."),y({},v({},"Use this component when:")),g({},b({},"The canvas content extends beyond the boundaries of the viewport, while panning and zooming is supported"),b({},"It is not important to see canvas content while completing the task in a Panel"),b({},"The task performed in a Panel is momentary")),y({},"Toggling visibility of a Panel will re-flow the main content."),y({},"The panel should take up 100% of the height of its parent container. In most cases, that would be the viewport or main stage of your application."),u({id:"Base"},"Base"),Object(a.createElement)(r.a,{title:"Panel base"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"600px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"toggle"},"A panel body accepts any layout or component"))),u({id:"Header"},"Header"),y({},"The header is docked to the top of its panel. When the content of the panel body becomes overflowed, the body will provide scrolling while the header remains visible in place."),y({},"The header of a left/right docked panel has left-aligned text by default and one icon that dismisses the panel. The header title should truncate when it becomes too long for the panel width by using the ",p({},"slds-truncate")," class on the title."),Object(a.createElement)(r.a,{title:"Panel base - header"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"50px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"toggle"}))),f({id:"Centered-Text"},"Centered Text"),y({},"To center the header title, add the class ",p({},"slds-panel__header_align-center")," to the ",p({},"<div>")," with class ",p({},"slds-panel__header"),"."),Object(a.createElement)(r.a,{title:"Panel base - header"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"50px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"toggle",hasCenterTitle:!0}))),f({id:"Custom-Header"},"Custom Header"),y({},"If a panel header requires additional elements outside of a title and close button, The panel header needs to have the class ",p({},"slds-panel__header_custom")," added to ",p({},"slds-panel__header"),". This notifies the component that it has a custom layout in the header."),Object(a.createElement)(o.a,{toggleCode:!1},Object(a.createElement)("div",{className:"slds-panel__header slds-panel__header_custom"},"...")),y({},"The ",p({},"<h2>")," which contains the title of the panel requires the class ",p({},"slds-panel__header-title"),"."),u({id:"Invoked-via-Toggle"},"Invoked via Toggle"),Object(a.createElement)(s.a,{type:"a11y",header:"Accessibility Requirement"},"When toggling the visibility, author must manage user focus by placing the user inside the panel when it opens and returning them to the trigger when it closes."),f({id:"Positioning"},"Positioning"),y({},"The ",p({},"slds-panel_docked")," element can be positioned on the left or right side of a viewport by adding the class ",p({},"slds-panel_docked-left")," or ",p({},"slds-panel_docked-right"),"."),m({id:"Left-side"},"Left side"),Object(a.createElement)(r.a,{title:"Panel base - left dock toggle"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"200px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"toggle"},"A panel body accepts any layout or component"))),m({id:"Right-side"},"Right side"),Object(a.createElement)(r.a,{title:"Panel base - right dock toggle"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"200px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"right",invoke:"toggle"},"A panel body accepts any layout or component"))),u({id:"Drilled-In-State"},"Drilled-In State"),Object(a.createElement)(s.a,{type:"note",header:"Design Note"},"If the panel has been drilled into, then the panel displays an arrow facing to the left to indicate the direction the user drilled in from."),Object(a.createElement)(s.a,{type:"a11y",header:"Accessibility Requirement"},"When the user drills in, the author must manage user focus by keeping the user inside the panel when it drills in and returning them to the drill-in trigger when it the user presses the back arrow."),f({id:"Positioning-2"},"Positioning"),m({id:"Left-side-2"},"Left side"),Object(a.createElement)(r.a,{title:"Panel base - Left dock drill in"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"200px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"left",invoke:"drill-in"},"A panel body accepts any layout or component"))),m({id:"Right-side-2"},"Right side"),Object(a.createElement)(r.a,{title:"Panel base - Right dock drill in"},Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"200px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Panel Header",docked:"right",invoke:"drill-in"},"A panel body accepts any layout or component"))),u({id:"Sizing"},"Sizing"),y({},"The panel width can be modified by applying a sizing class to the ",p({},"slds-panel")," element."),y({},"The panels come in 5 different sizes:"),O({},E({},w({},_({},"Width"),_({},"SLDS Class"))),j({},w({},k({},"240px"),k({},p({},"slds-size_small"))),w({},k({},"320px"),k({},p({},"slds-size_medium"))),w({},k({},"400px"),k({},p({},"slds-size_large"))),w({},k({},"640px"),k({},p({},"slds-size_x-large"))),w({},k({},"100%"),k({},p({},"slds-size_full"))))),u({id:"Panel-Visibility"},"Panel Visibility"),f({id:"Open-as-a-drawer"},"Open as a drawer"),y({},"A panel causes reflow by being in the flow of the layout rather than overlayed on top of the content. To achieve this, simply toggle the class ",p({},"slds-is-open")," to the ",p({},"slds-panel_docked")," element."),Object(a.createElement)(r.a,{title:"Panel base - Drawer"},Object(a.createElement)(c.a,{drawer:!0})),u({id:"Panels-for-Filtering"},"Panels for Filtering"),y({},"Filtering lists or reports can be done by using a Filtering expressions inside of a Panel. Check out the ",h({href:"/components/expression/#filtering"},"Filtering expression")," component for different states and accessibility requirements."),y({},Object(a.createElement)(s.a,{type:"a11y",header:"Accessibility Requirement"},"Make sure to use assistive text to improve the clarity of what you might be editing, for example, add ",Object(a.createElement)("code",{className:"doc"},'<span className="slds-assistive-text">Edit filter:</span>')," to the button element inside each filterable object.")),Object(a.createElement)(l.a,{style:{backgroundColor:"#fafaf9",position:"relative",height:"600px",overflow:"hidden"}},Object(a.createElement)(c.b,{size:"medium",title:"Filter",docked:"right",invoke:"toggle"},Object(a.createElement)(d.c,null,Object(a.createElement)("ol",{className:"slds-list_vertical slds-list_vertical-space"},Object(a.createElement)(d.a,{type:"Show Me"},"All Products")),Object(a.createElement)("h3",{className:"slds-text-body_small slds-m-vertical_x-small"},"Matching all these filters"),Object(a.createElement)("ol",{className:"slds-list_vertical slds-list_vertical-space"},Object(a.createElement)(d.a,{type:"Created Date",removable:!0},"equals THIS WEEK"),Object(a.createElement)(d.a,{type:"List Price",removable:!0},'greater than "500"')),Object(a.createElement)(d.d,null)))))},x=function(){return Object(i.a)(P())}},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM}});