import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStrar } from './state/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.ingresar()
  }

  ingresar(){
    const email = 'fakeuzy@gmail.com'
    const password = 'fakeuzy'

    this.store.dispatch(loginStrar({email, password}))
  }

}
