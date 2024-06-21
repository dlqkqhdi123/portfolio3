import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const ContactContainer = styled.section`
  padding: 100px 20px;
  background: #112240;
  color: white;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #64ffda;
`;

const ContactText = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #ccd6f6;
`;

const EmailLink = styled.a`
  color: #64ffda;
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const GuestBookContainer = styled.div`
  margin-top: 40px;
  text-align: left;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  background: #0a192f;
  border-radius: 8px;
`;

const GuestBookHeading = styled.h3`
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #64ffda;
`;

const GuestBookForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GuestBookTextarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ccd6f6;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #64ffda;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #52ccbe;
  }
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const MessageItem = styled.li`
  background: #0a192f;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #ccd6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    color: #ff4b4b;
  }
`;

const ContactSection = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Load messages from local storage on mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("guestbookMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      console.log("Loaded messages from local storage:", parsedMessages);
      setMessages(parsedMessages);
    } else {
      console.log("No messages found in local storage.");
    }
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      console.log("Saving messages to local storage:", messages);
      localStorage.setItem("guestbookMessages", JSON.stringify(messages));
    } else {
      console.log("No messages to save to local storage.");
      localStorage.removeItem("guestbookMessages");
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const newMessages = [...messages, message];
      setMessages(newMessages);
      setMessage("");
      console.log("New messages:", newMessages);
    }
  };

  const handleDelete = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
    console.log("Message deleted:", newMessages);
  };

  return (
    <Element name="contact">
      <ContactContainer>
        <ContactHeading>Contact</ContactHeading>
        <ContactText>
          my email address:{" "}
          <EmailLink href="mailto:dlrjs6949@gmail.com">
            dlrjs6949@gmail.com
          </EmailLink>
        </ContactText>
        <GuestBookContainer>
          <GuestBookHeading>Guest Book</GuestBookHeading>
          <GuestBookForm onSubmit={handleSubmit}>
            <GuestBookTextarea
              rows="4"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </GuestBookForm>
          <MessageList>
            {messages.map((msg, index) => (
              <MessageItem key={index}>
                {msg}
                <DeleteButton onClick={() => handleDelete(index)}>
                  ×
                </DeleteButton>
              </MessageItem>
            ))}
          </MessageList>
        </GuestBookContainer>
      </ContactContainer>
    </Element>
  );
};

export default ContactSection;
