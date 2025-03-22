import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { 
      title: 'Smart Attendance System',
      description: 'Face recognition-based attendance system using OpenCV and Python',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      image: 'assets/project1.jpg'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application using Angular and Spring Boot',
      tech: ['Angular', 'Java', 'MySQL'],
      image: 'assets/project2.jpg'
    }
  ];
}