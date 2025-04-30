// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let length = parseInt(document.getElementById('length-of-triangle').value);
  let width = parseInt(document.getElementById('width-of-triangle').value);
  let height = parseInt(document.getElementById('height-of-triangle').value);
  // process
  let volume = (length * width) / 2;

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm²'

}
