
import { useState, useMemo } from 'react';
import { IDoctor } from '../types';
import { mockDoctors, departments } from '../data/mockData';
import DoctorCard from './DoctorCard';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Filter, Users, UserCheck } from 'lucide-react';

const DoctorSchedule = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');

  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All Departments' || 
                               doctor.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  const onDutyCount = mockDoctors.filter(doctor => doctor.isOnDuty).length;
  const totalDoctors = mockDoctors.length;

  return (
    <div className="space-y-8">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-xl shadow-lg text-white animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100 text-sm font-medium">Total Medical Staff</p>
              <p className="text-3xl font-bold">{totalDoctors}</p>
            </div>
            <Users className="w-10 h-10 text-primary-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl shadow-lg text-white animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Available Today</p>
              <p className="text-3xl font-bold">{onDutyCount}</p>
            </div>
            <UserCheck className="w-10 h-10 text-emerald-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Departments</p>
              <p className="text-3xl font-bold">{departments.length - 1}</p>
            </div>
            <Filter className="w-10 h-10 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by doctor name, department, or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary-400 rounded-lg transition-all duration-200"
            />
          </div>
          <div className="w-full lg:w-80">
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-primary-400 rounded-lg h-12">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <SelectValue placeholder="Filter by department" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept} className="cursor-pointer hover:bg-primary-50">
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Active Filters Display */}
        {(searchTerm || selectedDepartment !== 'All Departments') && (
          <div className="flex items-center space-x-2 mt-4 text-sm">
            <span className="text-gray-600">Active filters:</span>
            {searchTerm && (
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                Search: "{searchTerm}"
              </span>
            )}
            {selectedDepartment !== 'All Departments' && (
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                Department: {selectedDepartment}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-gray-600">
          <span className="font-semibold text-gray-900">{filteredDoctors.length}</span> medical professionals found
          {selectedDepartment !== 'All Departments' && (
            <span> in <span className="font-medium text-primary-600">{selectedDepartment}</span></span>
          )}
        </div>
        <div className="text-sm text-gray-500">
          {onDutyCount} available today
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor, index) => (
          <div key={doctor.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>

      {/* No Results State */}
      {filteredDoctors.length === 0 && (
        <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No medical staff found
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Try adjusting your search criteria or department filter to find the medical professionals you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDepartment('All Departments');
            }}
            className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;
