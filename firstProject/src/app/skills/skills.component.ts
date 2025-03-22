import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Machine Learning', level: 88 },
    { name: 'Angular', level: 82 },
    { name: 'SQL', level: 90 },
    { name: 'Data Structures', level: 92 }
  ];
}