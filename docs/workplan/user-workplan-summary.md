##**UserWorkplanSummary**
**UserWorkplanSummary** model, represents user workplan data summary

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
accountId					|object			|				|Account _id
user						|object			|				|object represent owner data
periodId	 				|object			|				|period
period	 					|[Period][1]	|				|period data
code						|string			|				|workplan code
total	 					|number			|0				|number of items
done	 					|number			|0				|number of completed items 
cancel	 					|number			|0				|number of canceled items
completion	 				|float			|0				|completion percentage 


###**methods**
###constructor(*source*)
initialize new **UserWorkplanSummary** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var UserWorkplanSummary = require('capital-models').workplan.UserWorkplanSummary;
	var summary = new UserWorkplanSummary({}); 
```	

[1]: period.md