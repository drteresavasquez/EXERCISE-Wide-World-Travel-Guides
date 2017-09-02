"use strict";
console.log("Guides crtl, yo!");

app.controller("BookCtrl", function ($scope, BookDirectory) {
    BookDirectory.getGuides()
        .then(function (guideCollection) {
            let guideArray = [];
            let guides = Object.keys(guideCollection);
            guides.forEach((item) => {
                guideArray.push(guideCollection[item]);
            });
            console.log("guideArray", guideArray);
            $scope.guides = guideArray;
        });

});