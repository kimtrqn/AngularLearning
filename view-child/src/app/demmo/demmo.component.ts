import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demmo',
  templateUrl: './demmo.component.html',
  styleUrls: ['./demmo.component.sass']
})
export class DemmoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    console.log('helloo from demo component')
  }

}
