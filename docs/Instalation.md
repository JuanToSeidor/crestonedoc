---
title: 'Installation Guide'
sidebar_position: 3
iconName: "command"
---
import Admonition from '@theme/Admonition';

This section outlines the steps required to install Crestone on a remote client environment. The installation is performed using a shell-based installer and requires basic system-level access to the target machine.

---
import {Titleicon} from './cards/cards.tsx'

<Titleicon icon="storage" >
### Prerequisites
</Titleicon>

Before beginning, ensure you have:

* **Remote access** to the client’s machine.
* A machine with **root user access**.
* **Port 3000** opened for communication.
* Access to download the Crestone installer script (`CrestoneVXX.sh` – suggested name).

---
<Titleicon icon="wrenchPrice" >
### Step-by-Step Installation Process
</Titleicon>
#### **Step 1: Open AWS Installer Console**

Log in to the AWS environment where the installation will be launched:
🔗 [AWS Console Installer](https://us-east-2.signin.aws.amazon.com/oauth?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&code_challenge=CahF80A_hDXPz-9WVY2_BAcWCSio1eYpekCEQTDEr9Y&code_challenge_method=SHA-256&response_type=code&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26src%3Dheader-signin%26state%3DhashArgsFromTB_us-east-2_b8b7ddc7f76c45c5)

#### **Step 2: Provide Remote Access Information**

Ensure you have the correct **connection details** to the target client environment (e.g., AWS client IP, access key, etc.).

<p align="center">
![a](/img/instalation/a.png)
</p>

#### **Step 3: Confirm Required Permissions**

Make sure the **client machine** meets the following:

* Accessible with user: `root`
* Port `3000` must be open and available

<p align="center">
![a](/img/instalation/b.png)
</p>

#### **Step 4: Download the Installer Script**

(🔍 *Installer hosting location pending – to be provided by Seidor*)
Once available, download the script file (e.g., `CrestoneVXX.sh`) and move to the directory where it was saved:

<p align="center">
![a](/img/instalation/c.png)
</p>

```bash
FALTA (Encontrar algún sitio de Seidor)
```

#### **Step 5: Execute the Installer**

Run the main installation script:

```bash
bash CrestoneVXX.sh
```

<p align="center">
![a](/img/instalation/d.png)
</p>


The installer will present a menu-driven interface. Proceed as follows:

1. **Select Option 1** – Initial setup
2. Press `ENTER`, then proceed **sequentially through Options 2 to 7**


<Admonition type="info">
    In **Option 3**, you must input the **IP address** where the Crestone product will be hosted.
</Admonition >


#### **Step 6: Launch the Containers**

Once all options are configured, the installer will spin up the necessary **Docker containers** to run the application.

<p align="center">
![a](/img/instalation/container1.png)
</p>

<p align="center">
![a](/img/instalation/container2.png)
</p>


**In OPTION 3 enter the IP where the product is going to be found**

<p align="center">
![a](/img/instalation/e.png)
</p>

#### **Step 7: Validate the Installation**

Verify that the application is up and running by visiting the assigned IP and port. You should now be able to access the Crestone interface.

---

Would you like this formatted into a downloadable setup PDF next?
