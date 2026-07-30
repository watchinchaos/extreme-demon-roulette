import { SimplifiedDemon } from './types';

export function shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function clearArray(a: any[]) {
    a.splice(0, a.length);
}

// stupid pointercrate keeps going down
export function fakeDemon(name: string, creator: string, video: string | null): SimplifiedDemon {
    return {
        name,
        position: Math.floor(Math.random() * 100),
        creator,
        levelID: Math.floor(Math.random() * 1000000),
        video,
    };
}

export function fakeDemonName(): string {
    // this is messy idc
    const adjectives = [
        'awesome',
        'incredible',
        'deep',
        'scary',
        'terror',
        'deadly',
        'death',
        'killing',
    ];
    const nouns = [
        'day',
        'city',
        'tower',
        'demon',
        'ghost',
        'death',
        'satan',
        'circles',
        'sequel',
        'v2',
        'chamber',
    ];
    let name = [];
    if (Math.random() > 0.5) name.push('The');
    name.push(adjectives[Math.floor(Math.random() * adjectives.length)]);
    name.push(nouns[Math.floor(Math.random() * nouns.length)]);
    return name.join(' ');
}
