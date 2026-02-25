import React from 'react';

export default function Contact(props) {
    const styles = {
        wrapper: {
            fontFamily: "'Inter', sans-serif",
            backgroundColor: '#fff',
            color: '#1a1a1a',
            minHeight: '100vh',
            padding: '80px 5%'
        },
        container: {
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '60px',
            alignItems: 'start'
        },
        heading: {
            fontSize: '3rem',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            marginBottom: '1rem'
        },
        subtext: {
            color: '#666',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            maxWidth: '500px'
        },
        inputGroup: { marginBottom: '20px' },
        label: {
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            marginBottom: '8px',
            color: '#999'
        },
        input: {
            width: '100%',
            padding: '15px 0',
            border: 'none',
            borderBottom: '1px solid #ddd',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s ease'
        },
        button: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '18px 40px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'opacity 0.3s ease'
        },
        infoBlock: { marginBottom: '40px' },
        infoTitle: { fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' },
        infoDetail: { color: '#555', textDecoration: 'none', display: 'block', marginBottom: '5px' }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                {/* Left Side: Contact Form */}
                <div>
                    <h1 style={styles.heading}>Get in Touch.</h1>
                    <p style={styles.subtext}>
                        Have a question about an order or just want to say hi? 
                        Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    
                    <form>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Full Name</label>
                            <input type="text" placeholder="John Doe" style={styles.input} />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input type="email" placeholder="john@example.com" style={styles.input} />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Subject</label>
                            <select style={{...styles.input, backgroundColor: 'transparent'}}>
                                <option>Order Status</option>
                                <option>Returns & Exchanges</option>
                                <option>Wholesale Inquiry</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Message</label>
                            <textarea rows="4" placeholder="How can we help?" style={{...styles.input, resize: 'none'}} />
                        </div>
                        <button 
                            type="button" 
                            style={styles.button}
                            onMouseOver={(e) => e.target.style.opacity = '0.8'}
                            onMouseOut={(e) => e.target.style.opacity = '1'}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side: Info & Brand Details */}
                <div style={{ paddingLeft: '20px', borderLeft: '1px solid #f0f0f0' }}>
                    <div style={styles.infoBlock}>
                        <h3 style={styles.infoTitle}>Flagship Store</h3>
                        <p style={styles.infoDetail}>123 Fashion Ave, Suite 400</p>
                        <p style={styles.infoDetail}>New York, NY 10001</p>
                    </div>

                    <div style={styles.infoBlock}>
                        <h3 style={styles.infoTitle}>Customer Support</h3>
                        <a href="mailto:hello@threads.com" style={styles.infoDetail}>hello@threads.com</a>
                        <p style={styles.infoDetail}>+1 (555) 000-0000</p>
                    </div>

                    <div style={styles.infoBlock}>
                        <h3 style={styles.infoTitle}>Business Hours</h3>
                        <p style={styles.infoDetail}>Mon — Fri: 9am – 6pm</p>
                        <p style={styles.infoDetail}>Sat — Sun: 10am – 4pm</p>
                    </div>

                    <div style={styles.infoBlock}>
                        <h3 style={styles.infoTitle}>Follow Us</h3>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem' }}>
                            <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Instagram</a>
                            <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Pinterest</a>
                            <a href="#" style={{ color: '#000', textDecoration: 'none' }}>TikTok</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
