import{d as i}from"./pinia-9491ed26.js";import{bb as s}from"./_plugin-vue_export-helper-bc03d341.js";import{r}from"./index-f245368b.js";import{S as e}from"./sweetalert2.all-4df3b2fe.js";const{VITE_APP_URL:a}={VITE_APP_URL:"https://vuefinallysever.onrender.com",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},c=i("login",{state:()=>({allUser:[],userId:"",admin:""}),getters:{},actions:{getAllUser(){s.get(`${a}/users`).then(()=>{this.allUser=this.res,e.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})}).catch(t=>{e.fire(t)})},signup(t){s.post(`${a}/users`,{userName:t.userName,tel:t.tel,email:t.email,password:t.password,admin:!1}).then(()=>{console.log("會員新增成功"),e.fire({position:"top-end",icon:"success",title:"成功加入會員",showConfirmButton:!1,timer:1500})}).catch(()=>{e.fire({title:"此email已被使用",icon:"error",html:"",confirmButtonText:"我知道了",confirmButtonAriaLabel:"我知道了",customClass:{confirmButton:"btn btn-outline-info"},buttonsStyling:!1})})},updateLoginStatus(){this.userId=localStorage.userId,this.admin=localStorage.admin?JSON.parse(localStorage.admin):{}},login(t){s.post(`${a}/login`,{email:t.email,password:t.password}).then(o=>{localStorage.setItem("userId",o.data.user.id),localStorage.setItem("userName",o.data.user.userName),localStorage.setItem("admin",o.data.user.admin),this.updateLoginStatus(),r.push("/")}).catch(()=>{e.fire({position:"top-end",icon:"error",title:"帳戶密碼錯誤，請重新確認",showConfirmButton:!1,timer:1e3})})},logout(){localStorage.clear(),this.updateLoginStatus(),r.push("/")}}});export{c as l};