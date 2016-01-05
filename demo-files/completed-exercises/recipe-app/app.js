(function(){

  angular
    .module('recipeApp', [])

    .controller('RecipeListCtrl', function(highlightRecipe, $timeout){
      // for Exercise 2, with a single object
      this.recipe = {
        name: 'Oatmeal',
        cookTime: 10,
        prepTime: 2,
        ingredients: ['oats', 'water', 'maple syrup'],
        directions: "Boil the oats in water and add maple syrup to taste",
        isVegan: true,
        isPaleo: false,
        isGlutenFree: true
      };

      // for Exercise 3, with an array of objects
      this.recipes = [
        {
          name: 'Oatmeal',
          cookTime: 10,
          prepTime: 2,
          ingredients: ['oats', 'water', 'maple syrup'],
          directions: "Boil the oats in water and add maple syrup to taste",
          isVegan: true,
          isPaleo: false,
          isGlutenFree: true
        },
        {
          name: 'Waffles',
          cookTime: 9,
          prepTime: 10,
          ingredients: ['flour', 'water', 'sugar', 'vanilla'],
          directions: "Mix everything together in a bowl with a whisk. Use a waffle press to make your waffles!",
          isVegan: false,
          isPaleo: true,
          isGlutenFree: false
        },
        {
          name: 'Fruit Salad',
          cookTime: 0,
          prepTime: 10,
          ingredients: ['apples', 'oranges', 'grapes', 'watermelon'],
          directions: "Chop the fruit and mix together in a bowl",
          isVegan: true,
          isPaleo: true,
          isGlutenFree: true
        }
      ];

      // for Exercise 4
      $timeout(function() {
        this.recipeCount = this.recipes.length;
      }.bind(this), 3000);

      // for Exercise 5
      this.showDetails = function(index) {
        highlightRecipe.setHighlighted(this.recipes[index]);
      };
    })

    // for Exercises 5 & 6
    .controller('RecipeDetailsCtrl', ['$scope', 'highlightRecipe', function($scope, highlightRecipe) {
      var vm = this;

      vm.selectedRecipe = highlightRecipe.getHighlighted();

      $scope.$watch(function() {
        return highlightRecipe.getHighlighted();
      }, function(newVal) {
        vm.selectedRecipe = newVal;
      });
    }])

    // for Exercise 5
    .factory('highlightRecipe', function() {
      var highlightedRecipe = null;

      function setHighlighted(recipe) {
        highlightedRecipe = recipe;
      }

      function getHighlighted() {
        return highlightedRecipe;
      }

      return {
        setHighlighted: setHighlighted,
        getHighlighted: getHighlighted
      };
    });
})();