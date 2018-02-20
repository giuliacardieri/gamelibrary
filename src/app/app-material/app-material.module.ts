import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material elements
import { MatToolbarModule, MatTabsModule, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
  	MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
   ],
  declarations: []
})
export class AppMaterialModule { }
