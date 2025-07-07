
import { IDoctor } from '../types';
import { Card, CardContent } from './ui/card';
import { Clock, MapPin, Stethoscope, CheckCircle, XCircle } from 'lucide-react';

interface DoctorCardProps {
  doctor: IDoctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-105 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-inner">
                <span className="text-primary-700 font-bold text-xl">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                doctor.isOnDuty ? 'bg-emerald-500' : 'bg-red-500'
              } animate-pulse-soft`}></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary-700 transition-colors">
                {doctor.name}
              </h3>
              <p className="text-primary-600 font-semibold text-sm bg-primary-50 px-3 py-1 rounded-full">
                {doctor.department}
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
            <Stethoscope className="w-4 h-4 text-primary-500 mr-3" />
            <span className="font-medium text-gray-600">Specialization:</span>
            <span className="ml-2 text-gray-800">{doctor.specialization}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
            <Clock className="w-4 h-4 text-primary-500 mr-3" />
            <span className="font-medium text-gray-600">Schedule:</span>
            <span className="ml-2 text-gray-800">{doctor.dutyTiming}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              {doctor.isOnDuty ? (
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-red-500" />
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                doctor.isOnDuty 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {doctor.isOnDuty ? 'Available Today' : 'Unavailable'}
              </span>
            </div>
            
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>Floor 2</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
