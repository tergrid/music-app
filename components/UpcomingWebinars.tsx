"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "The Fretboard Blueprint",
    description:
      "Mastering the Fretboard: A streamlined approach to guitar scales and rhythmic precision for the modern session player.",
    link: "https://yourmusicacademy.com/guitar-blueprint",
  },
  {
    title: "Scores for the Screen",
    description:
      "Cinematic Composition: A deep dive into film scoring and evocative piano arrangements for visual storytelling.",
    link: "https://yourmusicacademy.com/film-scoring",
  },
  {
    title: "Harmonic Navigation",
    description:
      "The Librarian of Sound: An advanced music theory webinar focused on navigating complex modulations and harmonic structures.",
    link: "https://yourmusicacademy.com/advanced-theory",
  },
  {
    title: "The Connected Artist",
    description:
      "The Virtual Ensemble: A masterclass in collaborative songwriting and performing in synchronized digital spaces.",
    link: "https://yourmusicacademy.com/digital-collaboration",
  },
  {
    title: "Home Studio Mastery",
    description:
      "The Complete Producer: An all-in-one guide to home studio setup, vocal processing, and professional audio engineering.",
    link: "https://yourmusicacademy.com/production-essentials",
  },
  {
    title: "Keys to Technique",
    description:
      "Foundations of the Keys: A structured, technical approach to classical piano technique and digital keyboard integration.",
    link: "https://yourmusicacademy.com/piano-foundations",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">ENHANCED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10 text-center">
          <HoverEffect items={featuredWebinars.map(webinar=>(
            { title: webinar.title,
              description: webinar.description,
              link: webinar.link,
            }))}></HoverEffect>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"} className="-px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
