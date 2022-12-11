# API - Employee System 

<p align="center">
    <img src="https://skillicons.dev/icons?i=git,ts,nodejs,express,mongodb,vscode" />
</p>

🌎 Deploy

 - no deployed yet

⚒️ Installation

 - npm install - for run in local

👇 Usage 

 - npm run dev - for run in local

📍 Endpoints
````
employee { GET, POST, PUT, DELETE }
    - get - /employee - get all employees registered
    - get - /employee/id - you need put an id by params and this endpoint will return the specific employee
    - post - /employee - create a new employee, send by body the next specific json
        {
	        "employeeId": 123456789,
            "firtsname": "Dog",
            "lastname": "Firulais",
            "phoneNumber": 9548825544,
            "salary": 100000,
	        "jobsTitle": "Manager" - < Warning this is a subDocument!, you need to create the subdocument first then you can create an employee >
        }
    - update - /employee/id update a specific employee with "_id" by params and the json by body is the  same json that get for create one
    - delete - /employee/id delete a specific employee with "_id" by params ( no logic, I will create one endpoint for this )
````
````
jobstitle { GET, POST, PUT, DELETE } 
    - get - /employee - get all jobstitles registered
    - post - /jobstitle - create a new jobs title, send by body the next specific json
        {
	        "jobsTitle": Manager,
            "minSalary": 50000,
            "maxSalary": 100000,
        }
    - update - /jobstitle/id update a specific jobstitle with "_id" by params and the json by body is the  same json that get for create one
    - delete - /jobstitle/id delete a specific jobstitle with "_id" by params ( no logic, I will create one endpoint for this )
````

🧗🏽‍♂️ Contributing

 - Just me Aaron Fraga :bowtie:

🔖 License

 - It's free :smiley: :smiley:

