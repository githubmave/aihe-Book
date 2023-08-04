## Purpose :     
###  Calculate petrol cost of business trips, for accounting claim. 

#### www/template/startPoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/74f8d075-30ef-48df-871a-9fa2c70c868f)


#### www/templates/endpoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/043b044f-2388-4ae4-9917-c97963fcaa1b)

#### The total petrol cost for today’s trip
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/8f24ec43-44ad-42e9-98db-5fcf3d99cf7d)


#### •	The records list of Trips
#### www/templates/history.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/462aba35-9efa-4b0c-ad4d-12f841f96eb4)


####  Users can edit and delete of trips

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/eab29c43-3b46-496d-9d2d-293303d7ee77)


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
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System based on RESTful Architect: 


![image](https://github.com/githubmave/aihe-Book/assets/8073738/ec52a047-6d24-4551-a438-73b491eb05fe)







##  Use Post data to illustrates Data Flow from Front end_To_Back end_to DB 

####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Users Submit a Post

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
![image](https://github.com/githubmave/aihe-Book/assets/8073738/d884874c-a94d-4549-a0f6-def1835e4082)



![image](https://github.com/githubmave/aihe-Book/assets/8073738/1ec408e2-90b6-4f0f-ada2-7dd813b542d7)

 
   


 































