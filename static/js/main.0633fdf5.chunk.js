(this["webpackJsonpemployee-connect"]=this["webpackJsonpemployee-connect"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),c=n.n(a),r=n(12),l=n.n(r),i=(n(24),n(25),n(13)),o=n(14),j=n(15),m=n(18),h=n(17);n(26);var d=function(){return Object(s.jsx)("div",{className:"jumbotron jumbotron-fluid tester",children:Object(s.jsxs)("div",{className:"container dark",children:[Object(s.jsx)("h1",{className:"display-4 lighter",children:"Employee Directory"}),Object(s.jsx)("p",{className:"lead lighter",children:"Search employees and filter them by their names"})]})})};var u=function(e){return console.log(e),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Hello ",e.firstName," ",e.lastName]}),Object(s.jsxs)("form",{className:"form",children:[Object(s.jsx)("input",{value:e.firstName,name:"firstName",onChange:e.handleInputChange,type:"text",placeholder:"First Name"}),Object(s.jsx)("input",{value:e.lastName,name:"lastName",onChange:e.handleInputChange,type:"text",placeholder:"Last Name"}),Object(s.jsx)("button",{onClick:e.handleFormSubmit,children:"Submit"})]})]})};var b=function(e){return Object(s.jsx)(s.Fragment,{children:e.employees.length>0?e.employees.map((function(e,t){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{alt:e.name.first,src:e.picture.medium})}),Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Name:"})," ",e.name.first," ",e.name.last]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Cell phone:"})," ",e.cell]})]})}),Object(s.jsx)("span",{className:"remove",children:"\ud835\ude05"})]},t)})):"no search found"})};var p=function(e){return Object(s.jsxs)("div",{children:[console.log(e.employees),Object(s.jsx)("h1",{children:"Users View"}),Object(s.jsx)(b,{employees:e.employees})]})},O=n(16),x=n.n(O),f=function(){return x.a.get("https://randomuser.me/api/?results=200")},g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={allUsers:[],filteredUsers:[],searchTerm:"",firstName:"",lastName:"",password:""},e.handleInputChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(i.a)({},s,n)),console.log(n)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({allUsers:t.data.results})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{}),Object(s.jsx)(u,{handleInputChange:this.handleInputChange,firstName:this.state.firstName,lastName:this.state.lastName}),Object(s.jsx)(p,{employees:this.state.allUsers})]})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.0633fdf5.chunk.js.map