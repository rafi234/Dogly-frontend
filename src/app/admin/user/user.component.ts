import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Dog} from 'src/app/model/Dog';
import {Address, User, Role} from "../../model/User";
import {UserService} from "../../service/user.service";
import {DogsComponent} from './dogs/dogs.component';
import {EditUserComponent} from './edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = new Array<User>()

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    //this.userService.getUsers().subscribe(next => this.users = next);
    this.users = [
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
        surname: 'Gracias',
        email: 'lucas.gracias@example.com',
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
  }

  openModalDogs(dogs: Array<Dog>) {
    const modalRef = this.modalService.open(DogsComponent)
    modalRef.componentInstance.dogs = dogs
  }

  openModalEditUser(user: User) {
    const modalRef = this.modalService.open(EditUserComponent)
    modalRef.componentInstance.user = user
    modalRef.result.then(result => {
        if (result) {
          const action = result[1]
          if (action === 'UPDATE')
            this.userService.updateUser(result[0]).subscribe()
          else if (action === 'DELETE') {
            if (confirm('Are you sure you want to delete user with email: ' + user.email)) {
              this.userService.deleteUser(result[0]).subscribe()
            }
          }
        }
      }
    )
  }
}
