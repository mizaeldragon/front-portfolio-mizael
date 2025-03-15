import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-scroll"; // Substituí por "react-scroll" para navegação interna
import {
  Menu,
  User,
  Brain,
  NotebookPen,
  Folder,
  MessageSquare,
} from "lucide-react";

export function NavMenuMobile() {
  return (
    <div className="z-[59] bg-gradient-to-r p-2 to-slate-950 via-blue-800 from-slate-950 text-white fixed w-full select-none shadow-md shadow-slate-950">
      <DropdownMenu className="z-[99]">
        <DropdownMenuTrigger>
          <Menu className="w-9 h-8 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-950 text-white rounded-lg shadow-lg">
          {/* Home */}
          <Link to="home" smooth={true} duration={500}>
            <DropdownMenuItem className="cursor-pointer text-xl font-mono font-bold flex items-center gap-4">
              <User />
              Home
            </DropdownMenuItem>
          </Link>

          {/* About */}
          <Link to="about" smooth={true} duration={500}>
            <DropdownMenuItem className="cursor-pointer text-xl font-mono font-bold flex items-center gap-4">
              <Brain />
              Sobre
            </DropdownMenuItem>
          </Link>

          {/* Skills */}
          <Link to="skills" smooth={true} duration={500}>
            <DropdownMenuItem className="cursor-pointer text-xl font-mono font-bold flex items-center gap-4">
              <NotebookPen />
              Habilidades
            </DropdownMenuItem>
          </Link>

          {/* Projects */}
          <Link to="projects" smooth={true} duration={500}>
            <DropdownMenuItem className="cursor-pointer text-xl font-mono font-bold flex items-center gap-4">
              <Folder />
              Projetos
            </DropdownMenuItem>
          </Link>

          {/* Contact */}
          <Link to="contact" smooth={true} duration={500}>
            <DropdownMenuItem className="cursor-pointer text-xl font-mono font-bold flex items-center gap-4">
              <MessageSquare />
              Contato
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
