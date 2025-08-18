import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatIcon,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills=[
  {img:"frontend",title:"Frontend Techs",techs:"HTML , CSS , JavaScript , TailwindCss ,ReactJs , Angular"},
  {img:"backend",title:"Backend Techs",techs:"PHP , Laravel , C# ,Symphony ,  ExpressJs ,  ,.Net web api"},
  {img:"tools",title:"Other Techs",techs:" VS Code , Figma ,Git ,Github ,Responsive Design, Scrum "},
  {img:"data2",title:"Database Techs",techs:"Mysql , Postgres , MongoDB"},

]
}
