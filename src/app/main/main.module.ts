import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IndexComponent } from './components/index/index.component';
import { MainRoutingModule } from './main-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { EstateListComponent } from './components/estate-list/estate-list.component';
import { EstateListItemComponent } from './components/estate-list/estate-list-item/estate-list-item.component';


@NgModule({
  declarations: [
    IndexComponent,
    BannerComponent,
    SideMenuComponent,
    HeaderComponent,
    EstateListComponent,
    EstateListItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: []
})
export class MainModule { }
