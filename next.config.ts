import nextra from 'nextra'

const withNextra = nextra({
  latex: true
})

export default withNextra({
  output: 'export',
  basePath: '/docs',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
})