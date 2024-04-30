import React from 'react';
import Navbar from 'components/GlobalComponents/Navbar';
import Footer from 'components/GlobalComponents/Footer';
import styled from 'styled-components';

const AboutScreenWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px; /* Adding padding for content */
    background-color: #f5f5f5; /* Light background color */
`;

const AboutContent = styled.div`
    flex-grow: 1; /* Allow the content to grow to fill available space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Section = styled.section`
    margin-bottom: 40px;
    padding: 20px; /* Adding padding for sections */
    background-color: #fff; /* White background color for sections */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Drop shadow */
`;

const Heading = styled.h1`
    margin-bottom: 20px;
    color: #333; /* Dark text color */
`;

const SubHeading = styled.h2`
    margin-bottom: 10px;
    color: #666; /* Medium dark text color */
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
    color: #777; /* Light text color */
`;

const List = styled.ul`
    margin-bottom: 10px;
    color: #777; /* Light text color */
`;

const ListItem = styled.li`
    margin-bottom: 5px;
    color: #777; /* Light text color */
`;

const ContactInfo = styled.div`
    margin-top: 20px;
    color: #777; /* Light text color */
`;

const AboutScreen = () => {
    return (
        <AboutScreenWrapper>
            <Navbar />

            <AboutContent>
                <Section>
                    <Heading>About Our Hospital Management System</Heading>
                    <Paragraph>
                        Our Hospital Management System is designed to streamline administrative tasks and enhance the efficiency of healthcare facilities.
                    </Paragraph>
                    <Paragraph>
                        Features include patient management, appointment scheduling, staff management, inventory management, billing, and more.
                    </Paragraph>
                    <Paragraph>
                        We are committed to providing innovative solutions that improve patient care and optimize hospital operations.
                    </Paragraph>
                </Section>

                <Section>
                    <SubHeading>Key Features</SubHeading>
                    <List>
                        <ListItem>Patient Management</ListItem>
                        <ListItem>Appointment Scheduling</ListItem>
                        <ListItem>Staff Management</ListItem>
                        <ListItem>Inventory Management</ListItem>
                        <ListItem>Billing and Invoicing</ListItem>
                        <ListItem>Electronic Health Records (EHR)</ListItem>
                        <ListItem>Reporting and Analytics</ListItem>
                        <ListItem>Integration with Laboratory and Pharmacy Systems</ListItem>
                    </List>
                </Section>

                <Section>
                    <SubHeading>Our Mission</SubHeading>
                    <Paragraph>
                        Our mission is to empower healthcare providers with advanced technology solutions, enabling them to deliver high-quality care, improve patient outcomes, and enhance operational efficiency.
                    </Paragraph>
                </Section>

                <Section>
                    <SubHeading>Contact Us</SubHeading>
                    <ContactInfo>
                        <Paragraph>If you have any questions or inquiries, please feel free to contact us:</Paragraph>
                        <Paragraph>Email: info@hospitalmanagement.com</Paragraph>
                        <Paragraph>Phone: +1 (123) 456-7890</Paragraph>
                    </ContactInfo>
                </Section>
            </AboutContent>

            <Footer />
        </AboutScreenWrapper>
    );
};

export default AboutScreen;
