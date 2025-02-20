import ManageCalendars from "./ManageCalendars";
import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-darkslategray rounded-lg p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow w-80 md:w-72 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
    
    <div className="relative z-10">
      <img className="w-12 h-12 mb-4" src={icon} alt={title} />
      <h2 className="text-lg font-bold mb-3 text-white">{title}</h2>
      <p className="text-sm font-poppins mb-4 text-white/80">{description}</p>
      
      <div className="space-y-2">
        <p className="text-xs text-white/70 hover:text-white cursor-pointer transition-colors">
          What's included in service?
        </p>
        <button className="w-full bg-white rounded-lg flex items-center justify-center py-2 hover:bg-gray-100 transition-all shadow-md hover:shadow-lg">
          <span className="text-sm font-bold text-black">Schedule Discussion</span>
        </button>
      </div>
    </div>
  </div>
);

const Services = ({ className = "" }) => {
  const services = [
    {
      icon: "/group-5@2x.png",
      title: "Executive Assistance",
      description: "Professional administrative support for executives, including scheduling, email management, and task coordination."
    },
    {
      icon: "/group-5@2x.png",
      title: "Bookkeeping",
      description: "Keep your finances in order with our reliable bookkeeping services, including expense tracking, invoicing, and financial record management."
    },
    {
      icon: "/group-5@2x.png",
      title: "Social Media Management & Website Creation",
      description: "Comprehensive support for executives and businesses, from admin tasks to social media and website management—so you can focus on what matters most."
    },
    {
      icon: "/group-5@2x.png",
      title: "Meeting Minutes",
      description: "We capture clear, concise, and well-structured meeting minutes, ensuring key discussions, decisions, and action points are accurately recorded and easily accessible."
    },
    {
      icon: "/group-5@2x.png",
      title: "Travel Arrangements",
      description: "From flights to accommodations, our virtual assistants handle all your travel logistics—ensuring seamless, stress-free trips with well-organized itineraries."
    },
    {
      icon: "/group-5@2x.png",
      title: "Manage Calendars",
      description: "Stay organized and never miss an appointment—our virtual assistants manage your calendar, schedule meetings, and send reminders efficiently."
    },
    {
      icon: "/group-5@2x.png",
      title: "Data Entry",
      description: "Accurate and efficient data entry services to keep your records organized, up-to-date, and easily accessible"
    },
    {
      icon: "/group-5@2x.png",
      title: "Research",
      description: "Providing in-depth research to support informed decision-making. Whether it's market analysis, industry trends, or data gathering, we deliver accurate and reliable insights."
    },
    {
      icon: "/group-5@2x.png",
      title: "Reports",
      description: "Get accurate, well-structured reports to track performance, analyze data, and make informed business decisions."
    }
  ];

  return (
    <div className={`min-h-screen bg-darkslategray p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg font-poppins text-white max-w-3xl">
            We provide tailored virtual staffing solutions to help businesses
            streamline operations, boost productivity, and scale efficiently.
          </p>
        </div>

        {/* Services Grid - Increased gap for more separation */}
        <div className="grid grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Services;