import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, sanitizeHtmlPipe ],
  exports: [ sanitizeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
