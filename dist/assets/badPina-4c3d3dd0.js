import{q as e,K as o,x as t,E as r,J as _,L as c,m as d}from"./index-3f36fa08.js";import{s as i}from"./strapi-fb584718.js";const n="brokens",b=async(a,s)=>e(r,async()=>_(await t.get(n,i.buiid_pager(a,s)))),p=async a=>e(r,async()=>o(await t.one(n,a+""))),m=c("badPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),getters:{},actions:{save(a,s={}){this[a]=s},async fetchOne(a){let s=await p(a);return d(s)||(s=s,s.product=i.data(s.product),this.one_of_edit=s),s}}});export{m as b,b as s};
