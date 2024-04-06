import { http, HttpResponse } from 'msw'

import { constantAttendees } from '../data/attendees.ts'

export const attendeesMock = http.get('/attendees', ({ request }) => {
  const attendees = constantAttendees
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  const pageIndex = Number(url.searchParams.get('pageIndex') || 0)

  const filteredAttendees = attendees.filter((attendee) => {
    return query
      ? attendee.name.toLowerCase().includes(query.toLowerCase())
      : true
  })

  const total = filteredAttendees.length
  const start = pageIndex * 10
  const end = start + 10
  const pagedAttendees = filteredAttendees.slice(start, end)

  return HttpResponse.json(
    {
      attendees: pagedAttendees,
      total,
    },
    { status: 200 },
  )
})
