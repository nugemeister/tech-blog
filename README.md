# Tech Blog

## Project Explained
The purpose of this project is to create a blog site (following MVC paradigm) where developers can publish blog posts and comments.
<br></br>

---

## Success Criteria

### User Stories
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
### Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

## Installation

1. Clone down the repository onto your local machine using the `git clone` command.
2. Ensure you have MySQL2 package downloaded locally, as well as sequelize (use `npm install --save sequelize`).
3. Run `npm install` to install necessary packages and dependencies.
4. Run the schema ahead of running the application to ensure you have the starter database created. Log into mysql (use `mysql -u root -p`) then enter the following in your terminal `source db/schema.sql` to create the starter database.
5. From the command line, enter the following to seed your database with the provided starter data `node seeds`.

<br></br>

## Usage
1. Enter the command `node server.js` to initialize the application.
2. Begin running the routes in Insomnia (or a similar tool) to interface with the database.

<br></br>

## Tests
We suggest you run tests for API routes in Insomnia Core or another similar tool.

<br></br>
## Video Demo
> The following videos show the web application's appearance and functionality:

https://user-images.githubusercontent.com/105621758/192189646-99cde980-a841-4194-9a13-eb839e8beffd.mp4

https://user-images.githubusercontent.com/105621758/192189684-6a9a33f8-77be-4bf0-9172-673f9c15182b.mp4

https://user-images.githubusercontent.com/105621758/192189799-2a6687d7-22d8-48eb-9a01-031748a5c64a.mp4

---

[Top of Page](#tech-blog)
