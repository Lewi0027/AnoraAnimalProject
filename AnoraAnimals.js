$(document).ready(function() {
    var selectedAnimals;
    var currentIndex;
    
    initializePage();

    // Populate initial animal images and names
    selectedAnimals.forEach((animal, index) => {
        $('#RA' + (index + 1)).html('<img src="' + animal.image + '" alt="' + animal.name + '">' + animal.name);
    });

    // Event handler for clicking the sound button
    $('#soundIconButton').on('click', function() {
        playRandomSound();
    });

    // Event handler for clicking animal images
    $('.randomAnimal').on('click', function() {
        var index = $(this).index('.randomAnimal'); // Get the index of the clicked animal
        var selectedAnimal = selectedAnimals[index];

        // Correct click sequence
        if (index === currentIndex) {
            $('#RA' + (index + 1)).html('<img src="images/smile' + (index + 1) + '.png" alt="Smile"> Good job!');
            selectedAnimal.used = true;

            // Find new sound index
            findNewSound();
        }
    });

    // Function to play a random sound
    function playRandomSound() {
        var selectedAnimal = selectedAnimals[currentIndex];

        // Play the corresponding sound
        var audioElement = document.getElementById('myAudio');
        audioElement.src = selectedAnimal.sound;
        audioElement.play();
    }

    // Function to find a new unused sound
    function findNewSound() {
        var reinitialize = true;
        for (var i = 0; i < selectedAnimals.length; i++) {
            if (!selectedAnimals[i].used) {
                currentIndex = i;
                reinitialize = false;
                break;
            }
        }
        if (reinitialize == true) {
            initializePage();
            changePageToTempImageAndReload();
        }
    }

    // Shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Create new page
    // Defaults to 4 animals
    function initializePage(numAnimals = 4) {
        shuffle(animals);
        selectedAnimals = animals.slice(0, numAnimals);
        currentIndex = Math.floor(Math.random() * numAnimals);
    }

    function changePageToTempImageAndReload() {
        // Wait x second. no idea how these numbers work
        setTimeout(function() {
            location.reload();
        }, 50000);
        
        // Replace entire body content with a temporary image
        document.body.innerHTML = '<img src="images/goodJob.png" alt="Good job!" style="width: 100vw; height: 100vh; object-position: center;">';

    
        // Wait 2 seconds
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
});
