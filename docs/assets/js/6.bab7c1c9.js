(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{320:function(e,l,t){"use strict";t.r(l);t(13),t(43);var a=t(21),s={data:function(){return{options:{size:"small",labelWidth:100},formData:{state:"默认渲染span,性别选中男不显示该字段",list:[{}]},optionsColumns:[{label:"对齐方式",el:"radio-group",prop:"labelPosition",type:"button",dataList:[{label:"左对齐",value:"left"},{label:"右对齐",value:"right"},{label:"顶部对齐",value:"top"}]},{label:"尺寸",prop:"size",el:"radio-group",type:"button",dataList:[{label:"medium",value:"medium"},{label:"small",value:"small"},{label:"mini",value:"mini"}]},{label:"禁用全部字段",prop:"disabled",el:"switch"},{label:"禁用部分字段",prop:"disabledArr",el:"select",collapseTags:!0,multiple:!0,getList:this.getSelectList},{label:"labelWidth",prop:"labelWidth",el:"input-number",min:0}]}},computed:{columns:function(){var e=this,l=this.$createElement;return[{el:"input",prop:"name",label:"姓名",placeholder:"请输入姓名",disabled:this.isDisabled("name"),span:22,rules:{required:!0,message:"请输入姓名",trigger:"blur"},slots:{append:l("el-button",["搜索"])}},{el:"radio-group",disabled:this.isDisabled("sex"),label:"性别",prop:"sex",dataList:[{label:"男",value:1},{label:"女",value:0}],rules:{required:!0,message:"请选择性别",trigger:"change"}}].concat(Object(a.a)(1!==this.formData.sex?[{label:"默认渲染",prop:"state",span:22}]:[]),[{label:"籍贯",disabled:this.isDisabled("addr"),el:"cascader",prop:"addr",options:[{label:"浙江省",value:1,children:[{label:"杭州市",value:2,children:[{label:"余杭区",value:3}]}]}]},{el:"select",disabled:this.isDisabled("xl"),label:"学历",prop:"xl",dataList:[{label:"大学",value:1},{label:"高中",value:2},{label:"初中",value:3}]},{el:"date-picker",label:"出生年月",disabled:this.isDisabled("date"),prop:"date",type:"month",format:"yyyy年MM月"},{label:"备注",disabled:this.isDisabled("remark"),prop:"remark",span:22,el:"input",type:"textarea"},{label:"render渲染",prop:"render",render:function(e){return e("el-progress",{attrs:{type:"circle",percentage:30}})},rules:{required:!0,message:"render字段不能为空"}},{label:"slot渲染",prop:"slot"}],Object(a.a)(this.getOtherColumns()),[{prop:"btn",span:22,render:function(){return l("div",{style:"text-align:center"},[l("el-button",{attrs:{disabled:e.isDisabled("btn")},on:{click:function(){e.formData.list.push({})}}},["添加联动"]),l("el-button",{on:{click:function(){e.$refs.mform.validate().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},["表单验证"]),l("el-button",{on:{click:function(){e.formData={state:"默认渲染span,性别选中男不显示该字段",list:[{}]}}}},["重置表单"])])}}])}},methods:{isDisabled:function(e){return(this.options.disabledArr||[]).indexOf(e)>-1},getSelectList:function(){return Promise.resolve(this.columns.map(function(e){return{label:e.label,value:e.prop}}))},getList:function(e){var l=e.parent,t=[];return"zhejiang"===l?t=[{label:"杭州",value:"hangzhou"},{label:"宁波",value:"ningbo"}]:"shandong"===l&&(t=[{label:"济南",value:"jinan"},{label:"泰安",value:"taian"}]),new Promise(function(e){setTimeout(function(){e(t)},1e3)})},getOtherColumns:function(){var e=this,l=this.$createElement;return this.formData.list.map(function(t,a){return[{label:"联动选择".concat(a),prop:"list[".concat(a,"].label"),el:"select",rules:{required:!0,message:"请选择省份",trigger:"change"},dataList:[{label:"浙江",value:"zhejiang"},{label:"山东",value:"shandong"}]},{el:"select",getList:e.getList,prop:"list[".concat(a,"].value"),span:6,rules:{required:!0,message:"请选择城市",trigger:"change"},params:{parent:"list[".concat(a,"].label")}},{prop:"del".concat(a),span:6,render:l("el-button",{attrs:{type:"danger"},on:{click:function(){e.formData.list.splice(a,1)}}},["删除"])}]}).flat()}}},n=t(1),r=Object(n.a)(s,function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h3",[e._v("表单控制")]),e._v(" "),t("m-form",{attrs:{model:e.options,columns:e.optionsColumns}}),e._v(" "),t("br"),e._v(" "),t("h3",[e._v("表单展示")]),e._v("\n  "+e._s(e.formData)+"\n  "),e._v('""\n  >\n    '),t("el-progress",{attrs:{slot:"slot",type:"circle",percentage:80,color:"#8e71c7"},slot:"slot"})],1)},[],!1,null,null,null);l.default=r.exports}}]);