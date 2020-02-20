import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item[];

  constructor() {
    this.items=[];
   }

   getAll():Item[]{
     return this.items;
   }

   get(id:string){
     return this.items.find((c)=>(c.itemId==id));
   }

   add(item:Item){
     this.items.push(item);
   }

   update(item:Item){
     let index= this.items.findIndex((c)=>(c.itemId===item.itemId));
     if(index>-1){
       this.items[index]=item;
     }
   }

   delete(id:string){
    let index= this.items.findIndex((item)=>(item.itemId===id));
    if(index>-1){
      this.items.splice(index,1);
   }
}
}
