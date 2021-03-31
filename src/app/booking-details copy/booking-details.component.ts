import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  id: number;
  booking: Booking;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookingService: BookingService) { }

  ngOnInit(){

    this.booking = new Booking();

    this.id = this.route.snapshot.params['id'];
    
    this.bookingService.getBooking(this.id)
      .subscribe(data => {
        console.log(data)
        this.booking = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['reservation']);
  }

}
