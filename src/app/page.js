import Head from "next/head";
import Nav from "@/app/components/Nav";
import Cta from "@/app/components/Cta";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import ServicesTwo from "@/app/components/ServicesTwo";
import ServicesThree from "@/app/components/ServicesThree";
import ServicesFour from "@/app/components/ServicesFour";
import Quote from "@/app/components/Quote";
import RootLayout from "./layout";

import Faq from "@/app/components/Faq";
import Form from "@/app/components/Form";
import Footer from "@/app/components/Footer";
import Accolades from "@/app/components/Accolades";
import Stats from "@/app/components/Stats";

export default function Home() {
  return (
    <>
      <Nav />
      <Cta />
      <Stats />
      <About />
      <Accolades />
      <ServicesFour />
      <Services />
      <ServicesTwo />
      <ServicesThree />
      <Quote />
      <Faq />
      <Form />
      <Footer />
    </>
  );
}
