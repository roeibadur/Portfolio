import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fragment:string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.fragment = this.route.snapshot.fragment;
    document.body.style.backgroundColor = "#232b2b";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  }

}
