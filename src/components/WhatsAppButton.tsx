import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20building%20an%20app"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
