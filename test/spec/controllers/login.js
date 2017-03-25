'use strict';

describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('tiendaAbarrotesApp'));

    var LoginCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should be true', function () {
        expect(1 == 1).toBe(true);
    });
});
