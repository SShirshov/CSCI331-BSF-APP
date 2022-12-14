// import Map from '../components/BSFMap.PNG';
import Map from './Map'
import "./ContactInfo.css";
import {useState} from "react";
import axios from "axios";

const location = {
    address: '2339 Birdie Dr, Bozeman, MT 59715',
    lat: 45.703502, 
    lng: -111.026186,
  }

const ContactInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // CREATE (POST)
    function submitMessage() {
        axios.post(`${process.env.REACT_APP_HOST}/api/create_message`, { name: name, email: email, subject: subject, message: message })
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <>
            <section class="mb-4">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                
                    <p id= "contact-message" class= "text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5 contact-content">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="name" class="">Name</label>
                                        <input type="text" id="name" value={name ?? ''} name="name" class="form-control" placeholder={"Bobby Joe"} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="email" class="">Email</label>
                                        <input type="text" id="email" value={email ?? ''} name="email" class="form-control" placeholder={"epicskier@shred.com"} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label for="subject" class="">Subject</label>
                                        <input type="text" id="subject" value={subject ?? ''} name="subject" class="form-control" placeholder={"Questions about lessons"} onChange={(e) => setSubject(e.target.value)}/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <label for="message">Message</label>
                                        <textarea type="text" id="message" value={message ?? ''} name="message" rows="2" class="form-control md-textarea" placeholder={"I wanted to know more about..."} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="btn btn-primary text-center text-md-left">
                            <a onClick={submitMessage}>Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    </div>
            </section>

            <div class="container2">
                <div class="row">
                    <div class="col">
                    <ul id= "address" class="list-unstyled" >
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <h3>Contact Info</h3>
                            </li>
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p class= "contact-title">Street Address: </p>
                                <p>2339 Birdie Drive, Bozeman, MT 59715</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class= "contact-title">Phone Number: </p>
                                <p>(406) 587 2445</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p class= "contact-title">Email: </p>
                                <p>admin@bridgerskifoundation.org</p>
                            </li>
                        </ul>
                    </div>
                <div class="col">
                <ul id="hours" class="list-unstyled" >
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <h3>Office Hours</h3>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p class= "contact-title">Sept-May:</p>
                                <p> 9:00 a.m. to 2:00 p.m.,</p>
                                <p>Monday-Thursday</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p class= "contact-title">June - Aug:</p>
                                <p>10 a.m. - 1:00 p.m.,</p>
                                <p>Tues, Wed, Thurs.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* <div class="row">
            

                        
                        </div> */}
                        {/* <img class = "img-map" src={Map} alt="Map" /> */}
                        <div id="footerMargin">
                         <Map location={location} zoomLevel={17}/>
                         </div>
        </>
    )
}
export default ContactInfo;
