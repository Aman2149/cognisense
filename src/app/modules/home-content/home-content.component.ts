import { NgFor } from '@angular/common';
import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent {
  effect="fade";
  constructor(private renderer: Renderer2) {}
  slides = [
    {
      src: '../../../assets/joinman.jpg',
      alt: 'Image 3',
      link: '/about',
      heading:
        'Join us at "Cognisense" as we revolutionize trading. With a focus on consistency, we are committed to driving growth in an unpredictable market. Our transparent and sustainable approach contributes to industry advancement. Specializing in index futures liquidity, we optimize risk for consistent returns. Our innovative algorithms have multiplied our funds eightfold in seven years, outpacing benchmarks. We offer a unique opportunity to be part of our success story, where every trade reflects our dedication to excellence. Join us and experience the thrill of trading with a team that defines success through consistent performance.',
      color: '#eff8e0',
    },
    {
      src: '../../../assets/graph.png',
      alt: 'Image 1',
      link: '/article/1',
      heading:
        'Investment and trading are two very different approaches to earn money from stock markets. Both the methods have need completely different prospective and completely different mind sets.Investment is an art. As in a cricket test match we can see a real art of player. More technical and fundamentally strong and patience full game is seen in test match.Trading is like an one-day match where skills are more important to hit fours and sixes. Fundamental knowledge doesn’t play much of the role, techniques also not important you create your room to hit sixes. It needs a combination of strong psychological understanding and a trading method. ',
      color: '#ceb078',
    },
    {
      src: '../../../assets/money.avif',
      alt: 'Image 2',
      link: '/article/2',
      heading:
        'Majority loses money in stock market, information flood out of internet makes it a generally known truth. But data-based researches help us to convert information into believe, helps improves our perception and sometimes enable us to understand.Majority losses money because of wrong focus on earning huge money in short time span as they consider trading as lottery, wrong method of cutting profits in place of loses and because of wrong psychological process of remaining influenced from losses and profits of latest trades. ',
      color: '#eff8e0',
    },
  ];
}
