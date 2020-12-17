import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaService } from './services/pizza.service';
import { PizzaOrdersComponent } from './pizza-orders/pizza-orders.component';



@NgModule({
  declarations: [PizzaOrdersComponent],
  imports: [
    CommonModule
  ],
  providers:[PizzaService],
  exports:[PizzaOrdersComponent]
})
export class PizzaModule { }
