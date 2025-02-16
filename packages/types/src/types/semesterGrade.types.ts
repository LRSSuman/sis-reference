export interface SemesterResult {
    code: string;
    name: string;
    grade?: number;
}

export interface SemesterGrade {
    registerNo: number;
    semesterResults: {
        one: {
            results: SemesterResult[];
        };
        two: {
            results: SemesterResult[];
        };
        three: {
            results: SemesterResult[];
        };
        four: {
            results: SemesterResult[];
        };
        five: {
            results: SemesterResult[];
        };
        six: {
            results: SemesterResult[];
        };
        seven: {
            results: SemesterResult[];
        };
        eight: {
            results: SemesterResult[];
        };
    };
}
