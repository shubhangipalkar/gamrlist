import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router';
import {series} from '../model/series';
import {SeriesService} from '../Service/series.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  series: Array<series>;
  constructor(private rouetr: Router, private service: SeriesService) { }

  ngOnInit(): void {
  }

  getvalue(){
    return this.service.getAllSeries().subscribe(data => {
      this.series =  data;
      console.log('USer data');
      console.log (data);
    })
  }

}
