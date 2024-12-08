import {Item} from "../../src/models/Item.js";
import {nameItens} from "../main.js";

export const addItem  = async (nameItem)=>{
  const item = new Item(nameItem);
  nameItens.push(item);
  console.log(`Item ${item.getName()} adicionado!✅`);
};