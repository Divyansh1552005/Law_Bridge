import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, Star, DollarSign, Calendar, ChevronDown, ChevronUp, Users } from 'lucide-react';
import lawyers from '../Constants/Lawyer';
import { LawyerCard } from '../Components/Card';
// TODO: Import API service when backend is ready
// import { lawyerAPI, bookingAPI } from '../services/api';



const ScheduleConsultation = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Property');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    minExperience: '',
    minRating: '',
    maxFee: '',
    availability: ''
  });
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);

  // Handle schedule consultation navigation
  const handleScheduleClick = (lawyerId) => {
    navigate(`/appointment/${lawyerId}`);
  };

  // TODO: Add state for backend data
  // const [lawyers, setLawyers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // TODO: Fetch lawyers from backend on component mount
  // useEffect(() => {
  //   const fetchLawyers = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await lawyerAPI.getLawyers({
  //         category: activeCategory,
  //         limit: 50,
  //         include: ['ratings', 'availability', 'profile']
  //       });
  //       setLawyers(response.data.lawyers);
  //     } catch (error) {
  //       console.error('Error fetching lawyers:', error);
  //       setError('Failed to load lawyers. Please try again.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchLawyers();
  // }, [activeCategory]);

  // TODO: Function to handle booking consultation
  // const handleBookConsultation = async (lawyerId, timeSlot) => {
  //   try {
  //     const userId = localStorage.getItem('userId');
  //     if (!userId) {
  //       // Redirect to login
  //       navigate('/login');
  //       return;
  //     }
  //     
  //     const response = await bookingAPI.createBooking({
  //       lawyerId,
  //       userId,
  //       timeSlot,
  //       consultationType: 'video', // or 'phone', 'in-person'
  //       category: activeCategory
  //     });
  //     
  //     // Redirect to booking confirmation
  //     navigate(`/booking-confirmation/${response.data.bookingId}`);
  //   } catch (error) {
  //     console.error('Booking error:', error);
  //     alert('Failed to book consultation. Please try again.');
  //   }
  // };

  const categories = [
    'Property',
    'Criminal',
    'Civil',
    'Family & Divorce',
    'Corporate',
    'Labour',
    'IPR',
    'Consumer',
    'Tax'
  ];

  // Filter lawyers based on search and filters
  const filteredLawyers = useMemo(() => {
    return lawyers.filter(lawyer => {
      const matchesCategory = lawyer.specialization.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !filters.location || lawyer.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesExperience = !filters.minExperience || parseInt(lawyer.experience) >= parseInt(filters.minExperience);
      const matchesRating = !filters.minRating || lawyer.rating >= parseFloat(filters.minRating);
      const matchesFee = !filters.maxFee || lawyer.fee <= parseInt(filters.maxFee);
      const matchesAvailability = !filters.availability || lawyer.availability.toLowerCase().includes(filters.availability.toLowerCase());

      return matchesCategory && matchesSearch && matchesLocation && matchesExperience &&
        matchesRating && matchesFee && matchesAvailability;
    });
  }, [activeCategory, searchTerm, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      location: '',
      minExperience: '',
      minRating: '',
      maxFee: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose your category, browse lawyers, and book a consultation instantly.
            </p>
          </div>



          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by lawyer name or location..."
                className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <select
                className="bg-slate-800/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="hyderabad">Hyderabad</option>
              </select>

              <select
                className="bg-slate-800/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={filters.minExperience}
                onChange={(e) => handleFilterChange('minExperience', e.target.value)}
              >
                <option value="">Experience</option>
                <option value="5">5+ years</option>
                <option value="10">10+ years</option>
                <option value="15">15+ years</option>
              </select>

              <select
                className="bg-slate-800/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={filters.minRating}
                onChange={(e) => handleFilterChange('minRating', e.target.value)}
              >
                <option value="">Rating</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.8">4.8+ Stars</option>
              </select>

              <select
                className="bg-slate-800/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={filters.maxFee}
                onChange={(e) => handleFilterChange('maxFee', e.target.value)}
              >
                <option value="">Max Fee</option>
                <option value="3000">Under ₹3,000</option>
                <option value="4000">Under ₹4,000</option>
                <option value="5000">Under ₹5,000</option>
              </select>

              <select
                className="bg-slate-800/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
              >
                <option value="">Availability</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Available Tomorrow</option>
              </select>

              <button
                onClick={clearFilters}
                className="bg-slate-700/80 hover:bg-slate-600/80 border border-slate-600/50 rounded-lg py-3 px-4 text-white text-sm transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">


        {/* Categories - Desktop Tabs */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-center justify-center">
            <div className="bg-slate-800/50 rounded-xl p-2 backdrop-blur-sm border border-slate-700/50">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories - Mobile Accordion */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
            className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl p-4 flex items-center justify-between text-white"
          >
            <span className="font-medium">Category: {activeCategory}</span>
            {mobileAccordionOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {mobileAccordionOpen && (
            <div className="mt-2 bg-slate-800/80 border border-slate-600/50 rounded-xl p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setMobileAccordionOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            {activeCategory} Lawyers
            <span className="text-lg font-normal text-slate-400 ml-2">
              ({filteredLawyers.length} found)
            </span>
          </h2>
        </div>

        {/* Lawyer Grid */}
        {filteredLawyers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLawyers.map((lawyer, index) => (
              <LawyerCard 
                key={index} 
                {...lawyer} 
                id={lawyer.id} 
                onScheduleClick={handleScheduleClick} 
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="bg-slate-800/50 rounded-2xl p-12 max-w-md mx-auto border border-slate-700/50">
              <Users className="w-16 h-16 text-slate-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                No lawyers found
              </h3>
              <p className="text-slate-400 mb-6">
                No lawyers available in the {activeCategory} category with your current filters.
                Try adjusting your search criteria.
              </p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
    </div>


  );
};

export default ScheduleConsultation;