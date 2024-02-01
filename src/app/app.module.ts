import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxCardModule,
  IgxCarouselModule,
  IgxDialogModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxTooltipModule,
} from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DeckInfoComponent } from './components/deck-info/deck-info.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { MyDeckComponent } from './components/my-deck/my-deck.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SideMenuComponent,
  DeckListComponent,
  CardComponent,
  DeckInfoComponent,
  MyDeckComponent,
];
const INFRAGISTICS = [
  IgxButtonModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
  IgxNavbarModule,
  IgxDialogModule,
  IgxInputGroupModule,
  IgxGridModule,
  IgxAvatarModule,
  IgxCarouselModule,
  IgxTooltipModule
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    ...INFRAGISTICS,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
