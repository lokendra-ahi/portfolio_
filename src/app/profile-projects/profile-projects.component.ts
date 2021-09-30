import { Component, Input, OnInit } from '@angular/core';

export interface projects{
  id: string;
  name  : string;
  image : string;
  description :string;
  link?:string;
}

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss']
})

export class ProfileProjectsComponent implements OnInit {

  constructor() { }
  @Input() profile:boolean;
  value = "facebook-icon";

  projects :projects[]= [{
    id:'1',
    name:'project 1',
    image:'facebook-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 2',
    image:'instagram-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 3',
    image:'instagram-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 4',
    image:'github-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 5',
    image:'kaggle-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,{
    id:'1',
    name:'project 1',
    image:'mutual',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.'
  } ,
  {
    id:'1',
    name:'outsystems 2',
    image:'instagram-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 3',
    image:'producthunt-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } ,
  {
    id:'1',
    name:'project 4',
    image:'stackoverflow-icon',
    description:'Social Network for previous year exam question papers. REST APIs to get mutual fund data direct from live feed.',
    link:'http://google.com'
  } 
]

  ngOnInit(): void {
  }

}
