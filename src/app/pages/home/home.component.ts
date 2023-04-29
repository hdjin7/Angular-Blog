import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: {
    idContent: string | undefined, photoCover: string | undefined,
    titleContent: string | undefined,
    descriptionContent: string | undefined
  }[] = [];

  ngOnInit(): void {
    this.setValuesToComponent()
  }

  setValuesToComponent() {
    // Adicionando dados do dataFake no array
    dataFake.forEach((item) => {
      this.result.push({
        idContent: item?.id,
        photoCover: item?.photo,
        titleContent: item?.title,
        descriptionContent: item?.description,
      });
    });
  }
}
