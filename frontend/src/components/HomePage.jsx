import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { 
  Truck, Package, MapPin, Clock, Phone, Mail, 
  Menu, X, CheckCircle, Users, Shield, ArrowRight, 
  Link2
} from 'lucide-react';

const TransportHomePage = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Full Truck Load",
      description: "Complete truck capacity for large shipments with dedicated vehicles"
    },
    {
      icon: <Package className="w-12  h-12" />,
      title: "Part Load Services",
      description: "Cost-effective solution for smaller loads sharing truck space"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "GPS Tracking",
      description: "Real-time tracking of your shipment from pickup to delivery"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Express Delivery",
      description: "Time-critical deliveries with guaranteed on-time service"
    }
  ];

  // ✅ Numbers as pure integers for CountUp
  const stats = [
    { number: 500, label: "Trucks Fleet", showPlus: true },
    { number: 10000, label: "Happy Clients", showPlus: true },
    { number: 50, label: "Cities Covered", showPlus: true },
    { number: 24, label: "Support Available (24/7)", showPlus: false }
  ];

  const features = [
    "Experienced Drivers",
    "Insured Transport",
    "Competitive Pricing",
    "Door-to-Door Service",
    "All India Coverage",
    "Safe & Secure Delivery"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-800">Nidhi Corporation</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to='/trip-verification'>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Get Quote
              </button>
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-orange-600 font-medium">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Fast & Reliable Transport Services
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Moving your goods safely across India with our fleet of modern trucks. 
                Get instant quotes and track your shipment in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center">
                  Book Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition">
                  Track Shipment
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <Truck className="w-24 h-24 text-white" />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800 text-center">Heavy Trucks</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">20+ Ton Capacity</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <Package className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800 text-center">Container Trucks</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">32 Feet Containers</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                    <Truck className="w-20 h-20 text-white" />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800 text-center">Mini Trucks</h4>
                    <p className="text-sm text-gray-600 text-center mt-2">1-5 Ton Capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with CountUp */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  <CountUp start={0} end={stat.number} duration={2.5} separator="," />
                  {stat.showPlus && "+"}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive transport solutions for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="text-orange-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are committed to providing the best transportation services with a focus on safety, 
                reliability, and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Expert Team</h4>
                <p className="text-sm text-gray-600">Professional drivers & staff</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Fully Insured</h4>
                <p className="text-sm text-gray-600">Complete cargo protection</p>
              </div>
              <div className="bg-green-100 rounded-xl p-6 text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">On-Time Delivery</h4>
                <p className="text-sm text-gray-600">99.9% delivery success</p>
              </div>
              <div className="bg-purple-100 rounded-xl p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Live Tracking</h4>
                <p className="text-sm text-gray-600">Track anytime, anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl mb-8 text-orange-100">Get in touch with us for a free quote and consultation</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-lg font-semibold">+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-lg font-semibold">info@nidhicorporation.com</span>
            </div>
          </div>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
                <span className="text-xl font-bold text-white">Nidhi Corporation</span>
              </div>
              <p className="text-sm">Your trusted partner for all transportation needs across India.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-600">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600">Services</a></li>
                <li><a href="#" className="hover:text-orange-600">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-600">Full Truck Load</a></li>
                <li><a href="#" className="hover:text-orange-600">Part Load</a></li>
                <li><a href="#" className="hover:text-orange-600">Express Delivery</a></li>
                <li><a href="#" className="hover:text-orange-600">GPS Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>123 Transport Hub, Delhi</li>
                <li>Phone: +91 98765 43210</li>
                <li>Email: info@nidhicorporation.com</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Nidhi Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransportHomePage;
