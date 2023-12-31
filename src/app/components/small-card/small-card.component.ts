import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() id: string | number = '';
  @Input() photoURL: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
