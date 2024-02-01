import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { DeckUserList } from 'src/app/models/interfaces/deck-user-list';
import { PokemonCard } from 'src/app/models/interfaces/pokemon-card';
import { ResponseGetCards } from 'src/app/models/interfaces/response-get-cards';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public baseURL = 'https://api.pokemontcg.io/v2';
  public cardsList: PokemonCard[] = [];
  public selectedCards: PokemonCard[] = [];
  public deckUserList: any[] = [];
  public types: string[] = [];
  public onClickSave = new Subject();
  public typeFlow: 'edit' | 'add' = 'add';
  public deckUserEdit: DeckUserList = { deck: [], deckTitle: '' };
  public avatarElement: any;
  public showDeck: boolean = false;
  public cardListBackup!: PokemonCard[];

  constructor(private _http: HttpClient) {
    this.getCards().subscribe(
      (response) => {
        this.cardsList = response.data;
        this.cardListBackup = response.data;
      },
      (err) => {
      }
    );
  }


  getCards(): Observable<ResponseGetCards> {
    const path = `${this.baseURL}/cards`;
    return this._http.get<ResponseGetCards>(path);
  }

  get getDeckUserSavesLen(): number {
    return this.deckUserList.length;
  }
}
