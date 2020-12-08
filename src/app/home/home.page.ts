import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  states: any
  constructor(private service: ServiceService, public route: Router, public nav : NavController) {
    this.getStates()
  }

  getStates(){
    this.service.getStates()
    .subscribe(data => {
      this.states = data;
      console.log(data)
    })
  }

  goDetail(index: number){
    //this.nav.navigateForward('city-details')
    this.route.navigateByUrl('city-details',{queryParams: this.states[index]})
  }

}
