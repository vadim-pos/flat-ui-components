'use strict';

// --- Vendors ---
// jQuery https://jquery.com/
import 'jquery/dist/jquery.min';

// Touch swipe for jQuery
// http://labs.rampinteractive.co.uk/touchSwipe/demos/index.html
import 'jquery-touchswipe/jquery.touchSwipe.min';

// iScroll (one-finger scroll on mobile + scroll styling)
// http://cubiq.org/iscroll-5
import iScroll from 'iscroll/build/iscroll';
window.iScroll = iScroll;

// --- Custom styles ---
import './main.scss';

// --- Flat UI Components ---
import './components/menu-swipe/menu-swipe';
import './components/menu-search/menu-search';
import './components/datepicker/datepicker';
import './components/tabs/tabs';