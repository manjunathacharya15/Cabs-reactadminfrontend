
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";

import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTimes,faUserTie,faMoneyCheckAlt,faHandHoldingUsd,faFileAlt,faCarAlt,faMoneyBill,faPhoneVolume,faGifts,faUserFriends,faSuitcaseRolling,faHeadset,faUserAlt,faTruck,faHiking,faIndustry,faCarSide,faFileContract,faCreditCard,faHistory,faFileWord,faSitemap,faUserSecret,faHandshake,faInfoCircle,faQuestionCircle,faQuestion,faFileExport,faUserCog,faUserLock,faUnlockAlt,faColumns,faMapMarkedAlt,faMap } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button,  Navbar, Accordion, NavDropdown,} from '@themesberg/react-bootstrap';
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
    const { title, link, external, target, icon, image, badgeText, badgeBg = "primary", badgeColor = "primary" } = props;
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
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-dark`}>
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
              <NavItem title="Dashboard" link={Routes.DashboardOverview.path} icon={faColumns} />
              <NavItem title="Heat Map" link={Routes.Heatmap.path} icon={faMapMarkedAlt}  />
              <NavItem title="Map" link={Routes.Map.path}  icon={faMap} />
              {/* <NavItem title="Geo Fencing" icon={faHandHoldingUsd} link={Routes.Accordions.path} /> */}
              {/* <NavDropdown menuVariant="dark" eventKey="examples/" title="Roles And Permission" icon={faFileAlt}>
                <NavItem title="Add Roles" link={Routes.Signin.path} />
                <NavItem title="View Roles" link={Routes.Signup.path} />
                
              </NavDropdown> */}
              {/* <NavDropdown menuVariant="dark" id="basic-nav-dropdown"  title={<span><FontAwesomeIcon icon={faUserAlt}/> Sub Admin</span>}  image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///+rq6udnZ339/f8/PzZ2dnm5ubu7u67u7vz8/PIyMjq6uqBgYH5+flqamqUlJTBwcE2NjakpKTc3NyMjIx2dnZGRkbT09NiYmKxsbEeHh4vLy+CgoJ6enpwcHBCQkIRERFSUlIkJCRNTU1ZWVkbGxs8PDwrKysUFBSQkJAcHBwEv1nQAAAIWklEQVR4nO2diWLiOgxFCSEECBBCaNkpa2mZ//+/CVspEAOyr5CY984HFN8mkWVtLhSewbC9mvjjeNlePOXnnssoTqOw5B0ohb1BYy69JiCjVudH3C/qybv0yjDEvRx1B2rFtfTynBlXzPp2RF3pJTrx0bmjLyNIZ9LLtGaY3Ne3JZxKr9SSjzzzkk8svVYr0of1ZUykV0tnFlEEet6H9IKpzMo0gV4wmfjVJKoOxquXMDzfIVHgmdje21BawF2oT/CSUqrcdSV+g3nU3qRF3KLoLjAj0vs9vkMEZo7ASFqJgXYTpNCrt6W15HPjKEEl/JYWk8cbTqDnJdJqcsC9ozsUenNVqECvpm7v72IFet5AWtElQDOzJ1hKSzqnjxaoztgA3LUrVMVx5gwCdT1EsCE9oOiYMcTuhUda0rpOQN2ZE3VpXSceCI5asZIWdqTNJNBLpZUdaXEp7EkrO+ISfbpJRYlzuuYS6HlKUo0NPoVKolI82/0OJW4N22foeWVpbTumAZ/CkrS4HR98Aj3vS1rdFlIyjYoKrwZ+uv9NQ1rdlnsVCU5spNVlfHIKVOGZwoNsZ2jYEFHpmHw0+N5Mp98DGrZ8tqPTjo60vAIqK2pCQyDjwfInSyrS8gr/BYWsLs3/Cp/Cv6+QIyejSyGvpdGwWzBGaTJCaXkF5gOwCp9mw6pQg+c9YVWo4fS0YlVYlJaX8cWqUEWStMapUEUkitWp6Uur2zLgVKgiIswZqNER1W8/3iFDRkOYpsBXp5BRlda2hzFSM5bWtifmU6gky11g+xBLWira+Y6ISp5hkaeqbYsGt5S1FMNrSovbweq1qegx5XtHM3xpdRkjToEqTsAsBdA/aHDbWItNVMTaeHPANWl5Bd7NQsfxifctDaTlFVi6ZZQpXP7zCnmjiSrcNsbiSx3ZNc4gho4dnze9piJQw7ohqihl56yC9qbS6na4Tvu4gYYkd4bPp1BHFINxzw+m0toOsL2mkbSyI2wHKBVRmh1MSVINhRgHmKpoFbWrD1ni+ir8mSMcxd4VXTNqGMypHjOzow03Nhp6Sc6YgpuDNJR7XbCA5i80xEmvAfqnFS2p0Qtgvk2gJDN6DaoiWsW5NxdQzYJCK3NkVocoVPuOFkA1bkoO9vlAXlMlB3sDCBdc80sKeU1VBIHNAGI2Gtq3b+Ec4w/0TqDd43xSVDcv8ZKFa3mNirrnmzjaGlWhi3zWbg/xFS72cHqI6r/CLS5p79IrPEKnk7C64IwB6xOGhvqgh7AuInqdS5IsC78Vn3wvWdhFTxXlKe5iFZN6FTOzx6IERfXR/ppvegj81a7UIZcsqsloPwzVnk6lF0yG2MX+eo+Q+pqqGB9Ig6ZQZ67pNjTX7QUOvlfQ6jM0dP9QoeWhVMxOoDGiRb91R/JzIY6tUR7ozqFNLat9ud2CXLagqIbtISxGK71ElO0Hq0q+VzI2lkGM8ouc8Rdv9tVR0UTrvYA/TMeRWxY4KPt9RRfonNMeJyGk9aLW81WMFjpjNEnARbS91lJPqrTb6rG0zVSqHxqSifOU8fIHrxRNZC9iGfqsrXkHkWKx/uE77+jSE82BRIlNd8A6ie6S8rPvs15FrL2xedTSJ5qdBqdxuUHyJLeugSmxtKL6hKs7pZ7fkYj5Ocb8u8NdBoy+zlyBvi1cgbkFogC43EK0ZYQsnvkEsP9F25WtEI5CFb49zgDLqhxzoH2AtSqBG7/e3c9Gzd+B+xbAYagiLQ7gC+yd9/ksAZtqCIuxLgAm9KoL5hPxNYKumO+7v6G1PFcEYZohQVbAYA9DxSFCIiA5DmjTDky7F2IqaPlTXqC51ukb4cOHbhIRVzvcKKmE9PGHLps/pCs0MBt1zPBah7TVGLIALzB4ypANY4u1ucHNmuvkRZIQju4By6pGx7aCc5LLDWMOnVFgF3DEjklo+r/dyAV4ynnNJpsDvyGnfjoNNOCRSItPcYpew3YZ+1keXY5QD/0wxRLP3runLHOlyOUqLPfjHFfB8t+jnjNYBskf/VOOL4DayjDiGNJ9WgPLqEVaIJVlFuKpVJ1lQjatvJHjS/ldJMsxqZ5mazju2v5tCliGD5MUMvz+ecMIx5Y4JQhcMPz+uXfMMeGNEgjnMOfn+U2OG9kpOyLDfn+5XTHYMsrcHobbfy7/wQzTJCkpKfytjbXLJPwXvtCBsiHiFV7fxIF/TSkK8WMQrw/heLdJVGHzum6UXOt+F1GFeY4/PGUuqjDPzMHDJKIKpzk/At90JRXm33CAHlwrqTA/Eoae6kpRCArn/5DvbaBvhpTc8fOr0dC+IUUh+LcNV6mgz2gUzxts5kzxBfAxmJK86GJ/2lRPAHZNKaXS4PfHdCMs+NoIUrob+9OmJDD2jEhreIfG2pqmscdLqPNNG80L3arqpvHxxG7o2xDza2vkf9cYqp0BjWlCreNDPkTzfxfnt1lMLACe3sx1BKgMV92mp2aBMzbmkauYI2JgOXICdxWAOVK7Qfz5aGonEFNWusMcbQdEoyKnHhPIdO5bqUvXGz5LiWsPTYww54G5P9stUxq2EJ3fLUAJu7max8HDDxJUsf7Mdw2/N83VkbbX7gURqML7oHHjZnJuvKVWz7CSNP4g9e1YDVxqM8zbFT0e1En7XM2kcdX+ba2n/dG12zjrprSXtF5tMLeRztOO/aNs1sNylFT3JFGvU6f8rWam7jkjM0YfaY+jTuOWuDDy4+derDOcj6tPakSsZ+LWUsMj1u+tpMNyodyWUidKJyrG1YxWYz/phBVUGVypHvaKmye/lI/wvZ7Hk1Y6iMphpUZXW6qE5aToN+KlPmnXzD4Xo3V3Fb+PN37xHulmEs/XX0POT+0voduZdugEDn8AAAAASUVORK5CYII=" }>
                <NavItem title="View Sub Admins" link={Routes.Alerts.path} />
                <NavItem title="Add Subadmin" link={Routes.Accordions.path} />
                
              </NavDropdown> */}
              
              <NavDropdown id="basic-nav-dropdown" menuVariant="dark"  title={<span><FontAwesomeIcon icon={faTruck}/> Vehicle Management</span>}  image={"data:image/jpeg;base64,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" }>
              <NavItem title="Add" link={Routes.Buttons.path} />
                <NavItem title="View Vehicle" link={Routes.Modals.path} />
              
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/" title={<span><FontAwesomeIcon icon={faMoneyBill}/> Wages Percentage</span>}  image={"https://thumbs.dreamstime.com/b/wages-icon-146530019.jpg" }>
              <NavItem title="Add" link={Routes.Badges.path} />
              
              
                
                
              </NavDropdown>

              <NavDropdown menuVariant="dark" eventKey="examples/" title={<span><FontAwesomeIcon icon={faPhoneVolume}/> Call Radius Settings</span>} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add" link={Routes.Navbars.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/" title={<span><FontAwesomeIcon icon={faGifts}/> Coupon Management</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add" link={Routes.Navs.path} />
                <NavItem title="View" link={Routes.Pagination.path} />

                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faUserFriends}/> Referral Point Settings</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add " link={Routes.Popovers.path} />
           
                
              </NavDropdown>
              
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faSuitcaseRolling}/> Trip Cancellation Message Settings</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add" link={Routes.Progress.path} />
                
                
              </NavDropdown>
              {/* <CollapsableNavItem eventKey="examples/" title="Trip Cancellation Message Settings" icon={faFileAlt}>
                <NavItem title="Add" link={Routes.Signin.path} />
               
                
              </CollapsableNavItem> */}
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faHeadset}/> Support Contact Settings</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add " link={Routes.Tables.path} />
                
                
              </NavDropdown>
              
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faCarAlt}/> Driver Benefit  Scheme</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add " link={Routes.Toasts.path} />
                <NavItem title="View " link={Routes.Driverview.path} />
                
                
                
              </NavDropdown>
             
              


              {/* <NavItem title="Blocked Driver " link={Routes.Buttons.path} icon={faUserTie}image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" } /> */}
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faUserTie}/> Enroll Fleet Owner</span>} icon={faFileAlt}>
                <NavItem title="Add " link={Routes.Tooltips.path} />
                <NavItem title="View " link={Routes.Fleetowner.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faHiking}/> Enroll Passenger</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add " link={Routes.Addpassenger.path} />
                <NavItem title="View " link={Routes.Viewpassenger.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faIndustry}/> Add Corporate</span>} icon={faFileAlt}icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Add " link={Routes.Addcorporate.path} />
                <NavItem title="View " link={Routes.Viewcorporate.path} />
                
                
              </NavDropdown>
              <NavDropdown menuVariant="dark" eventKey="examples/"  title={<span><FontAwesomeIcon icon={faCarSide}/> Rides</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
              <NavItem title="Trips Report " link={Routes.Tripreports.path} />
                <NavItem title="Active Trips " link={Routes.Activetrips.path} />
                <NavItem title="Completed Trips " link={Routes.Completedtrips.path} />
                <NavItem title="Booked trips " link={Routes.Bookedtrips.path} />
                <NavItem title="Cancelled Trips " link={Routes.Cancelledtrips.path} />
                
                
              </NavDropdown>
              {/* <NavDropdown menuVariant="dark" eventKey="examples/" title="Wallets" icon={faFileAlt}>
                <NavItem title="Passenger Wallet " link={Routes.Activetrips.path} />
                <NavItem title="Driver Wallet " link={Routes.Completedtrips.path} />
                
                
              </NavDropdown> */}
              <NavDropdown menuVariant="dark" eventKey="examples/"   title={<span><FontAwesomeIcon icon={faFileContract}/> Statements</span>} icon={faFileAlt} image={"https://cdn2.vectorstock.com/i/1000x1000/40/96/taxi-cab-service-icon-vector-17874096.jpg" }>
                <NavItem title="Over All Ride statement " link={Routes.Overall.path} />
                <NavItem title="Driver Statement " link={Routes.Providerstatement.path} />
                <NavItem title="Daily Statement " link={Routes.Dailystatement.path} />
                <NavItem title="Monthly Statement " link={Routes.Monthlystatement.path} />
                <NavItem title="Yearly Statement " link={Routes.yearlystatement.path} />
                
                
              </NavDropdown>
              
              
              
             
              <NavItem title="Payment Settings" link={Routes.Paymentsetting.path} icon={faCreditCard}  />
              <NavItem title="Payment History" link={Routes.Paymenthistory.path} icon={faHistory}  />
              {/* <NavItem title="Documents Renewal Report" icon={faFileWord} link={Routes.Documentsrenewal.path}  />
              <NavItem title="Site Setting" link={Routes.Sitesetting.path} icon={faSitemap}  />
              <NavItem title="Privacy policy" icon={faUserSecret} link={Routes.Privacypolicy.path}  />
              <NavItem title="Terms" link={Routes.Terms.path} icon={faHandshake}  />
              <NavItem title="About Us" icon={faInfoCircle} link={Routes.Aboutus.path}   />
              <NavItem title="Help" link={Routes.Help.path} icon={faQuestionCircle}  />
              <NavItem title="Faq" icon={faQuestion} link={Routes.Faq.path} />
              <NavItem title="Translation" link={Routes.Translation.path} icon={faFileExport}  /> */}
              {/* <NavItem title="Admin Profile" link={Routes.Adminprofile.path} icon={faUserCog} /> */}
              <NavItem title="Change Password" icon={faUserLock} link={Routes.Changepassword.path}  />
              <NavItem title="Log Out" link={Routes.Presentation.path} icon={faUnlockAlt}  />
              
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
