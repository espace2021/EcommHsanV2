/** @type {import('next').NextConfig} */
const nextConfig = {
    secret: process.env.AUTH_SECRET,
    images:{
        domains:["firebasestorage.googleapis.com","res.cloudinary.com","i.ibb.co","www.sauvaje.fr","jardipartage.bcdn.net","meubletunisie.tn","a.cyphoma.net","sp-ao.shortpixel.ai","www.commechez-vous.fr","www.rona.ca","www.jardinsdenuit.fr","www.lamaison.tn","www.electrochaabani.com","fr.vidaxl.ch"]
        },
        env: {
            API_URL: "http://localhost:3001",
            NEXTAUTH_SECRET :"bonjour"
            
        },
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
          } 
}

module.exports = nextConfig
