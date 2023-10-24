import { animate, style, transition, trigger } from '@angular/animations';

export const slideUpAnimation = trigger('slideUpAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0, height: '80%', width: '100%' }),
    animate('300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1, height: '80%', width: '100%' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateY(100%)', opacity: 0, height: '80%', width: '100%' })),
  ]),
]);
