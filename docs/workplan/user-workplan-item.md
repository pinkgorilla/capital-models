##**UserWorkplanItem**
**UserWorkplanItem** model, represents user workplan items

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
code						|string			|				|item code
no							|number			|				|item number
type		 				|string			|				|item type
name	 					|string			|				|name
description					|string			|				|description
estimatedDate	 			|date			|				|estimated completion date
done	 					|bool			|false			|is completed
completedDate				|date			|				|actual completion date
cancel	 					|bool			|false			|is canceled
cancelReason	 			|string			|				|cancel reason 


###**methods**
###constructor(*source*)
initialize new **UserWorkplanItem** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var UserWorkplanItem = require('capital-models').workplan.UserWorkplanItem;
	var item = new UserWorkplanItem({}); 
```	