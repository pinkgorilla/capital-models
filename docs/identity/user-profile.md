##**UserProfile**
**UserProfile** model, used for user profile related data

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
accountId					|object			|				|Account _id
name						|string			|				|fullname
dob		 					|date			|				|date of birth
gender		 				|string			|				|gender 


###**methods**
###constructor(*source*)
initialize new **UserProfile** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var UserProfile = require('capital-models').identity.UserProfile;
	var profile = new UserProfile({}); 
```	
