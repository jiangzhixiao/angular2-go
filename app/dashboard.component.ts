import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {Character} from "./character";
import {CharacterService} from "./character.service";

@Component({
  selector: 'my-dashboard',
	templateUrl:'app/dashboard.component.html',
	styleUrls:['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit {
	public characters:Character[]=[];
	constructor(private _characterService:CharacterService,private _router: Router){}
	ngOnInit(){
		this._characterService.getCharacters().then(characters=>this.characters=characters.slice(1,5));
	}

	gotoDetail(character:Character){
		this._router.navigate(['CharacterDetail',{id:character.id}]);
	}
}
