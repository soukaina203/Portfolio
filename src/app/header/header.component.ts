import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { MatModule } from '../mat.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    MatModule,
    MatIconModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
scrollTo(section:any) {
document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
}
}
