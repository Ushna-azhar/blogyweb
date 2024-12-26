/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		animation: {
		  'fade-in': 'fadeIn 1s ease-in-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		},
		typography: {
		  DEFAULT: {
			css: {
			  color: 'hsl(var(--foreground))',
			  a: {
				color: 'hsl(var(--primary))',
				textDecoration: 'none',
				'&:hover': {
				  color: 'hsl(var(--primary-foreground))',
				  textDecoration: 'underline',
				},
			  },
			  h1: {
				color: 'hsl(var(--primary))',
				fontWeight: '700',
			  },
			  h2: {
				color: 'hsl(var(--secondary))',
				fontWeight: '600',
			  },
			  blockquote: {
				color: 'hsl(var(--muted))',
				borderLeftColor: 'hsl(var(--secondary))',
			  },
			  code: {
				backgroundColor: 'hsl(var(--card))',
				color: 'hsl(var(--primary))',
				borderRadius: 'var(--radius)',
				padding: '0.25rem 0.5rem',
			  },
			},
		  },
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require("@tailwindcss/typography"),
	],
  };
  