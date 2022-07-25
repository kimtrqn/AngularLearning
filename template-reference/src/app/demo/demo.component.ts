import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(inputEle:HTMLInputElement) {
    alert('Hello ' + inputEle.value)
    console.log(inputEle);
  }

}
