let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.novil');
window.onscroll=function(){
    let value = scrollY;
    stars.style.left= value + 'px';
    moon.style.top= value * 3 + 'px';
    m3.style.top= value * 2 + 'px';
    m4.style.top= value * 1.5 + 'px';
    river.style.top= value + 'px';
    boat.style.top= value + 'px';
    boat.style.left= value * 3 + 'px';
    nouvil.style.fontsize= value * 3 + 'px';
    if(scrollY >= 67){
        nouvil.style.fontsize = 67 + 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 478){
            nouvil.style.display = 'none';
        }
        else{
            nouvil.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'
        }
        else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
        }
    }
}