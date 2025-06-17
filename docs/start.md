---
sidebar_position: 2
iconName: "bolt"
title: "Quickstart"
config:
      theme: redux
---

# Let's start

# Let's have a quick look at creating your first job in 
Create your first automations to synchronize your source data in SAP with your destination in AWS.

```mermaid
flowchart TD
    A(["Start"]) --> D["Create conections"]
    D --> n1["Create a source"] & n2["Create a destination"]
    n1 --> n3["Create a nodo"]
    n2 --> n3
    n3 --> n4["Create Jobs"]
    n4 --> n5["End"]
    style A fill:#FFD600

```


## Create Connections

To get started, make sure you have the necessary credentials for both the source and destination. Follow the steps below to set up your connections:
<p align="center">
![conection](/img/old/star/conection.gif)
</p>

If you require more information on connections, please see the [connections page](/docs/sections/conections/).
### Create new Source 
**Source Connection**: Provide your source credentials and configure the connection parameters.

![chrome_rmvjsa1zat](/img/old/connection/chrome_rmvjsa1zat.png)

### Create New Destination
Enter the required data to be able to connect correctly with your destination.

![chrome_ffaxuw3rlp.png](/img/old/connection/chrome_ffaxuw3rlp.png)

## Create Nodes
For node creation, it is essential to have previously established at least one [Souce](/docs/start#create-new-source) and one [Destination](/docs/start#Create-New-Destination).These connections are fundamental, as the nodes will depend on them to effectively synchronize the data. Make sure to properly configure both ends before proceeding with node creation.

![chrome_c29onchecm.gif](/img/old/connection/chrome_c29onchecm.gif)


## Create a new JOB
To generate a Job it is required that at least one [node](#Node-Creation) has been generated.


1. Click on the "Create Job" button.
![chrome_3ghucqaojr](/img/old/connection/chrome_3ghucqaojr.png)

2. Change the name of the Job.
<p align="center">
![chrome_9nnsvoqhoj](/img/old/connection/chrome_9nnsvoqhoj.png)
</p>

3. Click on "Nodes".
![chrome_jwyaeov22k](/img/old/connection/chrome_jwyaeov22k.png)

4. Select the control node and drag it to the right, along with the extraction nodes you need.
![chrome_yswpathtsy](/img/old/connection/chrome_yswpathtsy.gif)

5. Link the nodes together.
![chrome_zqtpkmgpuu](/img/old/connection/chrome_zqtpkmgpuu.gif)

6. Click the green button to save the changes.
![chrome_lupjlxg8qu](/img/old/connection/chrome_lupjlxg8qu.png)

7. Executes the job or schedules its execution.


<p align="center">
![chrome_0wqarufc9l](/img/old/connection/chrome_0wqarufc9l.png)
</p>

<p align="center">
![captura_de_pantalla_2024-12-12_082809](/img/old/job/captura_de_pantalla_2024-12-12_082809.png)
</p>