import { useState } from 'react';
import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/backgroundImage.webp";
import { SocialIcon } from "react-social-icons";
import './OtherWaysToConnectSection.css';

const OtherWaysToConnectSection = () => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const socialButtons = [
        {
            id: 'google',
            network: 'google',
            url: 'https://chat.google.com',
            label: 'Google'
        },
        {
            id: 'whatsapp',
            network: 'whatsapp',
            url: 'https://wa.me/your-number',
            label: 'WhatsApp'
        },
        {
            id: 'discord',
            network: 'discord',
            url: 'https://discord.gg/your-invite-link',
            label: 'Discord'
        }
    ];

    return (
        <Section
            backgroundColor="#EAEAEA"
            className="other-ways-to-connect-section"
        >
            <div className="other-ways-to-connect-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <h1 className="other-ways-to-connect-title">Other Ways To Connect</h1>
                <p className="other-ways-to-connect-description">
                    Stay connected and be a part of our growing community through your favorite platforms. 
                    Click below to join our groups and chats directly:
                </p>
                <div className="other-ways-to-connect-buttons">
                    {socialButtons.map((button) => (
                        <button 
                            key={button.id}
                            className="other-ways-to-connect-button"
                            onMouseEnter={() => setHoveredButton(button.id)}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            <SocialIcon
                                network={button.network}
                                url={button.url}
                                target="_blank"
                                bgColor="transparent"
                                fgColor="#000000"
                            />
                            <span>{hoveredButton === button.id ? 'Join Now' : button.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default OtherWaysToConnectSection;