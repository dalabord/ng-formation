import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  students =  [
    {name: 'Alain', age: 26},
    {name: 'Hélène', age: 28}
  ];
}
