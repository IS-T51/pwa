// Change this to your repository name
var GHPATH = '/pwa';
 
// Choose a different app prefix name
var APP_PREFIX = 'pwae_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
var VERSION = 'version_002';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/img/96x96.png`,
  `${GHPATH}/img/512x512.png`
]