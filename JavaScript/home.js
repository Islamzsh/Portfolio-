particlesJS('particles-container', {
    particles: {
        number: {
            value: 30, 
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: 2, 
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse', 
            },
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
       
        "../Assets/images/mypic3-e.png", 
        "../Assets/images/e.png",
    ];
    const changingImage = document.getElementById("changing");
    let currentIndex = 0;

    function changeImage() {
        changingImage.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    setInterval(changeImage, 3000);

    changeImage();
});



document.addEventListener("DOMContentLoaded", function () {
    const jobTitleElement = document.getElementById("job-title");

    const jobTitles = [
        "Computer Engineer",
        "Full Stack Web Developer",
     
    ];

    let currentIndex = 0;

    function changeJobTitle() {
        const currentTitle = jobTitles[currentIndex];
        typeJobTitle(currentTitle);
        currentIndex = (currentIndex + 1) % jobTitles.length;
    }

    function typeJobTitle(title) {
        let currentCharIndex = 0;

        function typeCharacter() {
            if (currentCharIndex < title.length) {
                jobTitleElement.textContent += title.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(typeCharacter, 100); 
            } else {
                setTimeout(eraseJobTitle, 1000); 
            }
        }

        typeCharacter();
    }

    function eraseJobTitle() {
        let currentText = jobTitleElement.textContent;
        if (currentText.length > 0) {
            jobTitleElement.textContent = currentText.slice(0, -1);
            setTimeout(eraseJobTitle, 50); 
        } else {
            setTimeout(changeJobTitle, 1000); 
        }
    }

    changeJobTitle();
});
