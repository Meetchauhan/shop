"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[837],{3739:function(e,t,i){i(2791);t.Z=i.p+"static/media/notFav.018bc7a3051702d4243b866c55900988.svg"},2822:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var n=i(9439),c=i(2791),r=i(7689),s=i(8683),o=i(1087),l={imageSec:"singleProduct_imageSec__KNCtj",itemWrapperInner:"singleProduct_itemWrapperInner__vj4yZ",slider:"singleProduct_slider__f-x1j",contentSec:"singleProduct_contentSec__usCFW",title:"singleProduct_title__qw7PK",description:"singleProduct_description__zV9jA",price:"singleProduct_price__p4WMV",btnSection:"singleProduct_btnSection__Croku",btn:"singleProduct_btn__X2b51",allProduct:"singleProduct_allProduct__8UEkD",priceAndFavorite:"singleProduct_priceAndFavorite__8iVYD",fav:"singleProduct_fav__c4nrJ"},d=i(5717),a=(i(3037),i(8688),i(9434)),u=i(3271),p=i(3919),m=i(3739),_=i(184);function f(e){var t=(0,a.v9)((function(e){return e.products.cart})),i=(0,a.v9)((function(e){return e.products.favorite})),n=(0,a.I0)();return console.log(t),(0,_.jsx)("div",{className:l.itemWrapper,id:e.id,stock:e.stock,children:(0,_.jsxs)("div",{className:l.itemWrapperInner,children:[(0,_.jsx)(d.Z,(0,s.Z)((0,s.Z)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{className:l.slider,children:e.images.map((function(e,t){return(0,_.jsx)("div",{className:l.imageSec,children:(0,_.jsx)("img",{src:e,alt:"images"})},t)}))})),(0,_.jsxs)("div",{className:l.contentSec,img:e.thumbnail,children:[(0,_.jsx)("h2",{className:l.title,children:e.title}),(0,_.jsx)("p",{className:l.description,children:e.description}),(0,_.jsxs)("div",{className:l.priceAndFavorite,children:[(0,_.jsxs)("h3",{className:l.price,children:["\u20b9 ",(81*e.price).toLocaleString("en-IN")]}),(0,_.jsx)("div",{className:l.fav,onClick:function(){i.filter((function(t){return t.id===e.id})).length>0?n((0,u.Ni)(e)):n((0,u.a3)(e))},children:i.filter((function(t){return t.id===e.id})).length>0?(0,_.jsx)("img",{src:p.Z,alt:"fav"}):(0,_.jsx)("img",{src:m.Z,alt:"not-fav"})})]}),(0,_.jsxs)("div",{className:l.btnSection,children:[(0,_.jsx)("button",{className:l.btn,onClick:function(){t.filter((function(t){return t.id===e.id})).length>0?n((0,u.N6)(e)):n((0,u.Xq)(e))},children:t.filter((function(t){return t.id===e.id})).length>0?"Remove Cart":"Add to Cart"}),(0,_.jsx)(o.rU,{className:l.allProduct,to:"/",children:"All Products"})]})]})]})})}var h=i(7485);function g(){var e=(0,c.useState)({}),t=(0,n.Z)(e,2),i=t[0],s=t[1],o=(0,c.useState)(!0),l=(0,n.Z)(o,2),d=l[0],a=l[1],u=(0,r.UO)().productId;(0,c.useEffect)((function(){a(!0),fetch("https://dummyjson.com/products/".concat(u)).then((function(e){return e.json()})).then((function(e){a(!1),s(e),console.log(e)}))}),[u]);var p=i.images,m=i.title,g=i.price,v=i.description,j=i.id,x=i.thumbnail,N=i.stock;return(0,_.jsx)("section",{children:d?(0,_.jsx)(h.Z,{}):(0,_.jsx)(f,{id:j,images:p,title:m,price:g,description:v,thumbnail:x,stock:N})})}}}]);
//# sourceMappingURL=837.ed04dd71.chunk.js.map