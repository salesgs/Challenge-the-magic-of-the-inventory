import {nameItens} from "../main.js";

export const readItens=()=>{
  let caunt = 0;
  while(caunt<nameItens.length){
    console.log(`${nameItens[caunt].getName()}`);
    caunt++;
  };
  
}