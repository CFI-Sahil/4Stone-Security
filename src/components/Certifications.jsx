import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const certifications = [
  {
    title: 'ISO 9001:2015',
    id: 'Enrollment 050221019104',
    status: 'Verified',
  },
  {
    title: 'PSARA License',
    id: 'PSA/L/19/MH/2021/JUL/3/8497',
    status: 'Govt Approved',
  },
  {
    title: 'GST Registered',
    id: 'GST Reg. 27AABCT2668ZL7S',
    status: 'Active',
  },
  {
    title: 'PF Registration',
    id: 'MH/BAN/0045612/000',
    status: 'Active',
  },
  {
    title: 'ESIC Registration',
    id: '31000654120001001',
    status: 'Active',
  },
  {
    title: 'MSME Certified',
    id: 'UDYAM-MH-15-004821',
    status: 'Verified',
  },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6"
          >
            <ShieldCheck size={20} />
            Verified & Approved by Govt
          </motion.div>
          <h2 className="heading-lg text-primary-dark mb-4">Certifications & Compliance</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            4Stone Security and Facility Mat. Ltd. maintains full statutory compliance and verified licenses to ensure the highest standards of service and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                  <CheckCircle2 size={12} />
                  {cert.status}
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-1">{cert.title}</h3>
              <p className="text-xs font-medium text-slate-400 mb-6 uppercase tracking-wider">{cert.id}</p>
              
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-bold text-secondary flex items-center gap-1">
                  <CheckCircle2 size={14} /> Official Record
                </span>
                <span className="text-[10px] text-slate-300 font-medium">TRUSTED PARTNER</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
