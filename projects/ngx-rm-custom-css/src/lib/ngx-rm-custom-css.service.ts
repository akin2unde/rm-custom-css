import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxRmCustomCssService {
   constructor() { }
   static GenerateRandomId(appendId=true)
   {
     return appendId? "id" + Math.random().toString(16).slice(2):Math.random().toString(16).slice(2)
   }
   static DefaultColor()
   {
    return "#0a0a23";
   }
}
