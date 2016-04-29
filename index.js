var ns = {};

ns.Base = require('./src/base');

// identity namespace
ns.identity = {};
ns.identity.Account = require('./src/identity/account');
ns.identity.UserProfile = require('./src/identity/user-profile');
ns.identity.UserOrganizationInfo = require('./src/identity/user-organization-info');


module.exports = ns;