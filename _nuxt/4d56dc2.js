(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("8100bbec",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n(198)},207:function(t,e,n){(e=n(34)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);"]),e.push([t.i,'.frame[data-v-129ba5b1]{width:400px;height:400px;margin-top:-200px;margin-left:-200px;border-radius:2px;box-shadow:inset 0 3px 3px 0 rgba(0,0,0,.1),inset 0 -3px 3px 0 rgba(0,0,0,.1);overflow:hidden;background:#c7d6e1;color:#333;font-family:"Open Sans",Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.card[data-v-129ba5b1],.frame[data-v-129ba5b1]{position:absolute;top:50%;left:50%}.card[data-v-129ba5b1]{width:60%;height:40%;border-radius:5px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:translate(-50%,-50%);box-shadow:4px 8px 12px 0 rgba(0,0,0,.1)}.triangle[data-v-129ba5b1]{width:0;height:0;position:absolute;top:0;left:calc(100% - 50px);margin:auto;box-sizing:border-box;border-radius:0 2px 0 0;border-color:#8392a0 #8392a0 transparent transparent;border-style:solid;border-width:25px}.number[data-v-129ba5b1]{position:absolute;top:8.3333333333px;right:12.5px;text-align:right;font-size:13px;line-height:13px;font-weight:600;color:#fff}.texts[data-v-129ba5b1]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;height:100%;width:100%}.title[data-v-129ba5b1]{font-size:15px;font-weight:600;margin-bottom:10px}.content[data-v-129ba5b1],.title[data-v-129ba5b1]{color:#616e7d;text-align:center}.content[data-v-129ba5b1]{font-size:13px}.button[data-v-129ba5b1]{width:100%;height:40%;background:#3ca7fb;border-radius:0 0 2px 2px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:200;color:#fff;text-transform:uppercase;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button[data-v-129ba5b1]:hover{background:#2d93e3}.active[data-v-129ba5b1]{transition:opacity .5s ease-in;opacity:1}.inactive[data-v-129ba5b1]{transform:translate(-50%,-50%) scale(1.5);transform-origin:center;transition:all .6s ease-out;visibility:hidden;opacity:0}',""]),t.exports=e},222:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({data:function(){return{page:0,texts:[{title:"The couch",content:"If you want to grow, get outside your comfort zone."},{title:"Failing is learning",content:"Pick yourself up, dust yourself off, and start again."},{title:"Flowers and rainbows",content:"Always be yourself, unless you can be a unicorn."}]}},computed:{title:function(){return this.texts[this.page].title},content:function(){return this.texts[this.page].content}},methods:{nextPage:function(){this.page++,this.page=this.page%3}}}),r=(n(206),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame"},t._l(t.texts,(function(e,o){return n("div",{key:o,staticClass:"card",class:{active:t.page===o,inactive:t.page!==o}},[n("div",{staticClass:"triangle"}),t._v(" "),n("div",{staticClass:"number"},[t._v(t._s(o+1))]),t._v(" "),n("div",{staticClass:"texts"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(e.content))])]),t._v(" "),n("div",{staticClass:"button",on:{click:t.nextPage}},[t._v("ok")])])})),0)}),[],!1,null,"129ba5b1",null);e.default=component.exports}}]);