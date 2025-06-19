import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'obs-user-profile',
  imports: [NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  user:User
  uname:any;
  constructor(private route:ActivatedRoute, private service:UserService){}
  ngOnInit(): void {
  /*  this.user={
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    }*/
    let p=this.route.snapshot.params['id'];

    console.log(this.route.snapshot.params['username'])
    let pp= this.route.snapshot.params['username'];
    console.log(p)
    if(pp)
    {
      p=pp;
    }
    this.service.getUser(p).subscribe(u=>
    {
      setTimeout(() => {
        this.user=u;
      }, 5000);
      
      console.log("Call Api")
    }
    );
    console.log("apres apple de l api")
  }
  

}
