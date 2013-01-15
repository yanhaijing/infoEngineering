// JavaScript Document
//树形下拉菜单
function treebr0(i)
	{
		obj=eval('d'+i);
		objimage=eval('image'+i);
		if (obj.style.display == "none"){
			obj.style.display ='block';
			objimage.src="images/dotCm.gif";
		    }
		else{
			obj.style.display ='none';
			objimage.src="images/dotOm.gif";
			}
	}