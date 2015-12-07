# README For Project 3 Survey - Backend Portion of the Project

For general information and details on the UI portion of this project see
https://github.com/Babbage-squad-ga/project3-frontend/blob/master/README.md

## Collections Definitions for Database
* Users : This collection will be used for the creators of the surveys
* Completed_surveys : This collection will show the cumalitive answers to the survey questions along with the city and age of the survey taker

###Collections for User and User Authentication
These collections, models and routers originate from https://github.com/ga-wdi-boston/express-passport

###Collection for Users
* Users come from the default project of express-passport

####Validations and Constraints for Users
* user_name must be unique
* random url must be unique



###Collections

Survey Collection

| surveyName | 'string'
| surveyQuestion | 'string'
| surveyURL | 'string'
| surveyAnswers | []
| surveyCreator |  'string'

Results Collection

| Field | Document |
| :----- | :--- |
| surveyName | 'string'
| surveyQuestion | 'string'
| takerAnswers | []




####Validations and Constraints for
* Answer must be a number
* Age must be a number
* City must be a string




###Associations
* User has many surveys
* Surveys belong to user
* Survey has many questions
* Each question belongs to a survey







###Authorization and Authentication
User authorization and authentication is provided by the express-passport repo that Saad provided.

### URL For The Backend Server
https://desolate-mountain-2607.herokuapp.com

