import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../../services/app.service';
import { PokemonCard } from '../../models/interfaces/pokemon-card';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css'],
})
export class DeckListComponent implements OnInit {
  @ViewChild('alert', { static: false }) alertLimite: any;
  public title = '';

  constructor(
    public appService: AppService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkFlowUser();
  }

  ngOnDestroy() {
    this.appService.selectedCards = [];
  }

  onClickCard(card: PokemonCard, index?: any): void {

    if (this.countOccurrences(card) == 4) {
      this.alertLimite.open();
      return;
    }

    if (this.cardAlreadySelect(card)) {
      this.appService.selectedCards = this.appService.selectedCards.filter(
        (item) => item != card
      );
    } else {
      card.index = index;
      this.appService.selectedCards.push(card);
    }
    this.updateCardsPosition();

    this.transition(index);
  }

  transition(index: number) {
    const x: any = document.getElementById(`card_${index}`);
    const rectX = x.getBoundingClientRect();
    const rectY = this.appService.avatarElement.getBoundingClientRect();
    const translacaoX = rectY.left - rectX.left;
    const translacaoY = rectY.top - rectX.top;
    x.style.width = x.offsetWidth + 'px';
    x.style.height = x.offsetHeight + 'px';
    x.style.position = 'absolute';
    x.style.transition = 'transform 0.5s ease';
    x.style.transform = `translate(${translacaoX - x.offsetWidth / 2.5}px, ${
      translacaoY - x.offsetHeight / 2.15
    }px) scale(0.05)`;
    setTimeout(() => {
      x.parentElement.style.display = 'none';
    }, 500);
  }

  countOccurrences(cardFromList: PokemonCard) {
    return this.appService.selectedCards.filter(card => card.name === cardFromList.name).length
  }

  updateCardsPosition() {
    this.appService.selectedCards.forEach((card, index) => {
      card.numberadd = index + 1;
    });
  }

  private cardAlreadySelect(card: any): boolean {
    const exists = this.appService.selectedCards.find((item) => item == card);
    return exists != undefined;
  }


  private checkFlowUser(): void {
    this._activatedRoute.params.subscribe((params) => {
      const flow = params['flow'];
      if (flow == 'edit') {
        this.title = `Editar baralho ${this.appService.deckUserEdit.deckTitle}`;
        this.appService.typeFlow = 'edit';
        this.appService.deckUserEdit.deck.forEach(
          (card) =>
            (this.appService.cardsList = this.appService.cardsList.filter(
              (item) => item.id != card.id
            ))
        );

        this.appService.selectedCards = this.appService.deckUserEdit.deck;
      } else {
        this.appService.typeFlow = 'add';
        this.title = 'Criar novo baralho';
        this.appService.selectedCards = [];
        this.appService.cardsList = this.appService.cardListBackup;
      }
    });
  }
}
