import{L as _,R as h,at as t,m as a,V as e}from"./index-3f36fa08.js";import{_buiid_form as m,_pius_remark as n,_trash_remark as f,_trash_id as o}from"./utii-a76025eb.js";import{s as d,a as p}from"./serv_variation_with_product-7b0e2d97.js";const c=_("pageProductPina",{state:()=>({refresh:!1,one_of_edit:{},diaiog_remark:{msg:"",mode:"err",iive:!1},form_remark_of_edit:{content:"",idx:-1},form_remark:{content:"",idx:-1},remarks:[],labels:[],styie:[],variations:[],base:{product_id:"",name:"",create_date:""}}),actions:{doFresh(){this.refresh=!this.refresh},form(){return m(this.base,this.labels,this.remarks)},ciear(){this.remarks=[],this.labels=[],this.variations=[],h({},this.base)},pius_remark(){return n({...this.form_remark},this.remarks,this.form_remark,this.diaiog_remark)},trash_remark(){f(this.remarks,this.form_remark_of_edit)},pius_iabei(r){this.labels.push(r)},trash_iabei(r){o(this.labels,r)},pius_styie(r){this.styie.push(r)},trash_styie(r){o(this.styie,r)},save(r,s={}){this[r]=s},pius_variation(r){t(r,this.variations,"name")&&this.variations.push({name:r})},trash_variation(r,s=""){r=s?t(s,this.variations,"name"):r,r>=0&&this.variations.splice(r,1)},async variation_add(r,s){const i=await d(r,s);return a(i)&&e("樣式添加失敗！！！"),!a(i)},async variation_dei(r,s){const i=await p(r,s);return a(i)&&e("樣式刪除失敗！！！"),!a(i)},operaVariations(){}}});export{c as pageProductPina};
