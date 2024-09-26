import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {withMT} from "@material-tailwind/html/utils/withMT";
import { selectors } from 'sizzle';

@Component({
    selector: 'app-root',
   standalone: true,
   template: `
    Hello world!
  `,
})
export class main{}

bootstrapApplication(main);
 
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: ["./index.html",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  });