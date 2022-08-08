import {Component} from '@angular/core';
import {CharactersService} from "../../shared/services/characters.service";


interface Message {
  text: string;
  id: number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  charactersResponse$ = this.charactersService.getCharacters();

  constructor(private charactersService: CharactersService) { }

  sayHi(event: Message):void {
    console.log(event.id,event.text)

  }
}
