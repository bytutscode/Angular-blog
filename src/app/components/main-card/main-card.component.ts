import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  @Input() articlePhoto: string = '';
  @Input() articleTitle: string = '';
  @Input() articleDescription: string = '';
  @Input() id: string = '';

}
