import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  PhoneCall,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/pest-control-services" },
    { name: "Residential Pest Control", href: "/residential-pest-control" },
    { name: "Commercial Pest Control", href: "/commercial-pest-control" },
    { name: "Herbal Pest Control", href: "/herbal-pest-control" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Cockroach Control", href: "/cockroach-pest-control" },
    { name: "Termite Treatment", href: "/termite-pest-control" },
    { name: "Bed Bug Control", href: "/bedbug-pest-control" },
    { name: "Rodent Control", href: "/rodent-control" },
    { name: "Mosquito Management", href: "/mosquito-control" },
    { name: "Bird Netting & Spikes", href: "/bird-control" },
    { name: "Commercial Fumigation", href: "/fumigation-services" },
    { name: "Flies Control", href: "/flies-control" },
  ];

  const popularBranches = [
    { name: "Delhi NCR", href: "/branches/delhi" },
    { name: "Mumbai", href: "/branches/mumbai" },
    { name: "Bangalore", href: "/branches/bangalore" },
    { name: "Kolkata", href: "/branches/kolkata" },
    { name: "Hyderabad", href: "/branches/hyderabad" },
    { name: "Chennai", href: "/branches/chennai" },
    { name: "Pune", href: "/branches/pune" },
    { name: "Ahmedabad", href: "/branches/ahmedabad" },
    { name: "Bhubaneswar", href: "/branches/bhubaneswar" },
    { name: "Guwahati", href: "/branches/guwahati" },
    { name: "Bhutan", href: "/branches/bhutan" },
    { name: "Nepal", href: "/branches/nepal" },
  ];

  return (
    <footer className="w-full bg-[#0D2391] text-white">
      {/* Top CTA Banner - Clean Yellow & Deep Blue */}
      <div className="bg-[#FECE18] text-[#0D2391]">
        <div className="max-w-[85%] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D2391]">
              Need Immediate Pest Control Assistance?
            </h3>
            <p className="text-sm md:text-base font-medium text-gray-800 mt-1">
              Over 27 years of trusted, government-approved pest solutions for homes and businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#0D2391] hover:bg-[#07165c] text-white font-bold px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              BOOK FREE INSPECTION
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:18004198181"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0D2391] font-bold px-6 py-3.5 rounded-lg border border-[#0D2391]/20 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PhoneCall size={18} className="text-[#0D2391]" />
              1800 419 8181
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[85%] mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-lg inline-block">
                <Image
                  src="/logo.png"
                  alt="Orion Pest Solutions"
                  width={130}
                  height={50}
                  className="object-contain h-10 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-200 leading-relaxed">
              Orion Pest Solutions is India&apos;s premier pest management company with <strong>27+ years of experience</strong> providing safe, eco-friendly, and government-approved solutions across India, Bhutan, and Nepal.
            </p>

            <div className="pt-1">
              <div className="h-[2px] w-14 bg-[#FECE18] mb-3"></div>
              <p className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
                ISO 9001:2008 • ISO 14001 • IPCA & NPMA Member
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.facebook.com/Orionpestsolution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#FECE18] hover:text-[#0D2391] text-white flex items-center justify-center transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/orionpestindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#FECE18] hover:text-[#0D2391] text-white flex items-center justify-center transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://in.linkedin.com/company/orion-pest-solutions-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#FECE18] hover:text-[#0D2391] text-white flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b-2 border-[#FECE18] pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-[#FECE18] transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} className="text-[#FECE18]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b-2 border-[#FECE18] pb-1.5 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-200 hover:text-[#FECE18] transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} className="text-[#FECE18]" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Top Locations (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b-2 border-[#FECE18] pb-1.5 inline-block">
              Top Branches
            </h4>
            <ul className="space-y-2 text-sm">
              {popularBranches.slice(0, 7).map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="text-gray-200 hover:text-[#FECE18] transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} className="text-[#FECE18]" />
                    <span>{location.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/branches"
                  className="text-[#FECE18] hover:underline font-semibold text-xs inline-flex items-center gap-1"
                >
                  View All Branches <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b-2 border-[#FECE18] pb-1.5 inline-block">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-2">
                <div className="text-[#FECE18] shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Toll Free Support</p>
                  <a
                    href="tel:18004198181"
                    className="text-white hover:text-[#FECE18] font-bold transition text-nowrap"
                  >
                    1800 419 8181
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <div className="text-[#FECE18] shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Email</p>
                  <a
                    href="mailto:sales@orionpest.com"
                    className="text-gray-200 hover:text-[#FECE18] transition text-xs break-all"
                  >
                    sales@orionpest.com
                  </a>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-2">
                <div className="text-[#FECE18] shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Head Office</p>
                  <p className="text-xs text-gray-200 leading-snug">
                    200W, S.P. Mukherjee Road, Tollygunge, Kolkata - 700026
                  </p>
                </div>
              </div>

              {/* Presence */}
              <div className="flex items-start gap-2 pt-1">
                <div className="text-[#FECE18] shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Pan India Presence</p>
                  <Link
                    href="/branches"
                    className="text-xs text-gray-200 hover:text-[#FECE18] transition-colors"
                  >
                    72+ Locations Across India
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 bg-[#081861] text-xs text-gray-300 py-4">
        <div className="max-w-[85%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Orion Pest Solutions Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-[#FECE18] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/contact" className="hover:text-[#FECE18] transition-colors">
              Contact Us
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/branches" className="hover:text-[#FECE18] transition-colors">
              All Branches
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
