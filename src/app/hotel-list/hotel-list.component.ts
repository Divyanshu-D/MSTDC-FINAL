import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { Observable } from "rxjs";
import { HotelService } from "../hotel.service";
import { Hotel } from "../hotel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels!: Observable<Hotel[]>;

  constructor(private hotelService: HotelService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.hotels = this.hotelService.getHotelsList();
    }

    deleteHotel(id: number) {
      this.hotelService.deleteHotel(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    hotelDetails(id: number){
      this.router.navigate(['details', id]);
    }

    updateHotel(id: number){
      this.router.navigate(['update', id]);
    }

    addHotel(){
      this.router.navigate(['add']);
    }

    reservationDetails(){
      this.router.navigate(['reservation']);
    }

}
