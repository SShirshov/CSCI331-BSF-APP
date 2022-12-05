## CSCI331 BSF APP: Group 13
#### Features
- Contact info page
    - Users can fill out their name, email, subject, and message if they need to contact BSF about something.
- Message board for admin
    - Admin can view (and eventually respond to) all of the messages that have been sent by users through the contact info page. 
    
#### Members and website link
- Bryce Leighton's [website](http://csci331.cs.montana.edu:5050/entries)
- Simeon Shirshov's [website](http://csci331.cs.montana.edu:5069/entries)
- Kirsten Keblish's [website](http://csci331.cs.montana.edu:50xx/entries)

#### Presentation link
- link here

#### Creative objective
Our goal was to create a contact info page that users could fill out if they wanted to ask any 
questions to BSF or seek further information about a topic. We also wanted to create a messages 
page that a BSF admin could access so that they can view user's messages alongside the user's 
contact information. This would make it very simple for a BSF admin to respond to a user's
message via email.

#### Tech summary
We added routing into the website via ReactRouter to enable simple navigation through our website's pages.
The contact info page was constructed with jsx and the info fields had their information stored through 
state in the ContactInfo component. When a user presses send, the fields of information are sent to the backend
through an API endpoint we created that posts the user's information to our database. In the messages page,
we pull all of these messages from another query, and display the information in an MUI datagrid which presents
the data in a clean matter. We did not need to use additional .env variables.

#### Individual member notes
##### Bryce
- Created the routing functionality and pieces for our website
- Helped create the endpoints that were used to submit information for the contact info page.
- Hooked up the endpoints for sending and reading contact info messages
- Created the entire messages page for admin members to read messages that customers send from the contact info page
- Created the entire README
##### Simeon
- Stuff from footer
- Created the entire presentation
##### Kirsten
I did 

#### Conclusion
We learned that using ReactRouter for navigation in a React app is super simple and useful! Also creating endpoints 
for frontend/backend communication was fairly simple was we got the hang of it. Using an MUI datagrid to display the
user messages was also a nice way to display things for the BSF admin in a clean way without having to reinvent the wheel.
Overall, we were pretty happy with what we did, and can't think of anything we would do differently if we had the chance.

#### References
- [MUI](https://mui.com/) (for our datagrid component used in the messages page)

