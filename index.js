'use strict';

//--------------------------------Recipes---------------------------------------

var recipes = [{
    name: "cake",
    description: "This is a cake, the cake is a lie",
	servingSize: "4",
	lengthToMake: "60",
	recipeReview: "4",
	ingredients: [
	    {
	        name: "white sugar",
	        quantity: "1",
	        measurement: "cup"
	    },
	    {
		    name: "butter",
		    quantity: "1/2",
		    measurement: "cup"
		},
		{
		    name: "eggs",
		    quantity: "2",
		    measurement: ""
		},
		{
		    name: "vanilla extract",
		    quantity: "2",
		    measurement: "teaspoons"
		},
		{
		    name: "all purpose flour",
		    quantity: "1 1/2",
		    measurement: "cups"
		},
		{
		    name: "baking powder",
		    quantity: "1 3/4",
		    measurement: "teaspoons"
		},
		{
		    name: "milk",
		    quantity: "1/2",
		    measurement: "cup"
		}
	],
	instruction: {
	    prepTime: "20",
	    steps: [
	        {step: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."},
	        {step: "In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla."},
	        {step: "Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan."},
	        {step: "Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch."}
	   ]}
	},
    {
    name: "lasagna",
	description: "This is a lasagna",
	servingSize: "4",
	lengthToMake: "65",
	recipeReview: "4.3",
	ingredients: [
	    {
	        name: "whole wheat lasagna noodles",
			quantity: "12",
			measurement: ""
	    },
	    {
	        name: "lean ground beef",
	        quantity: "1",
	        measurement: "pound"
	    },
	    {
	        name: "cloves garlic",
	        quantity: "2",
	        measurement: ""
	    },
	    {
	        name: "garlic powder",
	        quantity: "2",
	        measurement: ""
	    },
	    {
	        name: "cottage cheese",
	        quantity: "1/2",
	        measurement: "teaspoon"
	    },
	    {
	        name: "eggs",
	        quantity: "2",
	        measurement: ""
	    },
	    {
	        name: "parmesan cheese",
	        quantity: "1/2",
	        measurement: "cup"
	    },
	    {
	        name: "tomato-basil pasta sauce",
	        quantity: "25",
	        measurement: "ounces"
	    },
	    {
	        name: "dried oregano",
	        quantity: "1",
	        measurement: "teaspoon"
	    },
	    {
	        name: "shredded mozzarella cheese",
	        quantity: "2",
	        measurement: "cups"
	    }
	],
	instruction: {
	    prepTime: "25",
	    steps: [
	        {step: "Preheat oven to 350 degrees F (175 degrees C)."},
	        {step: "Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, add the lasagna noodles a few at a time, and return to a boil."},
	        {step: "Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 10 minutes. Remove the noodles to a plate."},
	        {step: "Place the ground beef into a skillet over medium heat, add the garlic, garlic powder, oregano, salt, and black pepper to the skillet."},
	        {step: "Cook the meat, chopping it into small chunks as it cooks, until no longer pink, about 10 minutes. Drain excess grease."},
	        {step: "In a bowl, mix the cottage cheese, eggs, and Parmesan cheese until thoroughly combined."},
	        {step: "Place 4 noodles side by side into the bottom of a 9x13-inch baking pan; top with a layer of the tomato-basil sauce, a layer of ground beef mixture, and a layer of the cottage cheese mixture. Repeat layers twice more, ending with a layer of sauce; sprinkle top with the mozzarella cheese. Cover the dish with aluminum foil."},
	        {step: "Bake in the preheated oven until the casserole is bubbling and the cheese has melted, about 30 minutes. Remove foil and bake until cheese has begun to brown, about 10 more minutes. Allow to stand at least 10 minutes before serving."}
	   ]}
	},
    {
        name: "pizza",
        description: "This pizza is better than what you can get at Chuck e' Cheese.",
        servingSize: "2",
        lengthToMake: "45",
        recipeReview: "4.4",
        ingredients: [
            {
                name: "tomato paste",
                quantity: "12",
                measurement: "ounces"
            },
            {
                name: "dried oregano",
                quantity: "1",
                measurement: "teaspoon"
            },
            {
                name: "dried basil",
                quantity: "1",
                measurement: "teaspoon"
            },
            {
                name: "all-purpose flour",
                quantity: "3 1/4",
                measurement: "cups"
            },
            {
                name: "pizza crust",
                quantity: "1",
                measurement: ""
            },
            {
                name: "warm water",
                quantity: "1 1/3",
                measurement: "cups"
            },
            {
                name: "oil",
                quantity: "1/3",
                measurement: "cup"
            },
            {
                name: "pepperoni",
                quantity: "6",
                measurement: "ounces"
            },
            {
                name: "mozzarella cheese",
                quantity: "1",
                measurement: "cup"
            }
        ],
        instruction: {
            prepTime: "10",
            steps: [
                {step: "For sauce: Combine all sauce ingredients with 1/2 cup water in a medium bowl; set aside for flavors to develop while making crust. Freeze remaining paste ."},
                {step: "For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. Add the water and oil and mix until well blended (about 1 minute). Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed."},
                {step: "Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.)"},
                {step: "Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans."},
                {step: "For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese."},
                {step: "Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, rotate pizza pans between top and bottom oven racks halfway through baking."}
            ]
        }
    }
];

//--------------------------------Handlers--------------------------------------

exports.handler = function (event, context, callback) {
    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);
        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }
        
        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request, event.session, (sessionAttributes, speechletResponse) => {
                callback(null, buildResponse(sessionAttributes, speechletResponse));
            });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request, event.session, (sessionAttributes, speechletResponse) => {
                callback(null, buildResponse(sessionAttributes, speechletResponse));
            });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}

//----------------------------Session Attributes--------------------------------

function createFavoriteFoodAttributes(favoriteFood) {
    return {
        favoriteFood,
    };
}

function createCurrentRecipeAttributes(currentRecipe){
    return{
        currentRecipe,
    };
}

function createStepIndexAttribute(stepIndex){
    return{
        stepIndex,
    };
}

//-----------------------------------Functions----------------------------------

function getWelcomeResponse(callback) {
	const sessionAttributes = {};
	const cardTitle = 'Welcome';
	const outputSpeech = 'Welcome to Home Chef.' + ' You may tell me to search for a recipe by saying find me a recipe for cake.';
	const repromptText = 'Please tell me your favorite food by saying, ' + 'my favorite food is dessert, or search for a recipe by saying find me a recipe for cake.';
	const shouldEndSession = false;
	
	callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function handleSessionEndRequest(callback) {
	const cardTitle = 'Session Ended';
	const outputSpeech = 'Thank you for using Home Chef. Goodbye!';
	const shouldEndSession = true;
	
	callback({}, buildSpeechletResponse(cardTitle, outputSpeech, null, shouldEndSession));
}

function setFoodInSession(intent, session, callback) {
	const cardTitle = intent.name;
	const favoriteFoodSlot = intent.slots.favoriteFood;
	let repromptText = '';
	let sessionAttributes = {};
	const shouldEndSession = false;
	let outputSpeech = '';
	
	if (favoriteFoodSlot){
		const favoriteFood = favoriteFoodSlot.value;
		sessionAttributes = createFavoriteFoodAttributes(favoriteFood);
		outputSpeech = `I now know your favorite food is ${favoriteFood}. You can ask me ` + "your favorite food by saying what's my favorite food?";
		repromptText = "You can ask me your favorite food by saying, what's my favorite food?";
	} else {
		outputSpeech = "I'm not sure what your favorite food is. Please try again.";
		repromptText = "I'm not sure what your favorite food is. You can tell me your " + 'favorite food by saying, my favorite food is dessert';
	}
	callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getFoodFromSession(intent, session, callback){
	let favoriteFood;
	const repromptText = null;
	const sessionAttributes = {};
	let shouldEndSession = false;
	let outputSpeech = '';
	
	if (session.attributes){
		favoriteFood = session.attributes.favoriteFood;
	}
	
	if (favoriteFood) {
		outputSpeech = `Your favorite food is ${favoriteFood}. Goodbye.`;
		shouldEndSession = true;
	} else {
		outputSpeech = "I'm not sure what your favorite food is, you can say, my favorite food " + 'is dessert';
	}
	callback(sessionAttributes, buildSpeechletResponse(intent.name, outputSpeech, repromptText, shouldEndSession));
}

function getBasicSearch(intent, session, callback){
    const sessionAttributes = {};
    const cardTitle ='Search';
    const outputSpeech = 'What type of recipe would you like to search for? ' + `You can say find me a recipe for cake.`;
    const repromptText = `Please tell me what recipe you are looking for. You can say ` + `find a recipe for cake.`;
    const shouldEndSession = false;
    
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getRecipes(intent, session, callback) {
    const cardTitle = intent.name;
    const recipeSearchSlot = intent.slots.currentRecipe;
    let repromptText = '';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let outputSpeech = '';
    let recipe = [];
    
    if(recipeSearchSlot){
        const currentRecipe = recipeSearchSlot.value;
        recipe = giveRecipeInformation(currentRecipe);
        sessionAttributes = createCurrentRecipeAttributes(currentRecipe);
        outputSpeech = `I have found a recipe for ` + recipe.name + `. It has an average rating of ` + recipe.recipeReview + ` out of 5 stars and should take about ` + recipe.lengthToMake + ` minutes to make.`;
        repromptText = `You can say get description or get ingredients for additional information for ` + recipe.name + `.`;
    } else {
        outputSpeech = "I could not find that recipe. Please try another type of recipe.";
        repromptText = "You can ask me to find another recipe by saying " + `find me a recipe for cake.`;
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getDescription(intent, session, callback){
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} Description`;
    let repromptText = '';
    let sessionAttributes = {currentRecipe};
    const shouldEndSession = false;
    let outputSpeech = '';
    const recipe = giveRecipeInformation(currentRecipe);
    
    if (recipe !== false){
        outputSpeech = `It will serve ` + recipe.servingSize + ` people. The prep time is about ` + recipe.instruction.prepTime + ` minutes, and the description is ` + recipe.description + `.`;
        repromptText = `You can search for a new recipe by saying, find me a recipe for lasagna, or begin cooking by saying, lets begin.`;
    } else {
        outputSpeech = "I'm not sure what recipe you are looking for, you can say find me a cake recipe.";
        repromptText = "You can search for a new recipe by saying, find me a recipe for lasagna";
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getIngredient(intent, session, callback){
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} Ingredients`;
    let repromptText = '';
    let sessionAttributes = {currentRecipe};
    const shouldEndSession = false;
    let outputSpeech = '';
    const recipe = giveRecipeInformation(currentRecipe);
    let ingredients = [];
    
    if(recipe !== false){
        ingredients = giveIngredients(recipe);
        outputSpeech = `The ingredients for ` + recipe.name + ` are` + ingredients;
        repromptText = `You can say get description to get more information about ` + recipe.name + `, or you can say begin cooking to start cooking`;
    } else {
        outputSpeech = "I'm not sure what recipe you are looking for, you can say find me a cake recipe.";
        repromptText = "You can search for a new recipe by saying, find me a recipe for lasagna";
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getInstructions (intent, session, callback){
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} Instructions`;
    let repromptText = '';
    let outputSpeech = '';
    const shouldEndSession = false;
    const recipe = giveRecipeInformation(currentRecipe);
    var stepIndex;
    
    if (session.attributes.stepIndex === undefined){
        stepIndex = 0;
        createStepIndexAttribute(stepIndex);
    }
    
    var step = ``;
    let sessionAttributes = {currentRecipe, stepIndex};
    
    if(recipe !== false){
        step = giveInstructions(recipe, stepIndex);
        outputSpeech = step;
        repromptText = step;
    } else {
        outputSpeech = "I'm not sure what recipe your are looking for, you can say find me a cake recipe.";
        repromptText = outputSpeech;
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));  
}

function thankEveryone(intent, session, callback){
    const cardTitle = intent.name;
    let sessionAttributes = {};
    const outputSpeech = 'Thank you all for coming and we hope we did not bore you too much! Have a great rest of your day.';
    const repromptText = 'Thank you all for coming and we hope we did not bore you too much! Have a great rest of your day.';
    const shouldEndSession = true;
    
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function helpTheUser(intent, session, callback) {
    var speechText = "You can ask for different recipes. " +
        "For example, find a recipe for cake, or you can say exit. " +
        "Now, what can I help you with?";
    var repromptText = "<speak> I'm sorry I didn't understand that. You can say things like, " +
        "find recipe for cake <break time=\"0.2s\" /> " +
        "look for a lasagna recipe <break time=\"0.2s\" /> " +
        "Or you can say exit. " +
        "Now, what can I help you with? </speak>";

    var outputSpeech = speechText;
    var repromptOutput = repromptText;
    callback(outputSpeech, repromptOutput);
}

//----------------------------------SEARCH--------------------------------------

function giveRecipeInformation(currentRecipe){
    for (var i = 0; i < recipes.length; i++){
        if (recipes[i].name === currentRecipe){
            return recipes[i];
        }
    }
}

function giveIngredients(recipe){
    let ingredients = [];
    for (var i = 0; i < recipe.ingredients.length; i++){
        if (recipe.ingredients[i].name !== null){
            ingredients.push(` ` + recipe.ingredients[i].quantity + ` ` + recipe.ingredients[i].measurement + ` ` + recipe.ingredients[i].name);
        }
    }
    return ingredients;
}

function giveInstructions(recipe, stepIndex){
    var step = recipe.instruction.steps[stepIndex].step;
    return step;
}

//-----------------------------INSTRUCTIONS-------------------------------------

function getNextStep (intent, session, callback){
    const stepIndex = session.attributes.stepIndex+1;
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} step: ${stepIndex+1}`;
    let repromptText = '';
    let outputSpeech = '';
    const shouldEndSession = false;
    const recipe = giveRecipeInformation(currentRecipe);
    var step = giveInstructions(recipe, stepIndex);
    let sessionAttributes = {currentRecipe, stepIndex};
    
    if(step !== null || step !== undefined){
        outputSpeech = step;
        repromptText = step;
    } else if (step === undefined) {
        outputSpeech = "There are no more steps for this recipe.";
        repromptText = "You may search for a different recipe by saying, find me a recipe for pizza.";
    } else {
        outputSpeech = "I am not sure what recipe you are looking for, you can say find me a recipe for cake.";
        repromptText = outputSpeech;
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getRepeatStep (intent, session, callback){
    const stepIndex = session.attributes.stepIndex;
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} step: ${stepIndex+1}`;
    let repromptText = '';
    let outputSpeech = '';
    const shouldEndSession = false;
    const recipe = giveRecipeInformation(currentRecipe);
    var step = giveInstructions(recipe, stepIndex);
    let sessionAttributes = {currentRecipe, stepIndex};
    
    if(step !== null || step !== undefined){
        outputSpeech = step;
        repromptText = step;
    } else if (step === undefined) {
        outputSpeech = "There are no more steps for this recipe.";
        repromptText = "You may search for a different recipe by saying, find me a recipe for pizza.";
    } else {
        outputSpeech = "I am not sure what recipe you are looking for, you can say find me a recipe for cake.";
        repromptText = outputSpeech;
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

function getPreviousStep(intent, session, callback){
    const stepIndex = session.attributes.stepIndex-1;
    const currentRecipe = session.attributes.currentRecipe;
    const cardTitle = `${currentRecipe} step: ${stepIndex}`;
    let repromptText = '';
    let outputSpeech = '';
    const shouldEndSession = false;
    const recipe = giveRecipeInformation(currentRecipe);
    var step = giveInstructions(recipe, stepIndex);
    let sessionAttributes = {currentRecipe, stepIndex};
    
    if(step !== null || step !== undefined){
        outputSpeech = step;
        repromptText = step;
    } else if (step === undefined) {
        outputSpeech = "There are no more steps for this recipe.";
        repromptText = "You may search for a different recipe by saying, find me a recipe for pizza.";
    } else {
        outputSpeech = "I am not sure what recipe you are looking for, you can say find me a recipe for cake.";
        repromptText = outputSpeech;
    }
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, outputSpeech, repromptText, shouldEndSession));
}

//----------------------------------EVENTS--------------------------------------

function onSessionStarted(sessionStartedRequest, session){
	console.log(`onSessionStarted requestID=${sessionStartedRequest.requestID}, sessionID=${session.sessionID}`);
}

function onLaunch(launchRequest, session, callback) {
	console.log(`onLaunch requestID=${launchRequest.requestID}, sessionID=${session.sessionID}`);
	getWelcomeResponse(callback);
}

function onIntent(intentRequest, session, callback) {
	console.log(`onIntent requestID=${intentRequest.requestID}, sessionID=${session.sessionID}`);
	
	const intent = intentRequest.intent;
	const intentName = intentRequest.intent.name;
	
	if (intentName === 'SearchIntent'){
		getRecipes(intent, session, callback);
	} else if (intentName === 'BasicSearchIntent'){
	    getBasicSearch(intent, session, callback);
	} else if (intentName === 'MyFoodIsIntent'){
	    setFoodInSession(intent, session, callback);
	} else if (intentName === 'WhatsMyFoodIntent'){
	    getFoodFromSession(intent, session, callback);
	} else if (intentName === 'GetDescriptionIntent'){
	    getDescription(intent, session, callback);
	} else if (intentName === 'GetIngredientIntent'){
	    getIngredient(intent, session, callback);
	} else if (intentName === 'BeginCookingIntent'){
	    getInstructions(intent, session, callback);
	} else if (intentName === 'AMAZON.NextIntent'){
	    getNextStep(intent, session, callback);
	} else if (intentName === 'AMAZON.RepeatIntent'){
	    getRepeatStep(intent, session, callback);
	} else if (intentName === 'AMAZON.PreviousIntent'){
	    getPreviousStep (intent, session, callback);
	} else if (intentName === 'AMAZON.HelpIntent') {
		getWelcomeResponse(callback);
	} else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
		handleSessionEndRequest(callback);
	} else {
		throw new Error(`Invalid Intent ${intentName}`);
    }
}

function onSessionEnded(sessionEndedRequest, session) {
	console.log(`onSessionEnded requestID=${sessionEndedRequest.requestID}, sessionID=${session.sessionID}`);
}