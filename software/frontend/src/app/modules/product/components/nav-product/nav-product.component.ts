import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.scss']
})
export class NavProductComponent implements OnInit {
  public urlMenuProducts:string = "";
  public classMenu: string = "";
  private parameter:number = 0;
  public valueSelect:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.classMenu = "off-menu"
    this.urlMenuProducts = "../.../../../../../../assets/img/menu.svg"
  }

  public menuProducts(){
    if(this.parameter == 0){
      this.urlMenuProducts = "../.../../../../../../assets/img/menux.svg"
      this.parameter = 1;
      this.classMenu = "menu-open-products"
    }
    else{
      this.urlMenuProducts = "../.../../../../../../assets/img/menu.svg"
      this.parameter = 0;
      this.classMenu = "off-menu"
    }
    
  }

  public mostra(){
    alert(this.valueSelect);
  }

}
