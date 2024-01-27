document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

    
        successMessage.textContent = "Form submitted successfully!";
      
    }
    );
});




document.addEventListener('DOMContentLoaded', function () {
    const scrollTopButton = document.querySelector('.scroll-top-button');

    window.addEventListener('scroll', function () {
        
        if (window.scrollY > 76) { 
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    
    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});




function changeInputColor(inputElement) {
    inputElement.style.color = '#C19898';
}

