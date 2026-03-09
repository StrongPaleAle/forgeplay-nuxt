export enum EmploymentType {
    'full-time' = 'Full Time',
    'part-time' = 'Part Time',
    'contract' = 'Contract',
    'internship' = 'Internship',
    
}
export enum LocationType {
    'onsite' = 'On site',
    'remote' = 'Remote',
    'hybrid' = 'Hybrid',
}
export enum ContractType {
    'permanent' = 'Permanent',
    'fixed-term' = 'Fixed Term',
    'temporary' = 'Temporary',
}
export enum JobLevel {
    'training' = 'Training',
    'entry' = 'Entry',
    'mid' = 'Mid',
    'senior' = 'Senior',
    'lead' = 'Lead'
}

export const JobLabels = {
    ...EmploymentType,
    ...LocationType,
    ...ContractType,
    ...JobLevel
}
export type JobLabels = (typeof JobLabels)[keyof typeof JobLabels]