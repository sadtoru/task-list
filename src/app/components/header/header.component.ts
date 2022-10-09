import { Component, OnInit } from '@angular/core';
import { IuService } from '../../../app/service/iu.service';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task list';
  showAddTask: boolean = true;
  subscription?: Subscription 
  constructor(
    private iuService: IuService,
    private router: Router
  ) { 
    this.subscription = this.iuService.onToggle().subscribe(
      value => this.showAddTask = value
    )
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.iuService.toggleAddTask();
  }

  hasRoute(route : string){
    return this.router.url === route;
  }
}
