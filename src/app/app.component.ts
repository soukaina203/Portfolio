import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
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

  constructor(private translate: TranslateService,private router : Router) { }

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
isModalOpen = false;


  ngOnInit() {
    // Check local storage so returning visitors aren't constantly interrupted
    const hasSeenPopup = localStorage.getItem('seenPortfolioPopup');

    if (!hasSeenPopup) {
      // Small timeout to give the user a second to appreciate your starry background first
      setTimeout(() => {
        this.isModalOpen = true;
      }, 800);
    }
  }

  navigateToNewPortfolio() {
    this.closeModal();
    // Mark as seen so it doesn't pop up again
    localStorage.setItem('seenPortfolioPopup', 'true');
    // Replace with your actual route path to the new site/page
    this.router.navigate(['/new-portfolio']);
  }

  closeModal() {
    this.isModalOpen = false;
    // Optional: Save to local storage even if they close it, depending on your preference
    localStorage.setItem('seenPortfolioPopup', 'true');
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
