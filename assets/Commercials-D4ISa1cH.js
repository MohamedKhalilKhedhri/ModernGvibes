import{r as t,t as e}from"./index-CFLku_Aq.js";import{u as m,G as x}from"./Gallery-CbwZbTIA.js";function f(){const[r,o]=t.useState([]),{Gfetch:s,data:c,allDataFetched:l}=m(),a="commercials";return t.useEffect(()=>{(async()=>{await s(a)})()},[]),t.useEffect(()=>{o(c)},[c]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-28 p-6 flex flex-col items-center justify-center gap-4",children:[e.jsx("h2",{className:"text-5xl text-white text-center",children:"Commercials."}),e.jsx("hr",{className:"w-11 h-[2px] bg-white"}),e.jsx("h3",{className:"text-3xl text-white text-center",children:"We capture your precious moments with your loved ones."})]}),e.jsx(x,{docs:r,addMore:s,category:a,More:l})]})}export{f as default};
