import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'home-local-tab',
  templateUrl: './local-tab.component.html',
  styleUrls: ['./local-tab.component.scss']
})
export class LocalTabComponent implements OnInit, OnDestroy {

  country: any;
  $country: Subscription

  constructor(
    private dataService: DataService
  ) { }
  

  ngOnInit(): void {
    this.$country = this.dataService.currentCountries.subscribe(
      (response: any[]) => {
        if (response && response.length > 0) {
          this.country = response.filter(elem => elem.country == 'Colombia')[0]
          console.log(this.country)
        }
      },
      (err: any) => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.$country.unsubscribe();
  }
}
