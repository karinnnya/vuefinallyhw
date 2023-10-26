import{a as m}from"./articles-d20edcca.js";import{a as _,m as b}from"./pinia-9491ed26.js";import{m as p}from"./modalMixin-c2fb7250.js";import{d as f}from"./delmodalMixin-174ee69c.js";import{k as v,l as r}from"./runtime-dom.esm-bundler-b8fd4e16.js";import{ba as g,ak as d,m as a,n as t,F as y,au as x,aK as n,b4 as c,t as h}from"./_plugin-vue_export-helper-bc03d341.js";import"./sweetalert2.all-4df3b2fe.js";import"./bootstrap.esm-06211441.js";const k={data(){return{article:{},cart:[],state:!0}},computed:{..._(m,["articles"])},mixins:[p,f],methods:{...b(m,["getArticles","newArticles","sendArticle","delArticle"]),openArticleBtn(o,e){o==="del"?(this.delmodal.show(),this.article=e,this.state=!1):o=="edit"?(this.modal.show(),this.article={...e},this.state=!1):(this.article={},this.state=!0,this.modal.show())},closeBtn(o,e){o==="del"?(this.delmodal.hide(),this.delArticle(e),this.getArticles()):(this.modal.hide(),this.sendArticle(this.state,e),this.getArticles())},text(){const o=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{this.getProducts(),o.hide()},2e3)}},mounted(){this.getArticles()}},A={class:"container"},w={class:"text-end"},C={class:"table mt-4 align-middle table-hover"},B=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",{width:"200"},"圖片"),t("th",null,"標題"),t("th",{width:"150"},"新增時間"),t("th",{width:"150"},"最後修改"),t("th",{width:"120"},"編輯")])],-1),M=["src"],V={class:"btn-group"},P=["onClick"],T=["onClick"],U={ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},L={class:"modal-dialog modal-xl"},D={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},F={class:"modal-title"},N={key:0},E={key:1},K=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},q={class:"mb-3"},z=t("h5",null,"分類",-1),G=t("option",{value:"線上商城"},"線上商城",-1),H=t("option",{value:"活動消息"},"活動消息",-1),I=t("option",{value:"園區公告"},"園區公告",-1),J=[G,H,I],O={class:"mb-3"},Q=t("h5",null,"圖片",-1),R=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),W={style:{width:"300px"}},X=["src"],Y={class:"mb-3"},Z=t("label",{for:"title",class:"form-label"},"標題",-1),$={class:"mb-3"},tt=t("label",{for:"description",class:"form-label"},"公告內容",-1),et={class:"modal-footer"},st=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),lt={id:"delProductModal",ref:"delmodal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},ot={class:"modal-dialog"},it={class:"modal-content border-0"},nt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),dt={class:"modal-body"},at=t("strong",{class:"text-danger"},null,-1),ct={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function mt(o,e,ht,ut,l,i){return d(),a("div",A,[t("div",w,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...s)=>i.openArticleBtn&&i.openArticleBtn(...s))}," 建立新的文章 ")]),t("table",C,[B,t("tbody",null,[(d(!0),a(y,null,x(o.articles,s=>(d(),a("tr",{key:s.id},[t("td",null,n(s.kind),1),t("td",null,[t("img",{src:s.imgurl,alt:"",style:{width:"100px"}},null,8,M)]),t("td",null,n(s.title),1),t("td",null,n(s.addDate),1),t("td",null,n(s.editTime),1),t("td",null,[t("div",V,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:u=>i.openArticleBtn("edit",s)}," 編輯 ",8,P),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:u=>i.openArticleBtn("del",s)}," 刪除 ",8,T)])])]))),128))])]),t("div",U,[t("div",L,[t("div",D,[t("div",S,[t("h5",F,[l.state?(d(),a("span",N,"新增產品")):(d(),a("span",E,"最後編輯時間--"+n(l.article.editTime),1))]),K]),t("div",j,[t("div",q,[z,c(t("select",{class:"form-select-sm","onUpdate:modelValue":e[1]||(e[1]=s=>l.article.kind=s)},J,512),[[v,l.article.kind]])]),t("div",O,[t("div",null,[Q,R,c(t("input",{type:"text",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[2]||(e[2]=s=>l.article.imgurl=s)},null,512),[[r,l.article.imgurl]])]),t("div",W,[t("img",{class:"img-fluid",src:l.article.imgurl,alt:"文章圖片"},null,8,X)])]),t("div",Y,[Z,c(t("input",{id:"title",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>l.article.title=s),placeholder:"請輸入標題"},null,512),[[r,l.article.title]])]),t("div",$,[tt,c(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[4]||(e[4]=s=>l.article.content=s)},`
              `,512),[[r,l.article.content]])])]),t("div",et,[st,t("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=s=>i.closeBtn(l.state,l.article))}," 確認 ")])])])],512),t("div",lt,[t("div",ot,[t("div",it,[nt,t("div",dt,[h(" 是否刪除 "),at,h(" "+n(l.article.title)+"(刪除後將無法恢復)。 ",1)]),t("div",ct,[rt,t("button",{type:"button",class:"btn btn-danger",onClick:e[6]||(e[6]=s=>i.closeBtn("del",l.article))}," 確認刪除 ")])])])],512)])}const kt=g(k,[["render",mt]]);export{kt as default};
