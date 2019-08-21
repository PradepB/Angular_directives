import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHignlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlighDirective } from './better-highlight/better-highligh.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHignlightDirective,
    BetterHighlighDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
