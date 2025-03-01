function changeLanguage() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function loadPopulation() {
    // Replace this URL with the actual endpoint or logic to get the population data
    const populationDataUrl = 'https://api.example.com/population';

    fetch(populationDataUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('population-count').textContent = data.population;
        })
        .catch(error => console.error('Error loading population data:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', window.location.origin + '/header.html');
    loadHTML('footer', window.location.origin + '/footer.html');
    loadPopulation();

    // Modal functionality
    const modal = document.getElementById("image-modal");
    const img = document.getElementById("territory-image");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const intervalId = setInterval(function() {
        const element = document.getElementById('current-year');
        if (element) {
            element.textContent = new Date().getFullYear();
            clearInterval(intervalId);
        }
    }, 100);
});

const dropdownIntervalId = setInterval(function() {
    const dropdownContent = document.querySelectorAll('.dropdown-content a');
    if (dropdownContent.length > 0) {
        dropdownContent.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            });
        });
        clearInterval(dropdownIntervalId);
    }
}, 100);