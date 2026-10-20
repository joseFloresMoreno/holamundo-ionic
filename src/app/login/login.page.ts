import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  //Ir al Home
  IrHome() {
    window.location.href = '/home';
  }

  ngOnInit() {
  }

}
