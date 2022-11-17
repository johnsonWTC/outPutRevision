import { Component, OnInit } from '@angular/core';


export interface shoe{
  name : string,
  color : string,
  size : number
}



@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  shoes : shoe [] = [
    {
      name : "nike",
      color : "red",
      size : 5
    },
    {
      name : "Adidas",
      color : "blue",
      size : 7
    },
    {
      name : "Puma",
      color : "pink",
      size : 2
    }
  ]

  

}
