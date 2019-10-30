# Project Introduction:

Principle objective of this project is to let end user search books from available catalouge. The end user can add book into the cart to proceed further with the purchasing or the end user can add book to his/her wishlist.  Once end user proceeed with the checkout depending upon the offers available best possible offer will be applied and the end user will get the maximum discount on the purchase.  

## Architecture: 

This project is developped using the NGRX/Store, which is nothing but the MVVM/Flux design pattern implementation. Following is an diagrame for this implementation. 

![image](https://user-images.githubusercontent.com/45754665/67839324-ac867280-faf3-11e9-90d1-95d9cfcf1b29.png)

The main purpose of this pattern is to provide a predictable state container, based on bolow three main principles
   * Single Source of Truth. (we call it Store)
   * Read-only state. (to avoid mutation of any sort of data in the Store)
   * Chages made throug the Pure Functions only. (these pure functions are nothing but the Reducers-Actions)

Detailed architecture explaination can be found here : 
   * https://ngrx.io/guide/store
   * https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc
   
   
## Project Setup
   * Clone from : https://github.com/Niraj0701/project_test.git
   * Next step is to go to the directory and hit `npm install` command to install all the dependencies.
   * After that to launch the project hit the commande `ng serve` to start dev server. 
   * Navigate to `http://localhost:4200/` (or to specified port). 
   * The app will automatically reload if you change any of the source files.

## Code scaffolding
   * This project is generated using `ng cli`
   * To generate new components or any kind of angular sub modules `ng` commande can be used. For example 
      `ng generate component component-name` to generate a new component. 
   * Comand details: `ng generate directive|pipe|service|class|guard|interface|enum|module`.
   * Referecne: https://cli.angular.io/

## Prod Build
   * Use `ng build` command to build the project. 
   * The final build of the project can be found in `dist/` directory. 
   * To build the project ready for the production use `--prod` flag of `ng cli`.

## Running unit tests
   * To run the unite test hit `ng test` to execute the unit tests.
   * In the repository sample unit tests can be found here: `src/app/reducers/tests/`
   * for more details about unit tests refere: https://karma-runner.github.io
