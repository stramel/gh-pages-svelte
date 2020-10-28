[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/markfirmware/gh-pages-svelte)


    npx create-snowpack app gh-pages --template @snowpack/app-template-svelte
    cd gh-pages
    rm -rf .git
    update snowpack.config.js: buildOptions.out: "../docs"
    npm run build

    git commit ...