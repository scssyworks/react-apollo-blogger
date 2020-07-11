interface GenericObject {
    [field: string]: any;
}

export function clean(inputOb: GenericObject): GenericObject {
    let newOb = {} as GenericObject;
    if (inputOb && typeof inputOb === 'object') {
        Object.keys(inputOb).forEach((key: string) => {
            if (inputOb[key]) {
                newOb[key] = inputOb[key];
            }
        });
    }
    return newOb;
}