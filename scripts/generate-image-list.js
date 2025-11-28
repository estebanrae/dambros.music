import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.join(__dirname, '../public/images/gallery')
const outputFile = path.join(__dirname, '../src/utils/imageList.js')

try {
  const files = fs.readdirSync(imagesDir)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.JPG', '.JPEG', '.PNG'].includes(ext)
  })

  const imageListContent = `// Auto-generated list of images in public/images/gallery/
// Run: node scripts/generate-image-list.js to regenerate

export const imageFiles = ${JSON.stringify(imageFiles, null, 2)}
`

  fs.writeFileSync(outputFile, imageListContent)
  console.log(`✅ Generated image list with ${imageFiles.length} images`)
  console.log(`📁 Output: ${outputFile}`)
} catch (error) {
  console.error('❌ Error generating image list:', error.message)
  process.exit(1)
}

