(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(x,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),x=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:R?1:0,transition:H?"opacity "+v+"ms":"none"},l),T="boolean"==typeof b?"lightgray":b,k={transitionDelay:v+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},H&&k,l,f),C={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:E};if(g){var P=g,W=p(g);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&k)}),W.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:C,imageVariants:P,generateSources:I}),W.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:C,imageVariants:P,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(x,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:P}))}}))}if(h){var M=h,q=p(h),A=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete A.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},H&&k)}),q.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:C,imageVariants:M,generateSources:I}),q.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:C,imageVariants:M,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(x,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:M}))}}))}return null},t}(d.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}H.propTypes={resolutions:z,sizes:T,fixed:k(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:k(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=H;t.default=V},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9Hrx"),l=function(e){function t(t){var a;return(a=e.call(this)||this).navbarHamburgerToggleDropdown=function(){0===a.state.NavbarHamburgerIsOpen?a.setState({navbarHamburgerIsActive:"navbar-burger burger is-active",navbarMenuIsActive:"navbar-menu is-active",NavbarHamburgerIsOpen:1}):a.setState({navbarHamburgerIsActive:"navbar-burger burger",navbarMenuIsActive:"navbar-menu ",NavbarHamburgerIsOpen:0})},a.state={siteTitle:t.siteTitle,navbarHamburgerIsActive:"navbar-burger burger",navbarMenuIsActive:"navbar-menu",NavbarHamburgerIsOpen:0},a}return Object(s.a)(t,e),t.prototype.render=function(){return i.a.createElement("header",{className:"siteHeader"},i.a.createElement("nav",{className:"navbar container",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("h1",{className:"navbar-item  is-size-1 has-text-justified"},i.a.createElement(n.Link,{to:"/",className:""},this.state.siteTitle)),i.a.createElement(n.Link,{role:"button",className:this.state.navbarHamburgerIsActive,"aria-label":"menu","aria-expanded":"false",to:"#","data-target":"navbarBasicExample",onClick:this.navbarHamburgerToggleDropdown},i.a.createElement("span",{"aria-hidden":"true",className:"lightText"}),i.a.createElement("span",{"aria-hidden":"true",className:"lightText"}),i.a.createElement("span",{"aria-hidden":"true",className:"lightText"}))),i.a.createElement("div",{className:this.state.navbarMenuIsActive},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(n.Link,{className:"navbar-item",to:"/"},"Home"),i.a.createElement(n.Link,{className:"navbar-item",to:"/blog"},"Blog"),i.a.createElement(n.Link,{className:"navbar-item",to:"/portfolio"},"Portfolio"),i.a.createElement(n.Link,{className:"navbar-item",to:"/aboutme"},"About Me")))))},t}(i.a.Component);l.defaultProps={siteTitle:""};var o=l;t.a=function(e){var t=e.children,a=Object(n.useStaticQuery)("3649515864");return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement("main",{className:""},t)),i.a.createElement("footer",{className:"container"},i.a.createElement("div",{className:""},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},b1td:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var r=a("9Hrx"),i=a("q1tI"),n=a.n(i),s=a("Bl7J"),l=a("Wbzz"),o=a("9eSz"),d=a.n(o),c=function(e){var t=Object(l.useStaticQuery)("3796780979");return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{fluid:t.image.childImageSharp.fluid}))},u=function(e){var t,a=null!==(t=e.data.projectImageURL)&&void 0!==t?t:e.data.projectURL;return n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"proj-details"},n.a.createElement("a",{href:e.data.projectURL,target:"_blank",rel:"noreferrer",style:{color:"inherit"}},n.a.createElement("h3",null,e.data.projectName)),n.a.createElement("p",null,e.data.projectDescritption),n.a.createElement("a",{href:e.data.projectImageURL,target:"_blank",rel:"noreferrer"},n.a.createElement("button",{className:"button is-link"},"See this project"))),n.a.createElement("div",{className:"proj-image"},n.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},n.a.createElement(c,null)))))},f=function(e){function t(t){var a;return(a=e.call(this)||this).state={projectName:"pamwelch.com",projectURL:"http://www.pamwelch.com",projectDescritption:' "pamwelch.com" is a professional portfolio website built using React and Gatsby. The site was created to showcase professional marketing projects created by Pam Welch of Troy, New York. The site itself contains the stylings and features of a modern minimal portfolio site, including google analytics and lazy loading of images.'},a}Object(r.a)(t,e);var a=t.prototype;return a.createList=function(){return n.a.createElement(u,{data:this.state})},a.render=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Projects"),this.createList())},t}(i.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return n.a.createElement(s.a,null,n.a.createElement(f,null))},t}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-portfolio-jsx-47d9930c2af3458e5095.js.map