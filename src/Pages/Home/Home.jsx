import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MedicoHome from '../../Components/MedicoHome/MedicoHome';
import EspHome from '../../Components/EspHome/EspHome';
import BannerHome from '../../Components/BannerHome/BannerHome';
import PortalHome from '../../Components/PortalHome/PortalHome';

export default function Home() {
  return (
    <>
      <Header />
      <MedicoHome />
      <EspHome />
      <PortalHome />
      <BannerHome />
      <Footer />
    </>
  );
}
