import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {CharacterDetailComponent} from "./character-detail.component";
import {CharacterService} from "./character.service";

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Characters']">Characters</a>
    <router-outlet></router-outlet>
    `,
    styles:[`
    a {padding: 5px;text-decoration: none;}
    a:visited, a:link {color: #444;}
    a:hover {color: white; background-color: #1171a3;}
    a.router-link-active {color: white; background-color: #52b9e9;}
  `],
  directives: [ROUTER_DIRECTIVES],providers: [CharacterService]
})
@RouteConfig([
  // { path: '/', redirectTo: ['Dashboard'] },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/characters', name: 'Characters', component: CharactersComponent },
    {path:'/detail/:id',name:'CharacterDetail',component:CharacterDetailComponent}
])
export class AppComponent {
  public title:string = "Tour Of Hero"

}
