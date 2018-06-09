import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule,MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
  ],
    
  providers: [],
  bootstrap: [AppComponent]
}) export class AppModule { }