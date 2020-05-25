import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Asado',
      'Meaaaaat',
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Asado_2005.jpg'
    ),
    new Recipe(
      'Indo Rijsttafel',
      'Lekkerrrrrr',
      'https://indisch4ever.files.wordpress.com/2015/12/indischerijsttafel.jpg?w=515&h=290'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
