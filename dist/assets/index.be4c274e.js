import{a as k}from"./index.89c6bc7a.js";import{h as r,u as I,e as B,i as n,o as t,c as a,j as _,w as C,F as s,r as d,y as L,p as S,b,a as w}from"./index.4105c565.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";const F=o=>(S("data-v-565993d3"),o=o(),b(),o),N={class:"selectCity"},T=F(()=>w("div",{class:"title"},"\u57CE\u5E02\u9009\u62E9",-1)),V={__name:"index",setup(o){const c=r({}),i=r([]),u=I();B(()=>{p()});const p=()=>{k.get("/mock/city.json").then(e=>{c.value=e.data.city,i.value=e.data.city.initial}).catch(e=>{console.log(e)})},x=e=>{console.log("\u70B9\u51FB",e),console.log(e.target.innerText),localStorage.setItem("city",e.target.innerText),u.push({path:"/"})};return(e,E)=>{const m=n("van-index-anchor"),v=n("van-cell"),h=n("van-index-bar");return t(),a("div",N,[T,_(h,{"index-list":i.value},{default:C(()=>[(t(!0),a(s,null,d(c.value,(l,y)=>(t(),a(s,{key:y},[_(m,{index:l.initial},null,8,["index"]),(t(!0),a(s,null,d(l.list,(g,f)=>(t(),L(v,{onClick:x,key:f,title:g.name},null,8,["title"]))),128))],64))),128))]),_:1},8,["index-list"])])}}};var q=j(V,[["__scopeId","data-v-565993d3"]]);export{q as default};