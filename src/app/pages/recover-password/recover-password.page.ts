import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  emailForm: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder,
              private alertCtrl: AlertController, private router:Router) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    })
  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Correo enviado',
      message: 'Revisa tu correo, alli esta tu nueva contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

  async emailAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Correo enviado',
      message: 'Si tu cuenta esta registrada te llegara un correo con una nueva contraseña',
      buttons: [
        {
          handler:()=> {
            this.router.navigate(['/login'])
          },
          text: 'OK',
          cssClass: 'alert-button-tertiary',
        }
      ]
    });

    await alert.present();
  }
// Se envia email al correo con la nueva contraseña para poder ingresar nuevamente 
  // recoverPassword(){
    //if(this.emailForm.valid){
    //  const {email} = this.emailForm.value;
    //  this.authService.recoverPassword(email)
    //  .subscribe({
    //  next: (resp: any) => {
    //  console.log('Recuperacion Exitosa', resp);
    //  this.emailAlert();
    //  },
    //  error: (e: ErrorEvent) =>{
    //  console.log('Error Recuperar contraseña', e.error);
    //  }
    // })
    //}else{
     // this.formSubmitAttempt = true;
    //}
  }

  //campoInvalido(campo: string){
    //return this.emailForm.get(campo)?.invalid && this.formSubmitAttempt;
  //}

