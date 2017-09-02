"use strict";
console.log("book Factory.js, YO!");

app.factory("BookDirectory", function($q, $http){
    let getGuides = () => {
        return $q ((resolve, reject)=>{
            $http.get('data/guides.json')
            .then((guideObject) =>{
                let guideCollection = guideObject.data;
                console.log("from factory", guideCollection);
                resolve(guideCollection.guides);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getGuides};
});