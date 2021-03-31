import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  // closeResult = '';

  booking: Booking = new Booking();
  id: number;
  submitted = false;

  title = 'modal2';
  editBookingForm: FormGroup;

  bookings: Observable<Booking[]>;

  constructor(private modalService: NgbModal, private bookingService: BookingService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();

      
     
    }


    

    reloadData() {
      this.bookings = this.bookingService.getBookingsList();
    }

    
  
    bookingDetails(id: number){
      this.router.navigate(['bookingdetails', id]);
    }

    save() {
  
      this.bookingService
      .updateBooking(this.booking).subscribe(data => {
        console.log(data)
        this.booking = new Booking();
      
      }, 
      error => console.log(error));
    }

    list(){
      this.router.navigate(['hotels']);
    }
  
    onSubmit() {
      this.submitted = true;
      console.log(this.booking)
      this.save();    
    }


    openModal(targetModal: any, booking: any) {
      this.modalService.open(targetModal, {
       centered: true,
       backdrop: 'static'
      });

   
  
    }
}
