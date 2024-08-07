import { Routes } from '@angular/router';
import { AboutComponent } from './app/pages/about/about/about.component';
import { HomePageComponent } from './app/pages/home/home-page/home-page.component';
import { MealsComponent } from './app/pages/meals/meals.component';
import { RestaurantsPageComponent } from './app/pages/restaurants/restaurants-page/restaurants-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurants', component: RestaurantsPageComponent },
    { path: 'meals', component: MealsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
