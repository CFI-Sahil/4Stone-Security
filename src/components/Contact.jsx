import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="relative py-16 md:py-24 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary-light rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Professional Security & Facility Management solutions at your doorstep. Get in touch with our experts today.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Form */}
            <div className="card shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Send us a Message</h3>
              <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="9930277211" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="example@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary bg-accent hover:bg-accent-dark flex items-center justify-center gap-2 py-4">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Registered Office', detail: 'Beside Bharat Dairy, Near Mourya TV Center, Sathe Nagar, Road No.22, Wagle Estate, Thane (W) - 400 604', color: 'bg-primary/10 text-primary' },
                  { icon: Phone, title: 'Call Us', detail: '9930277211', color: 'bg-accent/10 text-accent' },
                  { icon: Mail, title: 'Email Us', detail: 'info.4stoneservices@gmail.com', color: 'bg-blue-100 text-blue-600' },
                  { icon: Clock, title: 'Working Hours', detail: '24×7 Available', color: 'bg-green-100 text-green-600' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
                    className="flex gap-6"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-dark mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder replaced with real Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-80 bg-slate-100 relative transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.109!2d72.946!3d19.186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90aa!2sWagle+Estate%2C+Thane%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1710842000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="4 Stone Security Location"
                ></iframe>
                <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md px-4 py-3 text-xs font-bold text-primary text-center border-t border-slate-100">
                  Beside Bharat Dairy, Wagle Estate, Thane (W) - 400 604
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
