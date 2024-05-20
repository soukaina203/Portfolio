import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    MatIcon,
    MatIconButton,
    MatIconModule,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollTo(section:any) {
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
    }
}
