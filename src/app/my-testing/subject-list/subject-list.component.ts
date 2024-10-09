import { Component, OnInit } from '@angular/core';
import { SubjectStream } from '../../entities/subjects';
import { SubjectStreamService } from '../../services/subject-stream.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent implements OnInit {

  subjects: SubjectStream[] = [];

  constructor(private subjectService: SubjectStreamService) { }

  ngOnInit(): void {
    this.subjectService.getStrems().subscribe({
      next: (data) => {
        this.subjects = data
      },
      error: (error) => {
        console.error("Error fetching ", error);
      }
    });
  }
}
