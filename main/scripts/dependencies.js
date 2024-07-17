const modData = Vars.mods.locateMod("turnera").meta;
const mindustryExpansion = Vars.mods.locateMod("mindustry-expansion");

modData.description = Core.bundle.get("mod.data.desc");

let modName = "<" + modData.displayName + "> >> "
Log.info(modName + "Checking Mod System...")

// Mindustry Expansion
if(mindustryExpansion!=null){
  Log.info(modName + "'Mindustry Expansion' Connected")
  modData.displayName += " [accent]<[#00ff][accent]>";
  modData.description += Core.bundle.get("mod.data.dependencies");
}else{
  Log.info(modName + "'Mindustry Expansion' Disconnected");
  modData.displayName += " [accent]<[#ff][accent]>";
  modData.description += Core.bundle.get("mod.data.desc.no-dependencies");
};

Log.info(modName + "All Content successful to load.")