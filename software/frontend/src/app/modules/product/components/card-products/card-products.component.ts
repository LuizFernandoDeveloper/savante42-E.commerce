import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {
  @Input() public urlProduct:String = ""; 
  @Input() public nameProduct:String = "";
  @Input() public descriptionProduct = "";
  @Input() public priceProduct:Number = 0;
  @Input() public Index:Number  = 0;

  constructor() { }

  ngOnInit(): void {
  }
  public purchase(){
    alert("purchase");
  }
}
