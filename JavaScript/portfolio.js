function changeProjectImage(projectId, newImageUrl) {
    const projectImage = document.getElementById(projectId);
    if (projectImage) {
        projectImage.src = newImageUrl;
    }
    else {
        newImageUrl = projectImage.src;
}
}

function changeProjectImage(projectId, newImageUrl) {
    const projectImage = document.getElementById(projectId);
    if (projectImage) {
        projectImage.src = newImageUrl;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const project1Card = document.getElementById('project1-image');
    const project2Card = document.getElementById('project2-image');

    project1Card.addEventListener('click', function () {
        changeProjectImage('project1-image', 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=');
    });

    project2Card.addEventListener('click', function () {
        changeProjectImage('project2-image', 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=');
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const skills = document.querySelectorAll(".progress-circle");
    skills.forEach(function (skill) {
            const percentage = parseInt(skill.getAttribute("data-percent"));
    const progressBar = new ProgressBar.Circle(skill, {
        strokeWidth: 6,
    trailWidth: 6,
    duration: 2000,
    text: {
        autoStyleContainer: false,
                },
    step: function (state, circle) {
                    const value = Math.round(circle.value() * 100);
    circle.setText(value + "%");
                },
            });

    progressBar.text.style.fontSize = "20px";
    progressBar.animate(percentage / 100);
        });
    });

