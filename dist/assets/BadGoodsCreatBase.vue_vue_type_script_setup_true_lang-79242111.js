import{_ as b}from"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-7f413166.js";import{_ as D}from"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-07355db7.js";import{_ as F}from"./OTime.vue_vue_type_script_setup_true_lang-08728369.js";import{_ as S}from"./OInput.vue_vue_type_script_setup_true_lang-ff0114e4.js";import{_ as T}from"./OInputI.vue_vue_type_script_setup_true_lang-5d76af86.js";import{d as j,g as A,a8 as E,s as G,h as n,H as y,o as _,c as p,a as d,b as s,w as m,as as H,i as a,$,B as f,C as w,y as L,a9 as O,F as P,A as R,t as z,e as I,a3 as J,ag as l}from"./index-3f36fa08.js";import{c as K}from"./choiseOnePina-bf86d33f.js";import{s as Q}from"./strapi-fb584718.js";const W={class:"o-form"},X=["value"],Y=d("option",{value:0},"-- 請選擇 --",-1),Z=["value"],no=j({__name:"BadGoodsCreatBase",props:{form:{},aii:{}},setup(B){const e=B,C=["product_id","variation","quantity","storehouse_id","date","remarks"],i=A(E(e.form)),{product_id:c,storehouse_id:v,product_of_choise:h}=G(K());n(c,o=>e.form.product_id=o),n(v,o=>{e.form.storehouse_id=o});const g=y(()=>{const o=h.value;return o.id?`[${o.product_id}]  ${o.name}`:""}),q=y(()=>{let o=h.value.variations;return J(o)?o:Q.iist(o)});return n(()=>e.aii.sign,()=>{e.form.storehouse_id=v.value,C.map(o=>{if(l(i,o,e.form[o],e.aii)){e.aii.can=!1;return}}),e.aii.can=!0}),n(()=>e.form.variation,o=>l(i,"variation",o,e.aii)),n(()=>e.form.quantity,o=>l(i,"quantity",o,e.aii)),n(()=>e.form.date,o=>l(i,"date",o,e.aii)),(o,t)=>{const k=T,u=S,V=F,M=D,N=b;return _(),p("div",null,[d("div",W,[s(k,{tit:"壞貨產品",err:a(i).product_id,icon:"product",onClick:t[1]||(t[1]=r=>a($)(1e3))},{default:m(()=>[d("input",{onClick:t[0]||(t[0]=H(r=>a($)(1e3),["stop"])),value:a(g),placeholder:"請點擊後打開選擇框"},null,8,X)]),_:1},8,["err"]),s(u,{tit:"數量",err:a(i).quantity},{default:m(()=>[f(d("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=r=>o.form.quantity=r),placeholder:"請輸入"},null,512),[[w,o.form.quantity]])]),_:1},8,["err"]),a(c)?(_(),L(u,{key:0,tit:"樣式",err:a(i).variation},{default:m(()=>[f(d("select",{"onUpdate:modelValue":t[3]||(t[3]=r=>o.form.variation=r)},[Y,(_(!0),p(P,null,R(a(q),(r,U)=>(_(),p("option",{key:U,value:r.id},z(r.name),9,Z))),128))],512),[[O,o.form.variation]])]),_:1},8,["err"])):I("",!0),s(k,{tit:"日期",err:a(i).date,icon:"date"},{default:m(()=>[s(V,{form:o.form,pk:"date"},null,8,["form"])]),_:1},8,["err"]),s(u,{tit:"壞貨位置",err:a(i).storehouse_id},{default:m(()=>[s(M)]),_:1},8,["err"]),s(u,{tit:"備註",err:!1},{default:m(()=>[f(d("textarea",{rows:"3","onUpdate:modelValue":t[4]||(t[4]=r=>o.form.remarks=r),placeholder:"請輸入"},null,512),[[w,o.form.remarks]])]),_:1})]),s(N)])}}});export{no as _};
