type Mods = Record<string, boolean | string>;

export function classNames(classes: string[], mods: Mods = {}):string {
    return [
        ...classes.filter((className) => Boolean(className)),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
