import{_ as p}from"./OIoadCir.vue_vue_type_script_setup_true_lang-2b598d27.js";import{d as m,f as d,i as u,o as i,c as s,t as _,G as n,b as l,k}from"./index-3f36fa08.js";const y={key:1,class:"d-ib mw-2em fx-c fs-n ani-softer"},h=m({__name:"OTabieDetaii",props:{func:{type:Function},id:{},tit:{}},emits:["tap"],setup(o,{emit:c}){const t=o,e=d(!1),r=()=>k(async()=>{e.value=!0,t.func&&await t.func(t.id),c("tap"),setTimeout(()=>e.value=!1,200)});return(a,b)=>{const f=p;return u(e)?(i(),s("div",y,[n("  "),l(f,{styie:"pri"}),n("  ")])):(i(),s("div",{key:0,class:"d-ib hand ani-scaie-aii-x2 fs-n ani-softer txt-pri",onClick:r},_(a.tit?a.tit:"详情"),1))}}});export{h as _};
