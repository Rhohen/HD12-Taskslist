import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export type Task = { idTask:string,
		label:string,
		description:string,
		category:"string",
		taskDifficulty:number,
		taskDuration:number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class TasksList implements OnInit {

	tasks: Observable<Task[]>;

	private jsonURL = 'assets/listTasks.json';
	
	constructor(private http: HttpClient) {	}
  
	getConfig() {
		this.tasks =  this.http.get<Task[]>(this.jsonURL);
	}

	ngOnInit() { 
		this.getConfig();
		this.http.get<Task[]>(this.jsonURL).subscribe(data => console.log(data));

	}
}