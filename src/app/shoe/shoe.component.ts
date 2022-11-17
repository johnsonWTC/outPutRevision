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

  

}
