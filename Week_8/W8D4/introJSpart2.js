// titleize 
function titleize(names, callback) {
    let titleized = names.map( function(ele) {
        return `Mx. ${ele} Jingleheimer Schmidt`
    })
    callback(titleized);
};

function printCallback(titleized){
    titleized.forEach(function(ele) {
        console.log(ele);
    })
}
titleize(["Mary", "Brian", "Leo"], printCallback);

// elephant 

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
};

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`)
};

Elephant.prototype.grow = function() {
    this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function () {
    trickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};
