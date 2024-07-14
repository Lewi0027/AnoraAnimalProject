$(document).ready(function() {

    function imageStringGenerator(string, num) {
        var stringName = 'images/';
        stringName += string;
        stringName += num;
        stringName += '.png';
        return stringName;
    }

    animals.forEach(function(animal) {
        animal.randomNum = Math.floor(Math.random() * animal.imageNum) + 1;
    });

    animals.forEach(function(animal) {
        animal.image = imageStringGenerator(animal.name.toLowerCase(), animal.randomNum);
    });

    console.log(animals);

    var selectedAnimals;
    var currentIndex;
    intilializePage();

    // Populate initial animal images and names
    $('#RA1').html('<img src="' + selectedAnimals[0].image + '" alt="' + selectedAnimals[0].name + '">' + selectedAnimals[0].name);
    $('#RA2').html('<img src="' + selectedAnimals[1].image + '" alt="' + selectedAnimals[1].name + '">' + selectedAnimals[1].name);
    $('#RA3').html('<img src="' + selectedAnimals[2].image + '" alt="' + selectedAnimals[2].name + '">' + selectedAnimals[2].name);
    $('#RA4').html('<img src="' + selectedAnimals[3].image + '" alt="' + selectedAnimals[3].name + '">' + selectedAnimals[3].name);

    // Event handler for clicking the sound button
    $('#soundIconButton').on('click', function() {
        playRandomSound();
    });

    // Event handler for clicking animal images
    $('.randomAnimal').on('click', function() {
        var index = $(this).index('.randomAnimal'); // Get the index of the clicked animal
        console.log(index);
        var selectedAnimal = selectedAnimals[index];

        if (index === currentIndex) {
            $('#RA' + (index + 1)).html('<img src="images/smile' + (index + 1) + '.png" alt="Smile"> Good job!');
            selectedAnimal.used = true;

            // Find new sound index
            findNewSound();
        }
    });

    // Function to play a random sound
    function playRandomSound() {
        console.log("cs:" + currentIndex);
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
        console.log("reint: " + reinitialize);
        if (reinitialize == true) {
            intilializePage();
            changePageToTempImageAndReload();
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function intilializePage() {
        shuffle(animals);
        selectedAnimals = animals.slice(0, 4);
        currentIndex = Math.floor(Math.random() * 4);
    }

    function changePageToTempImageAndReload() {
        // Wait .7 second
        setTimeout(function() {
            location.reload();
        }, 50000);
        
        // Replace entire body content with a temporary image
        document.body.innerHTML = '<img src="images/goodJob.png" alt="Good job!" style="width: 100%; object-fit: cover;">';
    
        // Wait 2 seconds
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
});
