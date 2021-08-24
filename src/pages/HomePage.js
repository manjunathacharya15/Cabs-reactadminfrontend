import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Fleetowner from "../components/Fleetowner";
import Addpassenger from "../components/addpassenger";
import Viewpassenger from "../components/viewpassenger";
import Editpassenger from "../components/editpassenger";
import Addcorporate from "../components/addcorporate";
import Viewcorporate from "../components/viewcorporate";
import Editcorporate from "../components/editcorporate";
import Enrolledit from "../components/enrolledit";
import Editenroll from "../components/editenroll";
import Addvehicle from "../components/addvehicle";
import Activetrips from "../components/activetrips";
import Completedtrips from "../components/completedtrips";
import Bookedtrips from "../components/bookedtrips";
import Cancelledtrips from "../components/cancelledtrips";
import Overall from "../components/overall";
import Providerstatement from "../components/providerstatement";
import Dailystatement from "../components/dailystatement";
import Monthlystatement from "../components/monthlystatement";
import yearlystatement from "../components/yearlystatement";
import Paymentsetting from "../components/paymentsetting";
import Paymenthistory from "../components/paymenthistory";
import Sitesettings from "../components/sitesettings";
import Translation from "../components/translation";
import Documentsrenewal from "../components/documentsrenewal";
import Terms from "../components/terms";
import Privacypolicy from "../components/privacypolicy";
import Aboutus from "../components/aboutus";
import Help from "../components/help";
import Faq from "../components/faq";
import Adminprofile from "../components/adminprofile";
import Changepassword from "../components/changepassword";
import Editdocumentrenewal from "../components/editdocumentrenewal";
import Heatmap from "../components/heatmap";
import Map from "../components/map";
import Bookedrides from "../components/bookedrides";
import Completedrides from "../components/completedrides";
import Activerides from "../components/activerides";
import Cancelledrides from "../components/cancelledrides";
import Tripreports from "../components/tripreports";
import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Fleetowner.path} component={Fleetowner} />
    <RouteWithSidebar exact path={Routes.Addpassenger.path} component={Addpassenger} />
    <RouteWithSidebar exact path={Routes.Viewpassenger.path} component={Viewpassenger} />
    <RouteWithSidebar exact path={Routes.Editpassenger.path} component={Editpassenger} />
    <RouteWithSidebar exact path={Routes.Addcorporate.path} component={Addcorporate} />
    <RouteWithSidebar exact path={Routes.Viewcorporate.path} component={Viewcorporate} />
    <RouteWithSidebar exact path={Routes.Editcorporate.path} component={Editcorporate} />
    <RouteWithSidebar exact path={Routes.Enrolledit.path} component={Enrolledit} />
    <RouteWithSidebar exact path={Routes.Editenroll.path} component={Editenroll} />
    <RouteWithSidebar exact path={Routes.Addvehicle.path} component={Addvehicle} />
    <RouteWithSidebar exact path={Routes.Activetrips.path} component={Activetrips} />
    <RouteWithSidebar exact path={Routes.Completedtrips.path} component={Completedtrips} />
    <RouteWithSidebar exact path={Routes.Bookedtrips.path} component={Bookedtrips} />
    <RouteWithSidebar exact path={Routes.Cancelledtrips.path} component={Cancelledtrips} />
    <RouteWithSidebar exact path={Routes.Overall.path} component={Overall} />
    <RouteWithSidebar exact path={Routes.Providerstatement.path} component={Providerstatement} />
    <RouteWithSidebar exact path={Routes.Dailystatement.path} component={Dailystatement} />
    <RouteWithSidebar exact path={Routes.Monthlystatement.path} component={Monthlystatement} />
    <RouteWithSidebar exact path={Routes.yearlystatement.path} component={yearlystatement} />
    <RouteWithSidebar exact path={Routes.Paymentsetting.path} component={Paymentsetting} />
    <RouteWithSidebar exact path={Routes.Paymenthistory.path} component={Paymenthistory} />
    <RouteWithSidebar exact path={Routes.Sitesetting.path} component={Sitesettings} />
    <RouteWithSidebar exact path={Routes.Translation.path} component={Translation} />
    <RouteWithSidebar exact path={Routes.Terms.path} component={Terms} />
    <RouteWithSidebar exact path={Routes.Privacypolicy.path} component={Privacypolicy} />
    <RouteWithSidebar exact path={Routes.Help.path} component={Help} />
    <RouteWithSidebar exact path={Routes.Aboutus.path} component={Aboutus} />
    <RouteWithSidebar exact path={Routes.Faq.path} component={Faq} />
    <RouteWithSidebar exact path={Routes.Documentsrenewal.path} component={Documentsrenewal} />
    <RouteWithSidebar exact path={Routes.Adminprofile.path} component={Adminprofile} />
    <RouteWithSidebar exact path={Routes.Changepassword.path} component={Changepassword} />
    <RouteWithSidebar exact path={Routes.Editdocumentrenewal.path} component={Editdocumentrenewal} />
    <RouteWithSidebar exact path={Routes.Heatmap.path} component={Heatmap} />
    <RouteWithSidebar exact path={Routes.Map.path} component={Map} />
    <RouteWithSidebar exact path={Routes.Bookedrides.path} component={Bookedrides} />
    <RouteWithSidebar exact path={Routes.Completedrides.path} component={Completedrides} />
    <RouteWithSidebar exact path={Routes.Activerides.path} component={Activerides} />
    <RouteWithSidebar exact path={Routes.Cancelledrides.path} component={Cancelledrides} />
    <RouteWithSidebar exact path={Routes.Tripreports.path} component={Tripreports} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
