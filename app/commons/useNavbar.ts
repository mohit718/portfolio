"use client";
import { useEffect, useState } from "react";
import { links } from "./Constants";

export default function useNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            if (entry.target.id == link.id) {
              setActiveSection(link.id);
            }
          });
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, []);

  return { links, activeSection, open, setOpen };
}
