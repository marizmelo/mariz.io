webpackJsonp([1],{"+Khh":function(t,e){},"1Z7r":function(t,e){},BqXt:function(t,e){},H02k:function(t,e){},Jswg:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"mm-container",attrs:{id:"navigation"}},[e("div",[e("img",{attrs:{src:"/static/marizmelo-logo.svg"}}),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("Work")])],1),this._v(" "),this._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/static/mariz.pdf",target:"_blank"}},[this._v("Get in touch")])])}]};var n=a("VU/8")({name:"",data:function(){return{}}},o,!1,function(t){a("RoVU")},"data-v-6a2f5c9c",null).exports,i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"mm-container"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.linkedin.com/in/mariz-melo-33111131/",target:"_blank"}},[e("img",{attrs:{src:"/static/social/social-linkedin.svg"}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/marizmelo",target:"_blank"}},[e("img",{attrs:{src:"/static/social/social-github.svg"}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/marizmelo",target:"_blank"}},[e("img",{attrs:{src:"/static/social/social-dribbble.svg"}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/marizmelo",target:"_blank"}},[e("img",{attrs:{src:"/static/social/social-twitter.svg"}})])])])])}]};var s=a("VU/8")({name:"",data:function(){return{}}},i,!1,function(t){a("Jswg")},"data-v-5b1679fe",null).exports,c={components:{Navigation:n,Footer:s},name:"App"},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigation"),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var d=a("VU/8")(c,l,!1,function(t){a("hLku")},null,null).exports,u=a("/ocq"),v={name:"",props:{work:{},activate:Boolean},data:function(){return{logo:"",description:"",background:"",color:"",preview:"",location:""}},methods:{backgroundStyles:function(t,e,a){var r={"background-color":""+e,color:""+a};return t&&(r["background-image"]="url("+t+")"),r}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"work-card-container",class:t.activate?"active":"",attrs:{to:"/work/"+t.work.location}},[a("div",{staticClass:"work-card",style:t.backgroundStyles(t.work.background,t.work.color,t.work.text)},[a("div",{staticClass:"card-title"},[a("img",{attrs:{src:t.work.logo,alt:t.work.description}}),t._v(" "),a("h2",[t._v(t._s(t.work.description))])]),t._v(" "),a("div",{staticClass:"card-preview",style:t.backgroundStyles(t.work.preview)})])])},staticRenderFns:[]};var h=a("VU/8")(v,p,!1,function(t){a("ZGXY")},"data-v-1c3a6554",null).exports,m=a("QkBs"),g=a.n(m),f={components:{WorkCard:h},name:"",data:function(){return{data:g.a}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"work"}},[e("div",{staticClass:"mm-container"},[e("div",{staticClass:"grid-container"},this._l(this.data,function(t){return e("WorkCard",{key:t.location,attrs:{work:t}})}),1)])])},staticRenderFns:[]};var w={components:{Work:a("VU/8")(f,k,!1,function(t){a("H02k")},"data-v-78b2b4c8",null).exports},name:"",data:function(){return{}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage"}},[this._m(0),this._v(" "),e("Work")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mm-container"},[e("h1",[this._v("Hello! I’m "),e("b",[this._v("Mariz Melo")]),this._v(" "),e("span",{staticClass:"role_1"},[this._v(", a product designer")]),e("span",{staticClass:"role_2"},[this._v(", a systems thinker")])])])}]};var b=a("VU/8")(w,_,!1,function(t){a("+Khh")},"data-v-927930aa",null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.content.content)}})},staticRenderFns:[]};var x={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:this.content.url,width:this.content.width||"100%",alt:this.content.alt}})},staticRenderFns:[]};var y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("iframe",{attrs:{width:"100%",height:this.content.height||400,src:this.content.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),this._v(" "),e("small",{staticClass:"caption"},[e("i",[this._v(this._s(this.content.caption))])])])},staticRenderFns:[]};var R={components:{WorkCard:h,TextContent:a("VU/8")({props:{content:{}},name:"TextContent",data:function(){return{}}},C,!1,function(t){a("cJoB")},"data-v-672e0b15",null).exports,Images:a("VU/8")({name:"",props:{content:{}},data:function(){return{}}},x,!1,function(t){a("BqXt")},"data-v-9f2015de",null).exports,Youtube:a("VU/8")({props:{content:{}},name:"Youtube",data:function(){return{}}},y,!1,function(t){a("RViA")},"data-v-9eb13640",null).exports,Footer:s},name:"",data:function(){return{data:{work:""}}},created:function(){var t=this;this.axios.get("/static/work/"+this.$route.params.id+"/data.json").then(function(e){t.data=e.data}).catch(function(t){})}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mm-container mm-header"},[t.data.work.url?a("a",{staticClass:"link",attrs:{href:t.data.work.url,target:"_blank"}},[t._v("Visit project")]):t._e(),t._v(" "),a("WorkCard",{attrs:{work:t.data.work,activate:!0}})],1),t._v(" "),a("div",{staticClass:"mm-container"},[a("div",{staticClass:"spacer"},t._l(t.data.components,function(t,e){return a(t.name,{key:e,tag:"component",staticClass:"spacer",attrs:{content:t.props}})}),1)])])},staticRenderFns:[]};var V=a("VU/8")(R,E,!1,function(t){a("1Z7r")},"data-v-4fab3840",null).exports;r.a.use(u.a);var F=new u.a({routes:[{path:"/",name:"Homepage",component:b},{path:"/work/:id",name:"Work",component:V}],scrollBehavior:function(t,e,a){return{x:0,y:0}}}),$=a("mtWM"),U=a.n($),j=a("Rf8U"),W=a.n(j);r.a.use(W.a,U.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:F,components:{App:d},template:"<App/>"})},QkBs:function(t,e){t.exports=[{location:"oracle-com",logo:"/static/work/oracle-com/logo.svg",description:"Oracle corporate website",preview:"/static/work/oracle-com/preview.jpg",background:"/static/work/oracle-com/background.jpg",color:"#F0E8C9"},{location:"oracle-redwood",logo:"/static/work/oracle-redwood/logo.svg",description:"Oracle Redwood Design System",preview:"/static/work/oracle-redwood/preview.jpg",background:"/static/work/oracle-redwood/background.jpg",color:"#312D2A",text:"white"},{location:"oracle-cloud",logo:"/static/work/oracle-cloud/logo.svg",description:"Oracle Cloud Web Console",preview:"/static/work/oracle-cloud/preview.jpg",background:"/static/work/oracle-cloud/background.jpg",color:"#312D2A"},{location:"medallia-voices",logo:"/static/work/medallia-voices/logo.svg",description:"The voice of customers in the palm of your hands",preview:"/static/work/medallia-voices/preview.jpg",background:"",color:"#1D2C99",text:"white"},{location:"medallia-alchemy",logo:"/static/work/medallia-alchemy/logo.svg",description:"Medallia Experience Cloud advanced Design System",preview:"/static/work/medallia-alchemy/preview.jpg",background:"",color:"#4050C6",text:"white"},{location:"apple-watch",logo:"/static/work/apple-watch/logo.svg",description:"Apple Watch try-on campaign survey",preview:"/static/work/apple-watch/preview.jpg",background:"",color:"black",text:"white"}]},RViA:function(t,e){},RoVU:function(t,e){},ZGXY:function(t,e){},cJoB:function(t,e){},hLku:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8539ebe4b3dd727edcd8.js.map