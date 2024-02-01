import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { RoutesApp } from 'src/app/enums/routes-enums';
import { NavItems } from '../../models/interfaces/nav-items-interface';
import { AppService } from './../../../services/app.service';
import { PokemonCard } from 'src/app/models/interfaces/pokemon-card';
import { Supertypes } from 'src/app/enums/supertypes.enum';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer!: IgxNavigationDrawerComponent;

  supertypesEnum = Supertypes;

  constructor(private _router: Router, public appService: AppService) {}

  ngOnInit(): void {
    this.appService.onClickSave.subscribe(
      (data) =>
        (this.navItems[1].deckUserSavesLen =
          this.appService.getDeckUserSavesLen)
    );
      this._router.navigate([RoutesApp.NEW_DECK]);

      const avatarCads = document.getElementById('avatar_cards');
      this.appService.avatarElement = avatarCads;
  }

  public navItems: NavItems[] = [
    { name: 'add', text: 'Criar novo baralho', routerLink: 'cards/add' },
    {
      name: 'book',
      text: 'Meus baralhos',
      routerLink: '',
      deckUserSavesLen: 0,
    },
  ];

  public navigate(item: NavItems) {
    this._router.navigate([item.routerLink]);
  }

  onClickCard(card: PokemonCard, index?: any): void {
    if (this.cardAlreadySelect(card)) {
      this.appService.selectedCards = this.appService.selectedCards.filter(
        (item) => item != card
      );
      this.appService.cardsList.splice(card.index?? 0, 0, card)
    }
  }


  private cardAlreadySelect(card: any): boolean {
    const exists = this.appService.selectedCards.find((item) => item == card);
    return exists != undefined;
  }

  getSuperType(items: PokemonCard[], superType: Supertypes) {
    const ammount = items
      .map((item) => item.supertype === superType)
      .filter((e) => e).length;
    return ammount;
  }

  getColors(selectedCards: PokemonCard[]) {
    let colors = new Set();
    const qnt = selectedCards.map((item) => {
      colors.add(item.types[0]);
    });

    return colors.size;
  }

}
