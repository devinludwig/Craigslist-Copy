import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categoryId: number = null;
  categoryToDisplay: Category;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.categoryId = parseInt(urlParametersArray['id']);
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
  }
}
