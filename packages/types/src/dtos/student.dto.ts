import { z } from 'zod';

export const StudentDTOType = z.object({
    profileImage: z.string({ required_error: 'aa' }).url('Invalid image URL'),
    name: z.string({ required_error: 'aa' }).min(3, 'Name must be at least 3 characters'),
    registerNo: z
        .number({ message: 'Register number must be number' })
        .int()
        .positive('Register number must be positive'),
    cgpa: z.number().min(0).max(10).default(0),
    attendance: z.number().min(0).max(100).default(0),
    dues: z.number().min(0).default(0),
    dob: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date format' }),
    gender: z.enum(['Male', 'Female'], { message: 'Invalid gender' }),
    department: z.string().default('CSE'),
    year: z.number().min(1, 'Year must be at least 1').max(4, 'Year cannot exceed 4'),
    regulation: z.string(),
    semester: z.number().min(1, 'Semester must be at least 1').max(8, 'Semester cannot exceed 8'),
    batch: z.string().min(4, 'Batch must be at least 4 characters'),
    arrears: z.string().default('0'),
    degree: z.string().default('B.E'),
    email: z.string().email('Invalid email format'),
    accomodation: z.enum(['Day Scholor', 'Hosteler'], { message: 'Invalid accommodation type' }),
});

export type StudentDTO = z.infer<typeof StudentDTOType>;
