import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-ma-photo',
  templateUrl: './ma-photo.component.html',
  styleUrls: ['./ma-photo.component.scss']
})
export class MaPhotoComponent implements OnInit {
    title !: string;

    description !: string;

    imagephoto !: string;

    Datecreation !: Date;

  ngOnInit(){
    this.title="photo java";
    this.description="Le langage java dans sa perfection";
    this.Datecreation=new Date();

    this.imagephoto="ImageJava";

  }


}


