/*zepto入口函数*/
$(function () {
    /*手势切换轮播图*/
    /*1.自动无缝轮播*/
    /*2.点随之变化*/
    /*3.完成手势切换*/
    $(window).on("load",function (){
        let $banner=$(".sn_banner");
        let width=$banner.width();

        let $imgBox=$banner.find("ul:first");
        let $pointBox=$banner.find("ul:last");

        let $points=$pointBox.find("li");
        let animationFuc=function (){
            $imgBox.animate({transform:"translateX("+(-index*width)+"px)"},100,function (){
                /*执行动画完成的回调*/
                if(index>=9) {
                    index=1;
                    /*瞬间*/
                    $imgBox.css("transform","translateX("+(-index*width)+"px)");
                }else if(index<=0) {
                    index=8;
                    $imgBox.css("transform","translateX("+(-index*width)+"px");
                }
                /*2.点随着变化*/
                $points.removeClass("now").eq(index-1).addClass("now");
            });
        };

        /*1.自动无缝轮播*/
        let index=1;
        let timer=setInterval(function (){
            index++;
            animationFuc();
        },1000);
        /*3.完成手势切换 android4.0 可能会有兼容问题*/
        /*左滑手势下一张，反之上一张*/
        $banner.on("swipeLeft",function (){
            index++;
            animationFuc();
        });
        $banner.on("swipeRight",function (){
            index--;
            animationFuc();
        });

    });
});