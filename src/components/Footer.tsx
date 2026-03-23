const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="font-display text-xl font-bold">
        <span className="gradient-text">Level</span>
        <span className="text-foreground">meup</span>
      </a>
      <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <p className="text-sm text-muted-foreground">© 2026 Levelmeup. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
