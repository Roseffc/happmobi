import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  formFilters!: FormGroup;
  engineTypes = [
    { name: 'Motor 1.0', value: '1.0', active: false },
    { name: 'Motor 1.4', value: '1.4', active: false },
    { name: 'Motor 1.6', value: '1.6', active: false },
    { name: 'Motor 1.8', value: '1.8', active: false },
    { name: 'Motor 2.0', value: '2.0', active: false },
  ]

  placeAmounts = [
    { name: '02', value: '2', active: false },
    { name: '03', value: '3', active: false },
    { name: '04', value: '4', active: false },
    { name: '05', value: '5', active: false },
    { name: '06', value: '6', active: false },
    { name: '07', value: '7', active: false },
  ]

  constructor(private formBuilder: FormBuilder,
              private carsService: CarsService,
              private router: Router) { }

  ngOnInit() {
    this.setFormgroup()
  }

  setFormgroup(){
    this.formFilters = this.formBuilder.group({
      1 : [null],
      2 : [null],
      15 : [null],
      14 : [null],
      13 : [null],
      12 : [null],
      9 : [null],
      8 : [null],
      7 : [null],
      6 : [null],
      5 : [null],
      3 : [null],
      4 : [null],
      16 : [null],
      11 : [null],
      10 : [null],
    })
  }

  onEngineFilter(item:any){
    item.active = !item.active
  }

  applyFilters() {
    const types:any = [];
    Object.keys(this.formFilters.value).forEach(key => {
       if (this.formFilters.value[key]) {
          types.push(key)
       }
    });
    const engineFilters = this.engineTypes.filter(engine => engine.active)
    const placeAmounts = this.placeAmounts.filter(place => place.active)
    const filters = { types: types, engineFilters: engineFilters, placeAmounts: placeAmounts };
    this.carsService.setFilter(filters);
    this.router.navigate(['/home']);
  }

}
