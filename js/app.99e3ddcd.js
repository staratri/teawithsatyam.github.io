(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/teawithsatyam.github.io/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0307":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__left"},[a("p",{staticClass:"text1"},[t._v("Hello, I'm")]),a("h1",{staticClass:"name"},[t._v("Satyam")]),a("h1",{staticClass:"name"},[t._v("Pathak")]),a("span",{staticClass:"divider"}),a("p",{staticClass:"designation"},[t._v(" Front End Developer ")])]),a("div",{staticClass:"card__right"},[a("img",{attrs:{src:"/assets/profile-pic.png",alt:"profile picture",srcset:""}})])])}],i={name:"FaceCard"},r=i,l=(a("0fd6"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,"60c7b51d",null);e["default"]=o.exports},"055b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{ref:"resume",attrs:{id:"resume",title:t.data.title,subtitle:t.data.subtitle}},[a("div",{staticClass:"resume-content"},[a("ul",{staticClass:"education timeline"},[a("li",[a("span",{staticClass:"year"},[t._v(" 2017 - 2018")]),a("h2",{staticClass:"label"},[t._v("Internship | LearnInfi")]),a("p",{staticClass:"description"},[t._v(" 6 Months Internship, LearnInfi provides a medium for online tuitions. Responsibility is to initially work on end-user FE application which connects teacher/ students to online whiteboard tool, later started working on creating end-user REST api's on Node (express) for FE and BE communication. ")])]),a("li",[a("span",{staticClass:"year"},[t._v(" 2014 - 2018")]),a("h2",{staticClass:"label"},[t._v("Dr APJ Abdul Kalam University")]),a("p",{staticClass:"description"},[t._v(" Completed Bachelor's degree in Computer Science (BTECH). ")])])]),a("ul",{staticClass:"experience timeline"},[a("li",[a("span",{staticClass:"year"},[t._v(" 2018 - Till now")]),a("h2",{staticClass:"label"},[t._v("SDE | QAIT Devlabs")]),a("span",[t._v(" Front End Developer (Remote | US client)")]),a("ul",{staticClass:"description"},[a("li",[t._v("Pre-development analysis of story")]),a("li",[t._v(" Test driven development of FE modules using Vue (typescript / JS) ")]),a("li",[t._v(" Creating Reusable components over private NPM library to use across projects ")]),a("li",[t._v("Bugfixing")]),a("li",[t._v("Peer reviews")]),a("li",[t._v("Collobarate in technical discussions and challenges")]),a("li",[t._v("Pair Programming")])])])])])])},n=[],i=a("5eb0"),r={name:"Resume",components:{ContentCard:i["a"]},props:{data:{type:Object,required:!0}},mounted:function(){console.log(this.$intersectionDetector)}},l=r,o=(a("1243"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,"294051db",null);e["default"]=c.exports},"0b66":function(t,e,a){},"0fb4":function(t,e,a){},"0fd6":function(t,e,a){"use strict";var s=a("86a9"),n=a.n(s);n.a},1243:function(t,e,a){"use strict";var s=a("590b"),n=a.n(s);n.a},"162a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{attrs:{title:t.data.title,subtitle:t.data.subtitle}},[a("ul",{staticClass:"hobbies"},[a("li",{staticClass:"hobby"},[a("div",{staticClass:"container"},[a("img",{staticClass:"hobby__icon",attrs:{src:"/assets/hobbies/soccer.png",alt:"football icon"}}),a("p",{staticClass:"hobby__label"},[t._v(" Football ")])])]),a("li",{staticClass:"hobby"},[a("div",{staticClass:"container"},[a("img",{staticClass:"hobby__icon",attrs:{src:"/assets/hobbies/audio.png",alt:"football icon"}}),a("p",{staticClass:"hobby__label"},[t._v(" Music ")])])]),a("li",{staticClass:"hobby"},[a("div",{staticClass:"container"},[a("img",{staticClass:"hobby__icon",attrs:{src:"/assets/hobbies/travel.png",alt:"football icon"}}),a("p",{staticClass:"hobby__label"},[t._v(" Travel ")])])]),a("li",{staticClass:"hobby"},[a("div",{staticClass:"container"},[a("img",{staticClass:"hobby__icon",attrs:{src:"/assets/hobbies/beer.png",alt:"football icon"}}),a("p",{staticClass:"hobby__label"},[t._v(" Party ")])])]),a("li",{staticClass:"hobby"},[a("div",{staticClass:"container"},[a("img",{staticClass:"hobby__icon",attrs:{src:"/assets/hobbies/camera.png",alt:"camera icon"}}),a("p",{staticClass:"hobby__label"},[t._v(" Photography ")])])])])])},n=[],i=a("5eb0"),r={name:"Hobbies",components:{ContentCard:i["a"]},props:{data:{type:Object,default:function(){}}}},l=r,o=(a("817e"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,"1d884394",null);e["default"]=c.exports},"1ab4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{attrs:{title:t.data.title,subtitle:t.data.subtitle}},[a("p",{staticClass:"language"},[t._v(" I am a Software Engineer based in Noida, India. I have a total experience of 3 years in web development. Back in days starting from good old "),a("b",[t._v(" Orkut voting quest")]),t._v(" to building "),a("b",[t._v("discord bots ")]),t._v(", I always wanted to build things on internet and use them. ")]),a("p",{staticClass:"language"},[t._v(" While I don't work, I very much like being social, doing parties, photography, and play sport. I love mountain hiking and traveling, kind of more fitness ideal person so I prefer scheduling things. Always curious to learn new things, learning guitar in Coronavirus Pandemic, and struggling a lot ... ")]),a("p",{staticClass:"language"},[t._v(" I also run a small college group, where I have my batchmates and college, junior year students. We kind of share new learning experiences, presentations, new technology facts, etc. "),a("b",[t._v("Javascript in depth ")]),t._v(" is one of my presentation which I give every year to final year students. ")]),a("ul",{staticClass:"level-bar"},t._l(t.barItems,(function(e,s){return a("li",{key:"bar--item--"+s},[a("p",[a("span",[t._v(t._s(e.label))]),t._v(" "),a("span",[t._v(t._s(e.percentage)+"%")])]),a("div",{staticClass:"bar"},[a("span",{style:{width:e.percentage+"%"}})])])})),0)])},n=[],i=a("5eb0"),r={name:"AboutMe",components:{ContentCard:i["a"]},props:{data:{type:Object,required:!0}},data:function(){return{barItems:[{label:"Independent Developer",percentage:"90"},{label:"Team Player",percentage:"80"},{label:"Leadership",percentage:"75"},{label:"Communication",percentage:"85"}]}}},l=r,o=(a("2493"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,null,null);e["default"]=c.exports},2493:function(t,e,a){"use strict";var s=a("f25a"),n=a.n(s);n.a},"3c30":function(t,e,a){},"4eae":function(t,e,a){var s={"./AboutMe.vue":"1ab4","./ActionBar.vue":"a39e","./Contact.vue":"b4d6","./CurrentWork.vue":"63fd","./FaceCard.vue":"0307","./Hobbies.vue":"162a","./Resume.vue":"055b","./Skills.vue":"74ab"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4eae"},"523c":function(t,e,a){"use strict";var s=a("ffd6"),n=a.n(s);n.a},"53c2":function(t,e,a){"use strict";var s=a("d34a"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("LeftNav",{attrs:{navItems:t.navItems}}),a("Content")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"left-nav"},[a("div",{staticClass:"shrink-section"}),a("div",{staticClass:"menu-section"},[a("h2",{staticClass:"title"},[t._v("Satyam")])])]),a("div",{staticClass:"mobile"})])}],o={name:"LeftNav",props:{navItems:{type:Array,default:function(){return[]}}}},c=o,u=(a("db93"),a("2877")),d=Object(u["a"])(c,r,l,!1,null,"7ad32982",null),p=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content"},[t._l(t.contentItems,(function(t){return[a(t.name,{key:t.name,tag:"component",attrs:{data:t.props}})]}))],2)},v=[],f=a("5530"),m=(a("4160"),a("baa5"),a("d3b7"),a("159b"),a("ddb0"),a("4eae")),g={};m.keys().forEach((function(t){var e=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".vue"));g[e]=m(t).default}));var h=g,_=[{label:"Home",slug:"home",url:"#home"},{label:"About",slug:"about",url:"#about"},{label:"Resume",slug:"resume",url:"#resume"}],C=[{name:"face-card"},{name:"action-bar"},{name:"about-me",props:{title:"About",subtitle:"Enthusiast and Passionate"}},{name:"current-work",props:{title:"What I am doing right now !",subtitle:"Exploring Front End World"}},{name:"resume",props:{title:"Resume",subtitle:"Education and Experience"}},{name:"skills",props:{title:"Skills",subtitle:"Technology, Libraries and Tools"}},{name:"hobbies",props:{title:"Hobbies",subtitle:"Cheerful and Energetic"}},{name:"contact",props:{title:"Contact",subtitle:"Looking for exciting opportunities"}}],y={name:"Content",components:Object(f["a"])({},h),data:function(){return{contentItems:C}},mounted:function(){var t=document.querySelector(".content");window.dispatchEvent(new CustomEvent("foo",{detail:t}))}},k=y,w=(a("971a"),Object(u["a"])(k,b,v,!1,null,"60463f14",null)),E=w.exports,j={name:"App",components:{LeftNav:p,Content:E},data:function(){return{navItems:_}}},O=j,I=(a("5c0b"),Object(u["a"])(O,n,i,!1,null,null,null)),x=I.exports;s["a"].config.productionTip=!1;var S={rootMargin:"0px",threshold:0};window.addEventListener("foo",(function(t){console.log("asdas",t.detail),S.root=t.detail,s["a"].prototype.$intersectionDetector=new IntersectionObserver((function(){return console.log("foo")}),S)})),new s["a"]({render:function(t){return t(x)}}).$mount("#app")},"590b":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5eb0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-card"},[a("h2",{staticClass:"content-card__title"},[t._v(" "+t._s(t.title)+" ")]),a("span",{staticClass:"content-card__divider divider"}),a("p",{staticClass:"content-card__sub-title"},[t._v(" "+t._s(t.subtitle)+" ")]),t._t("default")],2)},n=[],i={name:"ContentCard",props:{title:{type:String,required:!0},subtitle:{type:String,default:""}}},r=i,l=(a("53c2"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,"ba4afaee",null);e["a"]=o.exports},"63fd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{attrs:{title:t.data.title,subtitle:t.data.subtitle}},[a("p",{staticClass:"language"},[t._v(" Right now, I work in a service-based firm "),a("a",{attrs:{href:"https://qaitdevlabs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("QAIT Devlabs")]),t._v(" where I work as Front End Developer (remote) for "),a("a",{attrs:{href:"http://politico.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Politico")]),t._v(", I have been working with the team for past two years and learned many things since then, Team uses Vue as front-End JS framework, to create Single Page Applications. My role is to create scalable and maintainable FE modules, follow all agile methodologies for project development, code reviews, pair programming, etc. ")]),a("p",{staticClass:"language"},[a("b",[t._v("My Major learning take-aways till now ")])]),a("ul",{staticClass:"language"},[a("li",[t._v(" Independent Development ")]),a("li",[t._v(" Structural and Scalable module developement ")]),a("li",[t._v(" Reusable Component development ")]),a("li",[t._v(" Vue project developement with Typescript ")]),a("li",[t._v(" Do's and Don't : Best practices and most efficient techniques ")])])])},n=[],i=a("5eb0"),r={name:"CurrentWork",props:{data:{type:Object,default:function(){}}},components:{ContentCard:i["a"]}},l=r,o=(a("523c"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,"71d48315",null);e["default"]=c.exports},"74ab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{attrs:{id:"skills",title:t.data.title,subtitle:t.data.subtitle}},[a("div",{staticClass:"skills"},[a("div",{staticClass:"primary"},[a("div",{staticClass:"skill model-1"},[a("div",{staticClass:"graph"},[a("img",{attrs:{src:"/assets/skills/vue.png",alt:"Vue logo"}})]),a("span",{staticClass:"tooltip",attrs:{tooltip:"80%"}},[t._v("Vue")])]),a("div",{staticClass:"skill model-2"},[a("div",{staticClass:"graph"},[a("img",{attrs:{src:"/assets/skills/js.png",alt:"Javascript logo"}})]),a("span",{staticClass:"tooltip",attrs:{tooltip:"75%"}},[t._v("JavaScript")])]),a("div",{staticClass:"skill model-3"},[a("div",{staticClass:"graph"},[a("img",{attrs:{src:"/assets/skills/node.png",alt:"Node logo"}})]),a("span",{staticClass:"tooltip",attrs:{tooltip:"65%"}},[t._v("Node")])]),a("div",{staticClass:"skill model-4"},[a("div",{staticClass:"graph"},[a("img",{attrs:{src:"/assets/skills/htmlcss.png",alt:"Node logo"}})]),a("span",{staticClass:"tooltip",attrs:{tooltip:"82%"}},[t._v("HTML5/CSS")])])]),a("div",{staticClass:"secondary"},[a("img",{attrs:{src:"/assets/skills/python.png",alt:"Python logo"}}),a("img",{attrs:{src:"/assets/skills/php.svg",alt:"Php logo"}}),a("img",{attrs:{src:"/assets/skills/ts.png",alt:"Typescript logo"}}),a("img",{attrs:{src:"/assets/skills/jest.png",alt:"Jest logo"}}),a("img",{attrs:{src:"/assets/skills/lodash.png",alt:"lodash logo"}}),a("img",{attrs:{src:"/assets/skills/postman.png",alt:"postman logo"}}),a("img",{attrs:{src:"/assets/skills/cypress.png",alt:"cypress logo"}}),a("img",{attrs:{src:"/assets/skills/laravel.png",alt:"laravel logo"}}),a("img",{attrs:{src:"/assets/skills/react.webp",alt:"React logo"}}),a("img",{attrs:{src:"/assets/skills/vscode.png",alt:"VsCode logo"}}),a("img",{attrs:{src:"/assets/skills/github.png",alt:"github logo"}}),a("img",{attrs:{src:"/assets/skills/jira.svg",alt:"jira logo"}}),a("img",{attrs:{src:"/assets/skills/aws.png",alt:"Aws logo"}})])])])},n=[],i=a("5eb0"),r={name:"Skills",components:{ContentCard:i["a"]},props:{data:{type:Object,required:!0}}},l=r,o=(a("75d2"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,"a04147ee",null);e["default"]=c.exports},"75d2":function(t,e,a){"use strict";var s=a("0b66"),n=a.n(s);n.a},"75d8":function(t,e,a){},"770e":function(t,e,a){},"817e":function(t,e,a){"use strict";var s=a("75d8"),n=a.n(s);n.a},"86a9":function(t,e,a){},"971a":function(t,e,a){"use strict";var s=a("770e"),n=a.n(s);n.a},"9c0c":function(t,e,a){},a39e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"action"},[a("a",{staticClass:"download-resume button-wrapper",attrs:{href:"/assets/resume.pdf",target:"_blank"}},[t._v(" Download Resume ")]),a("button",{staticClass:"view-portfolio button-wrapper",on:{click:t.scrollTo}},[t._v(" View Skills ")])])},n=[],i={name:"ActionBar",methods:{downloadResume:function(){},scrollTo:function(){var t=document.querySelector("#skills");t&&t.scrollIntoView({behavior:"smooth"})}}},r=i,l=(a("f79a"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,"6449aa38",null);e["default"]=o.exports},b4d6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentCard",{attrs:{title:t.data.title,subtitle:t.data.subtitle}},[a("section",{staticClass:"contact"},[a("div",{staticClass:"contact__card"},[a("div",{staticClass:"content"},[a("h2",[t._v("Let's get in touch")]),a("p",[t._v("C - (+91) 7835845186")]),a("p",[t._v("E - teawithsatyam@gmail.com")]),a("p",[t._v("A - Noida, UP, India.")]),a("div",{staticClass:"socials"},[a("a",{attrs:{href:"http://linkedin.com/vampy",target:"_blank"}},[a("img",{attrs:{src:"/assets/socials/linkedin.png",alt:"linkedin logo"}})]),a("a",{attrs:{href:"https://twitter.com/mr_cavallier",target:"_blank"}},[a("img",{attrs:{src:"/assets/socials/twitter.png",alt:"twitter logo"}})]),a("a",{attrs:{href:"https://www.instagram.com/mr_c.a.v.a.l.i.e.r/",target:"_blank"}},[a("img",{attrs:{src:"/assets/socials/instagram.png",alt:"github logo"}})]),a("a",{attrs:{href:"https://join.skype.com/invite/PH2HQQMAf9qd",target:"_blank"}},[a("img",{attrs:{src:"/assets/socials/skype.png",alt:"skype logo"}})]),a("a",{attrs:{href:"http://github.com/teawithsatyam",target:"_blank"}},[a("img",{attrs:{src:"/assets/socials/github.png",alt:"github logo"}})])])])])])])},n=[],i=a("5eb0"),r={Name:"Contact",components:{ContentCard:i["a"]},props:{data:{type:Object,default:function(){}}}},l=r,o=(a("b8f3"),a("2877")),c=Object(o["a"])(l,s,n,!1,null,"385c2d0c",null);e["default"]=c.exports},b8a6:function(t,e,a){},b8f3:function(t,e,a){"use strict";var s=a("0fb4"),n=a.n(s);n.a},d34a:function(t,e,a){},db93:function(t,e,a){"use strict";var s=a("3c30"),n=a.n(s);n.a},f25a:function(t,e,a){},f79a:function(t,e,a){"use strict";var s=a("b8a6"),n=a.n(s);n.a},ffd6:function(t,e,a){}});
//# sourceMappingURL=app.99e3ddcd.js.map