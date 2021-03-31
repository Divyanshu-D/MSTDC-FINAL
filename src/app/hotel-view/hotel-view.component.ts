import { Component, OnInit } from '@angular/core';

import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { Observable } from "rxjs";
import { HotelService } from "../hotel.service";
import { Hotel } from "../hotel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {

  hotels!: Observable<Hotel[]>;

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(){

    this.reloadData();
  }

  reloadData() {
    this.hotels = this.hotelService.getHotelsList();
  }

  hotelDetails(id: number){
    this.router.navigate(['details', id]);
  }

  bookHotel(id: number){
    this.router.navigate(['hotelbook', id]);
  }

}
