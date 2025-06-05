---
sidebar_position: 3
iconName: "SAP"
useBrand: true
title: "SAP Odata"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## How to create an SAP source with the Odata protocol
This page walks you through setting up a connection with OData services.
You’ll learn how to authenticate, define endpoints, and integrate structured SAP data into Crestone via standard OData protocols.

### 1. Select the source type:
- Select any of the odata options we have available to connect your source
<p align="center">
    ![smo2ury7cm](/img/old/odatasap/oda.png)
</p>

### 2. Select the type of authentication


<Tabs>
  <TabItem value="Basic Auth" label="Basic Auth" default>

<p> **Enter SAP Odata credentials:** </p>
You will be prompted to enter the credentials needed to connect to your SAP Odata system.
<p align="center">
    ![smo2ury7cm](/img/old/odatasap/select.png)
</p>
  
**Username**
1. Use your SAP account credentials to authenticate. The username is provided by your SAP administrator.
2. If you’re unsure of your username, verify it with your system administrator or in the SAP GUI under User Settings.

**Password**
1. Enter the password associated with your SAP account.
2. If you don’t know your password or need to reset it, contact your SAP administrator.


**Service URL**
1. Obtain the OData service endpoint URL from your SAP system administrator.
2. This URL typically points to the specific OData service you want to connect to, and it may look like:
`https://<sap-server>/sap/opu/odata/<service-name>`
1. Ensure the URL includes the correct protocol (https:// or http://), server address, and service name.


  </TabItem>
  <TabItem value="Api Key" label="Api Key">
  <p> **Enter Api Key:** </p>
You will be prompted to enter the credentials needed to connect to your SAP Odata system.
<p align="center">
    ![smo2ury7cm](/img/old/odatasap/api.png)
</p>


**Api Key**
1. Enter the Api Key associated with your SAP account.

**Service URL**
1. Obtain the OData service endpoint URL from your SAP system administrator.
2. This URL typically points to the specific OData service you want to connect to, and it may look like:
`https://<sap-server>/sap/opu/odata/<service-name>`
1. Ensure the URL includes the correct protocol (https:// or http://), server address, and service name.
  </TabItem>
</Tabs>

### 3. Test the connection:

Click the "Test Connection" button to verify that the connection to the SAP Odata system is working correctly.
If the test is successful, the system will enable additional configuration options.
 
<p align="center">

</p>

### 4. Create the connection:
Finally, click the "Create Source" button to establish the connection to SAP Odata.

<p align="center">

</p>