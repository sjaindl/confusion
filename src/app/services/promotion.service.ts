import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { 
  }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
    //return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
    //return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
      .map(dishes => dishes[0]);;
    //return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
  }
}
