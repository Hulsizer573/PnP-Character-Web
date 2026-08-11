// Define characters and their associated information
// This is the information used to a) give character ID for later calls, b) connect other information, and c) populate the text field on the info popup.

/* 
Structure

id: name of the character object used to reference it
name: displayed name
image: displayed image, be sure to match the image name EXACTLY (including file type extension)
peerage, address, age, faceclaim, playedBy: self-explanatory. Populates text in the info popup box- will need to edit popup.js if changes are made to character object info
hasInfo: flags whether to search for text document and displays 'more info' button in info popup

*/
export const characters = [
    {
        id: "xeno",
        name: "Xeno Varyn (Izneris)",
        image: "images/Xeno.png",
        class: "Clockwork Sorcerer",
        species: "Elf",
        age: 24,
        origin: "Minarum, Evoler",
        hasInfo: true,
        playedBy: "Zach"
    },

    {
        id: "nzuri",
        name: "Nzuri Alshaar",
        image: "images/Nzuri.png",
        class: "Bond of Dragonkin Soulbinder",
        species: "Human",
        age: "21",
        origin: "Redbud Hollow, Golgareth",
        hasInfo: true,
        playedBy: "Kay"
    },

    {
        id: "sapphire",
        name: "Sapphire 'Saf' Alshaar",
        image: "images/sapphire.png",
        class: "Mastermaker Artificer",
        species: "Human",
        age: "24",
        origin: "Redbud Hollow, Golgareth",
        hasInfo: true,
        playedBy: "Porom"
    },

    {
        id: "pollux",
        name: "Pollux",
        image: "images/Pollux.png",
        class: "Fighter",
        species: "Tabaxi",
        age: "29",
        origin: "Clavaudhna",
        hasInfo: true,
        playedBy: "Jill"
    },

    {
        id: "llyr",
        name: "Llyr Verran",
        image: "images/Llyr.png",
        class: "Runecrafter Wizard",
        species: "Human",
        age: "28",
        origin: "Clavaudhna",
        hasInfo: true,
        playedBy: "JD"
    },

    {
        id: "viper",
        name: "Viper",
        image: "images/Viper.png",
        class: "Fighter",
        species: "Goblin",
        age: "60",
        origin: "Lucy Lawless",
        hasInfo: true,
        playedBy: "Scott"

    },

    {
        id: "clarina",
        name: "Clarina",
        image: "images/Clarina.png",
        class: "Rogue",
        species: "Half-Elf",
        age: "Unknown",
        origin: "Clavaudhna",
        hasInfo: true,
        playedBy: "Melissa"
    },

    {
        id: "catalina",
        name: "Catalina",
        image: "images/catalina.png",
        class: "Warlock",
        species: "Mermaid",
        age: "22",
        origin: "Quare",
        hasInfo: true,
        playedBy: "Nevi"
    },

    {
        id: "virdan",
        name: "Virdan",
        image: "images/Virdan.png",
        class: "Armorer Artificer",
        species: "Firbolg",
        age: "21",
        origin: "Sayak",
        hasInfo: true,
        playedBy: "Phillip"
    },

    {
        id: "valerian",
        name: "Valerian",
        image: "images/Valerian.png",
        class: "Cleric",
        species: "Human",
        age: "26",
        origin: "Avara",
        hasInfo: true,
        playedBy: "Malum"
    },

    {
        id: "castor",
        name: "Castor",
        image: "images/FaceIconPlaceholder.png",
        class: "Caster",
        species: "Tabaxi",
        age: "27",
        origin: "Clavaudhna",
        hasInfo: true,
        playedBy: "Abe"

    },

    {
        id: "anju",
        name: "Anju",
        image: "images/Anju.png",
        class: "Circle of Shepherds Druid",
        species: "Half-Elf",
        age: 26,
        origin: "Effigy",
        hasInfo: true,
        playedBy: "Dale"
    },

    {
        id: "emily",
        name: "placeholder",
        image: "images/FaceIconPlaceholder.png",
        class: "Oath of Vengeance Paladin",
        species: "Lizardfolk",
        age: "Unknown",
        origin: "The Glasslands",
        hasInfo: true,
        playedBy: "Emily"
    },

    {
        id: "Dana",
        name: "Dana",
        image: "images/FaceIconPlaceholder.png",
        class: "Viscountess",
        species: "Lady Ravenscroft",
        age: "49",
        origin: "Melissa Ponzio",
        hasInfo: true,
        playedBy: "Dana"
    },

    {
        id: "leander",
        name: "Leander",
        image: "images/Leander.png",
        class: "Way of Mercy Monk",
        species: "Wood Elf",
        age: "53",
        origin: "Evoler",
        hasInfo: false,
        playedBy: "Orion"
    },

    {
        id: "blank",
        name: "Blank Slate",
        image: "images/FaceIconPlaceholder.png",
        class: "Barbarian",
        species: "Warforged",
        age: "2",
        origin: "Evoler",
        hasInfo: true,
        playedBy: "Palom"
    }
]
