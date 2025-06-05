---
sidebar_position: 1
iconName: "SAP"
useBrand: true
title: "SAP S/4Hanna"
---
## How to create a source with SAP S/4Hanna

This section explains how to connect Crestone with SAP S/4HANA systems.
You’ll learn how to configure the connection parameters, authenticate securely, and ensure data is extracted efficiently from your S/4HANA environment.

### 1. Select the source type:
Select the "SAP HANA" option for the source type.

![chrome_xjuormeegu](/img/old/hana/chrome_xjuormeegu.png)

### 2. Enter SAP S/4HANA credentials:
You will be prompted to enter the credentials needed to connect to your SAP HANA system.

<p align="center">
![chrome_luzrljt69p](/img/old/hana/chrome_luzrljt69p.png)
</p>

1. **Host Address:**
Enter the host address of the SAP HANA system. This is typically the IP address or DNS name of the SAP HANA server. You can obtain this from your system administrator or the SAP HANA system’s network settings.

2. **Port Number:**
Enter the port number used for the SAP HANA connection. The default port for SAP HANA is usually 30015 for a standard instance. However, the port may vary depending on your system configuration. You can obtain this from the system administrator.

3. **User Name:**
Enter the SAP HANA username you use to log in to the system. Ensure that the username has the necessary permissions for accessing the SAP HANA system. This can be the same username you use for logging into SAP HANA Studio or other HANA client tools. If you don't have a username, contact your system administrator.

4. **Password:**
Enter the password associated with the SAP HANA username. This is the same password you use when logging into the SAP HANA system. If you don't have it or need to reset it, contact your system administrator.

### 3. Test the connection:

- Click the "Test Connection" button to verify that the connection to the SAP HANA system has been successfully established.
- If the test is successful, the system will enable additional configuration options.

<p align="center">
![chrome_xjuormeegu](/img/old/hana/test.png)
</p>
### 4. Create the connection:

Finally, click the "Create Source" button to establish the connection to SAP HANA.

<p align="center">
![chrome_xjuormeegu](/img/old/hana/msedge_Q4ob35PhI5.gif)
</p>