import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import projectData from "../../assets/ProjectDetail.json"

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule ,RouterModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class DetailsComponent implements OnInit {

  project: object | any ={};
  isOpen = false;

  route = inject(ActivatedRoute);
  website = this.route.snapshot.paramMap.get('website');
  ngOnInit(): void {
    this.project = projectData.find((project) => project.projectTitle === this.website);
    console.log(projectData);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
