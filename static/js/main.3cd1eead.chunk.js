(this["webpackJsonphomework-5"]=this["webpackJsonphomework-5"]||[]).push([[0],[,function(e,t,a){e.exports={list:"form_list__2Wfx7",listItemLable:"form_listItemLable__11LyW",listItem:"form_listItem__2nvlb",btnSubmit:"form_btnSubmit__1Kybr"}},,,,,,,,,,,function(e,t,a){e.exports={list:"contacts_list__2tbre",listItem:"contacts_listItem__23Niw",btnDelete:"contacts_btnDelete__1SZzf"}},function(e,t,a){e.exports={header:"app_header__AtqD4",title:"app_title__1fnjs",alarm:"app_alarm__bMl2X"}},,function(e,t,a){e.exports={filterBlock:"filter_filterBlock__3tXYI",filterInput:"filter_filterInput__2f8nU"}},,,,,function(e,t,a){e.exports={enter:"apear_enter__1L8qb",enterActive:"apear_enterActive__1b0A5",exit:"apear_exit__jo89Q",exitActive:"apear_exitActive__2zeme"}},function(e,t,a){e.exports={enter:"itemSlide_enter__2p8zx",enterActive:"itemSlide_enterActive__1m2Lm",exit:"itemSlide_exit__3Q5Aj",exitActive:"itemSlide_exitActive__1-zoK"}},function(e,t,a){e.exports={enter:"slide_enter__3iHz5",enterActive:"slide_enterActive__1e7Zf"}},function(e,t,a){e.exports={enter:"slideright_enter__jGcj9",enterActive:"slideright_enterActive__3ZtK1",exit:"slideright_exit__1ieBF",exitActive:"slideright_exitActive__14SUy"}},,function(e,t,a){e.exports=a(34)},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(6),s=a(16),o=a(7),m=a(8),u=a(11),_=a(10),f=a(19),d=a(1),h=a.n(d),p=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handlerSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.number,i={id:Object(f.uuid)(),name:n,number:r};if(e.props.contacts.find((function(e){return n===e.name})))return e.props.setAlarm(),void e.setState((function(e){return{name:"",number:""}}));e.props.addNewUser(i),e.setState({name:"",number:""})},e.handlerOnChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:h.a.list,onSubmit:this.handlerSubmit},r.a.createElement("label",{className:h.a.listItemLable},"Name",r.a.createElement("input",{className:h.a.listItem,type:"text",name:"name",value:t,onChange:this.handlerOnChange})),r.a.createElement("label",{className:h.a.listItemLable},"Number",r.a.createElement("input",{className:h.a.listItem,type:"text",name:"number",value:a,onChange:this.handlerOnChange})),r.a.createElement("button",{className:h.a.btnSubmit,type:"submit"},"Add contact")))}}]),a}(n.Component),b=a(15),v=a.n(b),E=a(35),x=a(20),A=a.n(x);var g=function(e){var t=e.contacts,a=e.filter,n=e.handlerOnChange;return r.a.createElement(E.a,{in:t.length>1,timeout:250,classNames:A.a,unmountOnExit:!0},r.a.createElement("div",{className:v.a.filterBlock},r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{className:v.a.filterInput,type:"text",name:"filter",value:a,onChange:n}))))},S=a(12),N=a.n(S),O=a(36),y=a(21),C=a.n(y);var j=function(e){var t=e.filter,a=e.contacts,n=e.deleteContact,i=a.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}));return r.a.createElement(O.a,{component:"ul",className:N.a.list},i.map((function(e){return r.a.createElement(E.a,{key:e.id,timeout:250,classNames:C.a},r.a.createElement("li",{className:N.a.listItem},r.a.createElement("span",null,e.name,": "),r.a.createElement("span",null,e.number),r.a.createElement("button",{className:N.a.btnDelete,type:"button","data-id":e.id,onClick:n},"\u2573")))})))},I=a(13),k=a.n(I),w=a(22),U=a.n(w),D=a(23),L=a.n(D),z=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",isShow:!1,isAlarm:!1},e.addNewUser=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.handlerOnChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.deleteContact=function(t){var a=e.state.contacts.filter((function(e){return e.id!==t.target.dataset.id}));e.setState({contacts:Object(s.a)(a)})},e.setAlarm=function(){e.setState({isAlarm:!0})},e.hideAlarm=function(){e.setState({isAlarm:!1})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({isShow:!0});var e=localStorage.getItem("contacts");if(e)try{var t=JSON.parse(e);this.setState({contacts:t})}catch(a){console.error("Error = ",a)}}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.filter,a=e.contacts,n=e.isShow,i=e.isAlarm;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:k.a.header},r.a.createElement(E.a,{in:n,timeout:500,classNames:U.a,unmountOnExit:!0},r.a.createElement("h1",{className:k.a.title},"Phonebook")),r.a.createElement(E.a,{in:i,timeout:250,classNames:L.a,unmountOnExit:!0},r.a.createElement("div",{onClick:this.hideAlarm,className:k.a.alarm},"Contact already exist!"))),r.a.createElement(p,{contacts:a,addNewUser:this.addNewUser,setAlarm:this.setAlarm}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(g,{filter:t,contacts:a,handlerOnChange:this.handlerOnChange}),r.a.createElement(j,{filter:t,contacts:a,deleteContact:this.deleteContact}))}}]),a}(n.Component);a(32);c.a.render(r.a.createElement(z,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3cd1eead.chunk.js.map