"use strict";(self["webpackChunkshopping_mall23"]=self["webpackChunkshopping_mall23"]||[]).push([[969],{1969:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var r=function(){var e=this,s=e._self._c;return s("div",[s("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(s){return e.$router.go(-1)}}}),s("div",{staticClass:"searchBox"},[s("div",{staticClass:"searchIcon"},[s("van-icon",{attrs:{name:"search"}})],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],attrs:{type:"text",placeholder:"请输入您所搜索的商品"},domProps:{value:e.searchKey},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.search(e.searchKey)},input:function(s){s.target.composing||(e.searchKey=s.target.value)}}}),s("button",{staticClass:"searchBtn",on:{click:function(s){return e.search(e.searchKey)}}},[e._v("搜索")])]),s("div",{staticClass:"searchHistory"},[s("div",{staticClass:"searchHistoryNav"},[s("h2",[e._v("最近搜索")]),s("div",[s("van-icon",{attrs:{name:"delete-o"},on:{click:e.removeHistory}})],1)]),s("ul",e._l(e.searchHistorys,(function(t,r){return s("div",{key:r,staticClass:"searchHistoryItem",on:{click:function(s){return e.search(t)}}},[e._v(" "+e._s(t)+" ")])})),0)])],1)},a=[],i=(t(4114),t(2272)),c={name:"searchIndex",data(){return{searchKey:"",searchHistorys:(0,i.JK)()}},methods:{search(e){this.searchHistorys.includes(e)&&(this.searchHistorys=this.searchHistorys.filter((s=>s!==e))),this.searchHistorys.unshift(e),(0,i.Dh)(this.searchHistorys),this.$router.push(`/searchList?searchkey=${e}`)},removeHistory(){this.searchHistorys=[],(0,i.zk)()}}},n=c,o=t(1656),h=(0,o.A)(n,r,a,!1,null,"292d7eda",null),l=h.exports}}]);
//# sourceMappingURL=969.32912703.js.map