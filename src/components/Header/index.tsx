import BaseContainer from "../BaseContainer";
import MainHeaderSection from "./components/MainHeaderSection";
import UserNavSection from "./components/UserNavSection";

export default function Header() {
  return (
    <BaseContainer className="bg-orange-400 text-white">
      <header>
        <UserNavSection />
        <MainHeaderSection />
      </header>
    </BaseContainer>
  )
}
