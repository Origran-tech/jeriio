import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import ContextMenu from "./context-menu/Menu";
import FormNote from "./newnote.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import Bulle from "../components/Bulle";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Vos notes plus facilement avec jeriio"
        />
        <title>Jeriio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContextMenu />
      <div className="pt-16 px-16 bg-origran-red h-screen font-default text-origran-black">
        <div className="-ml-16 fixed justify-between top-0 flex bg-origran-white bg-opacity-25 backdrop-filter backdrop-blur-sm w-full h-10 items-center p-5">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPen} />
            <p className="ml-5">Jeriio</p>
          </div>
          {/*>*/}
          <div className="w-full mx-4">
            <p className="marquee">
              <span>
                Bienvenue Origran User ! Vous avez actuellement 0 notes, 0 notes
                importantes, 0 notes archivés et 0 notes dans la corbeille.&nbsp;
              </span>
            </p>
            <p className="marquee marquee2">
              <span>
                 Bienvenue Origran User ! Vous avez actuellement 0 notes, 0 notes
                importantes, 0 notes archivés et 0 notes dans la corbeille.&nbsp;
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="mr-5">Principal</p>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="bg-origran-white bg-opacity-25 backdrop-filter backdrop-blur-sm" style={{height:"100vh", width:"100%"}}>
          <Bulle />
        </div>
      </div>
    </div>
  );
}
