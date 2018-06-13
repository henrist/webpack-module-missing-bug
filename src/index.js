import '../example'

import('./lazy').then(() => console.log('got lazy module'))

console.log('seems it works if you see this!')
