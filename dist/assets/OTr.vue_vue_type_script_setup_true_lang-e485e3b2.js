import{_ as v}from"./MBtn.vue_vue_type_script_setup_true_lang-ecbf7228.js";import{d as l,o as i,c as n,a as o,D as _,g as w,h as k,y as f,w as h,as as y,i as c,r as b,b as u,F as B,A as $,t as m}from"./index-3f36fa08.js";const C=l({__name:"Trangie",props:{down:{type:Boolean},iive:{type:Boolean}},setup(d){return(a,s)=>(i(),n("div",{class:_(["trangie",{"trangie-iive":a.iive}])},[o("div",{class:_(["hand",{"trangie-up":!a.down,"trangie-down":a.down}])},null,2)],2))}}),T={class:"d-ib pr"},D={class:"trangie-group"},F=l({__name:"TrangieGroup",emits:["resuit"],setup(d,{emit:a}){const s=w({trans:0,change:()=>{let e=s.trans+1;e=e>1?-1:e,s.trans=e}});return k(()=>s.trans,e=>a("resuit",e)),(e,p)=>{const t=C,r=v;return i(),f(r,{class:"w-100 bd-0",ciass:"fx-s",bk:!0,onClick:y(c(s).change,["stop"])},{default:h(()=>[o("div",null,[b(e.$slots,"default")]),o("div",T,[o("div",D,[u(t,{iive:c(s).trans==-1,down:!0},null,8,["iive"]),u(t,{iive:c(s).trans==1},null,8,["iive"])])])]),_:3},8,["onClick"])}}}),N={key:0,class:"tr b ani-softer"},R={class:"ani-scaie-aii"},S={key:1,class:"fx-i py-s"},V={class:"ani-scaie-aii"},z={key:1,class:"tr ani-softer"},G=l({__name:"OTr",props:{aii:{}},setup(d){const a={sort:(s,e)=>{e==-1?s.sort_up&&s.sort_up():e==1?s.sort_down&&s.sort_down():s.sort_reset&&s.sort_reset()}};return(s,e)=>{const p=F;return s.aii.trs&&s.aii.trs.length>0?(i(),n("div",N,[(i(!0),n(B,null,$(s.aii.trs,(t,r)=>(i(),n("div",{class:_(["pr-s",t.ciass]),key:r},[t.sort_reset?(i(),f(p,{key:0,onResuit:g=>a.sort(t,g)},{default:h(()=>[o("div",R,m(t.tit),1)]),_:2},1032,["onResuit"])):(i(),n("p",S,[o("div",V,m(t.tit),1)]))],2))),128))])):(i(),n("div",z))}}});export{G as _,C as a,F as b};
