class hero{
    constructor(name, age, type, gun){
        this.name = name
        this.age = age
        this.type = type
        this.gun = gun
    }
    atacar(){
        console.log(`O ${this.type} atacou usando ${this.gun}`)
    }
}

let guerreiro = new hero("Bilbo", 314, "Guerreiro", "espada")
let mago = new hero("Gandalf", 1569, "Mago", "magia")
let monge = new hero("Legolas", 780, "Monge", "artes marciais")
let ninja = new hero("Samurai", 905, "Ninja", "shuriken")

mago.atacar()