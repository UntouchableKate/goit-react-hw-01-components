(this.webpackJsonpreact_1_mod=this.webpackJsonpreact_1_mod||[]).push([[0],[,function(e,a,t){e.exports={"font-lato":"Lato, sans-serif",wrapper:"Profile_wrapper__1HWUG",imgWrp:"Profile_imgWrp__sLAb1",img:"Profile_img__2lIkT",name:"Profile_name__1uYGT",greyTitle:"Profile_greyTitle__2yXU1",list:"Profile_list__1Y66i",stats:"Profile_stats__s9_a4",span:"Profile_span__3Wm2W"}},function(e,a,t){e.exports={"font-muli":"Muli, sans-serif",table:"TransactionHistory_table__3djxs",thead:"TransactionHistory_thead__3RIh6",tbody:"TransactionHistory_tbody__1uHIU",tr:"TransactionHistory_tr__1j2Lq"}},function(e,a,t){e.exports={"font-stats":"Noto Sans, sans-serif",section:"Stats_section__2dQwk",title:"Stats_title__3MCAl",list:"Stats_list__393hW",li:"Stats_li__2n0Yc",format:"Stats_format__3PioE",percent:"Stats_percent__20DbA"}},function(e,a,t){e.exports={list:"FriendList_list__3FFBP",li:"FriendList_li__2FqEn",online:"FriendList_online__Hms9V",offline:"FriendList_offline__2q7b0 FriendList_online__Hms9V",img:"FriendList_img__s9H7J"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),c=t.n(s),i=(t(15),t(1)),l=t.n(i),m=function(e,a){var t=e.user;return r.a.createElement("div",{className:l.a.imgWrp},r.a.createElement("img",{className:l.a.img,src:t.avatar,alt:a}),r.a.createElement("p",{className:l.a.name},t.name),r.a.createElement("p",{className:l.a.greyTitle},"@",t.tag),r.a.createElement("p",{className:l.a.greyTitle},t.location))};m.defaultProps={alt:"user photo"};var o=m,d=function(e){var a=e.user;return r.a.createElement("ul",{className:l.a.list},r.a.createElement("li",{key:a.id,className:l.a.stats},r.a.createElement("span",null,"Followers"),r.a.createElement("span",{className:l.a.span},a.stats.followers)),r.a.createElement("li",{key:a.id,className:l.a.stats},r.a.createElement("span",null,"Views"),r.a.createElement("span",{className:l.a.span},a.stats.views)),r.a.createElement("li",{key:a.id,className:l.a.stats},r.a.createElement("span",null,"Likes"),r.a.createElement("span",{className:l.a.span},a.stats.likes)))},u=function(e){var a=e.user;return r.a.createElement("div",{className:l.a.wrapper},r.a.createElement(o,{user:a}),r.a.createElement(d,{user:a}))},p=t(3),f=t.n(p),_=function(e){var a=e.stat;return r.a.createElement("li",{key:a.id,className:f.a.li},r.a.createElement("span",{className:f.a.format},a.label),r.a.createElement("span",{className:f.a.percent},a.percentage,"%"))},y=function(e){var a=e.title,t=e.stats;return r.a.createElement("section",{className:f.a.section},r.a.createElement("h2",{className:f.a.title},a),r.a.createElement("ul",{className:f.a.list},t.map((function(e){return r.a.createElement(_,{stat:e,key:e.id})}))))};y.defaultProps={title:"Upload stats"};var b=y,E=t(4),w=t.n(E),N=function(e){var a=e.friend;return r.a.createElement("li",{key:a.id,className:w.a.li},r.a.createElement("span",{className:a.isOnline?w.a.online:w.a.offline},a.isOnline),r.a.createElement("img",{src:a.avatar,alt:"",width:"48",className:w.a.img}),r.a.createElement("p",null,a.name))},g=function(e){var a=e.friends;return r.a.createElement("ul",{className:w.a.list},a.map((function(e){return r.a.createElement(N,{friend:e,key:e.id})})))},h=t(2),v=t.n(h),k=function(e){var a=e.items;return r.a.createElement("table",{className:v.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:v.a.thead},"Type"),r.a.createElement("th",{className:v.a.thead},"Amount"),r.a.createElement("th",{className:v.a.thead},"Currency"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id,className:v.a.tr},r.a.createElement("td",{className:v.a.tbody},e.type[0].toUpperCase()+e.type.slice(1)),r.a.createElement("td",{className:v.a.tbody},e.amount),r.a.createElement("td",{className:v.a.tbody},e.currency))}))))},P=t(7),L=t(8),U=t(9),O=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{user:P}),r.a.createElement(b,{title:"Upload stats",stats:O}),r.a.createElement(g,{friends:L}),r.a.createElement(k,{items:U}))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.75f97320.chunk.js.map