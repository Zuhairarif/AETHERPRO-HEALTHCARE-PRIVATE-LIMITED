
import { ISlot, IDoctor } from '../types';
import { User, Clock } from 'lucide-react';

interface CalendarSlotProps {
  slot: ISlot;
  doctor: IDoctor;
  onClick: (slot: ISlot, doctor: IDoctor) => void;
}

const CalendarSlot = ({ slot, doctor, onClick }: CalendarSlotProps) => {
  return (
    <div
      className={`
        relative p-3 border-2 min-h-[70px] cursor-pointer transition-all duration-300 rounded-lg group
        ${slot.isBooked
          ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-300 shadow-sm' 
          : 'hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary-50 border-gray-200 hover:border-primary-300 hover:shadow-md hover:scale-105'
        }
      `}
      onClick={() => !slot.isBooked && onClick(slot, doctor)}
    >
      {slot.isBooked && slot.patientName ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft"></div>
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">
              Booked
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-3 h-3 text-primary-600" />
            <span className="text-sm font-medium text-primary-800 truncate">
              {slot.patientName}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 text-primary-500" />
            <span className="text-xs text-primary-600">
              {slot.time}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-2 group-hover:scale-105 transition-transform">
          <div className="w-6 h-6 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center group-hover:border-primary-400">
            <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-primary-400"></div>
          </div>
          <span className="text-xs text-gray-500 font-medium group-hover:text-primary-600">
            Available
          </span>
          <span className="text-xs text-gray-400 group-hover:text-primary-500">
            {slot.time}
          </span>
        </div>
      )}
      
      {!slot.isBooked && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 rounded-lg transition-all duration-300"></div>
      )}
    </div>
  );
};

export default CalendarSlot;
