##**UserOrganizationInfo**
**UserOrganizationInfo** model, used for organization related data

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
accountId					|object			|				|Account _id
nik							|string			|				|identification number
initial	 					|string			|				|initial
department	 				|bool			|false			|department 


###**methods**
###constructor(*source*)
initialize new **UserOrganizationInfo** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var UserOrganizationInfo = require('capital-models').identity.UserOrganizationInfo;
	var info = new UserOrganizationInfo({}); 
```	
