
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



// the standard selector name that cli created is 'app-menu'
// the same selector tag has to be used in the template
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {


	dishes = DISHES;

	selectedDish: Dish;
	constructor() { }

	ngOnInit() {
	}
	onSelect(dish: Dish) {
		this.selectedDish = dish;
	}
}