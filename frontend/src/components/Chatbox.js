import { Box, Button } from "@chakra-ui/react"; // Import Chakra UI components
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      {/* SingleChat Component */}
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />

     
    </Box>
  );
};

export default Chatbox;
