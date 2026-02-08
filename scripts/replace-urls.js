const fs = require('fs');
const path = require('path');

// Charger les mappings URL
const mappings = require('./url-mappings.json');

// Dossiers à traiter
const foldersToProcess = [
  path.join(__dirname, '../app'),
  path.join(__dirname, '../components'),
  path.join(__dirname, '../lib')
];

// Extensions de fichiers à traiter
const fileExtensions = ['.tsx', '.ts', '.js', '.jsx'];

function replaceUrlsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Remplacer chaque mapping
    Object.entries(mappings).forEach(([localPath, cloudinaryUrl]) => {
      // Chercher les occurrences avec guillemets simples et doubles
      const patterns = [
        `"${localPath}"`,
        `'${localPath}'`,
        `\`${localPath}\``,
        `src="${localPath}"`,
        `src='${localPath}'`,
        `href="${localPath}"`,
        `href='${localPath}'`
      ];

      patterns.forEach(pattern => {
        if (content.includes(pattern)) {
          const replacement = pattern.replace(localPath, cloudinaryUrl);
          content = content.replace(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
          hasChanges = true;
        }
      });
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }

  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      processDirectory(itemPath);
    } else if (stat.isFile() && fileExtensions.includes(path.extname(item))) {
      replaceUrlsInFile(itemPath);
    }
  });
}

console.log('🔄 Remplacement des URLs locales par les URLs Cloudinary...\n');

let totalUpdated = 0;
foldersToProcess.forEach(folder => {
  console.log(`📁 Processing ${path.relative(process.cwd(), folder)}/`);
  processDirectory(folder);
});

console.log(`\n🎉 Remplacement terminé!`);
console.log(`📊 ${Object.keys(mappings).length} mappings disponibles`);
