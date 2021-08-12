
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTimes,faUserTie,faMoneyCheckAlt,faHandHoldingUsd,faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button,  Navbar, Accordion,} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center ">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level "  >
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>

        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={"http://www.onlinewebfonts.com/icon"} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Priyanka Padmini</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Presentation.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Dashboard" link={Routes.DashboardOverview.path} image={"data:image/svg+xml;base64,CjxpbWcgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7IiBzcmM9Ii8vcGljLm9ubGluZXdlYmZvbnRzLmNvbS9zdmcvaW1nXzU1NTM3My5wbmciIGFsdD0iUGxheSBTcG9ydCBDYXJyb20gQm9hcmQgU3RyaWtlIFF1ZWVuIj4KICA="  } />
              <NavItem title="Heat Map" link={Routes.Buttons.path} icon={faUserTie}npm />
              <NavItem title="Map" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Geo Fencing" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <CollapsableNavItem eventKey="examples/" title="Roles And Permission" icon={faFileAlt}>
                <NavItem title="Add Roles" link={Routes.Signin.path} />
                <NavItem title="View Roles" link={Routes.Signup.path} />
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="SubAdmin" icon={faFileAlt}>
                <NavItem title="View Sub Admins" link={Routes.Alerts.path} />
                <NavItem title="Add Subadmin" link={Routes.Accordions.path} />
                
              </CollapsableNavItem>
              
              <CollapsableNavItem eventKey="examples/" title="Vehicle Manganement" icon={faFileAlt}>
              <NavItem title="Add" link={Routes.Buttons.path} />
                <NavItem title="View Vehicle" link={Routes.Modals.path} />
              
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Wages Percentage" icon={faFileAlt}>
              <NavItem title="Add" link={Routes.Badges.path} />
              
              
                
                
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Call Radius Setting" icon={faFileAlt}>
                <NavItem title="Add" link={Routes.Navbars.path} />
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Coupon Management" icon={faFileAlt}>
                <NavItem title="Add" link={Routes.Navs.path} />
                <NavItem title="View" link={Routes.Pagination.path} />

                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Referral Point Settings" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Popovers.path} />
           
                
              </CollapsableNavItem>
              <NavItem title="Notification" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <CollapsableNavItem eventKey="examples/" title="Trip Cancellation Message Settings" icon={faFileAlt}>
                <NavItem title="Add" link={Routes.Progress.path} />
                
                
              </CollapsableNavItem>
              {/* <CollapsableNavItem eventKey="examples/" title="Trip Cancellation Message Settings" icon={faFileAlt}>
                <NavItem title="Add" link={Routes.Signin.path} />
               
                
              </CollapsableNavItem> */}
              <CollapsableNavItem eventKey="examples/" title="Support Contact Settings" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Tables.path} />
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Notification" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Signin.path} />
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Driver Benefit  Scheme" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Toasts.path} />
                <NavItem title="View " link={Routes.Signin.path} />
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Airport Rides" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Signin.path} />
                <NavItem title="View " link={Routes.Signin.path} />
                
                
              </CollapsableNavItem>
              


              <NavItem title="Blocked Driver " link={Routes.Buttons.path} icon={faUserTie}npm />
              <CollapsableNavItem eventKey="examples/" title="Enroll Fleet Owner" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Tooltips.path} />
                <NavItem title="View " link={Routes.Fleetowner.path} />
                
                
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="examples/" title="Add Corporate" icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Signin.path} />
                <NavItem title="View " link={Routes.Signin.path} />
                
                
              </CollapsableNavItem>
              <NavItem title="Rides" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Active Trips" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Completed Trips" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Booked Trips" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Cancelled Trips" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Wallet" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Passenger Wallet" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Driver Wallet" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Statement" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Over Ride Statement" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Driver Statement" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Daily Statement" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Monthly Statement" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Yearly Statement" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Payment Settings" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Documents Renewal Report" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Site Setting" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Privacy policy" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Terms" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="About Us" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Help" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              <NavItem title="Faq" icon={faHandHoldingUsd} link={Routes.Accordions.path} />
              <NavItem title="Translation" link={Routes.Alerts.path} icon={faMoneyCheckAlt} />
              
              {/* <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem> */}
              {/* 
               <NavItem title="Settings" icon={faCog} link={Routes.Settings.path} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem>

              <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/charts" target="_blank" badgeText="Pro" icon={faChartPie} />

              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart.path} />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
              </CollapsableNavItem>
              <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank" image={ThemesbergLogo} /> */}

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
            };