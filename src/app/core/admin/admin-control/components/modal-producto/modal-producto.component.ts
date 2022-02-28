import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { finalize, Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css'],
})
export class ModalProductoComponent implements OnInit {
  FormAddProc!: FormGroup;
  uploadPercent!: Observable<any>;
  url!: Observable<string>;
  constructor(private fb: FormBuilder, private storage:AngularFireStorage) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.FormAddProc = this.fb.group({
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      img: [''],
    });
  }

  imgUpload(event:any){
    const file = event.target.files[0];
    const filePath = `producto-${moment().format('YYYYMMDDHHmmss')}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    // get notified when the download URL is available
    this.uploadPercent = task.percentageChanges();
    
    task.snapshotChanges().pipe(
        finalize(() => this.url = fileRef.getDownloadURL() )
     )
    .subscribe()
  }

  publicar(){
    const {nombre, categoria, precio, descripcion,img } = this.FormAddProc.value
    console.log(this.FormAddProc.value)
  }
  
}
