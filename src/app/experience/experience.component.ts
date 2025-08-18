import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences=[
  {time:"date1",title:"exp1",desc:"dec1"},
  {time:"date2",title:"exp2",desc:"dec2"},
  {time:"date3",title:"exp3",desc:"dec3"},
  // {time:"date4",title:"exp3",desc:"dec3"},
  {time:"date3",title:"exp3",desc:"dec3"},
]
}
