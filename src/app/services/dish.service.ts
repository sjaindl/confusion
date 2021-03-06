import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class DishService {

  constructor(private restangular: Restangular, //private http: Http,
              private processHTTPMsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
    /*
    return this.http.get(baseURL + 'dishes')
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
    */
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
    /*
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
    */
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
    /*
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
    */
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => { return Observable.of(error); } );
  }
/*
  getDishes() : Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number) : Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish() : Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(2000);
  }

  getDishIds() : Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id));
  }
*/
}
