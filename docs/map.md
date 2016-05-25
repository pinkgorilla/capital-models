##**Map**

maps `type` to mongo db `collection` name


###**Definition**
``` javascript
var map = {
    identity: {
        account: "accounts",
        userOrganizationInfo: "user-organization-infos",
        userProfile: "user-profiles"
    },
    workplan: {
        period: "periods",
        userWorkplan: "user-workplans"
    }
}
``` 



###**Usage**

```
    var map = require('capital-models').map;
    
    //prints 'user-organization-infos'
    console.log(map.identity.userOrganizationInfo)
```