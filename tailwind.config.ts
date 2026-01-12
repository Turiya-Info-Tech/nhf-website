import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			warm: {
				DEFAULT: 'hsl(var(--warm))',
				foreground: 'hsl(var(--warm-foreground))'
			},
			teal: {
				DEFAULT: 'hsl(var(--teal))',
				foreground: 'hsl(var(--teal-foreground))'
			},
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			}
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'fade-in': {
				'0%': { opacity: '0', transform: 'translateY(20px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'fade-in-left': {
				'0%': { opacity: '0', transform: 'translateX(-20px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'fade-in-right': {
				'0%': { opacity: '0', transform: 'translateX(20px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'scale-in': {
				'0%': { opacity: '0', transform: 'scale(0.95)' },
				'100%': { opacity: '1', transform: 'scale(1)' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-10px)' }
			},
			'count-up': {
				'0%': { opacity: '0', transform: 'translateY(10px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'shimmer': {
				'0%': { backgroundPosition: '-200% 0' },
				'100%': { backgroundPosition: '200% 0' }
			},
			'glow': {
				'0%, 100%': { boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)' },
				'50%': { boxShadow: '0 0 40px rgba(251, 146, 60, 0.6)' }
			},
			'pulse-glow': {
				'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
				'50%': { opacity: '0.8', transform: 'scale(1.05)' }
			},
			'slide-up': {
				'0%': { opacity: '0', transform: 'translateY(100px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'slide-down': {
				'0%': { opacity: '0', transform: 'translateY(-50px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'zoom-in': {
				'0%': { opacity: '0', transform: 'scale(0.5)' },
				'100%': { opacity: '1', transform: 'scale(1)' }
			},
			'rotate-in': {
				'0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
				'100%': { opacity: '1', transform: 'rotate(0) scale(1)' }
			},
			'blur-in': {
				'0%': { opacity: '0', filter: 'blur(10px)' },
				'100%': { opacity: '1', filter: 'blur(0)' }
			},
			'text-reveal': {
				'0%': { clipPath: 'inset(0 100% 0 0)' },
				'100%': { clipPath: 'inset(0 0 0 0)' }
			},
			'bounce-subtle': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-5px)' }
			},
			'wiggle': {
				'0%, 100%': { transform: 'rotate(-3deg)' },
				'50%': { transform: 'rotate(3deg)' }
			},
			'gradient-x': {
				'0%, 100%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' }
			},
			'morph': {
				'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
				'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
			},
			'ken-burns': {
				'0%': { transform: 'scale(1) translate(0, 0)' },
				'100%': { transform: 'scale(1.1) translate(-2%, -2%)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'fade-in': 'fade-in 0.6s ease-out forwards',
			'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
			'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
			'scale-in': 'scale-in 0.5s ease-out forwards',
			'float': 'float 3s ease-in-out infinite',
			'count-up': 'count-up 0.5s ease-out forwards',
			'shimmer': 'shimmer 2s linear infinite',
			'glow': 'glow 2s ease-in-out infinite',
			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
			'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'slide-down': 'slide-down 0.6s ease-out forwards',
			'zoom-in': 'zoom-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'rotate-in': 'rotate-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'blur-in': 'blur-in 0.8s ease-out forwards',
			'text-reveal': 'text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
			'wiggle': 'wiggle 1s ease-in-out infinite',
			'gradient-x': 'gradient-x 3s ease infinite',
			'morph': 'morph 8s ease-in-out infinite',
			'ken-burns': 'ken-burns 20s ease-out forwards'
		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'Noto Sans',
  				'sans-serif'
  			],
  			serif: [
  				'Lora',
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'Space Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
