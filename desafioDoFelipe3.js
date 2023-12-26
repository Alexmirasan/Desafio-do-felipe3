class Hero {
  constructor(name, age, type, attacking) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.attacking = attacking;

  }
}

const heroes = [
  new Hero("Alex", 120, "guerreiro", "espada"),
  new Hero("Felipe", 200, "mago", "magia"),
  new Hero("Zoranildo", 100, "monge", "marciais"),
  new Hero("Luis", 40, "ninja", "shuriken")
];

function attack (action){ 
  console.log(` O ${action.type} ${action.name} que tem ${action.age} anos de idade, atacou o seu adversário usando ${action.attacking}. `)
} 

for(const i in heroes){
  attack(heroes[i])
}