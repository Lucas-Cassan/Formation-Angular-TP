import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../../core/services/log.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  lang:any;
  
  info:string;
    constructor(private route:ActivatedRoute, public  log:LogService){}
    ngOnInit(): void {
      this.route.queryParams.subscribe(p=>{
        this.lang=p['lg']
      })
      this.info=this.log.getdata();
    }
    setdata()
    {
      this.log.setData('un changement')
     
    }
  
} 