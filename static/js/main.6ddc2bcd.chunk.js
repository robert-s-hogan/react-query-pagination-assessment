(this["webpackJsonpreact-query"]=this["webpackJsonpreact-query"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(14),r=n.n(s),i=(n(25),n(20)),l=n(33),o=n(19),d=n(34),u=n(8),j=n.n(u),h=n(15),b=n.n(h),p=n(1),m=function(e){return Object(p.jsx)("h2",{className:j()(b.a.title,e.className),children:e.children})};m.defaultProps={className:"",children:""};var f=m,O=n(16),x=n.n(O),g=function(e){return Object(p.jsx)("div",{className:j()(x.a.card,e.className),children:Object(p.jsxs)("div",{className:"card-inner",children:[Object(p.jsxs)("p",{className:"text-left",children:["#",e.uniqueId]}),Object(p.jsx)(f,{children:e.title}),e.children]})})};g.defaultProps={className:"",CardHeader:"",CardBody:"",title:""};var N=g,v=n(17),P=n(12),C=n.n(P),k=function(e){var t=e.type,n=e.onClick,c=e.children,a=e.theme,s=e.size,r=e.className,i=e.disabled,l=j()(C.a.button,C.a[a],C.a[s],Object(v.a)({},C.a.disabled,i),r);return Object(p.jsx)("button",{type:t,onClick:n,disabled:i,className:l,children:c})};k.defaultProps={type:"button",theme:"default",size:"small",onClick:function(){},className:"",disabled:!1};var y=k,w=(n(27),function(e){var t=e.totalPeople,n=(e.data,e.page),c=e.setPage;e.peoplePerPage;return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)(y,{onClick:function(){return c((function(e){return Math.max(e-1,1)}))},disabled:1===n,children:"Previous"}),Object(p.jsxs)("span",{children:[n," / ",Math.ceil(t/10)]}),Object(p.jsx)(y,{onClick:function(){return c(n+1)},disabled:n>=t/10,children:"Next"})]})}),S=n(18),F=n.n(S),L=function(e){return Object(p.jsx)("li",{className:j()(F.a.title,e.className),children:e.children})};L.defaultProps={className:"",children:""};var q=L,B=(n(28),n(29),new l.a);function I(){return Object(p.jsx)(o.a,{client:B,children:Object(p.jsx)(M,{})})}function M(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(d.a)(["people",n],(function(){return fetch("https://swapi.dev/api/people/?page=".concat(n)).then((function(e){return e.json()}))}),{keepPreviousData:!0,staleTime:5e3}),r=s.isLoading,l=s.error,o=s.data;return r?"Loading...":l?"An error has occurred: "+l.message:Object(p.jsx)("div",{className:"default",children:Object(p.jsxs)("div",{className:"colFull",children:[Object(p.jsx)("img",{width:"320",className:"center py-3",src:"http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png",alt:"Star Wars Logo"}),Object(p.jsx)(w,{peoplePerPage:o.results.length,totalPeople:o.count,page:n,setPage:a}),Object(p.jsx)("div",{className:"cardGrid",children:o.results.map((function(e,t){return Object(p.jsx)(N,{className:"card",title:e.name,uniqueId:e.url.match(/\d/g),page:n,children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)(q,{children:["Mass: ",e.mass]}),Object(p.jsxs)(q,{children:["Height: ",e.height]}),Object(p.jsxs)(q,{children:["Hair Color: ",e.hair_color]}),Object(p.jsxs)(q,{children:["Skin Color: ",e.skin_color]}),Object(p.jsxs)(q,{children:["Eye Color: ",e.eye_color]}),Object(p.jsxs)(q,{children:["Birth Year: ",e.birth_year]}),Object(p.jsxs)(q,{children:["Gender: ",e.gender]})]})},e.name)}))})]})})}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),_()}],[[30,1,2]]]);
//# sourceMappingURL=main.6ddc2bcd.chunk.js.map