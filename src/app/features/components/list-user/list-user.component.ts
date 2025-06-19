import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-list-user',
  imports: [UserComponent], 
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
 
  userdata:User[] |null;
  constructor(private service:UserService){}
  ngOnInit(): void {
    this.service.getUsers().subscribe(u=>{
      if(u.status==200)
        {
          this.userdata=u.body;

        }
      else
        {this.userdata=[];}
        console.log(this.userdata)
    })
  }
}
