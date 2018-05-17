import { Component, Injectable } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {SelectItem} from 'primeng/api';
import {Observable} from 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Component({
    selector:'pm-delay-flight-predictor',
    templateUrl: './delay-flight-predictor.component.html',
    styleUrls: ['./delay-flight-predictor.component.css']
})
@Injectable()
export class DelayFlightPredictorComponent{

    pageTitle: string ='Flight';
    dayOfWeek: SelectItem[];
    airports: SelectItem[];
    destionation: SelectItem[];
    selectedDay: Day;
    selectedOrigin: string;
    selectedDestination: string;
    carrier: string;
    departureTimeRange: string;
    result: string;
    
    prediction: string;

    /**
     *
     */
    constructor(private http:HttpClient) {

        

        this.dayOfWeek =[
            {label:'Select Day', value:null},
            {label:'Monday', value:{id:1, name:'Monday', code:'1'}},
            {label:'Tuesday', value:{id:2, name:'Tuesday', code:'2'}},
            {label:'Wednesday', value:{id:3, name:'Wednesday', code:'3'}},
            {label:'Thursday', value:{id:4, name:'Thursday', code:'4'}},
            {label:'Friday', value:{id:5, name:'Friday', code:'5'}},
            {label:'Saturday', value:{id:6, name:'Saturday', code:'6'}},
            {label:'Sunday', value:{id:7, name:'Sunday', code:'7'}}
        ]

        this.airports =[
            {label:'Select Station', value:null},
            {label:'ATL', value:'ATL'},
            {label:'LAX', value:'LAX'},
            {label:'ORD', value:'ORD'},
            {label:'DFW', value:'DFW'},
            {label:'JFK', value:'JFK'},
            {label:'SFO', value:'SFO'},
            {label:'CLT', value:'CLT'},
            {label:'LAS', value:'LAS'},
            {label:'PHX', value:'PHX'},
        ]

    }

    handleClick() {
        //execute action
        //call API here
       
        this.doPOST().subscribe(hero => this.result = hero.delayPrediction);

        return this.result;
    }

    doPOST() : Observable<IProto>{
        console.log("POST");
        let url ='/api/predict' ;

        var requestBody=
        {
            DAY_OF_WEEK: this.selectedDay.code, 
            CARRIER: this.carrier, 
            DEST: this.selectedDestination,
            ORIGIN: this.selectedOrigin,
            DEP_TIME_BLK: this.departureTimeRange
        };

        let body = JSON.stringify(requestBody);

        return this.http.post<IProto>(url, body, httpOptions);
      }

}

interface IProto
{
    delayPrediction: string;

}

interface Day{
    name: string;
    code: string;
}

