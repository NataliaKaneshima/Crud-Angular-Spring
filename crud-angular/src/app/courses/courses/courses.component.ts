import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CoursesComponent[] = [];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
  }

}