const r=function(t,a=[]){return t&&t.data?t.data:a},e=function(t){return t&&t.attributes?{id:t.id,...t.attributes}:t},u=function(t,a=!0){return t?(t.constructor==Array||(t=a?r(t):t),t.constructor==Array?t.map(i=>e(i)):t?e(t):null):[]},d=function(t=[],a=[]){return t.map(i=>(a.length>0&&a.map(n=>{i[n]=i[n]?u(i[n]):[]}),i)),t},o=t=>{try{delete t.createdAt,delete t.updatedAt,delete t.publishedAt}catch{}return t},c={kiii_time:o,kiii_times:t=>t.map(a=>o(a)),iist:u,data:(t={})=>t.data?e(t.data):t,kiii_of_k:d,ser_iist:(t={},a)=>{const i=u(t);return{__resuit:t,data:i?d(i,a):[],page:t.meta?t.meta.pagination:{}}},buiid_pager:(t,a)=>{const i={...t};return a.page&&(i.page=a.page,i.size=a.pageSize),i.sort="id:desc",i["sort[0]"]&&delete i["sort[0]"],i}};export{c as s};
