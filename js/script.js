const loginModal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeLogin = document.getElementById("close-login");

if (loginBtn) {
    loginBtn.onclick = function () {
        loginModal.style.display = "block";
    }
}

if (closeLogin) {
    closeLogin.onclick = function () {
        loginModal.style.display = "none";
    }
}

// Регистрация

let registerModal = document.getElementById('register-modal');
let registerBtn = document.getElementById('register-btn');
let closeRegister = document.getElementById('close-register');
let registerOpen = document.getElementById("register-open");

if (registerOpen) {
    registerOpen.onclick = function () {
        registerModal.style.display = "block";
        loginModal.style.display = "none";
    }
};


if (registerBtn) {
    registerBtn.onclick = function () {
        registerModal.style.display = "block";
    }
}


if (closeRegister) {
    closeRegister.onclick = function () {
        registerModal.style.display = "none";
    }
}

// Закрытие всех модальных окон по клику вне области модального окна
window.onclick = function (event) {
    if (
        event.target == loginModal ||
        event.target == registerModal ||
        event.target == document.getElementById('topUsersModal') ||
        event.target == document.getElementById('surveyModal') 
     

    ) {
        event.target.style.display = "none";
    }
};

//гамбургер-меню
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = function () {
    navbar.classList.toggle("active");
};


// фильтр 
let filterBtn = document.querySelector('.filter-btn');
let modalFilter = document.getElementById('movie-filter-modal');
let closeBtn = document.getElementById('close-filter');

filterBtn.addEventListener('click', () => {
    modalFilter.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modalFilter.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (!filterBtn.contains(event.target) && !modalFilter.contains(event.target)) { 
        modalFilter.style.display = 'none';
    }
});


// function clearInput() {
//     document.getElementById('search-input').value = '';
//     document.getElementById('clear-btn').style.display = 'none';
// }
function clearInput() {
    document.getElementById('search-input').value = '';
    document.getElementById('clear-btn').style.display = '';
}

// картинки 
window.onload = function () {
    var goldenRatio = 1.618;
    var images = document.querySelectorAll('.golden-image img');
    var contentWidth = document.querySelector('.content-wrapper').offsetWidth;

    for (var i = 0; i < images.length; i++) {
        var imageWidth = contentWidth / goldenRatio;
        images[i].style.width = imageWidth + 'px';
    }
};

// подчеркивание меню

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar ul li a');
   

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.href === window.location.href || link.href === window.location.href + '/') {
            link.classList.add('active');
        }
    });

});

// подсветка меню

window.addEventListener('popstate', () => {
    highlightActiveLink();
});

function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-menu li a');

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.href === window.location.href || link.href === window.location.href + '/') {
            link.classList.add('active');
        }
    });
}

highlightActiveLink();



