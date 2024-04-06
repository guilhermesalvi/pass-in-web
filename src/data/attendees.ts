import { fakerPT_BR as faker } from '@faker-js/faker'

export const dynamicAttendees = Array.from({ length: 255 }).map(() => {
  const checkedInAt = faker.date.recent({ days: 10 })

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: checkedInAt.getDay() % 2 === 0 ? checkedInAt : null,
  }
})

export const constantAttendees = [
  {
    id: 17061,
    name: 'Fabiano Macedo',
    email: 'Fabiano_Macedo@gmail.com',
    createdAt: '2024-03-08T10:55:08.417Z',
    checkedInAt: '2024-03-30T23:17:27.562Z',
  },
  {
    id: 12354,
    name: 'Lorraine Xavier',
    email: 'Lorraine.Xavier@hotmail.com',
    createdAt: '2024-03-29T08:05:46.441Z',
    checkedInAt: '2024-04-04T05:07:44.298Z',
  },
  {
    id: 19910,
    name: 'Anthony Costa',
    email: 'Anthony.Costa66@live.com',
    createdAt: '2024-03-14T08:35:04.058Z',
    checkedInAt: '2024-04-02T18:45:00.873Z',
  },
  {
    id: 18474,
    name: 'Sophia Batista',
    email: 'Sophia_Batista83@bol.com.br',
    createdAt: '2024-03-10T03:19:24.931Z',
    checkedInAt: '2024-04-02T22:37:35.173Z',
  },
  {
    id: 19286,
    name: 'Víctor Costa',
    email: 'Victor_Costa41@gmail.com',
    createdAt: '2024-03-09T13:45:38.028Z',
    checkedInAt: '2024-03-31T06:11:18.820Z',
  },
  {
    id: 18576,
    name: 'Henrique Macedo',
    email: 'Henrique.Macedo@bol.com.br',
    createdAt: '2024-04-04T04:50:51.184Z',
    checkedInAt: null,
  },
  {
    id: 15590,
    name: 'Lorraine Oliveira',
    email: 'Lorraine_Oliveira47@live.com',
    createdAt: '2024-04-06T04:49:01.201Z',
    checkedInAt: null,
  },
  {
    id: 11186,
    name: 'Leonardo Batista',
    email: 'Leonardo.Batista@bol.com.br',
    createdAt: '2024-03-28T16:04:05.426Z',
    checkedInAt: null,
  },
  {
    id: 15385,
    name: 'Marcos Barros',
    email: 'Marcos.Barros@gmail.com',
    createdAt: '2024-03-20T09:12:18.947Z',
    checkedInAt: null,
  },
  {
    id: 16678,
    name: 'Silas Melo',
    email: 'Silas.Melo39@hotmail.com',
    createdAt: '2024-03-31T19:04:35.246Z',
    checkedInAt: '2024-04-06T16:43:57.399Z',
  },
  {
    id: 16851,
    name: 'Maria Alice Oliveira',
    email: 'MariaAlice.Oliveira55@live.com',
    createdAt: '2024-04-03T17:22:36.788Z',
    checkedInAt: null,
  },
  {
    id: 16445,
    name: 'Hélio Pereira',
    email: 'Helio.Pereira75@live.com',
    createdAt: '2024-03-11T06:47:22.040Z',
    checkedInAt: null,
  },
  {
    id: 12567,
    name: 'Ricardo Costa',
    email: 'Ricardo.Costa@gmail.com',
    createdAt: '2024-04-04T07:53:10.254Z',
    checkedInAt: null,
  },
  {
    id: 17239,
    name: 'Benício Costa',
    email: 'Benicio.Costa0@yahoo.com',
    createdAt: '2024-03-15T08:13:30.220Z',
    checkedInAt: '2024-03-31T18:09:59.125Z',
  },
  {
    id: 14916,
    name: 'Isabelly Saraiva',
    email: 'Isabelly_Saraiva1@hotmail.com',
    createdAt: '2024-03-09T12:34:01.822Z',
    checkedInAt: '2024-03-28T03:31:21.969Z',
  },
  {
    id: 19316,
    name: 'Víctor Oliveira',
    email: 'Victor.Oliveira39@gmail.com',
    createdAt: '2024-03-14T20:39:50.318Z',
    checkedInAt: null,
  },
  {
    id: 17474,
    name: 'Silas Reis',
    email: 'Silas.Reis@bol.com.br',
    createdAt: '2024-03-17T12:03:18.674Z',
    checkedInAt: null,
  },
  {
    id: 13490,
    name: 'Paula Silva',
    email: 'Paula.Silva22@live.com',
    createdAt: '2024-04-06T15:28:39.339Z',
    checkedInAt: null,
  },
  {
    id: 16864,
    name: 'Isis Barros',
    email: 'Isis_Barros@live.com',
    createdAt: '2024-03-13T04:51:15.792Z',
    checkedInAt: null,
  },
  {
    id: 13611,
    name: 'Júlio César Xavier',
    email: 'JulioCesar.Xavier43@hotmail.com',
    createdAt: '2024-03-28T06:35:20.783Z',
    checkedInAt: '2024-03-31T20:05:22.095Z',
  },
  {
    id: 17635,
    name: 'Natália Xavier',
    email: 'Natalia.Xavier26@live.com',
    createdAt: '2024-03-31T06:42:40.636Z',
    checkedInAt: '2024-03-28T09:41:15.981Z',
  },
  {
    id: 11389,
    name: 'Júlio César Souza',
    email: 'JulioCesar_Souza56@live.com',
    createdAt: '2024-03-13T16:21:59.800Z',
    checkedInAt: null,
  },
  {
    id: 12182,
    name: 'Murilo Pereira',
    email: 'Murilo.Pereira@hotmail.com',
    createdAt: '2024-03-26T04:18:42.202Z',
    checkedInAt: '2024-04-04T04:49:13.358Z',
  },
  {
    id: 13697,
    name: 'Maria Costa',
    email: 'Maria_Costa@yahoo.com',
    createdAt: '2024-03-27T23:42:09.455Z',
    checkedInAt: null,
  },
  {
    id: 15015,
    name: 'Roberta Souza',
    email: 'Roberta.Souza92@yahoo.com',
    createdAt: '2024-03-15T12:09:16.600Z',
    checkedInAt: null,
  },
]
