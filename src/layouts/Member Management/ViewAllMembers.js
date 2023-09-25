import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import Footer from 'examples/Footer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import Header from 'layouts/profile/components/Header';
import {Link, useNavigate} from 'react-router-dom';
const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

import './ViewAllMember.css'
function ViewAllMembers(props) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const toComponentB=(id)=>{
        navigate('/user-management/addMemberDetails',{state:{id:id}});
          }
    useEffect(() => {
        // Fetch data from the API
        axios.get('https://pgechs-mj6v.vercel.app/admin/getAllRegisterdMembers')
            .then(response => {
                setMembers(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <DashboardLayout
                sx={{
                    backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.info.main, 0.6),
                            rgba(gradients.info.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundPositionY: "50%",
                }}
            >
                <Header />
                <Container>
                    <div className="mt-4 mb-4 text-center">
                        <h2 style={{ color: 'white' }}>Member Table</h2>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Member ID</th>
                                    <th>Email</th>
                                    <th>Application Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr key={member._id}>
                                        <td>{member.MemberId}</td>
                                        <td>{member.email}</td>
                                        <td>{member.ApplicationStatus ? 'Approved' : 'Pending'}</td>
                                        <td>
                                        
                                            
                                                
                                                <button className="btn btn-primary" onClick={()=>{toComponentB(member._id)}}>Active</button>
                                   
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Container>
                <Footer />
            </DashboardLayout>
        </>

    );
}

export default ViewAllMembers;
