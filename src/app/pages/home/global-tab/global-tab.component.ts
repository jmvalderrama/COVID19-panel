import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { DataService } from '../../../../app/services/data.service';

@Component({
  selector: 'home-global-tab',
  templateUrl: './global-tab.component.html',
  styleUrls: ['./global-tab.component.scss']
})
export class GlobalTabComponent implements OnInit, OnDestroy {

  private $countriesSubs: Subscription;
  countries: any[];
  isLoaded: boolean;
  isReloading: boolean;

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit(): void {
    this.isLoaded = false;
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.$countriesSubs.unsubscribe();
  }

  getCountries(): void {
    this.$countriesSubs = this.dataService.currentCountries.subscribe(
      (response: any[]) => {
        if (response && response.length > 0) {
          this.isLoaded = true;
          this.getTopTenCountries(response);
        }
      },
      (err: any) => console.error(err)
    );
  }

  getTopTenCountries(countries: any[]): void {
    const tenCountries = countries
      .map(country => country = {...country, updatedAt: moment(country.updated).format('YYYY-MM-DD HH:mm:ss')})
      .sort((a: any, b: any) => b.cases - a.cases)
      .slice(0, 10);
    this.countries = tenCountries;
  }

  reload(): void {
    this.isReloading = true;
    document.getElementById('countries-information').classList.add('loading')
    setTimeout(() => {
      document.getElementById('countries-information').classList.remove('loading');
      this.isReloading = false;
      this.openSnackBar('Datos actualizados correctamente', 'Cerrar');
    }, 3000);
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
