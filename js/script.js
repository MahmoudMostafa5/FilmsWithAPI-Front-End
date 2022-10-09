let userName = document.getElementById('name');
let userEmail = document.getElementsByName('email');
let userPhone = document.getElementById('phone');
let userAge = document.getElementById('age');
let userPasswod = document.getElementById('pass');
let userRePasswod = document.getElementById('rePass');

let firstSearch = document.getElementById('firstSearch');
let secondSearch = document.getElementById('secondSearch')


// Check Validaty of Name
$('#name').keyup(function () {
    let regex = /^[A-Z][a-z]{3,6}$/;
    if (regex.test(userName.value) == true) {
        nameEntered.classList.replace("d-block", "d-none")
    } else {
        nameEntered.classList.replace("d-none", "d-block")
    }
});

// Check Validaty of Email
$('#email').keyup(function () {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test(userEmail.value) == true) {
        emailEntered.classList.replace("d-block", "d-none")
    } else {
        emailEntered.classList.replace("d-none", "d-block")
    }
});

// Check Validaty of Phone
$('#phone').keyup(function () {
    let regex = /^(002)?01[0125][0-9]{8}$/;
    if (regex.test(userPhone.value) == true) {
        phoneEntered.classList.replace("d-block", "d-none")
    } else {
        phoneEntered.classList.replace("d-none", "d-block")
    }
});

// Check Validaty of Age
$('#age').keyup(function () {
    let regex = /^([1-9]|[1-9][0-9]|100)$/;
    if (regex.test(userAge.value) == true) {
        ageEntered.classList.replace("d-block", "d-none")
    } else {
        ageEntered.classList.replace("d-none", "d-block")
    }
});

// Check Validaty of Password
$('#pass').keyup(function () {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(userPasswod.value) == true) {
        passEntered.classList.replace("d-block", "d-none")
    } else {
        passEntered.classList.replace("d-none", "d-block")
    }
});

// Check if rePassword = Password
$('#rePass').keyup(function () {
    if (userPasswod.value == userRePasswod.value) {
        repassEntered.classList.replace("d-block", "d-none")
    } else {
        repassEntered.classList.replace("d-none", "d-block")
    }
});

let films = [];
let caption = document.getElementById("row")

async function getFilm() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0KHvJ-TF3hEv0ApDiW1OzDAWBsDFBO-AK-tiJDQR_FW8PuhCOY1coo9F0`);
    let x = await response.json()
    films = x.results;
    display();
}

function display() {
    let filmContent = ` `;

    for (let i = 0; i < films.length; i++) {
        filmContent += `
        <div class="col-md-4 text-center">
            <div class="post">
                <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                <div class="caption">
                    <h4 class="prop">${films[i].title}</h4>
                    <p>${films[i].overview}</p>
                    <p>rate : ${films[i].vote_average}</p>
                    <p>${films[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    caption.innerHTML = filmContent;
}

 getFilm();


let closeBtn = document.getElementById("close");
let lighBoxContainer = document.getElementById("sumarryBox");

function closeSlide() {
    lighBoxContainer.style.display = "none";
}

closeBtn.addEventListener("click", closeSlide);


//bewdek 3la elsection
$("a[href^='#']").click(function () {

    let aHref = $(this).attr("href");//be2olk dost 3la anhy link
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop: sectionOffset}, 1000)

});

//beda5l wetala3 al navbar
$("#toggle").click(function () {

    let colorBoxWidth = $("#sumarryBox").innerWidth();

    if ($("#sideBar").css("left") == "-200px")//hwa kda bara
    {
        $("#sideBar").animate({left: `0px`}, 1000);
        toggle.classList.replace("d-block", "d-none")
    } else {
        $("#sideBar").animate({left: `-${colorBoxWidth}`}, 1000);
        toggle.classList.replace("d-none", "d-block");

    }

});

            // search Input 

firstSearch.addEventListener("keyup", function(){
    searchByLetter($(this).val());
});

secondSearch.addEventListener("keyup", function(){
    searchByLetter($(this).val());
});

function searchByLetter(letter)
{
    let temp = ` `;
    for(let i =0 ; i< films.length ; i++)
    {
        if(films[i].title.toLowerCase().includes(letter) || films[i].overview.toLowerCase().includes(letter))
        {
            temp += `
                    <div class="col-md-4 text-center">
                        <div class="post">
                            <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                            <div class="caption">
                                <h4 class="prop">${films[i].title}</h4>
                                <p>${films[i].overview}</p>
                                <p>rate : ${films[i].vote_average}</p>
                                <p>${films[i].release_date}</p>
                            </div>
                        </div>
                    </div>`;
        }
    }
    caption.innerHTML = temp;
}

            //get Popular Films
        
async function getPopularFilm() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0KHvJ-TF3hEv0ApDiW1OzDAWBsDFBO-AK-tiJDQR_FW8PuhCOY1coo9F0`);
    let x = await response.json()
    films = x.results;
    displayPopular();
}

function displayPopular() {
    let filmContent = ` `;

    for (let i = 0; i < films.length; i++) {
        filmContent += `
        <div class="col-md-4 text-center">
            <div class="post">
                <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                <div class="caption">
                    <h4 class="prop">${films[i].title}</h4>
                    <p>${films[i].overview}</p>
                    <p>rate : ${films[i].vote_average}</p>
                    <p>${films[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    caption.innerHTML = filmContent;
}

            //get Top Rated Films
        
async function getTopRatedFilm() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0KHvJ-TF3hEv0ApDiW1OzDAWBsDFBO-AK-tiJDQR_FW8PuhCOY1coo9F0`);
    let x = await response.json()
    films = x.results;
    displayTopRated();
}

function displayTopRated() {
    let filmContent = ` `;

    for (let i = 0; i < films.length; i++) {
        filmContent += `
        <div class="col-md-4 text-center">
            <div class="post">
                <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                <div class="caption">
                    <h4 class="prop">${films[i].title}</h4>
                    <p>${films[i].overview}</p>
                    <p>rate : ${films[i].vote_average}</p>
                    <p>${films[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    caption.innerHTML = filmContent;
}

            //get Trending Films

async function getTrendFilm() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0KHvJ-TF3hEv0ApDiW1OzDAWBsDFBO-AK-tiJDQR_FW8PuhCOY1coo9F0`);
    let x = await response.json()
    films = x.results;
    displayTrending();
}

function displayTrending() {
    let filmContent = ` `;

    for (let i = 0; i < films.length; i++) {
        filmContent += `
        <div class="col-md-4 text-center">
            <div class="post">
                <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                <div class="caption">
                    <h4 class="prop">${films[i].title}</h4>
                    <p>${films[i].overview}</p>
                    <p>rate : ${films[i].vote_average}</p>
                    <p>${films[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    caption.innerHTML = filmContent;
}

            // upcoming

async function getupcomingFilm() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0KHvJ-TF3hEv0ApDiW1OzDAWBsDFBO-AK-tiJDQR_FW8PuhCOY1coo9F0`);
    let x = await response.json()
    films = x.results;
    displayupcoming();
}

function displayupcoming() {
    let filmContent = ` `;

    for (let i = 0; i < films.length; i++) {
        filmContent += `
        <div class="col-md-4 text-center">
            <div class="post">
                <img class="w-100 my-5" src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" >
                <div class="caption">
                    <h4 class="prop">${films[i].title}</h4>
                    <p>${films[i].overview}</p>
                    <p>rate : ${films[i].vote_average}</p>
                    <p>${films[i].release_date}</p>
                </div>
            </div>
        </div>`
    }
    caption.innerHTML = filmContent;
}