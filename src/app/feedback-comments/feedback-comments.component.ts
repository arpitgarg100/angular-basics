import { Component, OnInit } from "@angular/core";
import { AppServiceService } from "../app-service.service";

@Component({
  selector: "app-feedback-comments",
  templateUrl: "./feedback-comments.component.html",
  styleUrls: ["./feedback-comments.component.css"]
})
export class FeedbackCommentsComponent implements OnInit {
  constructor(private service: AppServiceService) {}

  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngOnInit() {
    this.setData();
    console.log("ngOnInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {}

  list: any[] = [];
  counter;
  setData() {
    this.list = this.service.getData();
    this.counter = this.service.getCounter();
  }
}
