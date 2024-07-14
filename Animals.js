// HOW TO:
//
// Turn off an animal without deleting it:
// - Preface it with // (comment out).
// - Make sure that you comment out one comma.
// - Example:
// {
//     name: "Bee",
//     imageNum: 1
// },
//
// Turn down a soundfile:
// - Go to https://audioalter.com/volume
// - Change the decibel level to a good level.
// - Download modified file and replace current sound file (sound/example.wav). Ensure same exact name structure.
//
// Add more images:
// - Get animal PNG image. Set name to "exampleX.png" where X is the lowest unused integer.
// - Change imageNum to X.
// - Tips: Wide and Tall images don't work the best. Boxy images work best
//
// Add a new animal:
// - Get animal PNG image. Set name to "example1.png".
// - Get animal WAV sound file. Set name to "example.wav". No numbers needed, only holds one sound. Info in ReadMe on possible download locations.
// - Place image in Images/ folder and sound in Sound/ folder.
// - Create element in animals[] array below.
// - Set name: to correct animal name in quotes. I.e. "example".
// - Set imageNum to the amount of images. I.e. 1. 

// Generate image string
function imageStringGenerator(string, num) {
    var stringName = 'images/';
    stringName += string;
    stringName += num;
    stringName += '.png';
    return stringName;
}

// Generate sound string
function soundStringGenerator(string) {
    var stringName = 'sound/';
    stringName += string;
    stringName += '.wav';
    return stringName;
}

// Array of animals
var animals = [
    {
        name: "Baby",
        imageNum: 2
    },
    {
        name: "Bear",
        imageNum: 3
    },
    {
        name: "Bee",
        imageNum: 1
    },
    {
        name: "Cat",
        imageNum: 1
    },
    {
        name: "Chimpanzee",
        imageNum: 2
    },
    {
        name: "Cow",
        imageNum: 1
    },
    {
        name: "Crow",
        imageNum: 1
    },
    {
        name: "Deer",
        imageNum: 1
    },
    {
        name: "Dog",
        imageNum: 1
    },
    {
        name: "Dolphin",
        imageNum: 1
    },
    {
        name: "Donkey",
        imageNum: 1
    },
    {
        name: "Duck",
        imageNum: 2
    },
    {
        name: "Eagle",
        imageNum: 2
    },
    {
        name: "Elephant",
        imageNum: 1
    },
    {
        name: "Frog",
        imageNum: 1
    },
    {
        name: "Godzilla",
        imageNum: 1
    },
    {
        name: "Goat",
        imageNum: 1
    },
    {
        name: "Goose",
        imageNum: 2
    },
    {
        name: "Horse",
        imageNum: 2
    },
    {
        name: "Mouse",
        imageNum: 1
    },
    {
        name: "Parrot",
        imageNum: 2
    },
    {
        name: "Pig",
        imageNum: 2
    },
    {
        name: "Rooster",
        imageNum: 1
    },
    {
        name: "Seal",
        imageNum: 2
    },
    {
        name: "Sheep",
        imageNum: 1
    },
    {
        name: "Snake",
        imageNum: 2
    },
    {
        name: "Tiger",
        imageNum: 2
    },
    {
        name: "Turkey",
        imageNum: 1
    },
    {
        name: "Whale",
        imageNum: 1
    },
    {
        name: "Wolf",
        imageNum: 2
    }
];

// Attach image, sound, and used fields to each animal
animals.forEach(function(animal) {
    animal.randomNum = Math.floor(Math.random() * animal.imageNum) + 1;
    animal.image = imageStringGenerator(animal.name.toLowerCase(), animal.randomNum);
    animal.sound = soundStringGenerator(animal.name.toLowerCase());
    animal.used = false;
});