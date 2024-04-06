import { AttendeeList } from './components/attendee-list.tsx'
import { Header } from './components/header.tsx'

export function App() {
  return (
    <div className="mx-auto flex max-w-[1216px] flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
