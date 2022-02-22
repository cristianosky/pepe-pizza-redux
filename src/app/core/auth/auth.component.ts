import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { AppState } from 'src/app/store/app.state';
import { loginStrar, registerStrar } from './state/auth.actions';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private _alert: MensajesService
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ingresar() {
    if (this.loginForm.invalid) {
      this._alert.alertaError('Campos incompletos porfavor verificar', 2000);
      return;
    } else {
      this.store.dispatch(setLoadingSpinner({ state: true }));
      const { email, password } = this.loginForm.value;
      this.store.dispatch(loginStrar({ email, password }));
    }
  }

  registrar() {
    if (this.registerForm.invalid) {
      this._alert.alertaError('Campos incompletos porfavor verificar', 2000);
      return;
    } else {
      this.store.dispatch(setLoadingSpinner({ state: true }));
      const { name, email, password } = this.registerForm.value;

      this.store.dispatch(registerStrar({ name, email, password }));
    }
  }
}
