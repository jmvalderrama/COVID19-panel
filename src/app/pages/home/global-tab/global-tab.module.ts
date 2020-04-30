import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule, MatListModule, MatCardModule, MatButtonModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';

import { GlobalTabComponent } from './global-tab.component';

@NgModule({
  declarations: [GlobalTabComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  exports: [GlobalTabComponent]
})
export class GlobalTabModule { }
