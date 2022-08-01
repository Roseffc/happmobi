import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  formFilters!: FormGroup;
  engineTypes = [
    { name: 'Motor 1.0', active: false },
    { name: 'Motor 1.4', active: false },
    { name: 'Motor 1.6', active: false },
    { name: 'Motor 1.8', active: false },
    { name: 'Motor 2.0', active: false },
  ]

  placeAmounts = [
    { name: '02', active: false },
    { name: '03', active: false },
    { name: '04', active: false },
    { name: '05', active: false },
    { name: '06', active: false },
    { name: '07', active: false },
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setFormgroup()
  }

  setFormgroup(){
    this.formFilters = this.formBuilder.group({
      hatchCompacto : [null],
      hatchMedio : [null],
      suvCompacto : [null],
      suvMedio : [null],
      suvGrande : [null],
      crossover : [null],
      coupe : [null],
      picapeLeve : [null],
      picapeLeveMedia : [null],
      picapeMedia : [null],
      sedanCompacto : [null],
      sedanMedio : [null],
      sedanGrande : [null],
      minivanMonovolume : [null],
      utilitarioLeve : [null],
      utilitario : [null],
    })
  }

  onEngineFilter(item:any){
    item.active = !item.active
  }



}
