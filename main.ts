// Created By: Mariam Abugamga
// Created On: oct, 8, 2020
// this program fins the cost of a pizza using the diameter.
game.splash("Pizza Order")
let LABOUR_COST = 0.75
let RENT = 1
let MATERIALS = 0.5
let GOODS_AND_SERVICES_TAX = 1.13
let diameter_inch_of_pizza = game.askForNumber("Enter the diameter of pizza (inch)")
let pizza = LABOUR_COST + RENT + diameter_inch_of_pizza * MATERIALS
pizza = pizza * GOODS_AND_SERVICES_TAX
game.splash("The cost of the pizza is $" + Math.round(pizza * 100) / 100)
