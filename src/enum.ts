export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

Months.September;
console.log(Months.December);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
    YELLOW = '#FFFF00',
    PINK = 12,
    GRAY = '#808080'
}

COLORS.YELLOW;