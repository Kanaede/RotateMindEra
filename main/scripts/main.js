const delta = extend(Item, "delta", {
  setStats(){
    this.super$setStats();
    this.stats.remove(Stat.explosiveness);
    this.stats.remove(Stat.flammability);
    this.stats.remove(Stat.radioactivity);
    this.stats.remove(Stat.charge);
    this.stats.add(Stat.abilities, Core.bundle.get("ability.delta"))
  }
})
