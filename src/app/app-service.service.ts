import { Injectable } from "@angular/core";
import { FormData } from "./form";
import { FeedbackCommentsComponent } from "./feedback-comments/feedback-comments.component";

@Injectable({
  providedIn: "root"
})
export class AppServiceService {
  formDataArray: FormData[] = [];
  counter = -1;
  constructor(private feedbackComponent: FeedbackCommentsComponent) {}
  tempForm: FormData = new FormData();
  setData(midTemp, nameTemp, feedbackTemp) {
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.formDataArray[this.counter] = new FormData();
    this.tempForm.mid = midTemp;
    this.tempForm.name = nameTemp;
    this.tempForm.feedback = feedbackTemp;
    this.formDataArray[this.counter] = this.tempForm;
    console.log(this.formDataArray);
  }
  getData(): FormData[] {
    console.log("Called the getData");
    return this.formDataArray;
  }
  getCounter() {
    console.log("Called the getCounter");
    console.log(this.counter);
    return this.counter;
  }
}
