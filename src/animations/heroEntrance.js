// ─── Hero Entrance Animation ───
import { createTimeline } from 'animejs';

export function playHeroEntrance() {
    const tl = createTimeline({
        defaults: { easing: 'cubicBezier(0.77,0,0.175,1)' },
    });

    tl.add('#heroLine1', {
        translateY: ['110%', '0%'],
        duration: 900,
        delay: 200,
    })
        .add('#heroLine2', {
            translateY: ['110%', '0%'],
            duration: 900,
        }, '-=700')
        .add('#heroTagline', {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 700,
        }, '-=400')
        .add('#heroSub', {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 700,
        }, '-=600')
        .add('#heroDivider', {
            opacity: [0, 1],
            width: [0, 48],
            duration: 500,
        }, '-=500')
        .add('#heroRole', {
            opacity: [0, 1],
            translateY: [8, 0],
            duration: 600,
        }, '-=400')
        .add('#logo', {
            opacity: [0, 1],
            translateY: [-8, 0],
            duration: 600,
        }, '-=500')
        .add('#navLinks', {
            opacity: [0, 1],
            translateY: [-8, 0],
            duration: 600,
        }, '-=500')
        .add('#socialIcons', {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 600,
        }, '-=400')
        .add('#scrollHint', {
            opacity: [0, 1],
            translateY: [8, 0],
            duration: 600,
        }, '-=400')
        .add('#heroCTA', {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 600,
        }, '-=300');
}
