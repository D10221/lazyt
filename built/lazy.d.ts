export declare class Lazy<T> {
    private _fty;
    private built;
    constructor(f: () => T);
    private _t;
    isValueCreated: boolean;
    value: T;
}
export declare class LazyFunc<T> {
    private factory;
    private built;
    constructor(factory: (...params: any[]) => T);
    private _t;
    isValueCreated: boolean;
    value(...params: any[]): T;
    value(lazyParams: () => any[]): T;
}
