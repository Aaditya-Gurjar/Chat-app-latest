// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/Signup";

// function Homepage() {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) history.push("/chats");
//   }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text fontSize="4xl" fontFamily="Work sans">
//           Talk-A-Tive
//         </Text>
//       </Box>
//       <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded">
//           <TabList mb="1em">
//             <Tab>Login</Tab>
//             <Tab>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// }

// export default Homepage;

import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Button,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Login from "../components/Authentication/Login";

function Homepage() {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  const allQuestions = [
    {
      question: "What is the role of a pharmacist in patient care?",
      answer:
        "A pharmacist plays a crucial role in patient care by ensuring the safe and effective use of medications, counseling patients on proper medication usage, and providing drug-related information to both patients and healthcare providers."
    },
    {
      question: "What are the common side effects of antibiotics?",
      answer:
        "Common side effects of antibiotics include nausea, diarrhea, allergic reactions, and yeast infections. Serious side effects can include liver damage or severe allergic reactions in rare cases."
    },
    {
      question: "How do you handle a situation where a prescribed medication has potential drug interactions?",
      answer:
        "I would review the patient's medical history, consult with the prescribing physician, and suggest an alternative medication or dosage adjustment if necessary. Patient safety is always the top priority."
    },
    {
      question: "Can you explain the difference between a generic and a branded drug?",
      answer:
        "A generic drug contains the same active ingredients as a branded drug and works the same way in the body, but it is usually less expensive."
    },
    {
      question: "What steps would you take to ensure proper storage of medications?",
      answer:
        "I would ensure medications are stored according to their specific requirements, such as temperature, humidity, and light conditions, and regularly check for expired stock."
    },
    {
      question: "How do you educate patients about medication adherence?",
      answer:
        "I explain the importance of taking medications as prescribed, address any concerns or misconceptions, and provide tools like pill organizers or reminders if needed."
    },
    {
      question: "What are the different routes of drug administration?",
      answer:
        "The routes of drug administration include oral, intravenous, intramuscular, subcutaneous, topical, and inhalation, depending on the drug's formulation and intended use."
    },
    {
      question: "What is the importance of pharmacovigilance?",
      answer:
        "Pharmacovigilance is crucial for monitoring the safety of medications, identifying adverse drug reactions, and ensuring public health by minimizing risks associated with drug use."
    },
    {
      question: "How do you counsel a patient who is starting on a new medication?",
      answer:
        "I explain the purpose of the medication, its correct usage, possible side effects, and any precautions or interactions to ensure the patient is well-informed and adheres to the treatment plan."
    },
    {
      question: "What measures do you take to prevent dispensing errors?",
      answer:
        "I double-check prescriptions, verify patient information, and use barcode scanning systems to minimize errors during the dispensing process."
    },
    {
      question: "What is therapeutic drug monitoring (TDM)?",
      answer:
        "Therapeutic drug monitoring involves measuring drug levels in the blood to ensure the medication's efficacy and safety, particularly for drugs with a narrow therapeutic index."
    },
    {
      question: "How do you handle a customer complaint about a medication?",
      answer:
        "I listen to the customer's concerns, investigate the issue, consult with healthcare providers if needed, and provide an appropriate resolution while maintaining professionalism."
    },
    {
      question: "What is the significance of drug expiration dates?",
      answer:
        "Drug expiration dates indicate the period during which a medication is expected to remain effective and safe. Using medications past their expiration date can reduce efficacy or pose health risks."
    },
    {
      question: "How do you stay updated on new medications and treatments?",
      answer:
        "I regularly attend professional workshops, read medical journals, and participate in continuing education programs to stay informed about advancements in the field."
    },
    {
      question: "What are the key considerations when compounding medications?",
      answer:
        "Key considerations include using accurate measurements, maintaining a sterile environment, and ensuring compatibility and stability of the compounded formulation."
    },
    {
      question: "How would you handle a patient requesting an over-the-counter medication for a potentially serious condition?",
      answer:
        "I would assess the patient's symptoms, provide initial advice, and recommend consulting a healthcare provider for a proper diagnosis and treatment plan."
    },
    {
      question: "What steps do you take to ensure patient confidentiality?",
      answer:
        "I follow HIPAA guidelines, securely store patient records, and avoid discussing sensitive information in public areas to protect patient privacy."
    },
    {
      question: "Can you explain the difference between pharmacokinetics and pharmacodynamics?",
      answer:
        "Pharmacokinetics refers to how the body processes a drug (absorption, distribution, metabolism, and excretion), while pharmacodynamics studies the drug's effects on the body."
    },
    {
      question: "How do you address medication shortages in the pharmacy?",
      answer:
        "I communicate with suppliers, identify alternative medications, and work with healthcare providers to adjust prescriptions if necessary."
    },
    {
      question: "What qualities make an effective pharmacist?",
      answer:
        "An effective pharmacist possesses strong communication skills, attention to detail, problem-solving abilities, and a commitment to patient care and safety."
    }
  ];

  const totalPages = Math.ceil(allQuestions.length / itemsPerPage);
  const currentQuestions = allQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container maxW="xl" centerContent>
      {/* Header Section */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Pharmacy Interview Q&A
        </Text>
      </Box>

      {/* Content Section */}
      {!showLogin ? (
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Questions</Tab>
              <Tab>Answers</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {currentQuestions.map((item, index) => (
                  <Text key={index} fontSize="lg" mb={3}>
                    {index + 1 + (currentPage - 1) * itemsPerPage}. {item.question}
                  </Text>
                ))}
              </TabPanel>
              <TabPanel>
                {currentQuestions.map((item, index) => (
                  <Text key={index} fontSize="lg" mb={3}>
                    {index + 1 + (currentPage - 1) * itemsPerPage}. {item.answer}
                  </Text>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Stack direction="row" justify="space-between" mt={4}>
            <IconButton
              aria-label="Previous Page"
              icon={<ChevronLeftIcon />}
              onClick={handlePreviousPage}
              isDisabled={currentPage === 1}
            />
            <Text alignSelf="center">
              Page {currentPage} of {totalPages}
            </Text>
            <IconButton
              aria-label="Next Page"
              icon={<ChevronRightIcon />}
              onClick={handleNextPage}
              isDisabled={currentPage === totalPages}
            />
          </Stack>
          <Button
            mt={4}
            colorScheme="teal"
            onClick={handleShowLogin}
            w="full"
          >
            Latest Interview Questions and Answers
          </Button>
        </Box>
      ) : (
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Login />
        </Box>
      )}
    </Container>
  );
}

export default Homepage;
