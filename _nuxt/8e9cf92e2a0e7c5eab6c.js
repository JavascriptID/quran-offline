(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(t,e,a){var n=a(156);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(27).default)("569087bc",n,!0,{})},152:function(t,e,a){"use strict";var n=a(5),i=a(18),r=a(20),s=a(90),o=a(48),l=a(13),d=a(49).f,c=a(64).f,_=a(11).f,u=a(153).trim,h=n.Number,f=h,v=h.prototype,p="Number"==r(a(63)(v)),m="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var a,n,i,r=(e=m?e.trim():u(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,l=e.slice(2),d=0,c=l.length;d<c;d++)if((s=l.charCodeAt(d))<48||s>i)return NaN;return parseInt(l,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(p?l(function(){v.valueOf.call(a)}):"Number"!=r(a))?s(new f(x(e)),a,h):x(e)};for(var g,b=a(8)?d(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;b.length>I;I++)i(f,g=b[I])&&!i(h,g)&&_(h,g,c(f,g));h.prototype=v,v.constructor=h,a(14)(n,"Number",h)}},153:function(t,e,a){var n=a(7),i=a(19),r=a(13),s=a(154),o="["+s+"]",l=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),c=function(t,e,a){var i={},o=r(function(){return!!s[t]()||"​"!="​"[t]()}),l=i[t]=o?e(_):s[t];a&&(i[a]=l),n(n.P+n.F*o,"String",i)},_=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=c},154:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},155:function(t,e,a){"use strict";var n=a(147);a.n(n).a},156:function(t,e,a){(t.exports=a(26)(!1)).push([t.i,"\n.detail__header[data-v-75e7d4ac] {\n  width: 95%;\n  margin: 0 auto;\n  padding: 0.25em;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.detail__header_index[data-v-75e7d4ac] {\n    background-color: #52e0a1;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100px;\n    padding: .25em .5em;\n}\n.detail__header_content[data-v-75e7d4ac] {\n    background-color: #000;\n    color: #52e0a1;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: right;\n    height: 100px;\n    padding: .25em .5em;\n}\n.detail__header_content small[data-v-75e7d4ac] {\n      font-size: 1rem;\n}\n.detail__content[data-v-75e7d4ac] {\n  margin-bottom: 100px;\n}\n.detail__footer[data-v-75e7d4ac] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: table;\n  margin: 0;\n  height: 60px;\n  text-align: center;\n  width: 100%;\n  background: #41b883;\n  color: #000;\n}\n.detail__footer_item[data-v-75e7d4ac] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.detail__footer_title[data-v-75e7d4ac] {\n    font-size: 2rem;\n}\n.detail__footer_prev[data-v-75e7d4ac], .detail__footer_next[data-v-75e7d4ac] {\n    width: 50px;\n}\n.ayah__arabic[data-v-75e7d4ac] {\n  font-size: 2rem;\n  width: 80%;\n  float: right;\n  text-align: right;\n}\n.ayah__translation[data-v-75e7d4ac] {\n  font-size: 0.9rem;\n  width: 100%;\n  text-align: left;\n  font-style: italic;\n  margin-top: 1.5em;\n}\n",""])},158:function(t,e,a){"use strict";a.r(e);a(152),a(1),a(2),a(3);var n=a(62),i=a(17),r={name:"PageSurahDetail",data:function(){return{surahDetail:{number:0,name:"",name_latin:"",number_of_ayah:"",text:[],translations:{id:{name:"",text:""}}},loading:!0}},computed:{surahId:function(){return Number(this.$route.params.surahid)},isValidSurah:function(){return this.surahId>0&&this.surahId<=114},isHavePrev:function(){return this.surahId>1},isHaveNext:function(){return this.surahId<114}},mounted:function(){this.fetchSurahById(this.surahId)},methods:{getTranslation:function(t){return this.surahDetail.translations.id.text[t]},fetchSurahById:function(t){var e=this;fetch(n.a.SURAH_BY_ID(t)).then(function(t){return t.json()}).then(function(t){e.surahDetail=t[e.surahId],i.a.$emit("changeSurah",e.surahDetail.name_latin),setTimeout(function(){e.loading=!1},1e3)})}}},s=(a(155),a(12)),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",{staticClass:"detail"},[a("div",{staticClass:"detail__header"},[a("div",{staticClass:"detail__header_index"},[t._v("\n        "+t._s(t.surahDetail.number)+"\n      ")]),t._v(" "),a("div",{staticClass:"detail__header_content"},[a("div",[t._v(t._s(t.surahDetail.name))]),t._v(" "),a("small",[t._v("("+t._s(t.surahDetail.name_latin)+" - "+t._s(t.surahDetail.translations.id.name)+")")])])]),t._v(" "),a("div",{staticClass:"detail__content"},t._l(t.surahDetail.text,function(e,n){return a("div",{key:n,staticClass:"ayah block_content",attrs:{id:"ayah-"+n}},[a("div",{staticClass:"ayah__index tag_index"},[t._v("\n          "+t._s(Number(n))+"\n        ")]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"ayah__arabic"},[t._v("\n            "+t._s(e)+"\n          ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"ayah__translation"},[t._v("\n            "+t._s(t.getTranslation(n))+"\n          ")])])])})),t._v(" "),a("div",{staticClass:"detail__footer"},[a("nuxt-link",{staticClass:"detail__footer_item detail__footer_prev",attrs:{to:"/"+(t.surahId-1)}},[t.isHavePrev?a("svg",{attrs:{width:"30px",height:"30px",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}})]):t._e()]),t._v(" "),a("div",{staticClass:"detail__footer_item detail__footer_title"},[t._v("\n        "+t._s(t.surahDetail.name)+"\n      ")]),t._v(" "),a("nuxt-link",{staticClass:"detail__footer_item detail__footer_next",attrs:{to:"/"+(t.surahId+1)}},[t.isHaveNext?a("svg",{attrs:{width:"30px",height:"30px",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"}})]):t._e()])],1)])])},[],!1,null,"75e7d4ac",null);o.options.__file="_surahid.vue";e.default=o.exports}}]);