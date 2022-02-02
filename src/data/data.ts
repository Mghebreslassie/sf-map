export type CharacterData = {
  id: number;
  name: string;
  description: string;
  country: string;
  lat: number;
  lon: number;
  age: number;
  image: string;
};

export const characterData: CharacterData[] = [
  {
    id: 0,
    name: "Ryu Yoshi",
    description: "Homesless karate man",
    country: "Japan",
    lat: 35.44,
    lon: 139.63,
    age: 37,
    image: "ryu1.jpg",
  },
  {
    id: 1,
    name: "Ken Masters",
    description: "Rich boy karate man",
    country: "USA",
    lat: 34.05,
    lon: -118.24,
    age: 33,
    image: "ken1.jpg",
  },
  {
    id: 2,
    name: "Sean Matsuda",
    description: "Karate man in training",
    country: "Brazil",
    lat: -22.9,
    lon: -43.17,
    age: 24,
    image: "sean1.jpg",
  },
];
