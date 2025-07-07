
import { useState } from 'react';
import { ViewType } from '../types';
import DoctorSchedule from '../components/DoctorSchedule';
import AllAppointments from '../components/AllAppointments';
import CalendarView from '../components/CalendarView';
import { Button } from '../components/ui/button';
import { Stethoscope, Calendar, Users, Menu, X } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('doctors');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNewAppointment = () => {
    setCurrentView('calendar');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'doctors':
        return <DoctorSchedule />;
      case 'appointments':
        return <AllAppointments onNewAppointment={handleNewAppointment} />;
      case 'calendar':
        return <CalendarView />;
      default:
        return <DoctorSchedule />;
    }
  };

  const getPageTitle = () => {
    switch (currentView) {
      case 'doctors':
        return 'Medical Staff Directory';
      case 'appointments':
        return 'Patient Appointments';
      case 'calendar':
        return 'Booking Calendar';
      default:
        return 'Medical Staff Directory';
    }
  };

  const getPageDescription = () => {
    switch (currentView) {
      case 'doctors':
        return 'Comprehensive overview of our medical professionals and their schedules';
      case 'appointments':
        return 'Centralized management of all patient appointments and bookings';
      case 'calendar':
        return 'Interactive calendar system for scheduling new patient appointments';
      default:
        return 'Comprehensive overview of our medical professionals and their schedules';
    }
  };

  const navItems = [
    { key: 'doctors', label: 'Medical Staff', icon: Stethoscope },
    { key: 'appointments', label: 'Appointments', icon: Users },
    { key: 'calendar', label: 'Schedule', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/30">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-primary-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    MediCare Pro
                  </h1>
                  <p className="text-xs text-primary-600 font-medium">
                    Healthcare Management
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navItems.map(({ key, label, icon: Icon }) => (
                <Button
                  key={key}
                  variant={currentView === key ? 'default' : 'ghost'}
                  onClick={() => setCurrentView(key as ViewType)}
                  className={`
                    transition-all duration-200 flex items-center space-x-2
                    ${currentView === key 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md' 
                      : 'hover:bg-primary-50 hover:text-primary-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 animate-slide-in">
            <div className="px-4 py-3 space-y-2">
              {navItems.map(({ key, label, icon: Icon }) => (
                <Button
                  key={key}
                  variant={currentView === key ? 'default' : 'ghost'}
                  onClick={() => {
                    setCurrentView(key as ViewType);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full justify-start transition-all duration-200 flex items-center space-x-2
                    ${currentView === key 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'hover:bg-primary-50 hover:text-primary-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h2>
          </div>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            {getPageDescription()}
          </p>
        </div>

        <div className="animate-scale-in">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md border-t border-primary-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-gray-600">
                © 2025 MediCare Pro. Healthcare Solutions Inc.
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Advanced Healthcare Management System
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
