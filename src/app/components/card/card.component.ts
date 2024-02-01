import { Component, Input, OnInit } from '@angular/core';
import { PokemonCard } from '../../models/interfaces/pokemon-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardData!: PokemonCard;
  @Input() isDeck = false;
  @Input() cardStyle: any;

  public card = {
    imageUrl: 'https://images.pokemontcg.io/swsh4/25_hires.png',
};

  constructor() { }

  ngOnInit() {

  }

}
