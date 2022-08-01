import { Component, OnInit } from '@angular/core';
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
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  listCars:any=[];

  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carsService.getCars().subscribe(result=> {
      this.listCars=result
      console.log(result)
    });
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

}
