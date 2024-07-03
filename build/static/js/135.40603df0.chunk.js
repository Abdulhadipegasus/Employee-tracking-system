(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[135],{1084:function(t,e,n){"use strict";n.r(e);n(0);var i=n(964),c=n(128),o=n(137),s=n(146),l=n(117),r=n(637),a=n(2);const b=Object(i.withSwal)((t=>{const{swal:e}=t;let n;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{breadCrumbItems:[{label:"Extended UI",path:"/extended-ui/sweet-alert"},{label:"Sweet Alerts",path:"/extended-ui/sweet-alert",active:!0}],title:"Sweet Alerts"}),Object(a.jsx)(c.a,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(s.a,{children:Object(a.jsxs)(s.a.Body,{children:[Object(a.jsx)("h4",{className:"header-title",children:"Examples"}),Object(a.jsx)("p",{className:"sub-header",children:"A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes"}),Object(a.jsxs)("table",{className:"table table-borderless table-centered mb-0",children:[Object(a.jsx)("thead",{className:"table-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{style:{width:"50%"},children:"Alert Type"}),Object(a.jsx)("th",{children:"Example"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A basic message"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-basic",onClick:()=>e.fire({title:"Any fool can use a computer!",confirmButtonColor:"#3bafda"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A title with a text under"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-title",onClick:()=>e.fire({title:"The Internet?",text:"That thing is still around?",icon:"question",confirmButtonColor:"#3bafda"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A success message!"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-success",onClick:()=>e.fire({title:"Good job!",text:"You clicked the button!",icon:"success",showCancelButton:!0,confirmButtonColor:"#3bafda",cancelButtonColor:"#f1556c"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A modal window with a long content inside:"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-long-content",onClick:()=>e.fire({imageUrl:"https://placeholder.pics/svg/300x1500",imageHeight:1500,imageAlt:"A tall image",confirmButtonColor:"#3bafda"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A custom positioned dialog"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-custom-position",onClick:()=>e.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A modal with a title, an error icon, a text, and a footer"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-error",onClick:()=>e.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>",confirmButtonColor:"#3bafda"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:'A confirm dialog, with a function attached to the "Confirm"-button...'}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-warning",onClick:()=>e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#1abc9c",cancelButtonColor:"#f1556c",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&e.fire("Deleted!","Your file has been deleted.","success","#1abc9c")})),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:'By passing a parameter, you can execute something else for "Cancel".'}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-params",onClick:()=>e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",buttonsStyling:!1}).then((function(t){t.value?e.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",confirmButtonColor:"#1abc9c"}):t.dismiss===e.DismissReason.cancel&&e.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",confirmButtonColor:"#1abc9c"})})),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A message with custom Image Header"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-image",onClick:()=>e.fire({title:"Minton",text:"Responsive Bootstrap 5 Admin Dashboard",imageUrl:r.a,imageHeight:50,confirmButtonColor:"#3bafda",animation:!1}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A message with auto close timer"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-close",onClick:()=>e.fire({title:"Auto close alert!",html:"I will close in <strong></strong> seconds.",timer:2e3,confirmButtonColor:"#3bafda",onBeforeOpen:function(){e.showLoading(),n=setInterval((function(){e.getContent().querySelector("strong").textContent=e.getTimerLeft()}),100)},onClose:function(){clearInterval(n)}}).then((function(t){t.dismiss===e.DismissReason.timer&&console.log("I was closed by the timer")})),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Custom HTML description and buttons"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-html-alert",onClick:()=>e.fire({title:"<i>HTML</i> <u>example</u>",icon:"info",html:'You can use <b>bold text</b>, <a href="//coderthemes.com/">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",confirmButtonColor:"#1abc9c",cancelButtonColor:"#f1556c",confirmButtonText:'<i class="mdi mdi-thumb-up-outline"></i> Great!',cancelButtonText:'<i class="mdi mdi-thumb-down-outline"></i>'}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"A message with custom width, padding and background"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-padding-width-alert",onClick:()=>e.fire({title:"Custom width, padding, background.",width:600,padding:100,confirmButtonColor:"#3bafda",background:"#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"}),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Ajax request example"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"ajax-alert",onClick:()=>e.fire({title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,confirmButtonColor:"#3bafda",cancelButtonColor:"#f1556c",preConfirm:function(t){return fetch("https://api.github.com/users/"+t).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){e.showValidationMessage("Request failed: "+t)}))},allowOutsideClick:!1}).then((function(t){t.value&&(console.log("result.value",t.value),e.fire({title:t.value.login+"'s avatar",imageUrl:t.value.avatar_url,imageHeight:60,confirmButtonColor:"#1abc9c"}))})),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Chaining modals (queue) example"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"chaining-alert",onClick:()=>e.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,confirmButtonColor:"#3bafda",cancelButtonColor:"#f1556c",progressSteps:["1","2","3"]}).queue([{title:"Question 1",text:"Chaining swal2 modals is easy"},"Question 2","Question 3"]).then((function(t){t.value&&e.fire({title:"All done!",html:"Your answers: <pre><code>"+JSON.stringify(t.value)+"</code></pre>",confirmButtonText:"Lovely!",confirmButtonColor:"#3bafda"})})),children:"Click me"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Dynamic queue example"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"dynamic-alert",onClick:()=>e.queue([{title:"Your public IP",confirmButtonColor:"#1abc9c",confirmButtonText:"Show my public IP",confirmButtonClass:"btn btn-primary mt-2",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:function(){return new Promise((function(t){fetch("https://api.ipify.org?format=json").then((t=>t.json())).then((n=>{e.insertQueueStep(n.ip),t()}))}))}}]).catch(e.noop),children:"Click me"})})]})]})]})]})})})})]})}));e.default=b},117:function(t,e,n){"use strict";n(0);var i=n(128),c=n(137),o=n(135),s=n(44),l=n.n(s),r=n(23),a=n(14),b=n(2);e.a=t=>{const{appSelector:e}=Object(r.b)(),{layoutType:n}=e((t=>({layoutType:t.Layout.layoutType})));return Object(b.jsx)(i.a,{children:Object(b.jsx)(c.a,{xs:12,children:Object(b.jsxs)("div",{className:l()("page-title-box",{"page-title-box-alt":n===a.a.LAYOUT_HORIZONTAL||n===a.a.LAYOUT_DETACHED}),children:[Object(b.jsx)("h4",{className:"page-title",children:t.title}),Object(b.jsx)("div",{className:"page-title-right",children:Object(b.jsxs)(o.a,{listProps:{className:"m-0"},children:[Object(b.jsx)(o.a.Item,{href:"/",children:"Minton"}),(t.breadCrumbItems||[]).map(((t,e)=>t.active?Object(b.jsx)(o.a.Item,{active:!0,children:t.label},e):Object(b.jsx)(o.a.Item,{href:t.path,children:t.label},e)))]})})]})})})}},637:function(t,e,n){"use strict";e.a=n.p+"static/media/logo-sm-dark.3acb5468.png"}}]);
//# sourceMappingURL=135.40603df0.chunk.js.map