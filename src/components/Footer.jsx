import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="4 Stone Logo" className="w-16 h-16 object-contain brightness-0 invert" />
              <span className="text-2xl font-bold text-white tracking-tight">
                4STONE <span className="text-accent-light">SECURITY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Setting the benchmark in professional security and integrated facility solutions across the nation. Your safety is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Company', 'Security Services', 'Facility Management', 'Career Opportunities', 'Contact Support'].map((link) => (
                <li key={link}>
                  <p className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">{link}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Manned Guarding', 'Corporate Housekeeping', 'Warehouse Labour', 'Electronic Surveillance', 'Facility Maintenance'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-light flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm">Thane, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-light flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm">+91 9930277211</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-light flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm">info.4stoneservices@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} 4Stone Security & Facility Management Co. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <p className="text-slate-500 hover:text-white text-xs">Privacy Policy</p>
            <p className="text-slate-500 hover:text-white text-xs">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
