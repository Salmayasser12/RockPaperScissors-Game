import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GameComponent } from './pages/game/game';
import { HistoryComponent } from './pages/history/history';




export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'history', component: HistoryComponent },
];
