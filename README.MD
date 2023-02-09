# Template for Vue Apps
This is a template in order to create apps in PIPEFORCE using Vue.

This app can be installed using the PIPEFORCE marketplace, using the cli command `pi publish` or using the 
command `app.install`.

All properties which need to be deployed to PIPEFORCE must be placed inside `properties` folder.

All Vue related sources must go inside `src` (they will not be deployed to the PIPEFORCE backend).

The compiled Vue dist file and all additional resources must be copied to `properties/global/app/yourapp/resource` 
and checked-in.

Once all properties have been deployed to PIPEFORCE, the resources can be accessed using the command `app.resource.get`.