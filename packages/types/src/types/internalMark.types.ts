export interface InternalResult {
    code: string;
    name: string;
    mark?: number;
}

export interface InternalMark {
    registerNo: number;
    internalResults: {
        one: {
            results: InternalResult[];
        };
        two: {
            results: InternalResult[];
        };
        three: {
            results: InternalResult[];
        };
        semester: {
            results: InternalResult[];
        };
    };
}
