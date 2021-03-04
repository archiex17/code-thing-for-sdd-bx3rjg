import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() {
    /* ====LOCALSTORAGE========
  Local storage stores data as key-value pairs, and the values are stored as "strings". 
  So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
  */
    if (localStorage.loginDB == null) {
      localStorage.setItem('loginDB', JSON.stringify(this.loginDB));
    }

  } //end constructor

UserArray = [
    {
      fName: "spider",
      lName: "lad",
      email: "spiderlad@studytafensw.edu.au",
      password: "P123Y777"
    },
    {
      fName: "Green",
      lName: "Lantern",
      email: "greenlatern@tafensw.edu.au",
      password: "greeneggsandham"
    }
    ,
    {
      fName: "super",
      lName: "lad",
      email: "superlad@studytafensw.edu.au",
      password: "fly3443hight"
    }
  ];



getUsers(){
  return this.UserArray
}


}  // end class




