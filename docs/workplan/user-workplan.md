##**UserWorkplan**
**UserWorkplan** model, represents user workplan data

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
accountId					|object			|				|Account _id
user						|object			|				|object represent owner data
periodId	 				|object			|				|period
period	 					|[Period][1]	|				|period data
code						|string			|				|workplan code
items	 					|Array			|				|list of UserWorkplanItem
completion	 				|float			|0				|completion percentage 


###**methods**
###constructor(*source*)
initialize new **UserWorkplan** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var UserWorkplan = require('capital-models').workplan.UserWorkplan;
	var workplan = new UserWorkplan({}); 
```	

[1]: period.md