(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),o=a.n(c),r=(a(15),a(8),a(16),a(6)),i=a(4),u=a(1),s=l.a.memo((function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],r=c[1],i=Object(n.useCallback)((function(e){"Enter"===e.key&&(e.preventDefault(),t(o),r(""))}),[o]);return l.a.createElement("form",null,l.a.createElement("input",{type:"text",value:o,className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){r(e.target.value)},onKeyPress:i}))})),m=a(2),d=a.n(m),f=(d.a.bool.isRequired,d.a.func.isRequired,d.a.func.isRequired,d.a.string.isRequired,d.a.func.isRequired,d.a.shape({id:d.a.number.isRequired,title:d.a.string.isRequired,completed:d.a.bool.isRequired}),function(e){var t=e.todo,a=e.toggleAll,c=e.changeToggle,o=e.destroyTodo,r=e.filter,i=e.changeTitle,s=Object(n.useState)(t.completed),m=Object(u.a)(s,2),d=m[0],f=m[1],g=Object(n.useState)(!1),b=Object(u.a)(g,2),p=b[0],E=b[1],h=Object(n.useState)(t.title),O=Object(u.a)(h,2),j=O[0],v=O[1];Object(n.useEffect)((function(){f(a),c(t.id,!!a)}),[a]);var k,y=function(){i(t.id,j),E(!1)};return l.a.createElement("li",{key:t.id,className:(k=d,p?"editing":k?"completed":""),hidden:function(){switch(r){case"Completed":return!d;case"Active":return d;default:return!1}}(),onDoubleClick:function(){return E(!0)}},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:d,onChange:function(){f(!d),c(t.id,!d)}}),l.a.createElement("label",null,t.title),l.a.createElement("button",{type:"button",name:t.id,className:"destroy",onClick:o})),l.a.createElement("input",{type:"text",className:"edit",value:j,onChange:function(e){var t=e.target.value;v(t)},onKeyDown:function(e){"Enter"===e.key&&j&&y(),"Escape"===e.key&&(E(!1),v(t.title))},onBlur:y}))}),g=function(e){var t=e.todos,a=e.toggleAll,n=e.changeToggle,c=e.destroyTodo,o=e.filter,r=e.changeTitle;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement(f,{todo:e,key:e.id,toggleAll:a,changeToggle:n,destroyTodo:c,filter:o,changeTitle:r})})))},b=function(e){var t=e.filterChange,a=e.filter;return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"All"===a?"selected":"",name:"All",onClick:t},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:"Active"===a?"selected":"",name:"Active",onClick:t},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:"Completed"===a?"selected":"",name:"Completed",onClick:t},"Completed")))};var p=function(){var e=function(e){var t=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[];localStorage.setItem(e,JSON.stringify(t));var a=Object(n.useState)(t),l=Object(u.a)(a,2),c=l[0],o=l[1];return[c,function(a){o(a),t=a,localStorage.setItem(e,JSON.stringify(t))}]}("todosArr"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),m=Object(u.a)(o,2),d=m[0],f=m[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),h=E[0],O=E[1],j=Object(n.useState)("All"),v=Object(u.a)(j,2),k=v[0],y=v[1],C=Object(n.useCallback)((function(e){if(e){var t={id:+new Date,title:e,completed:!1};c([].concat(Object(i.a)(a),[t]))}}),[a]),N=Object(n.useCallback)((function(e){var t=e.target.name,n=a.findIndex((function(e){return e.id===+t})),l=Object(i.a)(a);l.splice(n,1),c(l)}),[a]),S=Object(n.useCallback)((function(){var e=Object(i.a)(a).filter((function(e){return!e.completed}));c(e),O(!1)}),[a]);return Object(n.useEffect)((function(){f(a.filter((function(e){return!e.completed})))}),[a,h]),l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(s,{addTodo:C})),0!==a.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:0===d.length,onChange:function(){O(!h)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},l.a.createElement(g,{todos:a,toggleAll:h,changeToggle:function(e,t){var n=a.findIndex((function(t){return t.id===e})),l=Object(i.a)(a);l[n].completed=t,c(l)},destroyTodo:N,filter:k,changeTitle:function(e,t){c(a.map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{title:t}):a})))}}))),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"".concat(d.length," items left")),l.a.createElement(b,{filterChange:function(e){y(e.target.name)},filter:k}),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:S},"Clear completed"))))};o.a.render(l.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.320936f1.chunk.js.map