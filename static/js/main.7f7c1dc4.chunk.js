(this["webpackJsonpdepop-test"]=this["webpackJsonpdepop-test"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(23),a(17)),s=a(2),l=a(3),d=a(5),m=a(4),u=a(16),p=a.n(u),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.liked,n=e.handleLike;return r.a.createElement("div",{className:"like-icon",onClick:function(){return n(t)}},r.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:a?"red":"rgba(0,0,0,.2)",stroke:a?"red":"black"},r.a.createElement("path",{d:"M 10,30\r A 20,20 0,0,1 50,30\r A 20,20 0,0,1 90,30\r Q 90,60 50,90\r Q 10,60 10,30 z"})))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.img,n=e.title,c=e.brand,o=e.price,i=e.size,s=e.handleLike,l=e.liked,d=e.sold;return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"image-wrapper ".concat(d?"sold":"")},r.a.createElement(h,{id:t,liked:l,handleLike:s}),r.a.createElement("img",{className:"card-img-top",src:a,alt:n})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},n),r.a.createElement("p",{className:"card-text"},c&&c),r.a.createElement("p",{className:"card-text"},i),r.a.createElement("p",{className:"card-text bold"},"\xa3",parseFloat(o)))))}}]),a}(n.Component),f=(a(41),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLike=function(e){var t=Object(i.a)(n.state.products);t.forEach((function(t){t.id===e&&(t.liked=!t.liked)})),n.setState({products:t})},n.toggleSold=function(){n.setState({showSold:!n.state.showSold})},n.state={products:[],loading:!1,showLikes:!1,showSold:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.products.length||this.setState({loading:!0},(function(){p.a.get("https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products").then((function(t){var a=t.data;a.forEach((function(e){e.liked=!1})),e.setState({loading:!1,products:a})})).catch((function(t){e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this,t=this.state.products.filter((function(e){return e.liked})).length,a=this.state.products;return this.state.showSold||(a=a.filter((function(e){return!e.sold}))),r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"}),r.a.createElement("div",{className:"top-bar align-right"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Liked ",t)),r.a.createElement("div",{id:"product-area"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"results"},r.a.createElement("h2",null,a.length," results."))),r.a.createElement("div",{className:"col align-center-right"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.toggleSold()}},this.state.showSold?"Hide Sold Items":"Show Sold Items"))),r.a.createElement("div",{className:"row"},a.map((function(t,a){return r.a.createElement(b,{key:a,id:t.id,img:t.img,title:t.title,brand:t.brand,price:t.price,size:t.size,liked:t.liked,sold:t.sold,handleLike:e.handleLike})}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7f7c1dc4.chunk.js.map