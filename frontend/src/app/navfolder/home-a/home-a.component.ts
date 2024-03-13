import { Component,OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home-a',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home-a.component.html',
  styleUrl: './home-a.component.css'
})
export class HomeAComponent implements OnInit {
  products: any[]=[];
  totalAmount: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData('Product').subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}