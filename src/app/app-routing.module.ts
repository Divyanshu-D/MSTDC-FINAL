import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [{ path: '', redirectTo: 'hotel', pathMatch: 'full' },
{ path: 'hotels', component: HotelListComponent },
{ path: 'add', component: CreateHotelComponent },
{ path: 'update/:id', component: UpdateHotelComponent },
{ path: 'details/:id', component: HotelDetailsComponent },
{ path: 'hotelview', component: HotelViewComponent },
{ path: 'hotelbook/:id', component: HotelBookComponent },
{ path: 'reservation', component: ReservationDetailsComponent },
{ path: 'bookingdetails/:id', component: BookingDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
