(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nRki:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("qhky"),i=t("vOnD"),c=t("20nU"),d=t("nLfd"),o=t("Kvkj"),m=t("g67X"),s=i.d.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-2cxdc9-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));a.default=function(e){var a=e.location,t=e.data.allMarkdownRemark.edges,i=Object(n.useRef)(null),h=Object(n.useRef)(null),p=Object(n.useRef)([]);return Object(n.useEffect)((function(){d.a.reveal(i.current,Object(c.srConfig)()),d.a.reveal(h.current,Object(c.srConfig)(200,0)),p.current.forEach((function(e,a){return d.a.reveal(e,Object(c.srConfig)(10*a))}))}),[]),r.a.createElement(o.h,{location:a},r.a.createElement(l.a,{title:"Archive"}),r.a.createElement("main",null,r.a.createElement("header",{ref:i},r.a.createElement("h1",{className:"big-heading"},"Archive"),r.a.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),r.a.createElement(s,{ref:h},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Title"),r.a.createElement("th",{className:"hide-on-mobile"},"Made at"),r.a.createElement("th",{className:"hide-on-mobile"},"Built with"),r.a.createElement("th",null,"Link"))),r.a.createElement("tbody",null,t.length>0&&t.map((function(e,a){var t=e.node.frontmatter,n=t.date,l=t.github,i=t.external,c=t.ios,d=t.android,o=t.title,s=t.tech,h=t.company;return r.a.createElement("tr",{key:a,ref:function(e){return p.current[a]=e}},r.a.createElement("td",{className:"overline year"},""+new Date(n).getFullYear()),r.a.createElement("td",{className:"title"},o),r.a.createElement("td",{className:"company hide-on-mobile"},h?r.a.createElement("span",null,h):r.a.createElement("span",null,"—")),r.a.createElement("td",{className:"tech hide-on-mobile"},s.length>0&&s.map((function(e,a){return r.a.createElement("span",{key:a},e,"",a!==s.length-1&&r.a.createElement("span",{className:"separator"},"·"))}))),r.a.createElement("td",{className:"links"},r.a.createElement("div",null,i&&r.a.createElement("a",{href:i,"aria-label":"External Link"},r.a.createElement(m.a,{name:"External"})),l&&r.a.createElement("a",{href:l,"aria-label":"GitHub Link"},r.a.createElement(m.a,{name:"GitHub"})),c&&r.a.createElement("a",{href:c,"aria-label":"Apple App Store Link"},r.a.createElement(m.a,{name:"AppStore"})),d&&r.a.createElement("a",{href:d,"aria-label":"Google Play Store Link"},r.a.createElement(m.a,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-f5df3262036bb8b5c083.js.map