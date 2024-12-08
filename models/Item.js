export class Item{
  name;
  constructor(name){
    this.setName(name);
  }
  getName(){return this.name;}
  setName(name){this.name= name;}
}