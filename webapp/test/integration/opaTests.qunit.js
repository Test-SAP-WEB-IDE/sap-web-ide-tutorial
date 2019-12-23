/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GIT_Test/GIT_Test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});