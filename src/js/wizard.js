export default class Wizzard {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.power = Math.floor(Math.random() * 10);
    this.roll = 0;
  }

  damage(num) {
    if (this.health > num) {
      this.health = this.health - num;
    } else {
      this.health = 0;
    }
  }
}