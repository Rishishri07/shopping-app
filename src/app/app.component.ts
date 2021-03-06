import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-angular-app';
  loadedFeature = 'recipe';

  onNavigate(event: string): void {
    this.loadedFeature = event;
  }
}
