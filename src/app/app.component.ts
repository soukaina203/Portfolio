import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
declare var Chatbot: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, HeaderComponent, HomeComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio2';
  lang: string = 'en';

  constructor(private translate: TranslateService) { }

  ngAfterViewInit() {
    Chatbot.initBubble({
      chatflowid: "82232a77-a2bf-4a5c-83a4-e817e94598c2",
      apiHost: "https://flowise.cloud.dev-solus.com"
    });
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
