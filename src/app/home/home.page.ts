import{ Component ,OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  UltKw;
  AltKw;
  Monto = 0.0 ;
  constructor(public alertController: AlertController) {}

   ngOnInit():void{
    
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Los Kw no pueden ser negativos(ponga bien los datos)',
      buttons: ['OK']
    });

    await alert.present();
  }
  

   Calcular(){
    const ArrayssKw = [
      100, 50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 300, 800, 800, 800, 800, 800,
      800,
    ];
     const ArrayssPrecio = [
      0.33, 1.07, 1.43, 2.46, 3.0, 4.0, 5.0, 6.0, 7.0, 9.2, 9.45, 9.85, 10.8, 11.8,
      12.9, 13.95, 15.0, 20.0,
    ];
     let KwR = this.AltKw - this.UltKw;
      if(KwR < 0){
        this.presentAlert();
      }
      else{

     for (let i = 0; i < 18; i++) {
      if (ArrayssKw[i] < KwR) {
        KwR = KwR - ArrayssKw[i];
        this.Monto += ArrayssKw[i] * ArrayssPrecio[i];
      } else {
        this.Monto += KwR * ArrayssPrecio[i];
        break;
      }
    }
   }
  }
}
