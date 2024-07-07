$(document).ready(function() {
    // Array of animals
    var animals = [
        {
            image: 'images/bear.png',
            name: "Bear",
            sound: 'sound/bear.wav',
            used: false
        },
        {
            image: 'images/deer.png',
            name: "Deer",
            sound: 'sound/deer.wav',
            used: false
        },
        {
            image: 'images/eagle.png',
            name: "Eagle",
            sound: 'sound/eagle.wav',
            used: false
        },
        {
            image: 'images/dog.png',
            name: "Dog",
            sound: 'sound/dog.wav',
            used: false
        },
        {
            image: 'images/cat.png',
            name: "Cat",
            sound: 'sound/cat.wav',
            used: false
        },
        {
            image: 'images/sheep.png',
            name: "Sheep",
            sound: 'sound/sheep.wav',
            used: false
        },
        {
            image: 'images/goat.png',
            name: "Goat",
            sound: 'sound/goat.wav',
            used: false
        },
        {
            image: 'images/elephant.png',
            name: "Elephant",
            sound: 'sound/elephant.wav',
            used: false
        },
        {
            image: 'images/cow.png',
            name: "Cow",
            sound: 'sound/cow.wav',
            used: false
        },
        {
            image: 'images/mouse.png',
            name: "Mouse",
            sound: 'sound/mouse.wav',
            used: false
        },
        {
            image: 'images/horse.png',
            name: "Horse",
            sound: 'sound/horse.wav',
            used: false
        },
        {
            image: 'images/wolf.png',
            name: "Wolf",
            sound: 'sound/wolf.wav',
            used: false
        },
        {
            image: 'images/goose.png',
            name: "Goose",
            sound: 'sound/goose.wav',
            used: false
        },
        {
            image: 'images/rooster.png',
            name: "Rooster",
            sound: 'sound/rooster.wav',
            used: false
        },
        {
            image: 'images/whale.png',
            name: "Whalee",
            sound: 'sound/whale.wav',
            used: false
        },
        {
            image: 'images/dolphin.png',
            name: "Dolphin",
            sound: 'sound/dolphin.wav',
            used: false
        },
        {
            image: 'images/tiger.png',
            name: "Tiger",
            sound: 'sound/tiger.wav',
            used: false
        },
        {
            image: 'images/snake.png',
            name: "Snake",
            sound: 'sound/snake.wav',
            used: false
        },
        {
            image: 'images/parrot.png',
            name: "Parrot",
            sound: 'sound/parrot.wav',
            used: false
        }
    ];

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
