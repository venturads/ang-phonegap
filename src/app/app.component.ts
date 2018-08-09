import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  download(){
    html2canvas(document.getElementById('results')).then(function(canvas) {
    // html2canvas(document.body).then(function(canvas){
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF();
    // var width = doc.internal.pageSize.width;    
    // var height = doc.internal.pageSize.height;
    doc.addImage(img,'JPEG', 100, 100);
    doc.save('testCanvas.pdf');
    });
  }

}
