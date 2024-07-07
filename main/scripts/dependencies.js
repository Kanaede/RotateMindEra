var modData = Vars.mods.locateMod("rotatemindera").meta;
var depen = Vars.mods.locateMod("mindustry-expansion");

modData.description = Core.bundle.get("mod.desc");

if(depen!=null){
  Log.info("[accent]<[blue]I[white]:[sky]rotatemindera[accent]>\n[white]> [green]Mod soft-dependencies 'mindustry-expansion' found!\n[sky]Status: Connected[white]");
  modData.displayName += " [accent]<[#00ff][accent]>";
  modData.description += Core.bundle.get("mod.desc.dependencies");
  
  /*if you want to add collaboration content, just add everything here like items, blocks, unit, bla bla bla i dont understand..
  blocks that require collaboration item or another contents that require collaboration contents must be placed here, can-NOT be separated json file then extend class here
  i hope you understand, Kanade..*/
  
}else{
  Log.info("[accent]<[yellow]W[white]:[sky]rotatemindera[accent]>\n[white]> [#ff7609]Uninstalled mod soft-dependencies: 'mindustry-expansion'[white]");
  modData.displayName += " [accent]<[#ff][accent]>";
  modData.description += Core.bundle.get("mod.desc.no-dependencies");
  
  /*adding something here??
  well.. np, but what did you expect to be added if NOT collaborating?
  just let it default for no new addition ig..?*/
  
}