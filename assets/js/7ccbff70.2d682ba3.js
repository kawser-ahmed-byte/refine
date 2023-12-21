"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",slug:"bun-js-vs-node",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/social-2.png",hide_table_of_contents:!1},l="",u={permalink:"/blog/bun-js-vs-node",source:"@site/blog/2023-06-04-bun-vs-node.md",title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",date:"2023-06-04T00:00:00.000Z",formattedDate:"June 4, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.315,hasTruncateMarker:!1,authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],frontMatter:{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",slug:"bun-js-vs-node",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/social-2.png",hide_table_of_contents:!1},prevItem:{title:"A Complete Guide to Listing Docker Containers",permalink:"/blog/docker-list-containers"},nextItem:{title:"A Guide to Using the useLayoutEffect Hook in React",permalink:"/blog/uselayouteffect-vs-useeffect"},relatedPosts:[{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"November 22, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.385,date:"2022-11-22T00:00:00.000Z"},{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.585,date:"2023-05-18T00:00:00.000Z"},{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.11,date:"2022-12-28T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"May 29, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:12.045,date:"2023-05-29T00:00:00.000Z"},{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",permalink:"/blog/what-is-vite-vs-webpack",formattedDate:"May 15, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:8.01,date:"2023-05-15T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"What is a runtime",id:"what-is-a-runtime",level:2},{value:"The Javascript runtime",id:"the-javascript-runtime",level:3},{value:"What is Bun",id:"what-is-bun",level:2},{value:"Why is Bun Fast",id:"why-is-bun-fast",level:2},{value:"Installing the Bun runtime",id:"installing-the-bun-runtime",level:2},{value:"How does Bun compare with Node",id:"how-does-bun-compare-with-node",level:2},{value:"Benchmarking Bun",id:"benchmarking-bun",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Do you want to try out a new runtime environment? ",(0,a.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," is the new Javascript runtime that claims to be better than ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"Node.js"),". This article will show how we can test this with benchmark scores."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"While there is no prerequisite to follow in this tutorial, you should at least know the fundamentals of Javascript and building basic web applications. "),(0,a.kt)("p",null,"You need the followings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node 14")," or higher"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bun.sh/"},"Bun runtime")," installed"),(0,a.kt)("li",{parentName:"ul"},"npm installed"),(0,a.kt)("li",{parentName:"ul"},"A code editor ")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this tutorial, we will go over the new Bun runtime that has created a buzz in the tech space lately. We will talk about what a runtime does and why some developers are switching over to using bun. We will also carry out some benchmark test to see if bun really has the fastest runtime as the Bun team says. Let's dive rignt in."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-a-runtime"},"What is a runtime"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-javascript-runtime"},"The Javascript runtime")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-bun"},"What is Bun")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-is-bun-fast"},"Why is Bun Fast")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installing-the-bun-runtime"},"Installing the Bun runtime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-does-bun-compare-with-node"},"How does Bun compare with Node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#benchmarking-bun"},"Benchmarking Bun"))),(0,a.kt)("h2",{id:"what-is-a-runtime"},"What is a runtime"),(0,a.kt)("p",null,"Imagine you have a big box of LEGO blocks and you want to build a cool spaceship. You have all the instructions on how to put the pieces together, but you need something to actually assemble the spaceship and make it work. That's where a runtime comes in!\nA runtime is like a special helper that takes care of building and running your LEGO spaceship. It's a program that makes sure all the pieces fit together correctly and that the spaceship does what it's supposed to do."),(0,a.kt)("p",null,"When you give the instructions to the runtime, it reads them step by step and starts putting the LEGO pieces in the right places. It follows the instructions precisely, making sure each piece is connected properly and that everything is in the right order.\nOnce the spaceship is built, the runtime also takes care of making it work. It powers up the spaceship, activates its engines, and controls all its cool features. It's like a small computer inside the spaceship that runs all the commands and makes sure everything runs smoothly."),(0,a.kt)("p",null,"In the world of programming, a runtime is similar. It's a special program that helps run other programs. It reads the instructions of a program, executes them step by step, and makes sure everything works as intended.\nSo, just like the helper in assembling the LEGO spaceship, a runtime is the special program that helps build and run other programs correctly. It's like a smart assistant that makes sure everything works smoothly, just like you'd expect from your awesome LEGO spaceship!."),(0,a.kt)("h3",{id:"the-javascript-runtime"},"The Javascript runtime"),(0,a.kt)("p",null,"The JavaScript runtime is like a translator between JavaScript and the computer. When you tell JavaScript to do something, like add two numbers together, the runtime listens and understands what you want. It then takes that instruction and talks to the computer in a language it understands."),(0,a.kt)("p",null,"The runtime also takes care of other important things. It makes sure JavaScript follows the rules and doesn't make any mistakes. It keeps an eye on JavaScript as it runs, like a teacher watching over a student to make sure they're doing their work correctly."),(0,a.kt)("p",null,"When the runtime talks to the computer and gets the result, it passes it back to JavaScript. It's like the runtime whispers the answer to JavaScript, and then JavaScript can do something with that answer. Maybe it shows the answer on the screen or uses it to make a cool animation."),(0,a.kt)("h2",{id:"what-is-bun"},"What is Bun"),(0,a.kt)("p",null,"Bun is a JavaScript runtime built from scratch using the ",(0,a.kt)("a",{parentName:"p",href:"https://ziglang.org/"},"Zig")," programming language, with a focus on fast startup, efficient code execution, and a cohesive developer experience. It provides tools and features to optimize and streamline the development of JavaScript applications and is designed to be compatible with existing JavaScript ecosystems."),(0,a.kt)("p",null,"When you tell Bun what you want it to do, it listens carefully. It takes your instructions, which are written in a special language called JavaScript, and starts executing them step by step. It's like telling the a car where you want to go and how you want to get there.\nBut Bun doesn't just understand JavaScript\u2014it's also really good at making JavaScript code run really fast! It's like having a car engine that can make your car zoom down the road faster than any other car."),(0,a.kt)("p",null,"Bun is built using a special programming language called Zig. Zig is like a magical tool that allows the people who created Bun to build it in a way that makes it very efficient and fast. It's like the secret recipe that makes Bun so powerful.\nWith Bun, you can do all sorts of things. You can build websites and applications that work really quickly and smoothly. You can also use the Bun CLI (Command Line Interface) to run your JavaScript and TypeScript files, bundle your code together, and even manage your project's dependencies."),(0,a.kt)("h2",{id:"why-is-bun-fast"},"Why is Bun Fast"),(0,a.kt)("p",null,"The Bun runtime exhibits impressive speed due to several key factors:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lightweight Design"),": Bun is designed to be lightweight, resulting in a smaller codebase and reduced resource requirements. This optimized design allows Bun to deliver better performance in terms of both speed and memory usage compared to other runtimes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Low-Level Implementation"),": The Bun runtime is built using Zig, a relatively new low-level programming language. Zig's characteristics enable developers to write code with fine-grained control over memory management and execution, contributing to the runtime's efficiency."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Performance Optimization"),": Instead of relying on the V8 engine, Bun utilizes the JavaScriptCore from WebKit, which is widely recognized for its superior performance. By leveraging this core engine, Bun benefits from its optimized execution of JavaScript code, resulting in improved runtime speed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Integrated Functionality"),": Bun offers native tools and features that streamline the development process. It includes a built-in bundler, replacing the need for external tools like Webpack, as well as a native transpiler that supports writing TypeScript code directly. Additionally, Bun incorporates a test runner similar to Jest and automatically loads environment variables without requiring additional installations of packages like dotenv."),(0,a.kt)("h2",{id:"installing-the-bun-runtime"},"Installing the Bun runtime"),(0,a.kt)("p",null,"To install Bun, you can follow these steps:\nOpen your computer's terminal or command prompt. In the terminal, enter the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"curl -fsSL https://bun.sh/install | bash\n")),(0,a.kt)("p",null,"For macOS users, run this after:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"exec /bin/zsh\n")),(0,a.kt)("p",null,"This command will initiate the installation process for Bun by downloading the installation script from the official Bun website. Press Enter and allow the installation script to run. It will handle the necessary steps to install Bun and its dependencies on your system. Wait for the installation process to complete. The script will take care of all the required tasks to ensure Bun is properly installed on your computer."),(0,a.kt)("p",null,"Once the installation is finished, you will have successfully installed Bun. You can now start using the Bun runtime to run your JavaScript and TypeScript applications and take advantage of its bundled tools and optimized performance."),(0,a.kt)("h2",{id:"how-does-bun-compare-with-node"},"How does Bun compare with Node"),(0,a.kt)("p",null,"In this section, we'll look at how Bun compares to Node and do some benchmarking between this two runtime. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Performance"),": Bun emphasizes faster startup times and runtime performance by utilizing the JavaScriptCore engine from WebKit, renowned for its speed. In contrast, Node.js relies on the V8 engine, which is also highly optimized but may have performance distinctions compared to JavaScriptCore."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Size and Dependencies"),": Bun strives to be a lightweight runtime with a smaller codebase and minimal dependencies. It incorporates built-in tools like a bundler and transpiler, reducing reliance on external dependencies. In contrast, Node.js is a more comprehensive runtime with a larger codebase and extensive support for external modules and libraries."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Compatibility"),": Although Bun aims to serve as a drop-in replacement for Node.js, there may be variances in API compatibility. While Bun natively implements many Node.js and Web APIs, some specific Node.js modules or APIs might not be fully supported."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tooling"),": Bun provides an integrated toolkit for JavaScript development, including a bundler, transpiler, and package manager. Node.js, on the other hand, boasts a rich ecosystem of third-party tools and libraries for diverse development tasks, such as popular bundlers like Webpack and package managers like npm or Yarn."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Community and Ecosystem"),": Node.js benefits from a mature and extensive community, offering substantial support, well-documented resources, and a vast ecosystem of modules and libraries. In contrast, Bun, being relatively newer, may have a smaller community and a more focused ecosystem.")),(0,a.kt)("h2",{id:"benchmarking-bun"},"Benchmarking Bun"),(0,a.kt)("p",null,"This benchmarking test is running on my Mac M1, 8gb ram computer. For the benchmarking tool, we will be using ",(0,a.kt)("a",{parentName:"p",href:"https://k6.io/"},"k6")," an open source tool by Grafana labs. You can find the installation guide for this tool ",(0,a.kt)("a",{parentName:"p",href:"https://k6.io/docs/get-started/installation/"},"here"),". "),(0,a.kt)("p",null,"Here is our computer software version:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node v16.14.2"),(0,a.kt)("li",{parentName:"ul"},"Bun v0.4.0")),(0,a.kt)("p",null,"For our code, I have gotten a simple HTTP server code from the ",(0,a.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/getting-started-guide"},"Node.js")," official sites. Here is the Hello World code in Bun and Node"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const http = require('http');\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello World');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),(0,a.kt)("p",null,"Run the command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"node server.js\n")),(0,a.kt)("p",null,"Your node server will be running on port:  http://localhost:3000/"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bun")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export default {\n  port: 3001,\n  fetch(_) {\n    return new Response("Hello World");\n  },\n};\n')),(0,a.kt)("p",null,"Your Bun server will be running on port:  http://localhost:3001/"),(0,a.kt)("p",null,"Run the command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"bun run bunserver.js\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"script.js")," file and paste this test script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport default function () {\n  http.get('http://localhost:3001/'); // this will change depending on the server you're testing for\n  sleep(1);\n}\n")),(0,a.kt)("p",null,"In your terminal run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"k6 run script.js\n")),(0,a.kt)("p",null,"Here is the result for our Node server:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/node.png",alt:"bun vs node js"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here is the result for our Bun server:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/bun.png ",alt:"bun vs node js"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We can now see and compare Bun speed to Node. If you want to go further you can introduce different latencies, more users and duration with the script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"k6 run --vus 10 --duration 30s script.js\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In conclusion, Bun and Node.js are two JavaScript runtimes that offer different approaches and features for developers. Bun focuses on delivering fast startup times, optimized performance, and a lightweight design with integrated tools like a bundler and transpiler. It utilizes the JavaScriptCore engine from WebKit to achieve its performance goals. On the other hand, Node.js has a larger ecosystem, extensive community support, and compatibility with a wide range of programming languages. It relies on the V8 engine and offers a rich set of third-party tools and libraries. Choosing between Bun and Node.js depends on factors such as performance requirements, specific project needs, and the availability of suitable tooling and community support. Ultimately, developers can leverage the strengths of each runtime to build robust and efficient JavaScript applications."))}h.isMDXComponent=!0}}]);