##**Account**
**Account** model, used for authentication

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
username					|string			|				|username
password					|string			|				|password
email	 					|string			|				|email address
locked	 					|bool			|false			|account is locked 
confirmed 					|bool			|false			|account is confirmed
roles		 			    |array	  		|				|account roles

###**methods**
###constructor(*source*)
initialize new **Account** object.

**parameters**
 
 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript
	var Account = require('capital-models').identity.Account;
	var account = new Account({});
```	
