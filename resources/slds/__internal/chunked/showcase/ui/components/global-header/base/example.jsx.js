var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/global-header/base/example.jsx.js"]=function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],d=0,m=[];d<r.length;d++)i=r[d],a[i]&&m.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);m.length;)m.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={90:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},s=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;return s.push([227,0]),o()}({0:function(e,t){e.exports=React},227:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(2),i=o.n(s),r=o(1),l=o.n(r),c=o(4),u=o(41),d=o(26),m={item1:{username:"Val Handerly",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Could I please have a review on my presentation deck",timestamp:"10 hours ago",unread:!0},item2:{username:"Jon Rogers",avatar:"/assets/images/avatar3.jpg",title:"commented on your post",message:"I totally agree with your sentiment",timestamp:"13 hours ago",unread:!0},item3:{username:"Rebecca Stone",avatar:"/assets/images/avatar2.jpg",title:"mentioned you",message:"@jrogers Here's the conversation I mentioned to you",timestamp:"1 day ago",unread:!1}};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){return a.a.createElement("li",{className:i()("slds-global-header__notification",e.unread&&"slds-global-header__notification_unread",e.className),key:e.index},a.a.createElement("div",{className:"slds-media slds-has-flexi-truncate slds-p-around_x-small"},a.a.createElement("div",{className:"slds-media__figure"},a.a.createElement(u.Avatar,{className:"slds-avatar_small"},a.a.createElement("img",{alt:e.username,src:e.avatar,title:"".concat(e.username," avatar")}))),a.a.createElement("div",{className:"slds-media__body"},a.a.createElement("div",{className:"slds-grid slds-grid_align-spread"},a.a.createElement("a",{href:"javascript:void(0);",className:"slds-text-link_reset slds-has-flexi-truncate"},a.a.createElement("h3",{className:"slds-truncate",title:"".concat(e.username," ").concat(e.title)},a.a.createElement("strong",null,"".concat(e.username," ").concat(e.title))),a.a.createElement("p",{className:"slds-truncate",title:e.message},e.message),a.a.createElement("p",{className:"slds-m-top_x-small slds-text-color_weak"},e.timestamp,e.unread&&a.a.createElement("abbr",{className:"slds-text-link slds-m-horizontal_xxx-small",title:"unread"},"●")))))))},v=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(n=f(t).call(this))||"object"!==b(n)&&"function"!=typeof n?y(o):n).renderNotificationItems=e.renderNotificationItems.bind(y(e)),e}var o,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Component"]),o=t,(s=[{key:"renderNotificationItems",value:function(e){var t=m[e];return a.a.createElement(_,{key:e,index:e,avatar:t.avatar,username:t.username,title:t.title,message:t.message,timestamp:t.timestamp,unread:t.unread})}},{key:"render",value:function(){return a.a.createElement(d.Popover,{className:"slds-popover_large slds-nubbin_top-right",bodyClassName:"slds-p-around_none",headerTitle:"Notifications",closeButton:!0,style:{position:"absolute",top:"calc(100% + 12px)",right:"-12px"}},a.a.createElement("ul",null,Object.keys(m).map(this.renderNotificationItems)))}}])&&p(o.prototype,s),i&&p(o,i),t}(),g=o(79);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,N(t).apply(this,arguments))}var o,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,n["Component"]),o=t,(s=[{key:"render",value:function(){return a.a.createElement(d.Popover,{className:"slds-nubbin_top slds-dynamic-menu",bodyClassName:"slds-p-horizontal_none",title:"My Favorites",footer:a.a.createElement(g.Footer,null),style:{position:"absolute",left:"-8rem",top:"36px"}},a.a.createElement(g.ListboxList,{length:this.props.numberOfFavorites}))}}])&&w(o.prototype,s),i&&w(o,i),t}(),C=o(14),P=o(21);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,k(t).apply(this,arguments))}var o,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,n["Component"]),o=t,(s=[{key:"render",value:function(){return a.a.createElement(C.Menu,{className:"slds-dropdown_right slds-nubbin_top-right",style:{right:"-1rem"}},a.a.createElement(C.MenuList,null,a.a.createElement(C.MenuItem,{iconLeft:a.a.createElement(P.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"event"}),tabIndex:"0"},"New Event"),a.a.createElement(C.MenuItem,{iconLeft:a.a.createElement(P.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"note"}),tabIndex:"0"},"New Note"),a.a.createElement(C.MenuItem,{iconLeft:a.a.createElement(P.StandardIcon,{containerClassName:"slds-m-right_x-small",className:"slds-icon_small",symbol:"email"}),tabIndex:"0"},"New Email")))}}])&&O(o.prototype,s),i&&O(o,i),t}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){return a.a.createElement("div",{className:"slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click"},a.a.createElement("div",{className:"slds-button-group"},a.a.createElement(c.b,{className:i()("slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small",{"slds-is-disabled":e.favoritesDisabled,"slds-is-selected":e.favoritesClicked}),disabled:e.favoritesDisabled,"aria-pressed":e.favoritesClicked?"true":"false",symbol:"favorite",title:"Toggle Favorites",assistiveText:"Toggle Favorite",onClick:function(){return e.toggleFavorite()}}),a.a.createElement(c.b,{className:i()("slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small"),iconClassName:"slds-button__icon_small",symbol:"down",title:"View Favorites",assistiveText:"View Favorites"})),e.showFavoritesPopup&&a.a.createElement(I,{numberOfFavorites:"2"}))};U.propTypes={favoritesDisabled:l.a.bool,favoritesClicked:l.a.bool,showFavoritesPopup:l.a.bool};var H=function(e){return a.a.createElement("div",{className:i()("slds-dropdown-trigger slds-dropdown-trigger_click",e.showTaskMenu&&"slds-is-open")},a.a.createElement(c.b,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action","aria-haspopup":"true",symbol:"add",title:"Global Actions",assistiveText:"Global Actions"}),e.showTaskMenu&&a.a.createElement(M,null))};H.propTypes={showTaskMenu:l.a.bool};var V=function(){return a.a.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},a.a.createElement(c.b,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"question",title:"Help and Training",assistiveText:"Help and Training"}))},G=function(){return a.a.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},a.a.createElement(c.b,{className:"slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action",iconClassName:"slds-global-header__icon","aria-haspopup":"true",symbol:"setup",title:"Setup",assistiveText:"Setup"}))},J=function(e){var t=e.notificationCount?"".concat(e.notificationCount," new notifications"):"no new notifications";return a.a.createElement("div",{className:i()("slds-dropdown-trigger slds-dropdown-trigger_click",e.showNotificationPopup&&"slds-is-open")},a.a.createElement(c.b,{className:i()("slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action",{"slds-incoming-notification":e.showNotification&&e.notificationCount}),iconClassName:"slds-global-header__icon",symbol:"notification",title:t,assistiveText:t,"aria-live":"assertive","aria-atomic":"true"}),a.a.createElement("span",{"aria-hidden":"true",className:i()("slds-notification-badge",e.notificationCount&&"slds-incoming-notification",e.showNotification&&"slds-show-notification")},e.notificationCount),e.showNotificationPopup&&a.a.createElement(v,null))};J.propTypes={notificationCount:l.a.oneOfType([l.a.string,l.a.number]),showNotificationPopup:l.a.bool};var z=function(){return a.a.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_click"},a.a.createElement("button",{className:"slds-button slds-global-actions__avatar slds-global-actions__item-action",title:"person name","aria-haspopup":"true"},a.a.createElement("span",{className:"slds-avatar slds-avatar_circle slds-avatar_medium"},a.a.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))},Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,q(t).apply(this,arguments))}var o,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,a.a.Component),o=t,(n=[{key:"render",value:function(){var e=this.props,t=e.toggleFavorite,o=e.favoritesClicked,n=e.favoritesDisabled,s=e.showFavoritesPopup,i=e.showNotification,r=e.notificationCount,l=e.showNotificationPopup,c=e.showTaskMenu;return a.a.createElement("ul",{className:"slds-global-actions"},a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(U,{toggleFavorite:t,favoritesClicked:o,favoritesDisabled:n,showFavoritesPopup:s})),a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(H,{showTaskMenu:c})),a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(V,null)),a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(G,null)),a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(J,{showNotification:i,notificationCount:r,showNotificationPopup:l})),a.a.createElement("li",{className:"slds-global-actions__item"},a.a.createElement(z,null)))}}])&&A(o.prototype,n),s&&A(o,s),t}();Y.propTypes={favoritesClicked:l.a.bool,favoritesDisabled:l.a.bool,showFavoritesPopup:l.a.bool,showNotification:l.a.bool,notificationCount:l.a.oneOfType([l.a.string,l.a.number]),showNotificationPopup:l.a.bool,showTaskMenu:l.a.bool};var B=Y;function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Navigation"),a.a.createElement("a",{href:"javascript:void(0);",className:"slds-assistive-text slds-assistive-text_focus"},"Skip to Main Content"))},ee=function(){return a.a.createElement("div",{className:"slds-global-header__logo"})},te=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(n=$(t).call(this))||"object"!==K(n)&&"function"!=typeof n?W(o):n).toggleFavorite=e.toggleFavorite.bind(W(e)),e.showNotification=e.showNotification.bind(W(e)),e.showIncomingNotification=e.showIncomingNotification.bind(W(e)),e.state={favoritesClicked:!1,showNotification:!1,notificationCount:0},e}var o,s,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,n["Component"]),o=t,(s=[{key:"toggleFavorite",value:function(){this.setState({favoritesClicked:!this.state.favoritesClicked})}},{key:"showNotification",value:function(){this.setState({showNotification:!this.state.showNotification,notificationCount:1})}},{key:"showIncomingNotification",value:function(){this.setState({notificationCount:++this.state.notificationCount})}},{key:"render",value:function(){var e=this;return a.a.createElement("header",{className:i()("slds-global-header_container",this.props.className)},a.a.createElement(Z,null),a.a.createElement("div",{className:"slds-global-header slds-grid slds-grid_align-spread"},a.a.createElement("div",{className:"slds-global-header__item"},a.a.createElement(ee,null)),!this.props.playground&&a.a.createElement("div",{className:"slds-global-header__item slds-global-header__item_search"},this.props.globalSearch),a.a.createElement("div",{className:"slds-global-header__item"},a.a.createElement(B,{toggleFavorite:this.toggleFavorite,favoritesClicked:this.state.favoritesClicked,favoritesDisabled:this.props.favoritesDisabled,showFavoritesPopup:this.props.showFavoritesPopup,showNotification:this.state.showNotification,notificationCount:this.state.notificationCount,showNotificationPopup:this.props.showNotificationPopup,showTaskMenu:this.props.showTaskMenu}))),this.props.playground&&a.a.createElement("div",{className:"slds-button-group slds-m-around_medium"},a.a.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showNotification()}},"Toggle Notification"),a.a.createElement("button",{className:"slds-button slds-button_neutral",onClick:function(){return e.showIncomingNotification()}},"Increase count")))}}])&&Q(o.prototype,s),r&&Q(o,r),t}(),oe=o(18),ne=o(40),ae=o(19),se=o(10),ie={option0:{name:"Recent Items",label:!0},option1:{name:"Salesforce - 1,000 Licenses",entityMeta:!0,entityType:"Opportunity",entityField:"Propecting"},option2:{name:"Art Vandelay",entityMeta:!0,entityType:"Contact",entityField:"avandelay@vandelay.com"},option3:{name:"Vandelay Industries",entityMeta:!0,entityType:"Account",entityField:"San Francisco"},option4:{name:"Salesforce UK 2016 Events",entityMeta:!0,entityType:"Event",entityField:"$20,000"},option5:{name:"H.E. Pennypacker",entityMeta:!0,entityType:"Lead",entityField:"Nursing"}},re=o(6);o.d(t,"Context",function(){return le}),o.d(t,"states",function(){return ce});var le=function(e){return a.a.createElement("div",{className:"demo-only",style:{height:"340px"}},e.children)},ce=(t.default=a.a.createElement(te,{globalSearch:a.a.createElement(oe.a,{id:re.c.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-1",comboboxID:"primary-search-combobox-id-1",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",results:a.a.createElement(ae.e,{id:"search-listbox-id-1","aria-label":"Recent Items",snapshot:ie,type:"entity",count:6}),resultsType:"listbox",addon:a.a.createElement(ne.b,{id:re.c.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",hasInteractions:!0,comboboxAriaControls:"primary-search-combobox-id-1",listboxId:re.c.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:a.a.createElement(se.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasInteractions:!0})}),[{id:"search-focused-expanded",label:"Global Search - Focused and Exanded",element:a.a.createElement(te,{globalSearch:a.a.createElement(oe.a,{id:re.c.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-2",comboboxID:"primary-search-combobox-id-2",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",results:a.a.createElement(ae.e,{id:"search-listbox-id-2","aria-label":"Recent Items",snapshot:ie,type:"entity",count:6}),resultsType:"listbox",addon:a.a.createElement(ne.b,{id:re.c.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",comboboxAriaControls:"primary-search-combobox-id-2",listboxId:re.c.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:a.a.createElement(se.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1})})})},{id:"search-active-typing",label:"Global Search - Active and typing",element:a.a.createElement(te,{globalSearch:a.a.createElement(oe.a,{id:re.c.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-4",comboboxID:"primary-search-combobox-id-4",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",value:"salesforce",results:a.a.createElement(ae.e,{id:"search-listbox-id-4",term:"salesforce",snapshot:{option1:{term:"Salesforce",beforeTerm:"",afterTerm:".com",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"},option2:{term:"Salesforce",beforeTerm:"",afterTerm:".org",entityMeta:!0,entityType:"Account",entityLocation:"New York, NY"},option3:{term:"Salesforce",beforeTerm:"",afterTerm:"HQ",entityMeta:!0,entityType:"Account",entityLocation:"San Francisco, CA"}},type:"entity",count:6}),resultsType:"listbox","aria-activedescendant":"option0",addon:a.a.createElement(ne.b,{id:re.c.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",comboboxAriaControls:"primary-search-combobox-id-4",listboxId:re.c.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:a.a.createElement(se.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasFocus:!0,isOpen:!0})})},{id:"favorites-disabled",label:"Favorites - Disabled",element:a.a.createElement(te,{favoritesDisabled:!0,globalSearch:a.a.createElement(oe.a,{id:re.c.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-1",comboboxID:"primary-search-combobox-id-1",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",results:a.a.createElement(ae.e,{id:"search-listbox-id-1","aria-label":"Recent Items",snapshot:ie,type:"entity",count:2}),resultsType:"listbox",addon:a.a.createElement(ne.b,{id:re.c.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",hasInteractions:!0,comboboxAriaControls:"primary-search-combobox-id-1",listboxId:re.c.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:a.a.createElement(se.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasInteractions:!0})})},{id:"notification-count-1",label:"Notification - Count +1",element:a.a.createElement(te,{playground:!0,globalSearch:a.a.createElement(oe.a,{id:re.c.uniqueId("combobox-id-"),"aria-controls":"search-listbox-id-1",comboboxID:"primary-search-combobox-id-1",autocomplete:!0,inputContainerClassName:"slds-global-search__form-element",label:"Search Salesforce",hideLabel:!0,placeholder:"Search Salesforce",results:a.a.createElement(ae.e,{id:"search-listbox-id-1","aria-label":"Recent Items",snapshot:ie,type:"entity",count:2}),resultsType:"listbox",addon:a.a.createElement(ne.b,{id:re.c.uniqueId("objectswitcher-combobox-id-"),value:"Accounts",addonPosition:"start",hasInteractions:!0,comboboxAriaControls:"primary-search-combobox-id-1",listboxId:re.c.uniqueId("objectswitcher-listbox-id-")}),addonPosition:"start",comboboxPosition:"end",inputIconPosition:"left",leftInputIcon:a.a.createElement(se.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_xx-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_left",title:!1,assistiveText:!1}),hasInteractions:!0})})}])}});