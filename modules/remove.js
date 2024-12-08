import {nameItens} from "../main.js";
export const removeItem =(name)=>{
  const newItems = nameItens.filter((element)=>{
    if(element.getName()!==name){
      return element;
    }
  });
  
  for(let i=0;i<nameItens.length;i++){
    nameItens[i]=newItems[i];
  }
  console.log(nameItens);
}