(this["webpackJsonpvibe-check"]=this["webpackJsonpvibe-check"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(26),a(5)),l=(a(27),a(3)),o=(a(28),a.p+"static/media/laptop.c622269c.svg"),u=a.p+"static/media/reading-book.02432d95.svg",j=a(0);var b=function(){return Object(j.jsx)("div",{className:"router-page-home-container",children:Object(j.jsxs)("section",{children:[Object(j.jsx)("img",{src:u,alt:"Person reading a book"}),Object(j.jsx)("h1",{className:"mt-20",style:{textAlign:"center"},children:"Welcome to Vibe Check!"}),Object(j.jsx)("p",{className:"mt-10",children:"Vibe check is your one stop shop to liase with fellow students to discuss  questions, queries, issues and suggestions about the courses they are studying."}),Object(j.jsx)("img",{className:"mt-30",src:o,alt:"Laptop"}),Object(j.jsx)("h1",{className:"mt-30",children:"What can you do on Vibe Check?"}),Object(j.jsxs)("p",{className:"mt-10",children:["You can create your profile, make and edit posts, reply to other posts, and edit your profile. ",Object(j.jsx)(r.b,{to:"/profile",children:"Get started"}),"."]}),Object(j.jsx)("br",{})]})})},d=a(2),m=s.a.createContext(),O=s.a.createContext();function h(){return Object(c.useContext)(m)}function f(){return Object(c.useContext)(O)}function p(e){var t=e.children,a=Object(c.useState)({auth:!0,email:"manav.sg1@gmail.com"}),s=Object(d.a)(a,2),n=s[0],i=s[1];return Object(j.jsx)(m.Provider,{value:n,children:Object(j.jsx)(O.Provider,{value:function(e){i(e)},children:t})})}var x=a(11),g=a(6),v=a.n(g),N=s.a.createContext(),w=s.a.createContext(),C=s.a.createContext(),y=s.a.createContext();function S(){return Object(c.useContext)(N)}function k(e){var t=e.children,a=Object(c.useState)(null),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useRef)(!0),l=Object(c.useState)([{name:"Manav Singh Gadhoke",email:"manav.sg1@gmail.com",password:"123",createdAt:"Thu Sep 23 2021"},{name:"Manav too",email:"manav.sg1@gmail.comm",password:"123",createdAt:"Thu Sep 23 2021"}]),o=Object(d.a)(l,2),u=o[0],b=o[1];Object(c.useEffect)((function(){if(r.current)r.current=!1;else if(null!==n){var e=v.a.without(u,v.a.find(u,{email:n}));b((function(t){return e})),i(null)}}),[n,u]);return Object(j.jsx)(N.Provider,{value:u,children:Object(j.jsx)(w.Provider,{value:function(e){b((function(){return[].concat(Object(x.a)(u),[e])}))},children:Object(j.jsx)(C.Provider,{value:function(e){i(e)},children:Object(j.jsx)(y.Provider,{value:function(e){b((function(){return i(e.email),[].concat(Object(x.a)(u),[e])}))},children:t})})})})}a(38);var P=function(){var e=h(),t=f(),a=S(),s=Object(c.useState)(""),n=Object(d.a)(s,2),i=n[0],r=n[1],o=Object(c.useState)(""),u=Object(d.a)(o,2),b=u[0],m=u[1];return Object(j.jsxs)("div",{className:"router-page-signin-container",children:[e.auth&&Object(j.jsx)(l.a,{to:"/profile"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("h1",{children:"Sign in"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=a.find((function(e){return e.email===i}));void 0!==c?c.password===b?t({auth:!0,email:i}):alert("The password doesn't match our records."):alert("No user with that email address was found.")},className:"mt-10",children:[Object(j.jsx)("input",{onChange:function(e){return r(e.target.value)},className:"text-input full-width",type:"email",name:"email",placeholder:"Email",required:!0,autoFocus:!0}),Object(j.jsx)("input",{onChange:function(e){return m(e.target.value)},className:"text-input full-width mt-10",type:"password",name:"password",placeholder:"Password",required:!0}),Object(j.jsxs)("button",{className:"btn full-width mt-20",children:[Object(j.jsx)("i",{className:"fa fa-sign-in-alt"}),"Sign in"]}),e.auth&&Object(j.jsx)(l.a,{to:"/profile"})]})]})]})};a(39);var A=function(){var e=h(),t=f(),a=S(),s=Object(c.useContext)(w),n=Object(c.useState)(""),i=Object(d.a)(n,2),r=i[0],o=i[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),m=b[0],O=b[1],p=Object(c.useState)(""),x=Object(d.a)(p,2),g=x[0],v=x[1];return Object(j.jsxs)("div",{className:"router-page-signup-container",children:[e.auth&&Object(j.jsx)(l.a,{to:"/profile"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("h1",{children:"Sign up"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!(g.length<6)&&g.match(/[a-z]/)&&g.match(/[A-Z]/)&&g.match(/[0-9]/)&&g.match(/[\W_]/)?void 0===a.find((function(e){return e.email===m}))?(t({auth:!0,email:m}),s({name:r,email:m,password:g,createdAt:(new Date).toDateString()})):alert("This email address has already been registered!"):alert("Password needs to be at least 6 characters including uppercase, lowercase characters, and a number and a punctuation.")},className:"mt-10",children:[Object(j.jsx)("input",{onChange:function(e){return o(e.target.value)},className:"text-input full-width",type:"text",name:"name",placeholder:"Name",autoFocus:!0}),Object(j.jsx)("input",{onChange:function(e){return O(e.target.value)},className:"text-input full-width mt-10",type:"email",name:"email",placeholder:"Email"}),Object(j.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"text-input full-width mt-10",type:"password",name:"password",placeholder:"Password"}),Object(j.jsxs)("button",{className:"btn full-width mt-20",children:[Object(j.jsx)("i",{className:"fa fa-user-plus"}),"Sign up"]}),e.auth&&Object(j.jsx)(l.a,{to:"/profile"})]})]})]})};var _=function(){var e=f();return Object(c.useEffect)((function(){e({auth:!1,email:null})}),[e]),Object(j.jsx)("div",{children:Object(j.jsx)(l.a,{to:"/"})})},E=s.a.createContext(),V=s.a.createContext(),R=s.a.createContext(),T=s.a.createContext();function D(){return Object(c.useContext)(R)}function U(e){var t=e.children,a=Object(c.useState)(null),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useRef)(!0),l=Object(c.useState)([{post_id:"manav.sg1@gmail.com1",user_id:"manav.sg1@gmail.com",content:"123",img:"https://spy.com/wp-content/uploads/2020/12/CleanClipping-Recovered-10.png?w=958&h=599&crop=1",createdAt:"Thu Sep 23 2021"},{post_id:"manav.sg1@gmail.com2",user_id:"manav.sg1@gmail.com",content:"123",replyOf:"manav.sg1@gmail.com1",createdAt:"Thu Sep 23 2021"},{post_id:"manav.sg1@gmail.comm1",user_id:"manav.sg1@gmail.comm",content:"New post 2",createdAt:"Thu Sep 23 2021"}]),o=Object(d.a)(l,2),u=o[0],b=o[1];Object(c.useEffect)((function(){if(r.current)r.current=!1;else if(null!==n){var e=v.a.without(u,v.a.find(u,{post_id:n}));b((function(t){return e})),i(null)}}),[n,u]);return Object(j.jsx)(E.Provider,{value:u,children:Object(j.jsx)(V.Provider,{value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t||b((function(){return[].concat(Object(x.a)(u),[e])}))},children:Object(j.jsx)(R.Provider,{value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var a=v.a.filter(u,(function(t){return t.user_id!==e}));b((function(e){return a}))}else{var c=v.a.filter(u,(function(t){return t.post_id!==e}));b((function(e){return c}))}},children:Object(j.jsx)(T.Provider,{value:function(e){b((function(){return i(e.post_id),[].concat(Object(x.a)(u),[e])}))},children:t})})})})}a(40);var F=function(e){var t=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useRef)(),n=h(),i=S(),r=Object(c.useContext)(y),l=i.find((function(e){return e.email===n.email})),o=Object(c.useState)(""),u=Object(d.a)(o,2),b=u[0],m=u[1],O=Object(c.useState)(""),f=Object(d.a)(O,2),p=f[0],x=f[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),N=v[0],w=v[1];Object(c.useEffect)((function(){void 0!==l&&m(l.name)}),[l]);var C=function(){if(""!==b.trim()){var e={name:b,email:l.email,password:l.password,createdAt:l.createdAt};r(e),alert("The name has been updated")}else alert("Name can't be empty")};return Object(j.jsx)("div",{className:"router-page-profile--component-edit-profile-dialog dialog-container",onClick:function(a){a.target===t.current&&t.current.contains(a.target)&&e.toggleVisible(!1)},ref:t,children:Object(j.jsxs)("div",{className:"dialog custom-scrollbar",children:[Object(j.jsxs)("div",{className:"top-bar",children:[Object(j.jsx)("h1",{children:"Edit your details"}),Object(j.jsxs)("button",{className:"btn lightRed small",onClick:function(t){e.toggleVisible(!1)},children:[Object(j.jsx)("i",{className:"fa fa-window-close"}),"Close"]})]}),Object(j.jsxs)("div",{className:"input-fields mt-20",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",className:"text-input full-width mt-10",value:b,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){13===e.keyCode&&C()}}),Object(j.jsxs)("button",{className:"btn mt-10 full-width",onClick:C,children:[Object(j.jsx)("i",{className:"fa fa-sync-alt"}),"Update name"]}),Object(j.jsxs)("h1",{className:"mt-20",children:[Object(j.jsx)("i",{className:"fa fa-key"}),"Change password"]}),Object(j.jsx)("input",{type:"password",className:"text-input full-width mt-10",onChange:function(e){return x(e.target.value)},placeholder:"Old password",ref:s}),Object(j.jsx)("input",{type:"password",className:"text-input full-width mt-10",onChange:function(e){return w(e.target.value)},placeholder:"New password",ref:a}),Object(j.jsxs)("button",{className:"btn mt-10 full-width",onClick:function(e){if(""!==p.trim())if(""!==N.trim())if(p===l.password){if(N.length<6||!N.match(/[a-z]/)||!N.match(/[A-Z]/)||!N.match(/[0-9]/)||!N.match(/[\W_]/))return void alert("Password needs to be at least 6 characters including uppercase, lowercase characters, and a number and a punctuation.");var t={name:l.name,email:l.email,password:N,createdAt:l.createdAt};r(t),alert("The password has been updated"),w(""),x(""),s.current.value="",a.current.value=""}else alert("Old password doesn't match our records");else alert("New password can't be empty.");else alert("Old password can't be empty.")},children:[Object(j.jsx)("i",{className:"fa fa-sync-alt"}),"Update password"]})]})]})})};a(41);var L=function(e){return Object(j.jsx)("div",{className:"app-common-component--avatar-container ".concat("small"===e.size?"small ":""),children:Object(j.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/"+q(e.seed)+".svg",alt:"User avatar"})})},q=function(e){for(var t=0,a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return new Uint32Array([t])[0].toString(36)};var W=function(){var e=h(),t=f(),a=S(),s=Object(c.useContext)(C),n=D(),i=a.find((function(t){return t.email===e.email})),r=Object(c.useState)(""),o=Object(d.a)(r,2),u=o[0],b=o[1],m=Object(c.useState)(""),O=Object(d.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),N=v[0],w=v[1],y=Object(c.useState)(!1),k=Object(d.a)(y,2),P=k[0],A=k[1];return Object(c.useEffect)((function(){void 0!==i&&(b(i.name),x(i.createdAt),w(i.email))}),[i]),Object(j.jsx)("div",{className:"router-page-profile-container",children:Object(j.jsxs)("section",{children:[P&&Object(j.jsx)(F,{visible:P,toggleVisible:function(e){return A(e)}}),!e.auth&&Object(j.jsx)(l.a,{to:"/signin"}),Object(j.jsx)("h1",{children:"Your profile"}),Object(j.jsxs)("div",{className:"profile-details",children:[Object(j.jsx)(L,{seed:N}),Object(j.jsxs)("section",{className:"mt-10",children:[Object(j.jsx)("p",{className:"text primary bold",children:u}),Object(j.jsx)("p",{className:"text primary bold",children:N}),Object(j.jsxs)("p",{children:["Joined: ",Object(j.jsx)("span",{className:"text primary bold",children:p})]})]}),Object(j.jsxs)("button",{className:"btn mt-20",onClick:function(){return A(!0)},children:[Object(j.jsx)("i",{className:"fa fa-edit"}),"Edit profile"]}),"\xa0\xa0",Object(j.jsxs)("button",{className:"btn red mt-20",onClick:function(){window.confirm("Are you sure you want to delete your profile? This will also delete all your posts.")&&(s(i.email),n(i.email,!0),t({auth:!1,email:null}))},children:[Object(j.jsx)("i",{className:"fa fa-trash-alt"}),"Delete profile"]})]})]})})},z=(a(42),a.p+"static/media/image-preview.127d3220.svg");var B=function(e){var t=Object(c.useState)(""),a=Object(d.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),r=Object(d.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(!0),b=Object(d.a)(u,2),m=b[0],O=b[1],h=Object(c.useRef)();return Object(j.jsx)("div",{className:"router-page-posts--component-choose-picture-dialog dialog-container",onClick:function(t){t.target===h.current&&h.current.contains(t.target)&&e.toggleVisible(!1)},ref:h,children:Object(j.jsxs)("div",{className:"dialog custom-scrollbar",children:[Object(j.jsxs)("div",{className:"top-bar",children:[Object(j.jsx)("h1",{children:"Choose a picture"}),Object(j.jsxs)("button",{className:"btn lightRed small",onClick:function(t){e.toggleVisible(!1)},children:[Object(j.jsx)("i",{className:"fa fa-window-close"}),"Close"]})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(s)},children:[Object(j.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"url",className:"text-input full-width mt-20",placeholder:"URL of image",required:!0}),Object(j.jsxs)("button",{type:"submit",className:"btn mt-20 full-width",children:[Object(j.jsx)("i",{className:"fa fa-download"}),"Load image"]})]}),Object(j.jsx)("img",{className:"".concat(m?"img-error":""),onLoad:function(){return O(!1)},onError:function(){return O(!0)},src:l,alt:"Post"}),m&&Object(j.jsx)("img",{src:z,alt:"Preview"}),Object(j.jsxs)("button",{onClick:function(t){m?alert("That is not a valid image"):(e.setPostImgSrc(l),e.toggleVisible(!1))},className:"btn full-width mt-20",children:[Object(j.jsx)("i",{className:"fa fa-plus-square"}),"Add image to post"]})]})})};var I=function(e){var t=Object(c.useRef)(),a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useContext)(V),l=Object(c.useState)(!1),o=Object(d.a)(l,2),u=o[0],b=o[1],m=Object(c.useState)(""),O=Object(d.a)(m,2),f=O[0],p=O[1],x=h(),g=Object(c.useState)(""),N=Object(d.a)(g,2),w=N[0],C=N[1];return Object(c.useEffect)((function(){void 0!==x.email&&C(x.email)}),[x]),Object(j.jsxs)("div",{className:"router-page-posts--component-new-post",children:[u&&Object(j.jsx)(B,{visible:u,setPostImgSrc:function(e){return p(e)},toggleVisible:function(e){return b(e)}}),Object(j.jsxs)("h1",{style:{textAlign:"center"},children:[Object(j.jsx)("i",{className:"fa fa-pen-alt"}),"Write a post"]}),Object(j.jsxs)("div",{className:"user-details",children:[Object(j.jsx)(L,{seed:w,size:"small"}),Object(j.jsx)("p",{children:e.userName})]}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("textarea",{ref:t,onChange:function(e){return i(e.target.value)},placeholder:"Share your thoughts..."}),Object(j.jsxs)("div",{className:"picture mt-10",children:[Object(j.jsxs)("button",{className:"btn small darkBlack",onClick:function(){return b(!0)},children:[Object(j.jsx)("i",{className:"fa fa-camera"}),"Choose a picture"]}),Object(j.jsx)("p",{children:v.a.truncate(f,{length:40})})]}),Object(j.jsxs)("button",{onClick:function(){if(""!==n.trim()){var e={post_id:x.email+(new Date).getTime(),user_id:x.email,content:n,img:f,createdAt:(new Date).toDateString()};r(e),i(""),p(""),t.current.value=""}else alert("Post can't be empty.")},className:"btn full-width mt-20",children:[Object(j.jsx)("i",{className:"fa fa-paper-plane"}),"Post"]})]})]})};var M=function(e){var t=Object(c.useRef)(),a=Object(c.useState)(e.post.content),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(!1),l=Object(d.a)(r,2),o=l[0],u=l[1],b=Object(c.useState)(e.post.img),m=Object(d.a)(b,2),O=m[0],h=m[1],f=Object(c.useContext)(T);return Object(j.jsxs)("div",{className:"router-page-posts--component-edit-post-dialog dialog-container",onClick:function(a){a.target===t.current&&t.current.contains(a.target)&&e.toggleVisible(!1)},ref:t,children:[o&&Object(j.jsx)(B,{visible:o,setPostImgSrc:function(e){return h(e)},toggleVisible:function(e){return u(e)}}),Object(j.jsxs)("div",{className:"dialog",children:[Object(j.jsxs)("div",{className:"top-bar",children:[Object(j.jsx)("h1",{children:"Edit your post"}),Object(j.jsxs)("button",{className:"btn lightRed small",onClick:function(t){e.toggleVisible(!1)},children:[Object(j.jsx)("i",{className:"fa fa-window-close"}),"Cancel"]})]}),Object(j.jsxs)("div",{className:"form mt-20",children:[Object(j.jsx)("textarea",{value:n,onChange:function(e){return i(e.target.value)},placeholder:"Share your thoughts..."}),Object(j.jsxs)("div",{className:"picture mt-10",children:[Object(j.jsxs)("button",{className:"btn small darkBlack",onClick:function(){return u(!0)},children:[Object(j.jsx)("i",{className:"fa fa-camera"}),"Choose a picture"]}),Object(j.jsx)("p",{children:v.a.truncate(O,{length:20})})]}),Object(j.jsxs)("button",{onClick:function(){if(""!==n.trim()){var t={post_id:e.post.post_id,user_id:e.postUser.email,content:n,img:O,createdAt:e.post.createdAt};f(t),i(""),h(""),e.toggleVisible(!1),alert("Post updated")}else alert("Post can't be empty.")},className:"btn full-width mt-20",children:[Object(j.jsx)("i",{className:"fa fa-sync"}),"Update"]})]})]})]})};var J=function(e){var t=h(),a=S(),s=D(),n=a.find((function(t){return t.email===e.post.user_id})),i=Object(c.useState)(""),r=Object(d.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),m=b[0],O=b[1],f=Object(c.useState)(!1),p=Object(d.a)(f,2),x=p[0],g=p[1];return Object(c.useEffect)((function(){void 0!==n&&(o(n.name),O(n.email))}),[n]),Object(j.jsxs)("div",{className:"router-page-posts--component-individual-post",children:[x&&Object(j.jsx)(M,{postUser:n,post:e.post,toggleVisible:function(e){return g(e)}}),Object(j.jsxs)("div",{className:"top-bar",children:[Object(j.jsx)(L,{seed:m,size:"small"}),Object(j.jsxs)("p",{children:["Written by ",l]})]}),Object(j.jsxs)("div",{className:"content custom-scrollbar",children:[Object(j.jsx)("h1",{children:e.post.content}),""!==e.post.img&&void 0!==e.post.img&&Object(j.jsx)("img",{src:e.post.img,alt:"Post"})]}),Object(j.jsxs)("div",{className:"buttons mt-20",children:[Object(j.jsxs)("button",{className:"btn",children:[Object(j.jsx)("i",{className:"fa fa-reply"}),"Reply"]}),t.email===e.post.user_id&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{className:"btn",onClick:function(){return g(!0)},children:[Object(j.jsx)("i",{className:"fa fa-edit"}),"Edit"]}),"\xa0\xa0",Object(j.jsxs)("button",{className:"btn red",onClick:function(){window.confirm("Are you sure you want to delete this post?")&&s(e.post.post_id)},children:[Object(j.jsx)("i",{className:"fa fa-trash-alt"}),"Delete"]})]})]})]})};var Y=function(){var e=h(),t=S(),a=Object(c.useContext)(E),s=t.find((function(t){return t.email===e.email})),n=Object(c.useState)(""),i=Object(d.a)(n,2),r=i[0],o=i[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),m=b[0],O=b[1],f=Object(c.useState)(!1),p=Object(d.a)(f,2),x=p[0],g=p[1],N=Object(c.useState)([]),w=Object(d.a)(N,2),C=w[0],y=w[1];return Object(c.useEffect)((function(){void 0!==s&&(o(s.name),O(s.email))}),[s]),Object(c.useEffect)((function(){y(v.a.filter(a,(function(e){return e.user_id===m})))}),[a,m]),Object(j.jsx)("div",{className:"router-page-posts-container",children:Object(j.jsxs)("section",{children:[!e.auth&&Object(j.jsx)(l.a,{to:"/signin"}),Object(j.jsx)(I,{userName:r}),Object(j.jsxs)("h1",{className:"mt-30",children:[Object(j.jsx)("i",{className:"fa fa-clipboard-list"}),"All posts"]}),Object(j.jsxs)("label",{className:"mt-10",style:{display:"inline-block"},children:["Only show posts made by me ",Object(j.jsx)("input",{onChange:function(e){return g(e.target.checked)},checked:x,type:"checkbox"})]}),Object(j.jsxs)("section",{children:[!x&&a.map((function(e,t){return Object(j.jsx)(J,{post:e},t)})),x&&C.map((function(e,t){return Object(j.jsx)(J,{post:e},t)})),0===a.length&&Object(j.jsx)("p",{className:"mt-30 text primary",children:"No posts yet. Be the first to share!"})]})]})})};var G=function(){return Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/signin",children:Object(j.jsx)(P,{})}),Object(j.jsx)(l.b,{path:"/signup",children:Object(j.jsx)(A,{})}),Object(j.jsx)(l.b,{path:"/logout",children:Object(j.jsx)(_,{})}),Object(j.jsx)(l.b,{path:"/profile",children:Object(j.jsx)(W,{})}),Object(j.jsx)(l.b,{path:"/posts",children:Object(j.jsx)(Y,{})}),Object(j.jsx)(l.b,{path:"/",children:Object(j.jsx)(b,{})})]})};var Z=function(){var e=h();return Object(j.jsxs)("header",{className:"top-bar-header",children:[Object(j.jsxs)(r.b,{to:"/",className:"heading",children:[Object(j.jsx)("img",{src:"/img/logos/xhdpi.png",alt:"App logo"}),"Vibe Check"]}),e.auth&&Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.b,{to:"/posts",children:"Posts"}),Object(j.jsx)(r.b,{to:"/profile",children:"My profile"}),Object(j.jsx)(r.b,{to:"/logout",children:"Logout"})]}),!e.auth&&Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.b,{to:"/signup",children:"Sign up"}),Object(j.jsx)(r.b,{to:"/signin",children:"Sign in"})]})]})};var K=function(){return Object(j.jsx)("div",{className:"app-container",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(Z,{}),Object(j.jsx)("section",{className:"router-container custom-scrollbar",children:Object(j.jsx)(G,{})}),Object(j.jsxs)("footer",{className:"footer",children:["\xa9 Vibe Check, ",(new Date).getFullYear()]})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(U,{children:Object(j.jsx)(k,{children:Object(j.jsx)(p,{children:Object(j.jsx)(K,{})})})})}),document.getElementById("root")),H()}},[[43,1,2]]]);
//# sourceMappingURL=main.01fa98bc.chunk.js.map