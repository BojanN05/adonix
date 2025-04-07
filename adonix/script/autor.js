$(document).ready(function(){
    setTimeout(function(){
        $("#ocitvanje").fadeOut(500,function(){
            $("#glavnikontent").fadeIn(500);
        });
    },1500);
});  
let linkovi = [
    {
        link:"index.html",
        text:"Početna"
    },
    {
        link:"o_nama.html",
        text:"O nama"
    },
    {
        link: "voznipark.html",
        text: "Katalog"
    },
    {
        link: "autor.html",
        text: "Autor"
    }

    


];
function pravilink(link){
    let praviljenje = `<li class="nav-item"><a class="nav-link active" aria-current="page" href="${link.link}">${link.text}</a></li>` 
    return praviljenje;
}

let cuvanjelinkova ="";

linkovi.forEach(function(link){
    cuvanjelinkova +=pravilink(link);
})
let dohvatanje= document.querySelector(".lista");
if(dohvatanje){
    dohvatanje.innerHTML=cuvanjelinkova;
}
let ikonice = [
    {
        icon: '<i class="fab fa-facebook-f"></i>',
        href:`https://www.facebook.com/`
    },
    {
        icon: '<i class="fa-brands fa-instagram"></i>',
        href:`https://www.instagram.com/`
    },
    {
        icon: '<i class="fa-solid fa-rss"></i>',
        href: `rss.xml`
    },
    {
        icon: '<i class="fa-solid fa-sitemap"></i>',
        href: `sitemap.xml`
    }
   

]

function praviIkonicu(ikonica){
    let praviljenje=`<a href="${ikonica.href}" class="me-4 text-reset">${ikonica.icon}</a>`;
     return praviljenje
}

let cuvanjeIkonica="";

ikonice.forEach(function(ikonica){
    cuvanjeIkonica+= praviIkonicu(ikonica);
})

let dohavatiIkonicu = document.querySelector('.ikonicee');
if(dohavatiIkonicu){
    dohavatiIkonicu.innerHTML=cuvanjeIkonica;
}