import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amoutInput') amountElement: ElementRef;

  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  onAddIngredients(): void {
    const newIngredient = new Ingredient(this.nameElement.nativeElement.value, this.amountElement.nativeElement.value);
    this.IngredientAdded.emit(newIngredient);
  }
  ngOnInit(): void {
  }

}
