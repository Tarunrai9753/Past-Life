
var adjectives = ["Black", "White", "Gray", "Brown", "Red", "Pink", "Crimson", "Carnelian", "Orange", "Yellow", "Ivory", "Cream", "Green", "Viridian", "Aquamarine", "Cyan", "Blue", "Cerulean", "Azure", "Indigo", "Navy", "Violet", "Purple", "Lavender", "Magenta", "Rainbow", "Iridescent", "Spectrum", "Prism", "Bold", "Vivid", "Pale", "Clear", "Glass", "Translucent", "Misty", "Dark", "Light", "Gold", "Silver", "Copper", "Bronze", "Steel", "Iron", "Brass", "Mercury", "Zinc", "Chrome", "Platinum", "Titanium", "Nickel", "Lead", "Pewter", "Rust", "Metal", "Stone", "Quartz", "Granite", "Marble", "Alabaster", "Agate", "Jasper", "Pebble", "Pyrite", "Crystal", "Geode", "Obsidian", "Mica", "Flint", "Sand", "Gravel", "Boulder", "Basalt", "Ruby", "Beryl", "Scarlet", "Citrine", "Sulpher", "Topaz", "Amber", "Emerald", "Malachite", "Jade", "Abalone", "Lapis", "Sapphire", "Diamond", "Peridot", "Gem", "Jewel", "Bevel", "Coral", "Jet", "Ebony", "Wood", "Tree", "Cherry", "Maple", "Cedar", "Branch", "Bramble", "Rowan", "Ash", "Fir", "Pine", "Cactus", "Alder", "Grove", "Forest", "Jungle", "Palm", "Bush", "Mulberry", "Juniper", "Vine", "Ivy", "Rose", "Lily", "Tulip", "Daffodil", "Honeysuckle", "Fuschia", "Hazel", "Walnut", "Almond", "Lime", "Lemon", "Apple", "Blossom", "Bloom", "Crocus", "Rose", "Buttercup", "Dandelion", "Iris", "Carnation", "Fern", "Root", "Branch", "Leaf", "Seed", "Flower", "Petal", "Pollen", "Orchid", "Mangrove", "Cypress", "Sequoia", "Sage", "Heather", "Snapdragon", "Daisy", "Mountain", "Hill", "Alpine", "Chestnut", "Valley", "Glacier", "Forest", "Grove", "Glen", "Tree", "Thorn", "Stump", "Desert", "Canyon", "Dune", "Oasis", "Mirage", "Well", "Spring", "Meadow", "Field", "Prairie", "Grass", "Tundra", "Island", "Shore", "Sand", "Shell", "Surf", "Wave", "Foam", "Tide", "Lake", "River", "Brook", "Stream", "Pool", "Pond", "Sun", "Sprinkle", "Shade", "Shadow", "Rain", "Cloud", "Storm", "Hail", "Snow", "Sleet", "Thunder", "Lightning", "Wind", "Hurricane", "Typhoon", "Dawn", "Sunrise", "Morning", "Noon", "Twilight", "Evening", "Sunset", "Midnight", "Night", "Sky", "Star", "Stellar", "Comet", "Nebula", "Quasar", "Solar", "Lunar", "Planet", "Meteor", "Sprout", "Pear", "Plum", "Kiwi", "Berry", "Apricot", "Peach", "Mango", "Pineapple", "Coconut", "Olive", "Ginger", "Root", "Plain", "Fancy", "Stripe", "Spot", "Speckle", "Spangle", "Ring", "Band", "Blaze", "Paint", "Pinto", "Shade", "Tabby", "Brindle", "Patch", "Calico", "Checker", "Dot", "Pattern", "Glitter", "Glimmer", "Shimmer", "Dull", "Dust", "Dirt", "Glaze", "Scratch", "Quick", "Swift", "Fast", "Slow", "Clever", "Fire", "Flicker", "Flash", "Spark", "Ember", "Coal", "Flame", "Chocolate", "Vanilla", "Sugar", "Spice", "Cake", "Pie", "Cookie", "Candy", "Caramel", "Spiral", "Round", "Jelly", "Square", "Narrow", "Long", "Short", "Small", "Tiny", "Big", "Giant", "Great", "Atom", "Peppermint", "Mint", "Butter", "Fringe", "Rag", "Quilt", "Truth", "Lie", "Holy", "Curse", "Noble", "Sly", "Brave", "Shy", "Lava", "Foul", "Leather", "Fantasy", "Keen", "Luminous", "Feather", "Sticky", "Gossamer", "Cotton", "Rattle", "Silk", "Satin", "Cord", "Denim", "Flannel", "Plaid", "Wool", "Linen", "Silent", "Flax", "Weak", "Valiant", "Fierce", "Gentle", "Rhinestone", "Splash", "North", "South", "East", "West", "Summer", "Winter", "Autumn", "Spring", "Season", "Equinox", "Solstice", "Paper", "Motley", "Torch", "Ballistic", "Rampant", "Shag", "Freckle", "Wild", "Free", "Chain", "Sheer", "Crazy", "Mad", "Candle", "Ribbon", "Lace", "Notch", "Wax", "Shine", "Shallow", "Deep", "Bubble", "Harvest", "Fluff", "Venom", "Boom", "Slash", "Rune", "Cold", "Quill", "Love", "Hate", "Garnet", "Zircon", "Power", "Bone", "Void", "Horn", "Glory", "Cyber", "Nova", "Hot", "Helix", "Cosmic", "Quark", "Quiver", "Holly", "Clover", "Polar", "Regal", "Ripple", "Ebony", "Wheat", "Phantom", "Dew", "Chisel", "Crack", "Chatter", "Laser", "Foil", "Tin", "Clever", "Treasure", "Maze", "Twisty", "Curly", "Fortune", "Fate", "Destiny", "Cute", "Slime", "Ink", "Disco", "Plume", "Time", "Psychadelic", "Relic", "Fossil", "Water", "Savage", "Ancient", "Rapid", "Road", "Trail", "Stitch", "Button", "Bow", "Nimble", "Zest", "Sour", "Bitter", "Phase", "Fan", "Frill", "Plump", "Pickle", "Mud", "Puddle", "Pond", "River", "Spring", "Stream", "Battle", "Arrow", "Plume", "Roan", "Pitch", "Tar", "Cat", "Dog", "Horse", "Lizard", "Bird", "Fish", "Saber", "Scythe", "Sharp", "Soft", "Razor", "Neon", "Dandy", "Weed", "Swamp", "Marsh", "Bog", "Peat", "Moor", "Muck", "Mire", "Grave", "Fair", "Just", "Brick", "Puzzle", "Skitter", "Prong", "Fork", "Dent", "Dour", "Warp", "Luck", "Coffee", "Split", "Chip", "Hollow", "Heavy", "Legend", "Hickory", "Mesquite", "Nettle", "Rogue", "Charm", "Prickle", "Bead", "Sponge", "Whip", "Bald", "Frost", "Fog", "Oil", "Veil", "Cliff", "Volcano", "Rift", "Maze", "Proud", "Dew", "Mirror", "Shard", "Salt", "Pepper", "Honey", "Thread", "Bristle", "Ripple", "Glow", "Zenith"];

var nouns = ["head", "crest", "crown", "tooth", "fang", "horn", "frill", "skull", "bone", "tongue", "throat", "voice", "nose", "snout", "chin", "eye", "sight", "seer", "speaker", "singer", "song", "chanter", "howler", "chatter", "shrieker", "shriek", "jaw", "bite", "biter", "neck", "shoulder", "fin", "wing", "arm", "lifter", "grasp", "grabber", "hand", "paw", "foot", "finger", "toe", "thumb", "talon", "palm", "touch", "racer", "runner", "hoof", "fly", "flier", "swoop", "roar", "hiss", "hisser", "snarl", "dive", "diver", "rib", "chest", "back", "ridge", "leg", "legs", "tail", "beak", "walker", "lasher", "swisher", "carver", "kicker", "roarer", "crusher", "spike", "shaker", "charger", "hunter", "weaver", "crafter", "binder", "scribe", "muse", "snap", "snapper", "slayer", "stalker", "track", "tracker", "scar", "scarer", "fright", "killer", "death", "doom", "healer", "saver", "friend", "foe", "guardian", "thunder", "lightning", "cloud", "storm", "forger", "scale", "hair", "braid", "nape", "belly", "thief", "stealer", "reaper", "giver", "taker", "dancer", "player", "gambler", "twister", "turner", "painter", "dart", "drifter", "sting", "stinger", "venom", "spur", "ripper", "swallow", "devourer", "knight", "lady", "lord", "queen", "king", "master", "mistress", "prince", "princess", "duke", "dutchess", "samurai", "ninja", "knave", "slave", "servant", "sage", "wizard", "witch", "warlock", "warrior", "jester", "paladin", "bard", "trader", "sword", "shield", "knife", "dagger", "arrow", "bow", "fighter", "bane", "follower", "leader", "scourge", "watcher", "cat", "panther", "tiger", "cougar", "puma", "jaguar", "ocelot", "lynx", "lion", "leopard", "ferret", "weasel", "wolverine", "bear", "raccoon", "dog", "wolf", "kitten", "puppy", "cub", "fox", "hound", "terrier", "coyote", "hyena", "jackal", "pig", "horse", "donkey", "stallion", "mare", "zebra", "antelope", "gazelle", "deer", "buffalo", "bison", "boar", "elk", "whale", "dolphin", "shark", "fish", "minnow", "salmon", "ray", "fisher", "otter", "gull", "duck", "goose", "crow", "raven", "bird", "eagle", "raptor", "hawk", "falcon", "moose", "heron", "owl", "stork", "crane", "sparrow", "robin", "parrot", "cockatoo", "carp", "lizard", "gecko", "iguana", "snake", "python", "viper", "boa", "condor", "vulture", "spider", "fly", "scorpion", "heron", "oriole", "toucan", "bee", "wasp", "hornet", "rabbit", "bunny", "hare", "brow", "mustang", "ox", "piper", "soarer", "flasher", "moth", "mask", "hide", "hero", "antler", "chill", "chiller", "gem", "ogre", "myth", "elf", "fairy", "pixie", "dragon", "griffin", "unicorn", "pegasus", "sprite", "fancier", "chopper", "slicer", "skinner", "butterfly", "legend", "wanderer", "rover", "raver", "loon", "lancer", "glass", "glazer", "flame", "crystal", "lantern", "lighter", "cloak", "bell", "ringer", "keeper", "centaur", "bolt", "catcher", "whimsey", "quester", "rat", "mouse", "serpent", "wyrm", "gargoyle", "thorn", "whip", "rider", "spirit", "sentry", "bat", "beetle", "burn", "cowl", "stone", "gem", "collar", "mark", "grin", "scowl", "spear", "razor", "edge", "seeker", "jay", "ape", "monkey", "gorilla", "koala", "kangaroo", "yak", "sloth", "ant", "roach", "weed", "seed", "eater", "razor", "shirt", "face", "goat", "mind", "shift", "rider", "face", "mole", "vole", "pirate", "llama", "stag", "bug", "cap", "boot", "drop", "hugger", "sargent", "snagglefoot", "carpet", "curtain"];


var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


var centuary=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st"]

var zodiacsigns = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];

function randomNoun(generator) {
    generator = generator || Math.random;

    return nouns[Math.floor(generator() * nouns.length)];
}

function randomAdjective(generator) {
    generator = generator || Math.random;

    return adjectives[Math.floor(generator() * adjectives.length)];
}

function generateStupidName(generator) {
    var noun1 = randomNoun(generator);
    var noun2 = randomNoun(generator);
    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
    var adjective = randomAdjective(generator);
    return adjective + noun1 + ' ' + noun2;
}


function cntry(generator) {
    generator = generator || Math.random;

    return country_list[Math.floor(generator() * country_list.length)];
}


function year(generator) {
    generator = generator || Math.random;

    return centuary[Math.floor(generator() * centuary.length)];
}


function zodiac(generator) {
    generator = generator || Math.random;

    return zodiacsigns[Math.floor(generator() * zodiacsigns.length)];
}



var randomAge = Math.floor(Math.random() * (95 - 20 + 1)) + 20;



var sillyName = generateStupidName();
var cn = cntry();
var yr = year();

var zd = zodiac();



function shans() {
    document.getElementById("fullname").innerHTML = `${sillyName}`;
    document.getElementById("age").innerHTML = `${randomAge}`;   
if(randomAge<30){
    document.getElementById("married").innerHTML = `Unmarried`;
}
else{
    document.getElementById("married").innerHTML = `Married`;

}
document.getElementById("country").innerHTML = `${cn}`; 
document.getElementById("centuary").innerHTML = `${yr} Centuary`;   

document.getElementById("zodiac").innerHTML = `${zd}`;   



}