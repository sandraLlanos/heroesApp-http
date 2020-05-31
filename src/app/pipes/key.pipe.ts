import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key',
  pure: false
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {
    
    let keys = [];

    for (let key in value) {
      keys.push(key); 
      // console.log(key);
      // console.log(value);      
    }    
    // console.log(keys);
    return keys;
  }
  
}
