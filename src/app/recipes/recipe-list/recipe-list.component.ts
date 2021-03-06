import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Samosa', 'this is tasty samosa',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-scotch-quails-eggs-5177019.jpg?webp=true&quality=90&resize=440%2C400')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

  ngOnInit(): void {
  }

}
