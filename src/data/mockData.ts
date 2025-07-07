
import { IDoctor, IAppointment, ISlot } from '../types';

// Professional medical staff data
export const mockDoctors: IDoctor[] = [
  {
    id: 'doc_001',
    name: 'Dr. Sarah Mitchell',
    department: 'Cardiology',
    dutyTiming: '08:00 AM - 05:00 PM',
    isOnDuty: true,
    specialization: 'Interventional Cardiology'
  },
  {
    id: 'doc_002',
    name: 'Dr. Michael Rodriguez',
    department: 'Neurology',
    dutyTiming: '09:00 AM - 06:00 PM',
    isOnDuty: true,
    specialization: 'Neurological Surgery'
  },
  {
    id: 'doc_003',
    name: 'Dr. Jennifer Thompson',
    department: 'Pediatrics',
    dutyTiming: '07:00 AM - 04:00 PM',
    isOnDuty: false,
    specialization: 'Pediatric Oncology'
  },
  {
    id: 'doc_004',
    name: 'Dr. Robert Chen',
    department: 'Orthopedics',
    dutyTiming: '08:30 AM - 05:30 PM',
    isOnDuty: true,
    specialization: 'Sports Medicine'
  },
  {
    id: 'doc_005',
    name: 'Dr. Amanda Foster',
    department: 'Dermatology',
    dutyTiming: '10:00 AM - 07:00 PM',
    isOnDuty: true,
    specialization: 'Cosmetic Dermatology'
  },
  {
    id: 'doc_006',
    name: 'Dr. David Kumar',
    department: 'Oncology',
    dutyTiming: '08:00 AM - 04:00 PM',
    isOnDuty: false,
    specialization: 'Medical Oncology'
  },
  {
    id: 'doc_007',
    name: 'Dr. Lisa Martinez',
    department: 'Gastroenterology',
    dutyTiming: '09:00 AM - 05:00 PM',
    isOnDuty: true,
    specialization: 'Hepatology'
  },
  {
    id: 'doc_008',
    name: 'Dr. Thomas Anderson',
    department: 'Pulmonology',
    dutyTiming: '08:00 AM - 06:00 PM',
    isOnDuty: true,
    specialization: 'Critical Care Medicine'
  }
];

// Patient appointment records
export const mockAppointments: IAppointment[] = [
  {
    id: 'apt_001',
    doctorId: 'doc_001',
    doctorName: 'Dr. Sarah Mitchell',
    patientName: 'James Patterson',
    patientEmail: 'james.patterson@email.com',
    date: '2025-07-08',
    time: '09:00 AM',
    department: 'Cardiology',
    status: 'booked',
    agent: 'Clinical Coordinator Mary'
  },
  {
    id: 'apt_002',
    doctorId: 'doc_002',
    doctorName: 'Dr. Michael Rodriguez',
    patientName: 'Emma Stevens',
    patientEmail: 'emma.stevens@email.com',
    date: '2025-07-08',
    time: '10:30 AM',
    department: 'Neurology',
    status: 'booked',
    agent: 'Nurse Supervisor John'
  },
  {
    id: 'apt_003',
    doctorId: 'doc_004',
    doctorName: 'Dr. Robert Chen',
    patientName: 'Michael Harrison',
    patientEmail: 'michael.harrison@email.com',
    date: '2025-07-09',
    time: '02:00 PM',
    department: 'Orthopedics',
    status: 'completed',
    agent: 'Healthcare Assistant Sarah'
  },
  {
    id: 'apt_004',
    doctorId: 'doc_005',
    doctorName: 'Dr. Amanda Foster',
    patientName: 'Rachel Green',
    patientEmail: 'rachel.green@email.com',
    date: '2025-07-08',
    time: '11:00 AM',
    department: 'Dermatology',
    status: 'booked',
    agent: 'Medical Assistant Kate'
  }
];

// Available appointment slots
export const mockSlots: ISlot[] = [
  // Dr. Sarah Mitchell - Cardiology
  { id: 'slot_001', doctorId: 'doc_001', date: '2025-07-08', time: '09:00 AM', isBooked: true, patientName: 'James Patterson' },
  { id: 'slot_002', doctorId: 'doc_001', date: '2025-07-08', time: '10:00 AM', isBooked: false },
  { id: 'slot_003', doctorId: 'doc_001', date: '2025-07-08', time: '11:00 AM', isBooked: false },
  { id: 'slot_004', doctorId: 'doc_001', date: '2025-07-08', time: '02:00 PM', isBooked: false },
  
  // Dr. Michael Rodriguez - Neurology
  { id: 'slot_005', doctorId: 'doc_002', date: '2025-07-08', time: '09:30 AM', isBooked: false },
  { id: 'slot_006', doctorId: 'doc_002', date: '2025-07-08', time: '10:30 AM', isBooked: true, patientName: 'Emma Stevens' },
  { id: 'slot_007', doctorId: 'doc_002', date: '2025-07-08', time: '11:30 AM', isBooked: false },
  { id: 'slot_008', doctorId: 'doc_002', date: '2025-07-08', time: '01:30 PM', isBooked: false },
  
  // Dr. Robert Chen - Orthopedics
  { id: 'slot_009', doctorId: 'doc_004', date: '2025-07-08', time: '09:00 AM', isBooked: false },
  { id: 'slot_010', doctorId: 'doc_004', date: '2025-07-08', time: '10:00 AM', isBooked: false },
  { id: 'slot_011', doctorId: 'doc_004', date: '2025-07-09', time: '02:00 PM', isBooked: true, patientName: 'Michael Harrison' },
  { id: 'slot_012', doctorId: 'doc_004', date: '2025-07-09', time: '03:00 PM', isBooked: false },
  
  // Dr. Amanda Foster - Dermatology
  { id: 'slot_013', doctorId: 'doc_005', date: '2025-07-08', time: '11:00 AM', isBooked: true, patientName: 'Rachel Green' },
  { id: 'slot_014', doctorId: 'doc_005', date: '2025-07-08', time: '12:00 PM', isBooked: false },
  { id: 'slot_015', doctorId: 'doc_005', date: '2025-07-08', time: '01:00 PM', isBooked: false },
  
  // Dr. Lisa Martinez - Gastroenterology
  { id: 'slot_016', doctorId: 'doc_007', date: '2025-07-08', time: '10:00 AM', isBooked: false },
  { id: 'slot_017', doctorId: 'doc_007', date: '2025-07-08', time: '11:00 AM', isBooked: false },
  { id: 'slot_018', doctorId: 'doc_007', date: '2025-07-08', time: '02:00 PM', isBooked: false },
  
  // Dr. Thomas Anderson - Pulmonology
  { id: 'slot_019', doctorId: 'doc_008', date: '2025-07-08', time: '09:00 AM', isBooked: false },
  { id: 'slot_020', doctorId: 'doc_008', date: '2025-07-08', time: '10:30 AM', isBooked: false },
  { id: 'slot_021', doctorId: 'doc_008', date: '2025-07-08', time: '03:00 PM', isBooked: false }
];

// Medical departments
export const departments = [
  'All Departments',
  'Cardiology',
  'Neurology', 
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'Oncology',
  'Gastroenterology',
  'Pulmonology',
  'Endocrinology',
  'Nephrology'
];

// Available appointment time slots
export const timeSlots = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM'
];

// Patient appointment status options
export const appointmentStatuses = [
  'All Status',
  'booked',
  'completed', 
  'cancelled',
  'no-show',
  'rescheduled'
];
