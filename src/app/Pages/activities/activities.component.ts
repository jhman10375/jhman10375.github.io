import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  testText = [
    {
      Head:'Robotics',
      Body:'In High School I joined the Robotics team as a freshman and began working on the software that our robot would need to drive and complete tasks, during my sophomore year I began working on the hardware and design of the team&#39s robot and eventually became the captain, a position I maintained for the following three years. I worked closely with our advisor to schedule work times, organize our team&#39s materials and digital data, budget and fundraise, and assist in all behind the scenes teamwork. In 2018 we placed 2nd in our third competition and maintained a top 25% record at all other competitions since 2017. During my four years apart of the team and three years as captain I learned how to lead a team, work with an advisor and school administration, budget for parts, tools, and competitions, problem solve, build robots with Vex Robotics parts and tools, program using RobotC, and collaborate with a team. In Middle School I competed in two First Lego League Competitions and placed 7th in both. My time on this robotics team was spent mainly focused on the projects where I worked to create an educational Instagram page that would inspire a new use for the popular social media site. Our other project focused on recycling programs and reevaluating current procedures and allowed recyclables to make it easier for the typical consumer to recycle and help save the planet. Our latest robot from 2020 can be seen on the right.'
    },
    {
      Head:'Heart of Ohio BBYO',
      Body:'In 8th grade I first joined my local BBYO chapter, Heart of Ohio. When I had initially joined, I did not enjoy the events, the people, or the message that the group was sending. Later I found out that I would have the opportunity to run for leadership positions where I could make a change and turn the chapter into a welcoming place for all new and current members. I began these changes by becoming the lowest leadership position where I started as the treasurer, I created new spirit wear, donated money to breast cancer research, and raised a significant amount of money to assure the chapter would have money for future events and activities. I continued my leadership by being elected vice president of the chapter. In this job my role was to plan all activities and events, communicate with the president and other chapters about ideas and collaboration efforts, develop a strategic calendar, and communicate major events to members and their families. Following my time as vice president I was no sooner elected president, now I was on top, I had the ability to lead the other board members in a new direction of respect, friendship, and service. In this position I reorganized how we met for executive decisions, passed several motions which created new board positions and opportunities, established a new calendar system, tripled active membership, more than doubled our conference and meeting attendance, and led the chapter to win several prestigious international awards within BBYO. This group taught me how to collaborate with others, work with advisors and organizations to plan events and follow the groups initiatives, communicate with members and their families of all ages, make friends, and so much more.'
    },
    {
      Head:'Varsity Bowling Team',
      Body:'Sophomore Year a new varsity bowling team was created at my high school and I was fortunate enough to be selected to bowl on the varsity team until my senior year. During my junior season I received 2nd team all-league honors. As a founding member of the team, I was always coming up with different cheers for the team, helping to boost the morale of the team, and helping others advance in the sport. My senior season I received the Most Improved Player Award for boosting my average over 35 pins to land around 175 pins per game.'
    },
    {
      Head:'Wexner Service Corps',
      Body:'When I was a junior, I applied to join the Wexner Service Corps. Wexner Service Corps is a service youth group funded by Les Wexner with the intent to give local Columbus juniors and seniors in high school the opportunity to commit different acts of service and understand how easy it is to make an impact on the world as well as relate the service work back to Jewish text and readings. When I joined this group, I was fortunate enough to have the opportunity to go to Houston Texas and help with the post hurricane Harvey relief efforts. This experience was jaw dropping, I had the opportunity to help provide underwear to children in need, help rebuild two houses, work in a food pantry, and other places needing help during this traumatic time. I was then selected as a senior leader the following year where I had the chance to go to Detroit Michigan and help with different programs like helping to create and clean up a couple of parks in lower income areas, assisting in food pantries, and serving as a leader and role model to the general members. I helped with morning activities, loading and unloading busses, and leading groups in other activities and service programs.'
    },
    {
      Head:'Bexley Marching and Concert Band',
      Body:'During my sophomore year of high school, I joined the Bexley High School Marching Band. I began practicing and playing the concert tuba and marching sousaphone. I soon started to march and participated in eight marching band shows and four concerts. I additionally marched in four local parades and performed in several venues around Honolulu Hawaii including the Pearl Harbor Memorial and the Saint Patrick&#39s Day Parade.'
    },
    {
      Head:'Bexley High School Superintendents Student Advisory Council',
      Body:'During a transition of superintendents, our new superintendent wanted to put a council of students together to give those students a say in some administrative decisions as well as provide a younger and more targeted perspective for the superintendent. After a rigorous application process, I was selected to be a part of this council where I helped make informed decisions on events and opportunities hosted by the school district. Additionally, I was selected to sit on a panel and help with the interview process for a new high school principal.'
    }
  ];

  ngOnInit(): void {
  }

}
