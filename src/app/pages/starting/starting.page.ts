import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => this.router.navigate(['login']),3000);
  }

}
