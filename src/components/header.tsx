import nlwIconUnite from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link.tsx'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwIconUnite} alt="Logotipo NLW Unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="" className="text-sm font-medium text-zinc-300">
          Eventos
        </NavLink>
        <NavLink href="" className="text-sm font-medium">
          Participantes
        </NavLink>
      </nav>
    </div>
  )
}
