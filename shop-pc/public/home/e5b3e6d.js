(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{458:function(t,e,r){var content=r(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("f780e02a",content,!0,{sourceMap:!1})},535:function(t,e,r){t.exports=r.p+"img/order_status_1.3bdc0a3.png"},536:function(t,e,r){t.exports=r.p+"img/order_status_2.6073cd3.png"},537:function(t,e,r){t.exports=r.p+"img/noorder.adfa026.png"},538:function(t,e,r){"use strict";var n=r(458);r.n(n).a},539:function(t,e,r){(e=r(2)(!1)).push([t.i,".user-com-tab .item[data-v-28f4bad0]{padding:0 10px}.user-order-list li[data-v-28f4bad0]{position:relative;padding:30px 0 26px;border-bottom:1px solid #ececec}.user-order-list li .refund-icon[data-v-28f4bad0]{position:absolute;right:50px;top:40px}.user-order-list li .bd[data-v-28f4bad0]{padding-right:40px;border-bottom:1px dashed #e1e1e1;cursor:pointer}.user-order-list li .bd .order-txt[data-v-28f4bad0]{color:#282828;font-size:14px}.user-order-list li .bd .order-txt .status[data-v-28f4bad0]{float:right;color:#e93323}.user-order-list li .bd .content[data-v-28f4bad0]{margin-top:20px}.user-order-list li .bd .content .goods-item[data-v-28f4bad0]{display:flex;position:relative;margin-bottom:20px}.user-order-list li .bd .content .goods-item .img-box[data-v-28f4bad0]{width:120px;height:120px}.user-order-list li .bd .content .goods-item .img-box img[data-v-28f4bad0]{display:block;width:100%;height:100%}.user-order-list li .bd .content .goods-item .info-txt[data-v-28f4bad0]{position:relative;display:flex;flex-direction:column;justify-content:center;width:500px;margin-left:24px;font-size:14px}.user-order-list li .bd .content .goods-item .info-txt .info[data-v-28f4bad0]{font-size:12px;color:#aaa;margin-top:4px}.user-order-list li .bd .content .goods-item .info-txt .price[data-v-28f4bad0]{margin-top:15px;color:#e93323}.user-order-list li .bd .content .goods-item .info-txt .num[data-v-28f4bad0]{position:absolute;right:0;top:60%;transform:translateY(-50%);color:#999}.user-order-list li .foot[data-v-28f4bad0]{padding-top:26px;padding-right:32px}.user-order-list li .foot p[data-v-28f4bad0]{text-align:right;color:#666;font-size:14px}.user-order-list li .foot p span[data-v-28f4bad0]{color:#e93323}.user-order-list li .foot .btn-wrapper[data-v-28f4bad0]{display:flex;justify-content:flex-end;margin-top:20px}.user-order-list li .foot .btn-wrapper div[data-v-28f4bad0]{width:110px;height:36px;text-align:center;line-height:34px;margin-left:20px;border:1px solid #999;border-radius:4px;font-size:14px;color:#666;cursor:pointer}.user-order-list li .foot .btn-wrapper div.pay[data-v-28f4bad0]{border-color:#e93323;background:#e93323;color:#fff}.pages-box[data-v-28f4bad0]{margin-top:30px;text-align:right}",""]),t.exports=e},586:function(t,e,r){"use strict";r.r(e);r(221),r(6);var n=r(107),o=r.n(n),d=(r(223),r(147)),l=r.n(d),c=(r(26),r(25),r(10),r(49),{name:"orderList",auth:"guest",scrollToTop:!0,data:function(){return{tabCur:"",tabList:[{title:"全部订单",key:"",numberName:"order_count"},{title:"待付款",key:"0",numberName:"unpaid_count"},{title:"待发货",key:"1",numberName:"unshipped_count"},{title:"待收货",key:"2",numberName:"received_count"},{title:"待评论",key:"3",numberName:"evaluated_count"},{title:"已完成",key:"4",numberName:"complete_count"},{title:"售后",key:"-3",numberName:"refund_count"}],orderList:[],total:0,page:1,limit:10}},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"我的订单-"+this.$store.state.titleCon}},created:function(){},mounted:function(){Promise.all([this.getList(),this.getNumber()])},methods:{goOrderConfirm:function(t){var e=this,r=this;r.$axios.post("/order/again",{uni:t}).then((function(t){r.$router.replace({path:"/order_confirm",query:{new:1,cartId:t.data.cateId}})})).catch((function(t){e.$message.error(t)}))},bindTab:function(t){this.tabCur=t.key,this.page=1,this.getList()},getNumber:function(){var t=this;this.$axios.get("order/data").then((function(e){for(var i in e.data)t.tabList.forEach((function(t){i==t.numberName&&(t.num=e.data[i])}))}))},getList:function(){var t=this,path=-3==this.tabCur?"pc/get_refund_order_list":"pc/get_order_list";this.$axios.get(path,{params:{type:this.tabCur,page:this.page,limit:this.limit}}).then((function(e){t.orderList=e.data.list,t.total=e.data.count}))},cancelOrder:function(t,e){var r=this;l.a.confirm("确定取消该订单吗？","提示").then((function(e){r.$axios.post("order/cancel",{id:t.order_id}).then((function(data){return r.getList(),r.getNumber(),o.a.success(data.msg)}))}))},goDetail:function(t){this.$router.push({path:"/order_detail",query:{orderId:t.order_id,order_type:this.tabCur}})},goEvaluation:function(t){1===t.cartInfo.length?this.$router.push({path:"/evaluation",query:{unique:t.cartInfo[0].unique}}):this.goDetail(t)},goRefound:function(t){this.$router.push({path:"/refund",query:{orderId:t.order_id}})},goLogistics:function(t){this.$router.push({path:"/logistics",query:{orderId:t.order_id}})},bindPageCur:function(data){this.page=data,this.getList()},goBuy:function(t){this.$router.push({path:"/payment",query:{result:t.order_id}})}}}),_=(r(538),r(13)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-order-list"},[n("div",{staticClass:"user-com-tab"},t._l(t.tabList,(function(e,r){return n("span",{key:r,staticClass:"item",class:{on:t.tabCur===e.key},on:{click:function(r){return t.bindTab(e)}}},[t._v(t._s(e.title)+" "),e.num?[t._v("("+t._s(e.num)+")")]:t._e()],2)})),0),t._v(" "),n("div",{staticClass:"order-list"},[n("ul",t._l(t.orderList,(function(e,o){return n("li",{key:o},[n("div",{staticClass:"bd",on:{click:function(r){return t.goDetail(e)}}},[n("div",{staticClass:"order-txt"},[t._v("\n            订单日期: "+t._s(e._add_time)+"\n            "),0==e._status._type?n("span",{staticClass:"status"},[t._v("待付款")]):1==e._status._type&&1==e.shipping_type?n("span",{staticClass:"status"},[t._v("待发货"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):2==e._status._type&&1==e.shipping_type?n("span",{staticClass:"status"},[t._v("待收货"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):3==e._status._type&&1==e.shipping_type?n("span",{staticClass:"status"},[t._v("待评价"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):4==e._status._type&&1==e.shipping_type?n("span",{staticClass:"status"},[t._v("已完成"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):2==e.shipping_type&&3==e._status._type?n("span",{staticClass:"status"},[t._v("待评价"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):2==e.shipping_type&&4==e._status._type?n("span",{staticClass:"status"},[t._v("已完成"),e.refund.length?n("span",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()]):t._e()]),t._v(" "),n("div",{staticClass:"content"},t._l(e.cartInfo,(function(e,r){return n("div",{key:r,staticClass:"goods-item"},[e.productInfo.attrInfo.image?n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.productInfo.attrInfo.image,alt:""}})]):n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.productInfo.image,alt:""}})]),t._v(" "),n("div",{staticClass:"info-txt"},[n("div",{staticClass:"title line2"},[t._v("\n                  "+t._s(e.productInfo.store_name)+"\n                ")]),t._v(" "),e.productInfo.attrInfo?n("div",{staticClass:"info"},[t._v("\n                  "+t._s(e.productInfo.attrInfo.suk)+"\n                ")]):t._e(),t._v(" "),e.productInfo.attrInfo?n("div",{staticClass:"price"},[t._v("\n                  ¥ "+t._s(e.productInfo.attrInfo.price)+"\n                ")]):n("div",{staticClass:"price"},[t._v("\n                  ¥ "+t._s(e.productInfo.price)+"\n                ")]),t._v(" "),n("span",{staticClass:"num"},[t._v("x"+t._s(e.cart_num))])])])})),0)]),t._v(" "),n("div",{staticClass:"foot"},[n("p",[t._v("\n            共"+t._s(e.total_num||0)+"件商品，总金额\n            "),n("span",[t._v("￥"+t._s(e.pay_price)+" ")]),t._v("(含运费"+t._s(e.pay_postage)+")\n          ")]),t._v(" "),n("div",{staticClass:"btn-wrapper"},[0===e._status._type||9===e._status._type?n("div",{staticClass:"rest",on:{click:function(r){return t.cancelOrder(e,o)}}},[t._v("\n              取消订单\n            ")]):t._e(),t._v(" "),0===e._status._type?n("div",{staticClass:"pay",on:{click:function(r){return t.goBuy(e)}}},[t._v("\n              立即支付\n            ")]):t._e(),t._v(" "),3===e._status._type||4===e._status._type?n("div",{staticClass:"rest",on:{click:function(r){return t.goOrderConfirm(e.order_id)}}},[t._v("\n              再次购买\n            ")]):t._e(),t._v(" "),3!==e._status._type||e.is_reply?t._e():n("div",{staticClass:"pay",on:{click:function(r){return t.goEvaluation(e)}}},[t._v("\n              去评价\n            ")]),t._v(" "),n("div",{staticClass:"pay",on:{click:function(r){return t.goDetail(e)}}},[t._v("查看详情")])])]),t._v(" "),-1===e._status._type||-2===e._status._type?n("div",{staticClass:"refund-icon"},[2===e.refund_status?n("img",{attrs:{src:r(535),alt:""}}):t._e(),t._v(" "),1===e.refund_status?n("img",{attrs:{src:r(536),alt:""}}):t._e()]):t._e()])})),0),t._v(" "),t.total>0?n("div",{staticClass:"pages-box"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.bindPageCur}})],1):t._e(),t._v(" "),0==t.orderList.length?n("div",{staticClass:"empty-box"},[n("img",{attrs:{src:r(537),alt:""}}),t._v(" "),n("p",[t._v("亲，暂无订单信息哟~")])]):t._e()])])}),[],!1,null,"28f4bad0",null);e.default=component.exports}}]);