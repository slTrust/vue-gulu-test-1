(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,n,s){"use strict";var a=s(4),r=s(15),e=s(16),c=s(76),o=s(74),i=s(6),l=s(96).f,p=s(97).f,u=s(9).f,f=s(98).trim,g=a.Number,h=g,v=g.prototype,d="Number"==e(s(75)(v)),b="trim"in String.prototype,x=function(t){var n=o(t,!1);if("string"==typeof n&&n.length>2){var s,a,r,e=(n=b?n.trim():f(n,3)).charCodeAt(0);if(43===e||45===e){if(88===(s=n.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(n.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+n}for(var c,i=n.slice(2),l=0,p=i.length;l<p;l++)if((c=i.charCodeAt(l))<48||c>r)return NaN;return parseInt(i,a)}}return+n};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof g&&(d?i(function(){v.valueOf.call(s)}):"Number"!=e(s))?c(new h(x(n)),s,g):x(n)};for(var _,w=s(8)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;w.length>m;m++)r(h,_=w[m])&&!r(g,_)&&u(g,_,p(h,_));g.prototype=v,v.constructor=g,s(11)(a,"Number",g)}},163:function(t,n,s){},164:function(t,n,s){},165:function(t,n,s){},197:function(t,n,s){"use strict";var a=s(163);s.n(a).a},198:function(t,n,s){"use strict";var a=s(3),r=s(78)(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(100)("includes")},199:function(t,n,s){"use strict";var a=s(3),r=s(200);a(a.P+a.F*s(201)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},200:function(t,n,s){var a=s(80),r=s(18);t.exports=function(t,n,s){if(a(n))throw TypeError("String#"+s+" doesn't accept regex!");return String(r(t))}},201:function(t,n,s){var a=s(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(s){try{return n[a]=!1,!"/./"[t](n)}catch(t){}}return!0}},202:function(t,n,s){"use strict";var a=s(164);s.n(a).a},203:function(t,n,s){"use strict";var a=s(165);s.n(a).a},226:function(t,n,s){"use strict";s.r(n);s(14),s(25),s(54),s(154);var a={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]},rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},r=(s(197),s(1)),e=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"4f1c5465",null).exports,c=s(10),o=(s(198),s(199),s(20),s(30),function(t){var n=Object.keys(t),s=!0;return n.forEach(function(t){["span","offset"].includes(t)||(s=!1)}),s}),i={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:o},narrowPc:{type:Object,validator:o},pc:{type:Object,validator:o},widePc:{type:Object,validator:o}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,a=this.narrowPc,r=this.pc,e=this.widePc,o=this.createClasses;return Object(c.a)(o({span:t,offset:n})).concat(Object(c.a)(o(s,"ipad-")),Object(c.a)(o(a,"narrow-pc-")),Object(c.a)(o(r,"pc-")),Object(c.a)(o(e,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},l=(s(202),{components:{"g-row":e,"g-col":Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"5d60a95b",null).exports},data:function(){return{content:'\n<g-row>\n    <g-col span="4">\n        <p class="box1"></p>\n    </g-col>\n    <g-col span="20">\n        <p class="box2"></p>\n    </g-col>\n</g-row>\n<g-row>\n    <g-col span="6">\n        <p class="box2"></p>\n    </g-col>\n    <g-col span="6">\n        <p class="box1"></p>\n    </g-col>\n    <g-col span="6">\n        <p class="box2"></p>\n    </g-col>\n    <g-col span="6">\n        <p class="box1"></p>\n    </g-col>\n</g-row>\n\n<g-row>\n    <g-col span="8">\n        <p class="box1"></p>\n    </g-col>\n    <g-col span="8">\n        <p class="box2"></p>\n    </g-col>\n    <g-col span="8">\n        <p class="box1"></p>\n    </g-col>\n</g-row>\n                '}}}),p=(s(203),Object(r.a)(l,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"xxx"},[s("g-row",[s("g-col",{attrs:{span:"4"}},[s("p",{staticClass:"box1"})]),t._v(" "),s("g-col",{attrs:{span:"20"}},[s("p",{staticClass:"box2"})])],1),t._v(" "),s("p",{staticClass:"temp"}),t._v(" "),s("g-row",[s("g-col",{attrs:{span:"6"}},[s("p",{staticClass:"box2"})]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("p",{staticClass:"box1"})]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("p",{staticClass:"box2"})]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("p",{staticClass:"box1"})])],1),t._v(" "),s("p",{staticClass:"temp"}),t._v(" "),s("g-row",[s("g-col",{attrs:{span:"8"}},[s("p",{staticClass:"box1"})]),t._v(" "),s("g-col",{attrs:{span:"8"}},[s("p",{staticClass:"box2"})]),t._v(" "),s("g-col",{attrs:{span:"8"}},[s("p",{staticClass:"box1"})])],1),t._v(" "),s("p",{staticClass:"temp"}),t._v(" "),s("pre",[t._v("        "),s("code",[t._v(t._s(t.content))]),t._v("\n    ")])],1)},[],!1,null,null,null));n.default=p.exports}}]);