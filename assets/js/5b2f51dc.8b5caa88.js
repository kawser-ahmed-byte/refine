"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19461],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||h[f]||o;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35399:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var t=r(67294),a=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"inferencer",title:"Inferencer"},s=void 0,l={unversionedId:"api-reference/chakra-ui/components/inferencer",id:"version-3.xx.xx/api-reference/chakra-ui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports ChakraUIListInferencer, ChakraUIShowInferencer, ChakraUIEditInferencer, ChakraUICreateInferencer and ChakraUIInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1706779193,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/chakra-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/create"}},h={},d=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],f=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},m=f("Tabs"),u=f("TabItem"),k=f("CodeSandboxExample"),I={toc:d};function v(e){var{components:n}=e,r=c(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},I,r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can automatically generate views for your resources using ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUIListInferencer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUIShowInferencer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUIEditInferencer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUICreateInferencer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," (which combines all in one place) components."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Chakra UI components can be imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui"),". You can directly use the components in ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,a.kt)(m,{defaultValue:"resources",values:[{label:(0,a.kt)(t.Fragment,null,"In",(0,a.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,a.kt)(u,{value:"resources",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        resources={[\n          {\n            name: "samples",\n            // highlight-start\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            // highlight-end\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n'))),(0,a.kt)(u,{value:"custom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"Docs"))),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("h3",{id:"list"},(0,a.kt)("inlineCode",{parentName:"h3"},"List")),(0,a.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"show"},(0,a.kt)("inlineCode",{parentName:"h3"},"Show")),(0,a.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"create"},(0,a.kt)("inlineCode",{parentName:"h3"},"Create")),(0,a.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            // highlight-next-line\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"edit"},(0,a.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,a.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            // highlight-next-line\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,a.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui")," components."),(0,a.kt)(k,{path:"inferencer-chakra-ui",mdxType:"CodeSandboxExample"}))}v.isMDXComponent=!0}}]);