import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel: Hotel = new Hotel();
  submitted = false;
  

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newHotel(): void {
    this.submitted = false;
    this.hotel = new Hotel();
  }



  save() {
    this.hotelService
    .createHotel(this.hotel).subscribe(data => {
      console.log(data)
      this.hotel = new Hotel();
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
  list(){
    this.router.navigate(['hotels']);
  }

}
