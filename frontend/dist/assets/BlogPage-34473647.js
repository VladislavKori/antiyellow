import{r as p,b as s,R as i,j as a,g as o,L as d,u,n as _,a as h,F as g,o as b}from"./index-864a135d.js";import{S as m}from"./share-782b4de0.js";function v({data:c}){const[r,n]=p.useState(null),t=e=>{navigator.clipboard.writeText(`${o.FRONT_HOST}/blog/${e}`),n(e),setTimeout(()=>{n(null)},2e3)};return s("div",{className:"pp__container",children:c.map((e,l)=>s(i.Fragment,{children:a("div",{className:"pp",children:[s("div",{style:{background:`url(${o.SERVER_HOST+"/"+e.preview})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},className:"pp__preview"}),a("div",{className:"pp__info",children:[s("h1",{className:"pp__title",children:e.title}),a("p",{className:"pp__date",children:["Опубликовано: ",e.createdAt]}),s("p",{className:"pp__descript",children:e.content.slice(0,400)+"..."}),a("div",{className:"pp__btns",children:[s(d,{className:"pp__btn",to:"/blog/"+e.id,children:"Читать"}),s("button",{onClick:()=>t(e.id),className:"pp__btn pp__btn_share",children:s(m,{})}),r==e.id?s("p",{className:"pp__message",children:"Скопировано"}):null]})]})]})},l))})}function f(){const c=u();p.useEffect(()=>{c(_())},[]);const{posts:r,success:n,error:t,loading:e}=h(l=>l.posts);return a(g,{children:[e?s(b,{}):null,t?s("h1",{children:"Loader Error"}):null,r?s(v,{data:r}):null]})}export{f as default};