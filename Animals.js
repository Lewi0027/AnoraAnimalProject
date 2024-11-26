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

/**
 * Generates image file path for a given animal
 * @param {string} animalName - Name of the animal
 * @param {number} imageNum - Image number
 * @returns {string} Full path to the animal image
 */
function generateImagePath(animalName, imageNum) {
    return `images/${animalName.toLowerCase()}${imageNum}.png`;
}

/**
 * Generates sound file path for a given animal
 * @param {string} animalName - Name of the animal
 * @returns {string} Full path to the animal sound file
 */
function generateSoundPath(animalName) {
    return `sound/${animalName.toLowerCase()}.wav`;
}

// Animal configuration with improved structure
const animals = [
    { name: "Baby", imageCount: 2 },
    { name: "Bear", imageCount: 3 },
    { name: "Bee", imageCount: 1 },
    { name: "Cat", imageCount: 1 },
    { name: "Chimpanzee", imageCount: 2 },
    { name: "Cow", imageCount: 1 },
    { name: "Crow", imageCount: 1 },
    { name: "Deer", imageCount: 1 },
    { name: "Dog", imageCount: 1 },
    { name: "Dolphin", imageCount: 1 },
    { name: "Donkey", imageCount: 1 },
    { name: "Duck", imageCount: 2 },
    { name: "Eagle", imageCount: 2 },
    { name: "Elephant", imageCount: 1 },
    { name: "Frog", imageCount: 1 },
    { name: "Godzilla", imageCount: 1 },
    { name: "Goat", imageCount: 1 },
    { name: "Goose", imageCount: 2 },
    { name: "Horse", imageCount: 2 },
    { name: "Mouse", imageCount: 1 },
    { name: "Parrot", imageCount: 2 },
    { name: "Pig", imageCount: 2 },
    { name: "Rooster", imageCount: 1 },
    { name: "Seal", imageCount: 2 },
    { name: "Sheep", imageCount: 1 },
    { name: "Snake", imageCount: 2 },
    { name: "Tiger", imageCount: 2 },
    { name: "Turkey", imageCount: 1 },
    { name: "Whale", imageCount: 1 },
    { name: "Wolf", imageCount: 2 }
].map(animal => ({
    ...animal,
    randomImageNum: Math.floor(Math.random() * animal.imageCount) + 1,
    get image() {
        return generateImagePath(this.name, this.randomImageNum);
    },
    get sound() {
        return generateSoundPath(this.name);
    },
    used: false
}));