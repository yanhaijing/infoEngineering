function getCss(elem,property){
 if(elem.style[property]){       
  return elem.style[property];
 }
 else if(elem.currentStyle){
  return elem.currentStyle[property];
 }
 else if(document.defaultView && document.defaultView.getComputedStyle){   
  property = property.replace(/([A-Z])/g,'-$1').toLowerCase(); 
  var s = document.defaultView.getComputedStyle(elem,''); 
  return s&&s.getPropertyValue(property);  
 }
 else{ 
  return null; 
 }
}
window.onload = function() {
 var obj = document.getElementById("nav");
 var lis = obj.getElementsByTagName("li");
 var arr = new Array();
 var uls = obj.getElementsByTagName("ul")[0];
 for(var i=0; i<lis.length; i++){
  if(lis[i].className.indexOf("firstLevel")>=0){
   arr.push(lis[i]);
  }
 }
 for(var i=0; i<lis.length; i++){
  lis[i].style.width = obj.offsetWidth/arr.length - 1 + "px";
  if(lis[i].className.indexOf("thirdLevel")>=0){
   lis[i].parentNode.style.marginLeft = obj.offsetWidth/arr.length - 1 + "px";
   lis[i].parentNode.style.marginTop = -parseInt(getCss(uls,"lineHeight")) + "px";
  }
  lis[i].onmouseover=function(){
   this.className+=(this.className.length>0?" ":"") + "show";
  }
  lis[i].onmouseout=function(){
   this.className=this.className.replace(new RegExp("( ?|^)show\\b"), "");
  }
 }
}
