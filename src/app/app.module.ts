import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PagenotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
