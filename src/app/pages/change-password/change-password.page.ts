import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  formPasswords: FormGroup;
  formSubmitAttempt: boolean = false;
  worker_id!:string;
  loading:boolean = false;

  //Formulario reactivo que toma dos contraseñas la antigua y la nueva
  constructor(private fb: FormBuilder, private router: Router,
              private activatedRoute: ActivatedRoute, private alertCtrl: AlertController) {
    this.formPasswords = this.fb.group({
      oldPassword    :['', [Validators.required, Validators.pattern(/^\S+$/), Validators.minLength(4)]],
      password       :['', [Validators.required, Validators.pattern(/^\S+$/), Validators.minLength(4)]],
      verifyPassword :['', [Validators.required]],
    },{
      validators: [this.contraseñasIguales('password', 'verifyPassword')]
    })
   }
//En este cliclo de vida se recibe el id por parametro en la url
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.worker_id = params['worker_id'];
      console.log(this.worker_id);
    })
  }

  async passwordChangedAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-button-tertiary',
      message: 'Contraseña cambiada exitosamente',
      buttons: ['OK' ]
    });

    await alert.present();
  }

  async passwordChangedErrorAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-button-tertiary',
      message: 'Ocurrio un problema al cambiar la contraseña',
      buttons: ['OK' ]
    });

    await alert.present();
  }

  async changePasswordAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'danger',
      message: '¿Seguro quieres cambiar tu contraseña?',
      buttons: [
        {
          cssClass: 'alert-button-danger',
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text:'Cambiar contraseña',
          cssClass: 'alert-button-tertiary',
          handler: ()=> {
            this.changePassword();
            setTimeout( ()=>{
              this.passwordChangedAlert();
            }, 1000)
          }
        }
       ]
    });
    await alert.present();
  }
//Metodo que se encarga de cambiar la contraseña consumiento un servicio y entregandole dos variables como parametro a la funcion
  changePassword(){
    //if(this.formPasswords.valid){
      //this.loading = true;
      //const { password, oldPassword  } = this.formPasswords.value;
     // this.productService.changePassword(password, oldPassword)
      //.subscribe({
        //next: (resp:any) => {
          //console.log('Cambio exitose de la constraseña', resp);
          //this.formPasswords.reset();
          //this.passwordChangedAlert()
          //this.loading = false;
        //},
        //error: (e:ErrorEvent) => {
         // console.log('error de cambio de contraseña', e.error);
          //this.passwordChangedErrorAlert()
         // this.loading = false;
        //}
      //})
    //}else {
      //this.formSubmitAttempt = true;
    //}     
  }

  campoInvalido(campo: string){
    return this.formPasswords.get(campo)?.invalid && this.formSubmitAttempt;
  }
// Validador de que las contraseñas son iguales
  contraseñasIguales(campo1:string, campo2:string){
    return (formGroup:AbstractControl):ValidationErrors | null  =>{
       console.log(formGroup)
       const pass1 = formGroup.get(campo1)?.value;
       const pass2 = formGroup.get(campo2)?.value;
       if(pass1 !== pass2 ){
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return { noIguales: true};
       }
       formGroup.get(campo2)?.setErrors(null);
       return null;
     }
   }

}
