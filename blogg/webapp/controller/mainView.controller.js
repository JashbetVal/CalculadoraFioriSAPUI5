sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast ) {
        "use strict";

        return Controller.extend("blogg.controller.mainView", {
           
            onInit: function () {
            console.log("HOLA");
            
           
            },//Fin de onInit
            
            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
                console.log("QUE ONDAAAAAAAAAAA");
                var num1 = documento.getElementById("input0");
                console.log(num1.value);
                
         
            },  //Fin de on Press
        });
    }
);

