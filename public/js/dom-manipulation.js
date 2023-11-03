// const cookieService = require('/cookie');

class domManipulation {
    constructor() {
        this.buttonBurguer = document.querySelector('.menu-burguer');
        this.menuMobile = document.querySelector('.navigationMobile');
        this.popupContainer = document.querySelector('.popup');
        this.cookieBtn = document.querySelector('.acceptCookies');
        this.closePopupbtn = document.getElementById('closePopup');
        this.isVisiblePopup = null;
    };

    start() {
        this.animationBurguerBtn(); 
    };

    animationBurguerBtn() {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if (element.classList.contains('menu-burguer') ||
                element.classList.contains('menu-line') ||
                !this.menuMobile.classList.contains('show')) {
                this.buttonBurguer.classList.toggle('open');
                this.menuMobile.classList.toggle('show');
            };
        });
    };
    acceptCookies(accept){
        if(accept){
            this.closePopup();
            cookieService.CreateAndSetWebCookie('g50');
        };
    };
};

const DomManipulation = new domManipulation();
DomManipulation.start();