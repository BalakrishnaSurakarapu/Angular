import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  str: string = 'balakrishna'
  string123 = 'dddbsjakeldpgd'
  //  reverse:string='';
  //  charcount:string=''; maxchar:string='';maxcount:any
  //   char: any;
  arr = ['ggggg', '2222', 'hfdsasdd', '454333', '55']


  ngOnInit() {
    
    console.log(this.arr.reverse(), 'ssssssssssssss')
    // console.log(this.arr.duplicates(),'dulpicates')
    const str = this.string123.split('');
    const str1 = this.string123.split('').reverse();
    const str2 = this.string123.split('').reverse().join('');
    console.log(this.string123)
    console.log(str)
    console.log(str1)
    console.log(str2)
    //     this.reverse = this.str.split('').reverse().join('');
    // console.log("reverse",this.reverse)

    //     let char:string;
    //   for(let char of this.str){
    //     if(this.charcount[this.char]){
    //       this.charcount[this.char ++];      
    //     }else{
    //       this.charcount[this.char=1];
    //     }
    //     console.log('charcount',this.charcount)

    //   }
    //   for(const[char,count]of Object.entries(this.charcount)){debugger
    //     if(count > this.maxcount){
    // this.maxchar=char;
    // this.maxcount=count;
    // console.log('maxcount', this.maxcount)
    // console.log('maxchar',this.maxchar)
    //     }
    //     console.log('maxcount', this.maxcount)
    //     console.log('maxchar',this.maxchar)
    //   }




    this.Designation = 'Team Leader';
    this.Username = 'Balu';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }
}
