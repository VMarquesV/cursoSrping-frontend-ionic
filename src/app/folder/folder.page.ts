import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(private activatedRoute: ActivatedRoute, public router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  login(){
    console.log(this.creds);
    this.router.navigateByUrl('categorias');

  }
  
  ionViewWillEnter(){
    this.menu.enable(false);
  }
}
