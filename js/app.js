const agenda = document.body.querySelectorAll('.header__navigation-item--dropdown')[1];
const whyAttend = document.body.querySelectorAll('.header__navigation-item--dropdown')[0];
const header = document.body.querySelector('.header');


// Agenda dropdown menu
agenda.addEventListener('click',function(){

    isWhyAttendVisible(); // Close dropdown Why Attend if visible
    let hiddenMenu = this.children[1];
    if( hiddenMenu.classList.contains('dropdown--not-visible') ){
        this.style.backgroundColor = '#f4f4f4';
        hiddenMenu.classList.remove('dropdown--not-visible');
        hiddenMenu.classList.add('dropdown--is-visible');
    }else{
        this.style.background = '';
        hiddenMenu.classList.remove('dropdown--is-visible');
        hiddenMenu.classList.add('dropdown--not-visible');
    }
},false)

// Why Attend dropdown menu

whyAttend.addEventListener('click',function(e){
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

    isAgendaVisible();  // Close dropdown Agenda if visible
    if( e.target.closest('.header').lastElementChild.tagName !=='SECTION'){
        this.style.background = '#f4f4f4';
        header.appendChild(bottomMenu);
    }
    else{
        this.style.background = '#fff';
        e.target.closest('.header').lastElementChild.remove();
        this.style.background = '';
    }
})

// Helper function to determine if dropdown Agenda is visible
function isAgendaVisible(){
    agenda.children[1].classList.remove('dropdown--is-visible');
    agenda.children[1].classList.add('dropdown--not-visible')
    agenda.style.background ='';
}
// Helper function to determine if dropdown Why Attend is visible
function isWhyAttendVisible(){
    if( header.lastElementChild.tagName === 'SECTION'){
        let toRemove = header.lastElementChild;
        toRemove.parentElement.lastElementChild.remove();
        whyAttend.style.background = '';
    }
}