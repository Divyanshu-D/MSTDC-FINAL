import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LocationsCategoriesComponent } from './locations-categories/locations-categories.component';
import { HotelReservationComponent } from './hotel-reservation/hotel-reservation.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { TemplesComponent } from './locations-categories/temples/temples.component';
import { FortsComponent } from './locations-categories/forts/forts.component';
import { BeachesComponent } from './locations-categories/beaches/beaches.component';
import { HillstationComponent } from './locations-categories/hillstation/hillstation.component';
import { WildlifeComponent } from './locations-categories/wildlife/wildlife.component';
import { CultureComponent } from './locations-categories/culture/culture.component';
import { HomeComponent } from './home/home.component';
import { UnfoldComponent } from './unfold/unfold.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MapsComponent } from './maps/maps.component';
import { MurudComponent } from './locations-categories/beaches/Locations/murud/murud.component';
import { DapoliComponent } from './locations-categories/beaches/Locations/dapoli/dapoli.component';
import { TarkarliComponent } from './locations-categories/beaches/Locations/tarkarli/tarkarli.component';
import { AlibaghComponent } from './locations-categories/beaches/Locations/alibagh/alibagh.component';
import { HarihareshwarComponent } from './locations-categories/beaches/Locations/harihareshwar/harihareshwar.component';
import { RaigadComponent } from './locations-categories/forts/locations/raigad/raigad.component';
import { RagmachiComponent } from './locations-categories/forts/locations/ragmachi/ragmachi.component';
import { JanjiraComponent } from './locations-categories/forts/locations/janjira/janjira.component';
import { HarishchandragadComponent } from './locations-categories/forts/locations/harishchandragad/harishchandragad.component';
import { KalsubaiComponent } from './locations-categories/forts/locations/kalsubai/kalsubai.component';

import { MahabaleshwarComponent } from './locations-categories/hillstation/locations/mahabaleshwar/mahabaleshwar.component';
import { MatheranComponent } from './locations-categories/hillstation/locations/matheran/matheran.component';
import { LonavlaComponent } from './locations-categories/hillstation/locations/lonavla/lonavla.component';
import { PachganiComponent } from './locations-categories/hillstation/locations/pachgani/pachgani.component';
import { BhandaraComponent } from './locations-categories/hillstation/locations/bhandara/bhandara.component';
import { ShirdiComponent } from './locations-categories/temples/location/shirdi/shirdi.component';
import { GanpatipuleComponent } from './locations-categories/temples/location/ganpatipule/ganpatipule.component';
import { MoreshwarComponent } from './locations-categories/temples/location/moreshwar/moreshwar.component';
import { DagdushethComponent } from './locations-categories/temples/location/dagdusheth/dagdusheth.component';
import { BhimashankarComponent } from './locations-categories/temples/location/bhimashankar/bhimashankar.component';
import { TadobaAndhariComponent } from './locations-categories/wildlife/location/tadoba-andhari/tadoba-andhari.component';
import { KoynaWildlifeSanctuaryComponent } from './locations-categories/wildlife/location/koyna-wildlife-sanctuary/koyna-wildlife-sanctuary.component';
import { KarnalaWildlifeSanctuaryComponent } from './locations-categories/wildlife/location/karnala-wildlife-sanctuary/karnala-wildlife-sanctuary.component';
import { ChikhaldharaWildlifeSanctuaryComponent } from './locations-categories/wildlife/location/chikhaldhara-wildlife-sanctuary/chikhaldhara-wildlife-sanctuary.component';
import { SanjayGandhiWildlifeSanctuaryComponent } from './locations-categories/wildlife/location/sanjay-gandhi-wildlife-sanctuary/sanjay-gandhi-wildlife-sanctuary.component';


import { HotelsReservationBeachesComponent } from './hotel-reservation/Locations/Beaches/hotels-reservation-beaches/hotels-reservation-beaches.component';
import { HotelReservationTarkarliComponent } from './hotel-reservation/Locations/Beaches/hotel-reservation-tarkarli/hotel-reservation-tarkarli.component';
import { HotelReservationDapoliComponent } from './hotel-reservation/Locations/Beaches/hotel-reservation-dapoli/hotel-reservation-dapoli.component';
import { HotelReservationAlibaghComponent } from './hotel-reservation/Locations/Beaches/hotel-reservation-alibagh/hotel-reservation-alibagh.component';
import { HotelReservationHariharshwarComponent } from './hotel-reservation/Locations/Beaches/hotel-reservation-hariharshwar/hotel-reservation-hariharshwar.component';
import { from } from 'rxjs';



import { FormsModule } from '@angular/forms';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LocationsCategoriesComponent,
    HotelReservationComponent,
    TravelBookingComponent,
    ExploreComponent,
    TemplesComponent,
    FortsComponent,
    BeachesComponent,
    HillstationComponent,
    WildlifeComponent,
    CultureComponent,
    HomeComponent,
    UnfoldComponent,
    ContactsComponent,
    MapsComponent,
    MurudComponent,
    DapoliComponent,
    TarkarliComponent,
    AlibaghComponent,
    HarihareshwarComponent,
    RaigadComponent,
    RagmachiComponent,
    JanjiraComponent,
    HarishchandragadComponent,
    KalsubaiComponent,
    MahabaleshwarComponent,
    MatheranComponent,
    LonavlaComponent,
    PachganiComponent,
    BhandaraComponent,
    ShirdiComponent,
    GanpatipuleComponent,
    MoreshwarComponent,
    DagdushethComponent,
    BhimashankarComponent,
    TadobaAndhariComponent,
    KoynaWildlifeSanctuaryComponent,
    KarnalaWildlifeSanctuaryComponent,
    ChikhaldharaWildlifeSanctuaryComponent,
    SanjayGandhiWildlifeSanctuaryComponent,
    HotelsReservationBeachesComponent,
    HotelReservationTarkarliComponent,
    HotelReservationDapoliComponent,
    HotelReservationAlibaghComponent,
    HotelReservationHariharshwarComponent,


    CreateHotelComponent,
    HotelDetailsComponent,
    HotelListComponent,
    UpdateHotelComponent,
    HotelViewComponent,
    HotelBookComponent,
    ReservationDetailsComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    //Nav-bar Components
    { path: '', component: HomeComponent },
    { path: 'book', component: TravelBookingComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'culture-and-festivals', component: CultureComponent },
    { path: 'home', component: HomeComponent },
    { path: 'unfold-maharashtra', component: UnfoldComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'temples', component: TemplesComponent },
    //Temples locations
    { path: 'shirdi', component: ShirdiComponent },
    { path: 'ganpatipule', component: GanpatipuleComponent },
    { path: 'bhimashankar', component: BhimashankarComponent },
    { path: 'moreshwar', component: MoreshwarComponent },
    { path: 'dagdusheth', component: DagdushethComponent },
    { path: 'forts', component: FortsComponent },
    //Forts locations
    { path: 'raigad', component: RaigadComponent },
    { path: 'rajmachi', component: RagmachiComponent },
    { path: 'harishchandragad', component: HarishchandragadComponent },
    { path: 'janjira', component: JanjiraComponent },
    { path: 'kalsubai', component: KalsubaiComponent },
    { path: 'beach', component: BeachesComponent },
    //Beach Locations
    { path: 'dapoli', component: DapoliComponent },
    { path: 'tarkarli', component: TarkarliComponent },
    { path: 'murud', component: MurudComponent },
    { path: 'alibagh', component: AlibaghComponent },
    { path: 'harihareshwar', component: HarihareshwarComponent },
    //hotels
    { path: 'hotel-reservation-murud', component: HotelsReservationBeachesComponent },
    { path: 'hotel-reservation-tarkarli', component: HotelReservationTarkarliComponent },
    { path: 'hotel-reservation-dapoli', component: HotelReservationDapoliComponent },
    { path: 'hotel-reservation-alibagh', component: HotelReservationAlibaghComponent },
    { path: 'hotel-reservation-harihareshwar', component: HotelReservationHariharshwarComponent },
    { path: 'hill-station', component: HillstationComponent },
    //Hill-Station Location
    { path: 'lonavla', component: LonavlaComponent },
    { path: 'bhandara', component: BhandaraComponent },
    { path: 'mahabaleshwar', component: MahabaleshwarComponent },
    { path: 'matheran', component: MatheranComponent },
    { path: 'pachgani', component: PachganiComponent },
    { path: 'wild-life-sanctuary', component: WildlifeComponent },
    //Wildlife Sanctuary Locations
    { path: 'tadoba-andhari-tiger-reserve', component: TadobaAndhariComponent },
    { path: 'karnala-wildlife-sanctuary', component: KarnalaWildlifeSanctuaryComponent },
    { path: 'koyna-wildlife-sanctuary', component: KoynaWildlifeSanctuaryComponent },
    { path: 'chikhaldhara-wildlife-reserve', component: ChikhaldharaWildlifeSanctuaryComponent },
    { path: 'sanjay-gandhi-animal-sanctuary', component: SanjayGandhiWildlifeSanctuaryComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
