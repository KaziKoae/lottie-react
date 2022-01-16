(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Otc6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n("Fcif"),i=n("+I+c"),o=(n("mXGw"),n("/FXl")),l=n("TjRS"),r=(n("ZFoC"),n("+lk4")),b=n("1ULk"),c=(n("aD51"),["components"]),s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/Lottie/README.mdx"}});var m={_frontmatter:s},p=l.a;function d(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)(p,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lottie"},"Lottie"),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)(r.a,{mdxType:"LottieExamples"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import Lottie from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst Example = () => {\n  return <Lottie animationData={groovyWalkAnimation} />;\n};\n\nexport default Example;\n')),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"animationdata"},Object(o.b)("inlineCode",{parentName:"h3"},"animationData")),Object(o.b)("p",null,"A JSON Object with the exported animation data"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Object\nDefault: none\nRequired: ☑\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"loop"},Object(o.b)("inlineCode",{parentName:"h3"},"loop")),Object(o.b)("p",null,"Set it to true for infinite amount of loops, or pass a number for a specific amount of loops"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean | Number\nDefault: true\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"autoplay"},Object(o.b)("inlineCode",{parentName:"h3"},"autoplay")),Object(o.b)("p",null,"If set to true, animation will play as soon as it's loaded"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Boolean\nDefault: true\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"initialsegment"},Object(o.b)("inlineCode",{parentName:"h3"},"initialSegment")),Object(o.b)("p",null,"Expects an array of length 2. First value is the initial frame, second value is the final frame. If this is set, the animation will start at this position in time instead of the exported value from AE"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Gotcha"),": The animation will re-run every time the segment array changes.  Therefore, to ensure that the animation behaves as expected, you must provide a stable array."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Array\nDefault: none\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oncomplete"},Object(o.b)("inlineCode",{parentName:"h3"},"onComplete")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onloopcomplete"},Object(o.b)("inlineCode",{parentName:"h3"},"onLoopComplete")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onenterframe"},Object(o.b)("inlineCode",{parentName:"h3"},"onEnterFrame")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onsegmentstart"},Object(o.b)("inlineCode",{parentName:"h3"},"onSegmentStart")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onconfigready"},Object(o.b)("inlineCode",{parentName:"h3"},"onConfigReady")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ondataready"},Object(o.b)("inlineCode",{parentName:"h3"},"onDataReady")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ondatafailed"},Object(o.b)("inlineCode",{parentName:"h3"},"onDataFailed")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onloadedimages"},Object(o.b)("inlineCode",{parentName:"h3"},"onLoadedImages")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ondomloaded"},Object(o.b)("inlineCode",{parentName:"h3"},"onDOMLoaded")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ondestroy"},Object(o.b)("inlineCode",{parentName:"h3"},"onDestroy")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"style"},Object(o.b)("inlineCode",{parentName:"h3"},"style")),Object(o.b)("p",null,"Style object that applies to the animation wrapper (which is a div)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Object\nDefault: none\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"lottieref"},Object(o.b)("inlineCode",{parentName:"h3"},"lottieRef")),Object(o.b)("p",null,"Expects a React ref object in which interaction methods will be stored"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: React.RefObject\nDefault: none\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"interactivity"},Object(o.b)("inlineCode",{parentName:"h3"},"interactivity")),Object(o.b)("p",null,"Interactivity params to sync animation with either scroll or cursor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Type: Object\nDefault: none\nRequired: ☐\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"reacthtmlpropshtmldivelement"},Object(o.b)("inlineCode",{parentName:"h3"},"React.HTMLProps<HTMLDivElement>")),Object(o.b)("p",null,"Alongside the props listed above, the ",Object(o.b)("inlineCode",{parentName:"p"},"<Lottie/>")," component also extends ",Object(o.b)("inlineCode",{parentName:"p"},"React.HTMLProps<HTMLDivElement>"),". This allows you to pass props to the container ",Object(o.b)("inlineCode",{parentName:"p"},"<div>")," element."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import Lottie from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst Example = () =>\n  <Lottie\n    animationData={groovyWalkAnimation}\n    aria-aria-labelledby="use lottie animation"\n  />\n};\n\nexport default Example;\n')),Object(o.b)("h2",{id:"interaction-methods"},"Interaction methods"),Object(o.b)("p",null,"These methods are designed to give you more control over the Lottie animation, and fill in the gaps left by the props:"),Object(o.b)("h3",{id:"play"},Object(o.b)("inlineCode",{parentName:"h3"},"play()")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"stop"},Object(o.b)("inlineCode",{parentName:"h3"},"stop()")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"pause"},Object(o.b)("inlineCode",{parentName:"h3"},"pause()")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setspeedspeed"},Object(o.b)("inlineCode",{parentName:"h3"},"setSpeed(speed)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"speed: 1 is normal speed\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"gotoandplayvalue-isframe"},Object(o.b)("inlineCode",{parentName:"h3"},"goToAndPlay(value, isFrame)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"value: numeric value.\nisFrame: defines if first argument is a time based value or a frame based (default false).\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"gotoandstopvalue-isframe"},Object(o.b)("inlineCode",{parentName:"h3"},"goToAndStop(value, isFrame)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"value: numeric value.\nisFrame: defines if first argument is a time based value or a frame based (default false).\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setdirectiondirection"},Object(o.b)("inlineCode",{parentName:"h3"},"setDirection(direction)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"direction: 1 is forward, -1 is reverse.\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"playsegmentssegments-forceflag"},Object(o.b)("inlineCode",{parentName:"h3"},"playSegments(segments, forceFlag)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"segments: array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.\nforceFlag: boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setsubframeusesubframes"},Object(o.b)("inlineCode",{parentName:"h3"},"setSubframe(useSubFrames)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"useSubFrames: If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values. Default is true.\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getdurationinframes"},Object(o.b)("inlineCode",{parentName:"h3"},"getDuration(inFrames)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"inFrames: If true, returns duration in frames, if false, in seconds\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"destroy"},Object(o.b)("inlineCode",{parentName:"h3"},"destroy()")),Object(o.b)("h3",{id:"calling-the-methods"},"Calling the methods"),Object(o.b)("p",null,"To use the interaction methods listed above, pass a reference object to the Lottie component by using the ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," prop (see the React documentation to learn more about ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"Ref")," or ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"useRef")," hook):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import Lottie from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst Example = () => {\n  const lottieRef = useRef();\n\n  return <Lottie lottieRef={lottieRef} animationData={groovyWalkAnimation} />;\n};\n\nexport default Example;\n')),Object(o.b)("p",null,"You can then use the interaction methods like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"...\nlottieRef.current.pause();\n...\n")),Object(o.b)("h2",{id:"interactivity-1"},"Interactivity"),Object(o.b)("p",null,"To sync animation with either scroll or cursor, you can pass the interactivity\nobject."),Object(o.b)("p",null,"For more information please navigate to ",Object(o.b)("strong",{parentName:"p"},"useLottieInteractivity")," hook"),Object(o.b)(b.a,{mdxType:"LottieWithInteractivity"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import Lottie from "lottie-react";\nimport robotAnimation from "./robotAnimation.json";\n\nconst style = {\n  height: 300,\n};\n\nconst interactivity = {\n  mode: "scroll",\n  actions: [\n    {\n      visibility: [0, 0.2],\n      type: "stop",\n      frames: [0],\n    },\n    {\n      visibility: [0.2, 0.45],\n      type: "seek",\n      frames: [0, 45],\n    },\n    {\n      visibility: [0.45, 1.0],\n      type: "loop",\n      frames: [45, 60],\n    },\n  ],\n};\n\nconst Example = () => {\n  return (\n    <Lottie\n      animationData={robotAnimation}\n      style={style}\n      interactivity={interactivity}\n    />\n  );\n};\n\nexport default Example;\n')),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"Soon :)"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/Lottie/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-lottie-readme-mdx-743a477f131a9665bc2b.js.map