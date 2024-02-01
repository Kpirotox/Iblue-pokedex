import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeckUserList } from '../../models/interfaces/deck-user-list';
import { PokemonCard } from '../../models/interfaces/pokemon-card';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-my-deck',
  templateUrl: './my-deck.component.html',
  styleUrls: ['./my-deck.component.css'],
})
export class MyDeckComponent implements OnInit {
  public title = 'Meus baralhos';

  constructor(private _router: Router, public appService: AppService) {}

  ngOnInit() {}

  public onClickDeck(deck: DeckUserList): void {
    this.appService.deckUserEdit = deck;
    this._router.navigate(['cards', 'edit']);
  }
  public getFourCardsDeck(items: PokemonCard[]) {
    return items.slice(0, 4);
  }

  public removeDeck(deck: DeckUserList): void {
    const descksFilter = this.appService.deckUserList.filter(
      (item) => item != deck
    );
    this.appService.deckUserList = descksFilter;
    this.appService.onClickSave.next(true);
  }
}
