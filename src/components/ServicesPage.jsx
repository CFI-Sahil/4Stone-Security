import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Home, Camera, Zap, Droplets, UserCheck, HardHat, CheckCircle2, Award } from 'lucide-react';

const ServiceSection = ({ title, items, icon: Icon, color = "primary", baseDelay = 0 }) => (
  <section className="py-12 md:py-20 border-b border-slate-100 last:border-0">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: baseDelay }}
      className="flex items-center gap-4 mb-8 md:mb-12"
    >
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
        <Icon size={20} className="md:w-[24px] md:h-[24px]" />
      </div>
      <h2 className="text-xl md:text-3xl font-bold text-primary-dark">{title}</h2>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: baseDelay + (idx * 0.15), ease: [0.21, 0.45, 0.32, 0.9] }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col items-center text-center"
        >
          <h4 className="font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">{item.name}</h4>
          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary pt-16 pb-16 md:pt-24 md:pb-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            Service Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-primary-light text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            From elite security forces to specialized industrial maintenance, we provide comprehensive solutions to keep your assets protected and your operations seamless.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Security Services */}
        <ServiceSection
          title="Security Services"
          icon={Shield}
          color="primary"
          baseDelay={0.4}
          items={[
            { name: "Security Guards", desc: "Professional 24/7 onsite protection for residential and corporate assets." },
            { name: "Event Security", desc: "Elite crowd control and VIP protection for high-profile gatherings." },
            { name: "Risk Analysis", desc: "In-depth threat assessment and strategic mitigation planning." },
            { name: "Dog Squad", desc: "Specially trained K9 patrol units for advanced detection and deterrence." },
          ]}
        />

        {/* Facility Management */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12 border-b border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10 md:mb-16"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
              <Home size={20} className="md:w-[24px] md:h-[24px]" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-primary-dark">Facility Management</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-primary flex items-center gap-3"
              >
                <Droplets size={24} /> Soft Services
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Professional Cleaning", desc: "Janitorial and specialized deep cleaning solutions for any facility type." },
                  { name: "Pantry Management", desc: "Professional handling of food, beverages, and hospitality services." }
                ].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col items-center text-center"
                  >
                    <h4 className="font-bold text-primary-dark mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-primary flex items-center gap-3"
              >
                <Zap size={24} /> Hard Services
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {['Electricians', 'HVAC Systems', 'Plumbing', 'Payroll Management'].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: idx < 2 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center font-bold text-[12px] md:text-sm text-primary-dark hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Labour */}
        <section className="pt-8 pb-24 md:pt-12 md:pb-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="Industrial workers"
                className="rounded-[1rem] shadow-2xl"
              />
            </motion.div>
            <div className="mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="flex flex-col items-start overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-6 mb-6"
                >
                  <div className="w-2 h-12 md:h-16 bg-primary-light rounded-full shrink-0" />
                  <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tighter leading-tight">Industrial Labour</h2>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-xl mb-6 ml-9"
                >
                  We bridge the gap between project requirements and quality manpower. Our extensive network ensures you get the right skill at the right time.
                </motion.p>
              </div>
              <ul className="space-y-5 ml-9">
                {[
                  'Skilled & Semi-skilled Manpower',
                  'Labour Contractor Services',
                  'Compliance & Statutory Management',
                  'Workforce Supply across PAN India',
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.15), duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-3 text-primary-dark font-medium"
                  >
                    <CheckCircle2 size={22} className="text-secondary" /> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-12 rounded-[1rem] bg-primary text-white p-10 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 text-center mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Specialized Training Programs</h2>
              <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 text-center"
            >
              <Zap className="text-accent mx-auto mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-6">Fire Safety</h4>
              <p className="text-slate-300 text-base leading-relaxed">Comprehensive fire prevention, equipment handling, and emergency response training for all staff.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 text-center"
            >
              <Award className="text-accent mx-auto mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-6">Mock Drills</h4>
              <p className="text-slate-300 text-base leading-relaxed">Regular simulation of emergency scenarios to ensure maximum preparedness and quick evacuation protocols.</p>
            </motion.div>
          </div>
        </section>

        {/* Surveillance Systems */}
        <div className="mt-20">
          <ServiceSection
            title="Special Surveillance Systems"
            icon={Camera}
            color="primary"
            items={[
              { name: "Advanced Surveillance", desc: "High-definition CCTV integration with AI-powered motion detection and remote monitoring." },
              { name: "Smart Alarm Systems", desc: "Intrusion detection, smoke sensors, and panic alarms linked directly to our 24/7 command center." },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
