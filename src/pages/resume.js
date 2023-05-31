import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resume from "/Users/iboos6life/Downloads/portfoliowebsite/src/images/Justin_Lee_Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume(){
    return(
        <div>
            <Document 
                file = {resume}
                onLoadError = {console.error}
            >
                <Page pageNumber ={1} renderAnnotationLayer={true}/>
            </Document>
        </div>
    );
}
export default Resume;