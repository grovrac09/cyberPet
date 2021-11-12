class Pet {
    constructor (type, name) {
        this.type = type,
        this.name = name,
        this.age = 0,
        this.hunger = 20,
        this.thirst = 20,
        this.happiness = 5,
        this.boredom = 15
    }
    food() {
        this.hunger += 5,
        this.happiness += 3
    }
    water() {
        this.thirst -= 5,
        this.boredom += 3
    }
    play() {
        this.thirst -= 3,
        this.hunger -= 3,
        this.happiness += 5,
        this.boredom +- 5
    }
    treat() {
        this.happiness += 5,
        this.hunger -= 1,
        this.boredom -= 3
    }
    birthday() {
        this.age += 1
    }
}

const inquirer = require("inquirer")

let pet 

inquirer.prompt([
    {
        type: "list",
        name: "type",
        message: "What type of pet would you like?",
        choices: [
            "dog",
            "cat",
            "rabbit",
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What would you like to name your pet?"
    }

]).then((param) => {
    pet = new Pet(param.type, param.name)
}).then(() => gameLoop())

const gameLoop = () => {
        if (pet.hunger <= 0) {
            console.log(`${pet.name} doesn't need any more food!`)
            return
        } else if (pet.hunger == 20) {
            console.log(`Oh no, ${pet.name} has died from hunger.`)
            return
        } else if (pet.thirst <= 0) {
            console.log(`${pet.name} doesn't need any more water!`)
            return
        } else if (pet.thirst == 20) {
            console.log(`Oh no, ${pet.name} has died from thirst.`)
            return
        } else if (pet.happiness <= 0) {
            console.log(`Oh no, ${pet.name} has died from sadness.`)
            return
        } else if (pet.happiness == 20) {
            console.log(`${pet.name} is as happy as they can be!`)
            return
        } else if (pet.boredom <= 0) {
            console.log(`${pet.name} is bored!`)
            return
        } else if (pet.age == 5) {
            console.log(`${pet.name} has died peacefully from old age.`)
        }

    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "action",
                message: "What would you like to do?",
                choices: ["food", "water", "play", "treat"],
            },
        ])
        .then((answers) => {
            if (answers.action === "food") {
                pet.food()
            } else if (answers.action === "water") {
                pet.water()
            } else if (answers.action === "play") {
                pet.play()
            } else if (answers.action === "treat") {
                pet.treat()
            }
        
            console.table(pet)
        })
        .then(() => gameLoop())

}

