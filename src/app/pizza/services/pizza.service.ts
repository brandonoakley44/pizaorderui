import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import * as io from "socket.io-client";

import { Pizza } from "../models/pizza";
import { PizzaOrders } from "../models/pizza-orders";
import { PizzaCount } from "../models/pizza-count";

@Injectable()
export class PizzaService {
  private _socketUrl: string = "http://localhost:9090/pizza";
  private _socket;
  constructor() {
    this._socket = io(this._socketUrl);
  }
  getPizzaList(): Observable<Pizza[]> {
    return Observable.create(observer => {
      this._socket.on("pizzaList", pizzas => {
        observer.next(pizzas);
      })
    });
  }
  getTotalOrdersByPizzaName(): Observable<PizzaCount[]> {
    return Observable.create(observer => {
      this._socket.on("pizzaOrdersCount", pizzaCount => {
        observer.next(pizzaCount);
      });
    });
  }
  newPizzaOrder(order: PizzaOrders): void {
    this._socket.emit("newPizzaOrder", order);
  }
}
