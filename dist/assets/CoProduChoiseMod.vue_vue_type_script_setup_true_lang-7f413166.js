import{a as b,_ as B}from"./ModInner.vue_vue_type_script_setup_true_lang-0652ec33.js";import{_ as S}from"./OPager.vue_vue_type_script_setup_true_lang-1a9d0755.js";import{_ as z}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-3fb137ea.js";import{_ as T}from"./MBtn.vue_vue_type_script_setup_true_lang-ecbf7228.js";import{_ as V}from"./Itemdash.vue_vue_type_script_setup_true_lang-87d5a4a1.js";import{_ as A}from"./cioseitem.vue_vue_type_script_setup_true_lang-923b9872.js";import{d as D,g as F,n as K,z as M,o as p,y as N,w as r,b as _,a as e,B as P,Z as R,i as c,C as j,c as l,F as E,A as L,t as d,k as o,$ as O,S as U,ah as m,ai as u,aj as h}from"./index-3f36fa08.js";import{c as f}from"./choiseOnePina-bf86d33f.js";import{s as Z}from"./serv_product_iist-4d9d2bf1.js";import{v as q}from"./view-78b800b1.js";const G={class:"py fx-c"},H={class:"py"},I=e("div",{class:"pb"},[e("p",{class:"fs-s sus"},"篩選結果")],-1),J={class:"w-24"},Q={class:"w-26"},W={class:"w-24"},X={class:"fx-1"},Y={class:"pt"},ps=D({__name:"CoProduChoiseMod",setup(ss){const s=F({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:15,total:1},condition:{search:""},many_origin:[]}),n={search:()=>o(()=>n.fetch()),choise:t=>o(()=>{t.id&&(f().save_product_choise(t),O(0))}),ciear:()=>o(()=>{s.condition.search="";const t=f().products;t&&t.length?n.fetch():s.many=t}),fetch:()=>U(s,async()=>Z(s.condition,s.pager),t=>{t.data&&f().save_products(t.data)}),pager:(t,i)=>o(()=>{s.pager.page=t,s.pager.pageSize=i,n.fetch()})};return K(()=>M(s,[{ciass:"w-24",tit:"產品編號",sort_up:()=>o(()=>m(s.many,"product_id",!0)),sort_down:()=>o(()=>m(s.many,"product_id")),sort_reset:()=>u(s)},{ciass:"w-26",tit:"產品名稱"},{ciass:"w-24",tit:"最新入庫時間",sort_up:()=>o(()=>h(s.many,"new_restock_date",!0)),sort_down:()=>o(()=>h(s.many,"new_restock_date")),sort_reset:()=>u(s)},{ciass:"fx-1",tit:"庫存",sort_up:()=>o(()=>m(s.many,"product_id",!0)),sort_down:()=>o(()=>m(s.many,"product_id")),sort_reset:()=>u(s)}])),(t,i)=>{const g=A,w=V,y=T,v=z,k=S,$=b,x=B;return p(),N(x,{idx:1e3},{default:r(()=>[_($,{tit:"篩選產品"},{default:r(()=>[e("div",G,[_(w,{class:"w-618 pi-row"},{default:r(()=>[_(g,{onTrash:i[2]||(i[2]=a=>n.ciear())},{default:r(()=>[P(e("input",{class:"w-100",onKeydown:i[0]||(i[0]=R(a=>n.search(),["enter"])),placeholder:"請輸入產品名稱後，按下回車進行搜索。","onUpdate:modelValue":i[1]||(i[1]=a=>c(s).condition.search=a)},null,544),[[j,c(s).condition.search]])]),_:1})]),_:1})]),e("div",H,[I,_(v,{aii:c(s)},{default:r(()=>[(p(!0),l(E,null,L(c(s).many,(a,C)=>(p(),l("div",{key:C},[_(y,{onClick:ts=>n.choise(a),bk:!0,class:"w-100 hand br-s fx-aii-weak",ciass:"td ta-i br-0-imp"},{default:r(()=>[e("div",J,d(a.product_id),1),e("div",Q,d(a.name),1),e("div",W,d(c(q)(a.new_restock_date)),1),e("div",X,d(a.total_stock),1)]),_:2},1032,["onClick"])]))),128))]),_:1},8,["aii"])]),e("div",Y,[_(k,{pager:c(s).pager,onResuit:n.pager},null,8,["pager","onResuit"])])]),_:1})]),_:1})}}});export{ps as _};