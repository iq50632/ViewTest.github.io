(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("e5be734c",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";n(209)},213:function(t,e,n){var o=n(81)(!1);o.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=o},218:function(t,e,n){"use strict";n.r(e);var o={layout:"user",data:function(){return{person:[{number:"0711",name:"Hanhan",sax:1,staus:"Admin"},{number:"0721",name:"Harry",sax:0,staus:"Tourist"},{number:"0812",name:"Amy",sax:1,staus:"Tourist"},{number:"0126",name:"David",sax:0,staus:"Tourist"}],label:function(t){return t("div",[t("span","群組聊天室"),t("Badge",{props:{count:3}})])}}}},r=(n(212),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Row",[n("Col",{attrs:{span:"8"}},[t._v("\n    "+t._s(t.person.length)+"\n    ")]),t._v(" "),n("Col",{attrs:{span:"16"}},[n("Tabs",{staticStyle:{width:"100%"},attrs:{value:"name1"}},[n("TabPane",{attrs:{label:t.label,name:"name1"}},[t._v("群組聊天室的内容")]),t._v(" "),t._l(t.person,(function(i){return n("TabPane",{key:i.id,attrs:{label:i.name,name:"name2"}},[t._v("标签二的内容")])}))],2)],1),t._v(" "),n("Button",{attrs:{type:"info",ghost:""}},[t._v("Info")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);