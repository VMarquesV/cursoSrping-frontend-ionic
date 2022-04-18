import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  items: CategoriaDTO[];

  constructor(
    public router: Router, 
    public menu: MenuController,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('home/login');
  }

  ionViewWillEnter(){
    this.menu.enable(true);

    this.categoriaService.findAll()
      .subscribe( res => {
        this.items = res;
      }, 
      error => {
        console.log(error);
      });
  }
}
