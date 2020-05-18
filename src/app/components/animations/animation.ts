
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

export const fadeIn = [
    trigger('fadeIn', [
        transition('close => open', [
        style({ transform: 'translateY(500px)' }),
        animate(150)
        ])
    ])
];

export const fadeOut = [
    trigger('fadeOut', [
        transition('open => close', [
        animate(150, style({ transform: 'translateY(500px)' }))
        ])
    ])
];