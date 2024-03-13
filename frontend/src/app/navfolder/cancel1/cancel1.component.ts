import { Component,OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cancel1',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cancel1.component.html',
  styleUrl: './cancel1.component.css'
})
export class Cancel1Component implements OnInit {
  users: any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData('User').subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}