import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable, take } from 'rxjs';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addProdcuto } from '../../store/productos.actions';
import { setLoadingSpinner } from 'src/app/shared/state/headers.actions';
import { Categoria } from 'src/app/core/categoria/model/categoria.model';
import { getCategorias } from 'src/app/core/categoria/store/categoria.selectors';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css'],
})
export class ModalProductoComponent implements OnInit {
  FormAddProc!: FormGroup;
  uploadPercent!: Observable<any>;
  url!: Observable<string>;
  categorias!: Observable<Categoria[]>;
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.categorias = this.store.select(getCategorias);
  }

  initForm() {
    this.FormAddProc = this.fb.group({
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });
  }

  imgUpload(event: any) {
    const file = event.target.files[0];
    const filePath = `producto-${moment().format('YYYYMMDDHHmmss')}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    // get notified when the download URL is available
    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef
            .getDownloadURL()
            .subscribe((url) => this.FormAddProc.get('img')?.setValue(url));
        })
      )
      .subscribe();
  }

  publicar() {
    const { nombre, categoria, precio, descripcion, img } =
      this.FormAddProc.value;
    let productos = {
      nombre,
      descripcion,
      imagen: img,
      precio,
      categoria,
    };
    this.store.dispatch(setLoadingSpinner({ state: true }));
    this.store.dispatch(addProdcuto({ productos }));
  }
}
