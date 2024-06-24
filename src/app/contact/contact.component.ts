import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMapsModule,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Example coordinates (New York City)
  zoom = 12;
}
