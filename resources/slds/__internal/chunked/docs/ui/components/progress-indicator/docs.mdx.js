var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/progress-indicator/docs.mdx.js"]=function(e){function t(t){for(var l,c,n=t[0],o=t[1],i=t[2],m=0,p=[];m<n.length;m++)c=n[m],r[c]&&p.push(r[c][0]),r[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(d&&d(t);p.length;)p.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(l=!1)}l&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},r={58:0},s=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(a,l,function(t){return e[t]}.bind(null,l));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var n=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var i=0;i<n.length;i++)t(n[i]);var d=o;return s.push([291,0]),a()}({0:function(e,t){e.exports=React},132:function(e,t,a){var l=a(133);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0};a(74)(l,r);l.locals&&(e.exports=l.locals)},133:function(e,t){e.exports=".docs-codeblock-example .slds-backdrop {\n  position: absolute; }\n\n.docs-codeblock-example .slds-modal {\n  position: absolute; }\n"},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},291:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),s=a(3),c=a(1),n=a(23),o=a(9),i=a(16),d=a(5),m=a.n(d),p=a(6),b=a(53),u=a(22),E=a(49),h=function(e){return r.a.createElement("div",{className:m()("slds-progress",e.className)},r.a.createElement("ol",{className:"slds-progress__list"},e.children),r.a.createElement(E.a,{className:"slds-progress-bar_x-small",value:e.value}))},O=function(e){return r.a.createElement("li",{className:m()("slds-progress__item",e.className,e.active?"slds-is-active":null,e.done?"slds-is-completed":null,e.error?"slds-has-error":null)},e.done&&!e.error?r.a.createElement(p.b,{className:"slds-progress__marker slds-progress__marker_icon",symbol:"success","aria-describedby":e["aria-describedby"],assistiveText:e.done?e.children+" - Completed":null,title:e.done?e.children+" - Completed":null}):e.error?r.a.createElement(p.b,{className:"slds-progress__marker slds-progress__marker_icon",symbol:"error","aria-describedby":e["aria-describedby"],assistiveText:e.error?e.children+" - Error":null,title:e.error?e.children+" - Error":null}):r.a.createElement("button",{className:"slds-button slds-progress__marker","aria-describedby":e["aria-describedby"]},r.a.createElement("span",{className:"slds-assistive-text"},e.children," ",e.active?"- Active":null)))},j=(r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(h,{value:"0"},r.a.createElement(O,{active:!0},"Step 1"),r.a.createElement(O,null,"Step 2"),r.a.createElement(O,null,"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5"))),r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(h,{value:"25"},r.a.createElement(O,{done:!0},"Step 1"),r.a.createElement(O,{active:!0},"Step 2"),r.a.createElement(O,null,"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5"))),r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(h,{value:"25"},r.a.createElement(O,{done:!0},"Step 1"),r.a.createElement(O,{error:!0},"Step 2"),r.a.createElement(O,null,"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5"))),r.a.createElement("div",{className:"demo-only",style:{padding:"3rem 1rem 0"}},r.a.createElement(h,{value:"50"},r.a.createElement(O,{done:!0},"Step 1"),r.a.createElement(O,{done:!0},"Step 2"),r.a.createElement(O,{active:!0,"aria-describedby":"step-3-tooltip"},"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5")),r.a.createElement(b.a,{className:"slds-nubbin_bottom",id:"step-3-tooltip",style:{position:"absolute",top:"0px",left:"calc(50% + 7px)",transform:"translateX(-50%)"}},"Verify Email")),r.a.createElement("div",{className:"demo-only",style:{height:"640px"}},r.a.createElement(u.b,{className:"slds-modal_large","aria-labelledby":"header43"},r.a.createElement(u.e,null,r.a.createElement("h2",{id:"header43",className:"slds-text-heading_medium"},"Modal Header")),r.a.createElement(u.c,{className:"slds-grow slds-p-around_medium"}),r.a.createElement(u.d,{className:"slds-grid slds-grid_align-spread"},r.a.createElement("button",{className:"slds-button slds-button_neutral"},"Cancel"),r.a.createElement(h,{className:"slds-progress_shade",value:"25"},r.a.createElement(O,{done:!0},"Step 1"),r.a.createElement(O,{active:!0},"Step 2"),r.a.createElement(O,null,"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5")),r.a.createElement("button",{className:"slds-button slds-button_brand"},"Save"))),r.a.createElement("div",{className:"slds-backdrop slds-backdrop_open"})),r.a.createElement("div",{className:"demo-only",style:{background:"#F3F2F2",padding:"1rem"}},r.a.createElement(h,{className:"slds-progress_shade",value:"25"},r.a.createElement(O,{done:!0},"Step 1"),r.a.createElement(O,{active:!0},"Step 2"),r.a.createElement(O,null,"Step 3"),r.a.createElement(O,null,"Step 4"),r.a.createElement(O,null,"Step 5"))),a(47));a(132);a.d(t,"getElement",function(){return y}),a.d(t,"getContents",function(){return f});var S=s.c.code,v=s.c.h2,g=s.c.h3,_=s.c.p,y=function(){return Object(l.createElement)(s.b,{},Object(l.createElement)("div",{className:"doc lead"},"A progress indicator component communicates to the user the progress of a particular process."),Object(l.createElement)(c.a,{exampleOnly:!0},Object(l.createElement)(h,{value:"50"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{done:!0},"Step 2"),Object(l.createElement)(O,{active:!0},"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5"))),v({id:"About-Progress-Indicator"},"About Progress Indicator"),g({id:"Implementation-Requirements"},"Implementation Requirements"),_({},"The ",Object(l.createElement)("code",{className:"doc"},".slds-progress-bar")," accepts a range from 0% to 100%, and this percentage should be applied with inline styling to the ",Object(l.createElement)("code",{className:"doc"},"div")," with class ",Object(l.createElement)("code",{className:"doc"},"slds-progress-bar__value")," using JavaScript. If implementing a horizontal progress indicator, set the width, otherwise set the height for vertical progress indicators."),g({id:"Accessibility"},"Accessibility"),_({},"As the percentage of completion changes, be sure to update the ",Object(l.createElement)("code",{className:"doc"},"aria-valuenow")," property on the ",S({},"<div>")," with ",S({},'class="slds-progress-bar"'),", as well as the ",S({},"slds-assistive-text")," ",S({},"<span>"),"."),Object(l.createElement)(n.a,{toggleCode:!1},Object(l.createElement)("div",{className:"slds-progress-bar slds-progress-bar_x-small","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"50",role:"progressbar"},Object(l.createElement)("span",{className:"slds-progress-bar__value",style:{width:"50%"}},Object(l.createElement)("span",{className:"slds-assistive-text"},"Progress: 50%")))),v({id:"Base"},"Base"),Object(l.createElement)(o.a,{title:"Progress Indicator Base Horizontal"},Object(l.createElement)(c.a,null,Object(l.createElement)(h,{value:"0"},Object(l.createElement)(O,{active:!0},"Step 1"),Object(l.createElement)(O,null,"Step 2"),Object(l.createElement)(O,null,"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")))),v({id:"Horizontal"},"Horizontal"),g({id:"Active-Step"},"Active Step"),_({},"When a step becomes active, the ",S({},"<div>")," with class ",S({},".slds-progress__item")," should also get the class ",S({},".slds-is-active"),"."),_({},Object(l.createElement)(i.a,{type:"a11y",header:"Accessibility Requirements"},'When a step is active, be sure to append "- Active" to the hidden button text in the ',S({},"<span>")," with class ",S({},"slds-assistive-text"),", such as ",S({},"Step 1 - Active"),".")),Object(l.createElement)(o.a,{title:"Progress Indicator Active Horizontal"},Object(l.createElement)(c.a,null,Object(l.createElement)(h,{value:"0"},Object(l.createElement)(O,{active:!0},"Step 1"),Object(l.createElement)(O,null,"Step 2"),Object(l.createElement)(O,null,"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")))),g({id:"Completed-Step"},"Completed Step"),_({},"When the step is completed, the ",S({},".slds-is-active")," class should be replaced with the class ",S({},".slds-is-completed")," on ",S({},".slds-progress__item"),". At that point, the ",S({},".slds-progress__item"),' element will receive a "success" icon, providing feedback that the step has been completed.'),_({},Object(l.createElement)(i.a,{type:"a11y",header:"Accessibility Requirements"},'When a step is completed, be sure to append "- Completed" to the hidden button text in the ',S({},"<span>")," with class ",S({},"slds-assistive-text"),", such as ",S({},"Step 2 - Completed"),".")),Object(l.createElement)(o.a,{title:"Progress Indicator Done Horizontal"},Object(l.createElement)(c.a,null,Object(l.createElement)(h,{value:"50"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{done:!0},"Step 2"),Object(l.createElement)(O,{active:!0},"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")))),g({id:"Error-in-a-Step"},"Error in a Step"),_({},"When an error has occurred on a step, the ",S({},"<div>")," with class ",S({},".slds-progress__item")," should also get the class ",S({},".slds-has-error"),"."),_({},Object(l.createElement)(i.a,{type:"a11y",header:"Accessibility Requirements"},'When a step has an error, be sure to append "- Error" to the hidden button text in the ',S({},"<span>")," with class ",S({},"slds-assistive-text"),", such as ",S({},"Step 3 - Error"),".")),Object(l.createElement)(o.a,{title:"Progress Indicator Done Horizontal"},Object(l.createElement)(c.a,null,Object(l.createElement)(h,{value:"50"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{done:!0},"Step 2"),Object(l.createElement)(O,{error:!0},"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")))),g({id:"Step-Title-Tooltip"},"Step Title Tooltip"),Object(l.createElement)(i.a,{type:"a11y",header:"Accessibility Requirements"},"When a step's tooltip is visible, the step's button needs the ",Object(l.createElement)("code",{className:"doc"},"aria-describedby")," attribute, whose value should be the ",Object(l.createElement)("code",{className:"doc"},"id")," of the associated tooltip."),Object(l.createElement)(o.a,{title:"Progress Indicator Tooltip Horizontal"},Object(l.createElement)(c.a,null,Object(l.createElement)("div",{style:{padding:"3.5rem 1rem 0"}},Object(l.createElement)(h,{value:"50"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{done:!0},"Step 2"),Object(l.createElement)(O,{active:!0,"aria-describedby":"step-3-tooltip"},"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")),Object(l.createElement)(b.a,{className:"slds-nubbin_bottom",id:"step-3-tooltip",style:{position:"absolute",top:"1rem",left:"calc(50% + 6px)",transform:"translateX(-50%)"}},"Verify Email")))),g({id:"In-a-Modal"},"In a Modal"),Object(l.createElement)(o.a,{title:"Progress Indicator Horizontal in Modal"},Object(l.createElement)(c.a,{style:{height:"640px"}},Object(l.createElement)("div",null,Object(l.createElement)(u.b,{className:"slds-modal_large","aria-labelledby":"header43"},Object(l.createElement)(u.e,null,Object(l.createElement)("h2",{id:"header43",className:"slds-text-heading_medium"},"Modal Header")),Object(l.createElement)(u.c,{className:"slds-grow slds-p-around_medium"}),Object(l.createElement)(u.d,{className:"slds-grid slds-grid_align-spread"},Object(l.createElement)("button",{className:"slds-button slds-button_neutral"},"Cancel"),Object(l.createElement)(h,{className:"slds-progress_shade",value:"25"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{active:!0},"Step 2"),Object(l.createElement)(O,null,"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")),Object(l.createElement)("button",{className:"slds-button slds-button_brand"},"Save"))),Object(l.createElement)("div",{className:"slds-backdrop slds-backdrop_open"})))),g({id:"On-a-Gray-Background"},"On a Gray Background"),Object(l.createElement)(o.a,{title:"Progress Indicator Horizontal Gray Background"},Object(l.createElement)(c.a,{style:{background:"#F3F2F2",padding:"1rem"}},Object(l.createElement)(h,{className:"slds-progress_shade",value:"25"},Object(l.createElement)(O,{done:!0},"Step 1"),Object(l.createElement)(O,{active:!0},"Step 2"),Object(l.createElement)(O,null,"Step 3"),Object(l.createElement)(O,null,"Step 4"),Object(l.createElement)(O,null,"Step 5")))),v({id:"Vertical"},"Vertical"),_({},"To display a vertical progress indicator, the ",S({},"<div>")," with class ",S({},".slds-progress")," should also get the class ",S({},".slds-progress_vertical"),". The vertical progress indicator will take up 100% of the height of its container. The step titles in the vertical variant appear next to the step, instead of in a tooltip."),_({},Object(l.createElement)(i.a,{type:"note",header:"Implementation Note"},"The key markup difference between the horizontal and vertical variants is the progress markers. Horizontal progress indicators use ",S({},"<button>")," for each step, whereas Vertical progress indicator steps are not interactive and therefore simply use ",S({},"<div>"),".")),Object(l.createElement)(o.a,{title:"Progress Indicator Vertical"},Object(l.createElement)(c.a,null,Object(l.createElement)(j.a,{value:"25"},Object(l.createElement)(j.b,{done:!0},"Step 1"),Object(l.createElement)(j.b,{active:!0},"Step 2"),Object(l.createElement)(j.b,null,"Step 3"),Object(l.createElement)(j.b,null,"Step 4"),Object(l.createElement)(j.b,null,"Step 5")))),g({id:"Green-Success"},"Green Success"),_({},"To create a green completed step, the ",S({},".slds-progress__item")," element should also receive the ",S({},".slds-is-completed")," class. In addition, the ",S({},"<span>")," with class ",S({},".slds-progress__marker_icon")," should also get the class ",S({},"slds-progress__marker_icon-success"),"."),Object(l.createElement)(o.a,{title:"Progress Indicator Vertical Success"},Object(l.createElement)(c.a,null,Object(l.createElement)(j.a,{value:"25"},Object(l.createElement)(j.b,{done:!0,hasSuccessMarker:!0},"Step 1"),Object(l.createElement)(j.b,{active:!0},"Step 2"),Object(l.createElement)(j.b,null,"Step 3"),Object(l.createElement)(j.b,null,"Step 4"),Object(l.createElement)(j.b,null,"Step 5")))),g({id:"Error-in-a-Step-2"},"Error in a Step"),_({},"When an error has occurred on a step, the ",S({},"<div>")," with class ",S({},".slds-progress__item")," should also get the class ",S({},".slds-has-error"),"."),Object(l.createElement)(o.a,{title:"Progress Indicator Vertical Success"},Object(l.createElement)(c.a,null,Object(l.createElement)(j.a,{value:"25"},Object(l.createElement)(j.b,{done:!0},"Step 1"),Object(l.createElement)(j.b,{error:!0},"Step 2"),Object(l.createElement)(j.b,null,"Step 3"),Object(l.createElement)(j.b,null,"Step 4"),Object(l.createElement)(j.b,null,"Step 5")))),g({id:"Multiline-Step-Titles"},"Multiline Step Titles"),_({},"The vertical progress indicator also supports multiline step descriptions."),Object(l.createElement)(o.a,{title:"Progress Indicator Vertical"},Object(l.createElement)(c.a,null,Object(l.createElement)(j.a,{value:"25"},Object(l.createElement)(j.b,{done:!0},"Step 1"),Object(l.createElement)(j.b,{active:!0},"Step 2"),Object(l.createElement)(j.b,null,"Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(l.createElement)(j.b,null,"Step 4"),Object(l.createElement)(j.b,null,"Step 5")))))},f=function(){return Object(s.a)(y())}}});