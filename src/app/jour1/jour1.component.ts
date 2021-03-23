import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jour1',
  templateUrl: './jour1.component.html',
  styleUrls: ['./jour1.component.css'],
})
export class Jour1Component implements OnInit {
  title = 'Bienvenu dans cette formation Angular!';
  person = {
    name: 'franck',
  };
  defaut = 'une valeur par défaut!!!!';
  isSelected = false;
  isHidden = false;
  foreground = 'green';
  url =
    'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/6/6/d/66da29be61_99905_google-images-rechercher.jpg';

  constructor() {}

  ngOnInit(): void {}

  showAlert(): void {
    console.log("un message d'alerte");
  }

  changeSelected(): void {
    this.isSelected = !this.isSelected;
  }

  parent(): void {
    alert('PARENT!');
  }

  enfant(event: Event): void {
    event.stopPropagation();
    alert('ENFANT!');
  }

  onSpacePress(): void {
    console.log('TOUCHE ESPACE APPUYEE !!');
  }

  changeTextDefaut(value: string): void {
    this.defaut = value;
  }
}
