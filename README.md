# Poster Creation Automation for Adobe Indesign

This script is used for automating QR code placement within Adobe Indesign. Before this script, we had to manually place every QR code on our poster template and save each one as a PDF.
This script places the QR code, exports the file as a PDF, saves it to a folder on your desktop, and moves onto the next QR code in your specified folder until it has gone through each one.

## Prerequsites

Before running the script, you want to make sure you're set up so the script can perform how it's supposed to. This script is setup specifically for our use case of attaching QR codes to an existing template poster containing one single link - a placeholder QR code. The script will perform its actions on the document you currently have open in Indesign. So, pull up the poster template in Indesign, make sure it has a QR code link already placed (as a placeholder), and make sure you have a folder prepared with **ONLY** the QR codes you want to place on each poster. The script will iterate through each one, place it on the poster, and export it as a PDF into a folder on your desktop called 'Completed Posters'.

![image](https://github.com/user-attachments/assets/86a43307-7ece-4343-b7fa-81ff3e09e1d6)

**Folder full of QR codes in a Microsoft Edge HTML Document (.svg) format**

## Running the Script

First, download the raw .jsx file located in this repository. This file is titled 'QR_Code_Posters.jsx'. You will have to place this file in the 'Scripts Panel' folder in your Adobe Indesign files. Launch Indesign and navigate to the 'Window' tab at the top of the application. Under 'Window', find 'Utilities' and click on 'Scripts'. After clicking on 'Scripts', you will see three tabs

- Application
- Community
- User

![image](https://github.com/user-attachments/assets/3c8fe944-45d2-4f1f-a645-ac9b5f5e15ff)


right click the 'User' tab and click 'Reveal in Explorer'. This will take you to the location of the 'Scripts Panel' folder on your local machine. Navigate into your 'Scripts Panel' folder and paste the 'QR_Code_Posters.jsx' file into it.

![image](https://github.com/user-attachments/assets/7d7cdd75-e988-4c9b-b49c-ba663e7d982f)
**Paste script into this folder**

Going back into your Indesign application, you will see under that 'User' tab at Window >> Utilities >> User, the QR_Code_Posters script. You can now double click or right click to run the script.

![image](https://github.com/user-attachments/assets/2a038f44-c3af-4c5e-a527-59ce9e3c7c9d)

When you run the script, you get a popup where you can select the folder that contains all the QR codes you want to place on each poster. Select the folder and watch as the script goes through each QR code, creating its respective poster.

![image](https://github.com/user-attachments/assets/eeb7427a-f120-4df7-a37e-65de3fcd17d9)

![image](https://github.com/user-attachments/assets/c0db8265-6377-469f-a089-438fb0d5a490)

**After finishing, you will get a success message and a folder full of completed posters containing each of the QR codes in the folder you chose.**

