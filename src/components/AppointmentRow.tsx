
import { IAppointment } from '../types';
import { Badge } from './ui/badge';

interface AppointmentRowProps {
  appointment: IAppointment;
}

const AppointmentRow = ({ appointment }: AppointmentRowProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'booked':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-900">{appointment.patientName}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.doctorName}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.department}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.date}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.time}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{appointment.agent || '-'}</td>
      <td className="px-6 py-4">
        <Badge className={`${getStatusColor(appointment.status)} capitalize`}>
          {appointment.status}
        </Badge>
      </td>
    </tr>
  );
};

export default AppointmentRow;
