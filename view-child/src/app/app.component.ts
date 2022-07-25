import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemmoComponent } from './demmo/demmo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'view-child';

  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age:ElementRef;
  @ViewChild(DemmoComponent, {static: true}) demoComp:DemmoComponent

  calculateAge() {
    let birthYear= new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    this.age.nativeElement.value = age;

    console.log(birthYear);
    console.log(this.age);
  }

}
