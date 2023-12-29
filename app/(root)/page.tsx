import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">

      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2
      2xl-gap-0">
       <div className="flex flex-col justify-center gap-8">
       <h1 className="h1-bold">
          Host,Connect,
          Celebrate: Your Events, Our Platform!
       </h1>
       <p className="p-regular md:p-regular-24">
       Build an event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14
       </p>
       <Button size="lg" asChild className="button w-full sm:w-fit">
        <Link href="#events">
        Explore Now
        </Link>
       </Button>
       </div>

        <Image src={"/assets/images/hero.png"}
        width={1000}
        height={1000}
         alt="hero"
         className="max-h-[700vh] object-contain object-center 2xl:max-h-[50vh]"></Image>


      </div>
        </section>

        <section id="events" 
        className="wrapper my-8 flex flex-col
        gap-8 md:gap-12">
         <h2 className="h2-bold">
          Trusted by <br/> Thousands of Events
         </h2>
         <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          Category fliter
         </div>
        </section>
    </>
  )
}
