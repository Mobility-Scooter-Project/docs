import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  distDir: 'dist'
})