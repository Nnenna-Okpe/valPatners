import React from "react";
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-inherit! text-neutral-700 px-6 py-4 pb-2 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        <p className="text-base text-gray-600">Thank you for browsing</p>
        <p className="text-xs text-neutral-500">Developed by Nenztech</p>
        {/* Social Links */}
        <div className="flex items-center gap-6 ">
          <a
            href="https://www.instagram.com/nenztech?igsh=MTN3eHlvaWFkNHJ1eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/2349121361644"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
