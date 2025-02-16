export interface AssignmentResult {
    code: string;
    name: string;
    status?: boolean;
    mark?: number;
}

export interface Assignment {
    registerNo: number;
    assignmentResults: {
        one: {
            results: AssignmentResult[];
        };
        two: {
            results: AssignmentResult[];
        };
        three: {
            results: AssignmentResult[];
        };
    };
}
