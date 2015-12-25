import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CharacterService} from './character.service';
import {Character} from './character';
import {OnInit} from "angular2/core";

@Component({
    selector: 'my-characters',
    templateUrl: 'app/characters.component.html',
    styleUrls: ['app/characters.component.css']
})
export class CharactersComponent implements OnInit {
    private _characters:Character[];
    public currentCharacter:Character;

    get characters():Character[] {
        return this._characters;
    }

    constructor(private _characterService:CharacterService,private _router: Router) {
    }


    ngOnInit() {
        this._characters = this.getCharacters();
    }

    onSelect(character:Character) {
        this.currentCharacter = character;
    }

    /////////////////

    private getCharacters() {
        this._characters = [];
        this.currentCharacter = undefined;
        this._characterService.getCharacters()
            .then(characters => this._characters = characters);

        return this._characters;
    }
    public gotoDetail() {
        this._router.navigate(['CharacterDetail', { id: this.currentCharacter.id }]);
    }
}
