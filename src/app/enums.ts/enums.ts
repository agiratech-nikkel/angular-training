import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class enumsobject {
    dat:any
    loginData(userName:string,logStatus:boolean) {
        localStorage.setItem('loginStatus',JSON.stringify({ userName,logStatus}))
      }

      Emplyeedata = [
        {
          "id": 100,
          "name": "Steven",
          "lastname": "King",
          "email": "SKING@xxx.com",
          "phonenumber": "515.123.4567",
          "hiredate": "developer",
          "salary": "Male",
          "no": 1,
        },
        {
            "id": 101,
            "name": "Neena",
            "lastname": "Kochhar",
            "email": "NKOCHHAR@xxx.com",
            "phonenumber": "515.123.4568",
            "hiredate": "testing",
            "salary": "Male",
            "no": 2,
        },
        {
            "id": 102,
            "name": "Lex",
            "lastname": "De Haan",
            "email": "LDEHAAN@xxx.com",
            "phonenumber": "515.123.4569",
            "hiredate": "developer",
            "salary": "Male",
            "no": 3,
        },
        {
          "id": 103,
          "name": "Alexander",
          "lastname": "Hunold",
          "email": "AHUNOLD@xxx.com",
          "phonenumber": "590.423.4567",
          "hiredate": "developer",
          "salary": "Male",
          "no": 4,
        },
        {
          "id": 105,
          "name": "David",
          "lastname": "Austin",
          "email": "DAUSTIN@xxx.com",
          "phonenumber": "590.423.4569",
          "hiredate": "developer",
          "salary": "Male",
          "no": 5,
        },
        {
          "id": 106,
          "name": "Valli",
          "lastname": "Pataballa",
          "email": "VPATABAL@xxx.com",
          "phonenumber": "590.423.4560",
          "hiredate": "developer",
          "salary": "Male",
          "no": 6,
        },
        {
          "id": 107,
          "name": "Diana",
          "lastname": "Lorentz",
          "email": "DLORENTZ@xxx.com",
          "phonenumber": "590.423.5567",
          "hiredate": "developer",
          "salary": "Female",
          "no": 7,
        },
        {
          "id": 108,
          "name": "Nancy",
          "lastname": "Greenberg",
          "email": "NGREENBE@xxx.com",
          "phonenumber": "515.124.4569",
          "hiredate": "developer",
          "salary": "Male",
          "no": 8,
        },
        {
          "id": 109,
          "name": "Daniel",
          "lastname": "Faviet",
          "email": "DFAVIET@xxx.com",
          "phonenumber": "515.124.4169",
          "hiredate": "developer",
          "salary": "Male",
          "no": 9,
        },
        {
          "id": 110,
          "name": "John",
          "lastname": "Chen",
          "email": "JCHEN@xxx.com",
          "phonenumber": "515.124.4269",
          "hiredate": "developer",
          "salary": 'Male',
          "no": 10,
        },
        {
          "id": 111,
          "name": "Ismael",
          "lastname": "Sciarra",
          "email": "ISCIARRA@xxx.com",
          "phonenumber": "515.124.4369",
          "hiredate": "developer",
          "salary": "Male",
          "no": 11,
        },
        {
          "id": 112,
          "name": "Jose Manuel",
          "lastname": "Urman",
          "email": "JMURMAN@xxx.com",
          "phonenumber": "515.124.4469",
          "hiredate": "developer",
          "salary": 'Male',
          "no": 12,
        },
        {
          "id": 113,
          "name": "Luis",
          "lastname": "Popp",
          "email": "LPOPP@xxx.com",
          "phonenumber": "515.124.4567",
          "hiredate": "testing",
          "salary": 'Female',
          "no": 13,
        },
        {
          "id": 114,
          "name": "Den",
          "lastname": "Raphaely",
          "email": "DRAPHEAL@xxx.com",
          "phonenumber": "515.127.4561",
          "hiredate": "developer",
          "salary": "Male",
          "no": 14,
        },
        {
          "id": 115,
          "name": "Alexander",
          "lastname": "Khoo",
          "email": "AKHOO@xxx.com",
          "phonenumber": "515.127.4562",
          "hiredate": "Admin",
          "salary": 'Female',
          "no": 15,
        },
        {
          "id": 116,
          "name": "Shelli",
          "lastname": "Baida",
          "email": "SBAIDA@xxx.com",
          "phonenumber": "515.127.4563",
          "hiredate": "Admin",
          "salary": 'Female',
          "no": 16,
        },
        {
          "id": 117,
          "name": "Sigal",
          "lastname": "Tobias",
          "email": "STOBIAS@xxx.com",
          "phonenumber": "515.127.4564",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 17,
        },
        {
          "id": 118,
          "name": "Guy",
          "lastname": "Himuro",
          "email": "GHIMURO@xxx.com",
          "phonenumber": "515.127.4565",
          "hiredate": "developer",
          "salary": "Male",
          "no": 18,
        },
        {
          "id": 119,
          "name": "Karen",
          "lastname": "Colmenares",
          "email": "KCOLMENA@xxx.com",
          "phonenumber": "515.127.4566",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 19,
        },
        {
          "id": 120,
          "name": "Matthew",
          "lastname": "Weiss",
          "email": "MWEISS@xxx.com",
          "phonenumber": "650.123.1234",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 20,
        },
        {
          "id": 121,
          "name": "Ismael",
          "lastname": "Sciarra",
          "email": "ISCIARRA@xxx.com",
          "phonenumber": "515.124.4369",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 21,
        },
        {
          "id": 122,
          "name": "Jose Manuel",
          "lastname": "Urman",
          "email": "JMURMAN@xxx.com",
          "phonenumber": "515.124.4469",
          "hiredate": "developer",
          "salary": "Male",
          "no": 22,
        },
        {
          "id": 123,
          "name": "Luis",
          "lastname": "Popp",
          "email": "LPOPP@xxx.com",
          "phonenumber": "515.124.4567",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 23,
        },
        {
          "id": 124,
          "name": "Den",
          "lastname": "Raphaely",
          "email": "DRAPHEAL@xxx.com",
          "phonenumber": "515.127.4561",
          "hiredate": "testing",
          "salary": "Male",
          "no": 24,
        },
        {
          "id": 125,
          "name": "Alexander",
          "lastname": "Khoo",
          "email": "AKHOO@xxx.com",
          "phonenumber": "515.127.4562",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 25,
        },
        {
          "id": 126,
          "name": "Shelli",
          "lastname": "Baida",
          "email": "SBAIDA@xxx.com",
          "phonenumber": "515.127.4563",
          "hiredate": "developer",
          "salary": 'Female',
          "no": 26,
        },
        {
          "id": 127,
          "name": "David",
          "lastname": "Austin",
          "email": "DAUSTIN@xxx.com",
          "phonenumber": "590.423.4569",
          "hiredate": "testing",
          "salary": "Male",
          "no": 27,
        }, 
        {
          "id": 128,
          "name": "Alexander",
          "lastname": "Hunold",
          "email": "AHUNOLD@xxx.com",
          "phonenumber": "590.423.4567",
          "hiredate": "admin",
          "salary": 'Female',
          "no": 28,
        },
        {
          "id": 129,
          "name": "Daniel",
          "lastname": "Faviet",
          "email": "DFAVIET@xxx.com",
          "phonenumber": "515.124.4169",
          "hiredate": "testing",
          "salary": 'Female',
          "no": 29,
        },
        {
          "id": 130,
          "name": "Luis",
          "lastname": "Popp",
          "email": "LPOPP@xxx.com",
          "phonenumber": "515.124.4567",
          "hiredate": "developer",
          "salary": "Male",
          "no": 30,
        },
    
      ];
}

