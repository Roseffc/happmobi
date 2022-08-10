import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { delay, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: false,
    // centeredSlides: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  listCars:any=[];
  listCarsFull:any=[];
  carsServiceSubscription!:Subscription;

  formSearch!: FormGroup;

  constructor(private carsService:CarsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCars();
    this.setFormGroup();
    this.onChangeFormSearch();
    this.onFilterApply();
  }

  setFormGroup() {
    this.formSearch = this.formBuilder.group({
      query: [null]
    });
  }

  onChangeFormSearch(){
    this.formSearch.valueChanges.pipe(
      distinctUntilChanged(),
      delay(300)
    ).subscribe(value=> {
      this.listCars = [...this.listCarsFull.filter((item:any) => {
        return item.name.toLowerCase().includes(value.query.toLowerCase())
      })];
    })
  }

  getCars() {
    this.carsService.getCars().subscribe(result=> {
      this.listCars=result;
      this.listCarsFull = result;
    });
  }

  onFilterApply() {
    const filters:any = this.carsService.getFilter();
    if (filters.engineFilters || filters.placeAmounts || filters.types) {
      this.listCars = [...this.listCarsFull.filter((car:any) => {
        return filters['engineFilters'].map((engine:any)=> engine.value).includes(car.engine) ||
         filters['placeAmounts'].map((place:any)=> place.value).includes(car.size) ||
         filters['types'].includes(String(car.id))
       })];
    }
  }

}
