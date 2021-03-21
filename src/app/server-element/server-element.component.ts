import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('serverElem') element: { type: string, name: string, content: string };
  @ContentChild('contentPara') contentParagraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
