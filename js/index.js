window.onload = function() {
	
	
//轮播图效果
		var mySwiper = new Swiper('.swiper-container',{
			pagination: '.swiper-pagination',
			//paginationType : 'fraction',
			  paginationType: 'progress',
			//paginationType : 'custom',
			
			//上一个 下一个
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			loop: true,
			autoplay : 3000,
			autoplayDisableOnInteraction : false,
		});

	
//  选项卡效果
		
		var tabImg=document.getElementsByClassName('tab-img')[0]
		var tabUl=tabImg.getElementsByTagName('ul')[0];
		var tabLi=tabImg.getElementsByTagName('li');
		var isis=300;
		var tabTitle=document.getElementsByClassName('tab-title')[0]
		var tabTitleImg=document.getElementsByClassName('tab-title-img');
		var tabTitleImgLi=tabTitle.getElementsByTagName('li');
				for(i=0;i<tabTitleImgLi.length;i++){
					tabTitleImgLi[i].index=i;
					tabTitleImgLi[i].onmouseover=function(){		
						tabUl.style.top=-isis*(this.index)+'px';
					}
				}
				
		
	
	
	//返回顶部
		window.onscroll = function(){ 
			  var t = document.documentElement.scrollTop || document.body.scrollTop; 
			  var retu=document.getElementById('return');
			  if( t >= 600 ) { 
			    retu.style.display = "block"; 
			  } else { 
			    retu.style.display = "none"; 
			  } 
			  
			retu.onclick=function(){
			var  dd=document.documentElement,
		     db = document.body,
		 	 //返回当前元素的顶边和顶部之间的距离
		 	     top = dd.scrollTop || db.scrollTop,
		 	 //向下取整
		 	 step = Math.floor(top / 20);
		 	(function(){	
		 		top=top-step;
		 		if(top>-step){
		 			dd.scrollTop == 0 ? db.scrollTop = top: dd.scrollTop = top;
		 			setTimeout(arguments.callee,20);
		 		}
		 		
		 	})();
		 	
		 }
			  
			} 
}