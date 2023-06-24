
import Container from "./Container"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <div className="fixed shadow-sm w-full bg-white z-10">
            <div className=" py-4 border-b-[1]">
                <Container>
                    <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
                        <Logo />
                        <Search/>
                    </div>
                </Container>
            </div>
        </div> 
    )
}
export default Navbar