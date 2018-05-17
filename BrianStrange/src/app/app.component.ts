import { Component } from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

 // @ViewChild('bigMenu') bigMenu: Menu;
  //@ViewChild('smallMenu') smallMenu: Menu;

  /**
   *
   */
  constructor( private router: Router) {
       
  }

  ngOnInit(){

    this.menuItems =[
      {label: 'Home', icon:'fa-home', routerLink:['/home']},
      {label: 'Flight Predictor', icon:'fa-plane', routerLink:['/delay-flight-predictor']}
    ]

  }

  title = 'app';


}
