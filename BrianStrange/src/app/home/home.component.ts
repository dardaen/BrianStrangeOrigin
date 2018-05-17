import { Component } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import { Router } from '@angular/router';

@Component({
    
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    pageTitle: string ='Home';
    
    constructor(private router: Router) { }

    handleClick() {
        //execute action
        //call API here
       
        this.router.navigateByUrl('/delay-flight-predictorconstructor');
    }

}