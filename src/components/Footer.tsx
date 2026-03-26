import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/50 backdrop-blur-lg relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="mailto:iamtamzid96@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Mail size={18} />
            <span className="hidden sm:inline">iamtamzid96@gmail.com</span>
          </a>
          <a href="tel:+61415333742" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Phone size={18} />
            <span className="hidden sm:inline">+61 415 333 742</span>
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 Tamzid Hassan Nabil. All rights reserved.</p>
        <p>Designed with precision.</p>
      </div>
    </footer>
  );
}
