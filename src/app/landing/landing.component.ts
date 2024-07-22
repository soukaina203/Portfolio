import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, HeaderComponent, HomeComponent, AboutComponent, SkillsComponent,
    ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  title = 'portfolio2';
  lang: string = 'en';

  constructor(private translate: TranslateService) { }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-flip-up');
        } else {
          entry.target.classList.remove('animate-fade');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  switch() {
    if (this.lang === 'en') {
      this.translate.use('fr')
      this.lang = 'fr';
    } else {
      this.translate.use('en');
      this.lang = 'en';
    }
  }
}
