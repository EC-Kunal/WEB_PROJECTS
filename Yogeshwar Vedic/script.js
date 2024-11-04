
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyFhDJdDCkTxVjX-21JNHLEJrs50lozV84EJdh88h0Stx_EP1fVXHxayOcEv2vbVhqP/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        .then(response => {
            alert('Form submitted successfully! We will contact you soon! Have a good day!!');
            form.reset();
          })
    })



let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let intervalId;

function showNextSlide() {
	slides[currentSlide].style.left = '-100%';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].style.left = '0';
}

function showPrevSlide() {
	slides[currentSlide].style.left = '100%';
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].style.left = '0';
}

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);

intervalId = setInterval(showNextSlide, 3000);

document.querySelector('.slider').addEventListener('mouseover', () => {
	clearInterval(intervalId);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
	intervalId = setInterval(showNextSlide, 3000);
});

let menuList = document.querySelector("#menulist")
menuList.style.maxHeight = "0px"

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "100vh"
        menuList.style.backgroundColor = "rgb(228, 158, 133)"
    } else {
        menuList.style.maxHeight = "0px"
    }
}

document.querySelectorAll('#nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        document.getElementById('check').checked = false; 
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        if (menuList.style.maxHeight !== "0px") {
            menuList.style.maxHeight = "0px";
        }
    });
});

