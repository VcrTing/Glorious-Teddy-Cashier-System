import{d as l,H as c,I as d,h as u,B as v,a9 as k,o,c as r,F as h,A as y,t as g,D as w,i as B}from"./index-3f36fa08.js";const D=["value"],C=l({__name:"OSeiect",props:{many:{},form:{},pk:{},def:{}},emits:["change"],setup(i,{emit:m}){const s=i,t={v:()=>s.form[s.pk],def:()=>{(t.v()==""||t.v()==null)&&s.def&&(s.form[s.pk]=s.def)}};let f=c(()=>{let e="";const n=t.v();return s.many.map(a=>{a.v==n&&(e=a.ciass)}),e});return d(t.def),u(t.v,e=>m("change",e)),(e,n)=>v((o(),r("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>e.form[e.pk]=a),class:w(B(f))},[(o(!0),r(h,null,y(e.many,(a,p)=>(o(),r("option",{key:p,value:a.v},g(a.txt),9,D))),128))],2)),[[k,e.form[e.pk]]])}});export{C as _};
