(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports={title:"CreateForm_title__2zq1h",boton:"CreateForm_boton__ozCVC",formulario:"CreateForm_formulario__199tW",error:"CreateForm_error__3Z3ZY",fuente:"CreateForm_fuente__QyBew",formulariotypo:"CreateForm_formulariotypo__3xOLF",imagen:"CreateForm_imagen__Vri9g"}},13:function(e,t,n){e.exports={title:"Home_title__1CkJI",imagen:"Home_imagen__3DV7n",crear_pais:"Home_crear_pais__16Exw",botonsysearch:"Home_botonsysearch__h1K6y",botonesIniciales:"Home_botonesIniciales__33X5i",Contenedor_filtro:"Home_Contenedor_filtro__2pyhI",button:"Home_button__1oEmL"}},16:function(e,t,n){e.exports={alinear:"Loader_alinear__1vk0v",preloader:"Loader_preloader__2SzgE",girar:"Loader_girar__3DnB3",fintexto:"Loader_fintexto__fdGeg"}},17:function(e,t,n){e.exports={boton:"DetailCountry_boton__Y7MiY",container:"DetailCountry_container__w977F",container_actividades:"DetailCountry_container_actividades__3TcMY",container0:"DetailCountry_container0__yj0Wv",name:"DetailCountry_name__1VeXb",img:"DetailCountry_img__2mKG-",infoContainer:"DetailCountry_infoContainer__3gSsp",imagen:"DetailCountry_imagen__3BnUV"}},19:function(e,t,n){e.exports={landing:"LandingPage_landing__3Kb9O",texto:"LandingPage_texto__2cSnB",button:"LandingPage_button__2564Y",fintexto:"LandingPage_fintexto__1GDj3"}},26:function(e,t,n){e.exports={uli:"Paginado_uli__2qoCZ",nave:"Paginado_nave__3KKtf"}},27:function(e,t,n){e.exports={divGlobal:"Card_divGlobal__2s2um",contenedor_1country:"Card_contenedor_1country__ThGfW"}},28:function(e,t,n){e.exports={button:"SearchBar_button__3ywqm"}},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(21),r=n.n(c),i=(n(46),n(47),n(8)),s=n(3),l=n(19),u=n.n(l),j=n(0);function d(e){return Object(j.jsxs)("div",{className:u.a.landing,children:[Object(j.jsx)("h1",{className:u.a.texto,children:"Buscador De Paises"}),Object(j.jsxs)(i.b,{to:"/home",className:u.a.button,children:[Object(j.jsx)("p",{}),Object(j.jsx)("button",{children:"INGRESAR"}),Object(j.jsx)("p",{})]})," ",Object(j.jsx)("p",{}),Object(j.jsx)("p",{}),Object(j.jsx)("p",{}),Object(j.jsx)("h6",{className:u.a.fintexto,children:"Creado por @kenpulicorre"})]})}var b=n(14),O=n(5),p=n(10),h=n.n(p),m=n(9),f=n(13),v=n.n(f),x=n(16),g=n.n(x);function y(){return Object(j.jsxs)("div",{className:g.a.alinear,children:[Object(j.jsx)("h1",{className:g.a.fintexto,children:"Cargando ..."}),Object(j.jsx)("p",{className:g.a.fintexto}),Object(j.jsx)("div",{className:g.a.fintexto,children:Object(j.jsx)("h1",{className:g.a.preloader,children:" "})})]})}var _=n(53),C="getCountries",N="getActivities",A="getNameCountry",D="getCountryById",S="orderAscDes",F="orderMaxMinPobla",k="filterByContinent",P="filterByActivity",w="restartDetalle",B="postCountry",E="filterByPoblacion20";function I(){return console.log("--Action getCountriesOk!--"),function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.get("http://localhost:3001/countries",{});case 3:return n=e.sent,console.log("--Action getCountriesOk!--dato[0]: ",n.data[0]),n.data.slice(1,5).map((function(e){return e})),[1,2,3,4],e.abrupt("return",t({type:C,payload:n.data}));case 10:e.prev=10,e.t0=e.catch(0),alert("Falla en obtencion de Pias desde Servidor "),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}var L=n(26),V=n.n(L);function M(e){e.paisByPage,e.actualPage,e.setPaginaConBotton;var t,n=e.allCountries,a=[],o=0;if(n.length&&n.length<=9)console.log("entro al 9"),o=1;else if(n.length>9){console.log("entro al mayor a 9");var c=(n.length-9)/10;o=1+(t=Math.ceil(c,1)),console.log("entro al mayor a 9----total de bloques****",t)}for(var r=0;r<o;r++)a.push(r+1);return console.log("arreglo de numeros",a),Object(j.jsx)("nav",{className:V.a.nave,children:Object(j.jsx)("ul",{className:V.a.uli,children:a.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(){return e.setPaginado(t)},children:t})},t)}))})})}var T=n(27),z=n.n(T);function H(e){var t;return Object(j.jsx)("div",{className:z.a.divGlobal,children:null===(t=e.paisToShow)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)(i.b,{to:e.id,className:z.a.contenedor_1country,children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[" ",e.name]}),Object(j.jsx)("img",{src:e.img_flag,alt:""}),Object(j.jsxs)("p",{children:["continente: ",e.continent]})]})})},e.id)}))})}var G=n(28),q=n.n(G);function K(e){var t=Object(m.b)(),n=Object(a.useState)(""),o=Object(O.a)(n,2),c=o[0],r=o[1],i=function(){t(function(e){return console.log("--Action getNameCountry ok!--",e),function(){var t=Object(b.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.get("http://localhost:3001/countries?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:A,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c)),r("")};return Object(j.jsx)("div",{className:q.a.botonsysearch,children:Object(j.jsxs)("p",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Digite pais",value:c,onChange:function(e){return function(e){r(e.target.value.toLowerCase())}(e)}}),Object(j.jsx)("button",{className:q.a.button,onClick:function(e){return i()},children:"searchbar"})]})})}function R(e){var t=Object(m.b)(),n=(Object(s.g)().id,Object(m.c)((function(e){return e.todosCountries}))),o=n;console.log("paises 10----------",o[1]);var c,r,l,u=Object(m.c)((function(e){return e.activities})),d=Object(a.useState)(""),p=Object(O.a)(d,2),f=(p[0],p[1]),x=Object(a.useState)(1),g=Object(O.a)(x,2),C=g[0],A=g[1],D=Object(a.useState)(9),B=Object(O.a)(D,2),L=B[0],V=B[1];if(console.log("paginaactual es",C),1===C){console.log("entor al if =1 es",C);c=(r=C*L)-L,l=n.slice(c,r),console.log("paises a mostrar",l)}else{console.log("entor al if mayor a 1 es",C);c=(r=C*L-1)-L,l=n.slice(c,r),console.log("paises a mostrar",l)}function T(e){t(function(e){return console.log("--Action filterByContinent ok!--",e),{type:E,payload:e}}()),console.log("-------------------------------++++",n),f("se ordeno")}function z(e){e.preventDefault(),A(1),t(function(e){return console.log("--Action orderAscDes ok!--",e),{type:S,payload:e}}(e.target.value)),f("se ordeno".concat(e.target.value))}function G(e){e.preventDefault(),t(function(e){return console.log("--Action orderMaxMinPobla ok!--",e),{type:F,payload:e}}(e.target.value)),f("se ordeno".concat(e.target.value)),A(1)}function q(e){console.log("event.target.name---",e.target.name),console.log("event.target.value---",e.target.value),t(function(e){return console.log("--Action filterByContinent ok!--",e),{type:k,payload:e}}(e.target.value))}function R(e){console.log("event.target.name---",e.target.name),console.log("event.target.value---",e.target.value),t(function(e){return console.log("--Action filterByActivity ok!--",e),{type:P,payload:e}}(e.target.value)),A(1)}Object(a.useEffect)((function(){console.log("---Se ejecuto use effect en componente Home--"),t(I()),t((console.log("--Action getActivitiesOk!--"),function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.get("http://localhost:3001/activity",{});case 3:return n=e.sent,a=n.data.map((function(e){return e})),console.log("actividades: ",a),e.abrupt("return",t({type:N,payload:a}));case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),t(function(e){return console.log("----restartDetalle Ok!"),{type:w,payload:e}}())}),[t]);var Y=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(t),V(t>1?10:9);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.length<1?Object(j.jsx)(y,{}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:v.a.title,children:"\xa1MANIFIESTA TU PAIS!"}),Object(j.jsx)("p",{})]}),Object(j.jsxs)("div",{className:v.a.botonsysearch,children:[Object(j.jsxs)("p",{className:v.a.botonesIniciales,children:[Object(j.jsx)(i.b,{to:"/country",className:v.a.crear_pais,children:"crear Actividad"}),Object(j.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),t(I()),alert("Se cargara paises")}(e)},className:v.a.crear_pais,children:"Recargar Paises"})]}),Object(j.jsx)(K,{})]}),Object(j.jsxs)("div",{className:v.a.Contenedor_filtro,children:[Object(j.jsxs)("div",{className:v.a.select,children:[Object(j.jsx)("h3",{children:"ordenar por alfabeto"}),Object(j.jsxs)("select",{name:"alfabeto",size:"1",onChange:function(e){return z(e)},children:[Object(j.jsx)("option",{value:"Asc",children:"Ascendente"}),Object(j.jsx)("option",{value:"Des",children:"Descendente"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"ordenar por poblacion"}),Object(j.jsxs)("select",{name:"poblacion",size:"1",onChange:function(e){return G(e)},children:[Object(j.jsx)("option",{value:"max",children:"mayor poblacion"}),Object(j.jsx)("option",{value:"min",children:"menos poblacion"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"ordenar poblacio menor 20mill"}),Object(j.jsx)("button",{onClick:function(e){return T()},className:v.a.crear_pais,children:"poblacion20"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"filtrar por continente"}),Object(j.jsxs)("select",{name:"continente",size:"1",onChange:function(e){return q(e)},children:[Object(j.jsx)("option",{value:"All",children:"Todos"}),Object(j.jsx)("option",{value:"Antarctica",children:"Antartica"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Europe",children:"Europa"}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"North America",children:"Norte America"}),Object(j.jsx)("option",{value:"South America",children:"Sur America"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Filtrar por Acividades"}),Object(j.jsxs)("select",{name:"",size:"1",onChange:function(e){return R(e)},children:[Object(j.jsx)("option",{value:"All",children:"Todas"}),null===u||void 0===u?void 0:u.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})]}),Object(j.jsx)(M,{setPaginado:Y,allCountries:n,paisByPage:L,actualPage:C,setPaginaConBotton:function(e){var t=C+e;t<1&&(t=1),Y(t)}}),Object(j.jsx)("div",{}),Object(j.jsx)(H,{paisToShow:l})]})}var Y=n(29),W=n(11),J=n(2),Z=n(12),U=n.n(Z);function X(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e.todosCountries}));Object(a.useEffect)((function(){t(I()),console.log("entrada",d.name)}),[]);var o=Object(a.useState)({}),c=Object(O.a)(o,2),r=c[0],s=c[1],l=Object(a.useState)({name:"",difficulty:"",season:"",duration:"",country:[],countrye:[]}),u=Object(O.a)(l,2),d=u[0],p=u[1];function f(e){e.preventDefault(),p(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},e.target.name,e.target.value))),s(C(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},e.target.name,e.target.value))))}function v(e){e.preventDefault(),console.log("errors",r),p(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},e.target.name,e.target.value))),s(C(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},e.target.name,e.target.value))))}function x(e){if(e.preventDefault(),console.log("lo que voy a despachar es lo sigueinte".concat(d),d),""==d.name)return s(C(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},"name","")))),alert("debe de agregar cada valor!!");t(function(e){return console.log("--Action postCountry!--",e),function(){var t=Object(b.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.post("http://localhost:3001/activity",e);case 3:return a=t.sent,t.abrupt("return",n({type:B,payload:a}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(d)),alert("se creo actividad..."),p({name:"",difficulty:"",season:"",duration:"",country:[],countrye:[]})}var g=/^[a-z]+$/,y=/^[0-9]+$/;function C(e){var t={};return e.name&&g.test(e.name)?e.duration>10||""===e.duration||!y.test(e.duration)?t.duration="Debe ser un valor entre 1 y 10":""===e.difficulty?t.difficulty="Debe seleccionar la dificultad":""===e.season?t.season="Debe seleccionar la estacion":0===e.country.length&&(t.country="Se debe seleccionar un pais"):t.name="Solo se permite caracteres del alfabeto (a hata la z), no se permite vacio",t}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:U.a.title,children:"Seccion de Creacion de Actividades"}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:U.a.boton,children:"VOLVER"})}),Object(j.jsxs)("form",{action:"",onSubmit:function(e){return x(e)},className:U.a.formulario,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"",children:"Nombre:"}),Object(j.jsx)("input",{type:"text",value:d.name,name:"name",placeholder:"Nombre...",onChange:function(e){return f(e)}}),Object(j.jsx)("label",{htmlFor:"",className:U.a.error,children:r.name&&Object(j.jsx)("p",{children:r.name})})]})," ",Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"",children:"Duracion (Horas):"}),Object(j.jsx)("input",{type:"text",value:d.duration,name:"duration",placeholder:"Duracion..",onChange:function(e){return f(e)}}),Object(j.jsx)("label",{htmlFor:"",className:U.a.error,children:r.duration&&Object(j.jsx)("p",{children:r.duration})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"",children:"Dificultad:"}),Object(j.jsxs)("select",{name:"difficulty",id:"",onChange:function(e){return v(e)},children:[Object(j.jsx)("option",{value:"",children:"seleccione"}),Object(j.jsx)("option",{value:"1",children:"Muy Baja"}),Object(j.jsx)("option",{value:"2",children:"Baja"}),Object(j.jsx)("option",{value:"3",children:"Intermedia"}),Object(j.jsx)("option",{value:"4",children:"Alta"}),Object(j.jsx)("option",{value:"5",children:"Muy Alta"})]}),Object(j.jsx)("label",{htmlFor:"",className:U.a.error,children:r.difficulty&&Object(j.jsx)("p",{children:r.difficulty})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"",children:"Estacion:"}),Object(j.jsxs)("select",{name:"season",id:"",onChange:function(e){return v(e)},children:[Object(j.jsx)("option",{value:"",children:"seleccione"}),Object(j.jsx)("option",{value:"Verano",children:"Verano"}),Object(j.jsx)("option",{value:"Oto\xf1o",children:"Oto\xf1o"}),Object(j.jsx)("option",{value:"Invierno",children:"Invierno"}),Object(j.jsx)("option",{value:"Primavera",children:"Primavera"})]}),Object(j.jsx)("label",{htmlFor:"",className:U.a.error,children:r.season&&Object(j.jsx)("p",{children:r.season})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"",children:"Pais:"}),Object(j.jsxs)("select",{name:"country",id:"",onChange:function(e){return function(e){e.preventDefault(),console.log("encontro el pais en estado????:",d.country),console.log("encontro el value????:",e.target.value);var t,n=e.target.value,a=null;d.country.length>0&&(a=d.country.find((function(e){return e===n}))?d.country.find((function(e){return e===n})):""),console.log("encontro el pais????:",a),a?alert("el pais ya se digito"):p(Object(J.a)(Object(J.a)({},d),{},(t={},Object(W.a)(t,"countrye",[].concat(Object(Y.a)(d.countrye),[e.target.value])),Object(W.a)(t,"country",[].concat(Object(Y.a)(d.country),[e.target.value])),t))),s(C(Object(J.a)(Object(J.a)({},d),{},Object(W.a)({},e.target.name,e.target.value))))}(e)},children:[Object(j.jsx)("option",{value:"",children:"Seleccione pais"}),n.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(j.jsx)("label",{htmlFor:"",className:U.a.error,children:r.country&&Object(j.jsx)("p",{children:r.country})}),Object(j.jsx)("div",{className:U.a.formulariotypo,children:d.country.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",onClick:function(){return function(e){var t;console.log("dio click en delete elemento",e);var n=d.country.filter((function(t){return t!==e}));console.log("dio click en delete y el filtro es---",n),p(Object(J.a)(Object(J.a)({},d),{},(t={},Object(W.a)(t,"countrye",n),Object(W.a)(t,"country",n),t))),s(C(Object(J.a)(Object(J.a)({},d),{},{country:n})))}(e)},className:U.a.fuente,children:"x"}),Object(j.jsx)("span",{children:e}),Object(j.jsx)("p",{})]},e)}))}),Object(j.jsx)("div",{})]}),Object(j.jsx)("button",{type:"submit",className:U.a.boton,disabled:!!Object.keys(r).length,children:"Crear"})]})]})}var $=n(17),Q=n.n($),ee=n.p+"static/media/bandera6.6f7d98dc.gif";function te(e){var t=Object(m.b)(),n=Object(s.g)().id;Object(a.useEffect)((function(){t(function(e){return console.log("--Action getCountryById!--",e),function(){var t=Object(b.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.get("http://localhost:3001/countries/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:D,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[n,t]);var o,c=Object(m.c)((function(e){return e.detalle}));return console.log("las actividades son y:",c.activities),c.activities&&(o=c.activities.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("li",{children:["Nombre: ",e.name," "]}),Object(j.jsxs)("li",{children:["Dificultad: ",e.difficulty," "]}),Object(j.jsxs)("li",{children:["Duracion: ",e.duration," "]}),Object(j.jsxs)("li",{children:["Estacion: ",e.season," "]})]},e.id)}))),Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:Q.a.boton,children:"VOLVER"})}),Object(j.jsxs)("div",{className:Q.a.container,children:[Object(j.jsxs)("li",{children:["Nombre del pais: ",c.name]}),Object(j.jsxs)("li",{children:["Codigo del pais: ",c.id]}),Object(j.jsxs)("li",{children:["Continente: ",c.continent]}),Object(j.jsxs)("li",{children:["Subregi\xf3n: ",c.subregion]}),Object(j.jsxs)("li",{children:["Capital: ",c.capital]}),Object(j.jsxs)("li",{children:["Area: ",c.area," Km2"]}),Object(j.jsxs)("li",{children:["Poblacion: ",c.people]}),Object(j.jsx)("img",{src:c.img_flag,className:Q.a.imagen,alt:"no hay imagen"}),Object(j.jsx)("h2",{children:"Actividades"}),c.activities&&0===c.activities.length?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"No se han creado actividades para este pais"})}):Object(j.jsx)("div",{className:Q.a.container_actividades,children:o})]}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:Q.a.boton,children:"VOLVER"})})]})}var ne=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"imagen",children:[Object(j.jsx)("img",{src:ee,alt:""}),Object(j.jsx)("img",{src:ee,alt:""}),Object(j.jsx)("img",{src:ee,alt:""}),Object(j.jsx)("img",{src:ee,alt:""})]}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(s.a,{path:"/home",element:Object(j.jsx)(R,{})}),Object(j.jsx)(s.a,{path:"/home/:id",element:Object(j.jsx)(te,{})}),Object(j.jsx)(s.a,{path:"/country",element:Object(j.jsx)(X,{})})]})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))},oe=n(22),ce=n(40),re=n(41),ie={todosCountries:[],todosCountriesSinFiltro:[],activities:[],detalle:[]};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(J.a)(Object(J.a)({},e),{},{todosCountries:t.payload,todosCountriesSinFiltro:t.payload});case N:return Object(J.a)(Object(J.a)({},e),{},{activities:t.payload});case A:return Object(J.a)(Object(J.a)({},e),{},{todosCountries:t.payload});case D:return Object(J.a)(Object(J.a)({},e),{},{detalle:t.payload});case S:var n;return"Asc"===t.payload?(n=e.todosCountries.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),console.log(">>ascendete  ordenados",n)):"Des"===t.payload&&(n=e.todosCountries.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0})),console.log("<<descentete ordenados",n)),Object(J.a)(Object(J.a)({},e),{},{todosCountries:n});case F:var a;return"min"===t.payload?(a=e.todosCountries.sort((function(e,t){return Number(e.people)>Number(t.people)?1:Number(e.people)<Number(t.people)?-1:0})),console.log(">>ascendete  ordenados-----------people\n",a.map((function(e){return e.people})))):"max"===t.payload&&(a=e.todosCountries.sort((function(e,t){return Number(e.people)>Number(t.people)?-1:Number(e.people)<Number(t.people)?1:0}))),Object(J.a)(Object(J.a)({},e),{},{todosCountries:a});case k:var o,c=e.todosCountriesSinFiltro;return"All"===t.payload?(console.log("entro en el si*****************"),o=c,Object(J.a)(Object(J.a)({},e),{},{todosCountries:o})):(console.log("entro en el no*****************"),o=c.filter((function(e){return e.continent===t.payload})),Object(J.a)(Object(J.a)({},e),{},{todosCountries:o}));case P:var r,i=e.todosCountriesSinFiltro;return"All"===t.payload?r=i:(r=i.filter((function(e){return e.activities.map((function(e){return e.name})).includes(t.payload)})),console.log("el pais que contiene esa actividad filtrada es~~~~~~~~~",r)),Object(J.a)(Object(J.a)({},e),{},{todosCountries:r});case w:return Object(J.a)(Object(J.a)({},e),{},{detalle:{}});case B:return Object(J.a)({},e);case E:var s;return s=e.todosCountries.filter((function(e){return e.people<2e7})),console.log("++++++++++hola++",s),Object(J.a)(Object(J.a)({},e),{},{todosCountries:s});default:return e}},le=Object(oe.createStore)(se,Object(ce.composeWithDevTools)(Object(oe.applyMiddleware)(re.a)));r.a.render(Object(j.jsx)(m.a,{store:le,children:Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(ne,{})})}),document.getElementById("root")),ae()}},[[72,1,2]]]);
//# sourceMappingURL=main.f36248b3.chunk.js.map