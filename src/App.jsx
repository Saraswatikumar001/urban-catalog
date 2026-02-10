import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Products from "./components/Products";
import NewsDetails from "./components/news/NewsDetails";
import BlogDetails from "./components/blog/BlogDetails";
import AllNews from "./components/news/AllNews";
import Contact from "./components/contact/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Blogs from "./components/blog/Blogs";
import ServiceDetails from "../public/services/ServiceDetails";
import PaverBlocks from "./components/footer-ourservices/PaverBlocks";
import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
       <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/ourservices" element={<PaverBlocks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
