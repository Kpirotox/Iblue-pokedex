import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesApp } from 'src/app/enums/routes-enums';
import { Supertypes } from 'src/app/enums/supertypes.enum';
import { PokemonCard } from 'src/app/models/interfaces/pokemon-card';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-deck-info',
  templateUrl: './deck-info.component.html',
  styleUrls: ['./deck-info.component.css'],
})
export class DeckInfoComponent implements OnInit {
  supertypesEnum = Supertypes;
  form!: FormGroup;
  constructor(
    public appService: AppService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}
  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    let deckName = '';
    if (this.appService.typeFlow == 'edit') {
      deckName = this.appService.deckUserEdit.deckTitle;
    }
    this.form = this._fb.group({
      deckName: [deckName, Validators.required],
    });
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

  onSave(): void {
    this.appService.deckUserEdit.deck = this.appService.selectedCards;
    this.appService.deckUserEdit.deckTitle = this.form.get('deckName')?.value;
    this.appService.showDeck = false;
    this._router.navigate([RoutesApp.MY_DECK]);
  }

  onCreate(): void {
    const deckName = this.form.get('deckName')?.value;
    const cardsSelected = this.appService.selectedCards;
    const deckUser = { deckTitle: deckName, deck: cardsSelected };

    this.appService.deckUserList.push(deckUser);
    this.appService.selectedCards = [];
    this.appService.onClickSave.next(true);
    this.appService.showDeck = false;
    this._router.navigate([RoutesApp.MY_DECK]);
  }

  checkAmountCards(): boolean {
    const deckLength = this.appService.selectedCards.length;
    return !(deckLength < 24 || deckLength > 60);
  }
}
