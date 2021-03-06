##160719

We have a search function/component. Now we need to create the new review section and associated mutation on GraphQL. This should also serve as the edit review section. Once this is complete we should deploy to Heroku and make sure everything is working in production.

####Bonus Points

Organize the repo into meteor-maker style folder structure.

####Bonus Bonus Points

Plan lesson sequence and start segmenting the repo into first stage.

##160717

We got a "stateless" search function/component going but it doesn't yet accept any user input for returning beer searches. Tonight we're going to implement a search component with state that will be taken from user input. This state will then perform a search on the breweryDB API. Each returned beer should have a Link to create a new review.

####Bonus Points

Create the review page/section and a mutator to persist the new review.

##160715

Right now we have a working set of React components that display a list of reviews and associated beer data. Next we will need some mutators; specifically to add a new review. To wire this up we will need to call a search, then enable the user to select a beer and add a review (rating and location). The location will be a text input, but the rating will need to be more complicated. Ideally the user will click a star for the associated rating. Each will need to be separate components.

####Bonus Points

Add a feature for adding a half star rating with a double click action.

##160712

Yesterday we got the server up and running and deployed to a Heroku instance. Following our weekly goals, we are ahead by half a day. Today we should investigate the Apollo Client library and begin a basic implementation. The goal will be to have a page that displays results from a reviews request to the API. This should be deployed to the Heroku instance.

####Bonus Points

Begin a basic React interface and get the GraphQL data into a React component.

##160711

The goal today is to get a basic GraphQL server up and running. It should have a base schema for a local mongodb and also collect data from the breweryDB API. It should return that data in a single request.

####Bonus Points

~Implement an accounts system using Passport and create a local user collection. Then connect the user and beer data.~

More important than an accounts systme at this point is to get the app deployed.
