```sh
git clone https://github.com/dkarmalita/template-react.git
npx ./scripts/app-init.sh
# npx ./scripts/app-clean.sh
```

**clone with submodules**
```sh
git clone --recurse-submodules -j8 https://github.com/dkarmalita/kard-react-toaster.git
cd devapp-react-form-engine
npm i
```

**install submodules of clonned (earlier) repository**
```sh
git submodule init && git submodule update
```

* react@^16.5.2,
* webpack@4, 
* babel@7
* sass (scss) support
* jest@^23.6.0

* @kard/react-store
