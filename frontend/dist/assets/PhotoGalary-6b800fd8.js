import{r as t,b as a,F as c,j as i,R as d,g as u,u as p,a as g,q as h,s as f,o as m}from"./index-864a135d.js";import{I as y}from"./ImageViewer-6bea9138.js";function E({photos:l}){const[e,o]=t.useState(),n=(s,r)=>{r?(o(null),document.body.style.overflow="auto"):o(s)};return a(c,{children:a("div",{className:"galary",children:l.map((s,r)=>i(d.Fragment,{children:[a("div",{onClick:()=>n(s.id,!1),className:"galary__img-container",children:a("img",{className:"galary__img",src:u.SERVER_HOST+"/"+s.path})}),e===s.id?a(y,{photoHandler:n,isOpen:e,item:s}):null]},r))})})}function R(){const l=p(),{photos:e,loading:o,error:n,success:s}=g(r=>r.galary);return t.useEffect(()=>{e&&l(h()),l(f())},[]),i(c,{children:[o?a(m,{}):null,n?a("h1",{children:"Loader Error"}):null,e?a(E,{photos:e}):null]})}export{R as default};