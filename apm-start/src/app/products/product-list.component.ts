import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string = '';
    products: IProduct[];
    filteredProducts: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        console.log('Products component initializing');
        this._productService.getProducts()
        .subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.filterProducts(this._listFilter) : this.products;
    }

    filterProducts(filter: string): IProduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        alert(message);
        console.log(`Message received: ${message}`);
    }
}
