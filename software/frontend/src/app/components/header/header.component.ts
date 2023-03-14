import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public screenConfiguration:boolean = true;
  public innerWidth:any  = 0;
  public onclickButton:boolean = true;
  public srcImgButtomMenu:String = "../../../assets/img/menu.svg"
  public menuOpenOrClose:boolean = false;
  private clickButton:boolean = false;
  

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

  public onClickTagA(value:boolean){
    this.onclickButton = value;
  }

  public clickButtonMenu(){
    if(this.clickButton == true){
      this.srcImgButtomMenu = "../../../assets/img/menu.svg";
      this.clickButton = false;
      this.menuOpenOrClose = false;
    }
    else{
      this.srcImgButtomMenu = "../../../assets/img/menux.svg";
      this.clickButton = true;
      this.menuOpenOrClose = true;
    }
  }

}

