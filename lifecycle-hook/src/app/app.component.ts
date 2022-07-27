import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecyle-hook';

  inputText:string = '';

  onSubmit(input:HTMLInputElement) {
    this.inputText = input.value;

  }
}


