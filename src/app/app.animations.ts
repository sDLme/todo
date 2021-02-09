import { animate, state, style, transition, trigger } from "@angular/animations";

export const itemAnimation = trigger('cartAnimation', [
  state('start', style({
    transform: 'scale(1)',
  })),
  state('end', style({
    transform: 'scale(1.1)',
  })),
  transition('start <=> end', animate(200))
])
