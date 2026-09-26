import "./contactDialog.css";
import React, { useState } from "react";
import { EmailLogo } from "./EmailLogo.jsx";

export function ContactDialog({ profile }) {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * "NOTSENT": no message is sent
     * "ISSENDING": message issent the response is not received yet
     * "SUCCEED": message is sent with success
     * "FAILED": message is sent but failed
     */
    const [sentStatus, setSentStatus] = useState("NOTSENT");

    async function messageSubmitCallback(e) {
        e.preventDefault();
        try {
            setSentStatus("ISSENDING");

            const formData = new FormData(e.currentTarget);
            let body = { name: formData.get("name"), email: formData.get("email"), message: formData.get("message") };

            let url = "https://lls7v5jw7g.execute-api.us-east-1.amazonaws.com/prod/contact";

            let response = await fetch(url, { method: POST, body: JSON.stringify(body) });

            response.ok ? setSentStatus("SUCCEED") : setSentStatus("FAILED");
        } catch (error) {
            setSentStatus("FAILED");
        }
    }

    function resultFormCallback(e) {
        e.preventDefault();
        setIsOpen(false);
        setSentStatus("NOTSENT");
    }

    return (
        <>
            <button className="button-main" onClick={() => setIsOpen(true)}>
                {profile.email}
                <EmailLogo className="link-icon" />
            </button>

            {isOpen && (
                <div className="message-form modal-overlay">
                    <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title">
                        <button
                            className="close-button"
                            onClick={() => {
                                setIsOpen(false);
                                setSentStatus("NOTSENT");
                            }}
                            aria-label="Close dialog"
                        >
                            ×
                        </button>
                        {(sentStatus == "NOTSENT" || sentStatus == "ISSENDING") && (
                            <form onSubmit={messageSubmitCallback}>
                                <input type="text" name="name" placeholder="Your name" required />

                                <input type="email" name="email" placeholder="Your email" required />

                                <textarea placeholder="Your message" name="message" rows="5" required />

                                <button type="submit" disabled={sentStatus === "ISSENDING"}>
                                    {sentStatus == "NOTSENT" ? "Send message" : "Sending ..."}
                                </button>
                            </form>
                        )}
                        {(sentStatus == "SUCCEED" || sentStatus == "FAILED") && (
                            <form onSubmit={resultFormCallback} className={`${sentStatus}-form`}>
                                <p>
                                    {sentStatus == "SUCCEED"
                                        ? `Thank you for your message! We've sent a confirmation email to your inbox.
                                                Please click the verification link to complete your submission.`
                                        : `Sorry, we couldn't process your message.
                                                    Please check your email address and try again.`}
                                </p>
                                <button type="submit">Close</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
