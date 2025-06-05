---
sidebar_position: 2
iconName: "snowflake"
useBrand: true
title: "Snowflake"
---

## How to create a destination with Snowflake

### 1. Select the destination type:
-   Select the "Snowflake" option for the destination type.
![a](/img/old/connections/snow.png)


### 2. Enter AWS credentials:
-   You will be shown a section where you must enter the credentials to connect to your Snowflake account.
<p align="center">
![a](/img/old/connections/chrome_rlpel2cl2v.png)
</p>

**Enter the user name:**
-   For the User input, you will enter the user name with which you registered in Snowflake (The name must be in all capital letters), for password, you will enter the password with which you registered in Snowflake.

**Enter the Private Key and Private Key passphrase:**
To obtain the private key, you need to follow the steps provided in the Key-pair authentication and key-pair rotation section, which you can view by clicking on "**See Now**" in the "**Info Alert**".

<p align="center">
![a](/img/old/snowflake/chrome_oufcwqsoy5.png)   
</p>


**Enter the account:**
-   For Account, you need to go to Snowflake and copy from the url the account name that Snowflake assigned to you.
![b](/img/old/snowflake/chrome_9busyiijvd.png)

-   In this case it is ```“fspcfhh/dwb64383”```, copy it and change the "/" to "-"
-   It should look something like this:
<p align="center">
![](/img/old/snowflake/chrome_avuzwknhbx.png)
</p>

### 3. Click on the “Test Connection” button
Enable the inputs below.

### 4. Configure the inputs of Role
Warehouse, Database and Schema as you wish to establish the connection to Snowflake and finally click on the “Create Destination” button.
<p align="center">
![b](/img/old/snowflake/role.png)
</p>