import React from "react";
import Header from "../component/header/Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* START HEADER */}
      <header>
        <nav className="navbar navbar-light navbar-expand-lg sticky">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src="Resources/Img/Logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav-a"
              aria-expanded="false"
            >
              <span className="three_bar">
                <i className="fas fa-bars" />
              </span>
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarNav-a"
              style={{}}
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Modules
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Why Dorjisoft
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Price
                  </a>
                </li>
              </ul>
              <div className="sing">
                <a className="sing-cls" href="#">
                  Sign In
                </a>
              </div>
              <div className="getfor">
                <a className="nav-free" href="#">
                  Get Started For Free
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* END HEADER */}
      {/* START BANNER SECTION */}
      <section id="banner" className="js--services-section">
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-sm-6">
              <div className="hero-text">
                <h1>Tailor Shop Management Software</h1>
                <p>
                  DorjiSoft offers smart, industry-tailored solutions to solve
                  the problems of small and medium businesses. We will help you
                  access and manage your organization effectively.{" "}
                </p>
                <div className="row">
                  <div className="col">
                    <a className="order-start" href="#">
                      GET FOR STARED ORDER
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 offset-1 col-md-6 offset-md-0 offset-sm-0">
              <div className="img img-cls">
                <img src="Resources/Img/banner.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END BANNER SECTION */}
      {/* RECTANGLE SVG */}
      <section id="test">
        <img src="Resources/Img/Rectangle_38.png" alt="" />
      </section>
      {/* CLOUD SECTION START */}
      <section id="cloud-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="text">
                <h1>
                  Cloud-based <span> Software</span>
                </h1>
                <p>
                  All-in-one, cloud ERP Solution to Manage your Finance,
                  Accounting, Sales, Invoices, Inventory, Clients Relations,
                  HRM, Operations and more
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-6 hide-sm">
              <div className="img rafiki-cls">
                <img src="Resources/Img/rafiki.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CLOUD SECTION START */}
      {/* START VALUE SECTION */}
      <section id="value">
        <div className="container">
          <div className="row row-padding">
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item">
                  <img src="Resources/Img/MarketingSales.png" alt="Marketing" />
                  <span>Sales</span>
                </div>
                <div className="item-para sales">
                  <p>
                    Create and send online quotations and invoices, track sales,
                    monitostaff performance, and sell &amp; sync all your
                    products via our POS anmore.
                  </p>
                </div>
                <div className="item-learn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item">
                  <img src="Resources/Img/Accounting.png" alt="Marketing" />
                  <span>Accounting</span>
                </div>
                <div className="item-para accout-oper account">
                  <p>
                    Manage your cash flow, purchases, taxes, profit &amp; loss,
                    balance sheet, sales, chart of accounts, income statement,
                    assets and more.
                  </p>
                </div>
                <div className="item-learn">
                  <a className="active" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item">
                  <img src="Resources/Img/Leadership.png" alt="Marketing" />
                  <span>Operations</span>
                </div>
                <div className="item-para accout-oper">
                  <p>
                    Create and manage work orders, assign clients and employees,
                    incomes, and invoices, schedule appointments and more.
                  </p>
                </div>
                <div className="item-learn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item">
                  <img
                    src="Resources/Img/GraphicalPresentation.png"
                    alt="Marketing"
                  />
                  <span>HR</span>
                </div>
                <div className="item-para">
                  <p>
                    Create and send online quotations and invoices, track sales,
                    monitor staff performance, and sell &amp; sync all your
                    products via our POS and more.
                  </p>
                </div>
                <div className="item-learn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item">
                  <img src="Resources/Img/Investor.png" alt="Marketing" />
                  <span>Inventory</span>
                </div>
                <div className="item-para">
                  <p>
                    Create and send online quotations and invoices, track sales,
                    monitor staff performance, and sell &amp; sync all your
                    products via our POS and more.
                  </p>
                </div>
                <div className="item-learn">
                  <a className="active" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 vlaue-width">
              <div className="item">
                <div className="img_and_item crm">
                  <img src="Resources/Img/crm.png" alt="Marketing" />
                  <span>CRM</span>
                </div>
                <div className="item-para">
                  <p>
                    Create and send online quotations and invoices, track sales,
                    monitor staff performance, and sell &amp; sync all your
                    products via our POS and more.
                  </p>
                </div>
                <div className="item-learn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END VALUE SECTION */}
      {/*VECTOR RECTANGLE SVG */}
      <section id="value-vector">
        <img src="Resources/Img/Vector_4.png" alt="" />
      </section>
      {/* START IMPRESSIVE SECTION */}
      <section id="impressive">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-6 impressive-ms">
                <div className="text">
                  <h1>
                    Impressive Features of Darji Soft <span>Software</span>{" "}
                  </h1>
                  <p>
                    In our powerful embroidery shop solution, we have offered
                    magnificent features to satisfy your customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END IMPRESSIVE SECTION */}
      {/* START SYSTEM SECTION */}
      <section id="system">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row items-padding">
                <div className="col-2">
                  <img src="Resources/Img/icon.png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>Tailoring Management module</h3>
                  <p>
                    With our tailor shop management solution, you can manage one
                    or more shops to keep the records of your respected
                    customers. The records you may keep include measurements,
                    name, phone numbers, work in progress or finished task,
                    cloths details etc. You can use all these records to search
                    the customers or to check the current status of the cloth
                    wise orders you may track the current status of the order to
                    print and stick the status on the cloth according to
                    categories like work in progress or finished.
                  </p>
                </div>
              </div>
              <div className="row items-padding">
                <div className="col-2">
                  <img src="Resources/Img/icon(7).png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>POS Dashboard</h3>
                  <p>
                    With our tailor shop management solution, you can manage one
                    or more shops to keep the records of your respected
                    customers. The records you may keep include measurements,
                    name, phone numbers, work in progress or finished task,
                    cloths details etc. You can use all these records to search
                    the customers or to check the current status of the cloth
                    wise orders you may track the current status of the order to
                    print and stick the status on the cloth according to
                    categories like work in progress or finished.
                  </p>
                </div>
              </div>
              <div className="row items-padding">
                <div className="col-2">
                  <img src="Resources/Img/icon8.png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>Efficient Accounting</h3>
                  <p>
                    You do not need to be trained in accounting to handle our
                    accounting software module. With our software, you may
                    define and manage personalized account charts for your
                    tailoring shop. Our VAT enabled accounting options to let
                    you manage daily journal entries and transactions, bills,
                    Receivables &amp; Payables, and financial reports.
                  </p>
                </div>
              </div>
              <div className="row items-padding">
                <div className="col-2">
                  <img src="Resources/Img/icon(1).png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>Multiple Tailor Shop Management</h3>
                  <p>
                    Our software allows tailors and boutique owners to manage
                    the records of their multiple tailor shops. The data
                    includes customer details, clothes, measurements, status,
                    accounts, and other details.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row items-padding hide-display">
                <div className="col-12 avatar">
                  <img src="Resources/Img/Group_20.png" />
                </div>
              </div>
              <div className="row items-padding items-detais-top">
                <div className="col-2">
                  <img src="Resources/Img/icon(2).png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>Smart Billing</h3>
                  <p>
                    Our solution provides a features-rich billing system with
                    single or multiple register options and multiple payment
                    methods. Every bill printed by the software is VAT enabled.
                    When you use our tailoring software, it would be very
                    convenient to track the payment by the customers in case you
                    need to manage pending payments.
                  </p>
                </div>
              </div>
              <div className="row items-padding">
                <div className="col-2">
                  <img src="Resources/Img/icon(3).png" alt="Management" />
                </div>
                <div className="col-10">
                  <h3>Manage Employees and Suppliers</h3>
                  <p>
                    With our in build hr payroll software, you can record all
                    the amount of work finished by every employee in a day. It
                    allocates the work to each employee and supplier and ensures
                    that all the tasks, due by the given date, are finished
                    within the deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SYSTEM SECTION */}
      {/* START BUSINESS SECTION */}
      <section id="business">
        <div className="container">
          <div className="row">
            <div className="col-6 business-width">
              <h1>
                Why DorjiSoft is your perfect business <span>solution?</span>{" "}
              </h1>
            </div>
          </div>
          <div className="row business-background">
            <div className="col-6 business-paddings">
              <div className="pre">
                <i className="fas fa-chevron-left " />
              </div>
              <h2>Personalized Experience</h2>
              <p>
                Create your own invoice layout from a whole range of templates,
                upload your logo, selectet the Site Colors of your brand, and
                Adjust your Personalized Settings.
              </p>
              <div className="dot-dot-2">
                <img src="Resources/Img/Dot_Effect.png" />
              </div>
            </div>
            <div className="col-6 business-padding">
              <div className="dot-dot">
                <img src="Resources/Img/Dot_Effect.png" />
              </div>
              <img src="Resources/Img/slider_1.png" />
              <div className="costom">
                <h3>Customizable</h3>
              </div>
              <div className="next">
                <i className="fas fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="row disable">
            <div className="col-3">
              <h3>Supported</h3>
            </div>
            <div className="col-3 secure">
              <h3>Secure</h3>
            </div>
            <div className="col-3 customizable">
              <h3>Customizable</h3>
            </div>
            <div className="col-3">
              <h3>Accessible</h3>
            </div>
          </div>
        </div>
      </section>
      {/* END BUSINESS SECTION */}
      {/* START OUR PATNER SECTION */}
      <section id="patner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Our success <span>partners</span>{" "}
              </h1>
            </div>
          </div>
          <div className="row icon-head">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon">
                <img src="Resources/Img/paypallogo.png" alt="amazon" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon amazon">
                <img src="Resources/Img/amazon.png" alt="amazon" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon">
                <img src="Resources/Img/Vector.png" alt="amazon" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon aliant">
                <img src="Resources/Img/Group(1).png" alt="amazon" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon vector">
                <img src="Resources/Img/Vector(1).png" alt="amazon" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="icon amazon">
                <img src="Resources/Img/Logoen logo.png" alt="amazon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR PATNER SECTION */}
      {/* START USER SECTION */}
      <section id="user">
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-sm-12">
              <div className="user-item">
                <h1>
                  Join our 60,000 <span>happy users</span>
                </h1>
                <p>
                  Unleash new opportunities by managing your business through
                  enerpize where productivity goes hand in hand with relaxation
                  and necessity meets simplicity.
                </p>
                <div className="row">
                  <div className="col-8 col-sm-12">
                    <div className="user-btn">
                      <a className="users-cls" href="#">
                        Get started for free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-6">
              <div className="user-item-2">
                <img src="Resources/Img/user1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END USER SECTION */}
      {/* START TESTIMONIAL SECTION */}
      <section id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Testimonials</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mx-auto comment-conner">
              <div className="row">
                <div className="col-1">
                  <span>"</span>
                </div>
                <div className="col-11">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras aenean risus euismod iaculis eget arcu scelerisque.
                    Volutpat dui ligula fames malesuada.
                  </p>
                  <h5>Kaniz Fatema</h5>
                </div>
              </div>
              <div className="div-img">
                <img src="Resources/Img/Ellipse_73.png" alt="Ellipse" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TESTIMONIAL SECTION */}
      {/* START DOWNLOAD SECTION */}
      <section id="downlaod">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="img-part">
                <img
                  className="phone-cls"
                  src="Resources/Img/phone.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-part">
                <h1>
                  Download Our <span>DorjiSoft</span>{" "}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  arcu eget arcu ut euismod leo.{" "}
                </p>
                <div className="row app-download">
                  <div className="col-lg-5">
                    <a href="#">
                      <img src="Resources/Img/google_play.png" alt="google" />
                    </a>
                  </div>
                  <div className="col-lg-5">
                    <a href="#">
                      <img src="Resources/Img/app_store.png" alt="app" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END DOWNLOAD SECTION */}
      {/* START FOOTER SECTION */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-2 part-3">
              <div className="title">
                <h3>Company</h3>
              </div>
              <ul>
                <li>Docs</li>
                <li>Abouts</li>
                <li>Get in Touch</li>
              </ul>
            </div>
            <div className="col-3 part-3">
              <div className="title">
                <h3>Modules</h3>
              </div>
              <div className="list">
                <p>POS Management Softwer</p>
                <p>Invoicing Management System</p>
                <p>Human Resource Management Softwer</p>
                <p>Sales Management Softwer</p>
                <p>Accounting Management softwer</p>
              </div>
              <a className="sell" href="#">
                See All
              </a>
            </div>
            <div className="col-3 part-3">
              <div className="title">
                <h3>Blog</h3>
              </div>
              <div className="list">
                <p>The Complete Guid to CRM</p>
                <p>The Ultimate Cheat Sheet on Payrol</p>
                <p>What is the HR Management?</p>
                <p>Complete Guid Of invoicing</p>
                <a className="sell" href="#">
                  See All
                </a>
              </div>
            </div>
            <div className="col-2 part-2">
              <div className="title">
                <h3>Download</h3>
              </div>
              <ul>
                <li>Android</li>
                <li>Ios</li>
                <li>Windows</li>
              </ul>
            </div>
            <div className="col-2 part-2">
              <div className="title">
                <h3>Helps</h3>
              </div>
              <div className="list">
                <p>
                  Contact Dorjisoft Support team if you have any technical
                  issues.
                </p>
              </div>
              <div className="support">
                <div className="jamela-kortasos-toi">
                  <img src="Resources/Img/support.png" alt="" />
                  <p>Support</p>
                </div>
                <div className="icon-helps">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* END FOOTER SECTION */}
      {/*======================================================*/}
      {/*================JAVASCRIPT VENDORS FILE===============*/}
      {/* Bootstrap cdn link */}
      {/*JQUERY CDN LINK*/}
      {/*HTML5 Shiv*/}
      {/*Respond.js*/}
      {/*WAYPOINTS*/}
      {/*Selectivizr*/}
      {/*======================================================*/}
      {/*Create JAVASCRIPT FILE*/}
    </>
  );
}
