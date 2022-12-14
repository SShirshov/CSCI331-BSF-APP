import logo from '../components/BSF.jpeg';
import "./ContactInfo.css";
import {useState} from "react";
import axios from "axios";

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
            <img class = "img-logo" src={logo} alt="Logo" />
            <section class="mb-4">


                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" value={name ?? ''} name="name" class="form-control" placeholder={"Bobby Joe"} onChange={(e) => setName(e.target.value)}/>
                                            <label for="name" class="">Name</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" value={email ?? ''} name="email" class="form-control" placeholder={"epicskier@shred.com"} onChange={(e) => setEmail(e.target.value)}/>
                                            <label for="email" class="">Email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" value={subject ?? ''} name="subject" class="form-control" placeholder={"Questions about lessons"} onChange={(e) => setSubject(e.target.value)}/>
                                            <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" value={message ?? ''} name="message" rows="2" class="form-control md-textarea" placeholder={"I wanted to know more about..."} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <label for="message">Message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onClick={submitMessage}>Send</a>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>2339 Birdie Drive, Bozeman, MT 59715</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>(406) 587 2445</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>admin@bridgerskifoundation.org</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}
export default ContactInfo;
