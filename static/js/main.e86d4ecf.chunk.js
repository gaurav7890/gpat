(this.webpackJsonpgpat=this.webpackJsonpgpat||[]).push([[0],{16:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){e.exports=a(53)},36:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=(a(36),a(3)),s=a(4),o=a(5),m=a(6),u=a(27),d=a(9),E=a(10),h=(a(23),a(24),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).handleOutsideClick=function(e){n.state.mobileHeaderExpanded&&!n.headerIconRef.current.contains(e.target)&&n.setState({mobileHeaderExpanded:!1})},n.handleMobileMenuClick=function(){var e=n.state.mobileHeaderExpanded;n.setState(Object(u.a)({},n.state,{mobileHeaderExpanded:!e}))},n.headerIconRef=l.a.createRef(),n.state={mobileHeaderExpanded:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"menu-icon-container",ref:this.headerIconRef},l.a.createElement(E.a,{icon:this.state.mobileHeaderExpanded?"times":"bars",className:"hamburger-menu",onClick:function(){return e.handleMobileMenuClick()}})),l.a.createElement("div",{className:this.state.mobileHeaderExpanded?"header-section":"header-section-closed-mobile header-section"},l.a.createElement(d.b,{to:"/",onClick:function(){return e.handleMobileMenuClick()}},l.a.createElement(E.a,{icon:"home",className:"header-nav home"})),l.a.createElement(d.b,{to:"/about",onClick:function(){return e.handleMobileMenuClick()}},l.a.createElement("div",{className:"header-nav about-me"},"About Me")),l.a.createElement(d.b,{to:"/experiences",onClick:function(){return e.handleMobileMenuClick()}},l.a.createElement("div",{className:"header-nav experience"},"Experiences")),l.a.createElement(d.b,{to:"/contact",onClick:function(){return e.handleMobileMenuClick()}},l.a.createElement("div",{className:"header-nav contact-me"},"Contact Me"))))}}]),a}(l.a.Component)),p=(a(44),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"welcome-page-background"}),l.a.createElement("div",{className:"welcome-page"},l.a.createElement("div",{className:"welcome-name"},"Gaurav Patnashetty."),l.a.createElement("div",{className:"welcome-one-liner"},"I'm a Fullstack Software Developer."),l.a.createElement("div",{className:"learn-more-button"},l.a.createElement(d.b,{to:"/about",className:"btn btn-primary"},"Learn More"))))}}]),a}(l.a.Component)),f=(a(45),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(E.a,{icon:["far","copyright"],className:"copyright-icon"}),"2020 Gaurav Patnashetty")}}]),a}(l.a.Component)),v=(a(16),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("ul",null,l.a.createElement("li",null,"I'm Gaurav Patnashetty. I currently live in Seattle, WA, USA."),l.a.createElement("li",null,"I'm currently a fullstack software developer in a fortune 500 company."),l.a.createElement("li",null,"My interests include problem solving, market and product strategy, general tech discussions."),l.a.createElement("li",null,"I enjoy camping, water-based sports, travel, and binging on TV shows."))}}]),a}(l.a.Component)),b=a(13),g=a(29),S={ADMIN_EMAIL:"gaurav.jain7890@gmail.com",EMAILJS_SERVICE_ID:"service_7s74yhr",EMAILJS_TEMPLATE_ID:"template_ub18rh5",EMAILJS_USER_ID:"user_o4VwgWiuC0Jjgatt7sfJA",TOAST_TIMEOUT:3e3,MAX_INT:Number.MAX_SAFE_INTEGER,MIN_INT:Number.MIN_SAFE_INTEGER},N=a(21),y=a(30),k=(a(48),function(e){var t=e.toastList,a=Object(n.useState)(t),r=Object(y.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){i(Object(N.a)(t))}),[t]),Object(n.useEffect)((function(){var e=setInterval((function(){t.length&&c.length&&s(t[0].id)}),S.TOAST_TIMEOUT);return function(){clearInterval(e)}}),[t,c]);var s=function(e){var a=c.findIndex((function(t){return t.id===e})),n=t.findIndex((function(t){return t.id===e}));c.splice(a,1),t.splice(n,1),i(Object(N.a)(c))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"notification-container top-right"},c.map((function(e,t){return l.a.createElement("div",{key:t,className:"notification toast top-right ".concat(e.type)},l.a.createElement("button",{className:"close-button",onClick:function(){return s(e.id)}},l.a.createElement(E.a,{icon:"times"})),l.a.createElement("div",{className:"toast-icon"},l.a.createElement(E.a,{icon:"".concat(e.iconName)})),l.a.createElement("div",null,l.a.createElement("p",{className:"notification-title"},e.title),l.a.createElement("p",{className:"notification-message"},e.description)))}))))}),C=(a(49),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).handleContactMeSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,l=t.message,r={from_name:a,to_name:S.ADMIN_EMAIL,message:l};g.send(S.EMAILJS_SERVICE_ID,S.EMAILJS_TEMPLATE_ID,r,S.EMAILJS_USER_ID).then((function(e){n.resetForm(),n.setState({toastList:[{id:Math.random(),title:"Success",description:"Your message was successfully sent to Gaurav.",type:"success",iconName:"check"}]})}),(function(e){console.log("Error while sending email: ",e),n.setState({toastList:n.state.toastList.push({id:Math.random(),title:"Error",description:"An error occurred while sending the message. Please check the required fields and try again.",type:"error",iconName:"exclamation-triangle"})})}))},n.resetForm=function(){n.setState({name:"",email:"",message:""})},n.handleChange=function(e,t){n.setState(Object(b.a)({},e,t.currentTarget.value))},n.state={name:"",email:"",message:"",toastList:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"contact-me-form",onSubmit:this.handleContactMeSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",required:!0,value:this.state.name,onChange:this.handleChange.bind(this,"name")})),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"email",required:!0,value:this.state.email,onChange:this.handleChange.bind(this,"email")})),l.a.createElement("label",null,"Message:",l.a.createElement("input",{type:"text",required:!0,value:this.state.message,onChange:this.handleChange.bind(this,"message")})),l.a.createElement("button",{type:"submit",value:"Submit"},"Submit")),l.a.createElement(k,{toastList:this.state.toastList}))}}]),a}(l.a.Component)),M=(a(50),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"experiences"},l.a.createElement("div",{className:"education resume-section-container"},l.a.createElement("h2",null,"Education"),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"degree"},l.a.createElement("b",null,"Master of Science")),l.a.createElement("div",{className:"major"},"Computer Science")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("div",null,"University of Texas at Dallas"),l.a.createElement("div",null,"Richardson, TX, USA"),l.a.createElement("div",null,"Fall 2012 \u2013 Spring 2014"))),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"degree"},l.a.createElement("b",null,"Bachelor of Engineering")),l.a.createElement("div",{className:"major"},"Information Science & Engineering")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("div",null,"B.M.S College of Engineering (Autonomous)"),l.a.createElement("div",null,"Bangalore, KA, India"),l.a.createElement("div",null,"Fall 2008 \u2013 Spring 2012")))),l.a.createElement("div",{className:"resume-section-container"},l.a.createElement("h2",null,"Professional Experiences"),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"employer"},l.a.createElement("b",null,l.a.createElement("a",{href:"http://jnj.com/"},"Johnson and Johnson"))),l.a.createElement("div",{className:"role"},"Software Engineer - Fullstack"),l.a.createElement("div",{className:"location"},"Seattle, WA, USA"),l.a.createElement("div",{className:"timeline"},"Aug 2019 - present")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("ul",null,l.a.createElement("li",null,"Crowd-sourced assessment of technical skills of a surgeon to provide insights, expert feedback for continuous growth and improvement."),l.a.createElement("li",null,"Built advanced filters in the \u201cAcademy\u201d page which is a curated youtube-like webpage to look up surgery videos."),l.a.createElement("li",null,"Built the \u201cCommunity\u201d page with features like insights for surgeons, Peer Discussions, activity history, paid assessments, etc."),l.a.createElement("li",null,"Designed and built the login wizard, and the new login flow."),l.a.createElement("li",null,"Built mobile-friendly responsive pages across different parts of the application."),l.a.createElement("li",null,"Built the new skills summary section that ranks a surgeon\u2019s skills with respect to their peers using graphs, and insights."),l.a.createElement("li",null,"Worked on multiple aspects of CCAP - the in-OR tablet that captures surgery videos."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": JavaScript, HTML/CSS/SCSS, Meteor, Blaze, Node, MongoDb")))),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"employer"},l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.usermind.com/"},"Usermind, Inc"))),l.a.createElement("div",{className:"role"},"Software Development Engineer II"),l.a.createElement("div",{className:"location"},"Seattle, WA, USA"),l.a.createElement("div",{className:"timeline"},"April 2019 - July 2019")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("ul",null,l.a.createElement("li",null,"Customer engagement platform to help clients orchestrate customers\u2019 transitions categorized by journeys and milestones to help trigger actions."),l.a.createElement("li",null,"Designed and built validations for Preview and Publish of a journey that helps users can check their errors beforehand."),l.a.createElement("li",null,"Designed and built validations for maps that helps users build a map entailing the correct schema."),l.a.createElement("li",null,"Designed and built segment suggestions that helps users create segments by looking at the insights provided."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": JavaScript, HTML/CSS/SCSS, EmberJS")))),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"employer"},l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.apptio.com/"},"Apptio, Inc"))),l.a.createElement("div",{className:"role"},"Software Development Engineer II"),l.a.createElement("div",{className:"location"},"Seattle, WA, USA"),l.a.createElement("div",{className:"timeline"},"May 2017 - April 2019")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("ul",null,l.a.createElement("li",null,"Scalable Data Ingestion Web Application that can consume data from disparate source systems with features including Version Control, Auto-mapping of columns, Date-specific content, Multiple Workspaces, Error Surfacing, etc."),l.a.createElement("li",null,"Built and responsible for the entire front-end of the 4-page application."),l.a.createElement("li",null,"Worked Vertical slices of the application where I built and consumed APIs for some of the features \u2013 error surfacing, builds information, etc."),l.a.createElement("li",null,"Introduced and built shared components that can be consumed by other applications in the product/other products."),l.a.createElement("li",null,"Built the base functional UI test suite and added tests using selenide to ensure front-end validation and stability."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": JavaScript, TypeScript, ReactJS, Redux, Immutable-js, HTML/CSS/SCSS, Jest, Enzyme, Java, Selenium, Selenide")))),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"employer"},l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.sabre.com/"},"Sabre Corp"))),l.a.createElement("div",{className:"role"},"Contributer Software Engineer"),l.a.createElement("div",{className:"location"},"Dallas, TX, USA"),l.a.createElement("div",{className:"timeline"},"June 2016 - March 2017")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("ul",{className:"project-name"},"IROPS Reaccomodation",l.a.createElement("li",null,"Web application that delivers passenger rebooking solutions for airlines during real-time and anticipated disruptions."),l.a.createElement("li",null,"Redesign and rebuild of the front-end of the application"),l.a.createElement("li",null,"Introduced and built new features, reports to the product working in a test driven development."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": Java, Junit, Spring, JavaScript, ReactJS, Redux, karma, HTML/CSS")))),l.a.createElement("div",{className:"resume-section"},l.a.createElement("div",{className:"resume-left"},l.a.createElement("div",{className:"employer"},l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.cerner.com/"},"Cerner Corp"))),l.a.createElement("div",{className:"role"},"Software Engineer"),l.a.createElement("div",{className:"location"},"Kansas City, MO, USA"),l.a.createElement("div",{className:"timeline"},"Aug 2019 - May 2016")),l.a.createElement("div",{className:"resume-right"},l.a.createElement("ul",{className:"project-name"},"HealtheIntent Data Upload Utility",l.a.createElement("li",null,"Developed an intuitive tool to upload client\u2019s healthcare data. (A tool that helps clients upload data files with ease that performs pre-upload validation.)"),l.a.createElement("li",null,"Single-handedly worked on the client-end of the project that interacts with the service-end to get responses and performs validation in a test driven development."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": Java, Junit")),l.a.createElement("ul",{className:"project-name"},"DataWorks: Data On-boarding and Profiling",l.a.createElement("li",null,"Developed tools to ease the ingestion of desperate data sources (EMRs, HIEs, Payers, etc) to Cerner\u2019s big data platform."),l.a.createElement("li",null,"Develop infrastructure for creating reports that profile the raw data being ingested into the platform."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": Java, Apache Crunch, MapReduce, Vertica, SAP BusinessObjects")),l.a.createElement("ul",{className:"project-name"},"Uplift and creation of MapForce functions",l.a.createElement("li",null,"Mapped xsd models to raw avdl models and created MapForce functions based on requirements."),l.a.createElement("li",null,"Created test mfds and junit tests to ensure correct emission of data."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": MapForce, Spring Tool Suite")),l.a.createElement("ul",{className:"project-name"},"PopulationHealth Analytics Dev",l.a.createElement("li",null,"Developed roles to create schema for ETL load test"),l.a.createElement("li",null,"Modified Ad Hoc Reports to meet customer requirements using SAP Business Objects 4.0."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": Java, Apache Crunch, SAP BusinessObjects, Chef, Vertica")),l.a.createElement("ul",{className:"project-name"},"Process Tutorials",l.a.createElement("li",null,"Customized an e-learning interactive web application offering Jira, Git and Crucible learning modules."),l.a.createElement("li",null,l.a.createElement("b",null,"Technology Stack"),": ava, Spring MVC, Spring Security, Hibernate ORM, JIRA REST API"))))))}}]),a}(l.a.Component)),w=(a(51),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"fourOFour-container"},l.a.createElement("div",{className:"fourOFour-text"},l.a.createElement("div",{className:"fourOFour-error-number"},"404"),"There's nothing here.",l.a.createElement("br",null),"Go back",l.a.createElement(d.b,{to:"/"},l.a.createElement(E.a,{icon:"home",className:"home"}))),l.a.createElement("div",{className:"fourOFour-background-gif"}))}}]),a}(l.a.Component)),j=(a(52),a(2)),I=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement("div",{className:"main-content"},l.a.createElement(j.c,null,l.a.createElement(j.a,{exact:!0,path:"/gpat"},l.a.createElement(p,null)),l.a.createElement(j.a,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(j.a,{path:"/about"},l.a.createElement(v,null)),l.a.createElement(j.a,{path:"/experiences"},l.a.createElement(M,null)),l.a.createElement(j.a,{path:"/contact"},l.a.createElement(C,null)),l.a.createElement(w,null))),l.a.createElement(f,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e86d4ecf.chunk.js.map