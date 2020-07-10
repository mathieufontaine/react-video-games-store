(this["webpackJsonpreact-video-games-store"]=this["webpackJsonpreact-video-games-store"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(18),l=a.n(s),r=a(7),o=a(8),i=a(3),m=a(6),A=a(9),E=a(123),u=function(e,t){switch(t.type){case"SHOW_GAMES":return Object(i.a)(Object(i.a)({},e),{},{storeGames:Object(A.a)(t.payload)});case"UPDATE_HEADING":return Object(i.a)(Object(i.a)({},e),{},{heading:'Search Results for: "'.concat(t.payload,'"')});case"ADD_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cartGames:[].concat(Object(A.a)(e.cartGames),[Object(i.a)({},t.payload)])});case"REMOVE_FROM_CART":return Object(i.a)(Object(i.a)({},e),{},{cartGames:e.cartGames.filter((function(e){return e.id!==t.payload}))});case"ADD_TO_WISHLIST":return Object(i.a)(Object(i.a)({},e),{},{wishlistGames:[].concat(Object(A.a)(e.wishlistGames),[Object(i.a)({},t.payload)])});case"REMOVE_FROM_WISHLIST":return Object(i.a)(Object(i.a)({},e),{},{wishlistGames:e.wishlistGames.filter((function(e){return e.id!==t.payload}))});case"CLEAR_WISHLIST":return Object(i.a)(Object(i.a)({},e),{},{wishlistGames:t.payload});case"FILTER_GAMES":return Object(i.a)(Object(i.a)({},e),{},{storeGames:e.storeGames.filter((function(e){return Object.keys(e).some((function(a){return e.title.toLowerCase().includes(t.payload.toLowerCase())}))}))});case"ADD_CUSTOM_LIST":return Object(i.a)(Object(i.a)({},e),{},{customLists:[].concat(Object(A.a)(e.customLists),[{title:t.payload,id:Object(E.a)(),games:[]}])});case"REMOVE_CUSTOM_LIST":return Object(i.a)(Object(i.a)({},e),{},{customLists:e.customLists.filter((function(e){return e.id!==t.payload}))});case"ADD_TO_TOP_LIST":return Object(i.a)(Object(i.a)({},e),{},{topList:t.payload.length>0?[].concat(Object(A.a)(e.topList),Object(A.a)(t.payload)):[].concat(Object(A.a)(e.topList),[t.payload])});case"REMOVE_FROM_TOP_LIST":return Object(i.a)(Object(i.a)({},e),{},{topList:e.topList.filter((function(e){return e.id!==t.payload}))});case"UPDATE_TOP_LIST":return Object(i.a)(Object(i.a)({},e),{},{topList:Object(A.a)(t.payload)});case"ADD_TO_SELECTED_GAMES":return Object(i.a)(Object(i.a)({},e),{},{selectedGames:[].concat(Object(A.a)(e.selectedGames),[Object(i.a)({},t.payload)])});case"CLEAR_SELECTED_GAMES":return Object(i.a)(Object(i.a)({},e),{},{selectedGames:t.payload});case"ADD_TO_CUSTOM_LIST":return Object(i.a)(Object(i.a)({},e),{},{customLists:e.customLists.map((function(e){return e.id===t.payload.listId?e.games&&e.games.length>0?Object(i.a)(Object(i.a)({},e),{},{games:[].concat(Object(A.a)(e.games),Object(A.a)(t.payload.game))}):Object(i.a)(Object(i.a)({},e),{},{games:t.payload.game}):e}))});case"UPDATE_ORDER_GAMES":return Object(i.a)(Object(i.a)({},e),{},{customLists:e.customLists.map((function(e){return e.id===t.payload.id?Object(i.a)(Object(i.a)({},e),{},{games:t.payload.games}):e}))});case"REMOVE_FROM_CUSTOM_LIST":return Object(i.a)(Object(i.a)({},e),{},{customLists:e.customLists.map((function(e){return e.id===t.payload.listId?Object(i.a)(Object(i.a)({},e),{},{games:e.games.filter((function(e){return e.id!==t.payload.id}))}):e}))});case"CLEAR_STATE":return Object(i.a)(Object(i.a)({},e),{},{storeGames:Object(A.a)(e.storeGames)});default:return e}},d=a(24),g=a.n(d),b=[{name:"The Last of Us",id:3990,score:"200",cover:c.a.createElement("img",{className:"leaderboard cover",src:"https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg",alt:"img"}),background_image:"https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg"},{name:"Tomb Raider",id:5286,score:"100",cover:c.a.createElement("img",{className:"leaderboard cover",src:"https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg",alt:"img"}),background_image:"https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"},{name:"GTA V",id:3498,score:"150",cover:c.a.createElement("img",{className:"leaderboard cover",src:"https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg",alt:"img"}),background_image:"https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"}],B={storeGames:[],cartGames:JSON.parse(localStorage.getItem("cartGames"))||[],wishlistGames:JSON.parse(localStorage.getItem("wishlistGames"))||[],selectedGames:[],customLists:JSON.parse(localStorage.getItem("customLists"))||[],topList:JSON.parse(localStorage.getItem("topList"))||b,heading:"Popular Games"},C=Object(n.createContext)(B),h=function(e){var t=e.children,a=Object(n.useReducer)(u,B),s=Object(m.a)(a,2),l=s[0],r=s[1];function o(e){r({type:"SHOW_GAMES",payload:e})}function A(e){r({type:"ADD_TO_SELECTED_GAMES",payload:e})}function E(e,t){r({type:"ADD_TO_CUSTOM_LIST",payload:{game:e,listId:t}})}return Object(n.useEffect)((function(){g.a.get("".concat("https://api.rawg.io/api/games")).then((function(e){o(e.data.results.map((function(e){return Object(i.a)(Object(i.a)({},{price:Math.floor(51*Math.random()+10)}),e)})))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){localStorage.setItem("cartGames",JSON.stringify(l.cartGames)),localStorage.setItem("wishlistGames",JSON.stringify(l.wishlistGames)),localStorage.setItem("lists",JSON.stringify(l.customLists)),localStorage.setItem("topList",JSON.stringify(l.topList))})),c.a.createElement(C.Provider,{value:{storeGames:l.storeGames,cartGames:l.cartGames,customLists:l.customLists,topList:l.topList,selectedGames:l.selectedGames,wishlistGames:l.wishlistGames,heading:l.heading,findGame:function(e,t){var a=l.storeGames.find((function(t){return t.id===e}));"cart"===t?function(e){r({type:"ADD_TO_CART",payload:e})}(a):"wishlist"===t?function(e){r({type:"ADD_TO_WISHLIST",payload:e})}(a):"selectedGames"===t&&A(a)},removeFromCart:function(e){r({type:"REMOVE_FROM_CART",payload:e})},removeFromWishlist:function(e){r({type:"REMOVE_FROM_WISHLIST",payload:e})},clearWishlist:function(){r({type:"CLEAR_WISHLIST",payload:[]})},showGames:o,updateHeading:function(e){r({type:"UPDATE_HEADING",payload:e})},addCustomList:function(e){r({type:"ADD_CUSTOM_LIST",payload:e})},removeCustomList:function(e){r({type:"REMOVE_CUSTOM_LIST",payload:e})},addToCustomList:E,removeFromCustomList:function(e,t){r({type:"REMOVE_FROM_CUSTOM_LIST",payload:{id:e,listId:t}})},updateOrderGames:function(e,t){r({type:"UPDATE_ORDER_GAMES",payload:{games:e,id:t}})},addToTopList:function(e){r({type:"ADD_TO_TOP_LIST",payload:e})},removeFromTopList:function(e){r({type:"REMOVE_FROM_TOP_LIST",payload:e})},updateTopList:function(e){r({type:"UPDATE_TOP_LIST",payload:e})},addToSelectedGames:A,clearSelectedGames:function(){r({type:"CLEAR_SELECTED_GAMES",payload:[]})},findList:function(e,t){E(l.storeGames.find((function(t){return t.id===e})),t)}}},t)},f=function(){return c.a.createElement(r.b,{to:"/"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Video Games Store")))},p=a(10),O=a(11),w=function(){var e=Object(n.useContext)(C),t=e.cartGames,a=(e.wishlistGames,Object(n.useState)(!1)),s=Object(m.a)(a,2),l=s[0],o=s[1],i=Object(n.useState)(""),A=Object(m.a)(i,2),E=A[0],u=A[1],d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;Object(n.useEffect)((function(){u(d)}),[d]),Object(n.useEffect)((function(){o(d>1200)}),[d]);var g=function(){return E<1200?o(!1):""};return console.log(d),c.a.createElement("div",{className:"navbar sticky"},c.a.createElement("div",{className:!1===l?"mobile-nav full-width":"mobile-nav"},c.a.createElement("div",{className:"mobile-nav-btn",onClick:function(){return o(!l)}},c.a.createElement(p.a,{icon:O.b,className:""}))),!0===l?c.a.createElement(c.a.Fragment,null,c.a.createElement(r.b,{to:"/"},c.a.createElement("div",{className:"btn nav-tab white",onClick:g},c.a.createElement(p.a,{icon:O.f,className:"nav-icon"}),c.a.createElement("span",null,"STORE"))),c.a.createElement(r.b,{to:"/wishlist"},c.a.createElement("div",{className:"btn nav-tab purple",onClick:g},c.a.createElement(p.a,{icon:O.c,className:"nav-icon"}),c.a.createElement("span",null,"MY LIBRARY"))),c.a.createElement(r.b,{to:"/leaderboard"},c.a.createElement("div",{className:"btn nav-tab blue",onClick:g},c.a.createElement(p.a,{icon:O.d,className:"nav-icon"}),c.a.createElement("span",null,"LEADERBOARD"))),c.a.createElement(r.b,{to:"/cart"},c.a.createElement("div",{className:"btn nav-tab cart",onClick:g},c.a.createElement(p.a,{icon:O.e,className:"nav-icon"}),c.a.createElement("span",null,"CART(",t.length,")")))):"")},G=a(31),I=a.n(G),j=a(122),S=function(e){var t=e.game,a=Object(n.useContext)(C),s=a.findGame,l=a.wishlistGames,o=a.cartGames,i={infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},m=Object(n.useRef)(),A=Object(n.useRef)();return c.a.createElement("li",{className:"game-card"},c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("h3",{className:"title"},t.name),null!==t.short_screenshots?c.a.createElement("div",{className:"caroussel"},c.a.createElement(I.a,i,t.short_screenshots.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("img",{src:e.image,alt:"screnshot",className:"screenshot"}))})))):c.a.createElement("img",{src:t.background_image,alt:t.background_image,className:"cover"}),c.a.createElement("div",{className:"rating-price"},c.a.createElement("span",{className:"rating"},0===t.rating?"N/A":c.a.createElement(j.a,{name:"half-rating-read",defaultValue:t.rating,precision:.2,readOnly:!0})),c.a.createElement("span",{className:"price"},"$",t.price))),c.a.createElement("div",{className:"actions"},l.some((function(e){return e.id===t.id}))?c.a.createElement("button",{className:"btn disabled"},"In your library"):c.a.createElement("button",{className:"btn purple",ref:m,onClick:function(e){m.current&&m.current.setAttribute("disabled","disabled"),s(t.id,"wishlist")}},"Add to My Games"),o.some((function(e){return e.id===t.id}))?c.a.createElement("button",{className:"btn disabled"},"In your Cart"):c.a.createElement("button",{className:"btn add-btn",ref:A,onClick:function(e){A.current&&A.current.setAttribute("disabled","disabled"),s(t.id,"cart")}},c.a.createElement(r.b,{to:"/cart"},"Add to Cart"))))},N=a(48),Q=a.n(N),F=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:Q.a,alt:"Loading...",style:{width:"200px",margin:" 40px auto",display:"block"}}))},y=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],s=t[1];return window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?s(!0):a&&window.pageYOffset<=400&&s(!1)})),c.a.createElement(p.a,{icon:O.a,className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:a?"inline-block":"none"}})},D=function(){var e=Object(n.useContext)(C),t=e.storeGames,a=e.heading;return c.a.createElement("div",{className:"store"},void 0===t||0===t.length?c.a.createElement(F,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"heading"},a),c.a.createElement("ul",{className:"video-game-list"},t&&t.map((function(e){return null!==e.background_image||null!==e.name?c.a.createElement(S,{game:e,key:e.id}):""}))),c.a.createElement(y,null)))};var v=function(){var e=Object(n.useContext)(C),t=e.showGames,a=e.updateHeading,s=Object(n.useState)(""),l=Object(m.a)(s,2),r=l[0],o=l[1],A=Object(n.useState)(""),E=Object(m.a)(A,2),u=E[0],d=E[1];return Object(n.useEffect)((function(){u.length>0&&g.a.get("".concat("https://api.rawg.io/api/games?search=").concat(u)).then((function(e){var n=e.data.results.map((function(e){return Object(i.a)(Object(i.a)({},{price:Math.floor(51*Math.random()+10)}),e)}));t(n),a(u)})).catch((function(e){return console.log(e)}))}),[u]),c.a.createElement("div",{className:"search-box"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(r)}},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search for any game",onChange:function(e){return o(e.target.value)},value:r}),c.a.createElement("button",{className:"btn black-btn",type:"submit"},"Search")))},L=function(e){e.storePage;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(D,null))},R=function(e){var t=e.game,a=Object(n.useContext)(C).removeFromCart;return c.a.createElement("li",{className:"video-game-cart"},c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("img",{src:t.background_image,alt:t.background_image,className:"cover"})),c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("h3",null,t.name)),c.a.createElement("span",{className:"price"},"$",t.price),c.a.createElement("span",{className:"trash-btn",onClick:function(){return a(t.id)}},c.a.createElement(p.a,{icon:O.h})))},k=function(e){var t=e.cartGames,a=t.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);return c.a.createElement("div",{className:"cart-total"},c.a.createElement("div",{className:"nb-articles"},"Number of articles: ",t.length),c.a.createElement("div",{className:"total-price"},"Total: $",a))},M=function(){var e=Object(n.useContext)(C).cartGames;return c.a.createElement("div",{className:"cart"},c.a.createElement("h1",{className:"page-title"},"CART"),e.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"cart-list"},e.map((function(e){return c.a.createElement(R,{game:e,key:e.id})}))),c.a.createElement(k,{cartGames:e})):c.a.createElement("div",{className:"empty-cart"},"Your cart is empty"))},U=function(e){var t=e.game,a=e.selectListSection,s=e.setSelectListSection,l=Object(n.useContext)(C),o=l.customLists,i=l.topList,m=l.addToSelectedGames,A=l.removeFromWishlist,E=l.addToTopList,u=l.selectedGames,d=u.some((function(e){return e.id===t.id}))?{bgColor:"black",color:"white"}:{bgColor:"",color:""};return c.a.createElement("li",{className:"video-game-wishlist",style:{backgroundColor:d.bgColor,color:d.color}},c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("img",{src:t.background_image,alt:t.background_image,className:"cover"}),c.a.createElement("h3",null,t.name)),c.a.createElement("div",{className:"actions"},i.some((function(e){return e.id===t.id}))||!0===a?"":c.a.createElement("button",{className:"btn add-btn",onClick:function(){return E(t)}},"Add to Top List"),o.length?u.some((function(e){return e.id===t.id}))?"":c.a.createElement("button",{className:"btn gray-btn",onClick:function(){return function(e){s(!0),m(e)}(t)}},"Add to Custom List"):"",c.a.createElement("div",{className:"cross-btn",onClick:function(){return A(t.id)}},c.a.createElement(p.a,{icon:O.g}))))},Y=function(e){var t=e.game,a=e.sortIndex,s=e.id,l=Object(n.useContext)(C).removeFromCustomList;return c.a.createElement("li",{className:"video-game-wishlist"},c.a.createElement("div",{className:"ranking"},a+1),c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("img",{src:t.background_image,alt:t.background_image,className:"cover"})),c.a.createElement("div",{className:"actions"},c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("h3",null,t.name)),c.a.createElement("div",{className:"cross-btn",onClick:function(){return l(t.id,s)}},c.a.createElement(p.a,{icon:O.g}))))},T=a(25),x=a(32),H=a.n(x),J=function(e){var t=e.list,a=(Object(T.b)((function(e){var a=e.game,n=e.sortIndex;return c.a.createElement(Y,{game:a,sortIndex:n,id:t.id})})),Object(T.a)((function(e){var t=e.sortedGames;return c.a.createElement("ul",{className:"sortable-list"},t.map((function(e,t){})))}))),s=Object(n.useContext)(C),l=s.customLists,r=s.removeCustomList,o=(s.findItem,s.updateOrderGames),i=l.filter((function(e){return e.id===t.id}))[0].games,A=Object(n.useState)(i),E=Object(m.a)(A,2),u=E[0],d=E[1];Object(n.useEffect)((function(){d(i)}),[i]);return Object(n.useEffect)((function(){u&&u.length>1&&o(u,t.id)}),[u]),c.a.createElement("li",{className:"list"},c.a.createElement("div",{className:"list-information"},c.a.createElement("p",{className:"title"},t.title)),u&&u.length>0?c.a.createElement("ul",{className:"sortable-list"},c.a.createElement(a,{sortedGames:u,onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;d(H()(u,t,a))},distance:10,list:t.id})):c.a.createElement("div",{className:"empty-list"},c.a.createElement("h3",null,"No game yet. ")),c.a.createElement("button",{className:"btn",onClick:function(){return r(t.id)}},"Remove list"))},W=function(){var e=Object(n.useContext)(C),t=e.addCustomList,a=(e.removeList,e.editList,e.setEditList,e.editTitle,Object(n.useState)("")),s=Object(m.a)(a,2),l=s[0],r=s[1];return c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(l),r("")}},c.a.createElement("input",{type:"text",className:"text",placeholder:"Add List..",value:l,onChange:function(e){return r(e.target.value)},required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn add-btn"},"Add new List")))},K=function(e){var t=e.gamesToAdd,a=e.setSelectListSection,s=e.selectListSection,l=Object(n.useContext)(C),r=l.customLists,o=l.clearSelectedGames,i=l.addToCustomList;Object(n.useEffect)((function(){m()}),[r]);var m=function(){a(!1),o()};return c.a.createElement("div",{className:!1===s?"hide":"show"},c.a.createElement("h2",null,"Select the list you want to add the games to:"),c.a.createElement("div",{className:"actions-lists"},r.map((function(e){return c.a.createElement("button",{className:"btn custom-btn",key:e.id,onClick:function(){return a=e.id,void i(t,a);var a}},e.title)}))),c.a.createElement("button",{className:"btn remove-btn",onClick:m},"Cancel"))},Z=function(e){var t=e.game,a=e.sortIndex,s=Object(n.useContext)(C),l=s.topList,o=s.removeFromTopList;return c.a.createElement("li",{className:"video-game-wishlist"},c.a.createElement("div",{className:"ranking"},a+1),c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("img",{src:t.background_image,alt:t.background_image,className:"cover"})),c.a.createElement("div",{className:"actions"},c.a.createElement(r.b,{to:"game/".concat(t.id)},c.a.createElement("h3",null,t.name)),l.length>3?c.a.createElement("div",{className:"cross-btn",onClick:function(){return o(t.id)}},c.a.createElement(p.a,{icon:O.g})):""))},V=function(){Object(T.b)((function(e){var t=e.game,a=e.sortIndex;return c.a.createElement(Z,{game:t,sortIndex:a})}));var e=Object(T.a)((function(e){var t=e.sortedGames;return c.a.createElement("ul",{className:"sortable-list"},t.map((function(e,t){})))})),t=Object(n.useContext)(C),a=t.topList,s=t.updateTopList,l=Object(n.useState)(a),r=Object(m.a)(l,2),o=r[0],i=r[1];Object(n.useEffect)((function(){i(a)}),[a.length]);return Object(n.useEffect)((function(){o&&o.length>1&&s(o)}),[o]),c.a.createElement("li",{className:"top-list"},c.a.createElement("div",{className:"list-information"},c.a.createElement("h2",null,"My TOP List"),c.a.createElement("p",null,"Rank your favorite games below.")),3===o.length?c.a.createElement("div",{className:"empty-list"},c.a.createElement("h3",null,"You need at least 3 games in your Top List."),c.a.createElement("p",null,"If you want to remove any of these games, add more games first.")):"",c.a.createElement("ul",{className:"sortable-list"},c.a.createElement(e,{sortedGames:o,onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;i(H()(o,t,a))},distance:10})))},P=function(){var e=Object(n.useContext)(C),t=e.customLists,a=e.wishlistGames,s=e.selectedGames,l=e.clearWishlist,o=Object(n.useState)(!1),i=Object(m.a)(o,2),A=i[0],E=i[1],u=Object(n.useState)(s),d=Object(m.a)(u,2),g=d[0],b=d[1];return Object(n.useEffect)((function(){b(s)}),[s.length]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wishlist"},c.a.createElement("div",{className:"added-list mobile"},a.length>0?c.a.createElement("div",null,c.a.createElement("h1",{className:"page-title"},"LIBRARY"),c.a.createElement("ul",{className:"wishlist-list"},a.map((function(e){return c.a.createElement(U,{game:e,key:e.id,setSelectListSection:E,selectListSection:A})}))),!1===A?c.a.createElement("button",{className:"btn remove-btn",onClick:function(){return l()}},"Remove all games"):"",t.length>0?c.a.createElement(K,{customLists:t,gamesToAdd:g,setSelectListSection:E,selectListSection:A}):""):c.a.createElement("div",{className:"empty-list empty-wishlist"},"No Games.",c.a.createElement("p",null,"To update your Top List or your Custom Lists, you need to add some games from the ",c.a.createElement(r.b,{to:"/"},"store")," first."))),c.a.createElement("div",{className:"top-list-added-list-custom-list"},c.a.createElement("div",{className:"top-list-section"},c.a.createElement(V,null)),c.a.createElement("div",{className:"added-list-custom-list"},c.a.createElement("div",{className:"lists-section"},c.a.createElement("h2",null,"Your Custom Lists"),c.a.createElement(W,null),t.length?c.a.createElement("ul",{className:"lists"},t&&t.map((function(e){return c.a.createElement(J,{list:e,key:e.id})}))):c.a.createElement("div",{className:"empty-list empty-wishlist"},"To create a custom list your need to:",c.a.createElement("p",null,c.a.createElement("strong",null,"1. "),"Use the form above to give a name to your list."),c.a.createElement("p",null,c.a.createElement("strong",null,"2. "),"Add some games from the Store to your Library."),c.a.createElement("p",null,c.a.createElement("strong",null,"3. "),'Select the games you want to add by clicking on "add to custom list".'),c.a.createElement("p",null,c.a.createElement("strong",null,"4. "),"Choose your list among all your custom lists."))))),c.a.createElement(y,null)))},q=function(e){var t=Object(n.useContext)(C),a=t.findGame,s=t.cartGames,l=t.wishlistGames,o=Object(n.useState)(""),i=Object(m.a)(o,2),A=i[0],E=i[1];console.log(e.match.params.id),Object(n.useEffect)((function(){g.a.get("".concat("https://api.rawg.io/api/games/").concat(e.match.params.id)).then((function(e){console.log(e.data),E(e.data)})).catch((function(e){return console.log(e)}))}),[]);var u={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoPlay:!0};return void 0===A||0===Object.keys(A).length?c.a.createElement(F,null):c.a.createElement("div",{className:"video-game-page"},c.a.createElement("h2",{className:"game-title"},A.name),null!==A.background_image_additional?c.a.createElement("div",{className:"caroussel"},c.a.createElement(I.a,u,c.a.createElement("div",null,c.a.createElement("img",{src:A.background_image,alt:"screnshot",className:"screenshot"})),c.a.createElement("div",null,c.a.createElement("img",{src:A.background_image_additional,alt:"screnshot",className:"screenshot"})))):c.a.createElement("img",{src:A.background_image,alt:A.background_image,className:"cover"}),c.a.createElement("div",{className:"game-details"},c.a.createElement("div",{className:"game-information"},c.a.createElement("p",{className:"rating"},c.a.createElement("strong",null,"Rating: "),0===A.rating?"N/A":c.a.createElement(j.a,{name:"half-rating-read",defaultValue:A.rating,precision:.2,readOnly:!0})),void 0!==A.genres[0]?c.a.createElement("p",{className:"genre"},c.a.createElement("strong",null,"Genre: "),A.genres[0].name):"",c.a.createElement("p",{className:"released"},c.a.createElement("strong",null,"Released Date: ")," ",A.released),c.a.createElement("p",{className:"description"},c.a.createElement("strong",null,"Description: ")," ",A.description_raw),""!==A.website?c.a.createElement("p",{className:"website"},c.a.createElement("strong",null,"More info: "),c.a.createElement("a",{target:"_blank",href:A.website},A.website)):""),c.a.createElement("div",{className:"actions"},c.a.createElement("button",{className:"btn black-btn"},c.a.createElement(r.b,{to:"/"},"Go to Store")),l.some((function(e){return e.id===A.id}))?"":c.a.createElement("button",{className:"btn purple",onClick:function(){return a(A.id,"wishlist")}},c.a.createElement(r.b,{to:"/wishlist"},"Add to My Games")),s.some((function(e){return e.id===A.id}))?"":c.a.createElement("button",{className:"btn add-btn",onClick:function(){return a(A.id,"cart")}},c.a.createElement(r.b,{to:"/cart"},"Add to Cart "))),null!==A.clip?c.a.createElement("div",{className:"clip"},c.a.createElement("h3",null,"Game Video Clip"),c.a.createElement("video",{controls:!0},c.a.createElement("source",{src:A.clip.clip,type:"video/mp4"}))):""))},z=(a(49),function(){var e=Object(n.useContext)(C).topList,t=function(e){switch(e){case 1:return 50;case 2:return 30;case 3:return 15;case 4:return 5;case 5:return 3;case 6:return 2;case 7:return 1;default:return 0}},a=e.map((function(e,a){return{name:e.name,score:t(a+1),cover:c.a.createElement("img",{className:"leaderboard cover",src:"".concat(e.background_image)}),key:e.id}})),s=Object(n.useState)(a),l=Object(m.a)(s,2),r=(l[0],l[1]),o=Object(n.useState)(30),i=Object(m.a)(o,2);i[0],i[1];console.log(a),Object(n.useEffect)((function(){r(a)}),[e.length])});a(97),a(98),a(99),a(100),a(101),a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109);var X=function(){return c.a.createElement(h,null,c.a.createElement(r.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(f,null),c.a.createElement(w,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:L}),c.a.createElement(o.a,{exact:!0,path:"/cart",component:M}),c.a.createElement(o.a,{exact:!0,path:"/wishlist",component:P}),c.a.createElement(o.a,{exact:!0,path:"/leaderboard",component:z}),c.a.createElement(o.a,{exact:!0,path:"/game/:id",component:q})))))};l.a.render(c.a.createElement(X,null),document.getElementById("root"))},48:function(e,t){e.exports="data:image/gif;base64,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"},55:function(e,t,a){e.exports=a(110)},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.1de09373.chunk.js.map