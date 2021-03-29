# Matcha
  A dating website - 1337 school (42 network) project.

# Description
  A web app where users can interact with each other.
  The user can create his account, and after completing his profile he can search for other users by age, distance, rating, common tags.
  With the possibility to like, block or report fake accounts. Two matched users can chat with each other.

# Features
  * Like/unlike, block and report users.
  * Search and filter users.
  * Realtime chat with matched users.
  * Realtime notifications when: a like is received, the user is matched with another one, the users's profile is viewed, a message is received, a matched user unliked.

# Front-end
  * React.js (+hooks)
  * Redux (+ Redux form, Redux-saga)
  * Material-ui

# Back-end
  * Node.js
  * Express.js
  * Socket.io
  * MYSQL

# Prerequisites
  node, npm

# Running the app
```
cd client && yarn install
cd server && yarn install
cd server/database && and sh index.sh #to launch db migration with 500+ users
cd server && npm run devStart
cd client && serve -s build -l [PORT]
```

# Screenshots
## Login Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 01 PM" src="https://user-images.githubusercontent.com/44867969/112869787-72891980-90b5-11eb-998d-f0c754a0b89c.png">

## Register Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 19 PM" src="https://user-images.githubusercontent.com/44867969/112869798-76b53700-90b5-11eb-994b-81f64f1e35a4.png">

## Forgot Password Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 43 PM" src="https://user-images.githubusercontent.com/44867969/112869828-7ddc4500-90b5-11eb-9dce-92ce650cc89b.png">

## Infos Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 34 38 PM" src="https://user-images.githubusercontent.com/44867969/112870002-a7956c00-90b5-11eb-8172-96c987e67c04.png">

## Photos Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 35 17 PM" src="https://user-images.githubusercontent.com/44867969/112870019-ab28f300-90b5-11eb-87e2-2c89ae4ad1f5.png">

## Location Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 35 28 PM" src="https://user-images.githubusercontent.com/44867969/112870030-ae23e380-90b5-11eb-9304-c7f6b8261d2a.png">

## Done Page
<img width="2559" alt="Screen Shot 2021-03-29 at 12 35 39 PM" src="https://user-images.githubusercontent.com/44867969/112870079-bb40d280-90b5-11eb-89c9-b097afb8dc4d.png">

## Profile Page
<img width="2560" alt="Screen Shot 2021-03-29 at 1 03 27 PM" src="https://user-images.githubusercontent.com/44867969/112870128-c8f65800-90b5-11eb-8de5-85347afe6293.png">

## View Others users profile
<img width="2560" alt="Screen Shot 2021-03-29 at 12 56 03 PM" src="https://user-images.githubusercontent.com/44867969/112870470-27bbd180-90b6-11eb-8de9-3ef8e6cb568a.png">

## Activity Page
<img width="2544" alt="Screen Shot 2021-03-29 at 12 57 59 PM" src="https://user-images.githubusercontent.com/44867969/112870476-29859500-90b6-11eb-875c-60e7df174a36.png">

