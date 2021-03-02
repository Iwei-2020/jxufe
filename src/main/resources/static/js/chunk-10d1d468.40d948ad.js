(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d1d468"],{"22fd":function(e,t,a){"use strict";a("9868")},"4e89":function(e,t,a){"use strict";a("b459")},"6d26":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total,sizes,prev,pager,next,jumper",total:e.total,"current-page":e.currentPageDiy,"page-size":e.pageSizeDiy,"page-sizes":[5,10,20,50]},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})},n=[],i=(a("a9e3"),{name:"MyPagination",props:{currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currentPageDiy:1,pageSizeDiy:10}},methods:{handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)},handleSizeChange:function(e){this.$emit("handleSizeChange",e)}},watch:{currentPage:function(e,t){this.currentPageDiy=e},pageSize:function(e,t){this.pageSizeDiy=e}}}),r=i,o=(a("4e89"),a("2877")),s=Object(o["a"])(r,l,n,!1,null,"8756b672",null);t["a"]=s.exports},9868:function(e,t,a){},b459:function(e,t,a){},bb42:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("el-col",{attrs:{span:4}},[a("span",[e._v("教工申诉管理")])]),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:20}},[a("el-input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"教工编号/姓名(搜索)"},model:{value:e.infoSearch,callback:function(t){e.infoSearch=t},expression:"infoSearch"}}),a("el-select",{staticStyle:{margin:"0 10px"},attrs:{placeholder:"计分分类",clearable:""},model:{value:e.classify,callback:function(t){e.classify=t},expression:"classify"}},e._l(e.classifyOption,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticStyle:{margin:"0 10px"},attrs:{placeholder:"学年",clearable:""},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}},e._l(e.yearOption,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeSearch,callback:function(t){e.timeSearch=t},expression:"timeSearch"}})],1)],1),a("el-row",{staticStyle:{"text-align":"right","margin-top":"20px"}},[1===e.user.logo?a("el-button",{attrs:{type:"primary"},on:{click:e.admitRemoveAppealBatch}},[e._v("批量删除")]):e._e()],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.appealCompute.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),border:"","row-key":e.getRowKeys},on:{"selection-change":e.handleSelectionChange}},[1===e.user.logo?a("el-table-column",{attrs:{type:"selection",width:"55","reserve-selection":!0}}):e._e(),a("el-table-column",{attrs:{prop:"tchName",label:"申诉人姓名"}}),a("el-table-column",{attrs:{prop:"executorName",label:"执行部门"}}),a("el-table-column",{attrs:{prop:"classify",label:"计分分类"}}),a("el-table-column",{attrs:{prop:"ruleReason",label:"计分原因"}}),a("el-table-column",{attrs:{prop:"addScore",label:"加分"}}),a("el-table-column",{attrs:{prop:"desScore",label:"减分"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{prop:"reason",label:"申诉原因"}}),a("el-table-column",{attrs:{prop:"year",label:"学年"}}),a("el-table-column",{attrs:{prop:"gmtRecord",label:"记录时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFilter")(t.row.gmtRecord))+" ")]}}])}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"申诉时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFilter")(t.row.gmtCreate))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.showDialog(t.row.id)}}},[e._v("处理")]):a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.showDialog(t.row.id)}}},[e._v("重新处理")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("span",{staticStyle:{color:"#bb162b"}},[e._v("未处理")]):a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.showHandleResult(t.row.feedback)}}},[e._v("已处理")]),a("br"),a("span",[e._v(e._s(e._f("dateFilter")(t.row.gmtSolve)))])],1)]}}])})],1),a("my-pagination",{attrs:{total:e.appealCompute.length,"current-page":e.currentPage,"page-size":e.pageSize},on:{handleCurrentChange:e.handleCurrentChange,handleSizeChange:e.handleSizeChange}}),a("el-dialog",{attrs:{visible:e.dialogHandleAppealVisible,title:"处理申诉"},on:{"update:visible":function(t){e.dialogHandleAppealVisible=t},close:e.closeDialog}},[a("el-input",{attrs:{type:"textarea",rows:8},model:{value:e.feedback,callback:function(t){e.feedback=t},expression:"feedback"}}),a("div",{staticClass:"btn-area"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAppeal}},[e._v("确认")]),a("el-button",{on:{click:e.closeDialog}},[e._v("取消")])],1)],1),a("el-dialog",{attrs:{visible:e.dialogHandleResultVisible,title:"处理结果"},on:{"update:visible":function(t){e.dialogHandleResultVisible=t}}},[a("el-input",{attrs:{type:"textarea",rows:8,readonly:""},model:{value:e.handleResult,callback:function(t){e.handleResult=t},expression:"handleResult"}}),a("div",{staticClass:"btn-area"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogHandleResultVisible=!1}}},[e._v("关闭")])],1)],1)],1)],1)},n=[],i=(a("a4d3"),a("e01a"),a("4de4"),a("d81d"),a("d3b7"),a("6d26")),r={name:"AppealManage",components:{MyPagination:i["a"]},data:function(){return{user:this.$store.state.user,appealList:[],currentPage:1,pageSize:10,infoSearch:"",timeSearch:"",classify:"",classifyOption:[],dialogHandleAppealVisible:!1,dialogHandleResultVisible:!1,appealId:"",feedback:"",handleResult:"",loading:!0,year:"",yearOption:[],removeSelection:[]}},methods:{getDepartmentAppeal:function(){var e=this,t=new FormData;t.set("userId",this.user.id),this.$api.getDepartmentAppeal(t).then((function(t){e.appealList=t.data?t.data:[]})).finally((function(){e.loading=!1}))},handleCurrentChange:function(e){this.currentPage=e},handleSizeChange:function(e){this.pageSize=e},showDialog:function(e){this.dialogHandleAppealVisible=!0,this.appealId=e,this.feedback=""},closeDialog:function(){this.dialogHandleAppealVisible=!1,this.feedback=""},handleAppeal:function(){var e=this,t=new FormData;t.set("appealId",this.appealId),t.set("feedback",this.feedback),this.$api.handleAppeal(t).then((function(t){e.$showMsg("success",t.description),e.getDepartmentAppeal(),e.dialogHandleAppealVisible=!1}))},showHandleResult:function(e){this.dialogHandleResultVisible=!0,this.handleResult=e},getYearOption:function(){var e=this;this.$api.getAppealYearOption().then((function(t){e.yearOption=t.data?t.data.map((function(e){return{label:e,value:e}})):[]}))},handleSelectionChange:function(e){this.removeSelection=e.map((function(e){return e.id}))},getRowKeys:function(e){return e.id},getClassify:function(){var e=this;this.$api.getClassify().then((function(t){e.classifyOption=t.data.map((function(e){return{label:e,value:e}}))}))},admitRemoveAppealBatch:function(){var e=this;this.$confirm("确定删除已选择记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$api.admitRemoveAppealBatch(e.removeSelection).then((function(t){e.$showMsg("success",t.description),e.$refs.table.clearSelection(),e.getDepartmentAppeal()}))})).catch((function(){e.$showMsg("info","已取消删除")}))}},computed:{appealCompute:function(){var e=this;return this.currentPage=1,this.pageSize=10,this.infoSearch||this.classify||this.year||this.timeSearch.length>1?this.appealList.filter((function(t){var a=new Date(t.gmtCreate);return(!e.infoSearch||(t.tchName===e.infoSearch||t.executorName===e.infoSearch))&&(!e.classify||t.classify===e.classify)&&(!(e.timeSearch.length>1)||a.getTime()>=e.timeSearch[0].getTime()&&a.getTime()<=e.timeSearch[1].getTime())&&(!e.year||t.year===e.year)})):this.appealList}},mounted:function(){this.getDepartmentAppeal(),this.getYearOption(),this.getClassify()}},o=r,s=(a("22fd"),a("2877")),c=Object(s["a"])(o,l,n,!1,null,"7f38a9a5",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-10d1d468.40d948ad.js.map