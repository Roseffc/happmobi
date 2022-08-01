import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { carsMock } from '../mock/cars-mock';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

constructor() {}

getCars() {
  return of(carsMock)
}


}
