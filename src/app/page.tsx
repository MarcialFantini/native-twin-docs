"use client";
import { ButtonVariable } from "@/components/ButtonVariable";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative ">
      <header>
        <div>
          <h1>Rapidly build modern websites without ever leaving your HTML.</h1>
          <p>
            A utility-first CSS framework packed with classes
            like flex, pt-4, text-center and rotate-90 that can be composed to
            build any design, directly in your markup.
          </p>
          <div>
            <ButtonVariable text="See more" />
          </div>
        </div>
        <picture>
          <Image src={""} alt=""></Image>
        </picture>
      </header>
    </div>
  );
}
