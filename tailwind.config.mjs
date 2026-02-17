/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
    	extend: {
    		colors: {
    			bg: {
    				light: '#EEFAFF',
    				'light-50': 'rgba(238, 250, 255, 0.5)',
    				dark: '#090B15',
    				'dark-50': 'rgba(9, 11, 21, 0.5)'
    			},
    			secondary: {
    				light: '#C9CFEC',
    				dark: '#1A2637',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			text: {
    				light: '#16272E',
    				dark: '#EEFAFF'
    			},
    			link: {
    				light: '#6E84EE',
    				dark: '#5479AD'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		spacing: {
    			'default-app': '64px',
    			'small-app': '32px'
    		},
    		transitionTimingFunction: {
    			snappy: 'cubic-bezier(0.16, 1, 0.3, 1)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0',
    					opacity: '0',
    					transform: 'translateY(-0.5rem)'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)',
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)',
    					opacity: '1',
    					transform: 'translateY(0)'
    				},
    				to: {
    					height: '0',
    					opacity: '0',
    					transform: 'translateY(-0.5rem)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
    			'accordion-up': 'accordion-up 0.24s cubic-bezier(0.16, 1, 0.3, 1)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
