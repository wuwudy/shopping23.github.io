"use strict";(self["webpackChunkshopping_mall23"]=self["webpackChunkshopping_mall23"]||[]).push([[99],{1099:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"layout-page"},[a("router-view"),a("van-tabbar",{staticClass:"navs-bottom-layout",attrs:{route:"","active-color":"#ee0a24","inactive-color":"#000"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tabbar-item",{staticClass:"nav-item",attrs:{to:"/home",icon:"wap-home-o"}},[t._v("首页")]),a("van-tabbar-item",{staticClass:"nav-item",attrs:{to:"/categroy",icon:"list-switch"}},[t._v("分类")]),a("van-tabbar-item",{staticClass:"nav-item",attrs:{to:"/cart",icon:"cart-o",badge:this.$store.state.cart.cartTotal}},[t._v("购物车")]),a("van-tabbar-item",{staticClass:"nav-item",attrs:{to:"/user",icon:"user-o"}},[t._v("我的")])],1)],1)},i=[],r={name:"LayoutIndex",data(){return{active:0}},async created(){this.$store.getters.token&&await this.$store.dispatch("cart/getCartTotal")}},o=r,c=e(1656),n=(0,c.A)(o,s,i,!1,null,"7b5f6dad",null),l=n.exports}}]);
//# sourceMappingURL=99.b872084a.js.map