import React from 'react';
import Navbar from 'components/GlobalComponents/Navbar';
import Footer from 'components/GlobalComponents/Footer';
import styled from 'styled-components';

const DoctorsScreenWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px; /* Adding padding for content */
    background-color: #f5f5f5; /* Light background color */
`;

const DoctorsContent = styled.div`
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

const DoctorCard = styled.div`
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: translateY(-5px);
    }
`;

const DoctorName = styled.h3`
    margin-bottom: 10px;
    color: #333; /* Dark text color */
`;

const DoctorSpecialization = styled.p`
    margin-bottom: 10px;
    color: #666; /* Medium dark text color */
`;

const DoctorDescription = styled.p`
    margin-bottom: 10px;
    color: #777; /* Light text color */
`;

const DoctorImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover; /* Ensure the image covers the entire space */
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff; /* Blue color */
    color: #fff; /* White text color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #0056b3; /* Darker blue color on hover */
    }
`;

const DoctorScreen = () => {
    return (
        <DoctorsScreenWrapper>
            <Navbar />

            <DoctorsContent>
                <Section>
                    <Heading>Meet Our Doctors</Heading>
                    <DoctorCard>
                        <DoctorImage src="doctor1.jpg" alt="Doctor" />
                        <DoctorName>Dr. Modi</DoctorName>
                        <DoctorSpecialization>Cardiologist</DoctorSpecialization>
                        <DoctorDescription>
                            Dr. Modi is an experienced cardiologist with a passion for improving heart health.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lorem eu arcu consectetur venenatis.
                        </DoctorDescription>
                    </DoctorCard>

                    <Divider />

                    <DoctorCard>
                        <DoctorImage src="doctor2.jpg" alt="Doctor" />
                        <DoctorName>Dr. Pappu</DoctorName>
                        <DoctorSpecialization>Orthopedic Surgeon</DoctorSpecialization>
                        <DoctorDescription>
                            Dr. Pappu specializes in orthopedic surgery, providing expert care for bone and joint problems.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lorem eu arcu consectetur venenatis.
                        </DoctorDescription>
                    </DoctorCard>
                </Section>
            </DoctorsContent>

            <Footer />
        </DoctorsScreenWrapper>
    );
};

export default DoctorScreen;

