import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';
import { ProductDepartmentComponent } from './components/product-department/product-department.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
