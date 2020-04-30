import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { GlobalTabModule } from './global-tab/global-tab.module';
import { LocalTabModule } from './local-tab/local-tab.module';


@NgModule({
  declarations: [HomeComponent, SearchTabComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GlobalTabModule,
    LocalTabModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
