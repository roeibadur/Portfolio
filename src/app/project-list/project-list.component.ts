import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project [] = []
  constructor() { }

  ngOnInit() {
    this.projects.push(new Project(
      'Customer Manager', '../../assets/images/customer_manager.PNG' ,
      'A website that allows management on customers. Customers are displayed material table or cards view.After registering on the website , you can manage the customers by adding,deleting and updating orders or customers details. Developed by Angular 9 framework with NgRx using HTML,CSS and JS on client side, and NodeJS on Server side with MongoDb database',
      'https://github.com/roeibadur/Customer-manager',
      'https://roeibadur-customer-manager.netlify.app'),
      new Project(
      'Recipe Book','../../assets/images/recipe_book.PNG',
      'A recipe sharing website. After connecting to the website, you can upload new recipes, and update or delete other recipes. Developed by Angular 9 framework with NgRx using HTML, CSS and JS on client side, and Firebase on server side to save users and data.',
      'https://github.com/roeibadur/Recipe-Book',
      'https://roeibadur-recipe-book.netlify.app'
    ),
    new Project(
      'Poker Texas Hold’em Game', '../../assets/images/poker.PNG',
      'Developed as part of a software engineering course, using javax. swing, MVC architecture, Design Patterns, JSON files.The game provides computer bot vs player, computer calculate every situation and decide what is the best move   to do.',
      'https://github.com/roeibadur/Texas-Holdem',
      null
    ));
  }

}
