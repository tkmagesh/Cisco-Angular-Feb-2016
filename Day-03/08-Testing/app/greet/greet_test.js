describe("myApp.greet Module", function(){
    beforeEach(module("myApp.greet"));

    describe("greetController", function(){
       it("Should initialize name with empty string", inject(function($controller){
           //Arrange
           var dummyScope = {};
           //Act
           $controller('greetController', {$scope : dummyScope});

           //Assert
           expect(dummyScope.name).toBe('');
       }));
       it("Should initialize message with empty string", inject(function($controller){
           //Arrange
           var dummyScope = {};
           //Act
           $controller('greetController', {$scope : dummyScope});

           //Assert
           expect(dummyScope.message).toBe('');
       }));
       it("Should populate message when greeted", inject(function($controller){
           //Arrange
           var dummyScope = {};
           var name = 'Magesh';
           var expectedResult = 'Hi Magesh, Have a nice day!';
           //Act
           $controller('greetController', {$scope : dummyScope});
           dummyScope.name = name;
           dummyScope.greet();
           //Assert
           expect(dummyScope.message).toBe(expectedResult);
       }));
    });
})
