import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  testText = [
    {
      Head:'Bexley High School',
      Body:'<ul><li>Bexley High School Technology Cup Award, 2020</li><li>Bexley High School Varsity Bowling Team Most Improved Player Award, 2020</li><li>Bexley High School Varsity Bowling Team Second Team All League Honors, 2019</li><li>Bexley Womens Club Barbara Baldwin Lewis Memorial Award, 2020</li></ul>'
    },
    {
      Head:'BBYO',
      Body:'<ul><li>Menorah Pledge and Cardinal Principles Award, International Award, 2020</li><li>Anita Perlman Stand Up Award, International Award, 2020</li><li>Arevut Speak Up Award, International Award, 2019 and 2020</li><li>Bronze Order of the Shield of David Award, International Award, 2020</li><li>Tree of Life Recruitment Award, International Award, 2020</li><li>Henry Monsky Chapter Excellence Award of the Aleph Zadik Aleph, International Award, 2020</li><li>President of the Year, Regional Award, 2018 and 2019</li><li>Rising Star Award, Local Awad, 2018</li></ul>'
    },
    {
      Head:'Other',
      Body:'<ul><li>David and Janet W. Goldsmith Kavod Gadol Teen Leadership Award, 2020</li></ul>'
    },
  ];

  ngOnInit(): void {
  }

}
