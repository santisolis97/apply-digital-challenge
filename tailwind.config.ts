import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '22': '22px',
      },
      screens: {
        'desktop-xl': '1280px',
        'desktop-3xl': '1920px',
        mobile: '327px',
        'mobile-xl': '702px',
      },
      colors: {
        'surface-secondary': '#EEEEEE',
        'stroke-secondary': '#8F8F8F',
        'icon-active': '#585660',
        'neutral-700': '#404040',
        'neutral-500': '#737373',
        'cta-fill-primary': '#585660',
        'cta-hover-fill-primary': '#696673',
        'cta-content-secondary': '#3B3B3B',
        'cta-stroke-primary': '#3B3B3B',
        'text-item-fill': '#3B3B3B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
