import { Component } from '@angular/core';
@Component({
    selector: 'app-product-list',
    templateUrl: './productlist.component.html',
    styleUrls:['./productlist.component.css']
 })
 export class ProductList {
 title:string="Mobiverse"
 imgWidth:number=300;
 imagesArray:string[]=["assets/image/samsungs23ultra.jpg",
"assets/image/one.jpg",
"assets/image/apple14.jpg"]
isVisible:boolean[]=[true,true,true];
contents:string[]=['Samsung Galaxy S22 Ultra','Oneplus 11','Iphone 14 pro max'];
price:string[] =['INR 1,52,399/-','INR 45,000/-', 'INR 1,05,000/-']
showName(i:number){
this.isVisible[i]=!this.isVisible[i];
}
}