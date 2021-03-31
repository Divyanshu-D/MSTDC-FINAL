import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8095/reservation';

  constructor(private http: HttpClient) { }

  getBooking(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/${id}`);
  }

  createBooking(id: number, booking: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}/save/${id}`, booking);
  }

  updateBooking(booking: Object): Observable<Object> {
    console.log(booking)
    return this.http.post(`${this.baseUrl}/update`, booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-hotel/${id}`, { responseType: 'text' });
  }

  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
