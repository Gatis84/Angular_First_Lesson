import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../../shared/models/character.model";

interface Message {
  text: string;
  id: number;
}

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input()
  character: Character | undefined;

  @Output()
  doSmthgEvent = new EventEmitter<Message>();

  sayHi(id: number): void {
    this.doSmthgEvent.emit({text: 'Sveiki', id: id})
  }
}

