(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return a.DiscussionEmbed}}),t.default=void 0;var r=n("UZsz"),o=n("Bp/N"),a=n("HhXV"),i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,o,a=l(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(t.prototype,n),o&&c(t,o),i}(r.default.Component);t.CommentEmbed=m,m.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},m.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,o,i=d(u);function u(){return s(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),y.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),u}(r.default.Component);t.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,o,i=f(u);function u(){return c(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(t.prototype,n),o&&s(t,o),u}(r.default.Component);t.CommentCount=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},u=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),u&&e.apply(o,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(e),Object.keys(t)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e[o]!==t[o]&&!i(e[o]))return!0}}catch(u){r.e(u)}finally{r.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},lmEJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r=n("q1tI"),o=n.n(r),a=n("CVOh"),i=n("4XuI"),u=function(){var e=o.a.useContext(i.a).meta.image;return o.a.createElement(o.a.Fragment,null,(null==e?void 0:e.childImageSharp)&&o.a.createElement("div",{className:"post-thumbnail"},o.a.createElement(a.a,{className:"sidebar-logo",imageSharp:e.childImageSharp})))};u.displayName="MdxArticleImage";var c=u,s=n("gRv6"),l=n("RN+6"),f=function(){var e=o.a.useContext(i.a).meta,t=e.url,n=e.date,r=e.dateFormatted;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement("span",{className:"posted-on"},o.a.createElement(l.a,{symbolName:"article-posted-on"}),o.a.createElement("span",{className:"screen-reader-text"},"Posted on "),o.a.createElement(s.a,{to:t,rel:"bookmark"},o.a.createElement("time",{dateTime:n},r))))};f.displayName="MdxArticleMetaPostedOn";var d=f,m=n("0lfv"),p=function(){var e=o.a.useContext(i.a).meta.categories;return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("span",{className:"categories"},o.a.createElement(l.a,{symbolName:"article-categories"}),o.a.createElement("span",{className:"screen-reader-text"},"Categories "),e.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},t>0&&", ",o.a.createElement(s.a,{to:"/category/"+m.b.Slug(e)+"/",rel:"category tag"},e))}))))};p.displayName="MdxArticleMetaCategories";var y=p,h=function(){var e=o.a.useContext(i.a).meta.tags;return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("span",{className:"tags"},o.a.createElement(l.a,{symbolName:"article-tags"}),o.a.createElement("span",{className:"screen-reader-text"},"Tags "),e.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},t>0&&", ",o.a.createElement(s.a,{to:"/tag/"+m.b.Slug(e)+"/",rel:"tag"},e))}))))};h.displayName="MdxArticleMetaTags";var b=h,g=n("7evw"),v=n.n(g),w=n("CxY0"),E=n.n(w),S=n("t9L2"),C=function(){var e=o.a.useContext(S.a).siteMetadata,t=o.a.useContext(i.a).meta;if(!e)return null;var n=e.siteUrl,r=e.disqusShortname,a=t.title,u=t.url;if(!r)return null;var c={url:E.a.resolve(n,u),identifier:"",title:a};return o.a.createElement("span",{className:"comments"},o.a.createElement(l.a,{symbolName:"article-comments"}),o.a.createElement(s.a,{to:u+"#disqus_thread"},o.a.createElement(v.a.CommentCount,{shortname:r,config:c},"Comments")))};C.displayName="MdxArticleMetaComments";var _=C,I=function(){var e=o.a.useContext(i.a).meta.originalFile;return o.a.createElement(o.a.Fragment,null,e&&{}.REPOSITORY_URL&&{}.BRANCH&&o.a.createElement("span",{className:"edit"},o.a.createElement(l.a,{symbolName:"article-edit"}),o.a.createElement("a",{href:{}.REPOSITORY_URL+"/edit/"+({}.BRANCH||"master")+"/content/posts/"+e},"Edit")))};I.displayName="MdxArticleMetaEdit";var O=I,R=function(){return o.a.createElement("div",{className:"post-meta"},o.a.createElement(d,null),o.a.createElement(y,null),o.a.createElement(b,null),o.a.createElement(_,null),o.a.createElement(O,null))};R.displayName="MdxArticleMeta";var j=R,P=n("HAIA"),N=function(){var e=o.a.useContext(i.a).mdx;return e?o.a.createElement("div",{className:"post-content"},o.a.createElement(P.a,null,e)):null};N.displayName="MdxArticleContent";var D=N,M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null),o.a.createElement(j,null),o.a.createElement(D,null))};M.displayName="MdxArticle";var q=M}}]);
//# sourceMappingURL=5cfad37c6dccb0e590b41c16ee9571646c3d6f6b-004ae51c6ba25a491e00.js.map