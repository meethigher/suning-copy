$(window).on("load",function (){
    console.log("less编译完成，开始执行swiper轮播图");
    new Swiper(".swiper-container",{
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        loop:true,
        pagination:{
            el:".swiper-pagination"
        }
    });
});
