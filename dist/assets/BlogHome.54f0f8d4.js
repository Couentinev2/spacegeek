import{_,r as u,o as t,c as s,a as o,t as r,F as d,b as g,d as m,w as p}from"./index.d74b62f1.js";const h={name:"blog-home",data(){return{page_title:"Blog",posts:[]}},methods:{getPosts(){n.post.list({page:1,page_size:10}).then(a=>{this.posts=a.data.data})}},created(){this.getPosts()}},n=Butter("589c1da914e9b5982fa129c50f9e720c0422926f");n.post.list({page:1,page_size:10}).then(function(a){console.log(a)});const f={id:"blog-home"},k={class:"media"},b=["src"],B={key:1,src:"http://via.placeholder.com/250x250",alt:""};function v(a,x,y,w,l,z){const i=u("router-link");return t(),s("div",f,[o("h1",null,r(l.page_title),1),(t(!0),s(d,null,g(l.posts,(e,c)=>(t(),s("div",{key:e.slug+"_"+c},[m(i,{to:"/blog/"+e.slug},{default:p(()=>[o("article",k,[o("figure",null,[e.featured_image?(t(),s("img",{key:0,src:e.featured_image,alt:""},null,8,b)):(t(),s("img",B))]),o("h2",null,r(e.title),1),o("p",null,r(e.summary),1)])]),_:2},1032,["to"])]))),128))])}var F=_(h,[["render",v]]);export{F as default};
