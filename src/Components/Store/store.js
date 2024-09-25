import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./Reducers/NewsReducer";
import NavBarReducer from "./Reducers/NavBarReducer";
import DiscoverReducer from "./Reducers/DiscoverReducer";
import MiniCardReducer from "./Reducers/MiniCardReducer";
import TenderMReducer from "./Reducers/TenderMReducer";
import TenderDReducer from "./Reducers/TenderDReducer";
import TabDetReducer from "./Reducers/TabDetReducer";
import socialResponseReducer from "./Reducers/socialresponse";
import CertificatesReducer from "./Reducers/CertificatesReducer";
import StatementsReducer from "./Reducers/StatementsReducer";
import UserReducer from "./Reducers/UserReducer";
import GallaryReducer from "./Reducers/GallaryReducer";
import UserPagereducer from "./Reducers/UserPageReducer";
import DyRepReducer from "./Reducers/DyRepReducer";
import OneNewsReducer from "./Reducers/OneNewsReducer";
import ContactusReducer from "./Reducers/ContactusReducer";
import StaticPageByID from "./Reducers/StaticPageByID";
import SecurityFetch from "./Reducers/SecurityFetch";
import loginReducer from "./Reducers/LoginReducer";
import CardsReducer from "./Reducers/CardsReducer"

export const store = configureStore({
  reducer: {
    CardData:CardsReducer,
    About: NewsReducer,
    NavArray: NavBarReducer,
    Discover: DiscoverReducer,
    miniCardsData: MiniCardReducer,
    TenderM: TenderMReducer,
    TenderD: TenderDReducer,
    TabDet: TabDetReducer,
    Social: socialResponseReducer,
    Certificate: CertificatesReducer,
    Statements: StatementsReducer,
    Users: UserReducer,
    GallaryData: GallaryReducer,
    UserPage: UserPagereducer,
    DyRep: DyRepReducer,
    OneNews: OneNewsReducer,
    Contactus: ContactusReducer,
    StaticPageByID: StaticPageByID,
    Security: SecurityFetch,
    auth: loginReducer
  },
});
