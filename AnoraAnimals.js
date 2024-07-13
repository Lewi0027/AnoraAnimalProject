$(document).ready(function() {
    function imageStringGenerator(string, num) {
        var stringName = 'images/';
        stringName += string;
        stringName += num;
        stringName += '.png';
        return stringName;
    }

    // Array of animals
    var animals = [
        {
            name: "Bear",
            imageNum: 1,
            get image() {
                return imageStringGenerator('bear', this.imageNum);
            },
            sound: 'sound/bear.wav',
            used: false
        },
        {
            name: "Bee",
            imageNum: 1,
            get image() {
                return imageStringGenerator('bee', this.imageNum);
            },
            sound: 'sound/bee.wav',
            used: false
        },
        {
            name: "Cat",
            imageNum: 1,
            get image() {
                return imageStringGenerator('cat', this.imageNum);
            },
            sound: 'sound/cat.wav',
            used: false
        },
        {
            name: "Cow",
            imageNum: 1,
            get image() {
                return imageStringGenerator('cow', this.imageNum);
            },
            sound: 'sound/cow.wav',
            used: false
        },
        {
            name: "Deer",
            imageNum: 1,
            get image() {
                return imageStringGenerator('deer', this.imageNum);
            },
            sound: 'sound/deer.wav',
            used: false
        },
        {
            name: "Dog",
            imageNum: 1,
            get image() {
                return imageStringGenerator('dog', this.imageNum);
            },
            sound: 'sound/dog.wav',
            used: false
        },
        {
            name: "Dolphin",
            imageNum: 1,
            get image() {
                return imageStringGenerator('dolphin', this.imageNum);
            },
            sound: 'sound/dolphin.wav',
            used: false
        },
        {
            name: "Donkey",
            imageNum: 1,
            get image() {
                return imageStringGenerator('donkey', this.imageNum);
            },
            sound: 'sound/donkey.wav',
            used: false
        },
        {
            name: "Duck",
            imageNum: 1,
            get image() {
                return imageStringGenerator('duck', this.imageNum);
            },
            sound: 'sound/duck.wav',
            used: false
        },
        {
            name: "Eagle",
            imageNum: 1,
            get image() {
                return imageStringGenerator('eagle', this.imageNum);
            },
            sound: 'sound/eagle.wav',
            used: false
        },
        {
            name: "Elephant",
            imageNum: 1,
            get image() {
                return imageStringGenerator('elephant', this.imageNum);
            },
            sound: 'sound/elephant.wav',
            used: false
        },
        {
            name: "Frog",
            imageNum: 1,
            get image() {
                return imageStringGenerator('frog', this.imageNum);
            },
            sound: 'sound/frog.wav',
            used: false
        },
        {
            name: "Godzilla",
            imageNum: 1,
            get image() {
                return imageStringGenerator('godzilla', this.imageNum);
            },
            sound: 'sound/godzilla.wav',
            used: false
        },
        {
            name: "Goat",
            imageNum: 1,
            get image() {
                return imageStringGenerator('goat', this.imageNum);
            },
            sound: 'sound/goat.wav',
            used: false
        },
        {
            name: "Goose",
            imageNum: 1,
            get image() {
                return imageStringGenerator('goose', this.imageNum);
            },
            sound: 'sound/goose.wav',
            used: false
        },
        {
            name: "Horse",
            imageNum: 1,
            get image() {
                return imageStringGenerator('horse', this.imageNum);
            },
            sound: 'sound/horse.wav',
            used: false
        },
        {
            name: "Mouse",
            imageNum: 1,
            get image() {
                return imageStringGenerator('mouse', this.imageNum);
            },
            sound: 'sound/mouse.wav',
            used: false
        },
        {
            name: "Parrot",
            imageNum: 1,
            get image() {
                return imageStringGenerator('parrot', this.imageNum);
            },
            sound: 'sound/parrot.wav',
            used: false
        },
        {
            name: "Pig",
            imageNum: 1,
            get image() {
                return imageStringGenerator('pig', this.imageNum);
            },
            sound: 'sound/pig.wav',
            used: false
        },
        {
            name: "Rooster",
            imageNum: 1,
            get image() {
                return imageStringGenerator('rooster', this.imageNum);
            },
            sound: 'sound/rooster.wav',
            used: false
        },
        {
            name: "Sheep",
            imageNum: 1,
            get image() {
                return imageStringGenerator('sheep', this.imageNum);
            },
            sound: 'sound/sheep.wav',
            used: false
        },
        {
            name: "Snake",
            imageNum: 1,
            get image() {
                return imageStringGenerator('snake', this.imageNum);
            },
            sound: 'sound/snake.wav',
            used: false
        },
        {
            name: "Tiger",
            imageNum: 1,
            get image() {
                return imageStringGenerator('tiger', this.imageNum);
            },
            sound: 'sound/tiger.wav',
            used: false
        },
        {
            name: "Whale",
            imageNum: 1,
            get image() {
                return imageStringGenerator('whale', this.imageNum);
            },
            sound: 'sound/whale.wav',
            used: false
        },
        {
            name: "Wolf",
            imageNum: 1,
            get image() {
                return imageStringGenerator('wolf', this.imageNum);
            },
            sound: 'sound/wolf.wav',
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
