import dotenv from 'dotenv';
import path from 'path';
import { connectDatabase } from '@config';
import {
    addAssignmentData,
    addRegulationInfoData,
    addStudentData,
    deleteAssignmentData,
    deleteRegulationInfoData,
    deleteStudentData,
    findRegulationInfo,
} from '@models';
import { assignments, regulationInfo, students } from '@data';

dotenv.config({ path: path.join(__dirname, '..', 'config/config.env') });
connectDatabase();

const seedRegulationInfo = async () => {
    try {
        await deleteRegulationInfoData();
        console.log('Regulation info data deleted! Successfully!');
        await addRegulationInfoData(regulationInfo);
        console.log('Regulation info data added Successfully!');
        process.exit(0);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error while running seeder ${err.message}`);
        } else {
            console.error('An unknown error occured while running seeder');
        }
        process.exit(1);
    }
};
// seedRegulationInfo();

const seedStudents = async () => {
    try {
        await deleteStudentData();
        console.log('Student data deleted! Successfully!');
        const studentsData = await addStudentData(students);
        console.log('Student data added Successfully!');
        process.exit(0);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error while running seeder ${err.message}`);
        } else {
            console.error('An unknown error occured while running seeder');
        }
        process.exit(1);
    }
};
// seedStudents();

// const seedAssignments = async () => {
//     try {
//         await deleteAssignmentData();
//         console.log('Assignment data deleted! Successfully!');
//         await addAssignmentData(assignments);
//         console.log('Assignment data added Successfully!');
//         process.exit(0);
//     } catch (err: unknown) {
//         if (err instanceof Error) {
//             console.error(`Error while running seeder ${err.message}`);
//         } else {
//             console.error('An unknown error occured while running seeder');
//         }
//         process.exit(1);
//     }
// };

// seedAssignments();

// await Promise.all(
//     studentsData.map(async (student: Student) => {
//         try {
//             const { registerNo, regulation, semester } = student;
//             const regulationInfo = await findRegulationInfo(regulation, semester);

//             if (!regulationInfo) {
//                 console.warn(`No regulation info found for registerNo: ${registerNo}`);
//                 return;
//             }

//             const { subjects } = regulationInfo.semesters[semester as keyof Semesters];

//             await assignDefaultAssignment(registerNo, subjects);
//             // console.log(`Assignment added for registerNo: ${registerNo}`);
//             console.log(registerNo);
//         } catch (error) {
//             console.error(`Failed to add assignment for student ${student.registerNo}:`, error);
//         }
//     })
// );
