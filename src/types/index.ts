
export interface IDoctor {
  id: string;
  name: string;
  department: string;
  dutyTiming: string;
  isOnDuty: boolean;
  specialization: string;
  avatar?: string;
}

export interface IAppointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  department: string;
  status: 'booked' | 'cancelled' | 'completed';
  agent?: string;
}

export interface ISlot {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  isBooked: boolean;
  patientName?: string;
}

export interface IBookingForm {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  time: string;
  doctorId: string;
}

export type ViewType = 'doctors' | 'appointments' | 'calendar';
