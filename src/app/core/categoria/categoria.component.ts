import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { loadCategoria } from './store/categoria.actions';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
   
  categorias$!:Observable<any>

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.categorias$ = this.store.dispatch(loadCategoria({categoria}))
  }

}
