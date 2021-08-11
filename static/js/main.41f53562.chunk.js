(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(21),o=n.n(r),s=(n(118),n(91)),l=(n(119),n(152)),a=n(99),d=n(158),j=n(155),x=n(150),p=n(55),b=n(33),g=n(163),m=n(100),h=n.n(m),u=n(101),O=n(3),f=l.a.Text,y=[{link:"tech",text:"Technical Skillsets",isHovered:!1},{link:"project",text:"Projects",isHovered:!1},{link:"work",text:"Work Experience",isHovered:!1},{link:"contact",text:"Contact Me",isHovered:!1}],S=function(){var e={fontFamily:"Roboto Slab",fontSize:"24px"};return Object(O.jsx)("ul",{style:{marginTop:"20px",height:"40px",display:"flex",listStyle:"none",justifyContent:"space-around"},children:y.map((function(t,n){return Object(O.jsx)("li",{children:Object(O.jsx)(u.Link,{to:t.link,spy:!0,smooth:!0,children:Object(O.jsx)(f,{style:e,children:t.text},n)})})}))})},k=n.p+"static/media/profile_pic_circle.16b59e3b.png",v=l.a.Text,w=l.a.Title,A=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"aboutme",children:[Object(O.jsx)(w,{id:"aboutme",style:{fontSize:"80px",fontFamily:"Roboto Slab",textAlign:"center",marginBottom:"0px"},children:"Kim Guan"}),Object(O.jsx)(w,{level:4,style:{marginTop:"0px",fontSize:"30px",fontFamily:"Roboto Slab",textAlign:"center"},children:Object(O.jsx)("strong",{children:"Web Developer"})}),Object(O.jsx)(p.a,{justify:"center",children:Object(O.jsx)("img",{style:{marginBottom:"24px"},height:"250em","object-fit":"contain",src:k})}),Object(O.jsx)(p.a,{justify:"center",children:Object(O.jsx)(b.a,{style:{textAlign:"center"},span:20,children:Object(O.jsxs)(v,{style:{fontSize:"20px",fontFamily:"Roboto Slab",textAlign:"center"},children:["I am Kim Guan, a Year 2 Computer Science student at the National University of Singapore,",Object(O.jsx)("br",{}),"an aspiring full-stack developer and also a self-proclaimed Disney movie junkie."]})})})]})})},I=n(89),C=n(156),T=n(151),P=n(153),L=n(159),H=(n(64),l.a.Title),R=l.a.Text,F=I.a.TabPane,z=[{techstack:"Typescript",color:"#f67e7d"},{techstack:"React",color:"blue"},{techstack:"ExpressJS",color:"purple"},{techstack:"NodeJS",color:"orange"},{techstack:"PostgresSQL",color:"green"},{techstack:"Java",color:"pink"},{techstack:"AWS S3",color:"indigo"}],J=[{type:"Web Development",data:[{title:"NUS Pawfriends Official Website",techstack:["React","Typescript","AWS S3","ExpressJS","NodeJS","PostgresSQL"],images:["./projectImages/Pawfriends-2.png","./projectImages/Pawfriends-3.png","./projectImages/Pawfriends-4.png","./projectImages/Pawfriends-5.png"],text:Object(O.jsxs)(R,{children:["Pawfriends is a website built for NUS Pawfriends as the official new website.",Object(O.jsx)("br",{}),"Utilised Ant Design UI as the main UI framework, with images hosted on Amazon S3, with ExpressJS and NodeJS as the back-end and PostgresSQL to store data."]}),links:[{title:"Source Code",link:"https://github.com/soaza/pawfriends"},{title:"Website",link:"https://nuspawfriends.com/"}]},{title:"NUS Pawfriends Content Management System",techstack:["React","Typescript","AWS S3","ExpressJS","NodeJS","PostgresSQL"],images:["./projectImages/Pawfriends-cms-2.png","./projectImages/Pawfriends-cms-1.png","./projectImages/Pawfriends-cms-3.png","./projectImages/Pawfriends-cms-4.png"],text:Object(O.jsxs)(R,{children:["Content Management System/Dashboard for the Pawfriends committee members to make changes to the official website without needing to code. ",Object(O.jsx)("br",{}),"Utilised Ant Design UI as the main UI framework, with images hosted on Amazon S3, with ExpressJS and NodeJS as the back-end and PostgresSQL to store data.",Object(O.jsx)("br",{}),"Main features include:",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Account Management System with basic user login authentication"}),Object(O.jsx)("li",{children:"Editing features for each individual page and allowing the users to make new blogs posts on the website"}),Object(O.jsx)("li",{children:" Image uploading to Amazon S3"})]})]}),links:[{title:"Source Code",link:"https://github.com/soaza/pawfriends-cms"}]},{title:"Portfolio",techstack:["React","Typescript"],images:["./projectImages/Portfolio-1.png"],text:Object(O.jsx)(R,{children:"Built from scratch using React and Ant.Design components."}),links:[{title:"Source Code",link:"https://github.com/soaza/portfolio-v2"}]},{title:"Smart Brain",techstack:["React","PostgresSQL","ExpressJS","NodeJS"],images:["./projectImages/Smartbrain-1.png","./projectImages/Smartbrain-2.png","./projectImages/Smartbrain-3.png"],text:Object(O.jsxs)(R,{children:["Smart-brain is a full-stack web application which detects human faces with an image link, using API from Clarifai face detection model.",Object(O.jsx)("br",{}),"It tracks user submissions made, with user details stored using PostgreSQL database."]}),links:[{title:"Front-end source code",link:"https://github.com/soaza/smart-brain"},{title:"Back-end source code",link:"https://github.com/soaza/smart-brain-api"},{title:"Website",link:"https://smart-brain-app-kg.herokuapp.com"}]},{title:"PokeEncyclopedia",techstack:["React"],images:["./projectImages/PokeEncyclopedia-1.png","./projectImages/PokeEncyclopedia-2.png"],text:Object(O.jsxs)(R,{children:["PokeEncyclopedia is a mini-Pokedex used to showcase the first 151 pokemons in a single page.",Object(O.jsx)("br",{}),"It is built with React framework and uses API from https://pokeapi.co/ for the data and https://pokeres.bastionbot.org/ for the images."]}),links:[{title:"Source Code",link:"https://github.com/soaza/pokeEncyclopedia"},{title:"Website",link:"https://soaza.github.io/pokeEncyclopedia/"}]}]},{type:"Others",data:[{title:"Archangel",techstack:["Java"],images:["./projectImages/Archangel-1.png","./projectImages/Archangel-2.png","./projectImages/Archangel-3.png"],text:Object(O.jsxs)(R,{children:["Archangel is a desktop application targeted at clinics for scheduling appointments and patient details. While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface).",Object(O.jsx)("br",{}),"It also includes an in-built calendar feature. Archangel was my team's project submission for the module CS2103T:Software Engineering, with my role being the team leader."]}),links:[{title:"Source Code",link:"https://github.com/AY2021S1-CS2103T-W11-1/tp"},{title:"Video",link:"https://www.youtube.com/watch?v=DfCUDk3LgPU&feature=youtu.be"}]}]}],U=function(){a.a.useBreakpoint().lg;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{id:"project",style:{marginTop:"30px",fontFamily:"Roboto Slab",textAlign:"center"},children:"My Projects"}),Object(O.jsx)(I.a,{style:{marginLeft:"20px"},centered:!0,size:"large",animated:!0,children:J.map((function(e,t){return Object(O.jsx)(F,{tab:e.type,children:Object(O.jsx)(p.a,{justify:"space-around",children:e.data.map((function(e){var t,n,i;return Object(O.jsx)(b.a,{style:{marginTop:"20px"},span:22,lg:11,children:Object(O.jsxs)(C.a,{hoverable:!0,style:{minHeight:"800px"},children:[Object(O.jsx)(H,{style:{fontSize:"30px",fontFamily:"Roboto Slab",textAlign:"center",marginBottom:"20px"},children:e.title}),Object(O.jsx)(T.a.PreviewGroup,{children:Object(O.jsx)(P.a,{dotPosition:"bottom",effect:"fade",autoplay:!0,children:null===(t=e.images)||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T.a,{src:e}),Object(O.jsx)(C.a,{bordered:!1})]})}))})}),Object(O.jsx)(p.a,{style:{marginBottom:"20px"},children:null===(n=e.techstack)||void 0===n?void 0:n.map((function(e){var t;return Object(O.jsx)(L.a,{color:null===(t=z.find((function(t){return t.techstack==e})))||void 0===t?void 0:t.color,children:e})}))}),Object(O.jsx)(R,{style:{fontSize:16},children:e.text}),Object(O.jsx)(p.a,{style:{marginTop:"20px"},children:null===(i=e.links)||void 0===i?void 0:i.map((function(e){return Object(O.jsx)(j.a,{shape:"round",style:{marginRight:"10px"},type:"primary",onClick:function(){return window.open(e.link,"_blank")},children:e.title})}))})]})})}))})},t)}))})]})},X=n(154),K=n(64),M=[{title:"Languages",arr:[{text:"Javascript",icon:"devicon-javascript-plain colored",percent:80},{text:"Typescript",icon:"devicon-typescript-plain colored",percent:80},{text:"Python",icon:"devicon-python-plain colored",percent:70},{text:"Java",icon:"devicon-java-plain colored",percent:60}]},{title:"Front-end",arr:[{text:"React",icon:"devicon-react-plain colored",percent:80},{text:"HTML",icon:"devicon-html5-plain colored",percent:80},{text:"CSS",icon:"devicon-css3-plain colored",percent:60},{text:"Bootstrap",icon:"devicon-bootstrap-plain colored",percent:50},{text:"GatsbyJS",icon:"devicon-gatsby-plain colored",percent:50},{text:"Django",icon:"devicon-django-plain colored",percent:50}]},{title:"Back-end",arr:[{text:"PostgreSQL",icon:"devicon-postgresql-plain colored",percent:80},{text:"MySQL",icon:"devicon-mysql-plain colored",percent:80},{text:"Django",icon:"devicon-django-plain colored",percent:70},{text:"ExpressJS",icon:"devicon-express-original-wordmark",percent:50},{text:"NodeJS",icon:"devicon-nodejs-plain-wordmark colored",percent:50},{text:"Flask",icon:"devicon-flask-plain colored",percent:50}]},{title:"Other Tools",arr:[{text:"Git",icon:"devicon-git-plain colored",percent:80}]}],D=l.a.Text,G=l.a.Title,V=function(){a.a.useBreakpoint().lg;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"}),Object(O.jsxs)("div",{id:"tech",children:[Object(O.jsx)(G,{style:{fontFamily:"Roboto Slab",textAlign:"center",marginTop:"50px"},children:"Technical Skillsets"}),M.map((function(e){return Object(O.jsx)(K,{bottom:!0,children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(G,{style:{textAlign:"center"},level:3,children:e.title}),Object(O.jsx)(p.a,{justify:"center",children:e.arr.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{style:{fontSize:"60px",textAlign:"end"},span:6,lg:3,children:Object(O.jsx)("i",{style:{marginRight:"10px"},className:e.icon})}),Object(O.jsxs)(b.a,{span:18,lg:9,children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(D,{style:{fontSize:"20px"},children:e.text})}),Object(O.jsx)(X.a,{style:{width:"80%"},percent:e.percent,showInfo:!1,strokeColor:"lightgreen"})]})]})}))})]})})}))]})]})},B=n(157),W=n.p+"static/media/NUS_Logo.a55bd0b7.jpeg",N=n.p+"static/media/NTUC_Income_logo.c406b7f2.jpeg",Z=n.p+"static/media/workclass-logo.785bc2c1.png",Y=n(64),E=l.a.Title,Q=l.a.Text,q=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{id:"work",style:{marginTop:"30px",fontFamily:"Roboto Slab",textAlign:"center"},children:"Work Experience"}),Object(O.jsx)(Y,{bottom:!0,children:Object(O.jsxs)(B.a,{mode:"alternate",reverse:!0,children:[Object(O.jsx)(B.a.Item,{label:Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"right",marginBottom:"0px"},level:3,children:"August 2019"}),children:Object(O.jsxs)(C.a,{hoverable:!0,style:{marginRight:"20px"},children:[Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"left",marginBottom:"0px"},level:3,children:"Started school at NUS School of Computing: Computer Science"}),Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("img",{width:"40%",src:W}),Object(O.jsx)(E,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 1 / Semester 1"}),Object(O.jsxs)(Q,{children:["CS1101S: Programming Methodology ",Object(O.jsx)("br",{}),"CS1231S: Discrete Structures ",Object(O.jsx)("br",{}),"MA1101R: Linear Algebra"]}),Object(O.jsx)(E,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 1 / Semester 2"}),Object(O.jsxs)(Q,{children:["CS2030: Programming Methodology II ",Object(O.jsx)("br",{}),"CS2040S: Introduction to Data Structures and Algorithms ",Object(O.jsx)("br",{}),"MA1521: Calculus for Computing"]})]})]})}),Object(O.jsx)(B.a.Item,{label:Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"left",marginBottom:"0px"},level:3,children:"May 2020 - Aug 2020"}),children:Object(O.jsxs)(C.a,{hoverable:!0,style:{marginLeft:"20px"},children:[Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"center",marginBottom:"0px"},level:3,children:"Back-End Software Engineer Intern at NTUC Income"}),Object(O.jsx)("div",{style:{textAlign:"center"},children:Object(O.jsx)("img",{width:"50%",src:N})}),Object(O.jsx)(Q,{style:{textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Responsible for data mining logs from Kibana and writing my own python scripts to present the data in a CSV format for better readability."}),Object(O.jsx)("li",{children:"Worked on Integrated Access Management(IAM) System project , an interface for performing User Access Management activities including creating, deleting and amending roles manually with integration with ELK."}),Object(O.jsx)("li",{children:"Provided and created API documentation for IAM to be used in future stages. Provided backend integration with Kibana using Flask framework and integrated it with IAM."})]})})]})}),Object(O.jsx)(B.a.Item,{label:Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"right",marginBottom:"0px"},level:3,children:"Aug 2020 - May 2021"}),children:Object(O.jsx)(C.a,{hoverable:!0,style:{marginRight:"20px"},children:Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)(E,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 2 / Semester 1"}),Object(O.jsxs)(Q,{children:["CS2103T: Software Engineering ",Object(O.jsx)("br",{}),"CS2100: Computer Organisation ",Object(O.jsx)("br",{})]}),Object(O.jsx)(E,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 2 / Semester 2"}),Object(O.jsxs)(Q,{children:["CS2102: Database Systems ",Object(O.jsx)("br",{}),"CS2105: Computer Networks ",Object(O.jsx)("br",{}),"CS3243: Introduction to Articial Intelligence"]})]})})}),Object(O.jsx)(B.a.Item,{label:Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"left",marginBottom:"0px"},level:3,children:"Feb 2021 - Jul 2021"}),children:Object(O.jsxs)(C.a,{hoverable:!0,style:{marginRight:"20px"},children:[Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"center",marginBottom:"0px"},level:3,children:"Full-stack Software Engineer Intern at Workclass.co"}),Object(O.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",textAlign:"center"},children:Object(O.jsx)("img",{width:"50%",src:Z})}),Object(O.jsx)(Q,{style:{textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)(p.a,{style:{marginBottom:10},children:[Object(O.jsx)(L.a,{color:"blue",children:"React"}),Object(O.jsx)(L.a,{color:"purple",children:"Gatsby.JS"}),Object(O.jsx)(L.a,{color:"red",children:"GraphQL"}),Object(O.jsx)(L.a,{color:"orange",children:"Cypress.JS"}),Object(O.jsx)(L.a,{color:"green",children:"Django"}),Object(O.jsx)(L.a,{color:"pink",children:"MySQL"})]}),Object(O.jsx)("li",{children:"Maintained and improved upon the front-end and back-end features of 5 core web applications used by the company on a daily basis which is used in production by over 60,000 users."}),Object(O.jsx)("li",{children:"Wrote a location matcher algorithm which allows users to location jobs that is located near the vicinity of their desired location,used daily by over 10,000 users."}),Object(O.jsx)("li",{children:"Built company\u2019s Learning Hub which is utilised by over 10,000 users."})]})})]})}),Object(O.jsx)(B.a.Item,{label:Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"right",marginBottom:"0px"},level:3,children:"Aug 2021 - Present"}),children:Object(O.jsxs)(C.a,{hoverable:!0,style:{marginRight:"20px"},children:[Object(O.jsx)(E,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"center",marginBottom:"0px"},level:3,children:"Front-End Developer Intern at Shopee"}),Object(O.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",textAlign:"center"},children:Object(O.jsx)("img",{width:"50%",src:"data:image/png;base64,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"})}),Object(O.jsx)(Q,{style:{textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)(p.a,{style:{marginBottom:10},children:[Object(O.jsx)(L.a,{color:"blue",children:"React"}),Object(O.jsx)(L.a,{color:"green",children:"SCSS"}),Object(O.jsx)(L.a,{color:"orange",children:"Firebase"})]}),Object(O.jsx)("li",{children:"Design Team"}),Object(O.jsx)("li",{children:"Working on task/ticket management web application,similar to Jira, for designers"})]})})]})})]})})]})},_=n(160),$=n(161),ee=n(162),te=l.a.Title,ne=function(){return Object(O.jsxs)("div",{style:{backgroundColor:"black",height:"200px"},children:[Object(O.jsx)("div",{style:{backgroundColor:"black",height:"60px"}}),Object(O.jsx)(te,{id:"contact",style:{color:"white",fontFamily:"Roboto Slab",textAlign:"center"},children:"Contact Me"}),Object(O.jsxs)(p.a,{justify:"center",children:[Object(O.jsx)(_.a,{onClick:function(){return window.open("https://github.com/soaza","_blank")},style:{color:"white",fontSize:"50px",marginRight:"40px"}}),Object(O.jsx)($.a,{onClick:function(){return window.open("mailto:chukimguan@gmail.com","_blank")},style:{color:"white",fontSize:"50px",marginRight:"40px"}}),Object(O.jsx)(ee.a,{onClick:function(){return window.open("https://www.linkedin.com/in/chu-kim-guan-a78834198/","_blank")},style:{color:"white",fontSize:"50px"}})]})]})},ie=n(64),ce=l.a.Title,re=l.a.Text,oe=function(){a.a.useBreakpoint().lg;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{id:"work",style:{marginTop:"30px",fontFamily:"Roboto Slab",textAlign:"center"},children:"Work Experience"}),Object(O.jsx)(ie,{bottom:!0,children:Object(O.jsxs)(B.a,{reverse:!0,children:[Object(O.jsx)(B.a.Item,{children:Object(O.jsxs)(C.a,{style:{marginRight:"20px"},children:[Object(O.jsx)(ce,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"left",marginBottom:"0px"},level:3,children:"Started school at NUS School of Computing: Computer Science"}),Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("img",{width:"40%",src:W}),Object(O.jsx)(ce,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 1 / Semester 1"}),Object(O.jsxs)(re,{children:["CS1101S: Programming Methodology ",Object(O.jsx)("br",{}),"CS1231S: Discrete Structures ",Object(O.jsx)("br",{}),"MA1101R: Linear Algebra"]}),Object(O.jsx)(ce,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 1 / Semester 2"}),Object(O.jsxs)(re,{children:["CS2030: Programming Methodology II ",Object(O.jsx)("br",{}),"CS2040S: Introduction to Data Structures and Algorithms ",Object(O.jsx)("br",{}),"MA1521: Calculus for Computing"]})]})]})}),Object(O.jsx)(B.a.Item,{children:Object(O.jsxs)(C.a,{style:{marginLeft:"20px"},children:[Object(O.jsx)(ce,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"center",marginBottom:"0px"},level:3,children:"Summer Software Engineer Intern at NTUC Income"}),Object(O.jsx)("div",{style:{textAlign:"center"},children:Object(O.jsx)("img",{width:"50%",src:N})}),Object(O.jsx)(re,{style:{textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Responsible for data mining logs from Kibana and writing my own python scripts to present the data in a CSV format for better readability."}),Object(O.jsx)("li",{children:"Worked on Integrated Access Management(IAM) System project , an interface for performing User Access Management activities including creating, deleting and amending roles manually with integration with ELK."}),Object(O.jsx)("li",{children:"Provided and created API documentation for IAM to be used in future stages. Provided backend integration with Kibana using Flask framework and integrated it with IAM."})]})})]})}),Object(O.jsx)(B.a.Item,{children:Object(O.jsx)(C.a,{style:{marginRight:"20px"},children:Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)(ce,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 2 / Semester 1"}),Object(O.jsxs)(re,{children:["CS2103T: Software Engineering ",Object(O.jsx)("br",{}),"CS2100: Computer Organisation ",Object(O.jsx)("br",{})]}),Object(O.jsx)(ce,{style:{fontSize:"16px",fontFamily:"Helvetica",marginBottom:"0px",textDecoration:"underline"},level:3,children:"Academic Year 2 / Semester 2"}),Object(O.jsxs)(re,{children:["CS2102: Database Systems ",Object(O.jsx)("br",{}),"CS2105: Computer Networks ",Object(O.jsx)("br",{}),"CS3243: Introduction to Articial Intelligence"]})]})})}),Object(O.jsx)(B.a.Item,{children:Object(O.jsxs)(C.a,{style:{marginRight:"20px"},children:[Object(O.jsx)(ce,{style:{fontSize:"18px",fontFamily:"Helvetica",textAlign:"center",marginBottom:"0px"},level:3,children:"Feb 2021 - Present: Full-stack Software Engineer Intern at Workclass.co"}),Object(O.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",textAlign:"center"},children:Object(O.jsx)("img",{width:"50%",src:Z})}),Object(O.jsx)(re,{style:{textAlign:"left"},children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)(p.a,{children:[Object(O.jsx)(L.a,{color:"blue",children:"React"}),Object(O.jsx)(L.a,{color:"green",children:"Django"}),Object(O.jsx)(L.a,{color:"purple",children:"Gatsby.JS"}),Object(O.jsx)(L.a,{color:"orange",children:"Cypress.JS"})]}),Object(O.jsx)("li",{children:"Responsible for writing code that is used in production by over 60,000 users"}),Object(O.jsx)("li",{children:"Took ownership of own projects and maintained code by writing own testcases using Cypress.JS"}),Object(O.jsx)("li",{children:"Wrote RESTful APIs to support front-end features on a regular basis."})]})})]})})]})})]})},se=n(109),le=n.n(se),ae=l.a.Title,de=l.a.Link,je=c.a.useState,xe=function(){var e=a.a.useBreakpoint().lg,t=je(!0),n=Object(s.a)(t,2),i=n[0],c=n[1],r=je("black"),o=Object(s.a)(r,2),l=o[0],m=o[1];return Object(O.jsxs)("html",{children:[Object(O.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto Slab",rel:"stylesheet"}),(!i||!e)&&Object(O.jsxs)(O.Fragment,{children:[e&&Object(O.jsx)(S,{}),Object(O.jsx)(d.a,{style:{zIndex:1,position:"fixed",bottom:10,right:10},children:Object(O.jsx)(j.a,{onClick:function(){return window.open("https://drive.google.com/file/d/1Fa4y4XWmEpiShGvbKRrILas794_IqBfp/view")},style:{borderRadius:10},type:"primary",children:"My Resume"})}),Object(O.jsx)(A,{}),Object(O.jsx)(x.a,{}),Object(O.jsx)(V,{}),Object(O.jsx)(x.a,{}),e&&Object(O.jsx)(le.a,{children:Object(O.jsx)(U,{})}),!e&&Object(O.jsx)(U,{}),Object(O.jsx)(x.a,{}),e?Object(O.jsx)(q,{}):Object(O.jsx)(oe,{}),Object(O.jsx)(x.a,{}),Object(O.jsx)(ne,{})]}),e&&i&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p.a,{justify:"center",children:Object(O.jsxs)(b.a,{span:20,children:[Object(O.jsx)(ae,{style:{fontSize:"90px",fontFamily:"Roboto Slab",textAlign:"center",marginTop:"20%"},children:Object(O.jsx)(h.a,{onInit:function(e){e.changeDelay(35).typeString("Hi, I am Kim Guan").pauseFor(1e3).deleteAll().typeString("Welcome to my website.").pauseFor(1e3).deleteAll().typeString("Lets get started,shall we?").pauseFor(1e3).callFunction((function(){return c(!1)})).start()}})}),Object(O.jsx)(de,{onMouseEnter:function(){return m("grey")},onMouseLeave:function(){return m("black")},children:Object(O.jsxs)(ae,{onClick:function(){return c(!1)},style:{opacity:.8,color:l,fontSize:"20px",fontFamily:"Roboto Slab",textAlign:"right"},children:["Skip intro",Object(O.jsx)(g.a,{})]})})]})})})]})};o.a.render(Object(O.jsx)(xe,{}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.41f53562.chunk.js.map