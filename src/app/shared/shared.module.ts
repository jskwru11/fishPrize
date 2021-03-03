import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
