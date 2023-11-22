import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LandingPage from "../LandingPage/landingPage";
import Signup from "../signup/signup";
import HomePage from "../homePage/home";
import DoubleChiti from "../double/doubleChiti";
import Agent from "../agent/agent";
import DisplayChitfund from "../searching/Searching";
import SearchAuction from "../searchAuction/searchAuction";
import SearchAgent from "../searchingAgent/searchingAgent";
import SearchDouble from "../serchDouble/searchDouble";
import AuctionMember from "../auctionMember/auctionMember";
import DoubleForm from "../doubleChit/Double";
import AuctionChiti from "../auctionChiti/auctionChiti";
import ChitData from "../chitData/chitData";
import DoubleMember from "../doubleMember/doubleMember";
import AgentChiti from "../agentChiti/agentChiti";
import AgentMember from "../agentMember/agentMember";

function Routers() {
    return ( 
    <div >
        <Routes >
            <Route >
            <Route path = '/'exact element = { < LandingPage/> }/> 
            <Route path = '/signup'element = {<Signup /> }/> 
            <Route path = '/home'element = { < HomePage /> }/> 
            <Route path ='/double' element={<DoubleChiti/>}/>
            <Route path ='/agent' element={<Agent/>}/>
            <Route path = '/search' element={<DisplayChitfund/>}/>
            <Route path = '/searchAuction' element={<SearchAuction/>}/>
            <Route path = '/searchAgent' element={<SearchAgent/>}/>
            <Route path = '/searchDouble' element={<SearchDouble/>}/>
            <Route path ='/auctionMember' element={<AuctionMember/>}/>
            <Route path ='/Doubleform' element={<DoubleForm/>}/>
            <Route path ='/AuctionForm' element={<AuctionChiti/>}/>
            <Route path ='/chitData' element={<ChitData/>}/>
            <Route path ='/doubleMember' element={<DoubleMember/>}/>
            <Route path ='/agentChiti' element={<AgentChiti/>}/>
            <Route path ='/agentMember' element={<AgentMember/>}/>
            </Route> 
        </Routes> 
        </div>
    )
}
export default Routers;