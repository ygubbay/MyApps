import { Calculator } from './calc';

require('bootstrap')

$(function () {

	var calculator = new Calculator();
	calculator.renderPage();
});

