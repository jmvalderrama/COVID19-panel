import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatIconModule } from '@angular/material';

import { LocalTabComponent } from './local-tab.component';

@NgModule({
  declarations: [LocalTabComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  exports: [LocalTabComponent]
})
export class LocalTabModule { }
