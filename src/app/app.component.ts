import {Component, ElementRef, ViewChild} from '@angular/core';
import {CockpitComponent} from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Test for server'}];
  gameCount = [];
  onServerAdded(serveData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'server',
      name: serveData.serverName,
      content: serveData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  startGame(event): void {
    this.gameCount = event;
  }
}
