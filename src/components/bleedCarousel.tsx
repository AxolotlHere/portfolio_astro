"use client";

import Carousel from "../components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "CHIP-8 EMULATOR",
      button: "VIEW IN GITHUB ->",
      desc: "Built a chip-8 emulator along with a few friends. The project emulates chip-8 virtual machine and executes binary chip-8 files. The entire project is built using rust for emulation and pixels for display.",
      skills: "RUST, PIXELS",
      link: "https://github.com/AxolotlHere/chip-8.git",
    },
    {
      title: "JAB - JUST ANOTHER BASH",
      button: "VIEW IN GITHUB ->",
      desc: "Just Another Bash or JAB for short is a terminal shell build entirely using RUST. It works pretty similar to popular terminals like zsh, fish and bash. It is currently under development and huge changes will be made to the codebase soon enough to manipulate background jobs spawned.",
      skills: "RUST",
      link: "https://github.com/AxolotlHere/jab",
    },

    {
      title: "BITWARS-25",
      button: "VIEW IN GITHUB ->",
      desc: "The official site for bitwars-25 which is heavily focused on frontend. Worked with a team of 5+ people for the student chapter IEEE Computer Soceity",
      skills: "HTML, TAILWINDCSS, ASTRO",
    },
    {
      title: "DOTFILES",
      button: "VIEW IN GITHUB ->",
      desc: "Rice written from scratch for my Arch+Hyprland setup. It uses Hyprland as TM with other components such as waybar, cava, rofi. It also hosts my personal astronvim config files with support for various lsp.",
      skills: "LINUX, HYPRLANG",
      link: "https://github.com/AxolotlHere/dotfiles",
    },
    {
      title: "POKEDEX",
      button: "VIEW IN GITHUB ->",
      desc: "A cross platform application built using pokeapi integration that searches up pokemons, their dimensions, abilities and movesets covering up all the generations introduced with a clean UI.",
      skills: "DART, FLUTTER, RAPIDAPI",
      link: "https://github.com/AxolotlHere/pokedex",
    },
    {
      title: "CRYPTOCHESS",
      button: "VIEW IN GITHUB ->",
      desc: "A cross platform application built using rapidapi integrations and a responsive chessboard that fetches puzzles of a certain rating level which the user should solve. But before the peices get rendered, the user has to decode the encoded peices of the puzzle. The encryption methods are simple ones since the game is a race against time with a timer running in the background.",
      skills: "DART, FLUTTER, RAPIDAPI",
      link: "https://github.com/AxolotlHere/Cryptochess",
    },
    {
      title: "STOCKLE",
      button: "VIEW IN GITHUB ->",
      desc: "An inventory management system built especially for mining companies. The employee email IDs are not public and uses a particular domain to distinguish between customer and an employee.",
      skills: "NEXTJS, FIREBASE",
      link: "https://github.com/AxolotlHere/Stockle",
    },
    {
      title: "CYSCOM-MOD",
      button: "VIEW IN GITHUB ->",
      desc: "A cross platform moderation application built on top of a backend. It was built for member task management and a points system for a student chapter/club at my college with separate admin and user roles and custom UI.",
      skills: "DART,FLUTTER, FIREBASE",
      link: "https://github.com/AxolotlHere/CYSCOM-mod",
    },
    {
      title: "RASCADE",
      button: "VIEW IN GITHUB ->",
      desc: "A cross platform application which we at IEEERAS built for our flagship event RAScade. Worked with 5 members on the appdev department to build an application supportin qr features for moderating and managing participants data at the event.",
      skills: "DART, FLUTTER, FIREBASE",
      link: "https://github.com/warooon/Rascade",
    },
    {
      title: "GARDEN",
      button: "VIEW IN GITHUB ->",
      desc: "A cross platform application built for a hackathon. Uses 3D model with a custom written 3D controller monitoring the current state of the model to constantly update other details. It is build as a tool for promoting ayurvedic medicine with a large database of medicinal plants.",
      skills: "DART, FLUTTER, FIREBASE",
      link: "https://github.com/AxolotlHere/Garden",
    },
    {
      title: "FEST FOR STUDENTS",
      button: "VIEW IN GITHUB ->",
      desc: "A desktop native anti cheat examination software that uses Machine Learning models to detect any suspicious activity during an exam. It lets teacher's host mcq based exams and once the exams get over, it lets the mentor view individual statistics of students.",
      skills: "PYTHON, MACHINE LEARNING, SQL, TKINTER",
      link: "https://github.com/AxololtHere/Fest-for-students",
    },
    {
      title: "FEST FOR STUDENTS (REMAKE)",
      button: "VIEW IN GITHUB ->",
      desc: "A desktop native anti cheat examination software that works as the same as the previous application but is build using a stack suitable for native app development with much cleaner UI and a fresh user profile system.",
      skills: "C#, MACHINE LEARNING, SQL, .NET MAUI",
      link: "https://github.com/AxolotlHere/Fest-for-students",
    },
    {
      title: "WEB SERVER",
      button: "VIEW IN GITHUB ->",
      desc: "A lightweight multithreaded web server. It features a thread pool to efficiently manage concurrent client connections without spawning new threads per request. Supports basic HTTP request handling, static file serving, and clean shutdown.",
      skills: "RUST",
      link: "https://github.com/AxolotlHere/http-rust",
    },
    {
      title: "VNC SERVER SCRIPTS",
      button: "VIEW IN GITHUB ->",
      desc: "A WayVNC-based headless remote desktop environment for a wayland compositor build using WayVNC, NeatVNC, and AML.",
      skills: "LINUX, VNC, WAYLAND COMPOSITOR",
      link: "https://github.com/AxolotlHere/vnc-scripts",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-1">
      <Carousel slides={slideData} />
    </div>
  );
}
