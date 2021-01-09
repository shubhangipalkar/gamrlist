import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {adlog} from '../model/admin'
import { eventList } from '../model/eventList';
import {map} from 'rxjs/operators';
import { promise } from 'protractor';
import { resolve } from 'dns';



@Injectable({
  providedIn: 'root'
})
export class APIcallService {
  //headers= new HttpHeaders().set('content-type', 'application/json');
  hastoken: string;

  url = "http://35.177.10.95:5256/admin/login";
  urlist = "http://35.177.10.95:5256/event/getEventsListing";
  urlseries = "http://35.177.10.95:5256/series/get_series_by_sport1?sport_id=2";


  constructor(private http: HttpClient) { }
  gettond(){

  let url= "http://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }



  getData(list: eventList): Observable<eventList>{
  return this.http.post<eventList> ('http://35.177.10.95:5256/event/getEventsListing', list, {
    headers : new HttpHeaders ({
      'Content-type' : 'application : json'
    })
  })
}

// getData(){
//   return this.http.get('http://35.177.10.95:5256/event/getEventsListing');
// }

  // )).pipe(map(
  //   result => {
  //     const listItem:Array<eventList> = [];
  //   for (const id in result){
  //   this.listItem = result;
  //    }
  //  ))
  //  }

  //  getData(): Observable<eventList[]>{
  //   return this.http.get(url).map((res: Response) =>
  //   <eventList[]> res.json() );
  // }

//   getNormal(): Observable<adlog[]>{
// return this.http.get<adlog[]>('http://35.177.10.95:5256/admin/login');
//   }

  getNormal(ad: adlog): Observable<adlog> {
    return this.http.post<adlog> ('http://35.177.10.95:5256/admin/login', ad, {
      headers: new HttpHeaders ({
        'Content-type': 'application: json'
      })
    })

  }


  // getData(list: any){
  //   this.http.post<any>(this.urlist,{headers: this.headers}).toPromise().then(
  //   data => {
  //     this.hastoken = data ['token'];
  //     if (this.hastoken){
  //       localStorage.setItem('token', data['token']);
  //     }

  //   });
  //   return new Promise ((resolve) => {
  //     if (this.hastoken){
  //         resolve(this.hastoken);
  //       }
  //     });
  //   }

   authenticateUser(log: adlog){
    return this.http.post(this.url, log);
  }


// adminchck(email: string, password: string) {
//   let body = JSON.stringify({
//     'username': email,
//     'password': password
// });
// console.log(body);
// return this.http.post(this.url + 'login', body)
//     .pipe(map(response => new name(response)),
//     );
// } // sample method from angular doc

// gettond(){
//   return this.http.get("http://jsonplaceholder.typicode.com/posts/");
//}


}
