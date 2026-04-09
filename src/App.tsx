import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight, Star } from 'lucide-react';

const SERVICES = [
  {
    title: "Signature Manicure",
    price: "$45",
    description: "Complete nail care, cuticle work, massage, and your choice of regular polish.",
  },
  {
    title: "Gel Polish & Art",
    price: "from $65",
    description: "Long-lasting gel polish with custom hand-painted nail art of your choice.",
  },
  {
    title: "Acrylic Extensions",
    price: "from $85",
    description: "Full set of acrylic extensions shaped to perfection with a flawless finish.",
  },
  {
    title: "Luxury Pedicure",
    price: "$60",
    description: "Relaxing foot soak, scrub, massage, and polish for beautiful, soft feet.",
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800",
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 md:px-16 flex items-center justify-between absolute top-0 z-50">
        <div className="text-2xl font-serif tracking-widest font-semibold text-stone-900">
          LUMIÈRE
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="nav-link text-stone-800">Services</a>
          <a href="#gallery" className="nav-link text-stone-800">Gallery</a>
          <a href="#about" className="nav-link text-stone-800">About</a>
        </div>
        <button className="hidden md:block px-6 py-2 border border-stone-900 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300">
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-8 md:px-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-50/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516975080661-46bce0d437e2?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful nail art" 
            className="w-full h-full object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] mb-6 text-stone-600 font-medium">
              Elevate Your Everyday
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] tracking-tight mb-8">
              Artistry at <br/>
              <span className="italic text-stone-600">your fingertips.</span>
            </h1>
            <p className="text-stone-600 max-w-md mb-10 leading-relaxed font-light">
              Experience luxury nail care and bespoke designs in a serene, relaxing environment. Your hands deserve the finest attention to detail.
            </p>
            <button className="px-8 py-4 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors duration-300 flex items-center gap-3">
              Book an Appointment
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 md:px-16 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Our Services</h2>
              <p className="text-stone-600 font-light max-w-md">
                Curated treatments designed to nourish, protect, and beautify.
              </p>
            </div>
            <button className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all">
              View Full Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-baseline mb-2 border-b border-stone-300 pb-4 group-hover:border-stone-900 transition-colors">
                  <h3 className="text-xl font-serif">{service.title}</h3>
                  <span className="text-sm tracking-wider">{service.price}</span>
                </div>
                <p className="text-stone-500 font-light text-sm mt-4 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break / Quote */}
      <section className="py-32 px-8 md:px-16 flex justify-center items-center text-center bg-stone-900 text-stone-50">
        <div className="max-w-4xl">
          <Star className="mx-auto mb-8 text-rose-200" size={24} />
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
            "Nails are not about being noticed, they are about being remembered."
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
            — The Lumière Philosophy
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Recent Work</h2>
            <p className="text-stone-600 font-light">Follow us on Instagram for daily inspiration.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[4/5] overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt={`Nail art gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-stone-900 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300 inline-flex items-center gap-2">
              <Instagram size={14} />
              @lumierenails
            </button>
          </div>
        </div>
      </section>

      {/* About / Visit Us */}
      <section id="about" className="py-24 px-8 md:px-16 bg-rose-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000" 
              alt="Salon interior" 
              className="w-full aspect-[3/4] object-cover rounded-t-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">A Sanctuary for <br/><span className="italic">Self-Care</span></h2>
            <p className="text-stone-600 font-light mb-8 leading-relaxed">
              Founded in 2024, Lumière was created with a simple vision: to elevate the standard nail salon experience into a moment of true luxury and relaxation. We use only premium, non-toxic products and prioritize the health of your natural nails above all else.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Location</h4>
                  <p className="text-stone-600 font-light text-sm">123 Beauty Lane, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Hours</h4>
                  <p className="text-stone-600 font-light text-sm">
                    Tue - Fri: 10am - 7pm<br/>
                    Sat: 9am - 5pm<br/>
                    Sun - Mon: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Contact</h4>
                  <p className="text-stone-600 font-light text-sm">(555) 123-4567<br/>hello@lumierenails.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-8 md:px-16 text-sm font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif tracking-widest font-semibold text-stone-50">
            LUMIÈRE
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-50 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-50 transition-colors">Facebook</a>
            <a href="#" className="hover:text-stone-50 transition-colors">TikTok</a>
          </div>
          
          <div className="text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Lumière Nail Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
