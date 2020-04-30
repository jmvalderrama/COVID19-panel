import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { HomeService } from '../../../app/services/home.service';
import { DataService } from '../../../app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  $homeSubs: Subscription;
  isGlobal: boolean;

  constructor(
    private homeService: HomeService,
    private dataService: DataService,
    private router: Router
  ) { 
    // this.isGlobal = false;
  }
  
  ngOnInit(): void {
    this.$homeSubs = this.homeService.getAll().subscribe(
      (response: any) => {
        if (response) {
          this.dataService.changeCountries(response);
        }
      },
      (error: any) => console.error(error)
    );
  }
    
  ngOnDestroy(): void {
    this.$homeSubs.unsubscribe();
  }

  globalDataLoaded(event: boolean): void {
    console.log(event)
    this.isGlobal = event;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
