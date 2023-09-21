import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, articles } from 'src/app/data/articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  id: string | null ='';

  article: Article = {
    id: 0,
    photoURL: '',
    description: '',
    title: ''
  }
  
  constructor(private router:ActivatedRoute){

  }
  
  articlesArray = articles;

  ngOnInit(): void {
    this.router.paramMap.subscribe(value=>this.id =value.get('id'));

    const article = this.articlesArray.find(article => article.id == this.id);

    if(article){
      this.article = article;
    }
    
  }
 
}
