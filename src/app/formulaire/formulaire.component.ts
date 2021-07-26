import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveStart } from '@angular/router';

interface role {
  profession: string,
  code: string
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  
  

  age: any = {};

  value : any;
  name:string[]=[];
  code:string[]=[];
 
  roles: any;

  selectedRoles: any;

  selectedValue: string = 'val1';
  
  selectedValues: string[] = ['val1','val2','val3'];
  
  constructor(private route: ActivatedRoute) {
    this.roles = [
      {name: 'Student', code: 'st'},
      {name: 'working full-time', code: 'wft'},
      {name: 'working part time', code: 'wpt'},
      {name: 'not working', code: 'nw'},
      
  ];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
}


