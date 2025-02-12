import { Router } from 'express';
import { getStudents, newStudent } from '@controllers';

export const studentsRoutes = (router: Router) => {
    router.get('/students', getStudents);
    router.post('/student/new', newStudent);
};
