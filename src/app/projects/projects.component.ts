import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule,
    CommonModule,
    RouterModule,

  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: { title: string; description: string; logo: SafeHtml; details: string[]; imageUrl: string; link: string; buttonColor: string; backgroundClass?: string }[];

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      {
        title: 'Dish',
        description: 'one',
        logo: this.sanitizer.bypassSecurityTrustHtml('<img src="assets/projects/dishLogo 1.png" class="w-15 h-15 ml-[-30px] " />'),
        details: ['dish1', 'dish2'],
        imageUrl: 'assets/projects/dish.png',
        link:'Dish',
        buttonColor: "relative overflow-hidden border-[#C0A543]  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px]  text-[#C0A543] transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#C0A543] before:duration-300 hover:text-white hover:shadow-[#C0A543] hover:before:h-64 hover:before:-translate-y-32 "
      },

      {
        title: 'Rental',
        description: 'two',
        logo: this.sanitizer.bypassSecurityTrustHtml('<span class="block mb-4 text-lg font-semibold w-fit text-primary"><h1 class="uppercase p-4 font-bold text-white bg-[#E60035]">BestCar</h1></span>'),
        details: ['bestCar1', 'bestCar2'],
        imageUrl: 'assets/projects/rental.png',
        link:"Rental",
        buttonColor: "relative overflow-hidden border-[#E60035]  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px]  text-[#E60035] transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#E60035] before:duration-300 hover:text-white hover:shadow-[#E60035] hover:before:h-64 hover:before:-translate-y-32"
      },
      {
        title: 'Centre',
        description: 'three',
        logo: this.sanitizer.bypassSecurityTrustHtml('  <span class="block mb-4 text-lg font-semibold w-fit text-primary"><h1  class="flex items-center justify-center gap-2 text-2xl font-bold text-black cursor-pointer md:ml-0 flew-row"> <img src="assets/projects/logo.png" alt="" class="w-10 h-15 "> Info Academie</h1> </span>'),
        details: ['academie1', 'academie2'],
        imageUrl: 'assets/projects/centre.png',
        link:'Centre',
        buttonColor: 'relative overflow-hidden border-[#35859D]  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-[#35859D] transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#35859D] before:duration-300 hover:text-white hover:shadow-[#35859D] hover:before:h-64 hover:before:-translate-y-32'
      },
      {
        title: 'TF-SOL',
        description: 'four',
        logo: this.sanitizer.bypassSecurityTrustHtml('<span class="block mb-4 text-lg font-semibold w-fit text-primary"><h1 class="flex gap-2 text-2xl font-bold text-transparent cursor-pointer md:ml-0 flew-row bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">TF-SOL</h1></span>'),
        details: ['tfsol1', 'tfsol2'],
        imageUrl: 'assets/projects/team1.png',
        link: 'TF-SOL',
        buttonColor: 'relative overflow-hidden border-purple-500  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-purple-500 transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-purple-500 before:duration-300 hover:text-white hover:shadow-purple-500 hover:before:h-64 hover:before:-translate-y-32'
      },
      {
        title: 'NexAudit',
        description: 'five',
        logo: this.sanitizer.bypassSecurityTrustHtml('<span class="block mb-4 text-lg font-semibold w-fit text-primary"><h1 class="flex gap-2 text-2xl font-bold cursor-pointer md:ml-0 flew-row text-[#3218BF]">NexAudit</h1></span>'),
        details: ['nexaudit1', 'nexaudit2'],
        imageUrl: 'assets/projects/group1.png',
        link: 'NexAudit',
        buttonColor: 'relative overflow-hidden border-[#3218BF]  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-[#3218BF] transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#3218BF] before:duration-300 hover:text-white hover:shadow-[#3218BF] hover:before:h-64 hover:before:-translate-y-32'
      },
      {
        title: 'ميراث النبوة',
        description: 'six',
        logo: this.sanitizer.bypassSecurityTrustHtml('<h1 class="flex gap-2 text-none text-[#7b6796] py-4 pr-6 text-2xl font-bold flew-row">ميراث النبوة</h1>'),
        details: ['mirat1', 'mirat2'],
        imageUrl: 'assets/projects/binae.png',
        link: 'mirat',
        buttonColor: 'relative overflow-hidden border-[#7b6796]  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-[#7b6796] transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#7b6796] before:duration-300 hover:text-white hover:shadow-[#7b6796] hover:before:h-64 hover:before:-translate-y-32'
      },
      {
        title: 'KRYPTO',
        description: 'seven',
        logo: this.sanitizer.bypassSecurityTrustHtml('<h1 class="flex gap-2 text-2xl font-bold text-black  mb-3 cursor-pointer md:ml-0 flew-row">KRYPTO</h1>'),
        details: ['krypto1', 'krypto2'],
        imageUrl: 'assets/projects/nft1.png',
        link: 'nfts',
        backgroundClass: 'black',
        buttonColor: 'relative overflow-hidden border-black  hover:cursor-pointer  px-7 py-3 md:border-2 rounded-tl-[206.22px] rounded-br-[206px] text-black transition-all border  shadow-2xl before:ease before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:shadow-black hover:before:h-64 hover:before:-translate-y-32'
      }
    ];
  }
}
