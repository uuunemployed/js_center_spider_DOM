'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const wallWidht = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidht = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const coordinatesX = (wallWidht - spiderWidht) / 2;
const coordinatesY = (wallHeight - spiderHeight) / 2;

spider.style.top = `${coordinatesX}px`;
spider.style.left = `${coordinatesY}px`;
