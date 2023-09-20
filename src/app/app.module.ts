import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './pages/article/article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCardComponent,
    SmallCardComponent,
    BlogTitleComponent,
    HeaderComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
