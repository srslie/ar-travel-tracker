# Travel Tracker

Someday quarantine will end, and Travel Tracker can help you prepare for that fateful day!

Once travel is back in the books, let us help book those books for you. The [Travel Tracker](https://srslie.github.io/travel-tracker/ allows users and travel agents to work together to make memorable trips and keep track of those good times.

Travelers can:
- Login using
    ```username: traveler50 (where 50 is the ID of the user)
       password: travel2020
    ```
- See user dashboard when logging in including
  - All trips (past, present, upcoming, and pending)
  - Total amount spent on trips this year including a travel agent’s 10% fee
- Be able to make trip requests
  - Select dates
  - Set duration
  - Specify number of travelers 
  - Choose from a list of destinations
  - See estimated costs (including 10% travel agent fee) for the trip
  - Submit the request to be 'pending' until the agent can approve/deny it

Travel Agents can:
- Login using
```
username: agency
password: travel2020
```
- See a dashboard showing
  - New trip requests (a user’s “pending” trips)
  - Total income generated this year (should be 10% of user trip cost)
  - Travelers on trips for today’s date
- Be able to see and approve/deny trip requests 
- Search for users by name and
  - View their name, a list of all of their trips, and the total amount they’ve spent (including 10% agent cut)
  - Approve a trip request for that user
  - Delete an upcoming trip for that user

This is the final project of [Turing School](https://turing.io/) Mod 2.

## Technologies

This app utilized:
- ES6 Javascript with a focus on DRY, SRP, OOP code
- Class object modeling with a testing using Mocha and Chai
- SCSS broken out into logical stylesheets using mixins and nesting
- A CSS [normalize](https://github.com/necolas/normalize.css/) file for browser compatability
- Accessibility testing using [aria labels](https://www.w3.org/TR/wai-aria/#aria-label) and [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en) checks alongside semantic HTML
- Webpack bundling for multiple script and SCSS files
- A local server running API endpoints for a separated data model
- Github pages deployment
- Git workflow, a kanban project board, and self-management of design and development

The challenge of working with these technologies I'm fairly new to, as well as completing the process in a matter of 5 days, helped me learn a lot about prioritization, using my resources, managing time, dedicating to design decisions, and organizing my project. I was grateful for this experience and am sure next time I practice this process the outcome will be sleeker and I'll be able to produce in a more efficient manner.

## Contributors

This app was coded by me, [Alice Ruppert](https://www.srslie.com/), following a [spec](https://frontend.turing.io/projects/travel-tracker.html) by Turing School staff.

Special thanks to my mentor, [Scott Schipke](https://github.com/sschipke) and my accountabilibuddy, [Gabrielle Joyce](https://github.com/gaj23), for their technical support, and my partner for making me food.

## Future Iterations

While no future development is planned at this time, if time allowed or the project was ongoing, I would like to address:
- 

## In Action

![GIF of app responsive design]()

![GIF of functionality]()
