const agenda = document.querySelectorAll('.header__navigation-item--dropdown')[1];
const whyAttend = document.querySelectorAll('.header__navigation-item--dropdown')[0];

// Agenda dropdown menu
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

// Why Attend dropdown menu

whyAttend.addEventListener('click',function(e){
    const header = document.querySelector('.header');
    const bottomMenu = document.createRange().createContextualFragment(`<section class="why-attend">
<div class="why-attend__container">
    <ul class="why-attend__business">
        <li>Business</li>
        <li><a href="#">Find Innovation</a></li>
        <li><a href="#">Find Clients</a></li>
    </ul>
    <ul class="why-attend__startups">
        <li>Startups</li>
        <li><a href="#">Attend for free</a></li>
        <li><a href="#">Attend as scaleup</a></li>
    </ul>
    <ul class="why-attend__investors">
        <li>Investor</li>
        <li><a href="#">Find Investment</a></li>
    </ul>
    <ul class="why-attend__last">
        <li>And</li>
        <li><a href="#">Volunteer</a></li>
        <li><a href="#">Speaker</a></li>
        <li><a href="#">Media</a></li>
    </ul>
</div>
</section>`);

    if( e.target.closest('.header').nextElementSibling.tagName !=='SECTION' ){
        this.style.background = '#f4f4f4';
        header.after(bottomMenu);
    } else{
        this.style.background = '#fff';
        e.target.closest('.header').parentElement.children[3].remove();
    }
})


