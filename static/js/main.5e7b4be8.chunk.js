(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(4),a=c.n(l),i=(c(9),c(2)),u=(c(10),c.p+"static/media/logo.3cc0528b.svg"),r=(c(11),c(12),c(0));var o=function(e){var t=e.value,c=e.isSelected,n=e.handleSelected;return Object(r.jsxs)("button",{className:"option ".concat(c?"selected":""),onClick:function(){return n(t)},children:[t,"%"]})};c(14);var j=function(e){var t=e.userWillEnterCustomPercentage,c=e.setUserWillEnterCustomPercentage,n=e.setSelectedPercentage;return t?Object(r.jsx)("input",{className:"custom-percentage-input",autoFocus:!0,onBlur:function(e){var t=e.target.value;""===t?c(!1):n(t)}}):Object(r.jsx)("button",{className:"custom-button",onClick:function(){return c(!0)},children:"Custom"})};var p=function(e){var t=e.selectedPercentage,c=e.setSelectedPercentage,s=Object(n.useState)(!1),l=Object(i.a)(s,2),a=l[0],u=l[1];return Object(r.jsxs)("div",{children:[[5,10,15,25,50].map((function(e){return Object(r.jsx)(o,{value:e,isSelected:t===e,handleSelected:function(e){t!==e&&c(e)}},e)})),Object(r.jsx)(j,{userWillEnterCustomPercentage:a,setUserWillEnterCustomPercentage:u,setSelectedPercentage:c})]})};c(15);var d=function(e){var t=e.billInput,c=e.setBillInput,n=e.numPeopleInput,s=e.setNumPeopleInput,l=e.selectedPercentage,a=e.setSelectedPercentage,i=e.calculateTip;return Object(r.jsxs)("div",{className:"input-section",children:[Object(r.jsx)("label",{className:"input-label",htmlFor:"billInput",children:"Bill"}),Object(r.jsx)("div",{className:"bill-amount-text-input",children:Object(r.jsx)("input",{id:"billInput",className:"text-input",value:t,onChange:function(e){return c(e.target.value)},onBlur:i})}),Object(r.jsx)(p,{selectedPercentage:l,setSelectedPercentage:a}),Object(r.jsx)("label",{className:"input-label",htmlFor:"numPeopleInput",children:"Number of People"}),Object(r.jsx)("div",{className:"num-people-text-input",children:Object(r.jsx)("input",{className:"text-input",id:"numPeopleInput",value:n,onChange:function(e){return s(e.target.value)},onBlur:i})})]})};c(16);var b=function(e){var t=e.tipDisplay,c=e.totalDisplay,n=e.handleReset;return Object(r.jsxs)("div",{className:"output-section",children:[Object(r.jsxs)("div",{className:"output-flex",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"output-title",children:"Tip Amount"}),Object(r.jsx)("div",{className:"output-subtitle",children:"/ person"})]}),Object(r.jsxs)("div",{className:"output-value",children:["$",t]})]}),Object(r.jsxs)("div",{className:"output-flex",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"output-title",children:"Total"}),Object(r.jsx)("div",{className:"output-subtitle",children:"/ person"})]}),Object(r.jsxs)("div",{className:"output-value",children:["$",c]})]}),Object(r.jsx)("button",{className:"reset-button",onClick:n,children:"Reset"})]})};var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(""),a=Object(i.a)(l,2),o=a[0],j=a[1],p=Object(n.useState)(void 0),m=Object(i.a)(p,2),O=m[0],v=m[1],x=Object(n.useState)(0),h=Object(i.a)(x,2),N=h[0],g=h[1],f=Object(n.useState)(0),P=Object(i.a)(f,2),S=P[0],I=P[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("img",{src:u,alt:"Splitter logo",className:"logo"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(d,{billInput:c,setBillInput:s,numPeopleInput:o,setNumPeopleInput:j,selectedPercentage:O,setSelectedPercentage:v,calculateTip:function(){var e=c*O/100,t=e/o,n=parseInt(c)+e,s=n/o;isNaN(t)||isNaN(s)||(g(e/o),I(n/o))}}),Object(r.jsxs)("div",{className:"temp",children:[Object(r.jsxs)("p",{children:["Bill input is ",c]}),Object(r.jsxs)("p",{children:["Number of people input is",o]}),Object(r.jsxs)("p",{children:["Selected percentage is ",O]})]}),Object(r.jsx)(b,{tipDisplay:N.toFixed(2),totalDisplay:S.toFixed(2),handleReset:function(){console.log("reset called"),s(""),j(""),v(void 0),g(0),I(0)}})]})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.5e7b4be8.chunk.js.map