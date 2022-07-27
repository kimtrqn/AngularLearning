import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demoo',
  templateUrl: './demoo.component.html',
  styleUrls: ['./demoo.component.css']
})
export class DemooComponent implements OnInit {
  @Input() value:string = 'Proacademy'

  constructor() {
    console.log('Constructor callled');
   }

  //get called righht aftter consstructor
  ngOnChanges(change: SimpleChanges) {
    console.log('ngCChanges called')
  }
   
  //gets call right after ngOnchanges if ngChanges is there
  ngOnInit() {
    console.log('Nginit called')
  }
}
