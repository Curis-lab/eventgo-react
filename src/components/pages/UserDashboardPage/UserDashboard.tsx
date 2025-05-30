// import EventList from "../../templates/EventList";
// import { DataFetcher } from "../../../lib/axios";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import {  styled } from "@mui/material";
// import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useEffect } from "react";
import { useApi } from "../../../hooks/api";
import { useAuth } from "../../../providers/AuthProvider";

/**
 *
 * @returns
 * Dashboard Page
 * List of upcoming and past meetings
 * Quick access to create or join a meeting
 * Personalized meeting recommendations
 *
 */

// const StyledContainerWrapper = styled("div")({
//   display: "flex",
//   width: "80%",
//   marginLeft: "10%",
//   marginRight: "10%",
//   gap: "20px",
// });

const UserDashboardPage = () => {
  const {request} = useApi();
  const {isAuthenticated} = useAuth();
  
  const fetchData = async()=>{
    try{
      const response = await request('http://localhost:3000/api/auth/me');
      const result = await response.json();
      setData(result);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    if(isAuthenticated()){
      console.log('this is authcated')
      fetchData();
    }
  },[]);

  return (
    <>
      <div>Dashboard</div>
      {/* <Paper>Hello</Paper>
      <Typography variant="h2">Welcome, Nyan 👏</Typography>
      <StyledContainerWrapper>
        <Calendar date={date} onChange={(e) => handleDateSelection(e)} />
        <div>
          <div style={{ display: "flex" }}>
            <div>DropDown</div>
            <div>DropDown</div>
          </div>
          <EventList {...data} />
        </div>
      </StyledContainerWrapper> */}
      <div>Mentor Schedule</div>
      <div>Mentor Edit</div>
      <div>Mentor Availability</div>
    </>
  );
};

export default UserDashboardPage;
