const FACTIONS = {
    Autobots: 'autobots',
    Decepticons: 'decepticons'
};

const optimusPrime = {
    faction: FACTIONS.Autobots,
    name:  "Optimus Prime",
    power: 10.9,
    greet:( ) => "Hi, I/'m Optimus " + optimusPrime.name
};

const megatron = {
    name: "Megatron",
    faction: FACTIONS.Decepticons,
    power: 10.5,
    greet: () => "Hi, I/'m " + megatron.name
};