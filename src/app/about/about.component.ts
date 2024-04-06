import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  mySkills=['HTML','CSS','Javascript','TailwindCSS','ReactJs','Angular','Laravel','.Net','Mysql','Postgres','Responsive Design','Git','Github']
}
