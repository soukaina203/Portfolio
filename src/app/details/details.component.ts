import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class DetailsComponent implements OnInit {
  websites = [
    {
      website: 'Dish', array: [
        { title: 'Landing page', img:'recipe.png', link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_welcome-to-dish-your-ultimate-culinary-companion-activity-7215059483079667714-Gn6O?utm_source=share&utm_medium=member_desktop', desc: "Welcome to Dish, your ultimate culinary companion! Whether you're a seasoned chef or a kitchen novice, Dish offers a rich collection of recipes to satisfy your cravings and inspire your creativity. From hearty meals to delectable desserts, you'll find everything you need to whip up delicious dishes for any occasion." },
        { title: 'Admin console', img:'recipeAdmin.png', link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_dish-web-application-admin-dashboard-overview-activity-7216110143724236801-p_Wn?utm_source=share&utm_medium=member_desktop', desc: "Welcome to Dish, your ultimate culinary companion! Whether you're a seasoned chef or a kitchen novice, Dish offers a rich collection of recipes to satisfy your cravings and inspire your creativity. From hearty meals to delectable desserts, you'll find everything you need to whip up delicious dishes for any occasion." },
        { title: 'User Dashboard',img:'recipeUser.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_the-user-dashboard-offers-a-seamless-experience-activity-7216959482730336256-Ygij?utm_source=share&utm_medium=member_desktop', desc: "The user dashboard offers a seamless experience with three primary sections: Profile for updating personal information, Home for exploring and engaging with recipes via filters and a search bar, and Liked Recipes for easy access to favorite dishes." }
      ]
    },
    {
      website: 'Rental', array: [
        { title: 'Landing page',img:'rental.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_a-robust-rental-web-application-built-with-activity-7208797384133201920-Xocw?utm_source=share&utm_medium=member_desktop', desc: "A robust rental web application built with React, Tailwind CSS, and Laravel. The frontend, crafted using React and styled with Tailwind CSS, ensures a responsive and dynamic user experience. The backend, powered by Laravel, provides a secure and efficient server-side framework for handling data and authentication. This combination offers a seamless and modern solution for rental management." },
        { title: 'Admin console', img:'adminCar.png', link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_the-admin-dashboard-of-our-rental-app-is-activity-7208888653702414337-vKqr?utm_source=share&utm_medium=member_desktop', desc: "The admin dashboard of our rental app is designed to provide comprehensive management capabilities over users, cars, reviews, and rentals" },
        { title: 'User Dashboard',img:'CarUser.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_user-dashboard-our-rental-apps-user-dashboard-activity-7208874889661796352-Yhr3?utm_source=share&utm_medium=member_desktop', desc: "The user dashboard of our rental app offers a seamless and intuitive experience, featuring a Car Listing View with a search bar and filter options for finding cars, options to rent or view detailed car information, and a My Rentals Interface for accessing rental history." },
        { title: 'User Dashboard',img:'CarUser.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_user-dashboard-make-a-review-interface-our-activity-7208877905689411584-q_kC?utm_source=share&utm_medium=member_desktop', desc: "Our rental app offers a comprehensive Review Interface for sharing and managing experiences, and a Profile View Interface for easily managing personal information and settings." }
      ]
    },
    {
      website: 'Centre', array: [
        { title: 'Landing page', img:'lb.png', link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_educationaltechnology-edtech-innovation-activity-7196839897989607424-SmQn?utm_source=share&utm_medium=member_desktop', desc: "Elevate your educational center with my cutting-edge management app, built with Angular, .Net, and PostgreSQL for exceptional functionality and security. Featuring seamless navigation, dynamic dashboards, and efficient CRUD operations for users, professors, clients, classes, and resources. Tailwind CSS ensures a sleek, responsive design, revolutionizing efficiency and transparency in educational management." },
        { title: 'Admin console 1',img:'adminCentre.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_in-the-clients-section-users-can-seamlessly-activity-7196855187355881472-RKzU?utm_source=share&utm_medium=member_desktop', desc: "In the Clients section, administrators can manage client information through a robust CRUD system, handling registration details, contact information, and notes for personalized interactions. In the Classes section, a powerful CRUD interface allows for managing class types, educational levels, professor assignments, and scheduling. This ensures appropriate staffing and organized timetables, catering to diverse student demographics." },
        { title: 'Admin console 2',img:'adminCentre.png',  link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_simplifying-finances-and-streamlining-attendance-activity-7196884938963517441-9-a9?utm_source=share&utm_medium=member_desktop', desc: "Effortless Fee Management: Register fees with ease, including amount, date, client, and class, ensuring accurate record-keeping and simplified billing. Automatic Attendance Tracking: Create presence sheets by selecting class, professor, year, and month, generating a student list for easy attendance marking. This system saves time, reduces errors, and provides clear attendance records." },
        { title: 'Admin console 3', img:'adminCentre.png', link: 'https://www.linkedin.com/posts/soukaina-mourabit-253a33240_financial-clarity-at-your-fingertips-granular-activity-7196923296053886976-2MPm?utm_source=share&utm_medium=member_desktop', desc: "Manage charges with precision using CRUD functionality, allowing easy creation, updates, and deletions to adapt your pricing structure. Payments auto-populate resources, streamlining workflows and reducing errors. Generate automated financial reports and cash flow statements by specifying the year and month, providing real-time insights for informed decision-making." }
      ]
    },
  ];

  route = inject(ActivatedRoute);
  website = this.route.snapshot.paramMap.get('website');
 choosenWebsite:any
  ngOnInit(): void {
    if (this.website === 'Dish') {
      // Add your logic here
      this.choosenWebsite=this.websites[0]
    }
    if (this.website === 'Rental') {
      // Add your logic here
      this.choosenWebsite=this.websites[1]
    }
    if (this.website === 'Centre') {
      // Add your logic here
      this.choosenWebsite=this.websites[2]
    }
  }
}
