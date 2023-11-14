import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { Projects } from '../interfaces/projects';
// import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UsersService } from '../services/users.service';
import { UserDetails } from '../interfaces/users';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class AdminComponent implements OnInit{

  createProjectForm!: FormGroup
  isFormVisible: boolean = false; 
  projects!: Projects[];
  users!: UserDetails[];
  visible = true

  constructor(private projectservice: ProjectService, private formBuilder:FormBuilder,private router: Router, private userService:UsersService ){

    this.createProjectForm=this.formBuilder.group({
      project_name:['',[Validators.required]], 
      description: ['',[Validators.required]],
      endDate:['',[Validators.required]],
    })

  }

  ngOnInit() {
    this.getProjects();
    this.getUsers();
    
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

  createProject() {
    let createProject: Projects = this.createProjectForm.value;
    this.projectservice.createProject(createProject).subscribe(
      () => {
        this.getProjects();
        console.log('Project created successfully');
      },
      (error) => {
        console.error('Error creating project:', error);
      }
    );

    this.router.navigate(['admin']);
  }


  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
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


  deleteProject(project_id: string): void {
    alert('Are you sure You want to delete,this action is irreversible')
    this.projectservice.deleteProject(project_id).subscribe(
      () => {
        this.loadProjects();
      },
      (error) => {
        console.error('Error deleting project:', error);
      }
    );
  }


  toggleFormVisibility() {
    console.log('Toggle form visibility');
    this.isFormVisible = !this.isFormVisible;
    console.log('Is form visible:', this.isFormVisible);
    
  }

}


