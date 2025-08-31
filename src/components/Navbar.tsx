"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Players">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Harmanpreet Kaur"
              href="https://en.wikipedia.org/wiki/Harmanpreet_Kaur"
              src="https://imgs.search.brave.com/9s7R67DtBB2rtUVGafVClzIKDj69UIBwCDiBELwu8Ic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/NTY3MTYwOS9waG90/by9tdW1iYWktaW5k/aWEtaGFybWFucHJl/ZXQta2F1ci1vZi1p/bmRpYS1wcmlvci10/by10aGUtdDIwLWlu/dGVybmF0aW9uYWwt/c2VyaWVzLWJldHdl/ZW4taW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUQ5/Qnp0TGVlOGhfVUpI/Z0R5QkFiTFBmWGJQ/Ql9jRzc3QV9IbGst/S0dONE09"
              description="Captain of Indian Women's Cricket Team. Right-hand batter, off-break bowler. First Indian woman to score a T20I century."
            />
            <ProductItem
              title="Smriti Mandhana"
              href="https://en.wikipedia.org/wiki/Smriti_Mandhana"
              src="https://i.pinimg.com/originals/3a/1b/15/3a1b15567c53563b637628251f066247.jpg"
              description="Vice-captain, stylish left-hand opener. ICC Women’s Cricketer of the Year (2018, 2021)."
            />
            <ProductItem
              title="Pratika Rawal"
              href="https://en.wikipedia.org/wiki/Pratika_Rawal"
              src="https://imgs.search.brave.com/Guzfnf8JrbvqKR8FDEuHXQtaTbgDtM0ToYakAD59sEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL291dGxvb2tp/bmRpYS8yMDI0LTEy/LTIyLzM1bjVkbWRx/L0dmWXlJY1FhUUFB/TVNKay5qcGc_dz04/MDEmYXV0bz1mb3Jt/YXQsY29tcHJlc3Mm/Zml0PW1heCZmb3Jt/YXQ9d2VicCZkcHI9/MS4w"
              description="All-rounder, right-hand batter and off-break bowler. ODI debut in 2024, maiden century in Jan 2025."
            />
            <ProductItem
              title="Harleen Deol"
              href="https://en.wikipedia.org/wiki/Harleen_Deol"
              src="https://imgs.search.brave.com/NjVRmz3FHwoTaW0ZfxPXqo0OZTftImFqxEsWXcad7dI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MzEwNDIxNC9waG90/by9zdGVsbGVuYm9z/Y2gtc291dGgtYWZy/aWNhLWhhcmxlZW4t/ZGVvbC1vZi1pbmRp/YS1wb3Nlcy1mb3It/YS1wb3J0cmFpdC1w/cmlvci10by10aGUt/aWNjLXdvbWVucy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/R1dTMWlmOVBOYW5B/R3VkdC1BMkdxRHdx/Yml3N3lmMnVubDJN/TXRhX2NEWT0"
              description="All-rounder, right-hand batter and leg-break bowler. Famous for her acrobatic fielding."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="News"></MenuItem>
      </Menu>
    </div>
  );
}
