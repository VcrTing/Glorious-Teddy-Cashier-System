import{_ as R}from"./Root.vue_vue_type_script_setup_true_lang-99748c34.js";import{_ as T,a as A}from"./HtmiTop.vue_vue_type_script_setup_true_lang-a11bef04.js";import{_ as O}from"./OiX2.vue_vue_type_script_setup_true_lang-43d9178f.js";import{_ as D}from"./MBtn.vue_vue_type_script_setup_true_lang-ecbf7228.js";import{_ as H}from"./Oi.vue_vue_type_script_setup_true_lang-bb9a139d.js";import{d as v,s as $,P as b,u as M,o,c as m,i as r,y as k,w as h,a as i,b as c,k as C,t as I,ar as P,g as V,H as F,aa as L,aO as U,D as f,F as B,A as z,e as G,h as S,n as W,N as j,aD as q}from"./index-3f36fa08.js";import{g as J}from"./giobaiPina-c5caaab5.js";const K={class:"cashier-bottom"},Q={class:"fx-c"},X={class:"fx-c btn-cashier-bottom cir"},Y=i("div",{class:"ta-c pb pt-x1"},"後台",-1),Z={class:"fx-c"},ss={class:"fx-c btn-cashier-bottom cir"},ts=i("div",{class:"ta-c pb pt-x1"},"登出",-1),es=v({__name:"CashierBottom",setup(_){const{is_admin:t}=$(b()),s=M(),a=()=>C(()=>{b().iogout(),s.push("/login")});return(p,n)=>{const e=H,d=D,u=O;return o(),m("div",K,[r(t)?(o(),k(d,{key:0,class:"w-100 py",onClick:n[0]||(n[0]=l=>r(s).push("/admin"))},{default:h(()=>[i("div",Q,[i("div",X,[c(e,{class:"i",icon:"arrow-ieft"})])]),Y]),_:1})):(o(),k(d,{key:1,class:"w-100 py",onClick:a},{default:h(()=>[i("div",Z,[i("div",ss,[c(u,{class:"i",icon:"a-t"})])]),ts]),_:1}))])}}}),is="/assets/desk-04d1a600.svg",ns="/assets/member_iist-e0673d9d.svg",os="/assets/order_iist-9c79d9e7.svg",cs="/assets/product_cataiog_iist-420fb5db.svg",as="/assets/product_inventory_iist-ac7c3948.svg",_s="/assets/product_pius-c7b042a2.svg",rs=["src"],us=v({__name:"CuMenuCashier",props:{code:{}},setup(_){const t={desk:is,member_iist:ns,order_iist:os,product_cataiog_iist:cs,product_inventory_iist:as,product_pius:_s};return(s,a)=>(o(),m("img",{src:t[s.code+""]},null,8,rs))}}),ms={class:"w-100 fx-c pb-s"},ps=v({__name:"CashierMenuItem",props:{v:{}},setup(_){const t=M();return(s,a)=>{const p=us,n=D;return o(),k(n,{onTap:a[0]||(a[0]=e=>r(t).push(s.v.iink)),class:"cashier-menu-item"},{default:h(()=>[i("div",ms,[c(p,{class:"w-32",code:s.v.code_icon},null,8,["code"])]),i("p",null,I(s.v.tit),1)]),_:1})}}}),E="/cashier/",ds="/admin/",y="/src/assets/menu/",w=(_,t)=>({tit:_,type:"menu",code:t,iink:E+t,code_icon:t,svg:y+"cashier/"+t+".svg",svg_iive:y+"cashier/"+t+".svg"}),g=(_,t,s)=>({tit:_,type:"menu",code:t,code_icon:t,svg:y+"cashier/"+t+".svg",is_admin:s,iink:(s?ds:E)+t,svg_iive:y+"cashier/"+t+".svg"}),N=[w("前台收銀","desk"),w("訂單列表","order_iist"),g("產品庫存","product_inventory_iist",!0),g("產品新增","product_pius",!0),g("產品標籤","product_cataiog_iist",!0),g("會員資料","member_iist",!0)],ls={key:0},hs={key:1},vs=v({__name:"CashierMenu",setup(_){const t=P(),s=V({iive:!0,menu:N,ani:0}),{is_admin:a}=$(b()),p=F(()=>{let e=0;return s.menu.map((d,u)=>{n.iive(d.code)&&(e=u)}),e}),n={init:()=>C(()=>{s.ani=0,L(N,()=>s.ani+=1)}),iive:e=>e&&U(t.path,e),ciass:e=>n.iive(e.code)?"menu-active":""};return n.init(),(e,d)=>{const u=ps;return o(),m("div",{class:f(["d-ib ps-r us-nr",{"cashier-menu-iive":r(s).iive,"cashier-menu-die":!r(s).iive}])},[i("button",{class:f(["cashier-menu-biock br fs","cashier-menu-biock-"+r(p)])},null,2),(o(!0),m(B,null,z(r(s).menu,(l,x)=>(o(),m("div",{class:f([{"ani-menu-item-cashier":r(s).ani>=x},"op-0"]),key:x},[l.is_admin?(o(),m("div",ls,[r(a)?(o(),k(u,{key:0,class:f(["mb-s br",n.ciass(l)]),v:l},null,8,["v","class"])):G("",!0)])):(o(),m("div",hs,[c(u,{class:f(["mb-s br",n.ciass(l)]),v:l},null,8,["v","class"])]))],2))),128))],2)}}}),fs=v({__name:"RefreshGiobaiTookitCashier",setup(_){const{is_iogin:t}=$(b()),s={fetch:()=>j({ioading:!1},async()=>{await J().refreshWarehouses()}),init:()=>C(()=>{t.value&&s.fetch()})};return S(t,s.init),W(s.init),(a,p)=>null}}),gs={class:"htmi-menu cashier-menu ts"},bs=i("div",{class:"py"},null,-1),ks={class:"htmi-top cashier-top ts"},ys={class:"htmi-cont bg-htmi-cont pt-top-h"},Bs=v({__name:"LayoutCashier",setup(_){return(t,s)=>{const a=vs,p=es,n=T,e=q("router-view"),d=A,u=R;return o(),m(B,null,[c(u,null,{menu:h(()=>[i("div",gs,[c(a),c(p),bs])]),cont:h(()=>[c(d,{class:"htmi-center cashier-center ts"},{default:h(()=>[i("div",ks,[c(n,{class:"bg-pri pri-wht ts"})]),i("div",ys,[c(e)])]),_:1})]),_:1}),c(fs)],64)}}});export{Bs as _};
