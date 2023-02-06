import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super.hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';

  heroes : SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(){
    this.superHeroService.getSuperHeroes().subscribe(
      (result : SuperHero[]) => (this.heroes = result)
    );
    console.log(this.heroes);
  }

  initNewHero()
  {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
  }

  updateHeroList(heroes: SuperHero[])
  {
    this.heroes = heroes;
  }
}
