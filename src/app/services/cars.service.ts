import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { carsMock } from '../mock/cars-mock';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

filterApply$ = new Subject<any>();
filterApply = {};

constructor() {}

getCars() {
  return of(carsMock)
}

setFilter(filter:any) {
  this.filterApply = filter;
}

getFilter() {
  return this.filterApply;
}



}
