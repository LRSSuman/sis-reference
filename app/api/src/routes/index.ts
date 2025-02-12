import { Router } from 'express';
import { studentsRoutes } from './studentRoutes';

const router = Router();

export default (): Router => {
    studentsRoutes(router);
    return router;
};
