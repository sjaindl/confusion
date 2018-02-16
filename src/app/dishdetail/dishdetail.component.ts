import { Component, OnInit } from '@angular/core'; //Input
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Comments } from '../shared/comments';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  // @Input()
  dish: Dish;
  dishcopy = null;
  dishIds: number[];
  prev: number;
  next: number;
  errMess: string;

  contactForm: FormGroup;
  comment: Comments;

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'Author must be at least 2 characters long.'
    },
    'comment': {
      'required':      'Comment is required.'
    }
  };

  constructor( 
    private dishService : DishService,
    private route : ActivatedRoute,
    private location : Location,
    private formBuilder: FormBuilder) {
      this.createForm();
   }

  ngOnInit() {
    //let id = +this.route.snapshot.params['id'];
    
    //this.dishService.getDish(id)
      //.subscribe(dish => this.dish = dish);
      
    this.dishService.getDishIds()
      .subscribe(ids => this.dishIds = ids,
      errmess => this.errMess = <any>errmess);
    
    this.route.params
      .switchMap((params: Params) => this.dishService.getDish(+params['id']))
      .subscribe(dish => { 
        this.dish = dish; 
        this.dishcopy = dish; 
        this.setPrevNext(dish.id); 
      }, errmess => this.errMess = <any>errmess);

  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      author: ['', [Validators.required, Validators.minLength(2)] ],
      comment: ['', Validators.required ],
      rating: 5
    });

    this.onValueChanged(); // (re)set validation messages now

    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
       errmess => this.errMess = <any>errmess);
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) { 
      return; 
    }

    for (const field in this.formErrors) {
      this.formErrors[field] = ''; // clear previous error message (if any)
      const control = this.contactForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.contactForm.value;
    this.comment.date = new Date(Date.now()).toDateString();
    
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save()
      .subscribe(dish => { this.dish = dish; console.log(this.dish) });

    this.contactForm.reset({
      author: '',
      comment: '',
      rating: 5
    });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack() : void {
    this.location.back();
  }
}
