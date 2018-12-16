import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { AcessoRapidoComponent } from './home/acesso-rapido/acesso-rapido.component';
import { NewsComponent } from './home/news/news.component';
import { New1Component } from './home/news/new1/new1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeHeaderComponent,
    HeaderSearchComponent,
    AcessoRapidoComponent,
    NewsComponent,
    New1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
