import React from 'react';

export default function Header() {
    const styles = {
        header: {
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 5%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)', // Glassmorphism effect
            borderBottom: '1px solid #eaeaea',
            fontFamily: "'Inter', sans-serif"
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '800',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            color: '#000',
            textDecoration: 'none'
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            margin: 0,
            padding: 0
        },
        link: {
            textDecoration: 'none',
            color: '#555',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
        },
        cartIcon: {
            fontSize: '1.2rem',
            cursor: 'pointer',
            position: 'relative'
        }
    };

    return (
        <nav style={styles.header}>
            {/* Logo */}
            <a href="/" style={styles.logo}>THREADS.</a>

            {/* Navigation Links */}
            <ul style={styles.navLinks}>
                <li><a href="/" style={styles.link} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#555'}>Home</a></li>
                <li><a href="/about" style={styles.link} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#555'}>About</a></li>
                <li><a href="/contact" style={styles.link} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#555'}>Contact</a></li>
            </ul>

            {/* Utility Section (Cart/Search) */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span title="Search" style={{ cursor: 'pointer' }}>🔍</span>
                <div style={styles.cartIcon}>
                    🛒
                    <span style={{
                        position: 'absolute', top: '-8px', right: '-10px',
                        backgroundColor: '#000', color: '#fff', fontSize: '0.7rem',
                        padding: '2px 6px', borderRadius: '50%'
                    }}>0</span>
                </div>
            </div>
        </nav>
    );
}
