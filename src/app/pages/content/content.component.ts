import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string | undefined = "";
  titleContent: string | undefined = "";
  descriptionContent: string | undefined = "";
  private id: string | null = "0"

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article?.id == id)[0]

    this.titleContent = result?.title
    this.descriptionContent = result?.description
    this.photoCover = result?.photo
  }

}
