import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { MyDeckComponent } from './components/my-deck/my-deck.component';

const routes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [
      { path: '', component: MyDeckComponent },
      { path: 'cards/:flow', component: DeckListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
