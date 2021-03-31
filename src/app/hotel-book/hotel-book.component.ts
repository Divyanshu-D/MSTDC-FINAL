import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-book',
  templateUrl: './hotel-book.component.html',
  styleUrls: ['./hotel-book.component.css']
})
export class HotelBookComponent implements OnInit {

  booking: Booking = new Booking();
  id: number;
  submitted = false;

  constructor(private route: ActivatedRoute,private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    

  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }



  save() {
    this.bookingService
    .createBooking(this.id,this.booking).subscribe(data => {
      console.log(data)
      this.booking = new Booking();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/hotels']);
  }

}
