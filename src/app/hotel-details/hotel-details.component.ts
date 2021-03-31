import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  id: number;
  hotel: Hotel;

  constructor(private route: ActivatedRoute,private router: Router,
    private hotelService: HotelService) { }

  ngOnInit(){

    this.hotel = new Hotel();

    this.id = this.route.snapshot.params['id'];
    
    this.hotelService.getHotel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hotel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['hotels']);
  }

}
