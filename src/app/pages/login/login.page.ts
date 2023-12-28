import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formSubmitAttempt: boolean = false;
  loading: boolean = false;
  public alertButtons = ['OK'];
//Formulario reactivo para login 
  constructor(private fb:FormBuilder, private router:Router,
              private  alertCtrl: AlertController,  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, ]],
    })
  }
  ngOnInit() {}

 
//Metodo que consume servicio y le pasa las variables username y password para logearse con su usuario
  login(){
   // if(this.loginForm.valid){
   //   this.loading = true;
   //   const {username, password} = this.loginForm.value;
   // this.authService.login(username, password)
   // .subscribe({
     // next: (resp:any) => {
       //  console.log('Respuesta del login ', resp.token);
       //  this.pruductsService.respLogin = resp;
        this.router.navigate(['/home']);
       //  this.loading = false;
       //  this.loginForm.reset();
      //},
      //error: (e: ErrorEvent) => {
      //  this.presentAlert(e.error.message)
      //  console.log('Error al Iniciar sesion ',e.error);
      //  this.loading = false;
      //}
    //})
    //}else {
     // this.formSubmitAttempt = true;
    //}
  //}
 //Validaro de que los campos del formulario sean correctos
  //campoInvalido(campo: string){
   // return this.loginForm.get(campo)?.invalid && this.formSubmitAttempt;
  //}
  }
}
