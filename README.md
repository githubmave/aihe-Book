## Purpose :     
###  Store and search repos ,  create Forum for readers to make comments

#### Sign In Page
![image](https://github.com/githubmave/aihe-Book/assets/8073738/0cad4d10-ca93-4f37-9cc2-d94e7b0c9413)


#### After signed in, display all repos 
![image](https://github.com/githubmave/aihe-Book/assets/8073738/86ea45fc-ab41-4c6d-b243-71dc5dcab3cb)

#### click the link to view the details
![image](https://github.com/githubmave/aihe-Book/assets/8073738/8e85254e-a98f-4b2f-80ea-56f5a735b042)



#### Add a NEW repo

![image](https://github.com/githubmave/aihe-Book/assets/8073738/e3a61077-b484-4958-ae59-294e43dabb1f)


####  Assign New repo to category

![image](https://github.com/githubmave/aihe-Book/assets/8073738/1882fff3-1b86-4d4e-ab2d-ffc10360fc55)


####  Create Forum , allow users to make comments

![image](https://github.com/githubmave/aihe-Book/assets/8073738/90585dbd-2fd7-45c8-a42c-08187af5a3b1)






	
## Prerequisite installation:
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . node.js                          
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . npm
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . SQLite       
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Knex




##  Main Packages
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . UI:      &nbsp;&nbsp;&nbsp;&nbsp;   MaterialUI
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Front end: &nbsp;&nbsp;&nbsp;&nbsp;     React, redux
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Back end: &nbsp;&nbsp;&nbsp;&nbsp;      node.js, knex
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Data storage:  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; SQLite
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Tools: &nbsp;&nbsp;&nbsp;&nbsp;   webpack, babel 










## Solution Architect
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System based on RESTful API 


![image](https://github.com/githubmave/aihe-Book/assets/8073738/dd272d70-4fc7-476c-9c66-85a4c715a203)







##  Use case to illustrates Data Flow from Front end_To_Back end_to DB 

####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Users enter and submit meter reading

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step one: 

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Views:     www/template/startPoint.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/1e26887f-2ded-4ce0-992c-0497bfc3f745)


####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step Two:


####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Controller:         www/js/app.js


  ![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/b04edb23-4ce8-4880-aff1-f740d1a9f6db)
 
   

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Controller and a view is One-to-One mapping. 
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www/js/app.js
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/c44798a8-c976-4fce-b997-1a65002faa76)

 































