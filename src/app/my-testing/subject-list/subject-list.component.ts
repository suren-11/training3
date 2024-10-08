import { Component, OnInit } from '@angular/core';
import { SubjectStream } from '../../entities/subjects';
import { SubjectStreamService } from '../../subject-stream.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent implements OnInit {

  subjects: SubjectStream[] = [];

  constructor(private ss: SubjectStreamService) { }

  ngOnInit(): void {
    this.ss.getStrems().subscribe(
      (data)=>{
        this.subjects = data
      },
      (error)=>{
        console.error("Error fetching ",error);
        
      }
    );
  }

}
