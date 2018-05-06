# ConFusion

ConFusion is a Website written in Angular for the fictional restaurant "ConFusion" as part of the course "Front-End JavaScript Frameworks: Angular" on Coursera. The Website includes a json-server, where asynchronous requests are made to fetch and display the current menu, special promotions and leaders of the restaurant. Furthermore, it is possible to write comments for the different menus and send feedback via a contact form. The Website has 4 pages in total: Home, About, Menu and Contact, which are designed with Angular Material.

## Installation

NodeJS and the Node Package Manager are necessary to use the code.

To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.

To checkout the code locally, just clone the repository:
`git clone https://github.com/sjaindl/confusion.git`

Then, navigate to the project directory and run 
`npm install`
to install the dependencies from package.json locally on your computer.

## Usage

To start the json-server run the following command:
`json-server --watch db.json`

Finally, you can start the Website with the following command:
`ng serve —open`

This will automatically open the Website in your default browser.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributions

You are welcome to contribute to this project. Just open a Pull Request, if you have a new feature or a bug fix and it will be reviewed.

## Licence

This project is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version when it becomes available. You can find the licence on https://www.gnu.org/licenses/gpl-3.0.en.html.
