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
  {
    id: 3,
    name: "Akuma",
    description: "Not a very nice karate man",
    country: "Japan",
    lat: 35.36,
    lon: 138.72,
    age: 100,
    image: "akuma1.jpg",
  },
  {
    id: 4,
    name: "Alex",
    description: "John cena wishes he could wrestle like this",
    country: "USA",
    lat: 40.71,
    lon: -74.0,
    age: 35,
    image: "alex1.jpg",
  },
  {
    id: 5,
    name: "Chun-Li",
    description: "The strongest woman in the world",
    country: "China",
    lat: 31.23,
    lon: 121.47,
    age: 31,
    image: "chun1.jpg",
  },
  {
    id: 6,
    name: "Dudley",
    description: "A sophisticated and technical fighter",
    country: "England",
    lat: 51.5,
    lon: -0.12,
    age: 33,
    image: "dudley1.jpg",
  },
  {
    id: 7,
    name: "Elena",
    description: "Hakuna matata she hits like africa bambatta",
    country: "Tanzania",
    lat: -6.36,
    lon: 34.88,
    age: 27,
    image: "elena1.jpg",
  },
  {
    id: 8,
    name: "Gill",
    description: "Quintessential megalomaniac with superiority complex",
    country: "Greece",
    lat: 37.44,
    lon: 25.32,
    age: 99,
    image: "gill1.jpg",
  },
  {
    id: 9,
    name: "Hugo",
    description: "He crush you like puny bug!",
    country: "Germany",
    lat: 48.13,
    lon: 11.58,
    age: 42,
    image: "hugo1.jpg",
  },
  {
    id: 10,
    name: "Ibuki",
    description: "Kuniochi more interested in boys than learning ninjutsu",
    country: "Japan",
    lat: 34.99,
    lon: 135.78,
    age: 23,
    image: "ibuki1.jpg",
  },
  {
    id: 11,
    name: "Makoto",
    description:
      "A talented fighter on a journey to restore her dojo reputation",
    country: "Japan",
    lat: 36.56,
    lon: 136.65,
    age: 25,
    image: "makoto1.jpg",
  },
];
