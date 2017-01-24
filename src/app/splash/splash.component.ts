import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [CategoryService]
})

export class SplashComponent implements OnInit {
  constructor(private router: Router, private categoryService: CategoryService){}

  categories: Category[];

  ngOnInit(){
    this.categories = this.categoryService.getCategories();
  };

  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['category', clickedCategory.id]);
  };
}
