import { Component, Input, OnInit } from '@angular/core';
import { shoe } from '../shoe/shoe.component';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  constructor() { }


  @Input() shoeList :shoe [] = []
  ngOnInit(): void {
  }

}
