import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
  Stack,
  Typography,
} from "@mui/material";
import OrderItem from "../Components/OrderItem";

const orders = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    companyName: "Tech Solutions",
    email: "john.doe@example.com",
    mobileNumber: "+1234567890",
    fieldOfWork: "Software Development",
    requiredSkills: { skill1: "React", skill2: "Node.js" },
    projectDescription: "Build an e-commerce platform",
    additionalMessage: "Looking for a long-term collaboration",
    fileAttachment: "project_specifications.pdf",
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Smith",
    companyName: "AI Innovators",
    email: "alice.smith@example.com",
    mobileNumber: "+1987654321",
    fieldOfWork: "Artificial Intelligence",
    requiredSkills: { skill1: "Python", skill2: "TensorFlow" },
    projectDescription: "AI model for image recognition",
    additionalMessage: "Need an experienced ML engineer",
    fileAttachment: "ai_project_details.docx",
  },
  {
    id: 3,
    firstName: "Robert",
    lastName: "Brown",
    companyName: "Cloud Solutions",
    email: "robert.brown@example.com",
    mobileNumber: "+1543219876",
    fieldOfWork: "Cloud Computing",
    requiredSkills: { skill1: "AWS", skill2: "Kubernetes" },
    projectDescription: "Deploy a cloud-based application",
    additionalMessage: "Must have security expertise",
    fileAttachment: "cloud_architecture.pdf",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Clark",
    companyName: "Web Experts",
    email: "emily.clark@example.com",
    mobileNumber: "+1654321987",
    fieldOfWork: "Web Development",
    requiredSkills: { skill1: "Vue.js", skill2: "Django" },
    projectDescription: "Build a web-based CRM system",
    additionalMessage: "Looking for full-stack developers",
    fileAttachment: "crm_design_sketches.png",
  },{
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    companyName: "Finance Tech",
    email: "david.wilson@example.com",
    mobileNumber: "+1789654321",
    fieldOfWork: "FinTech",
    requiredSkills: { skill1: "Blockchain", skill2: "Solidity" },
    projectDescription: "Develop a cryptocurrency wallet",
    additionalMessage: "Security is the top priority",
    fileAttachment: "wallet_specs.docx",
  },
  {
    id: 6,
    firstName: "Sophia",
    lastName: "Martinez",
    companyName: "Marketing Pros",
    email: "sophia.martinez@example.com",
    mobileNumber: "+1321987654",
    fieldOfWork: "Digital Marketing",
    requiredSkills: { skill1: "SEO", skill2: "Google Ads" },
    projectDescription: "Improve website traffic",
    additionalMessage: "Need an expert in PPC campaigns",
    fileAttachment: "marketing_strategy.pdf",
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Garcia",
    companyName: "Data Analytics Inc.",
    email: "daniel.garcia@example.com",
    mobileNumber: "+1432198765",
    fieldOfWork: "Data Science",
    requiredSkills: { skill1: "Pandas", skill2: "SQL" },
    projectDescription: "Analyze e-commerce trends",
    additionalMessage: "Looking for insights into user behavior",
    fileAttachment: "data_analysis.xlsx",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Hernandez",
    companyName: "EduTech",
    email: "olivia.hernandez@example.com",
    mobileNumber: "+1908765432",
    fieldOfWork: "Education Technology",
    requiredSkills: { skill1: "React Native", skill2: "Firebase" },
    projectDescription: "Build a mobile learning app",
    additionalMessage: "Interactive quizzes are a must",
    fileAttachment: "elearning_mockup.jpg",
  },
  {
    id: 9,
    firstName: "Matthew",
    lastName: "Lopez",
    companyName: "Healthcare Systems",
    email: "matthew.lopez@example.com",
    mobileNumber: "+1765432198",
    fieldOfWork: "Healthcare IT",
    requiredSkills: { skill1: "Java", skill2: "Spring Boot" },
    projectDescription: "Develop an EHR system",
    additionalMessage: "HIPAA compliance required",
    fileAttachment: "ehr_design.pdf",
  },
  {
    id: 10,
    firstName: "Isabella",
    lastName: "Gonzalez",
    companyName: "E-Commerce Hub",
    email: "isabella.gonzalez@example.com",
    mobileNumber: "+1345678901",
    fieldOfWork: "E-Commerce",
    requiredSkills: { skill1: "Magento", skill2: "PHP" },
    projectDescription: "Optimize an online store",
    additionalMessage: "Improve performance and UX",
    fileAttachment: "store_analysis.docx",
  },
];


const Orders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is below 'md' (mobile)

  return (
    <Stack
      sx={{
        mt: 10,
        ml: !isMobile && 30,
        gap:2,
        p:2
      }}
    >
        <Typography variant="h3" ml={2}>
            Clients Orders
        </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Field of Work</TableCell>
              <TableCell>Required Skills</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Additional Message</TableCell>
              <TableCell>Attachment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Orders;
