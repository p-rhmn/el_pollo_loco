class Level {
  coins;
  bottles;
  enemies;
  backgroundObjects;
  clouds;

  constructor(backgroundObjects, clouds, enemies, coins, bottles) {
    this.coins = coins;
    this.bottles = bottles;
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.clouds = clouds;
  }
}
