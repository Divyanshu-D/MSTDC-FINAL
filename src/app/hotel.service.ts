import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = 'http://localhost:8095/api';

  constructor(private http: HttpClient) { }

  getHotel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotels/${id}`);
  }

  createHotel(hotel: Object): Observable<Object> {

    // const formdata: FormData = new FormData();

    // formdata.append('file', file);
    // formdata.append('hotel',JSON.parse(JSON.stringify(hotel)));
    
    return this.http.put(`${this.baseUrl}/save-hotel`, hotel);
  }

  updateHotel(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-hotel/${id}`, value);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-hotel/${id}`, { responseType: 'text' });
  }

  getHotelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotel-list`);
  }

}
