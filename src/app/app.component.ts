import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_First_Lesson'
  showDescription = false;
  catNames = ["pucinja","garfilds", "reksis"]

  toggle(): void {
    this.showDescription = !this.showDescription
  }
}
