import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            Active
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions and reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People and user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
      <SlackLogo>
        <img
          src="https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-5nfqoyso.png"
          alt="logo"
        />
        <h4>
          <strong>slack.com</strong>
        </h4>
      </SlackLogo>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  height: 100%;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  position: relative;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  margin-top: 60px;
  > .MuiSvgIcon-root {
    background-color: white;
    color: #49274b;
    font-size: 18px;
    padding: 6px;
    border-radius: 50%;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;

    > .MuiSvgIcon-root {
      color: green;
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
    }
  }
`;

const SlackLogo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  > img {
    height: 50px;
  }

  > h4 {
    color: white;
  }
`;
