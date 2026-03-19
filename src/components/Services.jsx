import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Home, Camera, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Security Services',
    description: 'Advanced surveillance, manned guarding, and electronic security solutions tailored for corporate and residential needs.',
    icon: Shield,
    path: '/services/security',
  },
  {
    title: 'Industrial Labour',
    description: 'Providing skilled and semi-skilled manpower for manufacturing plants, warehouses, and construction sectors across India.',
    icon: Users,
    path: '/services/labour',
  },
  {
    title: 'Housekeeping',
    description: 'Comprehensive facility cleaning, maintenance, and pantry management for a hygiene-focused work environment.',
    icon: Home,
    path: '/services/housekeeping',
  },
  {
    title: 'Alarm & Surveillance',
    description: 'Modern CCTV integration, motion sensors, and remote monitoring systems for proactive threat detection.',
    icon: Camera,
    path: '/services/alarm',
  },
  {
    title: 'Security Equipment',
    description: 'Distribution and installation of state-of-the-art security hardware and access control systems.',
    icon: Settings,
    path: '/services/equipment',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-4">Our Premium Services</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-slate-500 mt-6 max-w-xl mx-auto text-lg"
          >
            Delivering excellence through specialized security and management solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="card group hover:shadow-2xl hover:shadow-primary/10 bg-white border border-slate-100 p-8 md:p-10 rounded-[2rem] transition-all flex flex-col items-center text-center"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500"
              >
                <service.icon size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
