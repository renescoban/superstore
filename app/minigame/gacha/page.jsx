"use client"
import React, { useState } from 'react';

const characters = [
  { name: 'Aether', rarity: 1, element: 'Anemo', weapon: 'Sword', description: 'The Traveler from another world, seeking his lost sibling.' },
  { name: 'Lumine', rarity: 1, element: 'Anemo', weapon: 'Sword', description: 'The Traveler from another world, seeking her lost sibling.' },
  { name: 'Noelle', rarity: 1, element: 'Geo', weapon: 'Claymore', game: 'Genshin Impact', description: 'A young maid who works at the Knights of Favonius.' },
  { name: 'Barbara', rarity: 2, element: 'Hydro', weapon: 'Catalyst', game: 'Genshin Impact', description: 'A young priestess who works at the Church of Favonius.' },
  { name: 'Amber', rarity: 2, element: 'Pyro', weapon: 'Bow', description: "The Knights of Favonius's most energetic and optimistic member." },
  { name: 'Kaeya', rarity: 2, element: 'Cryo', weapon: 'Sword', description: 'The Cavalry Captain of the Knights of Favonius, known for his mysterious past.' },
  { name: 'Diluc', rarity: 3, element: 'Pyro', weapon: 'Claymore', description: 'The former Grand Master of the Knights of Favonius, now a vigilante seeking justice.' },
  { name: 'Jean', rarity: 3, element: 'Anemo', weapon: 'Sword', description: 'The Acting Grand Master of the Knights of Favonius, known for her strong leadership and healing abilities.' },
  { name: 'Diona', rarity: 3, element: 'Cryo', weapon: 'Bow', game: 'Genshin Impact', description: 'A young bartender who is afraid of cats.' },
  { name: 'Sayu', rarity: 3, element: 'Anemo', weapon: 'Sword', game: 'Genshin Impact', description: 'A young ninja who works for the Inazuman Shogunate.' },
  { name: 'Thoma', rarity: 3, element: 'Pyro', weapon: 'Polearm', game: 'Genshin Impact', description: 'A young servant who works at the Kamisato Clan.' },
  { name: 'Venti', rarity: 4, element: 'Anemo', weapon: 'Bow', description: 'The bard and god of freedom, known for his carefree personality and powerful wind abilities.' },
  { name: 'Zhongli', rarity: 4, element: 'Geo', weapon: 'Polearm', description: 'The former Geo Archon, now a mortal consultant with a mysterious past.' },
  { name: 'Raiden Shogun', rarity: 5, element: 'Electro', weapon: 'Polearm', description: 'The Electro Archon, also known as Ei, the Eternal Shogun, who seeks to uphold the vision of her predecessor.' },
  { name: 'Kamisato Ayaka', rarity: 5, element: 'Cryo', weapon: 'Sword', description: "The Yashiro Commission's Kamisato Clan's heiress, known for her grace and elegance, as well as her powerful ice abilities." },
  { name: 'Xiao', rarity: 5, element: 'Anemo', weapon: 'Polearm', description: 'The Adeptus Yaksha, a warrior who protects Liyue from evil spirits.' },
  { name: 'Ganyu', rarity: 5, element: 'Cryo', weapon: 'Bow', description: 'The half-Qilin secretary of the Liyue Qixing, known for her incredible archery skills and her ability to freeze enemies.' },
  { name: 'Albedo', rarity: 5, element: 'Geo', weapon: 'Sword', description: 'The Chief Alchemist of the Knights of Favonius, a genius who can create life-like constructs.' },
  { name: 'Eula', rarity: 5, element: 'Cryo', weapon: 'Claymore', description: 'The Spindrift Knight of the Knights of Favonius, a descendant of the Lawrence Clan, known for her powerful ice attacks and her troubled past.' },
  { name: 'Klee', rarity: 5, element: 'Pyro', weapon: 'Catalyst', description: 'A young Pyro user and adventurer from Mondstadt, known for her love of explosives.' },
  { name: 'Qiqi', rarity: 5, element: 'Cryo', weapon: 'Sword', description: 'A zombie girl who works as a pharmacist in Liyue, known for her ability to revive the dead.' },
  { name: 'Hu Tao', rarity: 5, element: 'Pyro', weapon: 'Polearm', description: 'The director of Wangsheng Funeral Parlor, a cheerful and outgoing girl who loves to play pranks.' },
  { name: 'Yelan', rarity: 5, element: 'Hydro', weapon: 'Bow', description: 'A mysterious mercenary who works for the Ministry of Civil Affairs, known for her incredible speed and agility.' },
  { name: 'Shenhe', rarity: 5, element: 'Cryo', weapon: 'Polearm', description: 'A disciple of Cloudsea Immortal Guizhong, who has lived in seclusion for many years.' },
  { name: 'Yoimiya', rarity: 5, element: 'Pyro', weapon: 'Bow', description: 'A popular firework expert from Inazuma, known for her outgoing personality and her love of festivals.' },
  // Honkai Impact 3rd
  { name: 'Kiana Kaslana', rarity: 5, element: 'Ice', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'The protagonist of Honkai Impact 3rd, a young girl who fights against the Honkai.' },
  { name: 'Mei', rarity: 5, element: 'Ice', weapon: 'Sword', game: 'Honkai Impact 3rd', description: 'A mysterious girl who wields a powerful ice sword.' },
  { name: 'Bronya Zaychik', rarity: 5, element: 'Ice', weapon: 'Grenade Launcher', game: 'Honkai Impact 3rd', description: 'A young girl who fights with a powerful grenade launcher.' },
  { name: 'Theresa Apocalypse', rarity: 5, element: 'Ice', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A young girl who wields powerful ice-based guns.' },
  { name: 'Himeko', rarity: 5, element: 'Fire', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A fiery-haired woman who wields powerful fire-based guns.' },
  { name: 'Fu Hua', rarity: 5, element: 'Physical', weapon: 'Sword', game: 'Honkai Impact 3rd', description: 'A powerful warrior who wields a powerful sword.' },
  { name: 'Kallen Kaslana', rarity: 5, element: 'Ice', weapon: 'Sword', game: 'Honkai Impact 3rd', description: "Kiana's older sister, a powerful warrior who fights against the Honkai." },
  { name: 'Rita Rossweisse', rarity: 5, element: 'Ice', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A mysterious woman who wields powerful ice-based guns.' },
  { name: 'Durandal', rarity: 5, element: 'Ice', weapon: 'Sword', game: 'Honkai Impact 3rd', description: 'A powerful Valkyrie who wields a powerful ice sword.' },
  { name: 'Aponia', rarity: 5, element: 'Ice', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A powerful Honkai Herrscher who wields powerful ice-based guns.' },
  { name: 'Serenice', rarity: 5, element: 'Ice', weapon: 'Sword', game: 'Honkai Impact 3rd', description: 'A powerful Valkyrie who wields a powerful ice sword.' },
  { name: 'Yae Sakura', rarity: 5, element: 'Lightning', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A powerful Valkyrie who wields powerful lightning-based guns.' },
  { name: 'HoV (Herrscher of Void)', rarity: 5, element: 'Void', weapon: 'Sword', game: 'Honkai Impact 3rd', description: 'A powerful Honkai Herrscher who wields a powerful void-based sword.' },
  { name: 'HoF (Herrscher of Flame)', rarity: 5, element: 'Fire', weapon: 'Guns', game: 'Honkai Impact 3rd', description: 'A powerful Honkai Herrscher who wields powerful fire-based guns.' },
  // Fire Emblem Heroes
  { name: 'Marth', rarity: 5, element: 'Sword', weapon: 'Sword', game: 'Fire Emblem Heroes', description: 'The prince of Altea, known for his swordsmanship and leadership.' },
  { name: 'Lucina', rarity: 5, element: 'Sword', weapon: 'Sword', game: 'Fire Emblem Heroes', description: 'A princess from the future, who travels back in time to protect her family.' },
  { name: 'Ike', rarity: 5, element: 'Sword', weapon: 'Sword', game: 'Fire Emblem Heroes', description: 'A mercenary from Crimea, known for his strength and loyalty.' },
  // Summoners War
  { name: 'Wind Archer', rarity: 4, element: 'Wind', weapon: 'Bow', game: 'Summoners War', description: 'A powerful archer who can deal massive damage from a distance.' },
  { name: 'Fire Mage', rarity: 4, element: 'Fire', weapon: 'Staff', game: 'Summoners War', description: 'A powerful mage who can control fire and deal massive damage.' },
  { name: 'Water Undine', rarity: 4, element: 'Water', weapon: 'Sword', game: 'Summoners War', description: 'A powerful warrior who can control water and heal her allies.' },
];

let rarityNumber = ["0","0","0","0","0"]
characters.map( (c)=>{
    rarityNumber[ c.rarity-1]++ 
} )
console.log(rarityNumber)

// Function to randomly select characters based on rarity
const generateRandomCharacters = () => {
  const availableCharacters = [...characters];
  const pulledCharacters = [];

  for (let i = 0; i < 10; i++) {
    const rarityRoll = Math.random();
    let selectedCharacter;
    if (rarityRoll < 0.5) {
      selectedCharacter = characters.filter(c => c.rarity === 1)[Math.floor(Math.random() * rarityNumber[0] )];
    } else if (rarityRoll < 0.75) {
      selectedCharacter = characters.filter(c => c.rarity === 2)[Math.floor(Math.random() * rarityNumber[1])];
    } else if (rarityRoll < 0.9) {
      selectedCharacter = characters.filter(c => c.rarity === 3)[Math.floor(Math.random() * rarityNumber[2])];
    } else if (rarityRoll < 0.975) {
      selectedCharacter = characters.filter(c => c.rarity === 4)[Math.floor(Math.random() * rarityNumber[3])];
    } else {
      selectedCharacter = characters.filter(c => c.rarity === 5)[Math.floor(Math.random() * rarityNumber[4])];
    }

    if (selectedCharacter) {
      pulledCharacters.push({ ...selectedCharacter, rarityRoll: rarityRoll.toFixed(3) });
      availableCharacters.splice(availableCharacters.indexOf(selectedCharacter), 1);
    }
  }

  return pulledCharacters.sort((a, b) => b.rarity - a.rarity);
};

export default function GachaGame() {
  const [randomCharacters, setRandomCharacters] = useState([]);
  const [savedCharacters, setSavedCharacters] = useState([]);

  const handleGenerate = () => {
    setRandomCharacters(generateRandomCharacters());
  };

  const handleSave = (character) => {
    setSavedCharacters(prevState => [...prevState, character]);
  };

  const handleDelete = (index) => {
    setSavedCharacters(prevState => prevState.filter((_, i) => i !== index));
  };

  // Helper function to get rarity style
  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case 1: return 'bg-gray-200 border-gray-400';
      case 2: return 'bg-blue-200 border-blue-400';
      case 3: return 'bg-purple-200 border-purple-400';
      case 4: return 'bg-yellow-200 border-yellow-400';
      case 5: return 'bg-red-300 border-red-400';
      default: return 'bg-white border-gray-400';
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gacha Character Generator</h1>
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Generate Characters
      </button>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Generated Characters</h2>
        <div className="flex flex-wrap">
          {randomCharacters.map((character, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 m-2 w-48 text-center shadow-lg animate__animated animate__fadeIn ${getRarityStyle(character.rarity)}`}
            >
              <p className="font-bold">{character.name}</p>
              <p>Rarity: {'★'.repeat(character.rarity)}</p>
              <p>Rarity Roll: {character.rarityRoll}</p>
              <button
                onClick={() => handleSave(character)}
                className=" mt-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Save
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Saved Characters</h2>
        <div className="flex flex-wrap">
          {savedCharacters.map((character, index) => (
            <div
              key={index}
              className={`relative border rounded-lg p-4 m-2 w-48 text-center shadow-lg ${getRarityStyle(character.rarity)}`}
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-0 right-0 text-red-500 font-bold px-2 hover:text-red-700"
              >
                x
              </button>
              <p className="font-bold">{character.name}</p>
              <p>Rarity: {'★'.repeat(character.rarity)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};