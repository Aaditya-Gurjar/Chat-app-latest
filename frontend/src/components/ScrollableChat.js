// import { Avatar } from "@chakra-ui/avatar";
// import { Tooltip } from "@chakra-ui/tooltip";
// import ScrollableFeed from "react-scrollable-feed";
// import {
//   isLastMessage,
//   isSameSender,
//   isSameSenderMargin,
//   isSameUser,
// } from "../config/ChatLogics";
// import { ChatState } from "../Context/ChatProvider";

// const ScrollableChat = ({ messages }) => {
//   const { user } = ChatState();

//   return (
//     <ScrollableFeed>
//       {messages &&
//         messages.map((m, i) => (
//           <div style={{ display: "flex" }} key={m._id}>
//             {(isSameSender(messages, m, i, user._id) ||
//               isLastMessage(messages, i, user._id)) && (
//               <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
//                 <Avatar
//                   mt="7px"
//                   mr={1}
//                   size="sm"
//                   cursor="pointer"
//                   name={m.sender.name}
//                   src={m.sender.pic}
//                 />
//               </Tooltip>
//             )}
//             <span
//               style={{
//                 backgroundColor: `${
//                   m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
//                 }`,
//                 marginLeft: isSameSenderMargin(messages, m, i, user._id),
//                 marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
//                 borderRadius: "20px",
//                 padding: "5px 15px",
//                 maxWidth: "75%",
//               }}
//             >
//               {m.content}
//             </span>
//           </div>
//         ))}
//     </ScrollableFeed>
//   );
// };

// export default ScrollableChat;




import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { useMemo } from "react";
import { FixedSizeList } from "react-window";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  const memoizedMessages = useMemo(() => {
    return messages.map((m, i) => ({
      ...m,
      isSameSender: isSameSender(messages, m, i, user._id),
      isLastMessage: isLastMessage(messages, i, user._id),
      marginLeft: isSameSenderMargin(messages, m, i, user._id),
      marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
    }));
  }, [messages, user._id]);

  const MessageRow = ({ index, style }) => {
    const m = memoizedMessages[index];
    return (
      <div style={{ display: "flex", ...style }} key={m._id}>
        {(m.isSameSender || m.isLastMessage) && (
          <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
            <Avatar
              mt="7px"
              mr={1}
              size="sm"
              cursor="pointer"
              name={m.sender.name}
              src={m.sender.pic}
            />
          </Tooltip>
        )}
        <span
          style={{
            backgroundColor: `${
              m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
            }`,
            marginLeft: m.marginLeft,
            marginTop: m.marginTop,
            borderRadius: "20px",
            padding: "5px 15px",
            maxWidth: "75%",
          }}
        >
          {m.content}
        </span>
      </div>
    );
  };

  return (
    <FixedSizeList
      height={400} // Adjust based on your UI
      width={"100%"}
      itemSize={50} // Approx height of each row
      itemCount={memoizedMessages.length}
      itemData={memoizedMessages}
    >
      {MessageRow}
    </FixedSizeList>
  );
};

export default ScrollableChat;
