/**
 * Created by Administrator on 2015-12-21.
 */
import {Component,OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {Character} from "./character";
import {CharacterService} from "./character.service";
@Component({
    selector:'character-detail',
    templateUrl:'app/character-detail.component.html',
    inputs:['character']
})
export class CharacterDetailComponent implements OnInit{
    public character:Character;
    constructor(private _characterService: CharacterService,private _routeParams:RouteParams) { }
    ngOnInit() {
        if (!this.character) {
            let id = +this._routeParams.get('id');
            this._characterService.getCharacter(id).then(character => this.character = character);
        }
    }

    goBack() {
        window.history.back();
    }
}