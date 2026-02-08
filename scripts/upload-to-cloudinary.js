const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configuration Cloudinary
cloudinary.config({
  cloud_name: 'dhhdhilja',
  api_key: '773198386645646',
  api_secret: 'I6d8LNAmdDYU5iB_03eJN6nkf9A'
});

const publicDir = path.join(__dirname, '../public');
const urlMappings = {};

// Fonction pour uploader un fichier
async function uploadFile(filePath, fileName) {
  try {
    console.log(`Uploading ${fileName}...`);
    
    const isVideo = fileName.endsWith('.mp4');
    const options = {
      public_id: fileName.replace(/\.[^/.]+$/, ""), // Remove extension
      resource_type: isVideo ? 'video' : 'image',
      folder: 'purrball',
    };

    // Options spéciales pour les vidéos (compression)
    if (isVideo) {
      options.quality = 'auto:good';
      options.format = 'mp4';
      options.video_codec = 'h264';
    } else {
      options.quality = 'auto:good';
      options.format = 'webp';
    }

    const result = await cloudinary.uploader.upload(filePath, options);
    
    const localPath = `/${fileName}`;
    urlMappings[localPath] = result.secure_url;
    
    console.log(`✅ ${fileName} -> ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.message);
    return null;
  }
}

// Fonction principale
async function uploadAllAssets() {
  try {
    const files = fs.readdirSync(publicDir);
    const mediaFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp|avif|mp4|mov)$/i.test(file)
    );

    console.log(`Found ${mediaFiles.length} media files to upload...`);

    for (const file of mediaFiles) {
      const filePath = path.join(publicDir, file);
      await uploadFile(filePath, file);
      
      // Petit délai pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Sauvegarder les mappings
    fs.writeFileSync(
      path.join(__dirname, 'url-mappings.json'),
      JSON.stringify(urlMappings, null, 2)
    );

    console.log('\n🎉 Upload terminé!');
    console.log(`📝 Mappings sauvés dans scripts/url-mappings.json`);
    console.log(`📊 ${Object.keys(urlMappings).length} fichiers uploadés`);

  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

uploadAllAssets();
