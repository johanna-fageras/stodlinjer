// Tailwind CDN configuration
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"GT Walsheim"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"GT Walsheim"', 'system-ui', 'sans-serif'],
        body: ['"GT Walsheim"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em'
      },
      lineHeight: {
        tight: '1.15',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.6'
      },
      boxShadow: {
        glow: '0 10px 50px rgba(79,70,229,0.3)'
      }
    }
  }
};
