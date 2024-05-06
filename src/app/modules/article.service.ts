import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
    {
      active: true,
      id: 1,
      title: 'INVESTMENT vs FUTURES TRADING',
      content: 'Content of Article 1',
      subContent:
        'Investment and trading are two very different approaches to earn money from stock markets. Both the methods have need completely different prospective and completely different mind sets.Aim of retail investor is to grow his idle money so that he can beat inflation and able to meet his future goals. So investment is done with a point of view of very lower risk as returns expected are lower.Trading is much higher risk and reward activity as compared to investment.',
    },

    {
      active: false,
      id: 2,
      title: 'WHO WINS IN STOCK MARKETS',
      content: 'Content of Article 2',
      subContent:
        'Majority loses money in stock market, information flood out of internet makes it a generally known truth. But data-based researches help us to convert information into believe, helps improves our perception and sometimes enable us to understand. Majority loses huge amount because of their wrong focus on earning huge money in short time span as they consider trading as lottery, wrong method of cutting profits in place of loses and because of wrong psychological process of remaining influenced from losses and profits of latest trades. We will go in details of these set-backs and will discuss upon removal of these errors and transition to stress free trading in Trading Psychology section.',
    },
    {
      active: false,
      id: 3,
      title: 'TRADING vs GAMBLING/LOTTERY',
      content: 'Content of Article 3',
      subContent: 'In the stock market, one\'s  perceptions and actions are often shaped by inner motivations and fears. For instance, missed opportunities may stem from a fear of failure or a desire to avoid loss. Essentially, the market reflects the individual mindset—whether driven by greed, fear, or a quest for consistent returns. Gamblers, driven by the thrill of a big win, may repeatedly seek that rush, often leading to losses despite occasional successes. Conversely, traders adopt a disciplined, business-oriented mindset, focusing on consistent profits rather than fleeting gains. They adhere to strategies and regulations, viewing the market as a platform for conducting business.',
    },
    {
      active: false,
      id: 4,
      title: 'HISTORY RHYMES ITSELF',
      content: 'Content of Article 4',
      subContent:
        'Understanding the future often involves examining the past, a concept illustrated by comparing the expansion of the universe with the growth of mathematical numbers from zero towards positive and negative infinity. Each event in the universe, akin to a unique number, possesses distinct characteristics yet exhibits recurring patterns, akin to properties like odd, even, and prime numbers. While historical events do not repeat exactly, they often echo familiar themes, akin to how the stock market, though ever-evolving, displays recognizable patterns that can inform informed and mathematically calculated decisions.',
    },
  ];

  constructor() {}

  getArticleById(id: string): Observable<any> {
    return of(this.articles.find((article) => article.id === +id));
  }
  getAllArticles(): Observable<any> {
    return of(this.articles);
  }
}
