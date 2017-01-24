import { Category } from './category.model';

var categories = [];
var categoryNames: string[] = ['community', 'housing', 'jobs', 'personals', 'for sale', 'gigs', 'discussion forums', 'services', 'resumes'];

categoryNames.forEach((category) => {
  categories.push(new Category(category, categoryNames.indexOf(category)))
})

export const CATEGORY: Category[] = categories;
