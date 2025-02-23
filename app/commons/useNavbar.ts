import { LottieRefCurrentProps } from "lottie-react";
import React from "react";
import { useState, useEffect } from "react";
import { links } from "./Constants";

export default function useNavbar() {
  let [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let sections = links.map((link, k) => document.getElementById(link.id));

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
      section && observer.observe(section);
    });
  }, []);

  useEffect(() => {
    if (open) lottieRef.current?.playSegments([0, 15], true);
    else lottieRef.current?.playSegments([15, 0], true);
  }, [open]);

  return { links, activeSection, open, setOpen, lottieRef };
}
