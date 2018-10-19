`packages` folder is used to keep uncompiled external sources as submodules or the project parts.

## How to add a submodule to a project



## How to clone a repository with submodules

```sh
mkdir -p packages/@kard
git submodule add https://github.com/dkarmalita/kard-react-store.git packages/@kard/react-store
```

__example__
```sh
git clone --recurse-submodules -j8 https://gitlab.com/Hojyman/devapp-react-form-engine.git
cd devapp-react-form-engine
npm i
```
