let part1 = ["Electric", "Neon", "Crimson", "Midnight", "Golden", "Astral", "Feral", "Broken", "Silent", "Endless", "Phantom", "Frozen", "Velvet", "Hollow", "Solar", "Cosmic", "Doomed", "Fading", "Fuzzy", "Molten", "Violet", "Rusty", "Emerald", "Starlit", "Enchanted", "Reckless", "Burning", "Iron", "Sacred", "Wandering", "Synthetic", "Shadow", "Thunder", "Eternal", "Radiant", "Obsidian", "Wicked", "Urban", "Wild", "Haunted", "Secret", "Lunar", "Glowing", "Stranded", "Infinite", "Wired", "Ghostly", "Brutal", "Savage", "Blackened", "Infernal", "Abyssal", "Grim", "Raging", "Toxic", "Gutter", "Anarchic", "Chaotic", "Vintage", "Retro", "Turbo", "Chrome", "Analog", "Pastel", "Digital", "Quantum", "Hyper", "Solarized", "Arcade", "Vapor", "Mystic", "Runic", "Rustic", "Worn", "Timber", "Autumn", "Forest", "Woven", "Folkloric", "Echoing", "Bass-Driven", "Kinetic", "Pulsing", "Fractal", "Synth-Laced", "Holographic", "Laser-Burned", "Boom-Bap", "Golden-Era", "Flowing", "Rhythmic", "Cipher", "Concrete", "Skyline", "Streetlight", "Echo-Chamber", "Afterglow", "Chromatic", "Fire-Forged", "Spellbound"];
let part2 = ["Tigers", "Orbits", "Echoes", "Canyons", "Rituals", "Engineers", "Crows", "Pirates", "Giants", "Mirrors", "Vipers", "Wolves", "Signals", "Dreamers", "Cascades", "Monoliths", "Circuits", "Runaways", "Voyagers", "Vultures", "Horizons", "Golems", "Skeletons", "Nomads", "Comets", "Rebels", "Banshees", "Prophets", "Drifters", "Tempests", "Phantoms", "Machines", "Storms", "Sirens", "Cacti", "Ghosts", "Dragons", "Dynamos", "Statues", "Knives", "Pilgrims", "Idols", "Guardians", "Ravens", "Serpents", "Juggernauts", "Demons", "Warlords", "Gravewalkers", "Mourners", "Executioners", "Cultists", "Gargoyles", "Panthers", "Hydras", "Thrones", "Dungeons", "Crusaders", "Outlaws", "Saboteurs", "Sabers", "Vandals", "Scorpions", "Bruisers", "Dropouts", "Rejects", "Decay", "Rioters", "Misfits", "Retrogrades", "Arcaders", "Lasers", "Synths", "Daydreamers", "Nightdrivers", "Lightchasers", "Specters", "Runecarvers", "Balladeers", "Minstrels", "Wanderers", "Treetops", "Riverfolk", "Drumlords", "Basslines", "Waveforms", "Shadows", "Subwoofers", "Beatmakers", "Rhymecasters", "Street Poets", "Cipher Kids", "Turntablists", "Storytellers", "Dreamweavers", "Timekeepers", "Gridrunners"];
let part3 = ["Collective", "Syndicate", "Division", "Assembly", "Uprising", "Network", "Choir", "Alliance", "Empire", "Project", "Conspiracy", "Coalition", "Movement", "Brotherhood", "Rebellion", "Legion", "Society", "Unit", "Machine", "Protocol", "Council", "Company", "Dynasty", "Agenda", "Experiment", "Frontier", "Order", "Manifesto", "Program", "Union", "Circuit", "Crew", "Cult", "Chapter", "Engine", "Brigade", "Authority", "Faction", "Mob", "Sect", "Regiment", "Guild", "Horde", "Pact", "Covenant", "Ritual", "Forge", "Circle", "Crusade", "Revue", "Revival", "Ramblers", "Roamers", "Assembly", "Tribe", "Ensemble", "Campfire", "Brotherhood", "Beat Unit", "Cipher Crew", "Bass Syndicate", "808 Order", "Vinyl Guild", "Groove Collective", "Wavefront", "Order", "Retro Society", "Synth Division", "Pulse Network", "Drift Project", "Midnight Union", "Thrash Battalion", "Punk Chapter", "Folk Brigade"];

let randomWord1 = "";
let randomWord2 = "";
let randomWord3 = "";

let i1 = 0;
let i2 = 0;
let i3 = 0;

let shake = 0;

function setup()
{
    createCanvas(400, 400);
    background(0);
    textAlign(CENTER);
    textSize(60);
}
 
function draw() 
{
        background(0);

        fill("red"); 
        text(randomWord1, width / 2 + shake, 100);

        fill("yellow");
        text(randomWord2, width / 2 + shake, height / 2);

        fill("blue");
        text(randomWord3, width / 2 + shake, 300);
}

function keyPressed()
{
        if (key == ' ')
        {
        let i1 = floor(random(0, part1.length));
        let i2 = floor(random(0, part2.length));
        let i3 = floor(random(0, part3.length));

        let randomWord1 = part1[i1];
        let randomWord2 = part2[i2];
        let randomWord3 = part3[i3];
        }       
}