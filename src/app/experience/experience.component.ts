import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences=[
  {time:"June 2021",title:"Experimental Baccalaureate",desc:"Nassim High school Physical Sciences Option"},
  {time:"July 2023",title:"DTS in digital development",desc:" OFPPT, Rabat Full Stack Option"},
  {time:"December 2023",title:".Net & Angular Developer",desc:"At Info academie , CDD for 4 months"},
]
}
