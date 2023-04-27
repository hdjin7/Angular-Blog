import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  id: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  titleContent: string = '';
  @Input()
  descriptionContent: string = '';
}
