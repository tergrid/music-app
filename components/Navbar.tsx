"use client"

import { React } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useState } from "react";
export default function Navbar(){
  
  const [active, setActive] = useState<string | null>(null);

  return(
    <div>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/all-courses">All Courses</HoveredLink>
            <HoveredLink href="/basic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/advanced-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/songwriting">Songwriting</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>  
        </HoveredLink>
        </Menu>
      </div>
    </div>
  )

}
