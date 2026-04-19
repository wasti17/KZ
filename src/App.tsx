/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Award, 
  Users, 
  Calendar, 
  ChefHat, 
  UtensilsCrossed, 
  PartyPopper, 
  Building2,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

export default function App() {
  const images = [
    { src: "https://picsum.photos/seed/shadi-walima/800/600", title: "Shadi & Walima" },
    { src: "https://picsum.photos/seed/live-bbq-pakistan/800/600", title: "Live BBQ" },
    { src: "https://picsum.photos/seed/lahore-catering/800/600", title: "Catering Excellence" },
    { src: "https://picsum.photos/seed/event-decoration-pakistan/800/600", title: "Decoration" },
    { src: "https://picsum.photos/seed/mehndi-event-setup/800/600", title: "Mehndi Night" },
    { src: "https://picsum.photos/seed/gulab-jamun-traditional/800/600", title: "Traditional Desserts" },
  ];

  const services = [
    { 
      title: "Wedding Planning", 
      desc: "Complete luxury wedding solutions from Mehndi to Walima.", 
      icon: <PartyPopper className="w-8 h-8" /> 
    },
    { 
      title: "Premium Catering", 
      desc: "Authentic Pakistani & Continental cuisine handled by master chefs.", 
      icon: <ChefHat className="w-8 h-8" /> 
    },
    { 
      title: "Corporate Events", 
      desc: "Professional seminars, launches, and annual dinners.", 
      icon: <Building2 className="w-8 h-8" /> 
    },
    { 
      title: "Decoration", 
      desc: "Exquisite floral arrangements and themed stage setups.", 
      icon: <UtensilsCrossed className="w-8 h-8" /> 
    },
  ];

  const stats = [
    { label: "Events Completed", value: "1500+" },
    { label: "Years Experience", value: "15+" },
    { label: "Happy Clients", value: "3000+" },
    { label: "Master Chefs", value: "12" },
  ];

  return (
    <div className="min-h-screen">
      <div className="geometric-container">
        {/* Header */}
        <header className="geometric-border-b bg-transparent px-10 py-4 flex justify-between items-center z-50">
          <div className="font-serif text-2xl font-bold tracking-[4px] uppercase">
            KZ
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-semibold uppercase tracking-[2px] items-center">
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#gallery" className="hover:opacity-60 transition-opacity">Gallery</a>
            <a href="#contact" className="geometric-button">Book Consultation</a>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center items-center text-center px-10 py-20 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center z-10"
          >
            <h1 className="font-serif text-[80px] md:text-[120px] leading-[0.9] font-bold tracking-[2px] mb-2 uppercase">
              KZ
            </h1>
            <div className="sub-brand-line mb-10">
              Event Management
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-10">
              <div className="text-center">
                <div className="text-[14px] font-semibold uppercase tracking-[1px] mb-1">Syed Ahmad Kamran Wasti</div>
                <div className="text-[18px] tracking-[1px] opacity-80">0302-8484386</div>
              </div>
              <div className="text-center">
                <div className="text-[14px] font-semibold uppercase tracking-[1px] mb-1">Zahid Javed</div>
                <div className="text-[18px] tracking-[1px] opacity-80">0300-4267993</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="geometric-button px-10">Inquire</a>
              <a href="#services" className="geometric-button px-10 bg-white/10">Services</a>
            </div>
          </motion.div>
        </main>

        {/* Image Strip */}
        <section className="img-strip-grid">
          {images.map((img, idx) => (
            <div key={idx} className="img-box-item group">
              <img 
                src={img.src} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white rounded-full opacity-20 pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
              <div className="img-label relative z-10 font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                {img.title}
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="px-10 py-6 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/0">
          <div className="text-[11px] uppercase tracking-[0.5px] opacity-70 max-w-[400px] leading-relaxed text-left">
            268-A UET Housing Society Main Boulevard<br/>
            College Road, Lahore, Pakistan
          </div>

          <div className="flex gap-8">
            {stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="stat-val">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/923028484386" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] border border-white flex justify-center items-center rounded-full bg-white/10 hover:bg-white/20 transition-all group"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </footer>
      </div>

      {/* Services Section Extends Geometric Design */}
      <section id="services" className="px-5 py-24 bg-brand-red-bright/20">
        <div className="max-w-7xl mx-auto border border-white/30 p-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">Our Services</h2>
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="p-10 border border-white/20 hover:bg-white/5 transition-all flex flex-col items-center text-center space-y-6"
              >
                <div className="text-white opacity-80">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-bold tracking-wider uppercase">{service.title}</h3>
                <p className="text-[12px] font-light leading-relaxed opacity-70">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern High-End Form */}
      <section id="contact" className="px-5 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/30">
          <div className="p-10 lg:p-20 border-r border-white/30 space-y-10">
            <h2 className="font-serif text-4xl font-bold uppercase">Connect With Us</h2>
            <div className="space-y-6">
              {[
                { label: "Kamran Wasti", val: "0302-8484386" },
                { label: "Zahid Javed", val: "0300-4267993" }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/30 pl-6 py-2">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{item.label}</p>
                  <p className="font-serif text-xl font-bold">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 lg:p-20 bg-white/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="NAME" className="bg-transparent border-b border-white/30 py-3 text-[12px] tracking-[2px] focus:border-white outline-none w-full" />
                <input type="tel" placeholder="PHONE" className="bg-transparent border-b border-white/30 py-3 text-[12px] tracking-[2px] focus:border-white outline-none w-full" />
              </div>
              <textarea placeholder="EVENT DETAILS" rows={4} className="bg-transparent border-b border-white/30 py-3 text-[12px] tracking-[2px] focus:border-white outline-none w-full resize-none"></textarea>
              <button className="geometric-button w-full py-4 bg-white text-brand-red font-bold">Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 opacity-30 text-[9px] uppercase tracking-[4px]">
        &copy; 2026 KZ EVENT MANAGEMENT &middot; LAHORE
      </footer>
    </div>
  );
}
