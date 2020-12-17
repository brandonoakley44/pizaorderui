import { Component, OnInit } from '@angular/core';

import { Pizza } from "../models/pizza";
import { PizzaOrders } from "../models/pizza-orders";
import { PizzaCount } from "../models/pizza-count";

import { PizzaService } from "../services/pizza.service";

@Component({
  selector: 'pizza-orders',
  templateUrl: './pizza-orders.component.html',
  styleUrls: ['./pizza-orders.component.css']
})
export class PizzaOrdersComponent implements OnInit {

  constructor(private _pizzaService: PizzaService) { }
  title: string = "Order Your Pizza!";
  pizzaCountTitle: string = "How many people order which pizza!!!";
  pizzaCountByName: PizzaCount[] = [];
  pizzas: Pizza[] = [];
  ngOnInit(): void {
    this._pizzaService.getPizzaList().subscribe(
      pizzaList => this.pizzas = pizzaList,
      err => console.log(err)
    );
    this._pizzaService.getTotalOrdersByPizzaName().subscribe(
      pizzasCount => this.pizzaCountByName = pizzasCount,
      err => console.log(err)
    );
  }
  onOrderSubmit(order: Pizza): void {
    let pizzaOrder: PizzaOrders = {
      pizzaId: order.pizzaId,
      pizzaName: order.pizzaName,
      orderDate: new Date()
    };
    this._pizzaService.newPizzaOrder(pizzaOrder);
  }

}
