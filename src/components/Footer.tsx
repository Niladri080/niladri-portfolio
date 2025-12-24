import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-custom text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Designed & Built with <Heart size={14} className="text-primary fill-primary" /> by Alex Chen © {currentYear}
        </p>
      </div>
    </footer>
  );
}
