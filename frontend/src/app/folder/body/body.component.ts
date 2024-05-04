import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  room: string; 
  @Input() dateInfo: any; 
  
  constructor() {
    this.room = "example room";
    
  }
  currentDate: string = new Date().toDateString(); 
  availableRooms: number[] = [10, 12, 15, 14, 11, 13, 16]; 

  proceed() {
    // Add your logic for the proceed action here
  }
  weekDaysInfo = [
    { date: new Date(2014, 8, 28), availableRooms: [{ name: 'Room 1' }, { name: 'Room 2' }] },
    { date: new Date(/* set date for Monday */), availableRooms: [{ name: 'Room 3' }, { name: 'Room 4' }] },
    // Add objects for the rest of the week
  ];
}
