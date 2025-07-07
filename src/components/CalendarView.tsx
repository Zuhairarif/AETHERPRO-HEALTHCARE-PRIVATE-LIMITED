
import { useState, useMemo } from 'react';
import { IDoctor, ISlot, IBookingForm } from '../types';
import { mockDoctors, mockSlots, timeSlots } from '../data/mockData';
import CalendarSlot from './CalendarSlot';
import BookingModal from './BookingModal';
import { format, addDays, startOfWeek } from 'date-fns';

const CalendarView = () => {
  const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));
  }, [currentWeekStart]);

  const handleSlotClick = (slot: ISlot, doctor: IDoctor) => {
    setSelectedSlot(slot);
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleBookAppointment = (booking: IBookingForm) => {
    console.log('Booking appointment:', booking);
    // Here you would typically send this to your backend
    alert(`Appointment booked for ${booking.firstName} ${booking.lastName} with ${selectedDoctor?.name}`);
  };

  const getSlotForDoctorAndTime = (doctorId: string, date: Date, time: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return mockSlots.find(slot => 
      slot.doctorId === doctorId && 
      slot.date === dateStr && 
      slot.time === time
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Weekly Schedule</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentWeekStart(addDays(currentWeekStart, -7))}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Previous Week
          </button>
          <button
            onClick={() => setCurrentWeekStart(addDays(currentWeekStart, 7))}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Next Week
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-8 border-b border-gray-200">
              <div className="p-4 bg-gray-50 font-medium text-gray-900">Doctor</div>
              {weekDays.map((day, index) => (
                <div key={index} className="p-4 bg-gray-50 text-center">
                  <div className="font-medium text-gray-900">{format(day, 'EEE')}</div>
                  <div className="text-sm text-gray-600">{format(day, 'MMM d')}</div>
                </div>
              ))}
            </div>

            {/* Doctor Rows */}
            {mockDoctors.filter(doctor => doctor.isOnDuty).map((doctor) => (
              <div key={doctor.id}>
                {timeSlots.slice(0, 8).map((time) => (
                  <div key={`${doctor.id}-${time}`} className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-4 bg-gray-50 border-r border-gray-200">
                      <div className="font-medium text-sm text-gray-900">{doctor.name}</div>
                      <div className="text-xs text-gray-600">{time}</div>
                    </div>
                    {weekDays.map((day, dayIndex) => {
                      const slot = getSlotForDoctorAndTime(doctor.id, day, time);
                      if (!slot) {
                        return (
                          <div key={dayIndex} className="p-2 border-r border-gray-200 min-h-[60px] bg-gray-100">
                            <div className="text-xs text-gray-400 text-center">Unavailable</div>
                          </div>
                        );
                      }
                      return (
                        <div key={dayIndex} className="border-r border-gray-200">
                          <CalendarSlot
                            slot={slot}
                            doctor={doctor}
                            onClick={handleSlotClick}
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctor={selectedDoctor}
        slot={selectedSlot}
        onBookAppointment={handleBookAppointment}
      />
    </div>
  );
};

export default CalendarView;
