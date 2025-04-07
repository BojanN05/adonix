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
    let praviljenje=`<a href="" class="me-4 text-reset">${ikonica.icon}</a>`;
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




 let vozila = [
    {
        src: 'slike/tecnipuder.jpg',
        alt: 'Tečni puder - Savršen mat finiš za svaki tip kože',
        h: 'Tečnii puder - Adonix Beauty Collection',
        cena: '2200 din.' ,
    },
    {
        src: 'slike/tecnikarmin.jpg',
        alt: 'Tečni karmin - Dugotrajan i intenzivan kolor',
        h: 'Tečni karmin - Adonix Beauty Collection',
        cena: '1500 din.', 
       
    },
    {
        src:'slike/paletasenki.jpg',
        alt:'Paleta senki - Savršene nijanse za svaki look',
        h:'Paleta senki - Adonix Beauty Collection',
        cena:'2500 din', 
       
    },
    {
        src:'slike/gelzaobrve.jpg',
        alt:'Gel za obrve - Savršene nijanse za svaki look',
        h:'Gel za obrve - Adonix Beauty Collection',
        cena:'1750 din', 
        
    },
    {
        src:'slike/kompaktnipuder.jpg',
        alt:'Kompaktni puder - Savršene nijanse za svaki look',
        h:'Kompaktni puder - Adonix Beauty Collection',
        cena:'2800 din',
       
    },
    {
        src:'slike/lashmaskara.jpg',
        alt:'Lash Maskara - Savršene nijanse za svaki look',
        h:'Lash Maskara - Adonix Beauty Collection',
        cena:'3000 din',
       
    },
    {
        src:'slike/matefix.jpg',
        alt:'Matefix - Fiksator za sminku',
        h:'Matefix - Adonix Beauty Collection',
        cena:'2450 din',
       
    },

    {
        src:'slike/morethanglow.jpg',
        alt:'Highlighter - 020 Supereme Rose Beam',
        h:'Highlighter - Adonix Beauty Collection',
        cena:'3500 din',
       
    },
    {
        src:'slike/uvijaczatrepavice.jpg',
        alt:'Uvijac za trepavice -Uvijac za trepavice',
        h:'Uvijac za trepavice - Adonix Beauty Collection',
        cena:'4550 din',
        
    },

    {
        src:'slike/micelarnitufer.jpg',
        alt:'Micelarni tuferi -Micelarni tuferi',
        h:'Micelarni tuferi - Adonix Beauty Collection',
        cena:'2000 din',
        
    },
    {
        src:'slike/balzamzausne.jpg',
        alt:'Balzam za usne -Sesitive balzam za usne',
        h:'Balzam za usne - Adonix Beauty Collection',
        cena:'500 din',
      
    },
    {
        src:'slike/olovka.jpg',
        alt:'Olovka za oci Olovka za oci',
        h:'Olovka za oci - Adonix Beauty Collection',
        cena:'1550 din',
       
    },
    
];

function praviVozilo(vozilo) {
    let praviljenje = `<div class="col-md-4">
                <div class="card h-100 text-center ">
                  <img src="${vozilo.src}" class="card-img-top" alt="${vozilo.alt}">
                  <div class="card-body">
                      <h5 class="card-title">${vozilo.h}.</h5>
                      <p class="fw-bold">od <span class="text-warning">${vozilo.cena}</p>
                  </div>
                </div>
            </div>
            
 
      </div>    `;
    return praviljenje;
}

let cuvanjeVozila = "";

vozila.forEach(function (vozilo) {
    cuvanjeVozila += praviVozilo(vozilo);
});

let dohavatiVozila = document.querySelector('.vozilo');
if (dohavatiVozila) {
    dohavatiVozila.innerHTML = cuvanjeVozila;
} 





// Selektovanje forme i grešaka
const rezervacijaForm = document.getElementById("rezervacijaForm");
const errorsDiv = document.getElementById("errorsDiv");

rezervacijaForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Sprečava ponovno učitavanje stranice

    // Brisanje prethodnih grešaka
    errorsDiv.innerHTML = '';
    errorsDiv.classList.add('d-none');

    // Inicijalizacija grešaka
    const errors = [];

    // Validacija polja
    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("Prezime").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const tipRezervacije = document.querySelector('input[name="tipRezervacije"]:checked');
    const usloviKoriscenja = document.getElementById("usloviKoriscenja").checked;

    const imeregex = /^[A-Z][a-z]{1,14}$/;
    const prezimeregex = /^[A-Z][a-z]{1,14}$/;
    const emajlregex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/;
    const brojregex = /^[0-9]{10}$/; 


    // Validacija za ime
    if (!imeregex.test(ime)) {
        errors.push("Ime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    // Validacija za prezime
    if (!prezimeregex.test(prezime)) {
        errors.push("Prezime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    // Validacija za email
    if (!emajlregex.test(email)) {
        errors.push("Email mora biti validan i iz dozvoljenog domena.");
    }
    // Validacija za broj telefona
    if (!brojregex.test(telefon)) {
        errors.push("Broj mora da bude validan i sadržavati tačno 10 cifara.");
    }
    if (!usloviKoriscenja) {
        errors.push("Morate prihvatiti uslove korišćenja.");
    }
    if (!tipRezervacije) {
        errors.push("Morate odabrati tip rezervacije.");
    }

    // Provera rezultata validacije
    if (errors.length > 0) {
        // Prikazivanje grešaka
        errorsDiv.innerHTML = errors.join("<br>");
        errorsDiv.classList.remove('d-none');
        errorsDiv.style.color = "black";
    } else {
        // Ako je validacija uspešna, obaveštavamo korisnika
        errorsDiv.innerHTML = "Forma je uspešno validirana!";
        errorsDiv.classList.remove('d-none');
        errorsDiv.style.color = "black";

        // Prikazivanje uspešnog obaveštenja
        setTimeout(() => {
            errorsDiv.classList.add('d-none');
        }, 5000);  // Sakrij obaveštenje nakon 5 sekundi
    }
});






document.addEventListener("click", function (event) {
    if (event.target.classList.contains("dugme_voznipark")) {
        // Pronađi karticu vozila
        let card = event.target.closest(".card");
        let vozilo = vozila.find(v => card.querySelector("h5").textContent.includes(v.h));

        // Prikaži informacije u modalu
        if (vozilo) {
            let modalTitle = document.getElementById("modalTitle");
            let modalBody = document.getElementById("modalBody");

            modalTitle.textContent = vozilo.h;
            modalBody.innerHTML = `
                <img src="${vozilo.src}" alt="${vozilo.alt}" class="img-fluid mb-3">
                <p><strong>Depozit:</strong> ${vozilo.depozit}</p>
                <p><strong>Broj vrata:</strong> ${vozilo.vrata}</p>
                <p><strong>Menjač:</strong> ${vozilo.menjac}</p>
                <p><strong>Broj sedišta:</strong> ${vozilo.sedista}</p>
                <p><strong>Klima:</strong> ${vozilo.klima ? "Ima klimu" : "Nema klimu"}</p>
                <p><strong>Cena:</strong> ${vozilo.cena} / dan</p>
                <p><strong>Potrosnja:</strong>${vozilo.informacijeE.Potrosnja}</p>
    <p><strong>Maksimalna brzina:</strong>${vozilo.informacijeE.maxspeed}</p>
            `;

            // Otvori modal
            let modal = new bootstrap.Modal(document.getElementById("modalVozilo"));
            modal.show();
        }
    }
});

