const agenda = document.querySelectorAll('.header__navigation-item--dropdown')[1];
console.log(agenda);

agenda.addEventListener('click',function(){

    let hiddenMenu = this.children[1];

    if( hiddenMenu.classList.contains('dropdown--not-visible') ){
        this.style.backgroundColor = '#f4f4f4';
        hiddenMenu.classList.remove('dropdown--not-visible');
        hiddenMenu.classList.add('dropdown--is-visible');
    }else{
        this.style.backgroundColor = '#fff';
        hiddenMenu.classList.remove('dropdown--is-visible');
        hiddenMenu.classList.add('dropdown--not-visible');
    }
},false)