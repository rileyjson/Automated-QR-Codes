

var document = app.activeDocument; //this grabs the current document you have open (you want this to to be the poster template)
var link = document.links; //Selects the link (QR code) that the template currently has
var QRCodeLink = link[0]; //there will only ever be one link (the QR code on the template)

var QRFolder = Folder.selectDialog("Select your QR codes folder"); //grabs all QR code files from the folder you select
var QRCodes = QRFolder.getFiles();

var printPreset = app.pdfExportPresets.itemByName("[High Quality Print]"); //ensure it exports as high quality print
var exportFolder = new Folder(Folder.desktop + "/" + "Completed Posters"); //create folder to save posters into

if (!exportFolder.exists) {
    exportFolder.create();
}

for (var i=0; i<QRCodes.length; i++) { 
    //loop through each QR code in folder, 
    //add it to indesign template, and export it to desktop
    var decode = decodeURI(QRCodes[i].relativeURI);
    var file = File(decode)
    link[0].relink(file); //update template link with link of each QR code in your folder of them
    link[0].update();
    var exportedPoster = new File(exportFolder.fsName + "/2025_" + link[0].name + "_Home Delivery Poster.pdf");
    document.exportFile(ExportFormat.PDF_TYPE, exportedPoster, false, printPreset);

}

alert("Posters are finished and saved to your desktop in the folder 'Completed Posters'.")