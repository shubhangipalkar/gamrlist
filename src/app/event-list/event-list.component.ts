import { Component, OnInit } from '@angular/core';
import {APIcallService} from '../Service/apicall.service';
import {eventList} from '../model/eventList';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'console';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

xlist: eventList;
  constructor(private router: Router, private service: APIcallService) {
//this.selectedList = new eventList();

  }
  ngOnInit(): void {
  }

  getLST(){
    this.service.getData(this.xlist).subscribe((data:any)=>{
      this.xlist=data.data;
        console.log(data.data);
      })
  }

   }


