(self.webpackChunk=self.webpackChunk||[]).push([[664],{6698:function(k,h,l){"use strict";l.r(h),l.d(h,{default:function(){return R}});var m=l(7294),u=l(2777),D={page:"page___eP_8T"},w=l(5893),A=function(f){for(var t=f.width||0,c=f.height||0,n=f.getContext("2d"),v=50,e=0;e<=t;e+=v)n.moveTo(e+.5,0),n.lineTo(e+.5,c);for(var s=0;s<=c;s+=v)n.moveTo(0,s+.5),n.lineTo(t,s+.5);n.strokeStyle="black",n.stroke()},j=function(f){var t=new u.fabric.Canvas(f,{allowTouchScrolling:!0,selection:!1}),c=new u.fabric.Rect({top:100,left:0,width:80,height:50,fill:"red",selectable:!1}),n=new u.fabric.Rect({top:0,left:100,width:50,height:70,fill:"blue",selectable:!1}),v=new u.fabric.Rect({top:100,left:100,width:60,height:60,fill:"green",selectable:!1});t.add(c,n,v);var e={target:null,mousePos:null,viewPos:null,isDraging:!1},s=function(r){if(e.isDraging)return e.isDraging;if(!e.mousePos)return!1;var i=e.mousePos;return Math.abs(r[0]-i[0])<1&&Math.abs(r[1]-i[1])<1?!1:(e.isDraging=!0,!0)};t.on("mouse:down",function(a){var r=t.viewportTransform;e.target?e.viewPos=[e.target.left,e.target.top]:e.viewPos=[r[4],r[5]];var i=a.e;e.mousePos=[i.clientX,i.clientY]});var b=function(r,i){if(e.target&&t.setActiveObject(e.target),!!e.mousePos){var P=e.mousePos;s(i);var p=i[0]-P[0],T=i[1]-P[1],g=e.viewPos;if(e.target){if(r)return;e.target.left=p+g[0],e.target.top=T+g[1];return}var d=t.viewportTransform;d[4]=p+g[0],d[5]=T+g[1],t.setViewportTransform(d)}};t.on("mouse:move",function(a){var r=a.e;b(a.target,[r.clientX,r.clientY]),t.requestRenderAll()}),t.on("mouse:up",function(a){var r=a.e;b(a.target,[r.clientX,r.clientY]),e.isDraging||(e.target=a.target),e.target?t.setActiveObject(e.target):t._activeObject=null,e.isDraging=!1,e.mousePos=null,t.requestRenderAll()})};function R(){var o=(0,m.useRef)();return(0,m.useEffect)(function(){if(o.current)return j(o.current)},[o.current]),(0,w.jsx)("div",{className:D.page,children:(0,w.jsx)("canvas",{id:"canvas",ref:o,width:"600",height:"600"})})}},4960:function(){},6759:function(){},6272:function(){}}]);
