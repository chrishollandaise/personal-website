// /scripts/replaceAssetPaths.js

// all .md files in this directory and subdirectories will be processed
const postsDirectory = '/src/content/blog/'

// Find and replace strings
const find = '/src/assets/'
let replace = '../../assets/' // update this path based on where files are located

replace = replace.replaceAll('.', '\\.')
// Special characters (https://en.wikipedia.org/wiki/Regular_expression#POSIX_basic_and_extended) need to be escaped

import { exec } from 'child_process'
// execute bash command
exec(
  `find ${process.cwd()}${postsDirectory} -type f -name '*.md' -print0 | xargs -0 sed -i -e 's:${find}:${replace}:g'`,
  // GNU sed that runs on Linux but not on mac
  (error, stdout, stderr) => {
    // error handling
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    // success
    console.log(stdout)
    console.log('🖼️ Successfully replaced asset paths')
  }
)
