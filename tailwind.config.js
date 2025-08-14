module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        surface1: 'var(--surface-1)',
        surface2: 'var(--surface-2)',
        text1: 'var(--text-1)',
        text2: 'var(--text-2)',
        border: 'var(--border)',
        blog: 'var(--blog-bg)',
        bloghover: 'var(--blog-hover-bg)',
        bloghovertext: 'var(--blog-hover-text)',
      },
      spacing: {
        '0.3': '0.3rem',
        '0.7': '0.7rem',
        '14px': '14px',
        '22px': '22px',
        '450px': '450px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '\'Segoe UI\'',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '\'Open Sans\'',
          '\'Helvetica Neue\'',
          'sans-serif',
        ],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
