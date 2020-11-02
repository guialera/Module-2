/*constructor(name, totalCoins, status, hasStar, setName, gotHit, getPowerup, gameActive, addCoin, print) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    this.setName = setName
    this.gotHit = gotHit
    this.getPowerup = getPowerup
    this.gameActive = gameActive
    this.addCoin = addCoin
    this.print = print
}*/

class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName() {
        this.name = namePicked
    }

    gotHit() {
        if (this.status === "You are a star!") {
            this.hasStar = false;
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = false;
            this.status = "Big";
        } else if (this.status === "Big") {
            /*console.log("This works inside got hit!")*/
            this.hasStar = false;
            this.status = "Small";
            /*console.log("This works!")*/
        } else if (this.status === "Small") {
            this.hasStar = false;
            this.status = "Dead";
            this.gameActive = false;
            console.log(`Sorry ${this.name} you have died!`);
            clearInterval(gameContinue)
        }

    }

    gotPowerup() {
        if (this.status === "Powered Up") {
            console.log("Congratulations! You got a star!")
            this.hasStar = true;
            this.status = "You are a star!";
        } else if (this.status === "Big") {
            /*console.log("This works inside got power up!")*/
            this.hasStar = false;
            this.status = "Powered Up";
        } else if (this.status === "Small") {
            this.hasStar = false;
            this.status = "Big";
        } else if (this.status === "Dead") {
            this.hasStar = false;
            this.gameActive = false;
        }

    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        if (this.hasStar === false) {
            console.log({
                Name: this.name,
                Status: this.status,
                TotalCoins: this.totalCoins,
                /*StarProperties: this.hasStar,
                GameActive: this.gameActive*/
            }
            )
        } else if (this.hasStar === true) {
            console.log({
                Name: this.name,
                Status: this.status,
                TotalCoins: this.totalCoins,
                /*StarProperties: this.hasStar,
                GameActive: this.gameActive*/
            }, "You have a star!"
            )
        }
    }
}

const newPlayer = new Player("", 0, "Big", false, true)

const getName = getRandomInt(0, 1)

if (getName === 0) {
    namePicked = "Mario";
    newPlayer.setName(namePicked);
} else if (getName === 1) {
    namePicked = "Luigi";
    newPlayer.setName(namePicked);
}

console.log(`It's me ${namePicked}!!`)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*const outcome = getRandomInt(0, 2)

console.log(outcome)*/

function randomOutcome() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const outcome = getRandomInt(0, 2)

    if (outcome === 0) {
        /*console.log("This Works 0!");*/
        newPlayer.gotHit();
        newPlayer.print();
    } else if (outcome === 1) {
        /*console.log("This Works 1!");*/
        newPlayer.gotPowerup();
        newPlayer.print();
    } else if (outcome === 2) {
        /*console.log("This Works 2!");*/
        newPlayer.addCoin();
        newPlayer.print();
    }
}

const gameContinue = setInterval(randomOutcome, 1500)

/*if (newPlayer.gameActive === false) {
    console.log("You are dead!")
    clearInterval(gameContinue)
}*/


/*console.log(newPlayer.status)*/