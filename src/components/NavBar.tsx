import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
  return (
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize='40px'/>
        <ColorModeSwitch/>
      </HStack>
  )
}
export default NavBar
