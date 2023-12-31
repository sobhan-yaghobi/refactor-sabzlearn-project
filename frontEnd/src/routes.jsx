import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ContactUs from "./pages/ContactUs/ContactUs";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";

import PAdminPrivate from "./Components/PAdminPrivate/PAdminPrivate";
import PanelAdmin from "./pages/PanelAdmin/PanelAdmin";
import Menus from "./pages/PanelAdmin/Menus/Menus";
import Users from "./pages/PanelAdmin/Users/Users";
import Article from "./pages/PanelAdmin/Article/Article";
import Products from "./pages/PanelAdmin/Products/Products";
import Main from "./pages/PanelAdmin/Main/Main";
import Notification from "./pages/PanelAdmin/Notification/Notification";
import DiscountCode from "./pages/PanelAdmin/DiscountCode/DiscountCode";
import Orders from "./pages/PanelAdmin/Orders/Orders";
import PrevArticle from "./pages/PanelAdmin/PrevArticle/PrevArticle";
import Categories from "./pages/PanelAdmin/Categories/Categories";
import Session from "./pages/PanelAdmin/Session/Session";
import Comments from "./pages/PanelAdmin/Comments/Comments";
import TicketsAdmin from "./pages/PanelAdmin/Tickets/TicketsAdmin";

import PUserPrivate from "./Components/PUserPrivate/PUserPrivate";
import PanelUser from "./pages/PanelUser/PanelUser";
import OrdersUser from "./pages/PanelUser/Orders/Orders";
import RegisterCourse from "./pages/PanelUser/RegisterCourse/RegisterCourse";
import Tickets from "./pages/PanelUser/Tickets/Tickets";
import EditUser from "./pages/PanelUser/EditUser/EditUser";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Course/:courseID", element: <Product /> },
  { path: "/Category/:categoryID", element: <Category /> },
  {
    path: "/Blog/:ArticleID",
    element: (
      <PUserPrivate>
        <Blog />
      </PUserPrivate>
    ),
  },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/NotFound", element: <NotFound /> },
  { path: "/Search/:valueSearch", element: <Search /> },
  {
    path: "/p-Admin",
    element: (
      <PAdminPrivate>
        <PanelAdmin></PanelAdmin>
      </PAdminPrivate>
    ),
    children: [
      { path: "", element: <Main></Main> },
      { path: "Main", element: <Main></Main> },
      { path: "Menus", element: <Menus></Menus> },
      { path: "Users", element: <Users></Users> },
      { path: "Article", element: <Article></Article> },
      { path: "Products", element: <Products></Products> },
      { path: "Orders", element: <Orders></Orders> },
      { path: "DiscountCode", element: <DiscountCode></DiscountCode> },
      { path: "Notification", element: <Notification></Notification> },
      { path: "PrevArticle", element: <PrevArticle></PrevArticle> },
      { path: "Categories", element: <Categories></Categories> },
      { path: "Session", element: <Session></Session> },
      { path: "Comments", element: <Comments></Comments> },
      { path: "Tickets", element: <TicketsAdmin></TicketsAdmin> },
    ],
  },
  {
    path: "/my-account",
    element: (
      <PUserPrivate>
        <PanelUser></PanelUser>
      </PUserPrivate>
    ),
    children: [
      { path: "", element: <OrdersUser></OrdersUser> },
      { path: "Main", element: <OrdersUser></OrdersUser> },
      { path: "registerCourse", element: <RegisterCourse></RegisterCourse> },
      { path: "Tickets", element: <Tickets></Tickets> },
      { path: "Tickets", element: <Tickets></Tickets> },
      { path: "EditUser", element: <EditUser></EditUser> },
    ],
  },
];

export default routes;
