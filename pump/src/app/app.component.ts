import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'pump';

  events: string[] = [];
  opened: boolean;
  public isMenuOpen: boolean = true;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  toggle(){
    this.isMenuOpen=this.isMenuOpen?false:true;
  }
  shouldRun =true;// [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
 
}
