import{d as i}from"./pinia-9491ed26.js";import{bb as o}from"./_plugin-vue_export-helper-bc03d341.js";import{S as s}from"./sweetalert2.all-4df3b2fe.js";const{VITE_APP_URL:c}={VITE_APP_URL:"https://vuefinallysever.onrender.com",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},n=i("produceStore",{state:()=>({products:[],allPage:"",categories:[]}),getters:{sortProducts:({products:t})=>t.sort((e,r)=>e.price-r.price)},actions:{getProducts(){return o.get(`${c}/products`).then(t=>{this.products=t.data,this.group()}).catch(()=>{s.fire("取得錯誤")})},sendProduct(t,e){if(console.log(t,e),t){let r=new Date().toLocaleDateString();o.post(`${c}/products`,{...e,addDate:r}).then(()=>{}).catch(a=>{s.fire(a)})}else{let r=new Date().toLocaleString();o.put(`${c}/products/${e.id}`,{...e,editTime:r}).then(()=>{}).catch(a=>{s.fire(a)})}},delProduct(t){o.delete(`${c}/products/${t.id}`).then(()=>{}).catch(e=>{s.fire(e)})},group(){const t=this.products.map(e=>e.group);this.categories=[...new Set(t)]}}});export{n as p};