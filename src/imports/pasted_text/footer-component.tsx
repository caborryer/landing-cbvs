import { Flame, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-red-600" />
              <span className="text-xl">Firefighters Association</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to serving our community, supporting our members, and honoring 
              the legacy of courage and commitment that defines the firefighting profession.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@firefightersassoc.org"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('president')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  President's Message
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stations')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Fire Stations
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('donate')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Join the Association
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Firefighters Association. All rights reserved.
          </p>
          <p className="mt-2">
            For emergencies, always dial <span className="text-red-500">911</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
