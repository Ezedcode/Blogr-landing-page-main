let prevNavList = null;
let prevArrow = null;
let firstClick = 0;   

function navListDisplay() {
    document.querySelector('.product .nav-list').style.display = 'none';
    document.querySelector('.company .nav-list').style.display = 'none';
    document.querySelector('.connect .nav-list').style.display = 'none';
};

function showNavBar() {
    let product = document.getElementById('product');
    let company = document.getElementById('company');
    let connect = document.getElementById('connect');
    let mobile_menu = document.querySelector('.mobile-menu');

    product.addEventListener('click', ()=>active('.product'));
    company.addEventListener('click', ()=>active('.company'));
    connect.addEventListener('click', ()=>active('.connect'));
    mobile_menu.addEventListener('click', ()=>mobileMenu());
};

function active(id) {
    let img = id;
    let navListLocalName = id + ' .nav-list';

    let getNavListLocal = document.querySelector(navListLocalName);
    let arrow = document.querySelector(img + ' img');
    
    if (getNavListLocal.style.display == 'none') {
        getNavListLocal.style.display = 'block';
        getNavListLocal.style.opacity = '1';
        arrow.style.rotate = '180deg';

        if (firstClick != 0 && prevNavList != getNavListLocal && prevNavList.style.display == 'block') {
            prevNavList.style.display = 'none';
            prevArrow.style.rotate = '0deg';
        };
    } else {
        getNavListLocal.style.display = 'none';
        arrow.style.rotate = '0deg';
    };
    console.log(prevNavList);
    console.log(getNavListLocal);

    prevNavList = getNavListLocal;
    prevArrow = arrow;
    firstClick = 1;
};

function mobileMenu() {
    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");
    let menuBar = document.querySelector(".menu-bar");
    
    if (line2.style.opacity == "0") {
      line1.style.transform = "rotate(0deg) translate(0)";
      line2.style.opacity = "1";
      line3.style.transform = "rotate(0deg) translate(0)";
      menuBar.style.transform = 'translate(100%)';
    }else{
      line1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
      line2.style.opacity = "0";
      line3.style.transform = "rotate(45deg) translate(-5px, -7px)";
      menuBar.style.transform = 'translate(-5.4%)';
    };
};

navListDisplay();
showNavBar();
