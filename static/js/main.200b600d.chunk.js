(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{224:function(e,t,s){"use strict";s.r(t);var a=s(5),c=s(50),i=s.n(c),n=s(10),r=s(11),o=s(13),l=s(12),d=s(31),j=s(51),h=s.n(j),b=s(52),u=s.n(b),m=s.p+"static/media/outline-duck.97f916c6.png",p=s(0),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(p.jsx)(u.a,{id:"tsparticles",options:{background:{color:{value:"#000"}},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},backgroundMode:{enable:!0,zIndex:-1},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"bubble"},resize:!0},modes:{bubble:{distance:200,duration:.4,opacity:.8,size:30},push:{quantity:4},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},particles:{color:{value:"random"},links:{distance:100,color:{value:"random"},enable:!1,opacity:1,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:5,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:1},shape:{image:{height:128,src:m,width:128},type:"image"},size:{value:15}},detectRetina:!0}})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;this.props.data.address.city,this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}))}return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h1",{className:"responsive-headline",children:s}),Object(p.jsx)("h3",{children:a}),Object(p.jsx)("hr",{}),Object(p.jsxs)("ul",{className:"social",children:[Object(p.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(p.jsx)("i",{className:"fa fa-book"}),"Projects"]}),Object(p.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(p.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsx)("ul",{className:"copyright",children:Object(p.jsx)("li",{children:"\xa9 Copyright 2021 Danielle Wisen"})})]}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=(this.props.data.address.street,this.props.data.address.city),c=this.props.data.address.state,i=this.props.data.address.zip,n=(this.props.data.phone,this.props.data.email);this.props.data.resumedownload}return Object(p.jsx)("section",{id:"about",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"three columns",children:Object(p.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:s}),Object(p.jsx)("h2",{children:"Fun Fact"}),Object(p.jsx)("p",{children:"I can speak Japanese! \u65e5\u672c\u8a9e\u5206\u304b\u308a\u307e\u3059\u3002"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"columns contact-details",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{className:"address",children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[a," ",c,", ",i]}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:n})]})]})})]})]})})}}]),s}(a.Component),N=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(this.props.data)var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(t){var s="bar-expand "+t.name.toLowerCase();return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{style:{width:t.level,backgroundColor:e.getRandomColor()},className:s}),Object(p.jsx)("em",{children:t.name})]},t.name)}));return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Work"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:a})]}),Object(p.jsxs)("div",{className:"row skill",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Skills"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("div",{className:"bars",children:Object(p.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),s}(a.Component),g=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsx)("div",{className:"item-wrap",children:Object(p.jsxs)("a",{href:e.url,title:e.title,children:[Object(p.jsx)("img",{alt:e.title,src:t}),Object(p.jsx)("div",{className:"overlay",children:Object(p.jsxs)("div",{className:"portfolio-item-meta",children:[Object(p.jsx)("h5",{children:e.title}),Object(p.jsx)("p",{children:e.category})]})})]})})},e.title)}));return Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"twelve columns collapsed",children:[Object(p.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(p.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),w=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.address.city,t=this.props.data.address.state,s=this.props.data.address.zip,a=(this.props.data.email,this.props.data.contactmessage);this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}))}return Object(p.jsxs)("section",{id:"contact",children:[Object(p.jsxs)("div",{className:"row section-head",children:[Object(p.jsx)("div",{className:"two columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Get In Touch."})})}),Object(p.jsx)("div",{className:"ten columns",children:Object(p.jsx)("p",{className:"lead",children:a})})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"six columns",children:[Object(p.jsx)("h3",{class:"light-text",children:"Social Media Links"}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/daniellewisen1/",children:"LinkedIn Profile"}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/dawisen",children:"GitHub Profile"})]}),Object(p.jsx)("aside",{className:"four columns footer-widgets",children:Object(p.jsxs)("div",{className:"widget widget_contact",children:[Object(p.jsx)("h4",{children:"Location"}),Object(p.jsxs)("p",{className:"address",children:[e,", ",t," ",s]})]})})]})]})}}]),s}(a.Component),k=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)(x,{data:this.state.resumeData.main}),Object(p.jsx)(v,{data:this.state.resumeData.main}),Object(p.jsx)(N,{data:this.state.resumeData.resume}),Object(p.jsx)(g,{data:this.state.resumeData.portfolio}),Object(p.jsx)(w,{data:this.state.resumeData.main}),Object(p.jsx)(f,{data:this.state.resumeData.main})]})}}]),s}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(p.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Portfolio","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[224,1,2]]]);
//# sourceMappingURL=main.200b600d.chunk.js.map