'use strict';

describe('Controller: LandingCtrl', function () {

    // load the controller's module
    beforeEach(module('tiendaAbarrotesApp'));

    var LandingCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LandingCtrl = $controller('LandingCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should be true', function () {
        expect(1 == 1).toBe(true);
    });
});
