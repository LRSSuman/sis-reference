export interface Subject {
    code: string;
    name: string;
}

export interface Semester {
    subjects: Subject[];
    laboratory?: Subject[];
}

export interface Semesters {
    1: Semester;
    2: Semester;
    3: Semester;
    4: Semester;
    5: Semester;
    6: Semester;
    7: Semester;
    8: Semester;
}

export interface RegulationInfo {
    regulation: string;
    semesters: Semesters;
}
