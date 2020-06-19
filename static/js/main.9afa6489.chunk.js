(this["webpackJsonphappy-campers"]=this["webpackJsonphappy-campers"]||[]).push([[0],{42:function(e,t,a){e.exports=a(93)},51:function(e,t,a){e.exports=a.p+"static/media/campground-solid.22a1fffc.svg"},52:function(e,t,a){e.exports=a.p+"static/media/globe-solid.477e9e32.svg"},53:function(e,t,a){e.exports=a.p+"static/media/angle-down-solid.8bad8773.svg"},54:function(e,t,a){e.exports=a.p+"static/media/sign-in-alt-solid.f004e825.svg"},73:function(e,t,a){e.exports=a.p+"static/media/facebook-f-brands.2f85eb9d.svg"},74:function(e,t,a){e.exports=a.p+"static/media/instagram-brands.51eaeb31.svg"},75:function(e,t,a){e.exports=a.p+"static/media/twitter-brands.20361df3.svg"},76:function(e,t,a){e.exports=a.p+"static/media/user.34c70645.svg"},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(2),s=a(18),o=function(){return r.a.createElement("header",{className:"header flex"},r.a.createElement("h1",{className:"logo primaryColor"},r.a.createElement(s.a,{to:"/"},"Happy C",r.a.createElement("img",{className:"logo__icon",src:a(51),alt:"localisation"}),"mpers")),r.a.createElement("nav",{className:"nav__container"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"flex"},r.a.createElement("img",{className:"nav__icon",src:a(52),alt:"localisation"}),r.a.createElement("img",{className:"nav__icon",src:a(53),alt:"localisation"})),r.a.createElement("li",null,r.a.createElement("a",{className:"nav__link",href:"/"},"Destinations")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav__link",href:"/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav__link",href:"/"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{className:"flex  nav__link-border",href:"/"},r.a.createElement("img",{className:"nav__icon ",src:a(54),alt:"localisation"}),"Log in")))))},m=a(4),u=function(e){return{type:"FILTER_CAMPSITES",filter:e}},p=a(39),d=a.n(p).a.create({baseURL:"https://happycamper.developme.space/api/",headers:{Accept:"application/json"}}),E=function(e){return function(t){d.get("/regions/".concat(e)).then((function(e){var a=e.data;t(function(e){return{type:"FIND_CAMPSITES",campsites:e.data}}(a))}))}},f=a(11),h=a(12),v=a(14),g=a(13),b=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.handleCampsitesLoad(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.loadedList,a=e.campsites;return t?r.a.createElement("ul",null,a?a.map((function(e,t){return r.a.createElement("li",{className:"card",key:t},r.a.createElement("picture",{className:"card-img__container"},r.a.createElement("img",{className:"card-img",alt:"",src:e.img})),r.a.createElement("header",{className:"card__header"},r.a.createElement("h6",null,e.campsite_name),r.a.createElement("p",null,"Location: ",e.town_city)),r.a.createElement("section",{className:"card__details"},r.a.createElement("p",null,"Amenities:"),r.a.createElement("ul",{className:"card__list"},e.amenities.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("section",{className:"card__rating"},r.a.createElement("p",null,"Rating: ",e.rating,"/5")),r.a.createElement("section",{className:"card__price"},r.a.createElement("p",null,"From ",e.price," per night"),r.a.createElement("button",{className:"button button--card "},r.a.createElement(s.a,{className:"button--card__link",to:"/region/campsites/".concat(e.id)},"More Info"))))})):r.a.createElement("p",null,"No results found.")):r.a.createElement("p",null,"Loading... ")}}]),a}(n.Component),_=Object(m.b)((function(e){return{loadedList:e.loadedList,campsites:e.campsites.filter((function(t){return e.filterAmenities.every((function(e){return t.amenities.includes(e)}))}))}}),(function(e){return{handleLoad:function(){return e(u())},handleCampsitesLoad:function(t){return e(E(t))}}}))(b),N=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.handleCampsiteLoad(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.loadedListItem,a=e.campsite;return t?r.a.createElement("div",null,r.a.createElement("header",{className:"header-campsite"},r.a.createElement("h2",null,a.campsite_name),r.a.createElement("p",null,a.town_city),r.a.createElement("h3",null,"from ",a.price," per night")),r.a.createElement("div",{className:"main-campsite"},r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,a.description),r.a.createElement("p",null,"Amenities:"),r.a.createElement("ul",null,a.amenities.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))):r.a.createElement("p",null,"Loading... ")}}]),a}(n.Component),O=Object(m.b)((function(e){return{loadedListItem:e.loadedListItem,campsite:e.currentCampsite}}),(function(e){return{handleCampsiteLoad:function(t){return e(function(e){return function(t){d.get("/campsites/".concat(e)).then((function(e){var a=e.data;t(function(e){return{type:"FIND_CAMPSITE",currentCampsite:e.data}}(a))}))}}(t))}}}))(N),y=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"social__icon",src:a(73),alt:"facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"social__icon",src:a(74),alt:"facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"social__icon",src:a(75),alt:"facebook"})))),r.a.createElement("p",null,"\xa9 2020 Happy Campers"))},j=function(e){var t=e.price;e.rating;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Book this Site"),r.a.createElement("h3",null,"Price: ",t," per night")),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"adults"},"Number of Adults:"),r.a.createElement("select",{id:"adults"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4")),r.a.createElement("label",{htmlFor:"children"},"Number of Children:"),r.a.createElement("select",{id:"children"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4")),r.a.createElement("div",null,r.a.createElement("button",null,"Check Availability"))))},w=(Object(m.b)((function(e){return{}}),(function(e){return{}}))(j),function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.handleReviewsLoad(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.reviews;return e.loadedReviews?r.a.createElement("div",{className:"review-container"},r.a.createElement("h1",null,"Reviews"),0===t.length?r.a.createElement("p",null,"No reviews found. Be the first to leave a review."):t.map((function(e,t){return r.a.createElement("div",{key:t,className:"review-card"},r.a.createElement("div",{className:"review-header"},r.a.createElement("img",{src:a(76),alt:"user"}),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"User: ",e.username)),r.a.createElement("p",{className:"review-date"},r.a.createElement("em",null,e.date_posted)))),r.a.createElement("p",null,"Rating: ",e.rating),r.a.createElement("p",null,e.review_description))}))):r.a.createElement("p",null,"Loading...")}}]),n}(n.Component)),C=Object(m.b)((function(e){return{loadedReviews:e.loadedReviews,reviews:e.reviews}}),(function(e){return{handleReviewsLoad:function(t){return e(function(e){return function(t){d.get("/campsites/".concat(e,"/reviews")).then((function(e){var a=e.data;t(function(e){return{type:"FIND_REVIEWS",reviews:e.data}}(a))}))}}(t))}}}))(w),k=function(e){var t=e.children;return r.a.createElement("main",{className:"hero__img"},t)},S=a(41),I=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(S.a)(e.props.filterAmenities);t.currentTarget.checked?a.push(t.currentTarget.value):a=a.filter((function(e){return e!==t.currentTarget.value})),e.props.handleSaveSettings(a)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.handleMount()}},{key:"render",value:function(){var e=this,t=this.props,a=(t.loadedList,t.listAmenities);return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{class:"dropbtn"},"Filter +"),r.a.createElement("ul",{className:"dropdown-content"},a.map((function(t){return r.a.createElement("li",null,r.a.createElement("label",{htmlFor:t.amenity_name.toLowerCase().replace(" ","-")},t.amenity_name),r.a.createElement("input",{type:"checkbox",name:"amentities",value:t.amenity_name,id:t.amenity_name.toLowerCase().replace(" ","-"),onChange:e.handleChange}))}))))}}]),a}(n.Component),L=Object(m.b)((function(e){return{filterAmenities:e.filterAmenities,listAmenities:e.amenities}}),(function(e){return{handleSaveSettings:function(t){return e(u(t))},handleMount:function(){return e((function(e){d.get("/amenities").then((function(t){var a=t.data;e(function(e){return{type:"LIST_AMENITIES",amenities:e.data}}(a))}))}))}}}))(I),A=a(15),M={width:"50vw",height:"100%"},R=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(A.Map,{google:this.props.google,zoom:8,style:M,initialCenter:{lat:51.330826,lng:-2.720554}},r.a.createElement(A.Marker,{name:"place1",position:{lat:51.530826,lng:-2.920554}}),r.a.createElement(A.Marker,{name:"place2",position:{lat:51.130826,lng:-2.620554}}),r.a.createElement(A.Marker,{name:"place3",position:{lat:51.330826,lng:-2.820554}}),r.a.createElement(A.Marker,{name:"place4",position:{lat:51.430826,lng:-2.720554}}),r.a.createElement(A.Marker,{name:"place5",position:{lat:51.430826,lng:-2.520554}}))}}]),a}(n.Component),x=Object(A.GoogleApiWrapper)({apiKey:"AIzaSyDm77F5Y3UAspba90VNWULT9hKdh0yFruI"})(R),T=a(6),F=Object(T.b)(),D=a(21),P=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={value:"1"},n.handleSelect=n.handleSelect.bind(Object(D.a)(n)),n.handleChange=n.handleChange.bind(Object(D.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.loaded||this.props.handleRegionsLoad()}},{key:"handleChange",value:function(e){this.setState({value:e.currentTarget.value})}},{key:"handleSelect",value:function(e){e.preventDefault(),this.props.handleSubmit(this.state.value)}},{key:"render",value:function(){var e=this.props.regions;return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__container"},r.a.createElement("label",{className:"display-2 search__text"},"Where's your next adventure?"),r.a.createElement("select",{onChange:this.handleChange,value:this.state.value},e.map((function(e,t){return r.a.createElement("option",{key:t,value:e.id},e.region_name)})))),r.a.createElement(s.a,{to:"/region/".concat(this.state.value,"/campsites")},r.a.createElement("button",{className:"search__button"},"Explore")))}}]),a}(n.Component),U=Object(m.b)((function(e){return{loadedRegions:e.loadedRegions,regions:e.regions}}),(function(e){return{handleRegionsLoad:function(){return e((function(e){d.get("/regions").then((function(t){var a=t.data;e(function(e){return{type:"REGIONS",regions:e.data}}(a))}))}))},handleSubmit:function(t){e(E(t)),F.push("/campsites")}}}))(P),W=function(){return r.a.createElement(i.b,{history:F},r.a.createElement(o,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(k,null,r.a.createElement(U,null))),r.a.createElement(i.a,{exact:!0,path:"/region/:id/campsites",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("main",{className:"map__container"},r.a.createElement("div",null,r.a.createElement(_,{id:t.params.id})),r.a.createElement("div",{className:"map__aside"},r.a.createElement(x,null))))}}),r.a.createElement(i.a,{exact:!0,path:"/region/campsites/:id",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{id:t.params.id}),r.a.createElement(C,{id:t.params.id}))}}),r.a.createElement(i.a,{exact:!0,path:"/components"}),r.a.createElement("p",null,"404 error. Site not found. ")),r.a.createElement(y,null))},V=(a(92),a(19)),B=a(10),G=function(e,t){switch(t.type){case"FIND_REVIEWS":return function(e,t){var a=t.reviews;return Object(B.a)(Object(B.a)({},e),{},{reviews:a,loadedReviews:!0})}(e,t);case"FIND_CAMPSITE":return function(e,t){var a=t.currentCampsite;return Object(B.a)(Object(B.a)({},e),{},{currentCampsite:a,loadedListItem:!0})}(e,t);case"FIND_CAMPSITES":return function(e,t){var a=t.campsites;return Object(B.a)(Object(B.a)({},e),{},{campsites:a,loadedList:!0})}(e,t);case"REGIONS":return function(e,t){var a=t.regions;return Object(B.a)(Object(B.a)({},e),{},{regions:a,loadedRegions:!0})}(e,t);case"FILTER_CAMPSITES":return function(e,t){return Object(B.a)(Object(B.a)({},e),{},{filterAmenities:t.filter})}(e,t);case"LIST_AMENITIES":return function(e,t){return Object(B.a)(Object(B.a)({},e),{},{amenities:t.amenities})}(e,t);default:return e}},z={loadedList:!1,loadedListItem:!1,loadedRegions:!1,loadedReviews:!1,campsites:[],currentCampsite:{},regions:[],reviews:[],filterAmenities:[],amenities:[]},H=a(40),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,K=Object(V.d)(G,z,J(Object(V.a)(H.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:K},r.a.createElement(W,null))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9afa6489.chunk.js.map