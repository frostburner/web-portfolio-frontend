import React from "react";

const Navbar = () => {
    return (
        <nav className="flex item-center justify-around w-96 test-nav inter-regular">
            <ul className="flex list-none">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            </ul>
            <button
                className="bg-cyan-400 text-white font-semibold px-5 py-2 rounded hover:bg-cyan-700 transition-colors inter-regular"
                onClick={() => window.location.href = "#contact"}
            >
                Contact Me
            </button>
        </nav>
    );
}
export default Navbar;