import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    MenuComponent,
    SearchComponent,
    CardComponent,
  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,  
    MatCardModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
  ],
  providers: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,  
    MatCardModule,
    MenuComponent,
    SearchComponent,
    CardComponent,
    CommonModule,
    HttpClientModule, 
    FormsModule,
    NgxPaginationModule,
  ],
})
export class SharedModule {}
