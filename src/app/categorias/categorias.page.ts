import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public router: Router, public menu: MenuController) { }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('home/login');
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }
}
