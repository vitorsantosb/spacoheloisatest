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
        this.updatePopupVisibility();
        this,this.closePopup();
    };

    animationBurguerBtn() {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if (element.classList.contains('menu-burguer') ||
                element.classList.contains('menu-line')) {
                this.buttonBurguer.classList.toggle('open');
                this.menuMobile.classList.toggle('show');
            };
        });
    };

    showPopup() {
        if (!this.isVisiblePopup) {
            this.popupContainer.style.display = "none";
        } else {
            this.popupContainer.style.display = "flex";
        };
    };

    acceptCookies(accept){
        if(accept){
            this.closePopup();
            cookieService.CreateAndSetWebCookie('g50');
        };
    };
    updatePopupVisibility(isVisible) {
        this.isVisiblePopup = isVisible;
        this.showPopup();
    };

    closePopup() {
        this.closePopupbtn.addEventListener('click', () => {
            this.updatePopupVisibility(false);
        });
    };
};

const DomManipulation = new domManipulation();
DomManipulation.start();