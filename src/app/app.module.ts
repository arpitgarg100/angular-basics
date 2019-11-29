import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackCommentsComponent } from './feedback-comments/feedback-comments.component';
import { AppServiceService } from './app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FeedbackFormComponent,
    FeedbackCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FeedbackCommentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
