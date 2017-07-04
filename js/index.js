 var lin =null;
window.onload = function(){
    lin =   $('#line').css('left');           
    setInterval(scroll,3000);
    $('.sl1-txt').animate({'left':'50%','margin-left':'-120px','opacity':'1'},800);
    $('.sl1-9').animate({'left':'50%','margin-left':'-245px','opacity':'1'},800);
    console.log(lin)
     $('#menu li').each(function(i){
        $(this).on('mouseenter',function(){

             //lin =   $('#line').css('left');
            $(this).addClass('active1')
            $('#line').stop().animate({'left':422+(i*82)},200)  
        });
        $(this).on('click',function(){
             lin =   $('#line').css('left');           
        }); 
        
        $(this).on('mouseleave',function(){

            $(this).removeClass('active1')
            $('#line').stop().animate({'left':lin},200)             
        }); 
    })   
}


    //初始化fullpage
    $(function() {

        $('#dowebok').fullpage( {
            sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8'],
            menu: '#menu',
            controlArrows:false, 
            easing:'linear',//滚动方式
            scrollingSpeed:300,//滚动速度
            touchSensitivity:100,//滚轮敏感度
            afterLoad: function(anchorLink, index){
                lin =  $('#line').css('left');
                console.log(lin)
                if (index==1) {
                    $('.top-bar').css('opacity','0')
                } else {
                    $('.top-bar').css({'opacity':'0.5','hieght':'70px'})
                }
                if (index === 2) {
                $('.title').animate({'opacity':1},500);
                $('.circle-l').css({'clip': 'rect(0px,156px,156px,78px)'});
                $('.circle-r').css({'clip': 'rect(0px,78px,156px , 0px)'});
                };
                if(index == 3){
                    $('.case-ul').css({'opacity':'1','bottom':'0px'});
                    $('.case-title').css('opacity','1');
                
                }
                if(index == 4){
                   // $('.section4').find('p').fadeIn(2000);
                }
                if(index==5){
                    $('.equipment').css({'left':'0','opacity':'1'});
                    $('.browser').css({'top':'0','opacity':'1'});
                    $('.system').css({'right':'0','opacity':'1'});
                }
                if(index==6){
                    $('.add-bottom').css({'opacity':'1','bottom':'0px'});
                }
                 if(index==7){
                    $('.position').css({'opacity':'1','left':'700px'});
                }
                if(index==8){
                   $('.contact-top').css({'top':'0','opacity':'1'});
                   $('.contact-bottom i').css({'top':'0','opacity':'1'})
                }

            },
            onLeave:function(index,nextIndex){
                 $('#line').animate({'left':423+((nextIndex-1)*82)},200);  

            }

            });
    });


    //初始化swiper
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: 5000,
        loop:true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction:false,
        paginationClickable:true,
        onSlideChangeStart: function(swiper){
          $('#pogination').find('span').css('background','white');
        },
        onTransitionEnd: function(swiper){
            
            if(swiper.activeIndex==2){
                $('.sl2-bg').animate({'width':'50%'},500,'swing')
                $('.sl2-txt').animate({'left':'310','opacity':1},500,'swing')
            };
            if(swiper.activeIndex==3){
                $('.bg3-box div').animate({'fontSize':38,'opacity':1},500,'swing')
                $('.bg3-box span').animate({'opacity':1},500,'swing')
                $('.bg3-box p').delay(500).animate({'opacity':1},500,'swing')
            }
            if(swiper.activeIndex==4){
            	//alert(swiper.activeIndex)
                $('.bg4-top').animate({'top':160,'opacity':1},400,'swing')
                $('.bg4-bot').animate({'top':300,'opacity':1},600,'swing')
            }
            if(swiper.activeIndex==0){
            	//alert(swiper.activeIndex)
                $('.bg4-top').animate({'top':160,'opacity':1},400,'swing')
                $('.bg4-bot').animate({'top':300,'opacity':1},600,'swing')
            }

           
            
        } 
    }) 
   

    //导航条跟随


    //滚动新闻
    function scroll(){
        $(".new-box").animate({"margin-top":"-20px"},function(){
            $(".new-box li:eq(0)").appendTo($(".new-box")); 
            $(".new-box").css({"margin-top":0});
        })
    }


    //商业特效
    var timer = null;
  //  var x = $(this).find('i').css('backgroundPositionX');
  //  console.log(x)
    $('.sec2-box li').on('mouseenter',function(){
        $this =$(this)
       
        $this.find('.circle-l').css({'clip': 'rect(0px,156px,-10px,78px'});
        $this.find('.circle-r').css({'clip': 'rect(156px,78px,156px,0px)'});
        timer = setTimeout(function(){
            var x = null;
            $this.find('p').css({'top':10})
            $this.find('strong').css({'color':'white'})
            switch($this.index()){
                case 0:
                    x = -168;
                    break;
                case 1:
                    x = -337;
                    break;
                case 2:
                    x = -327;
                    break;
                case 3:
                    x = -164;
                    break;
                case 4:
                    x = -335;
                    break;

            }
            
            $this.animate({'backgroundPositionY':0},300)
            $this.find('i').animate({'backgroundPositionX':x},300)
        },300)
    })

    $('.sec2-box li').on('mouseleave',function(){
        $this.stop();
        $this.find('i').stop();
        $this.css({'backgroundPositionY':400})
        clearTimeout(timer)
        $this =$(this)
        $this.find('.circle-l').css({'clip': 'rect(0px,156px,156px,78px)'});
        $this.find('.circle-r').css({'clip': 'rect(0px,78px,156px , 0px)'});
        $this.find('strong').css({'color':'#333'})
        $this.find('p').css({'top':200})
            switch($this.index()){
                case 0:
                    x = -245;
                    break;
                case 1:
                    x = -416;
                    break;
                case 2:
                    x = -415;
                    break;
                case 3:
                    x = -244;
                    break;
                case 4:
                    x = -420;
                    break;
            }
        $this.find('i').css({'backgroundPositionX':x})
    });

    //case效果
    $('.case-show li').on('mouseenter',function(){
        $this=$(this);
        $this.find('.case-shadow').css({'top':'0px'});
        $this.find('.case-bg').css({'top':'200px'});
        $this.find('p').css({'color':'white'});
        $this.find('strong').css({'color':'white'});
    });
    $('.case-show li').on('mouseleave',function(){
        $this=$(this);
        $this.find('.case-shadow').css({'top':'-200px'});
        $this.find('.case-bg').css({'top':'300px'});
        $this.find('p').css({'color':'#999'});
        $this.find('strong').css({'color':'#333'});
    });
    //client  效果

    $('.client-ul li').each(function(i){
       $(this).css('left',(i%5)*230+'px');
       $(this).css('top',Math.floor(i/5)*150+'px');
    });
    $('.client-ul li').on('mouseenter',function(){
        var x = $(this).css('left');
        var y = $(this).css('top');
        $('.block').css({'display':'block','top':y,'left':x});
        $(this).css('backgroundPositionY',-150+'px')
       
    });
    $('.client-ul li').on('mouseleave',function(){
        $(this).css('backgroundPositionY',0);
    });
    $('.client-ul ').on('mouseleave',function(){
        $('.block').css('display','none');
    })

    //add 增值
    $('.add-ul li').on('mouseenter',function(){
        $(this).find('.add-cl').css('clip','rect(0px,128px,128px,64px)');
        $(this).find('.add-cr').css('clip','rect(0px,64px,128px,0px)');
    });
     $('.add-ul li').on('mouseleave     ',function(){
        $(this).find('.add-cl').css('clip','rect(0px,128px,-10px,64px)');
        $(this).find('.add-cr').css('clip',' rect(128px,64px,128px,0px)');
    })
     //about 关于
     var swiper = new Swiper('.about-swiper',{
        autoplay: 5000,
        loop:true,
        width: 480,
        height: 240,
        pagination: '#about-mune',
        autoplayDisableOnInteraction:false,
        paginationClickable:true,
        paginationElement : 'li',
        // paginationBulletRender: function (swiper, index, className) {
        //     return '<span class="' + className + '">'+ '</span>';
        // }
        paginationType : 'custom',//自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        paginationCustomRender: function (swiper, current, total) {
            var _html = '';
            for (var i = 1; i <= total; i++) {
              if (current == i) {
                _html += '<li class="about-mune-li about-active"></li>';
              }else{
                _html += '<li class="about-mune-li"></li>';
              }
            }
            return _html;//返回所有的页码html
        }
        
    })
    //给每个页码绑定跳转的事件   
   
    $('.swiper-pagination-custom').on('mouseover','li ',function(){

    console.log($('#about-mune li').html())
            

        var index = $(this).index();
     //   console.log(index);
        swiper.slideTo(index+1, 500, false);//切换到第一个slide，速度为1秒
    })

     

     
