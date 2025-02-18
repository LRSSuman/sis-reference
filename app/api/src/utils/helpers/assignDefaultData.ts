import { addAssignmentData, findRegulationInfo } from '@models';
import { Assignment, Semesters, Student, Subject } from '@sis/types';
import { addinternalMarkData } from 'models/internalMarkModel';

export const assignDefaultData = async (students: Student[]) => {
    await Promise.all(
        students.map(async (student: Student) => {
            try {
                const { registerNo, name, regulation, semester } = student;
                const regulationInfo = await findRegulationInfo(regulation, semester);
                const { subjects } = regulationInfo.semesters[semester as keyof Semesters];
                const assignments = {
                    registerNo,
                    name,
                    assignmentResults: {
                        one: { results: subjects },
                        two: { results: subjects },
                        three: { results: subjects },
                    },
                };
                await addAssignmentData([assignments]);
                return;
            } catch (err) {
                console.error(`Failed to add assignment for student ${student.registerNo}:`, err);
            }
        })
    );
};
