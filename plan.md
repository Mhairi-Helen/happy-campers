# Brief

- Think up an idea for an app/website that would be achievable in a week
- Choose **one** idea to pursue
- Plan out your app, how will it work (see final chapter off week 11 notes)

- Functional Spec: what does it need to do

*User stories.*

- Wireframe (Google Drawings can work for doing this collaboratively)

*Mocking - can we use the UI wireframing kit for this on Figma? Use component library for UI and reskin if necessary at a later date. *

- Plan out data structures (one-to-one, one-to-many, many-to-many)

*Too many many to many relationships and probably too complicated. 
Cant store arrays in database structure. *

- API design (URLs, HTTP methods: GET, POST, what data is needed (for non-GET requests))

- Redux actions/flow

# Tip
## Strip back to Minimum Viable Product

- Aim to build a single one-to-many relationship structure to begin with

*Appox. 2-3 tables in database with a one-to-many relationship.*

- Don’t worry about ‘admin’ interfaces for inputting data - save that until everything else works. Populate your DB manually for now

*Use seeder factories or manually input the data to begin with, e.g. intially GET requests.* 

- 1 - 3 “pages” / 6 or 7 max React components
- API endpoints: 3 or 4 (mostly GET)
- Redux actions: 6 - 7 ish

*Then some stretch goals (e.g. login, many-to-many, admin interfaces, POST/PUT requests).*

# Things to Think About

- What technology will you use? (React + Redux, Laravel, vanilla JS, use existing APIs, etc.)

*Can we mix our own simple and external third party APIs?* 

- Workflow: how will you work? Discuss, define (Git, gulp, branching methodology, PRs?)

*Use previous methodology around git. Separate repos for backend and front end.* 

Define team roles:
- Front-end (2 people): React, HTML, CSS
- Back-end (2 people): Laravel API
- Back-end likely to be finished first
- Product Owner: can be Team Leader - deciding the direction of the project

# Advice

- If building own API then backend team to start off with Laravel stuff at the start
React side might need to rely on static JSON until API team is ready, the “linking up” is usually challenging if data structures are different, so agree a data structure between teams at the start?
- Link API to React early

*do this as soon as possible even if you need to clone and run locally on your machine* 

- Break up project into smaller tasks, keep track of them, assign them to individuals (GitHub Issues? Trello?)
- you’ll want to probably start off setting up Git, separate repo for front- and back-end
- pair programming (with screen share) to being with then get everyone working off of GitHub once code is up there
- define a project manager/product owner, who will make the calls on direction
- MVP - KEEP IT SIMPLE

*copy the RESTful training API docs* 

