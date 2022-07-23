import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() all:number = 0;
  @Input() free:number = 0;
  @Input() premium:number = 0;

  selectedRadioButtonValue:string = 'All';

  constructor() { }

  ngOnInit(): void {
  }

  //eventemitter is a type on TS
  /*
    input - is what the parent component pass down
    output is when the cchiild component give bacck to
    parent component
  */

  @Output()
  filterRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue)
  }
}
