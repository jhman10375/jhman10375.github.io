import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  Kroger = [
    {
      Head:'Cincinnati - E-commerce Clerk',
      Body:'While working at the Coryville Kroger in Cincinnati I have been placed in the pickup department as an E-commerce Clerk with a few responsibilities including picking up groceries for customers, organizing and maintaining our staging center, and keeping a friendly customer environment for all.'
    },
    {
      Head:'Columbus - E-commerce Attendant',
      Body:'Over my winter break I worked at the Stoneridge in Columbus Ohio as an E-commerce Attendant. In this role I worked closely with my department supervisor and managed my picking staff to ensure orders were ready on time, additionally I was responsible for customers calling in with questions, concerns, or changes to their orders, getting orders ready from the staging center and delivering them to the customer, working standalone Point of Sales systems and Mobile Point of Sales Systems, and transitioning the staff through a major software/hardware update which would ultimately help us work more efficiently.'
    },
    {
      Head:'Columbus - Front-End Courtesy Clerk',
      Body:'From April 2020 until August, I was employed at the Stoneridge Kroger in Columbus Ohio as a Front-End Courtesy Clerk. My responsibilities included bringing in shopping carts from the parking lot, cleaning the shopping carts to follow Covid-19 safety protocol, cleaning the bathrooms, bagging groceries for customers, and assisting customers’ needs and requests.'
    },
    {
      Head:'General Training',
      Body:'In addition to my work as a courtesy clerk, attendant and clerk, I have also been fully trained as an E-commerce Lead, Front-End Cashier, and Employee Trainer.'
    }
  ];

  JCC = [
    {
      Head:'',
      Body:'The Jewish Community Center of Greater Columbus (JCC) is a community center for families accross Columbus.'
    },
    {
      Head:'Camp Counselor',
      Body:'In the summer of 2016 I began volunteering at the JCC summer camps where I started being trained as a camp counselor. I was taught how to interact with children and their families, how to create an environment that welcomed creativity, curiosity, and courage, and how to work with others. The following summer and for the next three years I was hired on as staff working with incoming 1st grade students helping them to make friends, try new activities, and learn about themselves. I was given the opportunity to work different camp programs and extra weeks including after camp programs, pre-camp recruitment events, and circus camps. After four years in this position, I personally worked with over 500 children of ages 4 through 14.'
    },
    {
      Head:'J-Club Staff',
      Body:'During the 2020-2021 school year I served as a staff member for an after-school program, J-Club. In this role I helped students with their homework, make friends, have fun, and stay safe.'
    },
    {
      Head:'Birthday Party Coordinator',
      Body:'Starting in the fall of 2017 I was hired as a Birthday Party Coordinator where I worked with families to decorate, prepare, and lead birthday parties for children across Columbus. I helped to prepare food, gather party favors and decorations, and direct parties through different activities.'
    },
    {
      Head:'Youth Worker',
      Body:'In 2017 I was hired on to staff as a youth worker helping in all departments including the preschool, our two other locations, recreation and sports, and the kitchen. Through all of this I was trained and certified extensively in customer service, food service, and childcare.'
    }
  ];

  Other = [
    {
      Head:'Babysitting',
      Body:'In 2017 I began babysitting for local families in my neighborhood and surrounding areas. I was responsible for looking after children in their homes as well as keep after pets and the house in general. I ultimately babysat over 12 families of a four-year time period and have continued to work with these children and their families ever since.'
    },
    {
      Head:'Nanny',
      Body:'Over the 2020 summer I was a nanny for two children with the responsibility of giving them a great summer under pandemic conditions, keep the children safe, entertain the children, and work to keep them connected to their friends.'
    }
  ];

  Piada = [
    {
      Head:'Cook',
      Body:'In February of 2019 I was hired as a cook at Piada. In this role I was a shorthand cook responsible for cooking food for customers and customizing orders for customers, I was also responsible for cooking pasta, the main product of the restaurant. In this job I learned food safety skills and was also fortunate enough to be very well trained as a chef.'
    }
  ]
  
  ngOnInit(): void {
  }

}
