<a href="http://triazur.com"><img style="width:55px;height:55px" width="100" height="100" src="https://www.triazur.com/static/TriAzurIcon-40ace683b384504022a625add24052b7.png?v=3&s=50" title="Triazur" alt="Triazur"></a>

# TRIAZUR_PLUGIN

> This project let you write and publish your own triazur plugin applications, when it's done you could share it in triazur app store  

> Contribute to expand the futur !

---

***DEMO***

- Use <a href="http://recordit.co/" target="_blank">**Recordit**</a> to create quicks screencasts of your desktop and export them as `GIF`s.
- For terminal sessions, there's <a href="https://github.com/chjj/ttystudio" target="_blank">**ttystudio**</a> which also supports exporting `GIF`s.

**Recordit**

![Recordit GIF](http://g.recordit.co/iLN6A0vSD8.gif)

**ttystudio**

![ttystudio GIF](https://raw.githubusercontent.com/chjj/ttystudio/master/img/example.gif)

---

## Table of Contents (Optional)

> If you're `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Plugin](#features)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


## Installation

To run this project your need to install :

- The recommended version of NodeJS : https://nodejs.org/en/
- NodeJS package manager : https://www.npmjs.com/get-npm
- Distribued version control system :https://git-scm.com/downloads

### Clone

- Clone this repo to your local machine using `git clone https://gitlab.com/alexis1990/triazur_plugin.git yourownfoldername

### Setup

> now enter into the folder :

```shell
$ cd ./yourownfoldername
$ npm install
$ npm start
```

---

## Plugin

- The only folder you need to modify is myApp so enter into :

```shell
$ cd ./myApp
```

- The project was divided into three folder  :
    
    - **Calculations**
        - Let you write your calcul

    - **Inputs**
        - Let you write and add more input values
    
    - **Outputs**
        - Let you write and add more output values

- To add Input/Output you need to duplicate the HTML tag  :

```html
    <InputElem 
        data={inputsData.b} //Refer to initialState, b key value
        updateValue={updateValue} //Refer to MyApp.jsx method
    />
```

or

```html
    <OutputElem 
        data={inputsData.b}
        updateValue={updateValue}
    />
```

```javascript
let code = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    i++;
  }
};
```

## Publish (Optional)

First install heroku locally :

- Create your heroku account : https://signup.heroku.com/login
- Follow this link to install heroku : https://devcenter.heroku.com/articles/heroku-cli#download-and-install

Use Git to deploy your application to Heroku :

```shell
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
#   Heroku credentials
$ heroku create
$ git push heroku master
#   Launching... done
#      **http://example.herokuapp.com** deployed to Heroku
```

Your app should now be running on **http://example.herokuapp.com**.

## Tests (soon...)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://gitlab.com/alexis1990/triazur_plugin.git`

### Step 2

- **Code** 🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/alexis1990/triazur_plugin/compare/" target="_blank">`https://github.com/alexis1990/triazur_plugin/compare/`</a>.

---

## FAQ

- **Let us know your questions?**
    - No problem! Just do it.

---

## Support

Contact us!

- Website at <a href="http://triazur.com" target="_blank">`triazur.com`</a>
- Email at <a href="mailto:contact@triazur.com" target="_blank">`contact@triazur.com`</a>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://triazur.com" target="_blank">TRIAZUR</a>.