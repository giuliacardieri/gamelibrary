import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module to add all material elements from this web app

// Material elements
import { MatToolbarModule, MatTabsModule, MatNativeDateModule,
      MatCardModule, MatIconModule, MatButtonModule, 
      MatMenuModule, MatFormFieldModule, MatInputModule, 
      MatCheckboxModule, MatSelectModule, MatDatepickerModule,
      MatSnackBarModule } from '@angular/material';

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
    MatNativeDateModule,
    MatSnackBarModule
   ],
  declarations: []
})
export class AppMaterialModule { }
