import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.page.html',
  styleUrls: ['./city-details.page.scss'],
})
export class CityDetailsPage implements OnInit {
  state: any;
  cities: any
  id: number
  count: number
  p: number = 1;
  constructor(private service: ServiceService, public route: Router, public nav: NavController) { 
    this.state = this.route.getCurrentNavigation().extras.queryParams;
    this.id = this.state.id;
    console.log('Estado',this.state)
    this.getCities(this.id);
  }

  ngOnInit() {
  }
  
  getCities(id){
    this.service.getcitiesById(id)
    .subscribe(data => {
      this.cities = data;
      this.count = this.cities.length
      console.log('Contagem de Cidades',this.count)
      console.log('Cidades',this.cities)
    })
  }

}
