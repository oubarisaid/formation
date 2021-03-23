import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-jour2',
  templateUrl: './jour2.component.html',
  styleUrls: ['./jour2.component.css'],
})
export class Jour2Component implements OnInit {
  maxWidth: number;
  maxHeight: number;
  bgColor: string;
  color: string;
  texte: string;
  isBorder: boolean;
  isVisible: boolean;
  books: Book[];
  asyncGreeting: Promise<string>;

  constructor(
    private title: Title,
    private meta: Meta,
    private bookService: BookService
  ) {
    this.title.setTitle('Le jour n°2 de la formation Angular');
    this.meta.addTag({ name: 'author', content: 'Franck' });
  }

  ngOnInit(): void {
    this.maxWidth = 200;
    this.maxHeight = 100;
    this.bgColor = 'green';
    this.color = 'white';
    this.texte = 'Un exemple de ngStyle';
    this.isBorder = false;
    this.isVisible = true;
    this.books = this.bookService.getElements();
    //après 4 secondes, la promesse sera résolue
    this.asyncGreeting = new Promise((resolve) => {
      window.setTimeout(() => resolve('hello'), 4000);
    });
  }

  changeDiv(
    height: string,
    width: string,
    text: string,
    border: string,
    visible: string
  ): void {
    this.maxHeight = +height;
    this.maxWidth = +width;
    this.texte = text;
    this.isBorder = border === 'true';
    this.isVisible = visible === 'true';
  }

  addElement(
    auteur: string,
    titre: string,
    pages: string,
    actif: string
  ): void {
    const id = Date.now();
    const newAuteur = {
      id,
      auteur,
      titre,
      pages: +pages,
      actif: actif === 'true',
    };
    console.log(newAuteur);
    this.bookService.addElement(newAuteur);
  }

  removeElement(id: number): void {
    this.bookService.removeElement(id);
  }
}
