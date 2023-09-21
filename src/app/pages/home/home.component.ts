import { Component } from '@angular/core';
import { articles } from 'src/app/data/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articlesArray = articles;
}