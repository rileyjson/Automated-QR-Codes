# Poster Creation Automation for Adobe Indesign

This script is used for automating QR code placement within Adobe Indesign. Before this script, we had to manually place every QR code on our poster template.
This script places the QR code, exports the file as a PDF, saves it to a folder on your desktop, and moves onto the next QR code in your specified folder.

## Prerequsites

Before running the script, you want to make sure you're set up so the script can perform how it's supposed to. This script is setup specifically for our use case of a template poster containing one single link - the QR code. The script will perform its actions on the document you currently have open in Indesign. So, pull up the poster template in Indesign, make sure it has a QR code link already placed (as a placeholder), and make sure you have a folder prepared with **ONLY** the QR codes you want to place on each poster. The script will iterate through each one, place it on the poster, and export it as a PDF into a folder on your desktop called 'Completed Posters'.

## Running the Script

First, download the raw .jsx file located in this repository. This file is titled 'QR_Code_Posters.jsx'. You will have to place this file in the 'Scripts Panel' folder in your Adobe Indesign files. Launch Indesign and navigate to the 'Window' tab at the top of the application. Under Window, find 'Utilities'and click on 'Scripts'. After clicking on 'Scripts', you will see three tabs

- Application
- Community
- User

right click the 'User' tab and click 'Reveal in Explorer'. This will take you to the location of the 'Scripts Panel' folder on your local machine. Navigate into your 'Scripts Panel' folder and paste the 'QR_Code_Posters.jsx' file into it.

Going back into your Indesign application, you will see under that 'User' tab at Window >> Utilities >> User, the QR_Code_Posters script. You can now double click or right click to run the script.

When you run the script, you get a popup where you can select the folder that contains all the QR codes you want to place on each poster. Select the poster and watch as the script goes through each QR code, creating its respective poster.
