/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GIT_Test/GIT_Test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});