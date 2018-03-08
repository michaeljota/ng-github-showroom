import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [NavbarComponent],
})
export class CoreModule {}
