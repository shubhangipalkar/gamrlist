import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {series} from '../model/series';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
 sport_id = 5;
  constructor(private http: HttpClient) { }

  // getSeries(): Observable <series[]>{
  // return this.http.post<series[]>("http://35.177.10.95:5256/series/get_series_by_sport1", + "?sport_id=5")
  // }

  getAllSeries(): Observable <series[]>{
    return this.http.post("http://35.177.10.95:5256/series/get_series_by_sport1", + "?sport_id=5").pipe(map( data => {
      const Begining: Array <series> = [];
      for (const id in data){
        Begining.push(data[id]);
      }
      return Begining;
    }
    ))
  }


}
