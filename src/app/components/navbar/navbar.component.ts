import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public BUTTONS: {path: string, title: string}[] = [
    {
      path: '/galeria',
      title: 'navbar.gallery'
    },
    {
      path: '/sobre',
      title: 'navbar.about'
    },
    {
      path: '/contato',
      title: 'navbar.contact'
    }
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log('test');
  }

  changeLanguage(value: string): void {
    console.log('to be implemented -> ' + value);
  }
}
