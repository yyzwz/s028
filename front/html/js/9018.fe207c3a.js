"use strict";(self["webpackChunks028"]=self["webpackChunks028"]||[]).push([[9018],{9018:(t,e,l)=>{l.r(e),l.d(e,{default:()=>v});var i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"container"}})])}],u=l(1821);const n={name:"test-page",components:{},props:{},data(){return{stackedColumnPlot:{},data1:[{title:"2022-03",value:220,type:"浏览人数"},{title:"2022-04",value:300,type:"浏览人数"},{title:"2022-05",value:250,type:"浏览人数"},{title:"2022-06",value:220,type:"浏览人数"},{title:"2022-07",value:362,type:"浏览人数"},{title:"2022-03",value:350,type:"浏览人数"},{title:"2022-04",value:900,type:"浏览人数"},{title:"2022-05",value:300,type:"浏览人数"},{title:"2022-06",value:450,type:"浏览人数"},{title:"2022-07",value:470,type:"浏览人数"},{title:"2022-03",value:220,type:"意向人数"},{title:"2022-04",value:300,type:"意向人数"},{title:"2022-05",value:250,type:"意向人数"},{title:"2022-06",value:220,type:"意向人数"},{title:"2022-07",value:362,type:"意向人数"}],data2:[{title:"2022-03",value:10,type:"成交比例"},{title:"2022-04",value:25,type:"成交比例"},{title:"2022-05",value:10,type:"成交比例"},{title:"2022-06",value:30,type:"成交比例"},{title:"2022-07",value:10,type:"成交比例"},{title:"2022-03",value:5,type:"成交增长率"},{title:"2022-04",value:18,type:"成交增长率"},{title:"2022-05",value:20,type:"成交增长率"},{title:"2022-06",value:15,type:"成交增长率"},{title:"2022-07",value:20,type:"成交增长率"}]}},methods:{init(){this.initAntvFx()},initAntvFx(){const t=this.data1,e=this.data2;this.stackedColumnPlot=new u.DualAxes("container",{data:[t,e],xField:"title",yField:["value","value"],geometryOptions:[{geometry:"column",isStack:!0,seriesField:"type",columnWidthRatio:.4,label:{}},{geometry:"line",seriesField:"type",smooth:!0,connectNulls:!1,label:{},point:{color:"#F00"},lineStyle:({type:t})=>t.indexOf("平均")>-1?{lineDash:[10,15],opacity:1,cursor:"pointer"}:{opacity:.5}}]}),this.stackedColumnPlot.render()}},mounted(){this.init()}},p=n;var s=l(1001),o=(0,s.Z)(p,i,a,!1,null,"3c5bcbdc",null);const v=o.exports}}]);