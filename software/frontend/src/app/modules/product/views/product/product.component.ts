import { ProductList } from './../../model/product-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public productList:Array<ProductList> = [
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  },
  {
    urlProduct:"https://agevolution.canalrural.com.br/wp-content/uploads/2020/01/ted-naio-technologies-agritech-robos-agricultura-1800x1080.jpg",
    nameProduct:"SC-AGRO-01",
    descriptionProduct:"Robo que monitora a saude das plantas e aplica medidas corretivas como aplicação de agrotoxico ou aplicar fertilizante",
    priceProduct:10000
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
