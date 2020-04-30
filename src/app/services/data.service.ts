import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private countrySource = new BehaviorSubject([]);
  currentCountries = this.countrySource.asObservable();

  constructor() { }

  changeCountries(countries: any[]) {
    this.countrySource.next(countries)
  }
}
