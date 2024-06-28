import {Component, ViewChild,OnInit} from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { Product, products} from './product';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
})
export class TableSortingExample implements OnInit {
displayedColumns = ['productName', 'productCode', 'prodRating', 'edit', 'delete'];
//products:Product[]= products;
dataSource = new MatTableDataSource(products);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort, {}) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   ngOnInit() {
    //this.dataSource = this.products;
    //this.dataSource.paginator = this.paginator;

  }

onNavigate(productCode){
console.log(`product code ${productCode}`)
}

filterProduct(value: string):void{
    this.dataSource.filter = value.trim().toLowerCase();
 this.serviceAPI.getDataByFilter(value).subscribe(response =>
 {
   this.dataSource= response['products'];

 });
  }

  

}
