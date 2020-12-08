import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any
  constructor(private route: Router, public alert: AlertController) { }

  ngOnInit() {
  }

  login(form){
    this.email = new FormControl(form.value.email,Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))
    console.log('Form',form.value)
    if(this.email.valid){
      if(form.value.email == 'admin@admin.com' && form.value.password == 'admin123'){
        this.route.navigateByUrl('home')
      }else{
        this.presentAlert('Email ou senha incorretos!');
      }
    }else{
      this.presentAlert('Email incorreto!');
    }
    
  }

  
    async presentAlert(msg: string) {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Aviso',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

}
