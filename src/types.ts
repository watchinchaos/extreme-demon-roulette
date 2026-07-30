export interface SheetDemon {
    ID?: string | number;
    'Level Name'?: string;
    'Creator Name'?: string;
    'User ID'?: string | number;
    'Account ID'?: string | number;
    Difficulty?: string;
}

export interface SimplifiedDemon {
    name: string;
    position: number;
    creator: string;
    levelID?: number;
    link?: string;
    video?: string | null;
}

export interface RouletteState {
    playing: boolean;
    selectedLists?: {
        main: boolean;
        extended: boolean;
        legacy: boolean;
    };
    demons: SimplifiedDemon[];
    current: number;
    percent: number;
    percents: number[];
}
