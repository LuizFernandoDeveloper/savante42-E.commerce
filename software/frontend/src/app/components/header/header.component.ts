import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public screenConfiguration:boolean = true;
  public innerWidth:any  = 0;
  
  constructor() { }
  
  ngOnInit(): void {
    if(window.innerWidth < 785){
      this.screenConfiguration = false;
      }
      else{
        this.screenConfiguration = true
      }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(window.innerWidth < 785){
    this.screenConfiguration = false;
    }
    else{
      this.screenConfiguration = true
    }
  }

}

