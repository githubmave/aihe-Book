## Purpose :     
###  Store and search repos ,  create Forum for readers to make comments

#### Sign In Page
![image](https://github.com/githubmave/aihe-Book/assets/8073738/0cad4d10-ca93-4f37-9cc2-d94e7b0c9413)


#### After signed in, display all repos 
![image](https://github.com/githubmave/aihe-Book/assets/8073738/86ea45fc-ab41-4c6d-b243-71dc5dcab3cb)

#### click the link to view the details
![image](https://github.com/githubmave/aihe-Book/assets/8073738/8e85254e-a98f-4b2f-80ea-56f5a735b042)



#### Add a NEW 

![image](https://github.com/githubmave/aihe-Book/assets/8073738/e3a61077-b484-4958-ae59-294e43dabb1f)


####  Assign New repo to category

![image](https://github.com/githubmave/aihe-Book/assets/8073738/1882fff3-1b86-4d4e-ab2d-ffc10360fc55)


### Given start and end location , the App calculates petrol cost, records business trips,  updata the trips
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . Can store mileage in mobile when no Wi Fi, then synchronize to cloud DB when has Wi Fi
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . The App website was hosted on:              AWS EC2 server
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . The App mobile version was uploaded to:     Google Play store


	
## Prerequisite installation:
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . node.js                          
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . npm
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . angular dependencies            
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . ionic   




##  Main Packages
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . UI:      &nbsp;&nbsp;&nbsp;&nbsp;   ionic-- Mobile Native
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Front end: &nbsp;&nbsp;&nbsp;&nbsp;     angular,  angular-ui-router
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Back end: &nbsp;&nbsp;&nbsp;&nbsp;      ngStorage
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Data storage:  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   pouchDB API for saving dato into couchDB via HTTP
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Tools: &nbsp;&nbsp;&nbsp;&nbsp;   Cordova Build for Mobile App, Use bower for package management 




## Mileage Modules: :


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/292d9c33-2e32-4484-8756-4df81a0b068f)








## Solution Architect
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System based on MVC Model-View-Controller Architect: 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/40f32628-2309-45bb-8fc0-814dbdb9c99f)







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

 































