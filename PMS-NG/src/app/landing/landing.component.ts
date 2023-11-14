import { Component } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  projects!: Projects[];
 
 
  constructor(private projectservice: ProjectService ){

   

  }

  ngOnInit() {
    this.getProjects();
   
    
  }



  getProjects() {
    this.projectservice.getProjects().subscribe(
      (response) => {
        this.projects = response;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }





  loadProjects(): void {
    this.projectservice.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

}
