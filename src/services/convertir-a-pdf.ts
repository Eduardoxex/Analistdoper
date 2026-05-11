import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';


@Injectable({
  providedIn: 'root',
})
export class ConvertirAPdf {

    constructor(){

      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.mjs',
            import.meta.url
          ).toString();
          
    }

  async getPdfText(file: File): Promise<string>{
    const arrayFuber = await file.arrayBuffer();
    //leemos el buffer del array, esto nos otorgara un objeto
    const pdf = await pdfjsLib.getDocument({data: arrayFuber}).promise;
    let fullText = '';

    //aqui utilizamos el objeto para sacar la informacion que utilizaremos
    for(let i = 1; i <= pdf.numPages; i++){
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      //esta ultima nos da un grupo de contextos con la informacion de la pagina del pdf al momento

      //items es un array de todos los items, debemos de recorrercada uno de ellos y agruparlos en un solo string
      const pageText =textContent.items.map((data: any) => data.str).join(' ');


      fullText += pageText;
    }

    return fullText;
  }


  
}



