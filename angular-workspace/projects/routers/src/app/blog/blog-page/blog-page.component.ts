import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Reg } from "./reg";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.css"]
})
export class BlogPageComponent implements OnInit {
  fg: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    let  emlVal = Validators.compose([Validators.required,
      Validators.email])

    this.fg = this.fb.group({
      usNm: this.fb.control("",Validators.required),
      eml: this.fb.control("", emlVal ),
      pass: this.fb.control("",Validators.required)
    });
  }
 
  onSub() {
    console.log(this.fg);

    let reg = this.fg.value as Reg;
  }
}
