import { Component, OnInit, Input } from '@angular/core';
import { FluentRevealEffect } from 'fluent-reveal-effect';

@Component({
  selector: 'app-fluent-button',
  templateUrl: './fluent-button.component.html',
  styleUrls: ['./fluent-button.component.scss']
})
export class FluentButtonComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
    FluentRevealEffect.applyEffect('.effect-group-container', {
      clickEffect: true,
      lightColor: 'rgba(255,255,255,0.6)',
      gradientSize: 80,
      isContainer: true,
      children: {
        borderSelector: '.btn-border',
        elementSelector: '.btn',
        lightColor: 'rgba(255,255,255,0.3)',
        gradientSize: 150
      }
    });
  }

}
