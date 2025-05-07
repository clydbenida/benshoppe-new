import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/gigya";

export default function UserDropdown() {
  const onClickLogout = async () => {
    await logoutUser();
    window.location.href = "/";
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xs cursor-pointer">User</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onClickLogout}>
           Logout 
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
