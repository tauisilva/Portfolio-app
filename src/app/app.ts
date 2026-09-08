import { Component } from '@angular/core';
import { Navbar } from './shared/components/navbar';
import { Footer } from './shared/components/footer';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Articles } from './features/articles/articles';
import { TechStack } from './features/tech-stack/tech-stack';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, Hero, About, Projects, Articles, TechStack, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
