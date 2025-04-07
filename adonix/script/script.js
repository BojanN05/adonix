//ocitavanje strane jquery
  $(document).ready(function(){
    setTimeout(function(){
        $("#ocitvanje").fadeOut(500,function(){
            $("#glavnikontent").fadeIn(500);
        });
    },1500);
});  



// NAVIGACIJA//
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


//KARTICE ZA AUTOMOBILE//

let kartice = [
    {
        src: 'slike/tecnipuder.jpg',
        alt: 'Tehnički puder - Savršen mat finiš za svaki tip kože',
        h: 'Tehnički puder - Adonix Beauty Collection',
        cena: '2200 din.' 
    },
    {
        src: 'slike/tecnikarmin.jpg',
        alt: 'Tečni karmin - Dugotrajan i intenzivan kolor',
        h: 'Tečni karmin - Adonix Beauty Collection',
        cena: '1500 din.' 
    },
    {
        src:'slike/paletasenki.jpg',
        alt:'Paleta senki - Savršene nijanse za svaki look',
        h:'Paleta senki - Adonix Beauty Collection',
        cena:'2500 din'
    },


]
function praviKarticu(kartica){
    let praviljenje = `<div class="col-md-4">
                <div class="card h-100 text-center ">
                  <img src="${kartica.src}" class="card-img-top" alt="${kartica.alt}">
                  <div class="card-body">
                      <h5 class="card-title">${kartica.h}.</h5>
                      <p class="fw-bold">od <span class="text-warning">${kartica.cena}</p>
                  </div>
                </div>
            </div>
            `;
            return praviljenje
}

let cuvanjeKartica= "";

kartice.forEach(function(kartica){
    cuvanjeKartica+=praviKarticu(kartica);
})

let dohavatiKarticu = document.querySelector('.kartica');
if(dohavatiKarticu){
    dohavatiKarticu.innerHTML=cuvanjeKartica;
}




 //ikonice u futeru//
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

// Otvori modal kada se klikne na dugme "Rezerviši i regex"
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let rezervisiBtn = document.getElementById("rezervisiBtn");
let rezervacijaForm = document.getElementById("rezervacijaForm");
let errorsDiv = document.getElementById("errors");

// Prikaz modala
rezervisiBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.classList.remove("hide");
    modal.classList.add("show");
});

// Zatvaranje modala
closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    modal.classList.add("hide");

    modal.addEventListener(
        "animationend",
        function () {
            if (modal.classList.contains("hide")) {
                modal.style.display = "none";
            }
        },
        { once: true }
    );
});

// Validacija forme
rezervacijaForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Sprečava ponovno učitavanje stranice
    const errors = [];

    // Validacija polja
    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("Prezime").value.trim();
    const email = document.getElementById("email").value.trim();
    const broj= document.getElementById("phone").value.trim();

    const imeregex = /^[A-Z][a-z]{1,14}$/;
    const prezimeregex = /^[A-Z][a-z]{1,14}$/;
    const emajlregex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/;
    const brojregex= /^[0-9]{10}$/;

    if (!imeregex.test(ime)) {
        errors.push("Ime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    if (!prezimeregex.test(prezime)) {
        errors.push("Prezime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    if (!emajlregex.test(email)) {
        errors.push("Email mora biti validan i iz dozvoljenog domena.");
    }
    if(!brojregex.test(broj)){
        errors.push("Broj mora da bude u skladu sa propisima i dozvoljenog opsega")
    }

    // Provera rezultata validacije
    if (errors.length > 0) {
        errorsDiv.innerHTML = errors.join("<br>");
        errorsDiv.style.color = "black";
    } else {
        errorsDiv.innerHTML = "Forma je uspešno validirana!";
        errorsDiv.style.color = "green";

        // Zatvori modal ako je validacija uspešna
        closeBtn.click();
    }
});

