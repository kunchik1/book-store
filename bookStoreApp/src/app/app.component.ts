import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookStoreApp';
  public email:string = 'sample@gmail.com';
  public user:string = 'nunya';
}
