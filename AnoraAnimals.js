$(document).ready(function() {
    const MAX_ANIMALS = 4;
    let selectedAnimals = [];
    let currentSoundIndex = 0;

    function initializeGame(numAnimals = MAX_ANIMALS) {
        // Deep shuffle to prevent mutation of original array
        selectedAnimals = animals
            .slice()
            .sort(() => 0.5 - Math.random())
            .slice(0, numAnimals)
            .map(animal => ({...animal, used: false}));
        
        currentSoundIndex = Math.floor(Math.random() * numAnimals);
        renderAnimals();
    }

    function renderAnimals() {
        selectedAnimals.forEach((animal, index) => {
            const $element = $(`#RA${index + 1}`);
            $element.html(`
                <img src="${animal.image}" alt="${animal.name}">
                <span>${animal.name}</span>
            `);
        });
    }

    function playCurrentSound() {
        const currentAnimal = selectedAnimals[currentSoundIndex];
        const $audio = $('#myAudio');
        $audio.attr('src', currentAnimal.sound)[0].play();
    }

    function handleAnimalClick(clickedIndex) {
        if (clickedIndex === currentSoundIndex) {
            $(`#RA${clickedIndex + 1}`).html(`
                <img src="images/smile${clickedIndex + 1}.png" alt="Smile"> 
                <span>Good job!</span>
            `);
            
            selectedAnimals[clickedIndex].used = true;
            findNextUnusedSound();
        }
    }

    function findNextUnusedSound() {
        const remainingAnimals = selectedAnimals.filter(animal => !animal.used);
        
        if (remainingAnimals.length > 0) {
            currentSoundIndex = selectedAnimals.findIndex(animal => !animal.used);
        } else {
            showCompletionScreen();
        }
    }

    function showCompletionScreen() {
        const $body = $('body');
        $body.html(`
            <div class="completion-screen">
                <img src="images/goodJob.png" alt="Good job!" style="max-width: 100%; max-height: 100vh;">
                <button id="restart-btn" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
                    Restart Game
                </button>
            </div>
        `);

        $('#restart-btn').on('click', () => location.reload());
    }

    // Event Listeners
    $('#soundIconButton').on('click', playCurrentSound);
    
    $('.randomAnimal').on('click', function() {
        const index = $(this).index('.randomAnimal');
        handleAnimalClick(index);
    });

    // Initial game setup
    initializeGame();
});