var t=demo.scrollWidth;
		demo1.innerHTML+=demo1.innerHTML;
		function doMarquee()
		{
			demo.scrollLeft=demo.scrollLeft<demo.scrollWidth-demo.offsetWidth?demo.scrollLeft+1:t-demo.offsetWidth;
		}
		function doscroll()
		{
  			sc=setInterval(doMarquee,1);
		}
		function stopscroll()
		{
  			clearInterval(sc);
		}
		doscroll();