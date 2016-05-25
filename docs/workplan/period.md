##**Period**
**Period** model, used for workplan period

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
month						|string			|				|month with format YYYY-MM
period						|number			|				|period
from	 					|date			|				|period date from
to	 						|date			|				|period date to 
closed	 					|bool			|false			|closed status

###**methods**
###constructor(*source*)
initialize new **Period** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var Period = require('capital-models').workplan.Period;
	var period = new Period({}); 
```	
