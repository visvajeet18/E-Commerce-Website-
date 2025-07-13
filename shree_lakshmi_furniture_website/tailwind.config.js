module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF2F4", // Very light maroon
          100: "#FCE7EA", // Light maroon
          200: "#F8CDD4", // Lighter maroon
          300: "#F2A8B5", // Medium light maroon
          400: "#E97A8F", // Medium maroon
          500: "#D94C6A", // Base maroon variant
          600: "#B83651", // Darker maroon
          700: "#8B2635", // Primary maroon - temple architecture
          800: "#6B1E2A", // Very dark maroon
          900: "#4A151D", // Darkest maroon
          DEFAULT: "#8B2635", // Primary maroon
        },
        secondary: {
          50: "#FEFCF3", // Very light gold
          100: "#FDF8E1", // Light gold
          200: "#FBF0C4", // Lighter gold
          300: "#F7E49C", // Medium light gold
          400: "#F1D464", // Medium gold
          500: "#E8C547", // Base gold variant
          600: "#D4AF37", // Primary gold - prosperity
          700: "#B8942A", // Darker gold
          800: "#94751F", // Very dark gold
          900: "#6B5416", // Darkest gold
          DEFAULT: "#D4AF37", // Primary gold
        },
        accent: {
          50: "#FDF9F5", // Very light brown
          100: "#FAF1E8", // Light brown
          200: "#F4E1CC", // Lighter brown
          300: "#EBCAA5", // Medium light brown
          400: "#DFB072", // Medium brown
          500: "#D19B58", // Base brown variant
          600: "#CD853F", // Primary accent brown - sandalwood
          700: "#B06F2F", // Darker brown
          800: "#8F5A22", // Very dark brown
          900: "#654118", // Darkest brown
          DEFAULT: "#CD853F", // Primary accent brown
        },
        background: "#FFF8F0", // Warm ivory
        surface: "#FFFFFF", // Pure white
        text: {
          primary: "#2C1810", // Dark brown
          secondary: "#6B4E3D", // Medium brown
        },
        success: {
          50: "#F0FDF0", // Very light green
          100: "#DCFCE7", // Light green
          200: "#BBF7D0", // Lighter green
          300: "#86EFAC", // Medium light green
          400: "#4ADE80", // Medium green
          500: "#22C55E", // Base green variant
          600: "#228B22", // Primary success green - forest green
          700: "#15803D", // Darker green
          800: "#166534", // Very dark green
          900: "#14532D", // Darkest green
          DEFAULT: "#228B22", // Primary success green
        },
        warning: {
          50: "#FFFBEB", // Very light orange
          100: "#FEF3C7", // Light orange
          200: "#FDE68A", // Lighter orange
          300: "#FCD34D", // Medium light orange
          400: "#FBBF24", // Medium orange
          500: "#F59E0B", // Base orange variant
          600: "#FF8C00", // Primary warning orange - warm orange
          700: "#D97706", // Darker orange
          800: "#B45309", // Very dark orange
          900: "#92400E", // Darkest orange
          DEFAULT: "#FF8C00", // Primary warning orange
        },
        error: {
          50: "#FEF2F2", // Very light red
          100: "#FEE2E2", // Light red
          200: "#FECACA", // Lighter red
          300: "#FCA5A5", // Medium light red
          400: "#F87171", // Medium red
          500: "#EF4444", // Base red variant
          600: "#DC143C", // Primary error red - crimson red
          700: "#B91C1C", // Darker red
          800: "#991B1B", // Very dark red
          900: "#7F1D1D", // Darkest red
          DEFAULT: "#DC143C", // Primary error red
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Headings - multilingual support
        inter: ['Inter', 'sans-serif'], // Body - screen optimized
        nunito: ['Nunito Sans', 'sans-serif'], // Captions - friendly
        mono: ['JetBrains Mono', 'monospace'], // Data - consistent spacing
        sans: ['Inter', 'sans-serif'], // Default sans
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 12px rgba(139, 38, 53, 0.1)',
        'warm-lg': '0 8px 24px rgba(139, 38, 53, 0.1)',
        'gold': '0 4px 12px rgba(212, 175, 55, 0.1)',
        'brown': '0 4px 12px rgba(205, 133, 63, 0.1)',
        'elevation-1': '0 2px 8px rgba(139, 38, 53, 0.1)',
        'elevation-2': '0 4px 12px rgba(139, 38, 53, 0.1)',
        'elevation-3': '0 8px 24px rgba(139, 38, 53, 0.1)',
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'lift-hover': 'lift-hover 200ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        'slide-down': 'slide-down 300ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards',
        'skeleton': 'skeleton-loading 1.5s infinite',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'lift-hover': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        'slide-down': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0px)' 
          },
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
      transitionTimingFunction: {
        'heritage': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },
        '.skeleton': {
          background: 'linear-gradient(90deg, #FFF8F0 25%, #F4E1CC 50%, #FFF8F0 75%)',
          backgroundSize: '200px 100%',
          animation: 'skeleton-loading 1.5s infinite',
        },
        '.grid-auto-fit': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        },
        '.grid-auto-fill': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}