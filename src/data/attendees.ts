import { fakerPT_BR as faker } from '@faker-js/faker'

export const dynamicAttendees = Array.from({ length: 255 }).map(() => {
  const checkedInAt = faker.date.recent({ days: 10 })

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      provider: 'email.com',
    }),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: checkedInAt.getDay() % 2 === 0 ? checkedInAt : null,
  }
})

export const constantAttendees = [
  {
    id: 17061,
    name: 'Fabiano Macedo',
    email: 'fabiano_macedo@email.com',
    createdAt: '2024-03-08T10:55:08.417Z',
    checkedInAt: '2024-03-30T23:17:27.562Z',
  },
  {
    id: 12354,
    name: 'Lorraine Xavier',
    email: 'lorraine.xavier@email.com',
    createdAt: '2024-03-29T08:05:46.441Z',
    checkedInAt: '2024-04-04T05:07:44.298Z',
  },
  {
    id: 19910,
    name: 'Anthony Costa',
    email: 'anthony.costa66@email.com',
    createdAt: '2024-03-14T08:35:04.058Z',
    checkedInAt: '2024-04-02T18:45:00.873Z',
  },
  {
    id: 18474,
    name: 'Sophia Batista',
    email: 'sophia_batista83@email.com',
    createdAt: '2024-03-10T03:19:24.931Z',
    checkedInAt: '2024-04-02T22:37:35.173Z',
  },
  {
    id: 19286,
    name: 'Víctor Costa',
    email: 'Victor_Costa41@email.com',
    createdAt: '2024-03-09T13:45:38.028Z',
    checkedInAt: '2024-03-31T06:11:18.820Z',
  },
  {
    id: 18576,
    name: 'Henrique Macedo',
    email: 'henrique.macedo@email.com',
    createdAt: '2024-04-04T04:50:51.184Z',
    checkedInAt: null,
  },
  {
    id: 15590,
    name: 'Lorraine Oliveira',
    email: 'lorraine_oliveira47@email.com',
    createdAt: '2024-04-06T04:49:01.201Z',
    checkedInAt: null,
  },
  {
    id: 11186,
    name: 'Leonardo Batista',
    email: 'leonardo.batista@email.com',
    createdAt: '2024-03-28T16:04:05.426Z',
    checkedInAt: null,
  },
  {
    id: 15385,
    name: 'Marcos Barros',
    email: 'marcos.barros@email.com',
    createdAt: '2024-03-20T09:12:18.947Z',
    checkedInAt: null,
  },
  {
    id: 16678,
    name: 'Silas Melo',
    email: 'silas.melo39@email.com',
    createdAt: '2024-03-31T19:04:35.246Z',
    checkedInAt: '2024-04-06T16:43:57.399Z',
  },
  {
    id: 16851,
    name: 'Maria Alice Oliveira',
    email: 'mariaAlice.oliveira55@email.com',
    createdAt: '2024-04-03T17:22:36.788Z',
    checkedInAt: null,
  },
  {
    id: 16445,
    name: 'Hélio Pereira',
    email: 'helio.pereira75@email.com',
    createdAt: '2024-03-11T06:47:22.040Z',
    checkedInAt: null,
  },
  {
    id: 12567,
    name: 'Ricardo Costa',
    email: 'ricardo.costa@email.com',
    createdAt: '2024-04-04T07:53:10.254Z',
    checkedInAt: null,
  },
  {
    id: 17239,
    name: 'Benício Costa',
    email: 'benicio.costa0@email.com',
    createdAt: '2024-03-15T08:13:30.220Z',
    checkedInAt: '2024-03-31T18:09:59.125Z',
  },
  {
    id: 14916,
    name: 'Isabelly Saraiva',
    email: 'isabelly_saraiva1@email.com',
    createdAt: '2024-03-09T12:34:01.822Z',
    checkedInAt: '2024-03-28T03:31:21.969Z',
  },
  {
    id: 19316,
    name: 'Víctor Oliveira',
    email: 'victor.oliveira39@email.com',
    createdAt: '2024-03-14T20:39:50.318Z',
    checkedInAt: null,
  },
  {
    id: 17474,
    name: 'Silas Reis',
    email: 'silas.reis@email.com',
    createdAt: '2024-03-17T12:03:18.674Z',
    checkedInAt: null,
  },
  {
    id: 13490,
    name: 'Paula Silva',
    email: 'paula.silva22@email.com',
    createdAt: '2024-04-06T15:28:39.339Z',
    checkedInAt: null,
  },
  {
    id: 16864,
    name: 'Isis Barros',
    email: 'isis_barros@email.com',
    createdAt: '2024-03-13T04:51:15.792Z',
    checkedInAt: null,
  },
  {
    id: 13611,
    name: 'Júlio César Xavier',
    email: 'julioCesar.xavier43@email.com',
    createdAt: '2024-03-28T06:35:20.783Z',
    checkedInAt: '2024-03-31T20:05:22.095Z',
  },
  {
    id: 17635,
    name: 'Natália Xavier',
    email: 'natalia.xavier26@email.com',
    createdAt: '2024-03-31T06:42:40.636Z',
    checkedInAt: '2024-03-28T09:41:15.981Z',
  },
  {
    id: 11389,
    name: 'Júlio César Souza',
    email: 'juliocesar_souza56@email.com',
    createdAt: '2024-03-13T16:21:59.800Z',
    checkedInAt: null,
  },
  {
    id: 12182,
    name: 'Murilo Pereira',
    email: 'murilo.pereira@email.com',
    createdAt: '2024-03-26T04:18:42.202Z',
    checkedInAt: '2024-04-04T04:49:13.358Z',
  },
  {
    id: 13697,
    name: 'Maria Costa',
    email: 'maria_costa@email.com',
    createdAt: '2024-03-27T23:42:09.455Z',
    checkedInAt: null,
  },
  {
    id: 15015,
    name: 'Roberta Souza',
    email: 'roberta.souza92@email.com',
    createdAt: '2024-03-15T12:09:16.600Z',
    checkedInAt: null,
  },
]
