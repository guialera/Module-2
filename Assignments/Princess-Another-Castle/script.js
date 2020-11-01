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
    constructor(name, totalCoins, status, hasStar, setName, gameActive) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.setName = setName
        this.gameActive = gameActive
    }

    setName(namePicked) {
        namePicked = name
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.hasStar === true;
            this.status === "Big";
        } else if (this.status === "Big") {
            this.hasStar === false;
            this.status === "Small";
            console.log("This works!")
        } else if (status === "Small") {
            hasStar === false;
            status === "Dead";
            gameActive === false;
        }

    }

    gotPowerup() { 
        if (status === "Powered Up") {
            hasStar === true;
            status === "You are a star!";
        } else if (status === "Big") {
            hasStar === false;
            status === "Powered Up";
        } else if (status === "Small") {
            hasStar === false;
            status === "Big";
        } else if (status === "Dead") {
            hasStar === false;
            gameActive === false;
        }

    }

    addCoin() {
        totalCoins++
    }

    print() {
        console.log({
            Name: name,
            TotalCoins: totalCoins,
            Status: status,
            StarProperties: hasStar
        }
        )
    }
}

const newPlayer = new Player("Mario", 0, "Big", false, "Mario", true)

const outcome = Math.floor(Math.random() * 1)

console.log(outcome)

if (outcome === 0){
    console.log("This Works 0!");
    newPlayer.gotHit;
    newPlayer.print;
} else if (outcome === 1){
    console.log("This Works 1!");
    newPlayer.getPowerup;
    newPlayer.print;
} else if (outcome === 2){
    console.log("This Works 2!");
    newPlayer.addCoin;
    newPlayer.print;
}

console.log(newPlayer.status)