import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './admin/user/user.component';
import { DogsComponent } from './admin/user/dogs/dogs.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AddMeetingComponent } from './meetings/add-meeting/add-meeting.component';
import { WalksComponent } from './walks/walks.component';

import {Address, User, Role} from "./model/User";
import { Meeting } from './model/Meeting';

const routes: Routes = [
  // {path: 'admin/user', component: UserComponent, canActivate : [AuthRouteGuardService]},
  {path: 'admin/user', component: UserComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DogsComponent,
    LoginComponent,
    NavigationComponent,
    PageNotFoundComponent,
    EditUserComponent,
    RegistrationComponent,
    MeetingsComponent,
    AddMeetingComponent,
    WalksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const users: User[] = [
  {
    id: '1',
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    address: {
      id: '1',
      country: 'Poland',
      voivodeship: 'Mazowieckie',
      city: 'Warsaw',
      street: 'Main St. 12',
      postalCode: '00-001',
    },
    dogs: [
      {
        id: '1',
        name: 'Buddy',
        dogsBirth: '2020-06-15',
        breed: 'Labrador',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER],
    active: true,
  },
  {
    id: '2',
    name: 'Anna',
    surname: 'Smith',
    email: 'anna.smith@example.com',
    address: {
      id: '2',
      country: 'Germany',
      voivodeship: 'Bayern',
      city: 'Munich',
      street: 'Pine St. 34',
      postalCode: '80331',
    },
    dogs: [
      {
        id: '2',
        name: 'Bella',
        dogsBirth: '2019-03-22',
        breed: 'Golden Retriever',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER, Role.ROLE_ADMIN],
    active: true,
  },
  {
    id: '3',
    name: 'James',
    surname: 'Brown',
    email: 'james.brown@example.com',
    address: {
      id: '3',
      country: 'France',
      voivodeship: 'Île-de-France',
      city: 'Paris',
      street: 'Maple St. 9',
      postalCode: '75001',
    },
    dogs: [
      {
        id: '3',
        name: 'Max',
        dogsBirth: '2018-11-12',
        breed: 'German Shepherd',
        isActive: false,
      },
    ],
    roles: [Role.ROLE_USER],
    active: false,
  },
  {
    id: '4',
    name: 'Sophia',
    surname: 'Taylor',
    email: 'sophia.taylor@example.com',
    address: {
      id: '4',
      country: 'Spain',
      voivodeship: 'Andalusia',
      city: 'Seville',
      street: 'Elm St. 21',
      postalCode: '41001',
    },
    dogs: [
      {
        id: '4',
        name: 'Charlie',
        dogsBirth: '2021-02-11',
        breed: 'Beagle',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER],
    active: true,
  },
  {
    id: '5',
    name: 'Liam',
    surname: 'Johnson',
    email: 'liam.johnson@example.com',
    address: {
      id: '5',
      country: 'Italy',
      voivodeship: 'Lazio',
      city: 'Rome',
      street: 'Oak St. 45',
      postalCode: '00100',
    },
    dogs: [],
    roles: [Role.ROLE_ADMIN],
    active: true,
  },
  {
    id: '6',
    name: 'Emma',
    surname: 'Williams',
    email: 'emma.williams@example.com',
    address: {
      id: '6',
      country: 'Poland',
      voivodeship: 'Pomorskie',
      city: 'Gdańsk',
      street: 'Main St. 7',
      postalCode: '80-001',
    },
    dogs: [
      {
        id: '5',
        name: 'Luna',
        dogsBirth: '2017-07-08',
        breed: 'Bulldog',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER],
    active: false,
  },
  {
    id: '7',
    name: 'Olivia',
    surname: 'Jones',
    email: 'olivia.jones@example.com',
    address: {
      id: '7',
      country: 'France',
      voivodeship: 'Provence-Alpes-Côte d\'Azur',
      city: 'Nice',
      street: 'Pine St. 56',
      postalCode: '06000',
    },
    dogs: [
      {
        id: '6',
        name: 'Daisy',
        dogsBirth: '2016-04-25',
        breed: 'Dalmatian',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER],
    active: true,
  },
  {
    id: '8',
    name: 'Noah',
    surname: 'Davis',
    email: 'noah.davis@example.com',
    address: {
      id: '8',
      country: 'Germany',
      voivodeship: 'Nordrhein-Westfalen',
      city: 'Cologne',
      street: 'Maple St. 78',
      postalCode: '50667',
    },
    dogs: [
      {
        id: '7',
        name: 'Rocky',
        dogsBirth: '2015-09-30',
        breed: 'Poodle',
        isActive: false,
      },
    ],
    roles: [Role.ROLE_USER],
    active: false,
  },
  {
    id: '9',
    name: 'Lucas',
    surname: 'Garcia',
    email: 'lucas.garcia@example.com',
    address: {
      id: '9',
      country: 'Spain',
      voivodeship: 'Catalonia',
      city: 'Barcelona',
      street: 'Elm St. 99',
      postalCode: '08001',
    },
    dogs: [],
    roles: [Role.ROLE_ADMIN],
    active: true,
  },
  {
    id: '10',
    name: 'Mia',
    surname: 'Martinez',
    email: 'mia.martinez@example.com',
    address: {
      id: '10',
      country: 'Italy',
      voivodeship: 'Tuscany',
      city: 'Florence',
      street: 'Oak St. 11',
      postalCode: '50100',
    },
    dogs: [
      {
        id: '8',
        name: 'Coco',
        dogsBirth: '2020-12-18',
        breed: 'Chihuahua',
        isActive: true,
      },
    ],
    roles: [Role.ROLE_USER, Role.ROLE_ADMIN],
    active: true,
  },
];

export const meetings1: Meeting[] = [
  {
    id: '1',
    description: 'Spotkanie właścicieli małych ras psów. Idealna okazja do socjalizacji!',
    addedAt: new Date('2024-11-01T10:00:00Z'),
    date: new Date('2024-11-25T14:00:00Z'),
    interested: 12,
    going: 8,
    title: 'Mini Dog Meetup',
    user: users[0],
    dogPark: {
      id: '1',
      url: 'https://dogpark.example.com/1',
      type: 'Enclosed',
      city: 'Warsaw',
      location: 'Central Park',
      voivodeship: 'Mazowieckie',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/800px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg',
    },
  },
  {
    id: '2',
    description: 'Zabawa dla aktywnych psów średnich i dużych ras.',
    addedAt: new Date('2024-11-02T09:30:00Z'),
    date: new Date('2024-11-26T11:00:00Z'),
    interested: 15,
    going: 10,
    title: 'Active Dogs Playdate',
    user: users[1],
    dogPark: {
      id: '2',
      url: 'https://dogpark.example.com/2',
      type: 'Open Space',
      city: 'Gdańsk',
      location: 'Rekreacyjny Ogród Północny',
      voivodeship: 'Pomorskie',
      imgUrl: 'https://cdn5.tropicalsky.co.uk/images/800x600/le-jardin-du-luxembourg-paris.jpg',
    },
  },
  {
    id: '3',
    description: 'Trening posłuszeństwa z profesjonalnym trenerem.',
    addedAt: new Date('2024-11-03T12:45:00Z'),
    date: new Date('2024-11-27T15:00:00Z'),
    interested: 20,
    going: 14,
    title: 'Obedience Training Session',
    user: users[2],
    dogPark: {
      id: '3',
      url: 'https://dogpark.example.com/3',
      type: 'Training Area',
      city: 'Paris',
      location: 'Parc des Canins',
      voivodeship: 'Île-de-France',
      imgUrl: 'https://green-travel-blog.com/wp-content/uploads/2023/09/park-4430204_1920.jpg',
    },
  },
  {
    id: '4',
    description: 'Spacer z przewodnikiem i integracja psów.',
    addedAt: new Date('2024-11-04T16:20:00Z'),
    date: new Date('2024-11-28T09:30:00Z'),
    interested: 8,
    going: 5,
    title: 'Guided Dog Walk',
    user: users[3],
    dogPark: {
      id: '4',
      url: 'https://dogpark.example.com/4',
      type: 'Forest',
      city: 'Rome',
      location: 'Villa Borghese',
      voivodeship: 'Lazio',
      imgUrl: 'https://www.travelandleisure.com/thmb/5x9nzbIEI4mivX5_P-AVj452h-c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-europa-park-AMUSEMENTPARK0222-982661bee4d9480eb1f0ab8da5a762f8.jpg',
    },
  },
  {
    id: '5',
    description: 'Poranne zabawy i gry dla szczeniaków.',
    addedAt: new Date('2024-11-05T08:15:00Z'),
    date: new Date('2024-11-29T10:00:00Z'),
    interested: 18,
    going: 12,
    title: 'Puppy Morning Games',
    user: users[4],
    dogPark: {
      id: '5',
      url: 'https://dogpark.example.com/5',
      type: 'Playground',
      city: 'Barcelona',
      location: 'Parque del Cachorro',
      voivodeship: 'Catalonia',
      imgUrl: 'https://i.natgeofe.com/n/c0f16b52-1ef4-4d80-ad19-d6a15a28f5ef/gather-place-park-tulsa-oklahoma.jpg',
    },
  },
  {
    id: '6',
    description: 'Warsztaty agility dla psów.',
    addedAt: new Date('2024-11-06T13:40:00Z'),
    date: new Date('2024-11-30T13:00:00Z'),
    interested: 22,
    going: 17,
    title: 'Dog Agility Workshop',
    user: users[5],
    dogPark: {
      id: '6',
      url: 'https://dogpark.example.com/6',
      type: 'Training Course',
      city: 'Berlin',
      location: 'Hundetrainingsplatz',
      voivodeship: 'Bayern',
      imgUrl: 'https://media.cntraveler.com/photos/59de4128a0e42466315fc755/master/pass/Yoyogi%20Tokyo_GettyImages-113850548.jpg',
    },
  },
  {
    id: '7',
    description: 'Spacer w grupie i zabawa w lesie.',
    addedAt: new Date('2024-11-07T11:25:00Z'),
    date: new Date('2024-12-01T10:30:00Z'),
    interested: 10,
    going: 7,
    title: 'Group Forest Walk',
    user: users[6],
    dogPark: {
      id: '7',
      url: 'https://dogpark.example.com/7',
      type: 'Forest',
      city: 'Nice',
      location: 'Canine Forest Park',
      voivodeship: 'Provence-Alpes-Côte d\'Azur',
      imgUrl: 'https://cdn1.tropicalsky.co.uk/images/800x600/golden-gate-parks-conservatory-of-flowers.jpg',
    },
  },
  {
    id: '8',
    description: 'Zajęcia z trenerem psów sportowych.',
    addedAt: new Date('2024-11-08T09:00:00Z'),
    date: new Date('2024-12-02T15:30:00Z'),
    interested: 14,
    going: 11,
    title: 'Sport Dog Training',
    user: users[7],
    dogPark: {
      id: '8',
      url: 'https://dogpark.example.com/8',
      type: 'Sports Area',
      city: 'Cologne',
      location: 'Hunde-Sportfeld',
      voivodeship: 'Nordrhein-Westfalen',
      imgUrl: 'https://media.farandwide.com/a5/53/a55389e9f2ef4ebc9b4a7b9a44095f2d.jpeg',
    },
  },
  {
    id: '9',
    description: 'Relaksacyjny spacer po parku.',
    addedAt: new Date('2024-11-09T14:00:00Z'),
    date: new Date('2024-12-03T16:00:00Z'),
    interested: 7,
    going: 4,
    title: 'Relaxing Park Walk',
    user: users[8],
    dogPark: {
      id: '9',
      url: 'https://dogpark.example.com/9',
      type: 'Park',
      city: 'Madrid',
      location: 'Parque Canino',
      voivodeship: 'Andalusia',
      imgUrl: 'https://www.businessinsider.in/photo/53851687/ENGLISCHER-GARTEN-MUNICH-Even-bigger-than-Central-Park-Englischer-Garten-boasts-multiple-beer-gardens-nude-sunbathing-spots-and-even-a-surfing-spot-.jpg',
    },
  },
  {
    id: '10',
    description: 'Integracja szczeniaków z różnymi rasami.',
    addedAt: new Date('2024-11-10T17:50:00Z'),
    date: new Date('2024-12-04T11:00:00Z'),
    interested: 25,
    going: 20,
    title: 'Puppy Socializing Event',
    user: users[9],
    dogPark: {
      id: '10',
      url: 'https://dogpark.example.com/10',
      type: 'Open Space',
      city: 'Florence',
      location: 'Campo Aperto per Cani',
      voivodeship: 'Tuscany',
      imgUrl: 'https://experience.transat.com/wp-content/uploads/2018/01/parc-la-grange-geneve.jpg',
    },
  },
];