// تهيئة سلايدر الصور الرئيسي
const swiper = new Swiper('.mySwiper', {
    loop: true, // تكرار الشرائح
    autoplay: {
        delay: 5000, // تغيير تلقائي كل 5 ثواني
    },
    pagination: {
        el: '.swiper-pagination', // نقاط التوجيه
        clickable: true, // قابلية النقر
    },
});

// إضافة تفاعل لزر السلة (يمكن تطويره لاحقًا)
document.querySelector('.cart').addEventListener('click', () => {
    console.log('عرض سلة التسوق');
    
});

// تهيئة السلايدر
var swiper2 = new Swiper('.swiper-container', {
    loop: true, // التكرار التلقائي
    autoplay: {
        delay: 3000, // التأخير بين كل شريحة (بالمللي ثانية)
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});
