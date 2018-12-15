import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { New1Component } from './home/news/new1/new1.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new', component: New1Component}
]