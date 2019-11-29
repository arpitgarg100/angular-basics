import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AppServiceService } from "../app-service.service";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.css"]
})
export class FeedbackFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    mid: new FormControl(""),
    feedback: new FormControl("")
  });

  constructor(private service: AppServiceService) {}

  ngOnInit() {}

  setData() {
    console.log(this.profileForm.controls["mid"].value);
    this.service.setData(
      this.profileForm.controls["mid"].value,
      this.profileForm.controls["mid"].value,
      this.profileForm.controls["mid"].value
    );
  }
}
