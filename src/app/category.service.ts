import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORY } from './categories';

@Injectable()
export class CategoryService {

  constructor() { }

    getCategories() {
      return CATEGORY;
    }

    getCategoryById(albumId: number){
      for (var i = 0; i <= CATEGORY.length - 1; i++) {
        if (CATEGORY[i].id === albumId) {
          return CATEGORY[i];
        }
      }
    }
  }
