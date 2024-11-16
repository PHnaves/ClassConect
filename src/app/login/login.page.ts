import { Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom, // Configuração aqui
})

export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Adicione a lógica de autenticação aqui
  }
}

