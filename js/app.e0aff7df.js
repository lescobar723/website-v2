(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"057d":function(e,t,a){},"0b44":function(e,t,a){e.exports=a.p+"img/screenshot-index-small.acc85ebe.png"},"180a":function(e,t,a){"use strict";a("fabd")},"1ad5":function(e,t,a){},2095:function(e,t,a){e.exports=a.p+"img/280-4.4b35c568.jpg"},"21f0":function(e,t,a){e.exports=a.p+"img/map-reduce.945745fd.jpg"},"21f1":function(e,t,a){e.exports=a.p+"img/280-1.3334c7bf.jpg"},2707:function(e,t,a){e.exports=a.p+"media/studyBuddy.d2910820.mp4"},2917:function(e,t,a){e.exports=a.p+"img/370-2.9d7f11d5.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{id:"nav"}}),a("div",{attrs:{id:"home"}},[a("Home"),a("div",{staticClass:"arrows"},[a("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:e.handleHover,expression:"handleHover"}]},[a("b-link",{attrs:{href:"#about"}},[e.isHovered?a("b-icon",{staticStyle:{color:"#f07269"},attrs:{icon:"arrow-down-square-fill","font-scale":"4"}}):e._e()],1),a("b-link",{attrs:{href:"#about"}},[e.isHovered?e._e():a("b-icon",{staticStyle:{color:"#ffa494"},attrs:{icon:"arrow-down-square-fill","font-scale":"4"}})],1)],1)])],1),a("div",{attrs:{id:"about"}},[a("About")],1),a("div",{attrs:{id:"portfolio"}},[a("Portfolio")],1),a("div",{attrs:{id:"skills"}},[a("Skills")],1),a("div",{attrs:{id:"contact"}},[a("Contact")],1),a("p",[e._v("Copyright © Lesley Escobar")])],1)},r=[],s=(a("f9e3"),a("2dd8"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"blurb-container"}},[a("section",{attrs:{id:"blurb"}},[a("h1",[e._v(" "+e._s(e.greeting)+" ")]),e._m(0)])])])}),o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("I am a senior and an aspiring software engineer studying Computer Science at the "),a("strong",{attrs:{id:"UM"}},[e._v("University of Michigan")]),e._v(" ("),a("span",[a("strong",[a("em",[e._v("Go Blue!")])])]),e._v("). ")])}],l={name:"Home",data:function(){return{msgs:[{id:1,title:"Hola Mundo, Soy Lesley!"},{id:2,title:"Hello World, I'm Lesley!"}],greeting:"Hola Mundo, Soy Lesley!"}},created:function(){this.greetings()},methods:{greetings:function(){var e=this,t=0;setInterval((function(){t=0==t?1:0,e.greeting=e.msgs[t].title}),2e3)}}},c=l,u=(a("ac1a"),a("2877")),d=Object(u["a"])(c,s,o,!1,null,"6aa6fec0",null),m=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),n("b-navbar-brand",{attrs:{href:"#home"}},[n("img",{staticStyle:{width:"45px"},attrs:{alt:"Lesley Escobar",src:a("99dd")}}),e._v(" Lesley Escobar ")]),n("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"nav-it",attrs:{href:"#about"}},[e._v("About")]),n("b-nav-item",{staticClass:"nav-it",attrs:{href:"#portfolio"}},[e._v("Portfolio")]),n("b-nav-item",{staticClass:"nav-it",attrs:{href:"#skills"}},[e._v("Skills")]),n("b-nav-item",{staticClass:"nav-it",attrs:{href:"https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing",target:"_blank"}},[e._v("Resume")]),n("b-nav-item",{staticClass:"nav-it",attrs:{href:"#contact"}},[e._v("Contact Me")])],1)],1)],1)],1)},g=[],f={name:"Navbar",data:function(){return{}},methods:{}},b=f,h=(a("c5b6"),Object(u["a"])(b,p,g,!1,null,"614358f4",null)),v=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"start"}},[n("h1",[e._v("About Me")]),n("hr"),n("section",{staticClass:"section"},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{xs:"12",md:"6",lg:"4"}},[n("img",{attrs:{alt:"Lesley Escobar",src:a("bf9f")}})]),n("b-col",[n("div",{staticClass:"box"},[n("p",[e._v("I am a senior at the University of Michigan studying Computer Science within the School of Literature, Science, and the Arts. ")]),n("p",[e._v(" My journey to become a Computer Scientist was not a traditional path. Initially, I wanted to pursue a major in Chemisty and minor in Computer Science. I had completed two years of research work and although I decided to switch majors, I am grateful for the experince within the Chemistry department. While researching, I was interested by the programs used to analyze compounds and took an intorductory computer science course. After that, my interest in Computer Science grew. I am still passionate about Chemistry and will continue to pursure it on the side. ")]),n("div",{staticClass:"links"},[n("b-link",{attrs:{href:"https://github.com/lescobar723",target:"_blank"}},[n("b-icon",{staticStyle:{color:"black"},attrs:{icon:"github","font-scale":"4"}})],1),n("b-link",{attrs:{href:"https://www.linkedin.com/in/lesleyescobar/",target:"_blank"}},[n("b-icon",{staticStyle:{color:"black"},attrs:{icon:"linkedin","font-scale":"4"}})],1)],1)])])],1)],1)],1)])},C=[],_={name:"Home"},k=_,w=(a("944c"),Object(u["a"])(k,y,C,!1,null,"31da14ba",null)),S=w.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"protfolio"},[a("div",{staticClass:"header"},[a("h1",[e._v("Portfolio")]),a("hr",{staticClass:"start"}),a("b-button",{attrs:{variant:"dark",size:"lg",href:"https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing",target:"_blank"}},[e._v("Resume")])],1),e._l(e.projects,(function(t){return a("div",{key:t.term,staticClass:"container"},e._l(t.when,(function(t){return a("div",{key:t.course},[a("b-row",[a("h2",[e._v(e._s(t.course))])]),t.one?a("div",[a("p",[e._v(e._s(t.text))]),a("div",{staticStyle:{"text-align":"center"}},[a("b-link",{attrs:{href:"https://github.com/lescobar723/website-v2",target:"_blank"}},[a("b-icon",{staticStyle:{color:"black"},attrs:{icon:"github","font-scale":"4"}})],1)],1)]):e._e(),a("b-row",e._l(t.projs,(function(t){return a("b-col",{key:t.name,attrs:{xs:"12",md:"6",lg:"4"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-head"},[a("img",{staticClass:"img-custome",attrs:{alt:"",src:t.url}}),a("h3",[e._v(e._s(t.name))]),a("div",{attrs:{id:"github-1"}},["Study Buddy"==t.name?a("b-link",{attrs:{href:"https://github.com/lescobar723/study-buddy",target:"_blank"}},[a("b-icon",{staticStyle:{color:"black"},attrs:{icon:"github","font-scale":"2"}})],1):e._e()],1)]),a("hr"),a("div",{staticClass:"card-body"},[a("p",[e._v(e._s(t.language))]),a("button",{staticClass:"btn btn-outline-secondary",on:{click:function(a){return e.openModal(t.name,t.message,t.url2,t.date,t.mif)}}},[e._v(" More ")])])]),a("br")])})),1)],1)})),0)})),a("b-modal",{ref:"my-modal",attrs:{id:"modal-1",title:e.modalTitle,"ok-only":""}},[e.modalif?a("b-embed",{staticStyle:{"padding-bottom":"20px"},attrs:{type:"iframe",aspect:"16by9",src:e.modalURL,allowfullscreen:""}}):e._e(),a("ul",{attrs:{id:"bullets"}},e._l(e.modalMessages,(function(t){return a("li",{key:t.p},[e._v(e._s(t.p))])})),0)],1)],2)},x=[],E={name:"Portfolio",data:function(){return{modalif:!1,modalDate:"",modalTitle:"",modalMessages:[],modalURL:"",projects:[{term:"personal",when:[{course:"lesleyescobar.com (This Website!)",one:!0,text:"Constructed a personalized website to showcase my skills and experience as a Computer Science major. This website was designed with Vue.js, HTML, CSS, and Bootstrap."}]},{term:"Fall2020",when:[{course:"EECS 493: User Interface Development",projs:[{name:"Study Buddy",date:"November-December 2020",url:a("a0f4"),language:"Vue.js, Bootstrap",url2:a("2707"),mif:!0,message:[{p:"​Collaborated in a team of 4 to design a web application to motivate students to study"},{p:"Developed with HTML, CSS (Bootstrap), Vue.js, and Firebase"}]},{name:"Mardi Gras Parade",date:"October 2020",url:a("b152"),language:"HTML, CSS, JQuery",url2:a("f15b"),mif:!0}]},{course:"EECS 485: Web Systems",projs:[{name:"Instagram Clone",date:"September-October 2020",url:a("0b44"),language:"React.js, Python, SQLite",url2:a("d5d6"),mif:!0,message:[{p:"Constructed an Instagram clone in a team of 3, which included a static site, a server-side dynamic side, and a client-side dynamic side"},{p:"Accomplished with HTML, CSS, Python (Flask), Jinja2, JavaScript (React), JSON, and SQLite"}]},{name:"MapReduce",date:"November 2020",url:a("21f0"),language:"Python",mif:!1,message:[{p:"Implemented a simple Map Reduce Python package in a team of 3 to handle tasks"},{p:"Utilized TCP/UDP sockets, Threads, Processes, classes, Python, and JSON"}]},{name:"Wikipedia Search Engine",date:"December 2020",url:a("b8c7"),language:"Hadoop, Python",mif:!1,message:[{p:"Collaborated in a team of 3 to build a scalable search engine that is similar to a commercial search engine"},{p:"Achieved through indexing implemented with MapReduce, information retrieval based on both tf-idf and PageRank scores, and information retrieval based on both tf-idf and PageRank scores"},{p:"Developed with Hadoop pipeline script, Python, Flask, JSON, and HTML"}]}]}]},{term:"Winter2020",when:[{course:"EECS 281: Introduction to Computer Data Structures and Algorithms",projs:[{name:"Puzzle Solver",url:a("afd9"),language:"C++",mif:!1,message:[{p:"Created a program to solve a maze by either using a stack or queue as determined by the command-line"},{p:"Uses BFS or DFS algorithm as determined by the command-line"}]},{name:"Stock Market Emulation",url:a("81b1"),language:"C++",mif:!1,message:[{p:"Implemented priority queues to determine the best outcome in a stock market simulation"}]},{name:"SillyQL",url:a("e2bd"),language:"C++",mif:!1,message:[{p:"Utilized hash tables and binary search trees that can create, insert into, delete from, generate a hash or bst index, join, and remove tables, making a simple SQL"}]},{name:"Drone Delivery",url:a("94e4"),language:"C++",mif:!1,message:[{p:"Implemented Prim's Algorithm, Branch and Bound Algorithm, and TSP heuristics to optimally and efficiently deliver a drone from one location"}]}]},{course:"EECS 370: Introduction to Computer Organization",projs:[{name:"LC-2K Assembly Language",url:a("d957"),language:"C",mif:!1,message:[{p:"Wrote a program to take an assembly-language program and produce the corresponding machine language, which will construct a behavioral simulator"}]},{name:"LC2K File Linker",url:a("2917"),language:"C",mif:!1,message:[{p:"Constructed a program that assembles an assembly file into an object file. Then, link object files into one executable consisting of machine code"}]},{name:"LC-2K Pipeline",url:a("f69a"),language:"C",mif:!1,message:[{p:"Desgined a pipeline implementation program that inputs an assembly language and outputs the pipeline using simplified data forwarding"}]},{name:"Cache Simulator",url:a("bda1"),language:"C",mif:!1,message:[{p:"Simulate a CPU cache and integrate into a behavioral simulator by accessing instructions and data while executing an assembly-language program"}]}]}]},{term:"Fall2019",when:[{course:"EECS 280: Programming and Introductory Data Structures",projs:[{name:"Statistics",url:a("21f1"),language:"C++",mif:!1,message:[{p:"Implemented a program using vectors and file I/O to read in numerical data and provide a statistical summary"}]},{name:"Computer Vision",url:a("f542"),language:"C++",mif:!1,message:[{p:"Implemented a program using matrices to save a resized or distorted version of a given image as a new file"}]},{name:"Euchre",url:a("cddb"),language:"C++",mif:!1,message:[{p:"A C++ version of the card game, Euchre which uses polymorphism to handle the hands of multiple players and the points they have accumulated"}]},{name:"Machine Learning",url:a("2095"),language:"C++",mif:!1,message:[{p:"A program classify piazza posts into different categories by implementing binary search trees and maps"}]}]}]},{term:"Winter2019",when:[{course:"EECS 183: Programming and Introductory Data Structures",projs:[{name:"Ciphers",url:a("909a"),language:"C++",mif:!1,message:[{p:"A program using nested loops to decrypt or encrypt a given cipher method and key."}]},{name:"Sandwich Stacker",date:"December 2018",url:a("c2ae"),language:"Arduino",url2:a("ada3"),mif:!0,message:[{p:"Created a game using classes to make a sandwich with the key indigridients displayed on the side."},{p:"Collaborated in a team of 4"},{p:"Exceeded in learning the Arduino programming language in a short amount of time to successfully code a game"}]}]}]}]}},methods:{openModal:function(e,t,a,n,i){this.modalTitle=e,this.modalDate=n,this.modalif=i,this.modalMessages=t,this.modalURL=a,this.$refs["my-modal"].show()}}},P=E,M=(a("180a"),Object(u["a"])(P,j,x,!1,null,"0dc9c21a",null)),L=M.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"start"}},[a("h1",[e._v("Skills")]),a("hr"),a("div",{staticClass:"all__skills"},[a("section",{staticClass:"skills"},e._l(e.languages,(function(t){return a("div",{key:t.language,staticClass:"skill"},[a("h3",[e._v(e._s(t.language))]),a("div",{staticClass:"skill__outer-bar"},[a("div",{staticClass:"skill__inner-bar",style:{width:t.percentage+"%"}})])])})),0)])])},O=[],A={name:"Skills",data:function(){return{languages:[{language:"C/C++",percentage:"80"},{language:"Python",percentage:"60"},{language:"HTML & CSS",percentage:"80"},{language:"JavaScript",percentage:"65"},{language:"Vue.js",percentage:"70"},{language:"React.js",percentage:"55"},{language:"jQuery",percentage:"40"},{language:"Git",percentage:"30"},{language:"SQLite",percentage:"30"},{language:"Arduino",percentage:"10"}]}}},H=A,D=(a("f710"),Object(u["a"])(H,I,O,!1,null,"2c265c7d",null)),T=D.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"start"}},[a("h1",[e._v("Contact Me")]),a("hr"),a("b-link",{attrs:{href:"mailto:lesleyescobar0723@gmail.com"}},[a("b-icon",{staticClass:"rounded-circle bg-light p-2",staticStyle:{color:"black"},attrs:{icon:"envelope-fill","font-scale":"6"}})],1),a("b-link",{attrs:{href:"https://github.com/lescobar723",target:"_blank"}},[a("b-icon",{staticClass:"rounded-circle bg-light p-2",staticStyle:{color:"black"},attrs:{icon:"github","font-scale":"6"}})],1),a("b-link",{attrs:{href:"https://www.linkedin.com/in/lesleyescobar/",target:"_blank"}},[a("b-icon",{staticClass:"rounded-circle bg-light p-2",staticStyle:{color:"black"},attrs:{icon:"linkedin","font-scale":"6"}})],1)],1)},R=[],z={name:"Contact",data:function(){return{}}},B=z,J=(a("c053"),Object(u["a"])(B,U,R,!1,null,"0978b2c4",null)),W=J.exports,$={name:"App",components:{Home:m,Navbar:v,About:S,Portfolio:L,Skills:T,Contact:W},data:function(){return{isHovered:!1}},methods:{handleHover:function(e){this.isHovered=e}}},F=$,N=(a("034f"),Object(u["a"])(F,i,r,!1,null,null,null)),Y=N.exports,Q=a("8c4f"),V=[{path:"/",component:m},{path:"/about",component:S},{path:"/projects",component:L},{path:"/skills",component:T},{path:"/resume",beforeEnter:function(){location.href="https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing"}}],q=a("5f5b"),G=a("b1e0");n["default"].config.productionTip=!1,n["default"].use(q["a"]),n["default"].use(G["a"]),n["default"].use(Q["a"]);var K=new Q["a"]({routes:V});new n["default"]({router:K,render:function(e){return e(Y)}}).$mount("#app")},"7f38":function(e,t,a){},"81b1":function(e,t,a){e.exports=a.p+"img/proj-2.b5f137b5.jpg"},"85ec":function(e,t,a){},"909a":function(e,t,a){e.exports=a.p+"img/183-1.e1fe15c4.jpg"},"944c":function(e,t,a){"use strict";a("057d")},"94e4":function(e,t,a){e.exports=a.p+"img/proj-4.d0073499.jpg"},"99dd":function(e,t,a){e.exports=a.p+"img/favicon.fb8b87de.png"},a0f4:function(e,t,a){e.exports=a.p+"img/logo2.a359ce19.png"},a693:function(e,t,a){},ac1a:function(e,t,a){"use strict";a("1ad5")},ada3:function(e,t,a){e.exports=a.p+"media/FullSizeRender.c170c5a7.mp4"},afd9:function(e,t,a){e.exports=a.p+"img/281-1.9fa1e12f.jpg"},b152:function(e,t,a){e.exports=a.p+"img/mardi-gras.9990477a.jpg"},b8c7:function(e,t,a){e.exports=a.p+"img/wiki.dd22bfcc.png"},bda1:function(e,t,a){e.exports=a.p+"img/370-4.9783b1ea.jpg"},bf9f:function(e,t,a){e.exports=a.p+"img/IMG_8768.068e7535.jpg"},c053:function(e,t,a){"use strict";a("c627")},c2ae:function(e,t,a){e.exports=a.p+"img/183-2.885df4cf.jpg"},c5b6:function(e,t,a){"use strict";a("a693")},c627:function(e,t,a){},cddb:function(e,t,a){e.exports=a.p+"img/280-3.d5557a7d.jpg"},d5d6:function(e,t,a){e.exports=a.p+"media/insta485.ff58d8bf.mp4"},d957:function(e,t,a){e.exports=a.p+"img/370-1.7782a9da.jpg"},e2bd:function(e,t,a){e.exports=a.p+"img/proj-3.20820e28.jpg"},f15b:function(e,t,a){e.exports=a.p+"media/mardigrasparade.ca9a7ee3.mp4"},f542:function(e,t,a){e.exports=a.p+"img/280-2.cffef0c0.jpg"},f69a:function(e,t,a){e.exports=a.p+"img/370-3.de92a02b.jpg"},f710:function(e,t,a){"use strict";a("7f38")},fabd:function(e,t,a){}});
//# sourceMappingURL=app.e0aff7df.js.map