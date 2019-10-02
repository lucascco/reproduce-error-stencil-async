## About error
When use plugin of capacitor, always that I call the @Method async, the error `__awaiter_1 is not defined` happen.

## To reproduce
1 - Install docker in your machine.

2 - Using prompt command go into folder *wordpress* and type `docker-compose up -d --build`

3 - Using prompt command go into folder *text-async-wp* and type `npm i && npm run build`

4 - Copy all files from *text-async-wp/dist* to *wordpress/wp/wp-content/themes/wcstencil/scripts/stencil/*

5 - Open your browser type *localhost:8080*, do default configurations to start a basic wordpress site.

6 - Login in to dashboard, go to *Appearence/Themes*, click in Activate on theme *TestAsyncWp*.

7 - Open your browser with *console of inspect* and type *localhost:8080* to see the error happened.