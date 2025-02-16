import { addAssignmentData } from '@models';
import { Subject } from '@sis/types';
import { addinternalMarkData } from 'models/internalMarkModel';

export const assignDefaultAssignment = async (registerNo: number, subjects: Subject[]) => {
    const assignments = {
        registerNo,
        assignmentResults: {
            one: { results: subjects },
            two: { results: subjects },
            three: { results: subjects },
        },
    };
    await addAssignmentData(assignments);
    return;
};

export const assignDefaultSemesterResult = async (registerNo: number, subjects: Subject[]) => {
    const internalMarks = {
        registerNo,
        internalResults: {
            one: { results: subjects },
            two: { results: subjects },
            three: { results: subjects },
            semester: { results: subjects },
        },
    };
    await addinternalMarkData(internalMarks);
    return;
};
