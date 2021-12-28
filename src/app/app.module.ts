import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
