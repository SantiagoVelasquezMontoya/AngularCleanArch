import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentModule],
  exports: [HomeComponent],
})
export class PageModule {}
