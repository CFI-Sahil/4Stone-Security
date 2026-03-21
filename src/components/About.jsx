import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Zap, Award, Users } from 'lucide-react';
import Certifications from './Certifications';
import CountUp from './CountUp';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary-light rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          >
            Protecting Your Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="text-primary-light text-base sm:text-lg font-medium max-w-2xl mx-auto"
          >
            Leading the Way in Security & Facility Management with Excellence and Integrity.
          </motion.p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-4">Our Legacy</h4>
                <h2 className="heading-lg">A Trusted Partner for Decades</h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed"
              >
                Founded on the principles of excellence and reliability, 4 Stone Security has grown into a premier provider of integrated security and facility solutions. We don't just provide services; we build long-term partnerships based on trust.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 gap-6 sm:gap-8 pt-4"
              >
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
                    <CountUp end={25} suffix="+" />
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-500 font-medium whitespace-nowrap">Years Experience</div>
                </div>
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-[10px] sm:text-sm text-slate-500 font-medium whitespace-nowrap">Expert Staff</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
              className="mt-12 lg:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="4 Stone Security Office"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="card p-10 bg-white flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver world-class security and facility management solutions that enable our clients to focus on their core business, while we ensure their safety, security, and operational efficiency through innovation and dedicated service.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="card p-10 bg-white flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and preferred partner in the security and facility management industry globally, recognized for our commitment to quality, integrity, and the continuous advancement of our professional standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'We uphold the highest ethical standards in all our actions and decisions.' },
              { icon: Heart, title: 'Trust', desc: 'We build lasting relationships based on honesty and mutual respect.' },
              { icon: Zap, title: 'Transparency', desc: 'Open communication and clarity in everything we do for our clients.' },
              { icon: Users, title: 'Teamwork', desc: 'Working together across boundaries to meet the needs of our customers.' },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="p-8 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <value.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-primary-dark mb-2">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section (Highly Requested) */}
      <Certifications />

      {/* Industries grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight font-sans">Industries We Serve</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 md:gap-6">
            {['Industrial', 'IT & Tech', 'Hospitals', 'Banking', 'Construction', 'Logistics'].map((industry) => (
              <div key={industry} className="h-14 sm:h-16 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-center hover:bg-primary hover:border-primary transition-all cursor-default group shadow-sm hover:shadow-lg hover:shadow-primary/20 px-4 sm:px-8 md:min-w-[180px]">
                <span className="text-[12px] md:text-sm font-bold tracking-wider text-slate-700 group-hover:text-white transition-colors uppercase">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
