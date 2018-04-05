import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  guardar( usuario: Usuario ) {
    this.usuario.nombre = usuario.nombre;
    if ( !this.usuario.google ) {
      this.usuario.email = usuario.email;
    }
    this._usuarioService.actualizarUsuario( this.usuario)
                        .subscribe();
  }

  seleccionImage(archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;
  }

  cambiarImagen() {

  this._usuarioService.cambiarImgaen( this.imagenSubir, this.usuario._id );

  }

}
