import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  longText = [`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`,'',''];

  testText = [
    {
      Head:'Who am I?',
      Body:'<p>My name is Jordan Herman, and I am currently an undergraduate student at the University of Cincinnati. I am currently majoring in computer engineering and minoring in computer science at the College of Engineering and Applied Science. My goal in life is to digitally create the future and bring as many people with me as possible. My action statement is, "The more the Marrier", this statement helps me to seek to meet as many people as possible and educate those I meet on the uses and benefits that the digital age has to offer. Along the way I hope to work on different engineering and design teams to create the future. I picture a future that looks like Marty McFly’s (from Back to the Future) future with hover boards, holograms, flying autonomous cars, etc. My goal with computer engineering is to help innovate the digital world and make access to information even easier than it already is.</p>',
      HasButton:false,
      Button:[
        {
          link:'',
          text:''
        }
      ]
    },
    {
      Head:'Some things that make me who I am:',
      Body:'<ol><li>Directing robotics teams for multiple years</li><li>Work at Kroger in various positions</li><li>Leading a chapter in BBYO in multiple positions</li><li>Work at the Jewish Community Center of Greater Columbus in various positions</li></ol>',
      HasButton:true,
      Button:[
        {
          link:'activities',
          text:'Activities'
        },
        {
          link:'awards',
          text:'Awards'
        },
        {
          link:'resume',
          text:'Resume'
        },
        {
          link:'work',
          text:'Work'
        }
      ]
    }
  ];

  ngOnInit(): void {
  }

}
