export const nameItens=[];
import{addItem} from "./modules/add.js";
import {readItens} from "./modules/read.js";
import {removeItem} from "./modules/remove.js";
await addItem("📜 Pergaminho de Fogo");
await addItem("⚔️ Espada de Luz");
await addItem("🛡️ Escudo Mágico");
readItens();
removeItem("🛡️ Escudo Mágico");